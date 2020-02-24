# core

### Component Class decorator
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `@Component({...})` | Declares that a class is a component and provides metadata about the component | :heavy_check_mark: | :x: | :question: |

### Component configuration
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `module.id` | If set, the templateUrl and styleUrl are resolved relative to the component | :question: | :x: | :question: |
| `host` | Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs | :heavy_check_mark: | :x: | :question: |
| `viewProviders` | List of dependency injection providers scoped to this component's view | :question: | :x: | :question: |
| `template` | Inline template or external template URL of the component's view | :heavy_check_mark: | :x: | :question: |
| `styles, styleUrls` | List of inline CSS styles or external stylesheet URLs for styling the component’s view | :heavy_check_mark: | :x: | :question: |
| `changeDetection` | The change-detection strategy to use for this component | :question: | :x: | :question: |
| `animations` | One or more animation trigger() calls, containing state() and transition() definitions. See the Animations guide and animations API documentation | :question: | :x: | :question: |
| `encapsulation` | An encapsulation policy for the template and CSS styles. ViewEncapsulation.ShadowDom or ViewEncapsulation.None | :heavy_check_mark: | :x: | :question: |
| `interpolation` | Overrides the default encapsulation start and end delimiters (`{{` and `}}`) | :heavy_check_mark: | :x: | :question: |
| `entryComponents` | A set of components that should be compiled along with this component. For each component listed here, Angular creates a ComponentFactory and stores it in the ComponentFactoryResolver | :question: | :x: | :question: |
| `preserveWhitespaces` | True to preserve or false to remove potentially superfluous whitespace characters from the compiled template. Whitespace characters are those matching the \s character class in JavaScript regular expressions. Default is false, unless overridden in compiler options | :question: | :x: | :question: |

### Class field decorators for directives and components
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `@Input()` | Declares an input property that you can update via property binding (example: `<my-cmp [myProperty]="someExpression">`) | :heavy_check_mark: | :x: | :question: |
| `@Output()` | Declares an output property that fires events that you can subscribe to with an event binding (example: `<my-cmp (myEvent)="doSomething()">`) | :heavy_check_mark: | :x: | :question: |
| `@HostBinding('class.valid')` | Binds a host element property (here, the CSS class valid) to a directive/component property (isValid) | :heavy_check_mark: | :x: | :question: |
| `@HostListener('click', ['$event'])` | Subscribes to a host element event (click) with a directive/component method (onClick), optionally passing an argument ($event) | :heavy_check_mark: | :x: | :question: |
| `@ContentChild(myPredicate)` | Binds the first result of the component content query (myPredicate) to a property (myChildComponent) of the class | :heavy_check_mark: | :x: | :question: |
| `@ContentChildren(myPredicate)` | Binds the results of the component content query (myPredicate) to a property (myChildComponents) of the class | :heavy_check_mark: | :x: | :question: |
| `@ViewChild(myPredicate)` | Binds the first result of the component view query (myPredicate) to a property (myChildComponent) of the class. Not available for directives | :heavy_check_mark: | :x: | :question: |
| `@ViewChildren(myPredicate)` | Binds the results of the component view query (myPredicate) to a property (myChildComponents) of the class. Not available for directives | :heavy_check_mark: | :x: | :question: |	

### Directive and component change detection and lifecycle hooks
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `constructor(myService: MyService)` | Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here | :heavy_check_mark: | :x: | :question: |
| `ngOnChanges(changeRecord)` | Called after every change to input properties and before processing content or child views | :heavy_check_mark: | :x: | :question: |
| `ngOnInit()` | Called after the constructor, initializing input properties, and the first call to ngOnChanges | :heavy_check_mark: | :x: | :question: |
| `ngDoCheck()` | Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check | :question: | :x: | :question: |
| `ngAfterContentInit()` | Called after ngOnInit when the component's or directive's content has been initialized | :heavy_check_mark: | :x: | :question: |
| `ngAfterContentChecked()` | Called after every check of the component's or directive's content | :heavy_check_mark: | :x: | :question: |
| `ngAfterViewInit()` | Called after ngAfterContentInit when the component's views and child views / the view that a directive is in has been initialized | :heavy_check_mark: | :x: | :question: |
| `ngAfterViewChecked()` | Called after every check of the component's views and child views / the view that a directive is in | :heavy_check_mark: | :x: | :question: |
| `ngOnDestroy()` | Called once, before the instance is destroyed | :heavy_check_mark: | :x: | :question: |

