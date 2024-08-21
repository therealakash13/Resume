import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule, TruncatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHovered: boolean = false;

  projects = [
    {
      title: 'NiggaFlix',
      description:
        'NiggaFlix is a web application that aims to provide a comprehensive and engaging platform for users to discover, watch trailers, Extras, Featurettes, etc and get information about movies and TV shows.',
      imageUrl: '/niggaflix.png',
      link: 'https://niggaflix.netlify.app',
    },
    {
      title: 'Blabber',
      description:
        'Blabber is a Blogging application designed to allow users to create, manage, and publish blog posts. It serves as a platform where individuals or organizations can share their thoughts, insights, news, or any content in a structured and accessible format.',
      imageUrl: '/blabber.png',
      link: 'https://blabberapp.netlify.app',
    },
    {
      title: 'JobHub',
      description:
        'JobHub is a powerful and intuitive job-providing and posting app designed to bridge the gap between job seekers and employers. Whether you are looking to kickstart your career, make a career change, or find a hard worker, JobHub is your all-in-one platform to discover, apply for, and secure your next employee.',
      imageUrl: '/jobhub.png',
      link: '',
    },
    {
      title: 'Weatherlyyy',
      description:
        'A Simple Weather application reaquires you to enter your city and provide weather information such as wind speed. temperature, humidity, etc.',
      imageUrl: '/weather.png',
      link: 'https://weatherlyyy.netlify.app',
    },
    {
      title: 'SiuuuTube',
      description:
        'A youtube clone with infinite scroll search feature and video playback feature.',
      imageUrl: '/ytclone.png',
      link: '',
    },
    {
      title: 'Spotify Clone',
      description:
        'A simple spotify clone in which you can login and see your playlists and song but unfortunately cant play songs unless you have Spotify Premium.',
      imageUrl: '/spotify.png',
      link: '',
    },
    {
      title: 'Foodi',
      description:
        'A Food Delievery application to connect chef and hungry. The security of stripe and taste of trusted hand will give you lifetime of tatste to remember.',
      imageUrl: '/foodi.png',
      link: '',
    },
    // Add more projects as needed
  ];
}
