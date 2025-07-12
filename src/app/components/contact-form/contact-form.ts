import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Button} from '../ui/button/button';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, Button],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  submit(form: NgForm) {
    if(form.valid) {
      console.log('Form submitted: ', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
