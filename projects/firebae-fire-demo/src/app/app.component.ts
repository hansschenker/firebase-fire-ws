import { Component } from "@angular/core";
// import { AuthApiService } from "../../../firebase-fire-api/src/lib/auth-api.service";
import { AuthApiService } from "firebase-fire-api";

@Component({
  selector: "nxp-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "firebae-fire-demo";

  constructor(private authSvc: AuthApiService) {}
  login() {
    this.authSvc.signIn();
  }
}
