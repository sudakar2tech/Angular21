import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

 display = signal<string>('0');

  // Append clicked numbers or operators
  appendValue(val: string) {
    this.display.update(current => current === '0' ? val : current + val);
  }

  // Clear the display
  clear() {
    this.display.set('0');
  }

  // Calculate the result
  calculate() {
    try {
      // Evaluate the mathematical expression safely
      const result = eval(this.display());
      this.display.set(result.toString());
    } catch (error) {
      this.display.set('Error');
    }
  }
}