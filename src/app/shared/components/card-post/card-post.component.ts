import { Component, Input } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {
  @Input() cardPostData: CardPost;

  constructor(private router: Router){
    this.cardPostData = {
      title: '',
      subtitle: '',
      imgurl: '',
      description: '',
      alt: '',
    }
  }
  seeMore(): void {
    // Asegúrate de que el título se pueda usar en una URL (por ejemplo, convirtiéndolo en un slug)
    const slug = this.slugify(this.cardPostData.title);
    this.router.navigate(['/articulo', slug]);
  }

  private slugify(text: string): string {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
}
}
