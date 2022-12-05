import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  photos:Photo[]|undefined;

  error = false

  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
    // this.ps.fetchData().subscribe((res)=>{
    //   this.photos = res
    // })

    // this.photos = this.ps.getPhotos()

    this.ps.getObs().subscribe((res)=>{
      this.photos = this.ps.getPhotos()

    })

    this.ps.getErrObs().subscribe((err)=>{
      if(err) this.error = true
      else this.error = false
    })
  }

}
