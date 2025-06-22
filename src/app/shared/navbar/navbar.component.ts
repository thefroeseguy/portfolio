import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
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
  animations: [ // <-- Add this animations property
    trigger('slideDownUp', [ // Define the trigger named 'slideDownUp'
      state('closed', style({
        height: '0px',
        overflow: 'hidden',
        opacity: 0,
        paddingTop: '0px', // Ensure padding is also part of animation
        paddingBottom: '0px'
      })),
      state('open', style({
        height: '*', // '*' calculates the element's natural height
        overflow: 'hidden', // Hide overflow during animation to prevent scrollbars
        opacity: 1,
        // You might need to adjust padding based on your actual design in Figma
        paddingTop: '1rem', // Tailwind's p-4 is 1rem
        paddingBottom: '1rem' // Tailwind's p-4 is 1rem
      })),
      transition('closed <=> open', [ // Transition between closed and open states
        animate('300ms ease-in-out') // Duration and easing for the animation
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
