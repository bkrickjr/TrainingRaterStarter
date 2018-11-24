import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './session-detail.component.html'
})
export class SessionsDetailComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('sessionId');
      console.log(id);
  }

}
