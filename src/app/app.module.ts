import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlipComponent } from './flip/flip.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';

import 'hammerjs';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';
import { VideoComponent } from './video/video.component';
import { EarComponent } from './ear/ear.component';
import { HomeComponent } from './home/home.component';
import { NoseComponent } from './nose/nose.component';
import { ThroatComponent } from './throat/throat.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './products.service';
import { InfoService } from './info.service';
import { AdminComponent } from './admin/admin.component';
import { ReviewComponent } from './review/review.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';










@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    FlipComponent,
    ImageGalleryComponent,
    ImageDetailsComponent,
    FilterimagesPipe,
    VideoComponent,
    EarComponent,
    HomeComponent,
    NoseComponent,
    ThroatComponent,
    ProfileComponent,
    AppointmentComponent,
    ContactComponent,
    BlogComponent,
    AdminComponent,
    ReviewComponent,
  
   
   
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatCardModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule

    
   
  
    
    
    
  ],
  providers: [ImageService, FilterimagesPipe,InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
