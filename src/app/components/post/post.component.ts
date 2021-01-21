import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Post} from '@models/posts.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') post: Post;
  public field = 'id';

  constructor() {
  }

  @HostListener('click') onMouseClick(): void {
    this.onMouseClickHandler();
  }

  ngOnInit(): void {
  }

  private onMouseClickHandler(): void {
    this.field = this.field === 'id' ? 'userId' : 'id';
  }
}
