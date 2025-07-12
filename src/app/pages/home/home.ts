import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import {About} from '../../components/about/about';
import {Experience} from '../../components/experience/experience';
import {Footer} from '../../components/footer/footer';
import {ContactForm} from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Experience,
    Footer,
    ContactForm
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home {

}
