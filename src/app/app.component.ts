import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    this.initApp(); // Execute something on app's startup
  }

  initApp(): void {
    console.log(`=================== Startup Application ===================`);
  }


}
