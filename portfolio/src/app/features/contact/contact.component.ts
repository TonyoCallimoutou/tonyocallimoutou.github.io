import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../shared/services/email.service';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  status: FormStatus = 'idle';

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.status = 'loading';
    const { name, email, message } = this.form.value;

    this.emailService.send({ name: name!, email: email!, message: message! }).subscribe({
      next: () => {
        this.status = 'success';
        this.form.reset();
        setTimeout(() => (this.status = 'idle'), 5000);
      },
      error: () => {
        this.status = 'error';
        setTimeout(() => (this.status = 'idle'), 5000);
      },
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }
}
