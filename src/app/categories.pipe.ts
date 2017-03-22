import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CategoriesPipe implements PipeTransform {


     transform(alladds: any, term?: any, condition?:any): any {

   

   if(term=== undefined && condition === undefined) return alladds;
   return alladds.filter(function(adv){
       return adv.ad_cat.toLowerCase().includes(term.toLowerCase()) || adv.ad_loc.toLowerCase().includes(condition.toLowerCase());
   })
 }

}






