import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',// ya esta conectado
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gnomo';
  age = 36;
  img = 'https://source.unsplash.com/random'
}
