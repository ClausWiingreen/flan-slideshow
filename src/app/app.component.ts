import { Component, OnInit, ViewChild } from '@angular/core';
import { SponsoredEvent, Event } from './event'
import { Sponsor } from './sponsor';
import { Person } from './person';
import { MatSidenav } from '@angular/material/sidenav';

const day1 = "2020-04-04";
const day2 = "2020-03-05";
const day3 = "2020-03-06";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav?: MatSidenav;

  title = 'FLAN 89.0';
  countdown_event: SponsoredEvent | null = null;
  countdown_time = 1800000;
  active_sponsor: Sponsor | null = null;
  sponsors = [
    /* 0 */ new Sponsor("Accenture", "../assets/sponsorer/accenture.png"),
    /* 1 */ new Sponsor("Prosa", "../assets/sponsorer/prosa.png"),
    /* 2 */ new Sponsor("SSI-Schäfer", "../assets/sponsorer/ssi-schaefer.svg"),
    /* 3 */ new Sponsor("Cassiopeia", "../assets/sponsorer/cas.jpg"),
    /* 4 */ new Sponsor("Grundfos", "../assets/sponsorer/Grundfos_Logo-B_neg.eps.svg"), // mangler logo
    /* 5 */ new Sponsor("KMD", "../assets/sponsorer/cas.jpg"), // mangler logo
    /* 6 */ new Sponsor("Ambolt", "../assets/sponsorer/cas.jpg") // mangler logo
  ];
  crew = [
    /* 0 */  new Person("Zatz", "../assets/crew/Zazt.png"),
    /* 1 */  new Person("Kasper", "../assets/crew/placeholder_highcontrast.png"),
    /* 2 */  new Person("Thiemer", "../assets/crew/placeholder_highcontrast.png"),
    /* 3 */  new Person("Hurley", "../assets/crew/placeholder_highcontrast.png"),
    /* 4 */  new Person("Simba", "../assets/crew/Simba.png"),
    /* 5 */  new Person("Tamas", "../assets/crew/Tamas.png"),
    /* 6 */  new Person("Langballe", "../assets/crew/Langballe.png"),
    /* 7 */  new Person("Torben", "../assets/crew/placeholder_highcontrast.png"),
    /* 8 */  new Person("Esben", "../assets/crew/placeholder_highcontrast.png"),
    /* 9 */  new Person("Alexander", "../assets/crew/Alex.JPG"),
    /* a */  new Person("Magnus", "../assets/crew/Magnus.png"),
    /* b */  new Person("Smed", "../assets/crew/placeholder_highcontrast.png"),
    /* c */  new Person("Kasper W", "../assets/crew/placeholder_highcontrast.png")
  ];
  events = [
    new Event(
      'Møde',
      new Date(day1 + "T14:00")
    ),
    new Event(
      'Aftensmad serveres',
      new Date(day1 + "T18:45")
    ),
    new Event(
      'Velkomst og sponsoroplæg',
      new Date(day1 + "T19:00")
    ),
    new SponsoredEvent(
      'League of Legends 5v5',
      new Date(day1 + "T20:30"),
      this.sponsors[4],
      "../assets/sponsor.png",
      [],
      "Regler, tilmelding og opsætning af matches findes på "
    ),
    new Event(
      'Morgenmad servers',
      new Date(day2 + "T09:00")
    ),
    new SponsoredEvent(
      'Warcraft 3 Warlock',
      new Date(day2 + "T10:30"),
      this.sponsors[1],
      "../assets/sponsor.png",
      [],
      "Link til TFT "
    ),
    new SponsoredEvent(
      'Rocket League 3v3',
      new Date(day2 + "T11:30"),
      this.sponsors[5],
      "../assets/sponsor.png",
      [],
      "Regler og tilmelding på "
    ),
    new SponsoredEvent(
      'Funcombo starter',
      new Date(day2 + "T13:30"),
      this.sponsors[1],
      "../assets/sponsor.png",
      [],
      "Regler og tilmelding på "
    ),
    new SponsoredEvent(
      'Overwatch 3v3',
      new Date(day2 + "T15:00"),
      this.sponsors[6],
      "../assets/sponsor.png",
      [],
      "Regler og tilmelding: "
    ),
    new SponsoredEvent(
      'Team Fight Tactics',
      new Date(day3 + "T18:00"),
      this.sponsors[1],
      "../assets/sponsor.png",
      [],
      "Regler og tilmelding: ",
      false
    ),
    new SponsoredEvent(
      'CS:GO 5v5',
      new Date(day3 + "T18:00"),
      this.sponsors[0],
      "../assets/sponsor.png",
      [],
      "Regler og tilmelding: ",
      false
    ),
    new Event(
      'Morgenmad serveres',
      new Date(day3 + "T09:00")
    ),
    new Event(
      'Dørene lukker',
      new Date(day3 + "T10:30")
    )
  ];

  ngOnInit() {
    let now_ms = Date.now();
    let sponsored_events = this.events
      .filter((event) => { return event instanceof SponsoredEvent; })
      .map((event) => { return event as SponsoredEvent; })
      .filter((event) => { return event.start.getTime() > now_ms })

    for (let event of sponsored_events) {
      let difference_ms = event.start.getTime() - now_ms;

      console.log("Time to " + event.title + ": " + difference_ms + " ms");

      if(!event.count_down){
        continue;
      }
      if (difference_ms < this.countdown_time) {
        this.countdown_event = event;
      } else {
        setTimeout(() => {
          console.log("Starting count down for " + event.title);
          this.countdown_event = event;
        }, difference_ms - this.countdown_time);
      }
      setTimeout(() => {
        this.countdown_event = null;
      }, difference_ms);
    }
  }

  activateSponsor(sponsor: Sponsor) {
    this.active_sponsor = this.active_sponsor === sponsor ? null : sponsor;
  }
}
