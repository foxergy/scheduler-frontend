import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/service/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerText:string="";
  
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
