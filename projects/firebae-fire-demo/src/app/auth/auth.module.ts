import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//
import { AuthRoutingModule } from "./auth-routing.module";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    AuthComponent
  ],
  exports: [SignupComponent, SigninComponent, ProfileComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
