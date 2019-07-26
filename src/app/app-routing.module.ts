import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthRedirectComponent } from './oauth-redirect/oauth-redirect.component';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';
import { TeamStatsComponent } from './views/team-stats/team-stats.component';
import { MyStatsComponent } from './views/my-stats/my-stats.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'team-stats', component: TeamStatsComponent },
  { path: 'my-stats', component: MyStatsComponent },
  { path: 'oauth-redirect', component: OauthRedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
