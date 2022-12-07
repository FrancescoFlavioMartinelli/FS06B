import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsPage } from '../pages/active-posts.page';
import { InactivePostsPage } from '../pages/inactive-posts.page';
import { PostDetailsPage } from '../pages/post-details.page';
import { PostCardComponent } from '../components/post-card.component';
import { MaiuscoloPipe } from '../pipes/maiuscolo.pipe';

@NgModule({
  declarations: [
    PostDetailsPage,
    PostCardComponent,
    MaiuscoloPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostDetailsPage,
    PostCardComponent
  ]
})
export class PostModule { }

// active-posts/
const rActive : Routes = [
  {
    path: '',
    component: ActivePostsPage
  },
  {
    path: '/:id',
    component:PostDetailsPage
  }
]


@NgModule({
  declarations: [
    ActivePostsPage
  ],
  imports: [
    CommonModule,
    PostModule,
    RouterModule.forChild(rActive)
  ]
})
export class ActivePostModule { }



// inactive-posts/
const rInactive : Routes = [
  {
    path: '',
    component: InactivePostsPage
  },{
    path: '/:id',
    component:PostDetailsPage
  }
]
@NgModule({
  declarations: [
    InactivePostsPage
  ],
  imports: [
    CommonModule,
    PostModule,
    RouterModule.forChild(rInactive)
  ]
})
export class InactivePostModule { }
