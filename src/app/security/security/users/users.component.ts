import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../User/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserVO } from '../User/UserVO';
import { MemberBankVO } from '../User/MemberBankVO';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private formbuilder :FormBuilder,private userService : UserServiceService,private route : ActivatedRoute){

  }
  
  ngOnInit(): void {
   this.route.paramMap.subscribe(params =>{
      const memberId = params.get('memberId');
       if(memberId!=undefined){
            this.userService.getmemberbyId(memberId).subscribe(
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
    this.userService.createUser(this.memberMTO.value).subscribe(() =>{

      });
  }

  patchmember(member:UserVO){
     this.memberMTO.patchValue({
      memberVO : {
        id :member.id,
        title : member.title,
        firstName : member.firstName,
        lastName : member.lastName,
        middleName : member.middleName,
        adharNumber : member.adharNumber,
        email : member.email,
        country : member.country,
        dateOfBirth  : member.dateOfBirth,
        mobileNumber :member.mobileNumber,
        lanNumber : member.lanNumber,
        panNumber : member.panNumber,
        age : member.age,
        status : member.status
      }
     });
    this.setmemberbankvos(member.memberBanksVOs);
  }

  get memberBanksVOs () {
    return this.memberMTO.get('memberVO.memberBanksVOs') as FormArray;
  }

  setmemberbankvos( memberBanksVOs : MemberBankVO[]){
    const memberBanksFormArray = this.memberMTO.get('memberVO.memberBanksVOs') as FormArray;
      memberBanksFormArray.clear();
      memberBanksVOs.forEach(bank => {
        memberBanksFormArray.push(this.formbuilder.group({
          id: bank.id,
          bank: bank.bank,
          accountno: bank.accountno,
          branch: bank.branch,
          ifscCode: bank.ifscCode,
          accountType: bank.accountType
        }));
      });
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
