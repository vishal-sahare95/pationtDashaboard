import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pationt, pationtC } from 'src/app/config/pationt/pationt';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
// public pationtArr:Pationt[]=[];
// public pationtObj:pationtC=new pationtC();
//   constructor(private route:ActivatedRoute){
    
//   }
//   ngOnInit(): void {
    
//       const localData=localStorage.getItem('pationtData')
//     if(localData !=null){
//       this.pationtArr= JSON.parse(localData)
//     }  
//     console.log(this.pationtArr);
    
//     this.route.snapshot.params[2]
//     console.log(this.route.snapshot.params[2]);
    
//   }
public form:FormGroup
public pationtArr:Pationt[]=[];
public pationtObj:pationtC=new pationtC()
private newId?:number
public nid?:number
constructor(private fb:FormBuilder,private router:ActivatedRoute,){
this.form=this.fb.group({
  id:[''],
  fname:['' ,[Validators.required]],
  lname:['' ,[Validators.required]],
  mobileNo:['' ,[Validators.required]],
  email:['' ,[Validators.required]],
  address1:['' ,[Validators.required]],
  address2:['' ,[Validators.required]],
  city:['' ,[Validators.required]],
  state:['' ,[Validators.required]],
  zipcode:['' ,[Validators.required]],
})
this.nid=this.router.snapshot.params['id']

}

ngOnInit(): void {
  const localData=localStorage.getItem('pationtsData')
  if(localData !=null){
    this.pationtArr= JSON.parse(localData)
  }


  this.newId=this.router.snapshot.params['id'];
    
    const currentIndex=this.pationtArr.findIndex(m=>m.id==this.newId)
    console.log(currentIndex);
    

    localStorage.setItem('pationtsData',JSON.stringify(this.pationtArr))

    console.log(this.editData());
    
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
      type:'required', message:'Enter First name '
    }
  ],
  lname:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  mobileNo:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  email:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  address1:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  address2:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  city:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  state:[
    {
      type:'required', message:'Enter First name '
    }
  ],
  zipcode:[
    {
      type:'required', message:'Enter First name '
    }
  ],
}


editData(){
  this.router.snapshot.params['this.nid']
const currentRecord=this.pationtArr.find(m=>m.id==this.newId)
if(currentRecord !=undefined){
this.form.patchValue(currentRecord)

}
}
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    
    }
  }
  
}
