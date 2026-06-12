import { Component ,signal} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-gridarray',
  imports: [CommonModule],
  templateUrl: './gridarray.html',
  styleUrl: './gridarray.css',
})


export class Gridarray {
  items: string[] = ['Apple', 'Banana', 'Cherry'];
  imageUrl:string = 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'; 
  // 2. Variable to bind to the input field
  newItem: string = '';

  // 3. Add an item (spread operator creates a new reference for the signal to trigger UI updates)
  
   addItem(newItem: string): void {
    if (newItem.trim()) {
      this.items.push(newItem); // Adds item to the end of the array
    }
  }

  removeItem(index: number): void {
    // Check documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.items.splice(index, 1); // Removes 1 element at the specified index
  }

listHeader = 'My User Roster';
  /*  OSList = [
    { id: 'win', name: 'windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'linux' },
  ]; */
  
    users = [
    { id: 1, name: 'Alice Smith', role: 'Developer' },
    { id: 2, name: 'Bob Jones', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', role: 'Manager' }
  ]; 

headerTitle: string = 'Active Team Members';
  
  users2: User[] = [
    { id: 1, name: 'Arun Kumar', role: 'Developer' },
    { id: 2, name: 'Priya Sharma', role: 'Designer' },
    { id: 3, name: 'Karthik Raja', role: 'Manager' }
  ];

}
