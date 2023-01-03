import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Pokedex</h1>
  <main>
  <app-card></app-card>


  </main>


  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
}
