import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { LogoutUser } from '../store/logOutUser.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name!: string;
  email!: string;
  dataSource = []

  displayedColumns: string[] = ['name', 'email'];
  users: any[] = [];

  constructor(private store: Store<AppState>, private authService: AuthserviceService) {
    this.store.select('user').subscribe((data) => {
      this.users = data.user;
    });
  }

  logout(): void {
    this.authService.logout();
    this.store.dispatch(new LogoutUser());
  }

}
