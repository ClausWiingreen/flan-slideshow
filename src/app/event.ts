import { Sponsor } from './sponsor';
import { Person } from './person';

export class Event{
  constructor(
    public title: string, 
    public start: Date, 
    public end: Date){
      if(start > end){
        throw new Error("Event is ending before it is beginning!");
      }
    }

  isOnDate(date: Date) {
    return date.toDateString() === this.start.toDateString();
  }
};

export class SponsoredEvent extends Event {
  constructor(
    title: string, 
    start: Date, 
    end: Date, 
    public sponsor:Sponsor, 
    public image: string, 
    public responsible: Person[]){
      super(title, start, end);
    }
};
