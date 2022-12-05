import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, ReplaySubject, Subject, tap } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // photoSubj = new Subject(); //oggetto con metodo .next(), attiva i subscriber
  photoSubj = new ReplaySubject(); //uguale alla subjext ma quando viene fatto un subscribe viene passato in automatico il valore dell'ultimo next
  //senza questa classe se avessimo cambiato pagina tornando su quella in cui avveniva la lettura avremmo avuto un subscribe che aspettava il prossimo next, ma la chiamata http era stata fatta una volta sola e non avrebbe più mandato next
  //usando ReplaySubject (o BehaviourSubject che però va creato con un valore iniziale) l'ultimo valore è passato appena viene fatto il subscribe (e quindi la funzione nel subscribe parte subito se il next() era già stato eseguito precedentemetne)
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
