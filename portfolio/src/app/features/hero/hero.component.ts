import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterService } from '../../shared/services/typewriter.service';
import { ROLES } from '../../../assets/data/portfolio.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  displayed = '';
  private sub!: Subscription;

  constructor(private typewriter: TypewriterService) {}

  ngOnInit(): void {
    this.sub = this.typewriter.displayed.subscribe((t) => (this.displayed = t));
    this.typewriter.start(ROLES);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.typewriter.stop();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
