import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-oauth-redirect',
  templateUrl: './oauth-redirect.component.html',
  styleUrls: ['./oauth-redirect.component.scss']
})
export class OauthRedirectComponent implements OnInit {

  constructor(private _router: ActivatedRoute, private _httpClient: HttpClient, private _authService: AuthService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(!token) {
      this._authService.authenticateWithApi().subscribe((response: any) => {
        localStorage.setItem('token', JSON.stringify(response.token));
      });
    }
    else {
      this._authService.me().subscribe((response: any) => {
        console.log(response);
      });
    }
  }
}
