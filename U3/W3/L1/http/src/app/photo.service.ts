import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoSubj = new Subject(); //oggetto con metodo .next(), attiva i subscriber
  photoObs = this.photoSubj.asObservable(); //oggetto con metodo .subscribe(), imposta cosa fare quando riceve un next

  getObs() {
    return this.photoObs;
  }

  photos:Photo[] = []

  constructor(private http:HttpClient) { }

  fetchData() {
    // let f = fetch("http://localhost:3000/photos").then(res=>res.json())
    // return f
    //soluzione 1 - comporta un fetch ogni volta che vogliamo i dati
    // let o = this.http.get<Photo[]>("http://localhost:3000/photos").pipe(
    //   tap((res)=>{console.log(res)}),
    //   catchError((err)=>{
    //     throw new Error("Errore lettura dati")
    //   })
    // )

    // return o

    //soluzione 2 - un solo fetch inziale e lavoriamo con i dati cache
    this.http.get<Photo[]>("http://localhost:3000/photos").pipe(
      tap((res)=>{console.log(res)}),
      catchError((err)=>{
        throw new Error("Errore lettura dati")
      })
    ).subscribe((res)=>{
      this.photos = res
      this.photoSubj.next(null)
    })
  }

  getPhotos() {
    return this.photos;
  }

  delete(id:number) {
    this.http.delete("http://localhost:3000/photos/"+id).pipe(catchError((err)=>{
      this.erroSubj.next(true)
      throw new Error("Errore eliminazione")
    })).subscribe(res=>{
      this.photos = this.photos.filter(e=>e.id!=id)
      this.photoSubj.next(null)
    })
  }

  likeSubj = new Subject<boolean>();
  
  like() {
    this.likeSubj.next(true)
  }
  dislike() {
    this.likeSubj.next(false)
  }
  
  getLikeObs() {
    return this.likeSubj.asObservable()
  }
  
  erroSubj = new Subject<boolean>();
  getErrObs() {
    return this.erroSubj.asObservable()
  }




}
