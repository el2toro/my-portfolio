import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      subject: ['', Validators.minLength(3)],
      message: ['', Validators.minLength(10)]
    })

    this.contactForm.valueChanges.subscribe({
      next: () =>  this.mapForm()
    })
  }

  mapForm(){
     console.log(this.contactForm.value)
  }

  sendMessage(){
    const url = 'https://gmail.us17.list-manage.com/subscribe/post?u=a2bf1ddfd576d8f7a967ca712&amp;id=2bce48de0a&amp;f_id=0009c2e1f0'
    this.http.post(url, 'data').subscribe({
      next: (data) => console.log(data)
    })
  }
}
