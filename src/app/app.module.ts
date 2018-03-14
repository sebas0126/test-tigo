import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

import { FirestoreService } from './services/firestore.service';
import { HttpService } from './services/http.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

var config = {
  apiKey: "AIzaSyCKUZHLL8X5SinUSNvWhksFTUQpQX8Nss8",
  authDomain: "app-tigo.firebaseapp.com",
  databaseURL: "https://app-tigo.firebaseio.com",
  projectId: "app-tigo",
  storageBucket: "",
  messagingSenderId: "16639250421"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [FirestoreService, HttpService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
