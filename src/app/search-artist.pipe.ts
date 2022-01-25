import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})
export class SearchArtistPipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: any): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }

}
