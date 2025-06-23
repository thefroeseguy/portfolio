import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

interface NavItem {
  title: string
  url: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideDownUp', [
      state('void', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-in', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
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
