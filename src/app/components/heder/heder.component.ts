import { Component, OnInit } from '@angular/core';
import { HederCardsService } from 'src/app/services/heder-cards.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor(
    public hederCardsservice:HederCardsService,
  ) { }

  ngOnInit(): void {
  }

}
