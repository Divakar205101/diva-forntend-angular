import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  exports: [
    CardModule,
    InputTextModule
  ]
})
export class NgPrimeMaterialModule { }
