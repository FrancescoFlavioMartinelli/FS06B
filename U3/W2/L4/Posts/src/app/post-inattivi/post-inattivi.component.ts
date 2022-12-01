import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  postsNonAttivi:Post[] = []
  //i dati da usare in questo component
  // 1- per le logiche
  // 2*- per il template

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.getData()
  }

  attiva(id:number) {
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
    this.postsNonAttivi = this.postSrv.getPostFiltrati(false)
  }

}
