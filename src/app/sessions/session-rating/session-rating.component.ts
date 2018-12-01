import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { SessionRatingsService, ISessionRating } from './session-ratings.service';

@Component({
  selector: 'app-session-rating',
  templateUrl: './session-rating.component.html'
})
export class SessionsRatingComponent implements OnInit {
  // Input says 'look at the element that spawned me and if there is a property called sessionId grab that value'
  @Input() sessionId: number;

  avgRating: number;
  selectedRating: number;
  ratings: {value: number, name: string}[] = [
    {value: 1, name: '1 star'},
    {value: 2, name: '2 star'},
    {value: 3, name: '3 star'},
    {value: 4, name: '4 star'},
    {value: 5, name: '5 star'},
  ];

  constructor(
    private ratingService: SessionRatingsService,
    private toastManager: ToastsManager,
  ) { } // constructor end

  ngOnInit() {
    this.getAvgRating();
  } // ngOnInit end

  getAvgRating(): void {
    this.ratingService.getAvgRating(this.sessionId)
      .subscribe((avgRating) => this.avgRating = avgRating);
  } // getAvgRating end

  submit() {
    const rating: ISessionRating = {
      userId: 1,
      sessionId: this.sessionId,
      rating: this.selectedRating,
      createDate: new Date(),
    };
    this.ratingService.save(rating)
      .subscribe(() => {
        this.toastManager.success('Rating submitted');
        this.getAvgRating();
      });
  } // submit end
} // class end
