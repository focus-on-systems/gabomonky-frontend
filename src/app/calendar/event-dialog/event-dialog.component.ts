import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CalendarEvent } from '../event.model';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './event-dialog.component.html',
})
export class EventDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { events: CalendarEvent[] }) {}
}
