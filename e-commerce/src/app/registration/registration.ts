import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  RollNoInputValue:string='';
   Address:string = '';
dob:string='';
mobileno:string='';
menu:string='';
course:string='';
}
