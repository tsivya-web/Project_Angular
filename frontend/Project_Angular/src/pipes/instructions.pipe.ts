import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../interface/ingredient';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'instructions'
})
export class InstructionsPipe implements PipeTransform {
constructor(private sanitizer: DomSanitizer){}

  transform(s:string,arr:Array<Ingredient>):SafeHtml  {
    debugger;
  const sortedIngredients = arr
      .map(i => i.name)
      .sort((a, b) => b.length - a.length);
for(const i of  sortedIngredients){
 
 const regex = new RegExp(`\\b${i}\\b`, 'gi');
      s = s.replace(regex, `<span style="background-color: yellow">${i}</span>`);

}
console.log(s)

return  this.sanitizer.bypassSecurityTrustHtml(s);

  }

}

