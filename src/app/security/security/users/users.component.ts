import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../User/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserVO } from '../User/UserVO';
import { MemberBankVO } from '../User/MemberBankVO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private formbuilder :FormBuilder,private userService : UserServiceService,private route : ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const action = params['action'];
      const memberautoId =  params['memberautoId'];
      if(action=="edit"){
        this.userService.getmemberbyId(memberautoId).subscribe(
          (member:UserVO) => this.patchmember(member),
        )
      }
    })
  }

  memberMTO: FormGroup = this.formbuilder.group({
    memberVO : this.formbuilder.group({
        id : [''],
        roleMasterDO : this.formbuilder.group({
          id : [''],
        }),
        title : ['',Validators.required],
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        middleName : ['',Validators.required],
        adharNumber : ['',Validators.required],
        country : ['',Validators.required],
        dateOfBirth  : ['',Validators.required],
        panNumber : ['',Validators.required],
        age : ['',Validators.required],
        status : [''],
        memberCommVO : this.formbuilder.group({
          id : [''],
          primail : ['',Validators.required],
          mobileNumber : ['',Validators.required],
          lanNumber : ['',Validators.required],
        }),
        memberBanksVOs: this.formbuilder.array([
          this.formbuilder.group({
            id : [''],
            bank:  ['',Validators.required],
            accountno:  ['',Validators.required],
            branch:  ['',Validators.required],
            ifscCode :  ['',Validators.required],
            accountType :  ['',Validators.required],
          }),
        ]),
       })
  })

  createUser(){
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action'); 
    this.userService.createUser(this.memberMTO.value,action).subscribe(() =>{
      Swal.fire({
        title: "Good job!",
        text: "Form Sucessfully Submited",
        icon: "success"
      });
      });
  }

  patchmember(member:UserVO){
    this.memberMTO.get('memberVO').patchValue(member);
     this.memberMTO.get('memberVO.memberCommVO').patchValue(member.memberCommVO);
    this.setmemberbankvos(member.memberBanksVOs);
  }

  get memberBanksVOs () {
    return this.memberMTO.get('memberVO.memberBanksVOs') as FormArray;
  }

  setmemberbankvos( memberBanksVOs : MemberBankVO[]){
    const memberBanksFormArray = this.memberMTO.get('memberVO.memberBanksVOs') as FormArray;
      memberBanksFormArray.clear();
     for(let i=0;i<memberBanksVOs.length;i++){
      this.addBank();
     }
     memberBanksFormArray.patchValue(memberBanksVOs);
  }

  addBank() {
    this.memberBanksVOs.push(
      this.formbuilder.group({
        id:[''],
        bank:[''],
        accountno:[''],
        branch:[''],
        ifscCode:[''],
        accountType:['']
      })
    );
  }

  removedBank(index: number) {
    this.memberBanksVOs.removeAt(index);
  }

}
