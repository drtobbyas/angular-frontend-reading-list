import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceService } from './data/race.service';
import { GameWrapperComponent } from './views/game-wrapper/game-wrapper.component';
import { BetslipComponent } from './views/betslip/betslip.component';
import { GameBoardComponent } from './views/game-board/game-board.component';


// TODO: ngx-bootstrap

const routes: Routes = [
  { path: '', component: GameWrapperComponent }

  // FIXME: using root path for cashier, change to /cashier when ready

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', component: 404Component },
  // { path: 'cashier', component: GameWrapperComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    GameWrapperComponent,
    BetslipComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
