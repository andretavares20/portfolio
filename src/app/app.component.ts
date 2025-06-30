import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-andre';
}
