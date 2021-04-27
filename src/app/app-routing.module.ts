import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { VideosDetailComponent } from './pages/videos-detail/videos-detail.component';
import { VideosComponent } from './pages/videos/videos.component';


const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'photo-detail', component: PhotoDetailComponent },
  { path: 'video', component: VideosComponent },
  { path: 'video-detail', component: VideosDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
