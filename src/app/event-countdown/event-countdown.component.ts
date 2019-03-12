import { Component, OnInit, Input } from '@angular/core';
import { SponsoredEvent } from '../event'

@Component({
  selector: 'app-event-countdown',
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css']
})
export class EventCountdownComponent implements OnInit {

  @Input() event: SponsoredEvent;

  minutes: number = 30;
  seconds: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => { 
      let difference: Date = new Date(this.event.start.getTime()-Date.now()); 
      this.minutes = difference.getMinutes();
      this.seconds = difference.getSeconds();
    }, 250);
  }

}
