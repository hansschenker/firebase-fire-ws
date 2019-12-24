import { NgModule } from "@angular/core";
// Firebase Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireMessagingModule } from "@angular/fire/messaging";

// Firebase Fire Services
import { AuthApiService } from "./auth-api.service";
import { FirestoreApiService } from "./firestore-api.service";
import { StorageApiService } from "./storage-api.service";
import { MessagingApiService } from "./messaging-api.service";

const firebaseConfig = {
  apiKey: "AIzaSyA-aucYLszXbbs9KuW7FIc-H6t95Qip17k",
  authDomain: "esmgram.firebaseapp.com",
  databaseURL: "https://esmgram.firebaseio.com",
  projectId: "esmgram",
  storageBucket: "esmgram.appspot.com",
  messagingSenderId: "1071864807547",
  appId: "1:1071864807547:web:46abc195cf5d21846ca2de",
  measurementId: "G-GF6V41VK0R"
};

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireMessagingModule
  ],
  exports: [], // imports firebase/app needed for everything]
  providers: [
    FirestoreApiService,
    AuthApiService,
    StorageApiService,
    MessagingApiService
  ]
})
export class FirebaseFireApiModule {}
