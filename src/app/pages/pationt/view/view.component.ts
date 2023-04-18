import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pationt, pationtC } from 'src/app/config/pationt/pationt';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public pationtArr:Pationt[]=[]
  public pationtObj:pationtC=new pationtC
  private nid?:number
constructor(private router:ActivatedRoute){

  this.nid=this.router.snapshot.params['id']
  
}

ngOnInit(): void {
  const currentRecord=this.pationtArr.find(m=>m.id==this.nid)
if(currentRecord !=undefined){
this.pationtObj=currentRecord
console.log(this.pationtObj);


}
}
}
