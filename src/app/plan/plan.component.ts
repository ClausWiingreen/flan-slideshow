import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  locales: string = 'da-DK';
  options = {hour: '2-digit', minute:'2-digit'};
  now = new Date();

  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  @Input() events: Event[];
  constructor() { }

  ngOnInit() {
    setInterval(() => { this.now = new Date(); }, 10000);
  }
}
