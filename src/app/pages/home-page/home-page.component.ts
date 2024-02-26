import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public testimonialService:TestimonialService,
    
  ) { }

  ngOnInit(): void {
  }

}
