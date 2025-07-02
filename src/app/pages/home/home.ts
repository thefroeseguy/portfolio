import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import {About} from '../../components/about/about';
import {Experience} from '../../components/experience/experience';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Experience
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.scss'
})
export class Home {

}
