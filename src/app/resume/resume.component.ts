import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { BaseComponent } from '../base/base.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    BaseComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
