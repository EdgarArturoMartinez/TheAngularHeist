# 📘 The Angular Heist - Angular Interview Preparation Project

## 📍 Project Overview

**Project Path:** `C:\Arthur\Development\2026\TheAngularAttempt`  
**GitHub Repository:** https://github.com/EdgarArturoMartinez/TheAngularHeist

This is a **Clean Architecture Angular** project built with the latest version, following **best practices**, **SOLID principles**, and **design patterns**. This README serves as a checkpoint to track progress, document what we've accomplished, and guide the next steps in our development journey.

---

## 🎯 Project Goal

Build a **production-ready Angular application** to prepare for an Angular interview. The goal is to gain hands-on experience with:

- ✅ Clean Architecture principles
- ✅ SOLID principles
- ✅ Design Patterns (Singleton, Factory, Observer, etc.)
- ✅ Angular best practices
- ✅ Component architecture and state management
- ✅ Async/Await patterns
- ✅ RESTful API integration
- ✅ TypeScript advanced features

**Interview Target:** Achieve high-level proficiency in Angular to confidently answer technical interview questions.

---

## 📋 Development Workflow

### 👨‍💻 Your Role (Claude)
You are the **expert Angular architect/developer** guiding the developer through:
- Angular best practices and Clean Architecture
- SOLID principles and Design Patterns
- Component design, services, and state management
- TypeScript patterns and async programming
- Code reviews and educational comments

### 👨‍💼 My Role (Developer)
- Execute your instructions step-by-step
- Write all the code myself to **learn by doing**
- Ask for help when needed

### 🔄 Our Process

1. **Claude suggests** the next step or instruction
2. **Developer executes** the step to the best of their ability
3. **Developer types** `/DONECLAUDE` when complete
4. **Claude verifies** the work and:
   - ✅ Adds detailed step documentation to this README (with interview knowledge)
   - ✅ Adds educational comments to the code
   - ✅ Updates the "CURRENT STATUS" section
   - ✅ Updates the "Files Created" checklist
   - ✅ Updates the "Steps Progress Summary" table
   - ✅ Provides the next instruction

### 🆘 Special Commands

- **`/HELPCLAUDE`** - Get more detailed guidance on the current step
- **`/ENDDAYCLAUDE`** - End the session (Claude will update status and push code to GitHub)

---

## 🎯 CURRENT STATUS

**Last Updated:** February 6, 2026 - End of Day 1 ✅

### 📊 Quick Status
- **Current Phase:** Phase 1 - Project Setup & Design
- **Last Completed Step:** Step 3 - Create Angular Project ✅
- **Next Step:** Step 4 - Test Angular Application 🎯
- **Project Status:** Development Environment Complete - Ready for Testing
- **Sprint Goal:** Next session - test the application and begin Clean Architecture planning
- **Session Summary:** Successfully set up complete Angular development environment

### 📁 Files Created
- ✅ README.md - Project documentation and tracking
- ✅ angular-heist/ - Angular application (Angular v21.1.0)
  - ✅ angular.json - Angular workspace configuration
  - ✅ package.json - npm dependencies and scripts
  - ✅ src/ - Source code directory
  - ✅ tsconfig.json - TypeScript configuration

---

## 🚀 Phase 1: Project Foundation (IN PROGRESS)

### Steps Progress Summary

| Step | Title | Status | Date Completed |
|------|-------|--------|----------------|
| 0 | Repository Setup & README Creation | ✅ Complete | Feb 06, 2026 |
| 1 | Install Node.js and npm | ✅ Complete | Feb 06, 2026 |
| 2 | Install Angular CLI | ✅ Complete | Feb 06, 2026 |
| 3 | Create Angular Project | ✅ Complete | Feb 06, 2026 |
| 4 | Test Angular Application | 🎯 Next | - |

---

## 📝 Step-by-Step Documentation

### ✅ Step 1: Install Node.js and npm (COMPLETED - Feb 06, 2026)

**Objective:** Set up the Node.js runtime environment and npm package manager, which are prerequisites for Angular development.

**What We Did:**
1. ✅ Installed Node.js v24.13.0 (LTS recommended)
2. ✅ Verified npm v11.6.2 installation
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

## 📚 Interview Knowledge Bank

*This section will be populated with key concepts, patterns, and explanations as we build the project.*

### Topics Covered So Far:

**Development Environment:**
- Git repository setup and version control
- Project documentation and tracking
- **Node.js**: JavaScript runtime environment for development tools
- **npm**: Package manager for JavaScript dependencies
- **PowerShell Execution Policies**: Windows security for script execution
- Understanding why Node.js is required for Angular development

**Angular CLI & Tooling:**
- **Angular CLI**: Command-line interface for Angular projects
- Global vs local package installation
- Angular CLI commands and workflows
- Development server and build processes
- npm scripts for building, testing, and serving

**Angular 21 Architecture:**
- **Standalone Components**: Angular's modern component architecture
- **SCSS/Sass**: CSS preprocessor for advanced styling
- **TypeScript Strict Mode**: Enhanced type safety
- **Angular Project Structure**: Understanding the scaffolded project
- **RxJS Observables**: Reactive programming in Angular
- **Angular Routing**: Client-side navigation
- app.config.ts vs traditional app.module.ts

**Interview Preparedness:**
- 18+ interview questions covered across all topics
- Understanding of Angular 21's standalone architecture
- Knowledge of modern Angular best practices

---

## 🎓 Next Steps

**📅 Next Session - Step 4: Test Angular Application**

When you return, we'll verify the Angular application runs correctly.

1. Navigate into the project directory:
```powershell
cd angular-heist
```

2. Start the development server:
```powershell
npm start
```

The application should compile and start on `http://localhost:4200`. Your browser might open automatically, or you can manually navigate to that URL.

You should see the default Angular welcome page with the Angular logo.

**What to look for:**
- ✅ Compilation completes without errors
- ✅ Development server starts on port 4200
- ✅ Browser shows Angular welcome page
- ✅ No console errors in the browser

Once you see the Angular welcome page in your browser, **keep the server running** and type `/DONECLAUDE`.

---

## 📝 Session Notes

### Day 1 - February 6, 2026 ✅

**Accomplishments:**
- ✅ Set up Git repository and project documentation
- ✅ Installed Node.js v24.13.0 and npm v11.6.2
- ✅ Installed Angular CLI v21.1.3
- ✅ Created Angular 21 project with standalone components
- ✅ Configured SCSS, routing, and TypeScript strict mode

**Environment Details:**
- Angular: v21.1.0 (Latest)
- TypeScript: v5.9.2
- Architecture: Standalone Components (no NgModules)
- Styling: SCSS
- Routing: Enabled

**Next Session Goals:**
1. Test the Angular application in browser
2. Plan Clean Architecture folder structure
3. Set up core/shared/features folder structure
4. Begin implementing first components with Clean Architecture principles
