import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'keys',
  pure: false
})
export class GetKeys {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }
}

//@Pipe({ name: 'keys',  pure: false })
