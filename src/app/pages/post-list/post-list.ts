import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post/post';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../core/services/post.service';


@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
   posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

   ngOnInit(): void {
     this.postService.getPosts().subscribe({
      next:(data) => this.posts = data,
      error: (err) => console.error (err)
     }
     );
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
