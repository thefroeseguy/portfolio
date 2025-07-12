import {Component, input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  text = input<string>('Click here');
  variant = input<'button' | 'link'>('button');
  type = input<'button' | 'submit'>('button');
  href = input<string>('#');
  classes = input<string>('');

  get buttonClasses(): string {
    return `bg-blue px-4 py-2.5 rounded-full ${this.classes()}`;
  }

}
