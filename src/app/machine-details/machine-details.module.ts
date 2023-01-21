import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineDetailsRoutingModule } from './machine-details-routing.module';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MachineDetailsComponent
  ],
  imports: [
    CommonModule,
    MachineDetailsRoutingModule,
    MatCardModule
  ]
})
export class MachineDetailsModule { }
