import { Component, OnInit, Input } from '@angular/core';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  @Input() sponsor:Sponsor|null = null;

  constructor() { }

  ngOnInit() {
  }

}
