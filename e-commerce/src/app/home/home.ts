import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule  } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
