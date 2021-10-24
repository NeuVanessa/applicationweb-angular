import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'applicationweb-angular';

  constructor(private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }
}
