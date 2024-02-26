import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heder-card',
  templateUrl: './heder-card.component.html',
  styleUrls: ['./heder-card.component.scss']
})
export class HederCardComponent implements OnInit {

  @Input() circle:string=""
  @Input() title:string=""
  @Input() description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
