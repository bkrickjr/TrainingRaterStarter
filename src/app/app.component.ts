import { ToastsManager } from 'ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isNavbarCollapsed = false;

  constructor(
    private toastsManager: ToastsManager,
    vcr: ViewContainerRef
  ) {
    // set the root view to be used with notifications
    this.toastsManager.setRootViewContainerRef(vcr);
  }
}
