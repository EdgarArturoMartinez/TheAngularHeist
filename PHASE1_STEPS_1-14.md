# 📚 Phase 1 - Detailed Step-by-Step Documentation (Steps 1-14)

> **Archive Date:** February 7, 2026  
> **Phase:** Project Foundation - Environment Setup, Clean Architecture, Layout Components  
> **Steps Covered:** Steps 1-14

This document contains the detailed documentation for Steps 1-14 of The Angular Heist project. For the current project status and ongoing steps, see the main README.md

---

## 📝 Step-by-Step Documentation

### ✅ Step 1: Install Node.js and npm (COMPLETED - Feb 06, 2026)

**Objective:** Set up the Node.js runtime environment and npm package manager, which are prerequisites for Angular development.

**What We Did:**
1. ✅ Installed Node.js v24.13.0 (LTS recommended)
2. ✅ Verified npm v11.9.0 installation
3. ✅ Fixed PowerShell execution policy issue on Windows
   - Ran: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - This allows npm scripts to run in PowerShell

**Key Commands:**
```powershell
# Verify Node.js installation
node --version  # v24.13.0

# Verify npm installation
npm --version   # 11.6.2

# Fix PowerShell execution policy (Windows only)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Interview Knowledge:**
- **Node.js**: JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser
- **npm**: Node Package Manager - the default package manager for Node.js, used to install Angular and other dependencies
- **Execution Policy**: Windows PowerShell security feature that controls script execution; RemoteSigned allows local scripts to run
- **Why Node.js for Angular?**: Angular CLI and build tools are Node.js applications; the development server runs on Node.js

**Common Interview Questions:**
1. *Q: Why do we need Node.js for Angular?*  
   A: Angular CLI, webpack, and the development server are all Node.js applications. Node.js provides the runtime environment for development tools, even though Angular runs in the browser.

2. *Q: What's the difference between npm and npx?*  
   A: npm installs packages, npx executes packages (can run without installing globally). Example: `npx @angular/cli new my-app`

3. *Q: What is package.json?*  
   A: A manifest file that contains project metadata, dependencies, scripts, and configuration for npm.

---

### ✅ Step 2: Install Angular CLI (COMPLETED - Feb 06, 2026)

**Objective:** Install the Angular Command Line Interface (CLI) globally to enable Angular project creation and management.

**What We Did:**
1. ✅ Installed Angular CLI v21.1.3 globally using npm
2. ✅ Verified installation with `ng version` command

**Key Commands:**
```powershell
# Install Angular CLI globally
npm install -g @angular/cli

# Verify Angular CLI installation
ng version
```

**Installation Details:**
- **Angular CLI Version:** 21.1.3 (latest as of Feb 2026)
- **Node.js Version:** 24.13.0
- **npm Version:** 11.9.0
- **Platform:** Windows x64

**Interview Knowledge:**
- **Angular CLI**: Command-line interface tool for initializing, developing, scaffolding, and maintaining Angular applications
- **Global vs Local Installation**: 
  - Global (`-g` flag): Available system-wide for creating new projects
  - Local: Project-specific version (installed as dev dependency)
- **Why Global Installation?**: Allows using `ng` commands from anywhere to create new Angular projects

**Common CLI Commands:**
```bash
ng new <project-name>     # Create a new Angular project
ng serve                  # Run development server
ng generate component <name>  # Generate component
ng build                  # Build for production
ng test                   # Run unit tests
ng e2e                    # Run end-to-end tests
```

**Common Interview Questions:**
1. *Q: What is Angular CLI and why use it?*  
   A: Angular CLI is an official command-line tool that automates project creation, scaffolding, build processes, and development workflows. It enforces best practices and eliminates manual configuration.

2. *Q: What happens when you run `ng serve`?*  
   A: Angular CLI compiles TypeScript to JavaScript, bundles the application using webpack, starts a development server (usually on port 4200), and enables hot module replacement for live reload.

3. *Q: What's the difference between `ng build` and `ng build --prod`?*  
   A: In modern Angular (v12+), `--prod` is deprecated. Use `ng build --configuration production` for optimized builds with AOT compilation, minification, tree-shaking, and bundling.

4. *Q: Can you have different Angular CLI versions in different projects?*  
   A: Yes! Global CLI creates projects, but each project has its local CLI version in `node_modules`. The local version takes precedence when running commands inside the project.

---

### ✅ Step 3: Create Angular Project (COMPLETED - Feb 06, 2026)

**Objective:** Create a new Angular application with routing, SCSS, and strict TypeScript settings.

**What We Did:**
1. ✅ Created Angular project named "angular-heist"
2. ✅ Enabled routing module for navigation
3. ✅ Configured SCSS for advanced styling
4. ✅ Enabled strict TypeScript for better code quality
5. ✅ Skipped git initialization (already have a repo)
6. ✅ Opted out of SSR and SSG (client-side only for now)

**Key Commands:**
```powershell
ng new angular-heist --routing --style=scss --strict --skip-git
```

**Project Configuration:**
- **Project Name:** angular-heist
- **Angular Version:** 21.1.0 (Latest)
- **TypeScript Version:** 5.9.2
- **Package Manager:** npm 11.9.0
- **Styling:** SCSS (Sass)
- **Routing:** Enabled (app.routes.ts)
- **Strict Mode:** Enabled
- **Architecture:** Standalone Components (Angular 21 default)

**Project Structure Created:**
```
angular-heist/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main standalone component
│   │   ├── app.config.ts       # Application configuration
│   │   ├── app.routes.ts       # Routing configuration
│   │   ├── app.html            # Main template
│   │   ├── app.scss            # Main styles
│   │   └── app.spec.ts         # Unit tests
│   ├── index.html              # HTML entry point
│   ├── main.ts                 # Application bootstrap
│   └── styles.scss             # Global styles
├── angular.json                # Angular workspace config
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript base config
└── node_modules/               # Installed packages
```

**Key Dependencies Installed:**
- `@angular/core` - Angular core framework
- `@angular/router` - Routing and navigation
- `@angular/forms` - Form handling (reactive and template-driven)
- `@angular/common` - Common pipes, directives, and services
- `rxjs` - Reactive Extensions for JavaScript (observables)
- `typescript` - TypeScript compiler

**Interview Knowledge:**
- **Standalone Components (Angular 21)**: New approach where components don't require NgModules. Components import their dependencies directly, reducing boilerplate.
- **SCSS vs CSS**: SCSS is a preprocessor that adds features like variables, nesting, mixins, and functions to CSS.
- **Strict Mode**: Enables stricter TypeScript checking (strictNullChecks, strictFunctionTypes, etc.) for better type safety.
- **app.config.ts**: Replaces traditional app.module.ts in standalone architecture; configures providers and application-level settings.
- **Routing in Angular**: Client-side navigation without full page reloads; uses browser's History API.

**npm Scripts Available:**
```json
"start": "ng serve"           // Start dev server
"build": "ng build"           // Production build
"watch": "ng build --watch"   // Watch mode for development
"test": "ng test"             // Run unit tests
```

**Common Interview Questions:**
1. *Q: What's the difference between Angular modules and standalone components?*  
   A: NgModules group related components/services, but create complexity. Standalone components (Angular 14+) import dependencies directly, reducing boilerplate and improving tree-shaking.

2. *Q: Why use SCSS over CSS?*  
   A: SCSS provides variables, nesting, mixins, functions, and partials. It compiles to CSS, maintaining browser compatibility while offering better maintainability.

3. *Q: What is strict mode in Angular/TypeScript?*  
   A: Enables stricter type checking, null checks, and compilation options. Catches more errors at compile time, leading to more robust code.

4. *Q: What happens when you run `ng new`?*  
   A: CLI creates project structure, installs dependencies via npm, configures TypeScript/Angular settings, sets up testing framework, and creates initial component.

5. *Q: What is the purpose of angular.json?*  
   A: Workspace configuration file that defines build options, file replacements, assets, styles, scripts, and environment configurations for each project.

6. *Q: What is RxJS and why does Angular use it?*  
   A: RxJS is a library for reactive programming using observables. Angular uses it for async operations, HTTP requests, event handling, and state management.

---

### ✅ Step 4: Test Angular Application (COMPLETED - Feb 07, 2026)

**Objective:** Verify that the Angular development environment is working correctly by running the application in the browser.

**What We Did:**
1. ✅ Navigated to the angular-heist project directory
2. ✅ Started the development server using `npm start`
3. ✅ Verified compilation completed successfully
4. ✅ Confirmed application runs on http://localhost:4200
5. ✅ Verified Angular welcome page displays correctly
6. ✅ Confirmed no console errors in browser or terminal

**Key Commands:**
```powershell
# Navigate to project directory
cd angular-heist

# Start development server (alias for ng serve)
npm start

# Alternative: Direct ng command
ng serve

# Serve on specific port
ng serve --port 4300

