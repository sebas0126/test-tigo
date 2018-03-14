import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../../services/firestore.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users = [];
  private fsUsers: any;
  private fsEmails: any;

  constructor(
    private fs: FirestoreService,
    private httpSrvc: HttpService
  ) { }

  ngOnInit() {
    this.httpSrvc.getData().subscribe(data => {
      let aux: any = data;
      console.log(aux);
      this.users = aux;
    })

    this.fs.getData().subscribe(data => {
      this.fsUsers = data;
    })

    this.fs.getEmails().subscribe(data => {
      this.fsEmails = data;
    })

  }

  deleteUser(id){
    this.fs.removeData(id).then(res =>{
      console.log(res);
    })
  }

  storeUser(user){
    this.fs.addData(user).then(res => {
      console.log(res);
    })
  }

  deleteEmail(id){
    this.fs.removeEmail(id).then(res =>{
      console.log(res);
    })
  }

  storeEmail(user){
    this.fs.addEmail(user).then(res => {
      console.log(res);
    })
  }

}
