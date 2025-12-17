import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../core/services/post.service';
import { Post } from '../../models/post/post';


@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-detail.html',
  styleUrl: './posts-detail.css',
})
export class PostsDetail implements OnInit {
  posts: Post[] = [];

  post?: Post

  constructor (private route: ActivatedRoute, private postService:PostService, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(data =>{
      this.post = data;
    });
  }


  onDelete(id: number): void {
    if (!confirm('¿DE VERDAD LO QUERES BORRAR CAPO?')) {
      return;
    }

    this.postService.deletePost(id).subscribe({
      next: () => {
        // Eliminar la publicacion  de la lista sin recargar la pag
        this.posts = this.posts.filter(post => post.id !== id);
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Esta Publicacion ya no existe capo')
          this.router.navigate(['/'])
          this.posts = this.posts.filter(p => p.id !== id);
        }
        console.error('Error al borrar la publicacion', err);
      }
    });
  }

}
