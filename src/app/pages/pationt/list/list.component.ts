import {  Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pationt, pationtC } from 'src/app/config/pationt/pationt';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() pationtArr!: Pationt[];
  
public pationtObj:pationtC=new pationtC()

constructor(private route:ActivatedRoute,){

}
  ngOnInit(): void {
   
  }

  deleteData(id:number){
    const currentIndex=this.pationtArr.findIndex(m=>m.id==id)
    this.pationtArr.splice(currentIndex,1)
    localStorage.setItem('pationtsData',JSON.stringify(this.pationtArr))
  }


  
}
