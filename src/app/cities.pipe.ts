import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cities'
})
export class CitiesPipe implements PipeTransform {

  transform(alladds: any, condition?: any): any {
    if(condition === undefined) return alladds;
    return alladds.filter(function(adv){
    	return adv.ad_loc.toLowerCase().includes(condition.toLowerCase())
    })

  }

}
