import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  count = 0
  
  constructor(private ps:PhotoService) { }

  ngOnInit(): void {
    this.ps.getLikeObs().subscribe(res=>{
      if(res) this.count++;
      else this.count--;
    })
  }

}
