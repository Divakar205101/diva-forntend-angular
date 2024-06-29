import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  inpudata:any;
   constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<DialogBoxComponent>){

   }
  ngOnInit(): void {
    this.inpudata=this.data;
  }
  closePopUp(){
     this.ref.close();
  }
}
