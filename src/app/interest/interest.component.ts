import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css',
})
export class InterestComponent {
  hobbies = [
    {
      name: 'Reading',
      description: 'Exploring fiction and non-fiction books like Manga.',
      icon: '📚',
    },
    {
      name: 'Traveling',
      description: 'Visiting new places and experiencing different cultures.',
      icon: '✈️',
    },
    {
      name: 'Photography',
      description: 'Capturing moments through the lens.',
      icon: '📷',
    },
    {
      name: 'Cooking',
      description: 'Experimenting with new recipes and cuisines.',
      icon: '🍳',
    },
    {
      name: 'Gaming',
      description: 'Playing video games as a fun and challenging activity.',
      icon: '🎮',
    },
  ];
}
