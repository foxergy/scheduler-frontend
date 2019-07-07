import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/service/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  getUserName(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user.username;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
