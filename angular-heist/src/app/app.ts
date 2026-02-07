import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-heist');
  
  /**
   * Tracks the last button that was clicked
   */
  lastClicked = signal<string>('None');

  /**
   * Handles button click events
   * @param buttonName - The name of the button that was clicked
   */
  onButtonClick(buttonName: string): void {
    this.lastClicked.set(buttonName);
    console.log(`Button clicked: ${buttonName}`);
  }
}