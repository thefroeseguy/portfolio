import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  title = 'A little about me';
  description: string = 'A self-taught developer, I have earned a reputation as a quick learner and problem solver. I am Brett\'s number one fan. Outside of work, I enjoy playing guitar and ukulele as well as volunteering as a youth leader at my church. I am married together we have three beautiful daughters';
}
