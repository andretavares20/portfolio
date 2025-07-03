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

  menuLinks = ['Início', 'Sobre', 'Stack', 'Projetos', 'Contato'];
  icons = [
    { icon: 'github.svg', alt: 'GitHub', url: '#' },
    { icon: 'twitter.svg', alt: 'Twitter', url: '#' },
    { icon: 'linkedin.svg', alt: 'LinkedIn', url: '#' },
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    document.body.classList.toggle('menu-aberto', this.menuAberto);
  }

  fecharMenu() {
    this.menuAberto = false;
    document.body.classList.remove('menu-aberto');
  }
}
