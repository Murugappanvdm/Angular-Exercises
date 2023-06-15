import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteit'
})
export class QuoteitPipe implements PipeTransform {

  transform(target: string): string {
    let regex = /(good|excellent|great|super|extraordinary|satisfied)/
    if (regex.test(target.toLowerCase()))
      return '" ' + target + ' "'
    return target
  }

}
