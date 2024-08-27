import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { HomeComponent } from './home/home.component';
import { DocdasComponent } from './docdas/docdas.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoclogingComponent } from './docloging/docloging.component';

const routes: Routes = [
  {path:'admin',component:AdmindashboardComponent},
  {path:'appointmentlist',component:AppoinmentComponent},
  {path:'create-appointment',component:CreateappoinmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdas', component:DocdasComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'medicine-list',component:MedicineListComponent},
  {path:'create-medicine',component:CreateMedicineComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'update-medicine/:id', component:UpdateMedicineComponent},
  {path:'docloging',component:DoclogingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

