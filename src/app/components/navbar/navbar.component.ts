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

  menuLinks = ['Sobre', 'Stack', 'Projetos', 'Contato'];
  icons = [
    { icon: 'github.svg', alt: 'GitHub', url: '#' },
    { icon: 'twitter.svg', alt: 'Twitter', url: '#' },
    { icon: 'linkedin.svg', alt: 'LinkedIn', url: '#' },
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;

    if (this.menuAberto) {
      document.body.classList.add('menu-aberto');
    } else {
      document.body.classList.remove('menu-aberto');
    }
  }

  fecharMenu() {
    this.menuAberto = false;
    document.body.classList.remove('menu-aberto');
  }

  getIconForLink(link: string): string {
    const mapa: Record<string, string> = {
      Sobre: 'user.svg',
      Stack: 'blocks.svg',
      Projetos: 'folder-kanban.svg',
      Contato: 'mail.svg'
    };

    console.log(mapa)

    return mapa[link] || 'dot.svg';
  }

}
