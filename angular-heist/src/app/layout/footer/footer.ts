import { Component } from '@angular/core';

/**
 * Footer Component
 * Displays the application footer with copyright information
 * Used in the main layout to provide consistent footer across all pages
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],  // No imports needed for basic footer
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  /**
   * Current year for copyright notice
   * Automatically updates each year
   */
  currentYear = new Date().getFullYear();

  /**
   * Application name for copyright
   */
  appName = 'Angular Heist';
}