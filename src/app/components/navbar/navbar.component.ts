import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/services/fake-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public authService: FakeAuthService, private router: Router) { }

  logout() {
    this.authService.currentUser = null;
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
