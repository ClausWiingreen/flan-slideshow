import { Component, OnInit, Input } from '@angular/core';
import { SponsoredEvent } from '../event'
import { CartesianPoint, PolarPoint } from '../point';

@Component({
  selector: 'app-event-countdown',
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css']
})
export class EventCountdownComponent implements OnInit {

  @Input() event: SponsoredEvent;

  minutes: number = 30;
  seconds: number = 0;
  time_left: Date = new Date(0);
  time_format = { minute: "2-digit", second: "2-digit" };
  arc_description = "";

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time_left = new Date(this.event.start.getTime() - Date.now());
      this.arc_description = this.describeArc(
        new CartesianPoint(150, 150), 
        new PolarPoint(0, 67),
        new PolarPoint(this.time_left.getTime()/1800000*360, 67))
    }, 250);
  }

  describeArc(center: CartesianPoint, startArc: PolarPoint, endArc: PolarPoint) {
    console.log("Describing arc...");
    //console.log("center: " + center)
    //console.log("startArc: " + startArc);
    console.log("endArc" + endArc);
    let start = center.add(endArc.toCartesian());
    let end = center.add(startArc.toCartesian());

    console.log("start: " + start);
    //console.log("end: " + end);

    let largeArcFlag = endArc.angle - startArc.angle <= 180;

    var d = [
      "M", start.x, start.y,
      "A", startArc.distance, endArc.distance, 0, largeArcFlag ? "0" : "1", 0, end.x, end.y
    ].join(" ");

    return d;
  }

}