# Open browser automatically
ng serve --open
```

**What Happens During `ng serve`:**
1. **TypeScript Compilation**: Converts .ts files to JavaScript
2. **Template Compilation**: Processes Angular templates (.html files)
3. **SCSS Compilation**: Converts SCSS to CSS
4. **Bundling**: Webpack bundles all files together
5. **Development Server**: Starts on localhost:4200
6. **Watch Mode**: Monitors file changes for hot reload
7. **Live Reload**: Automatically refreshes browser on code changes

**Development Server Details:**
- **Default URL**: http://localhost:4200
- **Watch Mode**: Enabled by default (auto-recompile on file changes)
- **Hot Module Replacement (HMR)**: Browser updates without full page reload
- **Source Maps**: Generated for debugging TypeScript in browser DevTools

**Interview Knowledge:**
- **Development Server**: Node.js-based server using webpack-dev-server that serves the application during development
- **Hot Module Replacement (HMR)**: Technology that updates modules in the browser without full page reload, preserving application state
- **Watch Mode**: File system watcher that detects changes and triggers recompilation
- **Source Maps**: Files that map compiled JavaScript back to original TypeScript for debugging
- **Webpack**: Module bundler that Angular CLI uses under the hood to bundle application files
- **Incremental Compilation**: Only changed files are recompiled, speeding up rebuild times

**Common Interview Questions:**
1. *Q: What happens when you run `ng serve`?*  
   A: Angular CLI uses webpack to compile TypeScript, templates, and styles, then starts a development server with live reload. It watches for file changes and automatically recompiles and refreshes the browser.

2. *Q: What is the difference between `ng serve` and `ng build`?*  
   A: `ng serve` compiles and serves the app in memory with a dev server and watch mode. `ng build` compiles the app and outputs static files to the dist/ folder for deployment.

3. *Q: How does Hot Module Replacement work in Angular?*  
   A: HMR replaces changed modules in the browser without full page reload. It preserves application state, making development faster by avoiding repetitive navigation and data entry.

4. *Q: What are source maps and why are they important?*  
   A: Source maps link compiled JavaScript to original TypeScript source code. They enable debugging TypeScript directly in browser DevTools, showing original line numbers and variable names.

5. *Q: Why does Angular need a development server?*  
   A: Modern browsers have CORS restrictions that prevent loading local files. The dev server hosts files over HTTP, enables live reload, and provides proper MIME types for modules.

6. *Q: What port does Angular dev server use by default?*  
   A: Port 4200. If occupied, it prompts to use another port. You can specify a port with `ng serve --port <number>`.

7. *Q: Can you run multiple Angular apps simultaneously?*  
   A: Yes, but each needs a different port. Use `ng serve --port 4201` for the second app.

8. *Q: What is webpack and how does Angular use it?*  
   A: Webpack is a module bundler that takes modules with dependencies and generates static assets. Angular CLI uses it behind the scenes to bundle TypeScript, templates, styles, and assets.

**Browser Console Verification:**
- No red errors in Console tab
- Angular DevTools can be installed for enhanced debugging
- Network tab shows successful loading of bundles (main.js, styles.css, etc.)

**Common Issues & Solutions:**
- **Port 4200 in use**: Use `--port` flag or kill process using the port
- **Compilation errors**: Check TypeScript syntax and imports
- **Module not found**: Run `npm install` to ensure dependencies are installed
- **Browser cache**: Hard refresh with Ctrl+Shift+R or clear cache

---

### ✅ Step 5: Plan Clean Architecture Structure (COMPLETED - Feb 07, 2026)

**Objective:** Design a comprehensive Clean Architecture folder structure that follows SOLID principles and Angular best practices.

**What We Planned:**
1. ✅ Defined the layered architecture approach (Onion Architecture)
2. ✅ Designed folder structure for each architectural layer
3. ✅ Established SOLID principles for each layer
4. ✅ Identified design patterns to implement
5. ✅ Planned feature module organization

**Architectural Layers Designed:**

```
┌─────────────────────────────────────┐
│   Presentation (UI Components)      │  ← User Interface
├─────────────────────────────────────┤
│   Application (Use Cases/Services)  │  ← Business Logic
├─────────────────────────────────────┤
│   Domain (Entities/Interfaces)      │  ← Core Business
├─────────────────────────────────────┤
│   Infrastructure (API/Data)         │  ← External Systems
└─────────────────────────────────────┘
```

**Folder Structure Plan:**

1. **core/** - Application-wide singleton services
   - guards/ - Route protection (auth, roles)
   - interceptors/ - HTTP request/response handling
   - services/ - Core services (auth, storage, error handling)
   - models/ - Core domain interfaces
   - constants/ - Application constants

2. **shared/** - Reusable UI components
   - components/ - Presentational/dumb components
   - directives/ - Custom directives
   - pipes/ - Data transformation pipes
   - utils/ - Utility functions and validators

3. **features/** - Feature modules (lazy-loaded)
   - dashboard/ - Dashboard feature
     - components/ - Feature-specific components
     - services/ - Feature-specific services
     - models/ - Feature-specific interfaces

4. **data/** - Data access layer
   - repositories/ - Repository pattern abstractions
   - api/ - HTTP API service implementations
   - dto/ - Data Transfer Objects

5. **layout/** - Application shell
   - header/ - Header component
   - footer/ - Footer component
   - sidebar/ - Sidebar navigation
   - main-layout/ - Main layout wrapper

**SOLID Principles Applied:**

| Principle | Application |
|-----------|-------------|
| **S**ingle Responsibility | Each service/component has one clear purpose |
| **O**pen/Closed | Components extensible via inputs; closed to modification |
| **L**iskov Substitution | Repository interfaces allow swapping implementations |
| **I**nterface Segregation | Features import only what they need |
| **D**ependency Inversion | Depend on abstractions (interfaces), not implementations |

**Design Patterns Identified:**
- **Repository Pattern**: Abstract data access from business logic
- **Singleton Pattern**: Core services provided in root
- **Observer Pattern**: RxJS observables for async operations
- **Factory Pattern**: Creating complex objects
- **Facade Pattern**: Simplifying complex subsystems
- **Strategy Pattern**: Interchangeable algorithms

**Interview Knowledge:**
- **Clean Architecture**: Architectural pattern separating concerns into layers with dependencies pointing inward
- **Dependency Rule**: Outer layers depend on inner layers, never the reverse
- **Core vs Shared**: Core = singleton services (stateful), Shared = reusable UI (stateless)
- **Repository Pattern**: Abstraction between business logic and data sources
- **Smart vs Dumb Components**: Smart (container) components have logic and inject services; dumb (presentational) use only inputs/outputs
- **Lazy Loading**: Loading feature modules on-demand to reduce initial bundle size
- **Barrel Exports**: index.ts files that re-export modules for cleaner imports

**Common Interview Questions:**

1. *Q: What is Clean Architecture?*  
   A: An architectural pattern that organizes code into layers with clear boundaries. The Dependency Rule ensures dependencies point inward toward business logic, making the domain independent of frameworks and UI.

2. *Q: What's the difference between core and shared folders?*  
   A: Core contains singleton services and cross-cutting concerns (auth, logging) that are application-wide and stateful. Shared contains reusable, stateless UI components, pipes, and directives.

3. *Q: Why use the Repository Pattern?*  
   A: It abstracts data access, decoupling business logic from data sources. This makes code testable (mock repositories), maintainable (change data source without affecting features), and follows Dependency Inversion.

4. *Q: What are Smart vs Dumb components?*  
   A: Smart (Container) components have business logic, inject services, and manage state (in features/). Dumb (Presentational) components are pure UI with input/output only, no services (in shared/).

5. *Q: Why lazy-load features?*  
   A: Improves initial load time by loading only the code needed for the current route. Features are bundled separately and loaded on-demand, reducing the main bundle size.

6. *Q: What is the Dependency Inversion Principle?*  
   A: High-level modules should not depend on low-level modules; both should depend on abstractions. For example, features depend on repository interfaces, not concrete implementations.

7. *Q: How does Clean Architecture improve testability?*  
   A: By depending on interfaces rather than implementations, we can easily mock dependencies in tests. Business logic is isolated from frameworks and external dependencies.

---

### ✅ Step 6: Implement Clean Architecture Folder Structure (COMPLETED - Feb 07, 2026)

**Objective:** Create the physical folder structure for Clean Architecture in the Angular project.

**What We Did:**
1. ✅ Created core layer folders (guards, interceptors, services, models, constants)
2. ✅ Created shared layer folders (components, directives, pipes, utils)
3. ✅ Created features layer with dashboard feature
4. ✅ Created data layer folders (repositories, api, dto)
5. ✅ Created layout folders (header, footer, sidebar, main-layout)
6. ✅ Added barrel export files (index.ts) for cleaner imports

**Key Commands Used:**
```powershell
# Navigate to app directory
cd angular-heist/src/app

# Create core layer
New-Item -ItemType Directory -Path "core/guards", "core/interceptors", "core/services", "core/models", "core/constants" -Force

