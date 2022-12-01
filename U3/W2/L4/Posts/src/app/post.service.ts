import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  posts: Post[] = []
  //fornisce i dati ai component
  
  constructor() {}
  
  private getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
  }

  elimina(id: number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE"
    }).then(res=>{
      if(res.ok){
        this.posts = this.posts.filter(e=>e.id!=id)
      }
      return res
    })
  }

  //fornisce i dati al service
  fetchData() {
    let p = this.getAllPosts()
    p.then(res => {
      this.posts = res
    })
  }

  getPostFiltrati(a: boolean): Post[] {
    let newArray = this.posts.filter((e) => {
      return e.active == a
    })
    return newArray
  }

  togglePost(id:number){
    let postDaArray = this.posts.find(e=>e.id == id) //find da l'elemento dell'array, quindi se lo manipoliamo cambiamo anche l'array
    //ma noi vogliamo modificare this.posts se il PUT completa correttamente
    if(postDaArray == undefined) {
      throw new Error("Post non trovato")
    }

    //cloniamo i valori del post in una nuva variabile
    // let post!:Post
    // post.id = postDaArray.id
    // post.active = postDaArray.active
    let post = {...postDaArray, active: !postDaArray.active}

    //toggle sul db
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    }).then(res=>{
      if(res.ok){
        //toggle sul service
        postDaArray!.active = !postDaArray!.active
      }
      return res
    })
    // x.then()
    // return x

  }

}



//SPREAD OPERATOR ...
//su qualunqu oggetto iterabile
// let a = [1, 2, 3, 4]
// for(let e of a){}

// let x = {a:0, b:1, c:2}
// for(let e in x) { }

// // ...a -> 1, 2, 3, 4

// function f(a:number, b:number, c:number, d:number){}
// f(1, 2, 3, 4)
// f(...a)

// // ...x -> a:0, b:1, c:2

// let y = {...x, d:3, e:4}

// interface Data {
//   a:number, b:number, c:number
// }

// let z:Data = {
//   a:0, b:1, c:2
// }

// function g(data:Partial<Data>) {
//   z = {...z, ...data}
// }


// g({a:10, c:20})
// // z = {a:0, b:1, c:2, a:10, c:20}
// // z = { b:1, a:10, c:20}