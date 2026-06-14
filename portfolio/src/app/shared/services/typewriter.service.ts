import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypewriterService {
  private displayed$ = new BehaviorSubject<string>('');
  displayed = this.displayed$.asObservable();

  private timeout: ReturnType<typeof setTimeout> | null = null;
  private index = 0;
  private charIndex = 0;
  private deleting = false;

  start(roles: string[]): void {
    this.type(roles);
  }

  private type(roles: string[]): void {
    const current = roles[this.index];

    if (!this.deleting && this.charIndex < current.length) {
      this.displayed$.next(current.slice(0, ++this.charIndex));
      this.timeout = setTimeout(() => this.type(roles), 80);
    } else if (!this.deleting && this.charIndex === current.length) {
      this.timeout = setTimeout(() => {
        this.deleting = true;
        this.type(roles);
      }, 2000);
    } else if (this.deleting && this.charIndex > 0) {
      this.displayed$.next(current.slice(0, --this.charIndex));
      this.timeout = setTimeout(() => this.type(roles), 40);
    } else {
      this.deleting = false;
      this.index = (this.index + 1) % roles.length;
      this.timeout = setTimeout(() => this.type(roles), 300);
    }
  }

  stop(): void {
    if (this.timeout) clearTimeout(this.timeout);
  }
}
