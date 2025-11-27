import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-mini-card.html',
  styleUrls: ['./news-mini-card.css']
})
export class NewsMiniCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() summary: string = '';
}
