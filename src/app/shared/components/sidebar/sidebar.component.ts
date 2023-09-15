import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  items:MenuItem[] = [];


hover1:boolean = false;

hover2:boolean = false;

hover3:boolean = false;

hover4:boolean = false;



  mouseover(){
  
  }
  

  MenuItem= [
    {
        icon: 'pi pi-pencil',
        command: () => {
            
        }
    },
    {
        icon: 'pi pi-refresh',
        command: () => {
            
        }
    },
    {
        icon: 'pi pi-trash',
        command: () => {
            
        }
    },
    {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
    },
    {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
    }
];
}
