import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post/post';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environment/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = Environment.apiUrl + '/posts/'
  // datos simulados despues voy a agregar el backend 


  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}${id}/`);
  }

  createPost(data: FormData){
    return this.http.post('http://localhost:8000/api/posts/', data)
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}${id}/`);
  }
}

