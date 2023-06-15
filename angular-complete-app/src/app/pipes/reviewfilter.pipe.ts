import { Pipe, PipeTransform } from '@angular/core';
import { review } from '../models/models';

@Pipe({
  name: 'reviewfilter'
})
export class ReviewfilterPipe implements PipeTransform {

  transform(reviews: review[], projecttype:string): review[] {
    if(projecttype=="All")
    return reviews
    else
    return reviews.filter(x=>x.type == projecttype)
  }

}
