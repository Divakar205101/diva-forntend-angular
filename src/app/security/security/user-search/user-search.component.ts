import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from '../User/user-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  apiData: any[] = [];
  dataTable: any;
  subscription: Subscription | undefined;

  constructor(private router: Router, private userService: UserServiceService) {}

  ngOnInit(): void {
    this.subscription = this.userService.getmembersList().subscribe(data => {
      this.apiData = data;
      this.initializeDataTable();
    });
  }

  initializeDataTable(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }

    this.dataTable = ($('#example') as any).DataTable({
      data: this.apiData,
      columns: [
        { title: 'Id', data: 'id' },
        { title: 'Title', data: 'title' },
        { title: 'FirstName', data: 'firstName' },
        { title: 'LastName', data: 'lastName' },
        { title: 'AdharNumber', data: 'adharNumber' },
        { title: 'DateOfBirth', data: 'dateOfBirth' },
        { 
          title: 'Actions', 
          data: 'id', 
          render: (data: any) => {
            return `<i class="fas fa-edit edit-icon edit-button" data-id="${data}"></i>`;
          }
        }
      ]
    });

    // Attach click event handler after DataTable initialization
    $('#example').on('click', '.edit-button', (event: Event) => {
      const data = this.dataTable.row($(event.target).closest('tr')).data();
      this.editmember(data.id);
    });
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  editmember(memberId: any): void {
    this.router.navigate(['/admin/editmember'],{
      queryParams :{
        action : "edit",
        memberautoId : memberId
      }
    });
  }
}
