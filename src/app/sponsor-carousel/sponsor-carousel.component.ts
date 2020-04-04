import { Component, OnInit, Input } from '@angular/core';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor-carousel',
  templateUrl: './sponsor-carousel.component.html',
  styleUrls: ['./sponsor-carousel.component.css']
})
export class SponsorCarouselComponent implements OnInit {
  @Input() sponsors!: Sponsor[];

  current_index = 0;
  current_logo = "";
  delay = 5000;

  constructor() { }

  nextSponsor(){
    this.current_logo = this.sponsors[this.current_index].logo;
    this.current_index = (this.current_index + 1) % this.sponsors.length;
  }

  ngOnInit() {
    this.nextSponsor();
    setInterval(() => {
      this.nextSponsor();
    }, this.delay);
  }
}
