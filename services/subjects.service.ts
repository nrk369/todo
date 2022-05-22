import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError,throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
     private _url:string="/assets/Data/subjects.json";
      constructor(private _http:HttpClient){}
  
    dispSubjects(){
    return this._http.get(this._url)
       .pipe(catchError(this.errorHandler));
    }
      errorHandler(error:HttpErrorResponse){
      return throwError(()=>new Error());
     }
   
    }