# Create shared layer
New-Item -ItemType Directory -Path "shared/components", "shared/directives", "shared/pipes", "shared/utils" -Force

# Create features layer
New-Item -ItemType Directory -Path "features/dashboard/components", "features/dashboard/services", "features/dashboard/models" -Force

# Create data layer
New-Item -ItemType Directory -Path "data/repositories", "data/api", "data/dto" -Force

# Create layout layer
New-Item -ItemType Directory -Path "layout/header", "layout/footer", "layout/sidebar", "layout/main-layout" -Force

# Create barrel export files
New-Item -ItemType File -Path "core/index.ts", "shared/index.ts", "features/index.ts", "data/index.ts", "layout/index.ts" -Force

# Verify structure
tree /F
```

**Final Folder Structure Created:**

```
angular-heist/src/app/
├── core/
│   ├── constants/
│   ├── guards/
│   ├── interceptors/
│   ├── models/
│   ├── services/
│   └── index.ts
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   ├── utils/
│   └── index.ts
├── features/
│   ├── dashboard/
│   │   ├── components/
│   │   ├── models/
│   │   └── services/
│   └── index.ts
├── data/
│   ├── api/
│   ├── dto/
│   ├── repositories/
│   └── index.ts
├── layout/
│   ├── footer/
│   ├── header/
│   ├── main-layout/
│   ├── sidebar/
│   └── index.ts
├── app.ts
├── app.config.ts
├── app.routes.ts
├── app.html
└── app.scss
```

**Layer Responsibilities:**

**🔷 Core Layer (`core/`)**
- Purpose: Application-wide singleton services and cross-cutting concerns
- Characteristics: Provided in root, imported once in app.config.ts
- Examples: AuthService, ErrorHandlerService, LocalStorageService

**🔶 Shared Layer (`shared/`)**
- Purpose: Reusable UI components, pipes, and directives
- Characteristics: Stateless, no business logic, highly reusable
- Examples: ButtonComponent, ModalComponent, TruncatePipe

**🟢 Features Layer (`features/`)**
- Purpose: Feature-specific business logic and components
- Characteristics: Lazy-loaded, self-contained, imports shared components
- Examples: DashboardComponent, UserListComponent

**🔵 Data Layer (`data/`)**
- Purpose: External data access and API communication
- Characteristics: Repository pattern, DTO transformations
- Examples: UserRepository, UserApiService, UserDto

**🟣 Layout Layer (`layout/`)**
- Purpose: Application shell and layout components
- Characteristics: Used once, contains router-outlet
- Examples: HeaderComponent, FooterComponent, MainLayoutComponent

**Interview Knowledge:**
- **Barrel Exports (index.ts)**: Re-export modules to simplify imports. Instead of `import { X } from './folder/subfolder/file'`, use `import { X } from './folder'`
- **PowerShell -Force Flag**: Creates parent directories if they don't exist (like `mkdir -p` in Unix)
- **Tree Command**: Displays directory structure hierarchically for verification
- **Separation of Concerns**: Each folder has a specific, well-defined responsibility
- **Scalability**: Structure supports growing application without refactoring

**Common Interview Questions:**

1. *Q: What are barrel exports and why use them?*  
   A: Barrel exports (index.ts files) re-export modules from a folder, allowing cleaner imports. Instead of importing from deep paths, you import from the folder itself.

2. *Q: How do you organize an Angular project for scalability?*  
   A: Use Clean Architecture with clear separation of concerns: core for singletons, shared for reusable UI, features for business logic (lazy-loaded), data for API access, and layout for shell.

3. *Q: What's the benefit of the features folder structure?*  
   A: Features are self-contained and lazy-loaded, reducing initial bundle size. Each feature has its own components, services, and models, making development and maintenance easier.

4. *Q: Why separate data access into a data layer?*  
   A: Following the Repository Pattern, the data layer abstracts how data is fetched. Features depend on repository interfaces, allowing you to swap data sources without changing business logic.

5. *Q: How does this structure support SOLID principles?*  
   A: Single Responsibility (each layer has one job), Open/Closed (extend via interfaces), Liskov Substitution (swap implementations), Interface Segregation (import only what's needed), Dependency Inversion (depend on abstractions).

**Best Practices Applied:**
- ✅ Logical separation of concerns
- ✅ Scalable folder structure
- ✅ Supports lazy loading
- ✅ Testability through abstraction
- ✅ Follows Angular style guide
- ✅ Ready for barrel exports
- ✅ Clear naming conventions

---

### ✅ Step 7: Create First Shared Component (Button) (COMPLETED - Feb 07, 2026)

**Objective:** Build a production-ready, reusable Button component demonstrating Angular best practices, TypeScript typing, and SCSS with BEM methodology.

**What We Did:**
1. ✅ Generated standalone Button component using Angular CLI
2. ✅ Implemented TypeScript types and interfaces for type safety
3. ✅ Added @Input decorators for component configuration
4. ✅ Added @Output with EventEmitter for event handling
5. ✅ Created multiple button variants (primary, secondary, danger, success)
6. ✅ Implemented three size options (small, medium, large)
7. ✅ Applied BEM (Block Element Modifier) naming convention in SCSS
8. ✅ Added comprehensive JSDoc documentation
9. ✅ Implemented accessibility features (focus-visible, disabled states)
10. ✅ Added smooth transitions and hover effects

**Key Commands Used:**
```powershell
# Generate standalone component with tests
ng generate component shared/components/button --standalone --skip-tests=false

# Alternative shorter syntax
ng g c shared/components/button --standalone
```

**Files Created:**
```
shared/components/button/
├── button.ts          # Component class with TypeScript
├── button.html        # Template with data binding
├── button.scss        # Styles with BEM methodology
└── button.spec.ts     # Unit tests
```

**Component Architecture:**

**1. TypeScript Component (button.ts)**

**Type Definitions:**
```typescript
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';
```

**Component Inputs:**
- `variant: ButtonVariant` - Visual style (primary, secondary, danger, success)
- `size: ButtonSize` - Button size (small, medium, large)
- `disabled: boolean` - Disabled state
- `type: 'button' | 'submit' | 'reset'` - Native button type

**Component Outputs:**
- `clicked: EventEmitter<void>` - Emits when button is clicked

**Key Methods:**
- `onClick()` - Handles click events, emits only if not disabled
- `getButtonClasses()` - Returns object for ngClass directive

**2. HTML Template (button.html)**

**Angular Template Syntax Used:**
- `[type]="type"` - Property binding for button type attribute
- `[ngClass]="getButtonClasses()"` - Dynamic CSS classes
- `[disabled]="disabled"` - Property binding for disabled state
- `(click)="onClick()"` - Event binding for click handler
- `<ng-content></ng-content>` - Content projection for button text

**3. SCSS Styles (button.scss)**

**BEM Methodology:**
- **Block:** `.button` - Base component
- **Modifiers:** `.button--primary`, `.button--small`, etc.
- **Benefits:** Prevents CSS conflicts, clear naming, maintainable

**Variants Implemented:**
- Primary: Indigo (#4f46e5) - Main actions
- Secondary: Gray (#6b7280) - Secondary actions
- Danger: Red (#dc2626) - Destructive actions
- Success: Green (#16a34a) - Positive actions

**Features:**
- Smooth transitions (0.2s ease-in-out)
- Hover effects (translateY, box-shadow)
- Focus-visible for accessibility
- Disabled state (opacity, cursor, pointer-events)
- Responsive to user interactions

**Interview Knowledge:**

**Component Communication:**
- **@Input**: Parent → Child communication (data flows down)
- **@Output**: Child → Parent communication (events flow up)
- **EventEmitter**: RxJS Subject wrapper for component outputs
- **One-way Data Flow**: Angular's data binding strategy

**Template Syntax:**
- **Property Binding `[prop]`**: Binds TypeScript value to DOM property
- **Event Binding `(event)`**: Listens to DOM events, calls component methods
- **Two-way Binding `[(ngModel)]`**: Combines property and event binding
- **Interpolation `{{ }}`**: Renders TypeScript expression in template

**Content Projection:**
- **ng-content**: Projects content from parent into child component
- **Similar to**: React's `children` prop or Vue's slots
- **Use Case**: Allows flexible component composition

**TypeScript Features:**
- **Type Aliases**: Custom types (ButtonVariant, ButtonSize)
- **Union Types**: Restricts values to specific set ('primary' | 'secondary')
- **Decorators**: @Component, @Input, @Output metadata
- **JSDoc Comments**: Documentation with @description, @example, @interview tags
- **Access Modifiers**: public (default), private, protected

**BEM Methodology:**
- **Block**: Independent, reusable component (.button)
- **Element**: Part of block (.button__icon)
- **Modifier**: Variation of block (.button--primary)
- **Benefits**: Avoids CSS specificity wars, self-documenting, scalable

**SCSS Features Used:**
- **Nesting**: Hierarchical selectors (`&:hover`, `&--modifier`)
- **Parent Selector (&)**: References parent selector
- **Comments**: Single-line (//) and multi-line (/* */)
- **Variables**: Can use SCSS variables for theming (not used here, but possible)

**Common Interview Questions:**

1. *Q: What's the difference between @Input and @Output?*  
   A: @Input passes data from parent to child (property binding). @Output sends events from child to parent using EventEmitter (event binding). This implements one-way data flow.

2. *Q: What is EventEmitter and how does it work?*  
   A: EventEmitter is an RxJS Subject that emits values. In Angular, it's used with @Output to send events from child to parent. It has methods like emit(), subscribe(), etc.

3. *Q: What is ng-content used for?*  
   A: ng-content provides content projection, allowing parent components to inject content into child components. It's similar to React's children or Vue's slots.

4. *Q: What is the BEM naming convention?*  
   A: BEM (Block Element Modifier) is a CSS naming methodology. Block is the component (.button), Element is a child (.button__icon), Modifier is a variation (.button--primary). It prevents CSS conflicts.

5. *Q: What's the difference between property binding and interpolation?*  
   A: Property binding [prop]="value" sets DOM properties. Interpolation {{ value }} converts to strings and renders in templates. Property binding is preferred for non-string values.

6. *Q: Why use TypeScript type aliases?*  
   A: Type aliases create reusable custom types, improving code readability and type safety. They enable autocomplete and catch errors at compile time.

7. *Q: What is a presentational/dumb component?*  
   A: A component with no business logic that receives all data via @Input and emits events via @Output. It doesn't inject services or manage state. Highly reusable and testable.

8. *Q: How does ngClass work?*  
   A: ngClass directive adds/removes CSS classes dynamically. It accepts strings, arrays, or objects where keys are class names and values are booleans.

9. *Q: What's the benefit of standalone components?*  
   A: Standalone components (Angular 14+) don't require NgModules. They import dependencies directly, reducing boilerplate and improving tree-shaking.

10. *Q: Why disable pointer-events on disabled buttons?*  
   A: pointer-events: none prevents all mouse interactions (hover, click, etc.) on disabled elements, ensuring consistent behavior across browsers.

**Component Usage Example:**
```html
<!-- In parent component template -->
<app-button 
  variant="primary" 
  size="large"
  [disabled]="isLoading"
  (clicked)="handleSubmit()">
  Submit Form
