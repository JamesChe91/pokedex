import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'capitalize'
})
// export class CapitalizePipe implements PipeTransform {
//   transform(value: string): string {  
//     return value.chartAt(0).tosUpperCase() + value.substr(1);
//   }
// }
export class CapitalizePipe implements PipeTransform {
    transform(value: string, args: string[]): any {    
     let  txt : string[] = value.split(" ");
      let txtReturn : string = "";
      for(let item of txt){
       txtReturn +=  item.charAt(0).toUpperCase()+ item.substr(1).toLowerCase() + " ";
       }
       return txtReturn;
    
  }
}


