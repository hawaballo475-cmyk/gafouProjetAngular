import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Creneau } from './pages/creneau/creneau';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Creneau, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('creneau');
}
