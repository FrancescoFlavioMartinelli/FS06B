import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
// import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

const routes:Route[] = [
  {
    path:"",
    component:HomePage
  },
  {
    path:"active-posts",
    loadChildren: ()=> import("./post/post.module").then(m => m.ActivePostModule)
  },
  {
    path:"inactive-posts",
    loadChildren: ()=> import("./post/post.module").then(m => m.InactivePostModule)
  },
  {
    path:"users",
    component:UsersPage,
    loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)
    // children:[
    //   {
    //     path:":id",
    //     component:UsersDetailsPage
    //   }
    // ]
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,

    HighlightDirective,
    
    UsersPage,
         RegisterComponent,
         LoginComponent,
    // UsersDetailsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
