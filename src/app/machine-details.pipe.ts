import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'machineDetails'
})
export class MachineDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