</app-button>

<app-button 
  variant="danger" 
  size="small"
  (clicked)="handleDelete()">
  Delete
</app-button>
```

**Best Practices Demonstrated:**
- ✅ Standalone component architecture
- ✅ Strong TypeScript typing
- ✅ JSDoc documentation
- ✅ Presentational component pattern
- ✅ BEM naming convention
- ✅ Accessibility (focus-visible)
- ✅ Smooth animations
- ✅ Content projection
- ✅ One-way data flow
- ✅ Disabled state handling

---

### ✅ Step 8: Test Button Component in App (COMPLETED - Feb 07, 2026)

**Objective:** Integrate the Button component into the main application and verify all functionality works correctly in the browser.

**What We Did:**
1. ✅ Imported Button component into App component
2. ✅ Created component showcase template with all variants
3. ✅ Implemented event handler to track button clicks
4. ✅ Used Angular signals for reactive state management
5. ✅ Created beautiful UI with gradient background and card layouts
6. ✅ Tested all 4 button variants (primary, secondary, danger, success)
7. ✅ Tested all 3 button sizes (small, medium, large)
8. ✅ Verified disabled state prevents clicks
9. ✅ Confirmed event binding works correctly
10. ✅ Added responsive design for mobile devices

**Files Modified:**
```
app/
├── app.ts              # Added Button import, signal, and click handler
├── app.html            # Created showcase template
└── app.scss            # Added beautiful styling
```

**Key Code Changes:**

**1. App Component TypeScript (app.ts)**

**Imports:**
```typescript
import { Button } from './shared/components/button/button';
```

**Component Decorator:**
```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],  // Added Button to imports array
  // ...
})
```

**State Management with Signals:**
```typescript
lastClicked = signal<string>('None');
```

**Event Handler:**
```typescript
onButtonClick(buttonName: string): void {
  this.lastClicked.set(buttonName);      // Update signal
  console.log(`Button clicked: ${buttonName}`);
}
```

**2. App Component Template (app.html)**

**Component Usage Examples:**
```html
<!-- Basic usage with variant -->
<app-button variant="primary" (clicked)="onButtonClick('Primary')">
  Primary Button
</app-button>

<!-- With size property -->
<app-button variant="primary" size="large" (clicked)="onButtonClick('Large')">
  Large
</app-button>

<!-- With disabled state -->
<app-button variant="primary" [disabled]="true">
  Disabled
</app-button>

