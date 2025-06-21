import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface NavItem {
  title: string
  url: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      title: 'About Me',
      url: '#about'
    },
    {
      title: 'Skillset',
      url: '#skills'
    },
    {
      title: 'Services',
      url: '#services'
    },
    {
      title: 'Contact',
      url: '#contact'
    }
  ];
  homePath: string = '#hero';

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
