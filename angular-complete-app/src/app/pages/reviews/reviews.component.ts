import { Component, OnInit } from '@angular/core';
import { review } from 'src/app/models/models';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: review[] = []
  types: string[] = ["Branding and Communication", "Inbound &  Content Marketing", "Film &  Webinar",
    "Digital Marketing", "ECommerce & Websites", "Market Analysis", "All"]
    
  selected: string = "All"
  constructor(private rs: ReviewService) {

  }
  ngOnInit() {
    this.rs.getReviews().subscribe({
      next: (data: review[]) => this.reviews = data,
      error: (error: any) => this.reviews = []
    })
  }
}
