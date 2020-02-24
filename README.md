# core

### NgModules
| Feature | Description | Planned | Implemented |
| --- | ---| --- | --- |
| NgModules | :x: | :x: | :x: |

### Template syntax
| Feature | Description | Planned | Implemented |
| --- | ---| --- | --- |
| `<input [value]="firstName">` | Binds property value to the result of expression firstName | :heavy_check_mark: | :x: |
| `<div [attr.role]="myAriaRole">` | Binds attribute role to the result of expression myAriaRole | :heavy_check_mark: | :x: |
| `<div [class.extra-sparkle]="isDelightful">` | Binds the presence of the CSS class extra-sparkle on the element to the truthiness of the expression isDelightful | :heavy_check_mark: | :x: |
| `<div [style.width.px]="mySize">` | Binds style property width to the result of expression mySize in pixels. Units are optional | :heavy_check_mark: | :x: |
| `<button (click)="readRainbow($event)">` | Calls method readRainbow when a click event is triggered on this button element (or its children) and passes in the event object | :heavy_check_mark: | :x: |
| `<div title="Hello {{ponyName}}">` | Binds a property to an interpolated string, for example, "Hello Seabiscuit". Equivalent to: <div [title]="'Hello ' + ponyName"> | :heavy_check_mark: | :x: |
| `<p>Hello {{ponyName}}</p>` | Binds text content to an interpolated string, for example, "Hello Seabiscuit" | :heavy_check_mark: | :x: |
| `<my-cmp [(title)]="name">` | Sets up two-way data binding. Equivalent to: <my-cmp [title]="name" (titleChange)="name=$event"> | :heavy_check_mark: | :x: |
| `<video #movieplayer ...>`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>` | Creates a local variable movieplayer that provides access to the video element instance in data-binding and event-binding expressions in the current template | :heavy_check_mark: | :x: |
| `<p *myUnless="myExpression">...</p>` | The * symbol turns the current element into an embedded template. Equivalent to: <ng-template [myUnless]="myExpression"><p>...</p></ng-template> | :heavy_check_mark: | :x: |
| `<p>Card No.: {{cardNumber &#124; myCardNumberFormatter}}</p>` | Transforms the current value of expression cardNumber via the pipe called myCardNumberFormatter | :heavy_check_mark: | :x: |
| `<p>Employer: {{employer?.companyName}}</p>` | The safe navigation operator (?) means that the employer field is optional and if undefined, the rest of the expression should be ignored | :heavy_check_mark: | :x: |
| `<svg:rect x="0" y="0" width="100" height="100"/>` | An SVG snippet template needs an svg: prefix on its root element to disambiguate the SVG element from an HTML component | :question: | :x: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>``</svg>` | An svg root element is detected as an SVG element automatically, without the prefix | :question: | :x: |

### Built-in directives

### Forms

### Class decorators

### Directive configuration

### Component configuration

### Class field decorators for directives and components

### Directive and component change detection and lifecycle hooks

### Dependency injection configuration

### Routing and navigation
- it can used any router
