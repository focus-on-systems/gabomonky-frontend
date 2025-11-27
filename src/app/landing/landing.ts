import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsCarouselComponent} from '../news/news-carousel/news-carousel';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NewsCarouselComponent],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {

}
