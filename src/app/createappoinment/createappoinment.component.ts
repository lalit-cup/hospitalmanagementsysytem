import { Component } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createappoinment',
  templateUrl: './createappoinment.component.html',
  styleUrl: './createappoinment.component.css'
})
export class CreateappoinmentComponent {
  appoinment:Appoinment=new Appoinment();

  constructor(private appoinmentService:AppoinmentService, private router:Router){}

  saveAppoinment(){
    this.appoinmentService.createAppoinment(this.appoinment).subscribe(data=>{
      console.log(data);
      this.goToAppoinment();
    })
  }


  onSubmit(){
    this.saveAppoinment()
  }

  goToAppoinment(){
    this.router.navigate(['/appointmentlist']);
  }

}
