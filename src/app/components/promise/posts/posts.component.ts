import {Component, OnInit} from '@angular/core';
import {Posts, Post} from '@models/posts.type';
import {PostsService} from '@services/posts.service';

@Component({
  selector: 'app-promise-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PromisePostsComponent implements OnInit {
  public posts: Posts;

  constructor(private readonly postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().then((posts: Posts) => {
      this.posts = posts;
    });
  }

  postIndex(index: number, item: Post): string {
    return `${item.id}${index}`;
  }

}
