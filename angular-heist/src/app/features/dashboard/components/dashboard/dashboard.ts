/**
 * Dashboard Component
 * 
 * Main landing page component that displays project statistics and progress.
 * Demonstrates Clean Architecture's feature layer organization.
 * 
 * @architecture Feature Layer - Business logic and user-facing features
 * @pattern Presentational Component - Displays data, no business logic
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class Dashboard {
  // Future: Add signals for dynamic stats
  // Example: readonly completedSteps = signal(14);
}
