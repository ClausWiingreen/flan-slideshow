import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor-carousel',
  templateUrl: './sponsor-carousel.component.html',
  styleUrls: ['./sponsor-carousel.component.css']
})
export class SponsorCarouselComponent implements OnInit {
  sponsors: Sponsor[] = [
    { name: "Sponsor1", logo: "../../assets/sponsor.1.svg" },
    { name: "Sponsor2", logo: "../../assets/sponsor.2.svg" },
    { name: "Sponsor3", logo: "../../assets/sponsor.3.svg" },
    { name: "Sponsor4", logo: "../../assets/sponsor.4.svg" },
    { name: "Sponsor5", logo: "../../assets/sponsor.5.png" }
  ];

  current_index: number = 0;
  current_logo: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.current_logo = this.sponsors[this.current_index].logo;
      this.current_index = (this.current_index + 1) % this.sponsors.length;
    }, 1000);
  }
}
