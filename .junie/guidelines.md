# Peculiar Gardens - Development Guidelines

## Project Overview

**Peculiar Gardens** is a modern e-commerce web application for fresh produce delivery, built with Angular 19 and featuring server-side rendering (SSR) for optimal performance and SEO.

### Tech Stack
- **Framework**: Angular 19 with SSR
- **Styling**: Tailwind CSS 4.0 + SCSS + Angular Material (magenta-violet theme)
- **Backend**: Firebase integration
- **Testing**: Jasmine + Karma
- **Build Tool**: Angular CLI
- **Server**: Express.js (for SSR)

## Project Structure

```
src/
├── app/
│   ├── pages/                    # Page components (routable)
│   │   ├── landing/             # Landing page
│   │   └── product-catalog/     # Product catalog page
│   ├── shared/
│   │   └── components/          # Reusable components
│   │       ├── navbar/          # Navigation bar
│   │       ├── footer/          # Footer
│   │       └── product/         # Product display component
│   ├── app.component.*          # Root component
│   ├── app.config.*             # App configuration
│   └── app.config.server.ts     # SSR configuration
├── environments/                 # Environment configurations
├── styles.scss                  # Global styles
├── main.ts                      # Main application entry
├── main.server.ts               # SSR entry point
└── server.ts                    # Express server setup
```

### Organization Principles
- **Pages**: Route-level components in `src/app/pages/`
- **Shared Components**: Reusable UI components in `src/app/shared/components/`
- **Each component**: Includes `.ts`, `.html`, `.scss`, and `.spec.ts` files
- **Assets**: Static files in `public/` directory
- **Environments**: Configuration files for different deployment environments

## Development Setup

### Prerequisites
- Node.js (latest LTS)
- Angular CLI (`npm install -g @angular/cli`)

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm start
# or
ng serve

# Development server runs on http://localhost:4200
```

### Available Scripts
```bash
npm start          # Start dev server
npm run build      # Production build
npm run watch      # Build with watch mode
npm test           # Run unit tests
npm run serve:ssr  # Serve SSR build
```

## Testing

### Unit Testing
- **Framework**: Jasmine + Karma
- **Location**: `*.spec.ts` files alongside components
- **Command**: `npm test` or `ng test`
- **Coverage**: Run tests with `--code-coverage` flag

### Test Structure
```typescript
// Example test structure
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(() => {
    // Setup
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Build & Deployment

### Development Build
```bash
ng build --configuration development
```

### Production Build
```bash
ng build --configuration production
```

### SSR Build
```bash
ng build
npm run serve:ssr:peculiar-gardens
```

### Build Configurations
- **Development**: Source maps, no optimization
- **Production**: Minified, optimized, hashed files
- **Budget Limits**: 500kB warning, 1MB error for initial bundle

## Coding Standards & Best Practices

### Component Structure
```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [],
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.scss'
})
export class ComponentNameComponent {
  // Use signals for reactive state
  data = signal<DataType>([]);
}
```

### Angular Best Practices
- Use **standalone components** (Angular 19 default)
- Implement **OnPush change detection** where possible
- Use **signals** for reactive state management
- Follow **Angular style guide** naming conventions
- Use **@for** and **@if** control flow syntax (Angular 17+)
- Use the inject() function instead of constructor injection for dependency injection
- Use functional guards and resolvers instead of class-based ones
- Always export interfaces and types for better code organization

### Styling Guidelines
- **Primary**: Tailwind CSS utility classes
- **Secondary**: SCSS for complex styles
- **Component styles**: Use `:host` for component root styling
- **Global styles**: Add to `src/styles.scss`
- **Material**: Use Angular Material components with magenta-violet theme 
- Always reuse styles defined in the global styles file and if not available, add them to the global styles file
- Always test to ensure that the SCSS files for the different components do not exceed the maximum budgets set out

### Performance Considerations

- Minimize bundle size by avoiding unnecessary dependencies
- Use trackBy with ngFor directives
- Implement proper unsubscribe patterns for RxJS observables
- Consider using server-side rendering for improved initial load time

### File Naming
- Components: `kebab-case.component.ts`
- Services: `kebab-case.service.ts`
- Interfaces: `pascal-case.interface.ts`
- Constants: `UPPER_SNAKE_CASE`

### Git Workflow
```bash
# Feature development
git checkout -b feature/feature-name
# Make changes
git add .
git commit -m "feat: add new feature description"
git push origin feature/feature-name
```

### Code Quality
- **Linting**: Follow Angular ESLint rules
- **Formatting**: Use Prettier for consistent formatting
- **TypeScript**: Enable strict mode
- **Testing**: Maintain >80% test coverage
- **Performance**: Monitor bundle size budgets

## Firebase Integration

The project includes Firebase for backend services:
- Configure Firebase in `src/environments/`
- Use `@angular/fire` for Firebase integration
- Follow Firebase security rules in `firestore.rules`

## Assets Management

- **Images**: Place in `public/assets/` directories
- **Icons**: Use SVG format when possible
- **Optimization**: Compress images before adding
- **Lazy Loading**: Use `ngSrc` for optimized image loading

---

*Last updated: August 21, 2025*
