import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../../core/models/portfolio.models';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor(private http: HttpClient) {}

  send(form: ContactForm): Observable<unknown> {
    return this.http.post(environment.formspree.endpoint, {
      name: form.name,
      email: form.email,
      message: form.message,
    }, {
      headers: { Accept: 'application/json' }
    });
  }
}
