import { MedicineService } from './../medicine.service';
import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']  // Corrected from styleUrl to styleUrls
})
export class CreateMedicineComponent {

  medicine: Medicine = new Medicine();

  constructor(private medicineService: MedicineService, private router: Router) { }

  saveMedicine() {
    this.medicineService.createMedicines(this.medicine).subscribe(data => {
      console.log(data);
      this.goToViewMedicine();
    }, error => console.log(error));
  }

  onSubmit() {
    this.saveMedicine();
  }

  goToViewMedicine() {
    this.router.navigate(['/medicine-list']);
  }

}
