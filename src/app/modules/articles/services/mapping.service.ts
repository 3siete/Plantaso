import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MappingService {
  private slugToIdMap: { [slug: string]: string } = {};
  addMapping(slug: string, articleId: string): void {
    this.slugToIdMap[slug] = articleId;
  }




}
