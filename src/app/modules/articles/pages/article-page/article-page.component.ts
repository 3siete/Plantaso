import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  article!: Article; // Define tu modelo de artículo aquí

  constructor(private route: ActivatedRoute, private articleService: CrudArticlesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.articleService.getArticleBySlug(slug!).subscribe(article => {
        this.article = article!;
      });
    });
  }
}
