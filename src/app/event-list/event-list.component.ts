import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from '../event-list-item/event-list-item.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventListItemComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input() events: any[] = [
    {
      title: 'Evento de Ejemplo 1',
      description: 'Una breve descripción del primer evento.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Evento de Ejemplo 2',
      description: 'Una breve descripción del segundo evento.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Evento de Ejemplo 3',
      description: 'Una breve descripción del tercer evento.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
