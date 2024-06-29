import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MenuServiceService } from './menu-service.service';
import { Module } from 'src/app/security/security/module-creation/Module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
 modules : Module[] =[];

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  constructor(private menuService:MenuServiceService) { }
  ngOnInit(): void {
    this.menuService.getAllModules().subscribe(
      (modules: Module[]) => {
        this.modules = modules;
      },
      (error) => {
      
        // Handle error as needed
      }
    );
    
  }

  showMenu(event: MouseEvent) {
    this.menuTrigger.openMenu();
  }

  hideMenu() {
    this.menuTrigger.closeMenu();
  }

  menuItemClicked(item: any) {
    console.log('Clicked item:', item);
    // Add your logic to handle the menu item click
  }
}
