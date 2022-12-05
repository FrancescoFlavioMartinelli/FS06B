import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photo!:Photo;

  liked = false;

  error = false;

  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
    
    this.ps.getErrObs().subscribe((err)=>{
      if(err) this.error = true
      else this.error = false
    })
  }

  like(){
    this.liked= true
    this.ps.like()
  }
  dislike(){
    this.liked= false
    this.ps.dislike()
  }

  delete(){
    this.ps.delete(this.photo.id)
  }
  

}
