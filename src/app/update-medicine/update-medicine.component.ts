import { MedicineService } from './../medicine.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine:Medicine=new Medicine();
  id:number=0;

  constructor(private route:ActivatedRoute, private medicineService:MedicineService, private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
  }
  onSubmit(){
    this.medicineService.updateMedicineById(this.id, this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicineList();
    });

  }

  goToMedicineList(){
    this.router.navigate(['/medicine-list']);
  }

}
