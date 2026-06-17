import { Component,computed,signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface User {
  id: number;
  name: string;
  price: string;
  quantity: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

Shop = [
    { id: 1, name: 'Alice Smith', price: '10', quantity: '5' },
    { id: 2, name: 'Bob Jones', price: '10' , quantity: '2' },
    { id: 3, name: 'Charlie Brown', price: '10', quantity: '1' }
  ]; 

    // 2. Track the search query with a Signal
  searchTerm = signal<string>('');

  // 3. Automatically recalculate the filtered array when searchTerm changes
  filteredUsers = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();

    // If query is empty, return the original array right away
    if (!query) {
      return this.Shop;
    }

    // Filter by checking both 'name' and 'role' properties
    return this.Shop.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.price.toLowerCase().includes(query)
    );
  });

  // 4. Update the signal value on every keystroke
  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.set(inputElement.value);
  }
   // Track the ID of the row being edited
  editingRowId: number | null = null;
  // Temporary storage to discard changes on cancel
  cachedRowData: any = null;

  startEdit(row: User): void {
    this.editingRowId = row.id;
    this.cachedRowData = { ...row }; // Clone row data
  }

  saveEdit(row: User): void {
    // Commit changes (Send an HTTP request here if needed)
    this.editingRowId = null;
    this.cachedRowData = null;
  }

  cancelEdit(row: User): void {
    // Restore the unmodified data snapshot
    //this.Shop[index] = { ...this.cachedRowData };
    this.editingRowId = null;
    this.cachedRowData = null;
  }
 

}


