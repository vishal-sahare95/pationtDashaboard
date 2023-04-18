import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pationt, pationtC } from 'src/app/config/pationt/pationt';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
public form:FormGroup
public pationtArr:Pationt[]=[];
public pationtObj:pationtC=new pationtC()
private newId?:number
constructor(private fb:FormBuilder,private route:ActivatedRoute){
this.form=this.fb.group({
  id:[this.newId],
  fname:['' ,[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  lname:['' ,[Validators.required ,Validators.pattern('[a-zA-Z]*')]],
  mobileNo:['' ,[Validators.required ,Validators.pattern('^[0-9]{10}$')]],
  email:['' ,[Validators.required ,Validators.pattern('[a-zA-Z@.0-9]*')]],
  address1:['' ,[Validators.required ,Validators.pattern('[a-zA-Z 0-9]*')]],
  address2:['' ,[Validators.required ,Validators.pattern('[a-zA-Z 0-9]*')]],
  city:['' ,[Validators.required ,Validators.pattern('[a-zA-Z ]*')]],
  state:['' ,[Validators.required ,Validators.pattern('[a-zA-Z ]*')]],
  zipcode:['' ,[Validators.required ,Validators.pattern('[0-9{4}]*')]],
})
}

ngOnInit(): void {
  const localData=localStorage.getItem('pationtsData')
  if(localData !=null){
    this.pationtArr= JSON.parse(localData)
  }
}

get id(){
  return this.form.get('id')
}
get fname(){
  return this.form.get('fname')
}
get lname(){
  return this.form.get('lname')
}
get mobileNo(){
  return this.form.get('mobileNo')
}
get email(){
  return this.form.get('email')
}
get address1(){
  return this.form.get('address1')
}
get address2(){
  return this.form.get('address2')
}
get city(){
  return this.form.get('city')
}
get state(){
  return this.form.get('state')
}
get zipcode(){
  return this.form.get('zipcode')
}


errorMSG={
  fname:[
    {
      type:'required', message:'field is required  '
    },
    {
      type:'pattern', message:'Only alphabets allowed '
    }
  ],
  lname:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only alphabets allowed '
    }
  ],
  mobileNo:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only 10 digits numbers allowed '
    }
  ],
  email:[
    {
      type:'required', message:'field is required '
    }
  ],
  address1:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only alphabets numbers  allowed '
    }
  ],
  address2:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only alphabets numbers  allowed '
    }
  ],
  city:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only alphabets  allowed '
    }
  ],
  state:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only alphabets  allowed '
    }
  ],
  zipcode:[
    {
      type:'required', message:'field is required '
    },
    {
      type:'pattern', message:'Only numbers allowed '
    }
  ],
}


// add function
save(){

if(this.form.valid){
  if(this.route.snapshot.params){}
  const pationtdata=this.form.value
  pationtdata.id=this.pationtArr.length+1
 this.pationtArr.push(pationtdata)
  localStorage.setItem('pationtsData',JSON.stringify(this.pationtArr))
 this.form.reset()
 
}else{
  this.form.markAllAsTouched()
  this.form.markAsTouched()
}
}
logOut(){
  localStorage.removeItem('token');
  
}


}
