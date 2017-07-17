import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteText'
})
export class DeleteTextPipe implements PipeTransform {

transform(value: any, args?: any): any {
    let result = "";
    if(value.search("/")>0){
      result = value.split("/",2);
      result = result[1];
    }else{
      result = value;
    }
 
    let whitoutDependece = result.split(" ",1);

    return whitoutDependece;
  }

}
