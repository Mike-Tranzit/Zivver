import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {PostsService} from '@services/posts.service';
import {POSTS_TYPES} from '../actions/actions.types';

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(POSTS_TYPES.FETCH),
    mergeMap(() => this.postsService.fetchPosts()
      .pipe(
        map(posts => ({type: POSTS_TYPES.SET, payload: posts})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {
  }
}
