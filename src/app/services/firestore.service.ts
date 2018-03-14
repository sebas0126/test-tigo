import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';

import { Const } from '../classes/const';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  addData(user) {
    return this.db.doc(`${Const.USER_DB}/${user.id}`).set(user);
  }

  removeData(id){
    return this.db.doc(`${Const.USER_DB}/${id}`).delete();
  }

  removeEmail(id){
    return this.db.doc(`${Const.EMAIL_DB}/${id}`).delete();
  }

  getData(){
    return this.db.collection(Const.USER_DB).valueChanges();
  }

  getEmails(){
    return this.db.collection(Const.EMAIL_DB).valueChanges();
  }

  addEmail(user){
    return this.db.doc(`${Const.EMAIL_DB}/${user.id}`).set({email: user.email, id: user.id});
  }

}
