import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    document.body.style.overflow = this.menuAberto ? 'hidden' : 'auto';
  }

  fecharMenu() {
    this.menuAberto = false;
    document.body.style.overflow = 'auto';
  }
}
