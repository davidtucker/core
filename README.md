# core

### NgModules
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| NgModules | :x: | :x: | :x: | :x: |

### Template syntax
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `<input [value]="firstName">` | Binds property value to the result of expression firstName | :heavy_check_mark: | :x: | :question: |
| `<div [attr.role]="myAriaRole">` | Binds attribute role to the result of expression myAriaRole | :heavy_check_mark: | :x: | :question: |
| `<div [class.extra-sparkle]="isDelightful">` | Binds the presence of the CSS class extra-sparkle on the element to the truthiness of the expression isDelightful | :heavy_check_mark: | :x: | :question: |
| `<div [style.width.px]="mySize">` | Binds style property width to the result of expression mySize in pixels. Units are optional | :heavy_check_mark: | :x: | :question: |
| `<button (click)="readRainbow($event)">` | Calls method readRainbow when a click event is triggered on this button element (or its children) and passes in the event object | :heavy_check_mark: | :x: | :question: |
| `<div title="Hello {{ponyName}}">` | Binds a property to an interpolated string, for example, "Hello Seabiscuit". Equivalent to: `<div [title]="'Hello ' + ponyName">` | :heavy_check_mark: | :x: | :question: |
| `<p>Hello {{ponyName}}</p>` | Binds text content to an interpolated string, for example, "Hello Seabiscuit" | :heavy_check_mark: | :x: | :question: |
| `<my-cmp [(title)]="name">` | Sets up two-way data binding. Equivalent to: `<my-cmp [title]="name" (titleChange)="name=$event">` | :heavy_check_mark: | :x: | :question: |
| `<video #movieplayer ...>`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>` | Creates a local variable movieplayer that provides access to the video element instance in data-binding and event-binding expressions in the current template | :heavy_check_mark: | :x: | :question: |
| `<p *myUnless="myExpression">...</p>` | The * symbol turns the current element into an embedded template. Equivalent to: `<ng-template [myUnless]="myExpression"><p>...</p></ng-template>` | :heavy_check_mark: | :x: | :question: |
| `<p>Card No.: {{cardNumber` &#124; `myCardNumberFormatter}}</p>` | Transforms the current value of expression cardNumber via the pipe called myCardNumberFormatter | :heavy_check_mark: | :x: | :question: |
| `<p>Employer: {{employer?.companyName}}</p>` | The safe navigation operator (?) means that the employer field is optional and if undefined, the rest of the expression should be ignored | :heavy_check_mark: | :x: | :question: |
| `<svg:rect x="0" y="0" width="100" height="100"/>` | An SVG snippet template needs an svg: prefix on its root element to disambiguate the SVG element from an HTML component | :question: | :x: | :question: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>``</svg>` | An svg root element is detected as an SVG element automatically, without the prefix | :question: | :x: | :question: |

### Built-in directives
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `<section *ngIf="showSection">` | Removes or recreates a portion of the DOM tree based on the showSection expression | :heavy_check_mark: | :x: | :question: |
| `<li *ngFor="let item of list">` | Turns the li element and its contents into a template, and uses that to instantiate a view for each item in list | :heavy_check_mark: | :x: | :question: |
| `<div [ngSwitch]="conditionExpression">`<br />`<ng-template [ngSwitchCase]="case1Exp">...</ng-template>`</br>`<ng-template ngSwitchCase="case2LiteralString">...</ng-template>`<br/>`<ng-template ngSwitchDefault>...</ng-template></div>` | Conditionally swaps the contents of the div by selecting one of the embedded templates based on the current value of conditionExpression | :heavy_check_mark: | :x: | :question: |
| `<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">` | Binds the presence of CSS classes on the element to the truthiness of the associated map values. The right-hand expression should return {class-name: true/false} map | :heavy_check_mark: | :x: | :question: |
| `<div [ngStyle]="{'property': 'value'}">`<br/>`<div [ngStyle]="dynamicStyles()">` | Allows you to assign styles to an HTML element using CSS. You can use CSS directly, as in the first example, or you can call a method from the component | :heavy_check_mark: | :x: | :question: |

### Class decorators
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `@Component({...})`<br/>`class MyComponent() {}` | Declares that a class is a component and provides metadata about the component | :heavy_check_mark: | :x: | :question: |
| `@Directive({...})`<br/>`class MyDirective() {}` | Declares that a class is a directive and provides metadata about the directive | :question: | :x: | :question: |
| `@Pipe({...})`<br/>`class MyPipe() {}` | Declares that a class is a pipe and provides metadata about the pipe | :question: | :x: | :question: |
| `@Injectable()`<br/>`class MyService() {}` | Declares that a class can be provided and injected by other classes. Without this decorator, the compiler won't generate enough metadata to allow the class to be created properly when it's injected somewhere | :heavy_check_mark: | :x: | :question: |

### Directive configuration

### Component configuration

### Class field decorators for directives and components

### Directive and component change detection and lifecycle hooks

### Dependency injection configuration

### Routing and navigation
- it can used any router
