import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {POSTS} from '@services/API';
import {environment} from '@env/environment';
import {Posts} from '@models/posts.type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Posts;

  constructor(private http: HttpClient) { }

  public fetchPosts(): Observable<Posts> {
    return this.http.get<Posts>(`${environment.baseUrl}/${POSTS}`);
  }

  public getPosts(): Promise<Posts> {
    if (!this.posts) {
      return this.fetchPosts().toPromise().then((posts: Posts) => {
        this.posts = posts;
        return posts;
      });
    } else {
      return Promise.resolve(this.posts);
    }
  }
}
