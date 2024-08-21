import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [MessageService],
})
export class FormComponent {
  myEmail: string = 'therealakash13@gmail.com';
  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Handle form submission
    console.log('Form Submitted!', this.contact);

    const emailData = {
      to_name: this.myEmail,
      from_name: this.contact.email,
      message: this.contact.message,
    };

    emailjs
      .send(
        'service_j8dkdcn',
        'template_yoviw1b',
        emailData,
        'EMRbdL510GqfysHSi'
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Message Sent Successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Unable to send Message!');
      });

    this.contact = {
      name: '',
      email: '',
      message: '',
    };
  }
}
