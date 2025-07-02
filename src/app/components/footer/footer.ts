import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  currentYear: number = new Date().getFullYear();
}
