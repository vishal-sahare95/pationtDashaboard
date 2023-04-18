import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators}from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
public form:FormGroup;
constructor(private fb:FormBuilder,private router:Router){
  this.form=this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    reminder:['']
  })

}
login(){
  if(this.form.valid){
    if(this.form.get('email')?.value=='vishal@123mail.com' && this.form.get('password')?.value=='vishal'){
      localStorage.setItem('token','hjdfghdfghiu87br78br78hnreh9h9h9hgygh9eg7');

    this.router.navigateByUrl('/pationt/add')
    }else{
      alert('something wrong')
    }
  
  }
  else{

    this.form.markAsUntouched();
    this.form.markAllAsTouched()
  } 
}


get email() {
  return this.form.get('email')
}
get password() {
  return this.form.get('password')
}


public errorMessages={
  email:[
    { type: 'required', message: 'Email name is required' },
   
  ],
  password:[
    { type: 'required', message: 'Password name is required' },
   
  ],
}
}
