import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OauthRedirectComponent } from './oauth-redirect/oauth-redirect.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { HeaderComponent } from './components/header/header.component';

import { MyStatsComponent } from './views/my-stats/my-stats.component';
import { TeamStatsComponent } from './views/team-stats/team-stats.component';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';

import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OauthRedirectComponent,
    PieChartComponent,
    InfoBarComponent,
    HeaderComponent,
    MyStatsComponent,
    TeamStatsComponent,
    LeaderboardComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
