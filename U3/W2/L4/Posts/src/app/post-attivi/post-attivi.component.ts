import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from './../post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  postsAttivi:Post[] = []
  //i dati da usare in questo component
  // 1- per le logiche
  // 2*- per il template

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.getData()
  }

  disattiva(id:number) {
    this.postSrv.togglePost(id).then(res=>{
      if(res.ok){
        // this.posts = this.posts.filter(e=>e.id!=id)
        this.getData()
      }
    })
  }

  elimina(id:number) {
    this.postSrv.elimina(id).then(res=>{
      if(res.ok) {
        this.getData()
      }
    })
  }

  getData() {
    this.postsAttivi = this.postSrv.getPostFiltrati(true)
  }
}
