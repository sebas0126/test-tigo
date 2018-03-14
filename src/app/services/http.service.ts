import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
