import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent {
  appoinments:Appoinment[]=[];

  constructor(private appoinmentService:AppoinmentService){}

  ngOnInit():void{
    this.getAppoinments();
  }

  getAppoinments(){
    this.appoinmentService.getAllAppoinments().subscribe(data=>{
      this.appoinments=data;
    })
  }
  delete(id:number){
    this.appoinmentService.deleteAppoinment(id).subscribe(data=>{
      console.log(data);
      this.getAppoinments();
    })

  }

}
