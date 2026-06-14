import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private activeSection$ = new BehaviorSubject<string>('hero');
  activeSection = this.activeSection$.asObservable();

  private observer!: IntersectionObserver;

  constructor(private zone: NgZone) {}

  observe(sectionIds: string[]): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.zone.run(() => this.activeSection$.next(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}