<!-- Signal interpolation -->
<p>Last button clicked: <strong>{{ lastClicked() }}</strong></p>
```

**3. App Component Styles (app.scss)**

**Key Styling Features:**
- Gradient background (purple to blue)
- Card-based layout with box shadows
- Flexbox for responsive button groups
- SCSS nesting for component organization
- Media queries for mobile responsiveness
- Professional color scheme

**Visual Layout:**
```
┌────────────────────────────────────────┐
│  Header - Title & Description          │
├────────────────────────────────────────┤
│  ┌──────────────────────────────────┐  │
│  │  Button Variants Section       │  │
│  │  [Primary] [Secondary] [Danger]│  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Button Sizes Section          │  │
│  │  [S] [M] [L]                   │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Disabled State Section        │  │
│  │  [Enabled] [Disabled]          │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Click Tracking: Primary       │  │
│  └──────────────────────────────────┘  │
├────────────────────────────────────────┤
│  Footer - Project Info                 │
└────────────────────────────────────────┘
```

**Interview Knowledge:**

**Angular Signals (New in Angular 16+):**
- **What are Signals?**: Reactive primitives for fine-grained reactivity
- **signal()**: Creates a writable signal with initial value
- **set()**: Updates signal value
- **Reading signals**: Call as function `lastClicked()`
- **Benefits**: Better performance, simpler change detection, no Zone.js dependency

**Component Imports in Standalone:**
```typescript
@Component({
  imports: [Button]  // Import components directly, no NgModule needed
})
```

**Event Binding:**
- **(clicked)="handler()"**: Binds custom event from child component
- **Parent receives events**: Via @Output EventEmitter from child
- **Unidirectional data flow**: Events up, data down

**Content Projection:**
- **<app-button>Text</app-button>**: Text projected via <ng-content>
- **Flexible component composition**: Parent controls button content
- **Slot-based pattern**: Similar to Web Components slots

**SCSS Features:**
- **Nesting**: Hierarchical CSS matching HTML structure
- **Variables**: Can use $ for reusable values
- **Media Queries**: Responsive breakpoints inline with selectors
- **& Parent Selector**: References parent in nested rules

**Flexbox Layout:**
- **display: flex**: Creates flex container
- **flex-direction: column**: Stacks items vertically
- **gap**: Spacing between flex items (modern CSS)
- **flex-wrap: wrap**: Wraps items to new lines

**Common Interview Questions:**

1. *Q: What are Angular Signals and how do they differ from Observables?*  
   A: Signals are synchronous reactive primitives for state management. Unlike Observables (push-based, async), Signals are pull-based and synchronous. They offer better performance with fine-grained reactivity and simpler API.

2. *Q: How do you import components in standalone architecture?*  
   A: Add components to the imports array in @Component decorator: `imports: [Button, OtherComponent]`. No NgModule needed.

3. *Q: How does parent-child communication work in Angular?*  
   A: Parent sends data to child via @Input (property binding). Child sends events to parent via @Output with EventEmitter (event binding). This ensures unidirectional data flow.

4. *Q: What is the difference between signals and observables?*  
   A: Signals are synchronous, pull-based, and simpler (just call it as function). Observables are asynchronous, push-based, and require subscription. Signals are better for local component state.

5. *Q: How do you handle click events from child components?*  
   A: Child emits event via @Output EventEmitter. Parent binds to it with (eventName)="handler($event)". The $event contains emitted data.

6. *Q: What is content projection good for?*  
   A: Creating flexible, reusable components. Buttons, cards, modals benefit from content projection - allowing parents to customize content while child handles presentation.

7. *Q: How do you make a responsive layout with SCSS?*  
   A: Use media queries with breakpoints: `@media (max-width: 768px) { }`. SCSS allows nesting media queries inside selectors for organization.

8. *Q: What's the benefit of using signal() over a regular property?*  
   A: Signals provide reactivity. When updated with .set(), Angular automatically updates templates that read the signal. Regular properties require manual change detection.

**Verified Functionality:**
- ✅ All 4 variants render with correct colors
- ✅ All 3 sizes display properly
- ✅ Primary button: Indigo (#4f46e5)
- ✅ Secondary button: Gray (#6b7280)
- ✅ Danger button: Red (#dc2626)
- ✅ Success button: Green (#16a34a)
- ✅ Disabled button grayed out and unclickable
- ✅ Click events fire and update UI
- ✅ Signal updates reactively
- ✅ Console.log shows button clicks
- ✅ Hover effects work (translateY, box-shadow)
- ✅ Focus-visible outline for accessibility
- ✅ No hover on disabled buttons
- ✅ Responsive design on mobile
- ✅ No errors in console

**Best Practices Demonstrated:**
- ✅ Component reusability
- ✅ Angular Signals for state management
- ✅ Event handling and data flow
- ✅ Professional UI/UX design
- ✅ Responsive web design
- ✅ SCSS organization and nesting
- ✅ Semantic HTML structure
- ✅ Gradient backgrounds
- ✅ Card-based layouts
- ✅ Console logging for debugging

---

### ✅ Step 10: Set Up Angular Routing (COMPLETED - Feb 07, 2026)

**🎯 Objective:**
Configure Angular's routing system to enable navigation between different views/pages in the application.

**📋 What Was Done:**

1. **Updated app.routes.ts:**
   - Imported Routes from @angular/router
   - Created empty routes array (will be populated with actual routes later)
   - Prepared routing configuration for future components

2. **Modified app.html:**
   - Replaced all content with `<router-outlet></router-outlet>`
   - This directive serves as placeholder for routed components
   - Angular dynamically loads components into this outlet based on URL

3. **Updated app.ts:**
   - Removed unused Button component import
   - Added RouterOutlet import from @angular/router
   - Included RouterOutlet in component's imports array
   - Simplified component class (removed signal-based button demo)
   - Added educational JSDoc comments

4. **Fixed Code Issues:**
   - Removed duplicate class definition
   - Cleaned up unused imports and properties
   - Ensured clean, production-ready code

5. **Testing:**
   - Ran `ng serve` successfully
   - Application loads at localhost:4200 without errors
   - Verified RouterOutlet renders correctly (blank page is expected with empty routes)

**📁 Files Modified:**
```
angular-heist/src/app/
├── app.routes.ts     [MODIFIED - Empty routes array ready for configuration]
├── app.html          [MODIFIED - Added <router-outlet>]
└── app.ts            [MODIFIED - Added RouterOutlet, removed Button demo]
```

**🎓 Interview Knowledge:**

**Angular Router Basics:**
- **Router**: Angular's navigation library for single-page applications
- **RouterOutlet**: Directive that marks where routed components should be displayed
- **Routes**: Array of route configurations mapping URLs to components
- **Path**: URL segment that activates a route (e.g., 'dashboard', 'about')
- **Standalone Routing**: Modern approach using provideRouter() in app.config.ts

**RouterOutlet Explained:**
```html
<router-outlet></router-outlet>
```
- Acts as a placeholder in the DOM
- Angular injects activated component here
- Multiple outlets possible (named outlets for advanced scenarios)
- Essential for single-page application architecture

**Route Configuration Structure:**
```typescript
export const routes: Routes = [
  {
    path: '',              // Default route (empty URL)
    redirectTo: '/home',   // Redirect to another route
    pathMatch: 'full'      // Match entire URL
  },
  {
    path: 'dashboard',     // URL: localhost:4200/dashboard
    component: DashboardComponent  // Component to load
  },
  {
    path: 'users/:id',     // Route parameter
    component: UserDetailComponent
  }
];
```

**Modern Routing with Lazy Loading:**
```typescript
{
  path: 'admin',
  loadComponent: () => import('./admin/admin.component')
    .then(m => m.AdminComponent)
  // Component loaded only when route is accessed
}
```

**Common Interview Questions:**

1. *Q: What is RouterOutlet and what does it do?*  
   A: RouterOutlet is a directive that acts as a placeholder in the template where Angular dynamically inserts the component that matches the current route. It's the core of Angular's routing system.

2. *Q: How do you configure routes in Angular standalone components?*  
   A: Create a Routes array in app.routes.ts, then provide it in app.config.ts using provideRouter(routes). Import RouterOutlet in components that need to display routed views.

3. *Q: What is the difference between pathMatch: 'full' and 'prefix'?*  
   A: 'full' matches the entire URL exactly. 'prefix' matches if the URL starts with the path. Use 'full' for redirects from empty path to avoid infinite loops.

4. *Q: How does lazy loading work in Angular routing?*  
   A: Use loadComponent or loadChildren with dynamic imports. The module/component is only downloaded when the user navigates to that route, reducing initial bundle size.

5. *Q: Can you have multiple router outlets?*  
   A: Yes! Use named outlets: `<router-outlet name="sidebar"></router-outlet>`. Configure routes with outlet property to target specific outlets.

6. *Q: What happens if no route matches the current URL?*  
   A: Angular displays nothing in the router outlet. Use a wildcard route (`path: '**'`) to handle unknown routes with a 404 component.

7. *Q: How do you programmatically navigate in Angular?*  
   A: Inject Router service and use `router.navigate(['/path'])` or `router.navigateByUrl('/path')`. Also use RouterLink directive in templates.

8. *Q: What is the difference between component and loadComponent in route config?*  
   A: component loads eagerly (included in initial bundle). loadComponent uses dynamic import for lazy loading (loads only when needed).

**Router Configuration Best Practices:**
- ✅ Use lazy loading for feature modules to reduce initial bundle size
- ✅ Always define a wildcard route ('**') for 404 handling
- ✅ Use pathMatch: 'full' for empty path redirects
- ✅ Organize routes by feature (feature-based routing)
- ✅ Use route guards for authentication and authorization
- ✅ Implement breadcrumbs using router data property
- ✅ Preload strategies for background loading of lazy modules

**Single-Page Application (SPA) Architecture:**
- Browser never fully reloads
- Router changes URL without page refresh
- Components swap in/out of RouterOutlet
- Faster user experience, smoother transitions
- Browser back/forward buttons work naturally

**Verified Functionality:**
- ✅ RouterOutlet directive properly imported and used
- ✅ Routes array created and exported
- ✅ Application compiles without errors
- ✅ Development server runs successfully
- ✅ No console errors or warnings
- ✅ Clean code without unused imports
- ✅ Ready for route definitions

**Best Practices Demonstrated:**
- ✅ Modern standalone components architecture
- ✅ Empty routes array for gradual implementation
- ✅ Clean component structure
- ✅ Proper import management
- ✅ JSDoc documentation
- ✅ Production-ready code structure

---

### ✅ Step 11: Create Header Component (COMPLETED - Feb 07, 2026)

**🎯 Objective:**
Build a professional header component for the application layout with navigation links.

**📋 What Was Done:**

1. **Created header.ts:**
   - Standalone component with selector 'app-header'
   - Imported RouterLink from @angular/router for navigation
   - Added RouterLink to component imports array
   - Created title property for application name
   - Added comprehensive JSDoc comments
   - Exported class as Header (following naming convention)

2. **Created header.html:**
   - Semantic `<header>` element with BEM class naming
   - Logo/title section with routerLink to home
   - Navigation section with three links (Home, Dashboard, About)
   - Used routerLink directive for client-side navigation
   - Template interpolation for dynamic title
   - Organized structure with container div

3. **Created header.scss:**
   - Beautiful gradient background (blue tones: #2563eb to #1e40af)
   - Sticky positioning (header stays at top when scrolling)
   - Flexbox layout with space-between (logo left, nav right)
   - Professional styling with box-shadow
   - Smooth hover effects on navigation links
   - Responsive design with max-width container
   - BEM methodology with SCSS nesting
   - Transition animations for smooth interactions

4. **Styling Features:**
   - `position: sticky` - Header remains visible during scroll
   - `z-index: 1000` - Ensures header stays on top of content
   - Gradient background for modern look
   - Hover effects: background color change + translateY animation
   - Proper spacing with gap property (modern CSS)
   - Professional color scheme and typography

5. **Verification:**
   - All three files created successfully
   - No compilation errors
   - Component follows Angular best practices
   - Clean, maintainable code structure

**📁 Files Created:**
```
angular-heist/src/app/layout/header/
├── header.ts        [NEW - Component class with RouterLink]
├── header.html      [NEW - Template with navigation]
└── header.scss      [NEW - Gradient styling and flexbox]
```

**🎓 Interview Knowledge:**

**Layout Components:**
- **Purpose**: Structural components that define the application shell
- **Examples**: Header, Footer, Sidebar, Main Layout wrapper
- **Characteristics**: Reusable across entire app, minimal logic, focused on presentation
- **Best Practice**: Separate layout from features for better modularity

**RouterLink Directive:**
```html
<a routerLink="/dashboard">Dashboard</a>
```
- Declarative navigation in templates
- Prevents full page reload (SPA behavior)
- Angular intercepts clicks and uses Router
- Can be string or array: `[routerLink]="['/user', userId]"`
- Automatically adds active class with `routerLinkActive`

**Sticky Positioning:**
```scss
position: sticky;
top: 0;
z-index: 1000;
```
- Hybrid of relative and fixed positioning
- Element scrolls normally until reaching threshold (top: 0)
- Then "sticks" in place while scrolling
- No JavaScript required
- Perfect for headers and navigation bars

**Flexbox Layout Pattern:**
```scss
display: flex;
justify-content: space-between;  // Space between items
align-items: center;             // Vertical centering
gap: 2rem;                       // Spacing between children
```
- Modern CSS layout system
- Replaces float-based layouts
- Handles alignment and distribution easily
- Responsive by default

**CSS Gradients:**
```scss
background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
```
- Creates smooth color transitions
- `135deg` - Diagonal direction
- Color stops at 0% and 100%
- More visually interesting than solid colors
- Modern, professional appearance

**BEM with SCSS Nesting:**
```scss
.header {
  &__container { }  // Becomes .header__container
  &__nav { }        // Becomes .header__nav
  &__link { }       // Becomes .header__link
}
```
- `&` references parent selector
- Keeps related styles together
- More maintainable than flat CSS
- Clear naming hierarchy

**Common Interview Questions:**

1. *Q: What is the difference between RouterLink and href?*  
   A: RouterLink uses Angular's router for client-side navigation (no page reload). href causes full page reload. RouterLink is preferred in SPAs for better performance and user experience.

2. *Q: How does position: sticky work?*  
   A: It's a hybrid of relative and fixed. The element scrolls normally until it reaches a threshold (e.g., top: 0), then it "sticks" in place. No JavaScript needed.

3. *Q: What is a layout component and how is it different from a feature component?*  
   A: Layout components define the application shell (header, footer, sidebar). They're structural and reused across the app. Feature components contain business logic and are specific to features.

4. *Q: Why use BEM methodology?*  
   A: BEM (Block Element Modifier) creates clear, predictable class names. It prevents naming conflicts, makes code more maintainable, and improves team collaboration.

5. *Q: What are the benefits of using flexbox for header layout?*  
   A: Flexbox makes alignment easy (vertical centering, space distribution). It's responsive by default, reduces code complexity, and handles different content sizes gracefully.

6. *Q: How do you make a component standalone in Angular?*  
   A: Set `standalone: true` in @Component decorator and add dependencies to the imports array. No NgModule needed.

7. *Q: What is the purpose of z-index on a sticky header?*  
   A: Ensures the header stays above other content when sticky. Higher z-index means it renders on top of elements with lower z-index values.

8. *Q: How do you import and use RouterLink in a standalone component?*  
   A: Import it from '@angular/router' and add to component's imports array: `imports: [RouterLink]`. Then use in template: `<a routerLink="/path">Link</a>`.

9. *Q: What's the difference between routerLink with string vs array?*  
   A: String: `routerLink="/path"` for simple routes. Array: `[routerLink]="['/user', userId]"` for dynamic segments and parameters.

10. *Q: Why use max-width on the container?*  
    A: Prevents content from stretching too wide on large screens. Improves readability and maintains professional appearance.

**CSS Transitions Explained:**
```scss
transition: all 0.3s ease;
```
- `all` - Apply to all animatable properties
- `0.3s` - Duration (300 milliseconds)
- `ease` - Timing function (starts slow, speeds up, slows down)
- Creates smooth animations on hover/state changes

**Transform Property:**
```scss
transform: translateY(-2px);  // Move up 2 pixels
```
- Hardware-accelerated (better performance than top/left)
- Doesn't affect document flow
- Common for hover effects and animations

**Verified Functionality:**
- ✅ Component compiles without errors
- ✅ RouterLink properly imported and used
- ✅ Three navigation links defined
- ✅ BEM naming convention followed
- ✅ Gradient background renders correctly
- ✅ Sticky positioning configured
- ✅ Flexbox layout for left/right alignment
- ✅ Hover effects on links
- ✅ Professional styling and spacing
- ✅ Responsive container with max-width
- ✅ JSDoc documentation complete

**Best Practices Demonstrated:**
- ✅ Standalone component architecture
- ✅ BEM methodology for CSS
- ✅ SCSS nesting and organization
- ✅ Semantic HTML (header, nav elements)
- ✅ Modern CSS (flexbox, grid, gap, sticky)
- ✅ Accessibility (semantic elements, proper hierarchy)
- ✅ Component reusability
- ✅ Separation of layout from features
- ✅ Professional UI/UX design
- ✅ Gradient backgrounds for visual interest
- ✅ Smooth transition animations
- ✅ JSDoc documentation

**Design Patterns Applied:**
- **Component Pattern**: Reusable, self-contained UI element
- **Template Pattern**: Separate HTML from logic
- **Observer Pattern**: Angular's event binding and change detection
- **Separation of Concerns**: HTML, CSS, TypeScript in separate files

---

### ✅ Step 12: Create Footer Component (COMPLETED - Feb 07, 2026)

**🎯 Objective:**
Build a professional footer component to complete the application layout structure with copyright information and links.

**📋 What Was Done:**

1. **Created footer.ts:**
   - Standalone component with selector 'app-footer'
   - Created `currentYear` property using `new Date().getFullYear()`
   - Created `appName` property for application name
   - No imports needed for basic footer (empty imports array)
   - Added comprehensive JSDoc comments
   - Exported class as Footer

2. **Created footer.html:**
   - Semantic `<footer>` element with BEM class naming
   - Copyright notice with `&copy;` HTML entity (©)
   - Dynamic year interpolation: `{{ currentYear }}`
   - Dynamic app name interpolation: `{{ appName }}`
   - Footer links section (Privacy, Terms, Contact)
   - Clean, organized structure with container div
   - Professional layout with content wrapper

3. **Created footer.scss:**
   - Dark gradient background (#1e293b to #0f172a) - complements blue header
   - Subtle border-top for visual separation
   - Centered text layout for professional appearance
   - Smaller font sizes (0.875rem, 0.75rem) appropriate for footer
   - `margin-top: auto` - enables sticky footer pattern
   - Flexbox layout for footer links with gap
   - Gray color scheme (#94a3b8, #cbd5e1, #64748b)
   - Hover effects on links with smooth transitions
   - BEM methodology with SCSS nesting

4. **Dynamic Content:**
   - JavaScript `Date` object to get current year
   - Automatically displays 2026 (updates each year)
   - No hardcoded dates - future-proof implementation

5. **Verification:**
   - All three files created successfully
   - No compilation errors
   - Component follows Angular best practices
   - Clean, maintainable code structure

**📁 Files Created:**
```
angular-heist/src/app/layout/footer/
├── footer.ts        [NEW - Component with dynamic year]
├── footer.html      [NEW - Template with copyright & links]
└── footer.scss      [NEW - Dark gradient styling]
```

**🎓 Interview Knowledge:**

**Dynamic Content in Angular:**
```typescript
currentYear = new Date().getFullYear();  // 2026
```
- Executes when component is instantiated
- Automatically updates each year
- No need to manually update copyright dates
- JavaScript Date object provides year, month, day, etc.

**Date Object Methods:**
- `getFullYear()` - Returns 4-digit year (2026)
- `getMonth()` - Returns month (0-11, January = 0)
- `getDate()` - Returns day of month (1-31)
- `getDay()` - Returns day of week (0-6, Sunday = 0)
- `getTime()` - Returns milliseconds since epoch

**HTML Entities:**
```html
&copy;   → ©  (copyright symbol)
&trade;  → ™  (trademark)
&reg;    → ®  (registered)
&nbsp;   →    (non-breaking space)
&lt;     → <  (less than)
&gt;     → >  (greater than)
```

**Footer Design Patterns:**

**1. Simple Footer:**
```html
<footer>
  <p>© 2026 Company Name</p>
