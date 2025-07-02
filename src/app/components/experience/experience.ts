import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  currentEmployer: string = "Redding Designs Inc.";
  currentPosition: string = "Intermediate Developer";
}
