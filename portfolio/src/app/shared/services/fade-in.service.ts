import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FadeInService {
  observe(selector = '.fade-in'): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  }
}
