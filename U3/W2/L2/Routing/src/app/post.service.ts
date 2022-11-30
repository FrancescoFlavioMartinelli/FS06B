import { Injectable } from '@angular/core';
import { Post } from './post';

export function getAllPosts(){
  return fetch("http://localhost:3000/posts/").then((res):Promise<Post[]>=>res.json())
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  postsActive:Post[] = []
  postInactive:Post[] = []

  constructor() {
    // getAllPosts().then(res=>{
    //   this.posts = res
    //   this.postInactive = res.filter(e=>!e.active)
    //   this.postsActive = res.filter(e=>e.active)
    // })
  }

  getActivePost(){
    return this.postsActive
  }
  getInactivePost(){
    return this.postInactive
  }

  private getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res):Promise<Post[]>=>res.json())
  }

  getPostFiltrati(a:boolean) {
    return getAllPosts().then(res=>{
      return res.filter((e)=>{
        return e.active == a
      })
    })
  }

}