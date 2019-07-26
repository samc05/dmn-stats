import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'dmn-stats';

    constructor(private _http: HttpClient) {}

    // authenticateWithWakaTime() {
    //   this.handleAuthenticationWithWakaTime().subscribe((response) => {
    //     console.log(response);
    //   });
    // }

    // handleAuthenticationWithWakaTime() {
    //   return this._http.get('https://wakatime.com/oauth/authorize?client_id=wRr3qANPtb9PYB8p9y5D1GLP&redirect_uri=https://80nuvdeja3.execute-api.us-east-1.amazonaws.com/dev/oauth-authenticate&response_type=code&scope=email,read_logged_time,read_stats');
    // }
  }
