import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {postsReducer} from '@store/reducer/posts.reducer';
import {PostsEffects} from '@store/effects/posts.effects';

import {AppComponent} from '@app/app.component';

import {PromisePostsComponent} from '@components/promise/posts/posts.component';
import {PostComponent} from '@components/post/post.component';

import {RxJsPostsComponent} from '@components/rxjs/posts/posts.component';

import {PostsService} from '@services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PromisePostsComponent,
    PostComponent,
    RxJsPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    StoreModule.forRoot({posts: postsReducer}),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
