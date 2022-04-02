import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, selectorString: string, sortSelector: string) {
    let displayArray = []
    for (let item of value) {
      if (selectorString == 'SelectAll' && sortSelector == 'highToLow') {
        displayArray.push(item);
        displayArray.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (selectorString == 'SelectAll' && sortSelector == 'lowToHigh') {
        displayArray.push(item);
        displayArray.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (selectorString == 'SelectAll') {
        displayArray.push(item);
      } else if (
        item.category == selectorString &&
        sortSelector == 'highToLow'
      ) {
        displayArray.push(item);
        displayArray.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (
        item.category == selectorString &&
        sortSelector == 'lowToHigh'
      ) {
        displayArray.push(item);
        displayArray.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (item.category == selectorString) {
        displayArray.push(item)
      } 

    }
    console.log(displayArray)
    return displayArray
  }

}
