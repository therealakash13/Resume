import { Component } from '@angular/core';
import { SkillModel } from '../../models/skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  skills: SkillModel[] = [
    {
      name: 'HTML',
      rank: 80,
    },
    {
      name: 'CSS',
      rank: 80,
    },
    {
      name: 'JavaScript',
      rank: 80,
    },
    {
      name: 'C,C++',
      rank: 80,
    },
    {
      name: 'TypeScript',
      rank: 70,
    },
  ];

  setLanguage() {
    this.skills = [
      {
        name: 'HTML',
        rank: 80,
      },
      {
        name: 'CSS',
        rank: 80,
      },
      {
        name: 'JavaScript',
        rank: 80,
      },
      {
        name: 'C,C++',
        rank: 80,
      },
      {
        name: 'TypeScript',
        rank: 70,
      },
    ];
  }

  setFramework() {
    this.skills = [
      {
        name: 'React',
        rank: 80,
      },
      {
        name: 'Redux',
        rank: 80,
      },
      {
        name: 'PrimeNG',
        rank: 80,
      },
      {
        name: 'BootStrap',
        rank: 80,
      },
    ];
  }

  setTechnologies() {
    this.skills = [
      { name: 'Express', rank: 80 },
      { name: 'Node', rank: 80 },
      { name: 'MongoDB', rank: 80 },
      { name: 'mySQL', rank: 80 },
      { name: 'Firebase', rank: 80 },
      { name: 'Axios', rank: 80 },
      { name: 'TailwindCss', rank: 80 },
      { name: 'Stripe', rank: 80 },
    ];
  }

  setTools() {
    this.skills = [
      { name: 'Git', rank: 80 },
      { name: 'Git Bash', rank: 80 },
      { name: 'NPM', rank: 80 },
      { name: 'Postman', rank: 80 },
    ];
  }
}
