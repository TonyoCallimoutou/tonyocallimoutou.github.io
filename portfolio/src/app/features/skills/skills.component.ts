import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_GROUPS } from '../../../assets/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillGroups = SKILL_GROUPS;
}
