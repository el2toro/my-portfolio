import { HttpStatusCode } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  private snackBar = inject(MatSnackBar);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      subject: ['', Validators.minLength(3)],
      message: ['', Validators.minLength(10)]
    });
  }

  sendMessage(){
    const templateParams = {
      from_name: this.contactForm.value['name'],
      to_name: 'Vasile',
      message: this.contactForm.value['message'],
      email: this.contactForm.value['email'],
      subject: this.contactForm.value['subject']
    };

    emailjs.send(environment.smtp.serviceId, environment.smtp.templateId, templateParams, environment.smtp.userId)
    .then((response) => {
       if(response.status === HttpStatusCode.Ok){
        this.snackBar.open('Thank you! Your message was sent succeffully!', '', { duration: 3000 })
      }
    }, 
    (error) => this.snackBar.open('Something went wrong!', '', { duration: 3000 }));
  }
}
