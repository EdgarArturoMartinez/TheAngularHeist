import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button variants following common design system patterns
 * @description Defines the visual style of the button
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

/**
 * Button sizes for different use cases
 * @description Controls the button padding and font size
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Reusable Button Component (Presentational/Dumb Component)
 * 
 * @description
 * A shared, reusable button component that follows the presentational component pattern.
 * It has no business logic and receives all data via @Input properties.
 * 
 * @example
 * <app-button 
 *   variant="primary" 
 *   size="medium"
 *   [disabled]="false"
 *   (clicked)="handleClick()">
 *   Click Me
 * </app-button>
 * 
 * @interview
 * - This is a DUMB/PRESENTATIONAL component (no services, no business logic)
 * - Uses @Input for data flow into the component
 * - Uses @Output with EventEmitter for data flow out of the component
 * - Standalone component (no NgModule required in Angular 14+)
 * - Imports CommonModule for common directives (ngClass, ngIf, etc.)
 */
@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button visual style variant
   * @default 'primary'
   */
  @Input() variant: ButtonVariant = 'primary';

  /**
   * Button size
   * @default 'medium'
   */
  @Input() size: ButtonSize = 'medium';

  /**
   * Disables the button when true
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Button type attribute (button, submit, reset)
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Event emitted when button is clicked
   * @interview EventEmitter is an RxJS Subject used for component output
   */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Handles button click events
   * @description Only emits if button is not disabled
   * @interview This method demonstrates event handling in Angular
   */
  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  /**
   * Generates CSS classes based on component inputs
   * @returns Object with CSS class names as keys and boolean values
   * @interview ngClass accepts objects where keys are class names and values are booleans
   */
  getButtonClasses(): { [key: string]: boolean } {
    return {
      'button': true,
      [`button--${this.variant}`]: true,
      [`button--${this.size}`]: true,
      'button--disabled': this.disabled
    };
  }
}