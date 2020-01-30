import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflux-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  coverImages = {
    head: '/assets/welcome.jpg',
    drama: '/assets/infinityWarC.jpg',
    comedy: '/assets/farFromHomeC1.jpg',
    action: '/assets/farFromHomeC.jpg',
    niche1: '/assets/batwoman.jpg',
    niche2: '/assets/batwoman.jpg',
    niche3: '/assets/batwoman.jpg'
  };
  ngOnInit() {
  }

}
