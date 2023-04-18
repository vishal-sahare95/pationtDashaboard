import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  public status: boolean = false;
  public isSidepannel:boolean=true
  clickEvent(){
      this.status = !this.status; 
      console.log(this.status);
            
  }
}
