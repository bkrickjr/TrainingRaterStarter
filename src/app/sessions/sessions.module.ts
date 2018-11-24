import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionsService } from './sessions.service';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './session-detail/session-detail.component';

@NgModule({
  declarations: [
      SessionsListComponent,
      SessionsDetailComponent,
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
