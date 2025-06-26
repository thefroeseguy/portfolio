import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import {About} from '../../components/about/about';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home {

}
