import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarComponent } from './ear/ear.component';
import { HomeComponent } from './home/home.component';
import { NoseComponent } from './nose/nose.component';
import { ThroatComponent } from './throat/throat.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {
  path: 'services/ear',
  component: EarComponent
  },
  {
    path: 'home',
    component: HomeComponent
    },
    {
      path: 'services/nose',
      component: NoseComponent
      },
      {
        path: 'myprofile',
        component: ProfileComponent
        },
        {
          path: 'services/throat',
          component: ThroatComponent
          },
          {
            path: 'appointment',
            component:AppointmentComponent
            },
            {
              path: 'contactme',
              component:ContactComponent
              },
              {
                path: 'blog',
                component:BlogComponent 
                },
                {
                  path: 'admin',
                  component:AdminComponent  
                  },
                  {
                    path: '',
                    redirectTo: '/HomeComponent',
                    pathMatch: 'full'
                    
                    },
                
              


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
