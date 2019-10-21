import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflux-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  netflux = {
    email:'customer@netflux.com',
    facebook: 'Netflux',
    twitter: 'netflux',
    faq: '',
    
  }
  ngOnInit() {
  }

}
