import { Injectable } from '@angular/core';

export interface Card{
  circle?:string;
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class HederCardsService {

  hederCards=[
    {
      circle:"",
      title:"Feature one",
      description:"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
    },
    {
      circle:"",
      title:"Feature two",
      description:"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
    },
    {
      circle:"",
      title:"Feature three",
      description:"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
    }
  ]

  constructor() { }
}
