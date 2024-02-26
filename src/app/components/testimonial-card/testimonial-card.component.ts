import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input() subtitle:string=""
  @Input() photo:string=""
  @Input() name:string=""
  @Input() description:string=""
  @Input() icons:string[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
