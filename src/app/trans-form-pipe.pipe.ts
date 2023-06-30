import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transFormPipe'
})
export class TransFormPipePipe implements PipeTransform {

  transform(value: string): string {
    value.trim()
   const len = value.length;
    if(len>5){
      return value.substring(0,5)
    }
    else {
      return value
    }
    
  }

}