</footer>
```

**2. Multi-column Footer:**
```html
<footer>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</footer>
```

**3. Sticky Footer Pattern:**
```scss
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;  // Takes all available space
}

footer {
  margin-top: auto;  // Pushes to bottom
}
```

**Color Complementarity:**
- **Header**: Bright blue (#2563eb, #1e40af) - attention-grabbing
- **Footer**: Dark slate (#1e293b, #0f172a) - subdued, professional
- Creates visual hierarchy and balance
- Cool color palette maintains consistency

**BEM for Footer:**
```scss
.footer {              // Block
  &__container { }     // Element
  &__text { }          // Element
  &__links { }         // Element
  &__link { }          // Element
    &:hover { }        // State modifier
}
```

**Common Interview Questions:**

1. *Q: How do you get the current year dynamically in Angular?*  
   A: Use `new Date().getFullYear()` in the component class. It executes when the component initializes and returns the current year automatically.

2. *Q: What are HTML entities and when do you use them?*  
   A: HTML entities are special character codes that start with & and end with ;. Use them for reserved HTML characters (<, >, &) or special symbols (©, ™, ®).

3. *Q: How do you implement a sticky footer pattern?*  
   A: Use flexbox on the body with `flex-direction: column` and `min-height: 100vh`. Give main content `flex: 1` and footer `margin-top: auto` to push it to the bottom.

4. *Q: Why use smaller font sizes in footers?*  
   A: Footers contain secondary information (copyright, legal, links). Smaller text (0.75rem-0.875rem) creates visual hierarchy and indicates lower importance.

5. *Q: How do you create complementary color schemes?*  
   A: Use colors from the same family (blues) or adjacent on color wheel. Vary brightness/saturation - bright header, dark footer creates balance.

6. *Q: What is the difference between margin-top: auto and position: fixed for footers?*  
   A: `margin-top: auto` pushes footer to bottom in flexbox but scrolls with content. `position: fixed` keeps footer visible at all times, overlaying content.

7. *Q: Why separate layout components from feature components?*  
   A: Layout components (header, footer) are structural and reused app-wide. Feature components contain business logic and are feature-specific. Separation improves maintainability.

8. *Q: How does new Date() work in component class properties?*  
   A: It executes once when component instance is created. For class properties, initialization happens during component construction.

**Gradient vs Solid Colors:**
```scss
// Gradient - more visual interest
background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);

