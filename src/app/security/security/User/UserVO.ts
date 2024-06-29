import { MemberBankVO } from "./MemberBankVO";
import { RoleVO } from "./RoleVO";

export class UserVO {
  id!: number;
  roleMasterDO!: RoleVO;
  age!: number;
  title!: string;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  adharNumber!: string;
  dateOfBirth!: string;
  email!: string;
  country!: string;
  mobileNumber!: string;
  lanNumber!: string;
  panNumber!: string;
  status!: string;
  memberBanksVOs : MemberBankVO[] = [];
  memberCommVO : any;
}
