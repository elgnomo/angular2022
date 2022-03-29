import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',// ya esta conectado
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gnomo';
  age = 36;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Gnomo',
    age: 36,
    avatar: 'https://source.unsplash.com/random',
    btnDisabled: true,
  }

  // Metodo
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  addButton() {
    this.person.age += 1;
  }
}
