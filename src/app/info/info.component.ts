import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { SkillComponent } from '../skill/skill.component';
import { InterestComponent } from '../interest/interest.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    EducationComponent,
    CommonModule,
    SkillComponent,
    InterestComponent,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  isEducationVisible: boolean = true;
  isSkillsVisible: boolean = true;
  isHobbiesVisible: boolean = true;

  toggleEducation() {
    this.isEducationVisible = !this.isEducationVisible;
  }

  toggleSkills() {
    this.isSkillsVisible = !this.isSkillsVisible;
  }

  toggleHobbies() {
    this.isHobbiesVisible = !this.isHobbiesVisible;
  }
}
