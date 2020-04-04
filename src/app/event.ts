import { Sponsor } from './sponsor';
import { Person } from './person';

export class Event{
  constructor(
    public title: string, 
    public start: Date){}

  isOnDate(date: Date) {
    return date.toDateString() === this.start.toDateString();
  }
};

export class SponsoredEvent extends Event {
  constructor(
    title: string, 
    start: Date, 
    public sponsor:Sponsor, 
    public image: string, 
    public responsible: Person[],
    public message: string,
    public count_down : boolean = true){
      super(title, start);
    }
};
