import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private slugToIdMap: { [slug: string]: string } = {};
  
  addMapping(slug: string, productId: string): void {
    this.slugToIdMap[slug] = productId;
  }

  getArticleIdFromSlug(slug: string): string | null {
    return this.slugToIdMap[slug] || null;
  }
}
