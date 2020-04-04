import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, SponsoredEvent } from '../event';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @Output() sponsor = new EventEmitter<Sponsor | null>();
  now = new Date();

  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  @Input() events!: Event[];

  constructor() { }

  ngOnInit() {
    setInterval(() => { this.now = new Date(); }, 10000);
  }

  onSelect(event : Event): void {
    if(event instanceof SponsoredEvent){
      let sponsoredEvent = event as SponsoredEvent;
      console.log("Showing sponsor for " + sponsoredEvent.title + ": " + sponsoredEvent.sponsor.name);
      this.sponsor.emit(sponsoredEvent.sponsor);
    }
  }
}
