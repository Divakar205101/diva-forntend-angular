import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isVisible: boolean = false;
  constructor(private anuthservice : AuthServiceService){}
  ngOnInit(): void {
    this.isVisible = this.anuthservice.authenticated();
  }

}
