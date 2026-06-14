import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { from, Observable } from 'rxjs';
import { ContactForm } from '../../core/models/portfolio.models';
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class EmailService {
  send(form: ContactForm): Observable<unknown> {
    return from(
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        environment.emailjs.publicKey,
      )
    );
  }
}
