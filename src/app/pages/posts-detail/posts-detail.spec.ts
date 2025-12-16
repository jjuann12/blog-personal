import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetail } from './posts-detail';

describe('PostsDetail', () => {
  let component: PostsDetail;
  let fixture: ComponentFixture<PostsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
