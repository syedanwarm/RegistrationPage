import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { LoginUser } from '../store/loginUser.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // form: any
  email!: string;
  password!: string;

  constructor(private store: Store<AppState>) { }
  // onSubmit() {

  // }
  login(): void {
    const credentials = { email: this.email, password: this.password };
    this.store.dispatch(new LoginUser(credentials));
  }
}
