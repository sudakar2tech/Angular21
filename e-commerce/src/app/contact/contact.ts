import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule  } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [RouterLink, RouterOutlet,RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.sass',
})
export class Contact {}
