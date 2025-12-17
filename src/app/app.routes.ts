import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PostList } from './pages/post-list/post-list';
import { PostsDetail } from './pages/posts-detail/posts-detail';
import { PostCreate } from './pages/post-create/post-create';

export const routes: Routes = [
    { path: '' , component:Home},
    { path: 'home' , component:Home},
    { path: 'publicaciones' , component:PostList},
    { path: 'posts/:id' , component:PostsDetail},
    { path: 'create' , component: PostCreate},
];
