import { Component, OnInit } from '@angular/core';
import { SponsoredEvent, Event } from './event'
import { Sponsor } from './sponsor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FLAN 55.0';
  countdown_event = null;

  events: Event[] = [
    new Event(
      'Dørene åbner',
      new Date("2019-03-12T17:00"),
      new Date("2019-03-12T18:45")
    ),
    new Event(
      'Aftensmad serveres',
      new Date("2019-03-12T18:45"),
      new Date("2019-03-12T19:00")
    ),
    new Event(
      'Velkomst og sponsoroplæg',
      new Date("2019-03-12T19:00"),
      new Date("2019-03-12T20:00")
    ),
    new Event(
      'Overwatch 3v3',
      new Date("2019-03-12T20:30"),
      new Date("2019-03-12T22:30")
    ),
    new Event(
      'Tekken 1v1',
      new Date("2019-03-12T22:30"),
      new Date("2019-03-12T23:30")
    ),
    new Event(
      'Morgenmad',
      new Date("2019-03-09T09:00"),
      new Date("2019-03-09T11:00")
    ),
    new Event(
      'Warcraft 3',
      new Date("2019-03-09T10:30"),
      new Date("2019-03-09T12:00")
    ),
    new Event(
      'Rocket League 3v3',
      new Date("2019-03-09T12:00"),
      new Date("2019-03-09T13:00")
    ),
    new Event(
      'Sandwiches',
      new Date("2019-03-09T13:00"),
      new Date("2019-03-09T14:00")
    ),
    new Event(
      'LoL 5v5',
      new Date("2019-03-09T14:00"),
      new Date("2019-03-09T18:00")
    ),
    new Event(
      'CS:GO 5v5',
      new Date("2019-03-09T18:00"),
      new Date("2019-03-09T23:59")
    ),
    new Event(
      'Funcombo',
      new Date("2019-03-09T20:00"),
      new Date("2019-03-09T21:00")
    ),
    new Event(
      'Morgenmad',
      new Date("2019-03-10T20:00"),
      new Date("2019-03-10T23:00")
    ),
    new SponsoredEvent(
      'Dørene lukker',
      new Date("2019-03-10T23:59"),
      new Date("2019-03-11T23:00"),
      new Sponsor("Sponsor", "../assets/sponsor.1.svg"),
      "../assets/sponsor.2.svg",
      []
    )
  ];

  ngOnInit() {
    let sponsored_events = this.events.map((event: Event): SponsoredEvent => {
      if (event instanceof SponsoredEvent) {
        console.log(event.title + " is sponsored.");
        return event as SponsoredEvent;
      }
      console.log(event.title + " is not sponsored.");
      return null;
    }).filter((event: Event): boolean => { return event != null; });

    let now_ms = Date.now();
    let sponsored_future_events = sponsored_events.filter((event: Event) => {
      return event.start.getTime() > now_ms;
    });

    for (let event of sponsored_future_events) {
      let difference_ms = event.start.getTime() - now_ms;
      if (difference_ms < 1800000) {
        this.countdown_event = event;
      } else {
        setTimeout(() => {
          this.countdown_event = event;
        }, difference_ms - 1800000);
      }
      setTimeout(() => {
        this.countdown_event = null;
      }, difference_ms);
    }
  }
}
