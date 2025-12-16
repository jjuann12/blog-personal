import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  post?: Post
  postsAuthor! : string

  constructor (private route: ActivatedRoute, private postService:PostService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(data =>{
      this.post = data;
    });
  }

}
