import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent } from './event.model';
import { EventSearchBarComponent } from './event-search-bar/event-search-bar.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, EventSearchBarComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentDate = new Date();
  month: number = this.currentDate.getMonth();
  year: number = this.currentDate.getFullYear();
  daysInMonth: (number | null)[] = [];
  monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  events: CalendarEvent[] = [
    { date: new Date(2024, 6, 15), title: 'Concierto de Rock' },
    { date: new Date(2024, 6, 25), title: 'Fiesta en la Playa' },
    { date: new Date(2024, 6, 25), title: 'Fiesta en la Playa 2' },
    { date: new Date(2025, 7, 5), title: 'Festival de Jazz' },
    { date: new Date(2025, 7, 12), title: 'Noche de Cine al Aire Libre' },
    { date: new Date(2025, 7, 22), title: 'Torneo de Voleibol' },
    { date: new Date(2025, 7, 22), title: 'Torneo de Voleibol 2' }
  ];

  constructor() {
    this.getDaysInMonth();
  }

  getDaysInMonth() {
    this.daysInMonth = [];
    const firstDayOfMonth = new Date(this.year, this.month, 1);
    const startingDay = (firstDayOfMonth.getDay() + 6) % 7; // 0=Monday, 1=Tuesday, ...

    for (let i = 0; i < startingDay; i++) {
      this.daysInMonth.push(null);
    }

    const date = new Date(this.year, this.month, 1);
    while (date.getMonth() === this.month) {
      this.daysInMonth.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
  }

  getEventsForDay(day: number | null): CalendarEvent[] {
    if (!day) return [];
    return this.events.filter(event =>
      event.date.getFullYear() === this.year &&
      event.date.getMonth() === this.month &&
      event.date.getDate() === day
    );
  }

  previousMonth() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.getDaysInMonth();
  }

  nextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.getDaysInMonth();
  }

  onDayClick(day: number | null) {
    if (day) {
      const eventsOnDay = this.getEventsForDay(day);
      // Open dialog here with eventsOnDay
      console.log('Clicked on day', day, 'with events:', eventsOnDay);
    }
  }
}
