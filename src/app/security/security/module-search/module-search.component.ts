import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-module-search',
  templateUrl: './module-search.component.html',
  styleUrls: ['./module-search.component.scss']
})
export class ModuleSearchComponent {
[x: string]: CdkTableDataSourceInput<any>;

}
