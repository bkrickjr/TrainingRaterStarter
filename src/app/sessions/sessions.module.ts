import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionsService } from './sessions.service';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsRatingComponent } from './session-rating/session-rating.component';
import { SessionsDetailComponent } from './session-detail/session-detail.component';

@NgModule({
  declarations: [
      SessionsListComponent,
      SessionsDetailComponent,
      SessionsRatingComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
  ],
  providers: [
      SessionsService,
  ],
})
export class SessionsModule { }
