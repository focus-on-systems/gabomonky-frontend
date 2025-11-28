import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-event-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './event-search-bar.component.html',
  styleUrls: ['./event-search-bar.component.css']
})
export class EventSearchBarComponent {
  categories = ['0-5 K', '5-15 K', 'Medio maratón', 'Maratón', "Ultramaratón", "Trail run", "Cross country", "OCR"];
}
