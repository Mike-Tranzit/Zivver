import { createAction, props } from '@ngrx/store';
import {POSTS_TYPES} from './actions.types';
import {Posts} from '@models/posts.type';

export const setPosts = createAction(POSTS_TYPES.SET, props<{payload: Posts}>());
