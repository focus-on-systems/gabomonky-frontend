import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsId: string | null = null;
  newsData: any = {
    title: 'Título de la Noticia',
    date: '1 de Enero de 2025',
    summary: 'Este es un resumen de la noticia. Aquí se presenta una breve descripción del contenido.',
    body: 'Este es el cuerpo completo de la noticia. Aquí se desarrolla el contenido en detalle, con párrafos, y toda la información relevante.',
    imageUrl: 'https://via.placeholder.com/800x400'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsId = this.route.snapshot.paramMap.get('id');
    // Here you would typically fetch the news data based on the newsId
  }
}
