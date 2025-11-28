import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './header-bar.html',
  styleUrls: ['./header-bar.css']
})
export class HeaderBarComponent {

}
