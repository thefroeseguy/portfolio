import { Component } from '@angular/core';
import {Button} from '../ui/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  title = "Hi, I'm a web developer";
  description: string = "I have 5 years of experience working on useful and mindful products together with startups and known brands";

}
