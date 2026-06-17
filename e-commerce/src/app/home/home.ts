import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FirstService } from '../first-service';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, RouterModule, JsonPipe, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [FirstService],
})
export class Home {
  private FirstService = inject(FirstService);
  private http = inject(HttpClient);
  data: any;
  employeelist: any = '';
  dataget: any = '';
  constructor() {
    this.data = this.FirstService.obj;
    this.laodData();
  }

  laodData() {
    this.http.get('http://localhost:3000/employees').subscribe((dataget) => {
      this.employeelist = dataget;
      console.log(this.employeelist);
      
    });
  }
}

