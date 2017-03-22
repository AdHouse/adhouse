import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CategoriesPipe implements PipeTransform {


	transform(alladds: any, term?: any, condition?:any): any {

		

		if(term=== undefined && condition === undefined) return alladds;

		if(term === undefined && condition ){
			return alladds.filter(function(adv){
				return  adv['ad_loc'].includes(condition);
			})

		}

		if(condition === undefined && term ){
			return alladds.filter(function(adv){
				return  adv['ad_cat'].includes(term);
			})

		}
		if(term === "All") {

			return alladds.filter(function(adv){
				return  adv['ad_loc'].includes(condition);
			})
		}else{ if(condition === "All"){

			return alladds.filter(function(adv){
				return  adv['ad_cat'].includes(term);
			})
		}
	}
   return alladds.filter(function(adv){

   	console.log(alladds,adv)
       return adv['ad_cat'].includes(term) && adv['ad_loc'].includes(condition);
   })
 }

}