### Template syntax
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `[value]="firstName"` | Binds property value to the result of expression firstName | :heavy_check_mark: | :x: | :question: |
| `[attr.role]="myAriaRole"` | Binds attribute role to the result of expression myAriaRole | :heavy_check_mark: | :x: | :question: |
| `[class.extra-sparkle]="isDelightful"` | Binds the presence of the CSS class extra-sparkle on the element to the truthiness of the expression isDelightful | :heavy_check_mark: | :x: | :question: |
| `[style.width.px]="mySize"` | Binds style property width to the result of expression mySize in pixels. Units are optional | :heavy_check_mark: | :x: | :question: |
| `(click)="readRainbow($event)"` | Calls method readRainbow when a click event is triggered on this button element (or its children) and passes in the event object | :heavy_check_mark: | :x: | :question: |
| `<div title="Hello {{ponyName}}">` | Binds a property to an interpolated string, for example, "Hello Seabiscuit". Equivalent to: `<div [title]="'Hello ' + ponyName">` | :heavy_check_mark: | :x: | :question: |
| `Hello {{ponyName}}` | Binds text content to an interpolated string, for example, "Hello Seabiscuit" | :heavy_check_mark: | :x: | :question: |
| `[(title)]="name"` | Sets up two-way data binding. Equivalent to: `<my-cmp [title]="name" (titleChange)="name=$event">` | :heavy_check_mark: | :x: | :question: |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>` | Creates a local variable movieplayer that provides access to the video element instance in data-binding and event-binding expressions in the current template | :heavy_check_mark: | :x: | :question: |
| `*myUnless="myExpression"` | The * symbol turns the current element into an embedded template. Equivalent to: `<ng-template [myUnless]="myExpression"><p>...</p></ng-template>` | :heavy_check_mark: | :x: | :question: |
| `Card No.: {{cardNumber` &#124; `myCardNumberFormatter}}` | Transforms the current value of expression cardNumber via the pipe called myCardNumberFormatter | :heavy_check_mark: | :x: | :question: |
| `Employer: {{employer?.companyName}}` | The safe navigation operator (?) means that the employer field is optional and if undefined, the rest of the expression should be ignored | :heavy_check_mark: | :x: | :question: |
| `<svg:rect x="0" y="0" width="100" height="100"/>` | An SVG snippet template needs an svg: prefix on its root element to disambiguate the SVG element from an HTML component | :question: | :x: | :question: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>``</svg>` | An svg root element is detected as an SVG element automatically, without the prefix | :question: | :x: | :question: |

### Built-in directives
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `*ngIf="showSection"` | Removes or recreates a portion of the DOM tree based on the showSection expression | :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list"` | Turns the li element and its contents into a template, and uses that to instantiate a view for each item in list | :heavy_check_mark: | :x: | :question: |
| `<div [ngSwitch]="conditionExpression">`<br />`<ng-template [ngSwitchCase]="case1Exp">...</ng-template>`</br>`<ng-template ngSwitchCase="case2LiteralString">...</ng-template>`<br/>`<ng-template ngSwitchDefault>...</ng-template></div>` | Conditionally swaps the contents of the div by selecting one of the embedded templates based on the current value of conditionExpression | :heavy_check_mark: | :x: | :question: |
| `<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">` | Binds the presence of CSS classes on the element to the truthiness of the associated map values. The right-hand expression should return {class-name: true/false} map | :heavy_check_mark: | :x: | :question: |
| `<div [ngStyle]="{'property': 'value'}">`<br/>`<div [ngStyle]="dynamicStyles()">` | Allows you to assign styles to an HTML element using CSS. You can use CSS directly, as in the first example, or you can call a method from the component | :heavy_check_mark: | :x: | :question: |

### Dependency injection configuration
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `Depency Injection` | --- | :heavy_check_mark: | :question: | :question: |

### Routing and navigation
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `Routing` | --- | :heavy_check_mark: | :question: | :question: |

### Class decorators
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `@Directive({...})` | Declares that a class is a directive and provides metadata about the directive | :question: | :x: | :question: |
| `@Pipe({...})` | Declares that a class is a pipe and provides metadata about the pipe | :question: | :x: | :question: |
| `@Injectable({...})` | Declares that a class can be provided and injected by other classes. Without this decorator, the compiler won't generate enough metadata to allow the class to be created properly when it's injected somewhere | :question: | :x: | :question: |

### Directive configuration
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| `Directive configuration` | --- | :question: | :question: | :question: |

### NgModules
| Feature | Description | Planned | Implemented | Link |
| --- | ---| --- | --- | --- |
| NgModules | --- | :x: | :x: | :x: |
