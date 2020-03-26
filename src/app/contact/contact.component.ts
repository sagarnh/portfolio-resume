import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPhone, faPhoneSlash, faMobile, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faPhoneSlash = faPhoneSlash;
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarker;
  hideform = false;
  contactForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.hideform = true;
  }
  get f() { return this.contactForm.controls; }
}
