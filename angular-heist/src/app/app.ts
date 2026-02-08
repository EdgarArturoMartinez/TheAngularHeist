import { Component } from '@angular/core';
import { MainLayout } from './layout/main-layout/main-layout';

/**
 * Root application component
 * This component serves as the entry point for the Angular application
 * Uses MainLayout component to provide consistent app shell structure
 */
@Component({
  selector: 'app-root',
  imports: [MainLayout],  // Import MainLayout for application shell
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  /**
   * Application title
   */
  title = 'angular-heist';
}