// Solid - simpler, cleaner
background-color: #1e293b;
```
- Gradients add depth and sophistication
- Solid colors are simpler and lighter weight
- 135deg creates diagonal gradient

**Typography Sizing:**
- Base text: 1rem (16px)
- Footer text: 0.875rem (14px) - small but readable
- Footer subtext: 0.75rem (12px) - minimal size
- rem units scale with user preferences (accessibility)

**Verified Functionality:**
- ✅ Component compiles without errors
- ✅ Dynamic year displays correctly (2026)
- ✅ Copyright symbol renders properly
- ✅ Footer links styled and hoverable
- ✅ Dark gradient background renders
- ✅ BEM naming convention followed
- ✅ Flexbox layout for horizontal links
- ✅ Smooth hover transitions
- ✅ Professional spacing and typography
- ✅ JSDoc documentation complete

**Best Practices Demonstrated:**
- ✅ Standalone component architecture
- ✅ Dynamic content with JavaScript Date
- ✅ BEM methodology for CSS
- ✅ SCSS nesting and organization
- ✅ Semantic HTML (footer element)
- ✅ HTML entities for special characters
- ✅ Complementary color design
- ✅ Appropriate typography hierarchy
- ✅ Smooth transitions for interactions
- ✅ Flexbox for modern layout
- ✅ JSDoc documentation
- ✅ Separation of layout from features
- ✅ Component reusability

**Design Principles Applied:**
- **Visual Hierarchy**: Smaller text indicates secondary importance
- **Consistency**: Matches header's max-width and padding
- **Balance**: Dark footer balances bright header
- **Flexibility**: Links easily extensible for more content
- **Future-proof**: Dynamic year never needs updating

---

### ✅ Step 13: Create Main Layout Component (COMPLETED - Feb 07, 2026)

**🎯 Objective:**
Build the Main Layout component that combines Header, Footer, and RouterOutlet to create the complete application shell using the composition pattern.

**📋 What Was Done:**

1. **Created main-layout.ts:**
   - Standalone component with selector 'app-main-layout'
   - Imported RouterOutlet from '@angular/router'
   - Imported Header component from '../header/header'
   - Imported Footer component from '../footer/footer'
   - Added all three to component imports array
   - Pure structural component with no business logic
   - Comprehensive JSDoc comments
   - Exported class as MainLayout

2. **Created main-layout.html:**
   - Wrapper div with class 'layout'
   - Header component using `<app-header></app-header>`
   - Main content area with semantic `<main>` element
   - RouterOutlet for displaying routed components
   - Footer component using `<app-footer></app-footer>`
   - BEM naming for content area: `layout__content`
   - Clean, semantic HTML structure

3. **Created main-layout.scss:**
   - Flexbox column layout for vertical stacking
   - `min-height: 100vh` ensures full viewport height
   - Beautiful gradient background (light gray tones)
   - Content area with `flex: 1` to fill available space
   - This creates the "sticky footer" effect automatically
   - Max-width container (1400px) for content centering
   - Responsive padding with media query
   - Professional spacing and layout

4. **Layout Architecture:**
   - **Composition Pattern**: Combines three components (Header, Footer, RouterOutlet)
   - **Sticky Footer**: Footer automatically pushed to bottom
   - **Flexible Content**: Main area grows/shrinks based on content
   - **Responsive Design**: Different padding on mobile vs desktop
   - **Semantic HTML**: Proper use of header, main, footer elements

5. **Flexbox Magic:**
   - Display flex with column direction stacks components vertically
   - min-height: 100vh ensures layout fills screen
   - flex: 1 on content makes it take all available space
   - Header and footer take their natural heights
   - Result: Footer always at bottom, even with minimal content

6. **Verification:**
   - All three files created successfully
   - No compilation errors
   - Fixed styleUrls to styleUrl (modern Angular convention)
   - Component follows Angular best practices
   - Clean, maintainable code structure

**📁 Files Created:**
```
angular-heist/src/app/layout/main-layout/
├── main-layout.ts       [NEW - Composition component]
├── main-layout.html     [NEW - Application shell template]
└── main-layout.scss     [NEW - Flexbox sticky footer layout]
```

**🎓 Interview Knowledge:**

**Composition Pattern:**
```typescript
@Component({
  imports: [RouterOutlet, Header, Footer]
})
export class MainLayout { }
```
- Combines multiple components into one
- Each component has single responsibility
- Easy to test and maintain separately
- Promotes reusability and modularity

**Application Shell Architecture:**
- **Shell**: Persistent layout structure (header, footer, sidebar)
- **Content**: Dynamic pages that change (router-outlet)
- **Benefits**: Consistent UX, single source of truth for layout
- **Pattern**: Used in most modern web applications

**Sticky Footer with Flexbox:**
```scss
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  &__content {
    flex: 1;  // This is the magic!
  }
}
```

**How it works:**
1. Container is at least 100vh (full screen height)
2. Header takes natural height (e.g., 80px)
3. Content takes ALL remaining space (`flex: 1`)
4. Footer takes natural height (e.g., 100px)
5. If content is short, footer stays at bottom
6. If content is long, footer moves down naturally

**Component Import Paths:**
```typescript
import { Header } from '../header/header';
```
- `../` - Go up one directory level
- `header/` - Enter header directory
- `header` - Import from header.ts (no extension needed)

**Viewport Units:**
- `100vh` - 100% of viewport height
- `100vw` - 100% of viewport width
- `1vh` - 1% of viewport height
- Responsive to screen size automatically
- Perfect for full-screen layouts

**Semantic HTML Elements:**
```html
<header>   - Top of page/section
<main>     - Main content area (should be unique per page)
<footer>   - Bottom of page/section
<nav>      - Navigation links
<article>  - Self-contained content
<section>  - Thematic grouping
```

**Benefits of semantic HTML:**
- Better SEO (search engines understand structure)
- Improved accessibility (screen readers)
- Clearer code structure
- Default browser styling
- Future-proof

**Common Interview Questions:**

1. *Q: What is the composition pattern and why use it?*  
   A: Composition combines multiple components into one larger component. It promotes single responsibility, reusability, and easier testing. Each component handles one concern.

2. *Q: How do you create a sticky footer with CSS Flexbox?*  
   A: Make parent flex column with min-height: 100vh. Give content area flex: 1 to take all available space. Footer naturally stays at bottom.

3. *Q: What is an application shell?*  
   A: The persistent layout structure (header, footer, sidebar) that wraps dynamic content. Provides consistent UX across all pages.

4. *Q: Why use semantic HTML elements?*  
   A: Improves accessibility, SEO, code clarity, and provides meaningful structure. Screen readers and search engines understand content better.

5. *Q: What does flex: 1 do?*  
   A: Shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0. Element grows to fill available space and shrinks if needed.

6. *Q: What's the difference between vh and %?*  
   A: vh is relative to viewport (100vh = full screen height). % is relative to parent element. Use vh for full-screen layouts.

7. *Q: How do standalone components import other standalone components?*  
   A: Add the component to the imports array in @Component decorator: `imports: [Header, Footer, RouterOutlet]`. No NgModule needed.

8. *Q: Why put router-outlet inside a main element?*  
   A: Semantic HTML. `<main>` indicates primary content. Also provides styling hook and improves accessibility.

9. *Q: What is the difference between styleUrl and styleUrls?*  
   A: styleUrl (singular) is modern Angular for single file. styleUrls (array) is legacy syntax for multiple files. Use styleUrl for single stylesheet.

10. *Q: How does min-height: 100vh differ from height: 100vh?*  
    A: min-height allows content to grow beyond 100vh. height: 100vh restricts to exactly viewport height, causing overflow issues.

**Flexbox Properties Explained:**
```scss
display: flex;              // Enable flexbox
flex-direction: column;     // Stack vertically (default: row)
min-height: 100vh;          // Minimum height = viewport
flex: 1;                    // Grow to fill space
```

**Responsive Design with Media Queries:**
```scss
@media (min-width: 768px) {
  padding: 3rem;  // More padding on larger screens
}
```
- Mobile-first approach (base styles for mobile)
- Enhance for larger screens
- 768px is common tablet breakpoint

**Gradient Backgrounds:**
```scss
background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
```
- `to bottom` - Top to bottom direction
- Light gray (#f8fafc) to slightly darker (#e2e8f0)
- Creates subtle visual interest
- Professional, clean appearance

**Max-Width Pattern:**
```scss
max-width: 1400px;
width: 100%;
margin: 0 auto;
```
- Prevents content from being too wide on large screens
- Centers content horizontally
- Maintains readability
- Common in professional websites

**Verified Functionality:**
- ✅ Component compiles without errors
- ✅ RouterOutlet properly imported
- ✅ Header component properly imported
- ✅ Footer component properly imported
- ✅ All three in imports array
- ✅ Flexbox sticky footer layout working
- ✅ min-height: 100vh applied
- ✅ flex: 1 on content area
- ✅ Gradient background renders
- ✅ Responsive padding with media query
- ✅ Max-width container for content
- ✅ BEM naming convention followed
- ✅ Semantic HTML structure
- ✅ JSDoc documentation complete
- ✅ styleUrl (singular) used correctly

**Best Practices Demonstrated:**
- ✅ Composition over inheritance
- ✅ Single Responsibility Principle
- ✅ Standalone component architecture
- ✅ Semantic HTML elements
- ✅ BEM methodology for CSS
- ✅ SCSS nesting and organization
- ✅ Responsive design with media queries
- ✅ Flexbox for modern layouts
- ✅ Sticky footer pattern
- ✅ Max-width container pattern
- ✅ Mobile-first responsive design
- ✅ Component reusability
- ✅ Clean separation of concerns
- ✅ JSDoc documentation
- ✅ Modern Angular conventions

**Design Patterns Applied:**
- **Composition Pattern**: Combining Header, Footer, RouterOutlet
- **Template Pattern**: Separate HTML from logic
- **Container Pattern**: Wraps content with consistent layout
- **Shell Pattern**: Persistent structure around dynamic content

**Architecture Benefits:**
- **Single Source of Truth**: One place to change layout
- **Consistency**: All pages use same shell
- **Maintainability**: Easy to update header/footer
- **Testability**: Components can be tested independently
- **Scalability**: Easy to add new layout components (sidebar, etc.)

---

### ✅ Step 14: Wire Up Main Layout in App (COMPLETED - Feb 07, 2026)

**🎯 Objective:**
Connect the Main Layout component to the root app component so the complete layout structure displays when running the application.

**📋 What Was Done:**

1. **Updated app.ts:**
   - Removed `import { RouterOutlet } from '@angular/router';`
   - Added `import { MainLayout } from './layout/main-layout/main-layout';`
   - Changed imports array from `[RouterOutlet]` to `[MainLayout]`
   - Updated JSDoc comments to reflect MainLayout usage
   - App component now uses MainLayout instead of direct RouterOutlet

2. **Updated app.html:**
   - Replaced `<router-outlet></router-outlet>` with `<app-main-layout></app-main-layout>`
   - Single-line template using the main layout component
   - Clean, simple integration

3. **Testing:**
   - Restarted development server with `ng serve`
   - Application compiles successfully
   - Bundle size increased from 6.58 kB to 20.51 kB (includes Header, Footer, MainLayout)
   - No compilation errors
   - Application runs at localhost:4200

4. **Verification in Browser:**
   - Header displays at top with blue gradient
   - Navigation links visible (Home, Dashboard, About)
   - Footer displays at bottom with copyright
   - Footer links visible (Privacy, Terms, Contact)
   - Sticky footer working (footer at bottom even with no content)
   - Light gray gradient background in content area
   - Professional, polished appearance

5. **Component Tree Now:**
```
App (root)
 └── MainLayout
      ├── Header (with navigation)
      ├── RouterOutlet (for page content)
      └── Footer (with copyright)
