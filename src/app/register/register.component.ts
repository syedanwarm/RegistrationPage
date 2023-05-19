import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { RegisterUser } from '../store/registerUser.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email!: string;
  name!: string;
  password!: string;

  constructor(private store: Store<AppState>) { }

  register(): void {
    const user = { email: this.email, name: this.name, password: this.password };
    this.store.dispatch(new RegisterUser(user));
  }
}
