import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descTextFilter'
})
export class DescTextPipe implements PipeTransform {

  transform(value: any, ...args: Array<any>): any {
    if (value) {
      if (args[1]) {
        return value;
      }else {
        let stringArray = value.split('');
        let filteredString = stringArray.filter((v, i) => { 
            if (i < args[0]) {
              return v;
            }
        })
        let desc = filteredString.join('');
        return desc;
      }
    }else {
      return null;
    }
  }

}
