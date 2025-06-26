import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  title = "Hi, I'm a web developer";
  description: string = "I have 5 years of experience working on useful and mindful products together with startups and known brands";

}
