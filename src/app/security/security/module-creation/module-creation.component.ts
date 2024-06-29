import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleFeatureService } from './module-feature.service';
import { Module } from './Module';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';


@Component({
  selector: 'app-module-creation',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.scss']
})

export class ModuleCreationComponent implements OnInit {
 
   constructor(private formbuilder :FormBuilder,private moduleservice:ModuleFeatureService,private matdialog : MatDialog){
    
   }
   
  ngOnInit(): void {
      
  }

  moduleMo: FormGroup = this.formbuilder.group({
    moduleDO: this.formbuilder.group({
      id:[''],
      moduleId:['',Validators.required],
      moduleName:['',Validators.required],
      description :['',Validators.required],
      featuresDOs : this.formbuilder.array([
        this.formbuilder.group({
          id: [''],
          fetureId :  ['',Validators.required],
          featurename: ['',Validators.required],
          status: ['',Validators.required],
          description :  ['',Validators.required],
          compref :  ['',Validators.required],
        }),
      ]),
    }),
 });
  

 get featuresDOs(): FormArray {
  return this.moduleMo.get('moduleDO')?.get('featuresDOs') as FormArray;
}

  addFeature(): void {
     let feature = this.formbuilder.group({
        id: [''],
        fetureId: [''],
        featurename :  [''],
        status :  [''],
        description: [''],
        compref: [''],
      })
       this.featuresDOs.push(feature);
  }

  removeFeature(index: number): void {
    if(index > 0){
      this.featuresDOs.removeAt(index);
    }
  }
 
  submitForm(): void {
    console.log(this.moduleMo.value);
  }

  createModule(){  
        this.moduleservice.createModule(this.moduleMo.value).subscribe(() =>{
        })   
  }
  
  openPopUp(){
   var popup_data = this.matdialog.open(DialogBoxComponent,{
      width:'60%',
      height:'400px',
      data :{
        title : 'Features Details'
      }
    })
    popup_data.afterClosed().subscribe(fetures=>{
      console.log(fetures);
    })
  }
}
