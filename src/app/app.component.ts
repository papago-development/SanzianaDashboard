import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  categories = [{nume: 'Ciorbe'}, {nume: 'Garnituri'}, {nume: 'FelPrincipal'}, {nume: 'Minuturi'}, {nume: 'Salate'}, {nume: 'Desert'}];
}
