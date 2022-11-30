import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import {getAllPosts, PostService} from './../post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {


  posts:Post[] = []

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    // getAllPosts().then((res)=>{
    //   this.posts = res
    // })

    // this.postSrv.getAllPosts().then((res)=>{
    //   this.posts = res
    // })

    // this.posts = this.postSrv.getActivePost()

    this.postSrv.getPostFiltrati(true).then(res=>this.posts=res)
  }
}
