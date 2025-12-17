import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { PostService } from '../../core/services/post.service';
import { title } from 'process';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {
  form : FormGroup;
  imagePreview : string | null = null;
  selectFile! : File;


  constructor(private fb : FormBuilder, private postService : PostService){
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });

  }

  onFileSelected(event:Event){
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0){
      return;
    }

    this.selectFile = input.files[0];
    

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;

    };
    reader.readAsDataURL(this.selectFile);
  }

  submit() {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    const formData = new FormData();

    formData.append('title', this.form.value.title);
    formData.append('content', this.form.value.content);
    formData.append('author', this.form.value.author);
    formData.append('image', this.selectFile);

    if (this.selectFile instanceof File) {
    formData.append('image', this.selectFile);
    }
    
    this.postService.createPost(formData).subscribe({
      next: () => {
        alert('tu publicacion se hizo con exito capo')
        
        this.form.reset();

        this.selectFile = undefined as any;
        this.imagePreview = null;
      },
      error: err => console.error(err),
    });

  }
}
