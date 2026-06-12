import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
  maxStars = input<number>(5);
  rating = input<number>(0);
  ratingChange = output<number>();
  Description:string='';
  // Tracks hovered star for smooth UI feedback
  hoveredStar = signal<number | null>(null);

  maxStars1 = input<number>(5);
  rating1 = input<number>(0);
  ratingChange1 = output<number>();
  Description1:string='';
  // Tracks hovered star for smooth UI feedback
  hoveredStar1 = signal<number | null>(null);

  myscore:number=0;
  myscore1:number=0;

  get starsArray(): number[] {
    return Array(this.maxStars()).fill(0).map((_, i) => i + 1);
  }

  onStarClick(score: number): void {
    this.ratingChange.emit(score);  
    this.myscore= score;
      
  }
  onStarClick1(score: number): void {
    this.ratingChange1.emit(score);  
    this.myscore1= score;
      
  }
  onStarHover(score: number): void {
    this.hoveredStar.set(score);
  }

    onStarHover1(score: number): void {
    this.hoveredStar1.set(score);
  }
  onStarLeave(): void {
    //this.hoveredStar.set(null);
  }

   onStarLeave1(): void {
    //this.hoveredStar1.set(null);
  }

}
