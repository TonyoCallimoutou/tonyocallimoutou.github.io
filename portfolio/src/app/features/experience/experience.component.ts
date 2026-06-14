import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../../assets/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
