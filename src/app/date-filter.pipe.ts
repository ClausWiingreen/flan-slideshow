import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './event'

@Pipe({
  name: 'dateFilter',
  pure: false
})
export class DateFilterPipe implements PipeTransform {

  transform(events: Event[], date: Date): any {
    if(!events){
      return events;
    }

    return events.filter(event => event.isOnDate(date));
  }

}
