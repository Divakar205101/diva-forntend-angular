import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { NgPrimeMaterialModule } from './ng-prime-material.module';




@NgModule({
  declarations: [
    DataTableComponent,
    DialogBoxComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgPrimeMaterialModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    DialogBoxComponent,
    NgPrimeMaterialModule
  ],
  providers: [
    Validators, 
  ],
})
export class SharedModule { }