```

**📁 Files Modified:**
```
angular-heist/src/app/
├── app.ts            [MODIFIED - Imports MainLayout instead of RouterOutlet]
└── app.html          [MODIFIED - Uses <app-main-layout>]
```

**🎓 Interview Knowledge:**

**Component Integration Pattern:**
```typescript
// Parent component imports child component
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  imports: [MainLayout]  // Add to imports array
})
export class App { }
```

**Template Usage:**
```html
<!-- Use component via its selector -->
<app-main-layout></app-main-layout>
```

**Component Hierarchy:**
- **Root Component (App)**: Entry point, minimal logic
- **Layout Component (MainLayout)**: Application shell
- **Feature Components**: Business logic (loaded via RouterOutlet)
- **Shared Components**: Reusable UI elements

**Separation of Concerns:**
1. **App Component**: Bootstrap and initialization
2. **MainLayout Component**: Structural layout
3. **Header/Footer Components**: Navigation and info
4. **Feature Components**: Page-specific content

**Bundle Size Analysis:**
- Initial (empty app): ~6.58 kB
- With layout components: ~20.51 kB
- Increase: ~14 kB for Header, Footer, MainLayout
- Still very lean for a complete application shell

**Common Interview Questions:**

1. *Q: How do you integrate a layout component into your app?*  
   A: Import the layout component in the root app component's imports array, then use its selector in app.html. The layout component typically wraps the router-outlet.

2. *Q: What is the purpose of the root App component?*  
   A: It's the entry point of the application. Typically minimal, it bootstraps the app and delegates layout/routing to child components for better separation of concerns.

3. *Q: Why not put Header and Footer directly in App component?*  
   A: Separation of concerns. MainLayout encapsulates the shell structure, making it reusable and testable. App remains focused on initialization.

4. *Q: How does Angular know which component to bootstrap?*  
   A: The bootstrap configuration in app.config.ts (or main.ts) specifies the root component. Angular starts there and builds the component tree.

5. *Q: What happens when you change app.html and save?*  
   A: Angular's dev server detects the file change, recompiles the app, and sends an update to the browser via Hot Module Replacement (HMR). Page reloads automatically.

6. *Q: Why did bundle size increase when adding layout components?*  
   A: Each component adds code (TypeScript compiled to JavaScript, HTML templates, CSS styles). More components = larger bundle, but still optimized by Angular's build process.

7. *Q: What is the component selector and how is it used?*  
   A: The selector (e.g., 'app-main-layout') is defined in @Component decorator. Use it as an HTML tag in templates: `<app-main-layout></app-main-layout>`.

8. *Q: Can you have multiple instances of a component?*  
   A: Yes! Components are reusable. You can use `<app-button>` multiple times. But typically only one instance of layout/root components.

**Import Path Rules:**
```typescript
import { MainLayout } from './layout/main-layout/main-layout';
```
- `./` - Current directory (app folder)
- `layout/` - Subfolder
- `main-layout/` - Component folder
- `main-layout` - File name (TypeScript adds .ts automatically)

**Development Workflow:**
1. Create component files (.ts, .html, .scss)
2. Export component class
3. Import component where needed
4. Add to imports array
5. Use selector in template
6. Angular compiles and renders

**Verified Functionality:**
- ✅ App component imports MainLayout correctly
- ✅ Template uses correct selector
- ✅ Application compiles without errors
- ✅ Dev server runs successfully
- ✅ Header displays with navigation
- ✅ Footer displays with copyright
- ✅ Sticky footer works correctly
- ✅ Gradient backgrounds render
- ✅ No console errors
- ✅ Bundle size reasonable (20.51 kB)
- ✅ Hot reload working
- ✅ Professional appearance

**Best Practices Demonstrated:**
- ✅ Separation of concerns (App vs Layout)
- ✅ Component composition
- ✅ Single responsibility principle
- ✅ Clean imports and dependencies
- ✅ Semantic HTML in templates
- ✅ Minimal root component
- ✅ Reusable layout structure
- ✅ Professional code organization
- ✅ Clear component hierarchy

**Design Decisions:**
- **Why MainLayout instead of putting components directly in App?**
  - Encapsulation: Layout logic in one place
  - Reusability: Could reuse MainLayout in other contexts
  - Testability: Can test layout independently
  - Maintainability: Changes to layout don't affect App

**Visual Result:**
```
┌────────────────────────────────────────────┐
│ Angular Heist   Home Dashboard About       │ ← Header (sticky)
├────────────────────────────────────────────┤
│                                            │
│         (Content area - empty for now)     │ ← Light gradient
│                                            │
│                                            │
├────────────────────────────────────────────┤
│ © 2026 Angular Heist. All rights reserved. │ ← Footer (bottom)
│    Privacy  Terms  Contact                 │
└────────────────────────────────────────────┘
```

---

