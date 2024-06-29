import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sd-froentend';
  showmenu =true;
  constructor(private router:Router){
    this.checkUrl(this.router.url);
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUrl(event.url);
      }
    });
  }

  private checkUrl(url: string): void {
    if (url === '/login' || url === '/register') {
      this.showmenu = false;
    } else {
      this.showmenu = true;
    }
  }

}
