import { Component, OnInit, Input } from '@angular/core';
import { SponsoredEvent } from '../event'
import { CartesianPoint, PolarPoint } from '../point';
import { Sponsor } from '../sponsor';
import { Person } from '../person';

@Component({
  selector: 'app-event-countdown',
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css']
})
export class EventCountdownComponent implements OnInit {

  @Input() event?: SponsoredEvent = new SponsoredEvent(
    'Tekken 1v1',
    new Date("2019-10-23T21:00"),
    new Sponsor("SSI Schäfer", "../assets/sponsorer/ssi-schaefer.svg"),
    "../assets/sponsor.2.svg",
    [
      new Person("John Doe", "../assets/crew/placeholder_highcontrast.png"),
      new Person("John Doe", "../assets/crew/placeholder_highcontrast.png"),
      new Person("John Doe", "../assets/crew/placeholder_highcontrast.png"),
      new Person("John Doe", "../assets/crew/placeholder_highcontrast.png")
    ],
    "Her er beskrivelsen"
  );
  @Input() countdown_time?: number = 1800000;

  minutes = 30;
  seconds = 0;
  time_left = new Date(0);
  arc_description = "";

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (!this.event || !this.countdown_time) return;
      this.time_left = new Date(this.event.start.getTime() - Date.now());
      this.arc_description = this.describeArc(
        new PolarPoint((this.time_left.getTime() / this.countdown_time) * 360, 135))
    }, 250);
  }

  describeArc(polarPoint: PolarPoint) {
    let cartesianPoint = polarPoint.toCartesian();

    let largeArcFlag = polarPoint.angle <= 180;

    var d = [
      "M 0 0 v -135 A 135 135 0", largeArcFlag ? "0" : "1", "1", cartesianPoint.x, cartesianPoint.y, 'z'
    ].join(" ");

    return d;
  }

}
