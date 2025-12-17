import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post/post';
import { RouterLink } from "@angular/router";
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
   posts: Post[] = [];

   constructor (private postService: PostService){

   }

   ngOnInit(): void {
     this.postService.getPosts().subscribe({
      next:(data) => this.posts = data,
      error: (err) => console.error (err)
     }
     );
   }
   

   

}
