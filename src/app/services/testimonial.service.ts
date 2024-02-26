import { Injectable } from '@angular/core';

export interface Testimonial{
  subtitle?:string;
  photo?:string;
  name?:string;
  description?:string;
  icons?:string[];
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  testimonials=[
    {
      subtitle:"“A testimonial describing what the person thinks about this service, product or startup in general.”",
      photo:"/assets/photo-testimonial1.png",
      name:"Name Surname",
      description:"Description",
      icons:['/assets/icon-fb.png','/assets/icon-twt.png']
    },
    {
      subtitle:"“A testimonial describing what the person thinks about this service, product or startup in general.”",
      photo:"/assets/photo-testimonial2.png",
      name:"Name Surname",
      description:"Description",
      icons:['/assets/icon-fb.png','/assets/icon-twt.png']
    },   {
      subtitle:"“A testimonial describing what the person thinks about this service, product or startup in general.”",
      photo:"/assets/photo-testimonial3.png",
      name:"Name Surname",
      description:"Description",
      icons:['/assets/icon-fb.png','/assets/icon-twt.png']
    }
  ]

  constructor() { }
}
