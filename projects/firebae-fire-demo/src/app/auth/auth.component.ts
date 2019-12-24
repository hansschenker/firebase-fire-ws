import { Component, OnInit } from "@angular/core";
import { AuthApiService } from "firebase-fire-api";

@Component({
  selector: "nxp-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private authSvc: AuthApiService) {}

  ngOnInit() {
    this.signUp();
  }
  signUp() {
    this.authSvc
      .signUp("hans.schenker@windowslive.com", "testmich")
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
