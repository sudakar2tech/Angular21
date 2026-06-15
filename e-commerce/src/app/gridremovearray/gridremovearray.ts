import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gridremovearray',
  imports: [CommonModule],
  templateUrl: './gridremovearray.html',
  styleUrl: './gridremovearray.css',
})
export class Gridremovearray { // Source array list
 imageUrl:string = 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'; 
  gridHeader:string = "Grid array remove";
  items = signal([
    { id: 1, Firstname: 'Sudakar', Lastname: 's' },
    { id: 2, Firstname: 'Angular' , Lastname: 'ts' },
    { id: 3, Firstname: 'Jquery' , Lastname: 'script'}
  ]);

  removeSelected(selectedId: number): void {
    // Update the signal with a filtered array
    this.items.update(currentItems => 
      currentItems.filter(item => item.id !== selectedId)
    );
     
   
  }
}
