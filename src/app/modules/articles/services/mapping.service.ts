// Importación necesaria de Angular
import { Injectable } from '@angular/core';

// Decorador Injectable que marca la clase como un servicio que puede ser inyectado en otras partes de la aplicación.
@Injectable({
  providedIn: 'root' // Indica que este servicio está disponible en toda la aplicación
})
export class MappingService {
  // Objeto privado para almacenar el mapeo entre slugs y IDs de artículos.
  // Un slug es una cadena de texto que representa de manera única a un artículo, usualmente usado en URLs.
  private slugToIdMap: { [slug: string]: string } = {};
  
  // Método para agregar un nuevo mapeo entre un slug y un ID de artículo.
  addMapping(slug: string, articleId: string): void {
    this.slugToIdMap[slug] = articleId; // Asigna el ID del artículo al slug correspondiente en el mapa
  }

  // Método para obtener el ID de un artículo a partir de su slug.
  getArticleIdFromSlug(slug: string): string | null {
    return this.slugToIdMap[slug] || null; // Devuelve el ID del artículo asociado al slug, o null si no existe
  }
}
