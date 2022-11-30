import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostFiltrati(false).then(res=>this.posts=res)
  }

}
