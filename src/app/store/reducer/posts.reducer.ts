import {createReducer, on} from '@ngrx/store';
import {setPosts} from '../actions/posts.actions';

export const initialState = [];

const postsLocalReducer = createReducer(
  initialState,
  on(setPosts, (state, {payload}) => [...state, ...payload])
);

export function postsReducer(state, action): any {
  return postsLocalReducer(state, action);
}
