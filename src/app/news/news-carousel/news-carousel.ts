import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMiniCardComponent } from '../news-mini-card/news-mini-card';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-news-carousel',
  standalone: true,
    imports: [CommonModule, NewsMiniCardComponent, RouterLink],
  templateUrl: './news-carousel.html',
  styleUrls: ['./news-carousel.css']
})
export class NewsCarouselComponent {
  newsItems = [
    {
      imageUrl: '/img/running2.png',
      title: 'News 1',
      summary: 'Summary of the first news item.'
    },
    {
      imageUrl: '/img/running2.png',
      title: 'News 2',
      summary: 'Summary of the second news item.'
    },
    {
      imageUrl: '/img/running2.png',
      title: 'News 3',
      summary: 'Summary of the third news item.'
    },
    {
      imageUrl: '/img/running2.png',
      title: 'News 4',
      summary: 'Summary of the fourth news item.'
    },
    {
      imageUrl: '/img/running2.png',
      title: 'News 5',
      summary: 'Summary of the fifth news item.'
    }
  ];
}
