import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyService } from '../../shared/services/scroll-spy.service';
import { Subscription } from 'rxjs';

const SECTIONS = ['hero', 'skills', 'experience', 'projects', 'contact'];
const LINKS = [
  { href: 'skills',     label: 'Compétences' },
  { href: 'experience', label: 'Expérience' },
  { href: 'projects',   label: 'Projets' },
  { href: 'contact',    label: 'Contact' },
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  links = LINKS;
  activeSection = 'hero';
  scrolled = false;
  menuOpen = false;

  private sub!: Subscription;

  constructor(private scrollSpy: ScrollSpyService) {}

  ngOnInit(): void {
    this.scrollSpy.observe(SECTIONS);
    this.sub = this.scrollSpy.activeSection.subscribe(
      (s) => (this.activeSection = s)
    );
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.scrollSpy.disconnect();
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    this.scrolled = window.scrollY > 30;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
