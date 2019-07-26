import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: ActivatedRoute, private _httpClient: HttpClient) { }

    
  authenticateWithApi() { 
    const code = this._router.snapshot.queryParams.code;
    
    return this._httpClient.post('https://80nuvdeja3.execute-api.us-east-1.amazonaws.com/dev/oauth-authenticate', {code})
  }

  me() {
    return this._httpClient.get('https://80nuvdeja3.execute-api.us-east-1.amazonaws.com/dev/users/me')
  }
}
