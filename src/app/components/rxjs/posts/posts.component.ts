import {Component, OnInit} from '@angular/core';
import {Posts, Post} from '@models/posts.type';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {POSTS_TYPES} from '@store/actions/actions.types';

@Component({
  selector: 'app-rxjs-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class RxJsPostsComponent implements OnInit {
  public posts$: Observable<Posts> = this.store.select(state => state.posts);

  constructor(private store: Store<{ posts: Posts }>) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: POSTS_TYPES.FETCH});
  }

  postIndex(index: number, item: Post): string {
    return `${item.id}${index}`;
  }

}
