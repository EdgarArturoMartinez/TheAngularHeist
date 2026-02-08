import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/**
 * Header Component
 * Displays the application header with navigation links
 * Used in the main layout to provide consistent navigation across all pages
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],  // Import RouterLink for navigation
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  /**
   * Application title displayed in the header
   */
  title = 'Angular Heist';
}