import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

/**
 * Main Layout Component
 * Serves as the application shell, composing Header, Footer, and RouterOutlet
 * This is the wrapper component that provides consistent layout across all pages
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,  // For displaying routed components
    Header,        // Application header with navigation
    Footer         // Application footer with copyright
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  // No properties needed - this is a pure structural component
}