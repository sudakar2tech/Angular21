import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gridremovearray',
  imports: [CommonModule],
  templateUrl: './gridremovearray.html',
  styleUrl: './gridremovearray.css',
})
export class Gridremovearray { // Source array list
  items = signal([
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' }
  ]);

  removeSelected(selectedId: number): void {
    // Update the signal with a filtered array
    this.items.update(currentItems => 
      currentItems.filter(item => item.id !== selectedId)
    );
  }
}
