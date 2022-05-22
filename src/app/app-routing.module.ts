import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes:Routes=[
  {path:"viewlist", component:TodoListComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"contactus", component:ContactUsComponent},
  {path:'pagenotfound',component:PagenotfoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutUsComponent,ContactUsComponent,PagenotfoundComponent];