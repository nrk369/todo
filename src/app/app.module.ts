import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SubjectsService } from 'services/subjects.service';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
