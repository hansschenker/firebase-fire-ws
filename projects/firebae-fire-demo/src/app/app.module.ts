import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//
import { FirebaseFireApiModule } from "firebase-fire-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FirebaseFireApiModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
