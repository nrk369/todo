import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ElementRef} from '@angular/core';
import { ViewChild } from '@angular/core';
import { textValidator } from '../shared/text.validator';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
   public list:any[]=[];
  //  errorMessage:string='';
   noDataFound:string='';
  @ViewChild("item") hello!:ElementRef;
 
   
   subjectForm=new FormGroup({
   id:new FormControl(''),
   subject:new FormControl('',[Validators.required,Validators.minLength(4),textValidator(/[A-Z]/)]),
   isDisabled:new FormControl(true),
   btnText:new FormControl(''),
  });
  ngOnInit(): void {
  }
  constructor(private _http:HttpClient){
    let x:any=localStorage.getItem("rk"); 
     if(x!==null){
     this.list=JSON.parse(x);
     
     }
     else
     {
     this.noDataFound="No Data Available...";
     }
   }

  get text(){
    return this.subjectForm.get('subject');
  }

  addSubject(name:any){
     if (name!=='' && this.subjectForm.valid){
     let obj={id: this.list.length, subject:name, isDisabled:true,btnText:"Edit"};
     this.list.push(obj);
     localStorage.setItem("rk",JSON.stringify(this.list));   
     this.noDataFound='';
     (this.hello!.nativeElement as HTMLInputElement).select();
     (this.hello!.nativeElement as HTMLInputElement).focus();
    }
  }

  onEdit(obj:any,subText:any){
    if(obj.btnText==='Edit'){
    obj.isDisabled=false;
    obj.btnText="Save";
  }
  else{
    this.list[obj.id].subject=subText;
    this.list[obj.id].isDisabled=true;
    this.list[obj.id].btnText="Edit";
    localStorage.setItem("rk", JSON.stringify(this.list));
  }
  }

  onDelete(id:number){
    this.list=this.list.filter(item=>item.id!==id);
     if((this.list.length)===0){
      localStorage.removeItem("rk");
      this.noDataFound="No Data Available..."
    } else {
    localStorage.setItem("rk", JSON.stringify(this.list));
    }
  }
}