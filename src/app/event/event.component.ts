import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule, MatDividerModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  event = {
    title: 'Reto vulcano',
    imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image
    description: 'Esta es una descripción detallada del evento. Aquí se explican todos los pormenores, actividades y lo que los asistentes pueden esperar.',
    tags: ['5K', 'Trailing', 'Puebla'],
    relatedNews: [
      { title: 'Así se vivió #RetoVulcano2025', url: '#' },
      { title: 'Joven con discapacidad corre el Reto vulcano', url: '#' }
    ]
  };
}
