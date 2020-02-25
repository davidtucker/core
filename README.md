## core
| Feature | Planned | Implemented | Link |
| --- | ---| --- | --- |
| **Component Class decorator** | | | |
| `@Component()` | :heavy_check_mark: | :x: | :question: |
| `@Directive()`| :question: | :x: | :question: |
| `@Pipe()`| :question: | :x: | :question: |
| `@Injectable()`| :question: | :x: | :question: |
| | | | |
| | | | |
| **Component configuration** | | | |
| `selector` | :heavy_check_mark: | :x: | :question: |
| `host` | :heavy_check_mark: | :x: | :question: |
| `template` | :heavy_check_mark: | :x: | :question: |
| `templateUrl` | :heavy_check_mark: | :x: | :question: |
| `styles` | :heavy_check_mark: | :x: | :question: |
| `styleUrls` | :heavy_check_mark: | :x: | :question: |
| `exportAs` | :heavy_check_mark: | :x: | :question: |
| `encapsulation` | :heavy_check_mark: | :x: | :question: |
| `interpolation` | :heavy_check_mark: | :x: | :question: |
| `inputs` | :question: | :x: | :question: |
| `outputs` | :question: | :x: | :question: |
| `providers` | :question: | :x: | :question: |
| `animations` | :question: | :x: | :question: |
| `queries` | :question: | :x: | :question: |
| `viewProviders` | :x: | :x: | :question: |
| `changeDetection` | :x: | :x: | :question: |
| `entryComponents` | :x: | :x: | :question: |
| `preserveWhitespaces` | :x: | :x: | :question: |
| `module.id` | :x: | :x: | :question: |
| `jit` | :x: | :x: | :question: |
| | | | |
| | | | |
| **Class field decorators for components** | | | |
| `@Input()` | :heavy_check_mark: | :x: | :question: |
| `@Output()`| :heavy_check_mark: | :x: | :question: |
| `@HostBinding('class.valid')`| :heavy_check_mark: | :x: | :question: |
| `@HostListener('click', ['$event'])`| :heavy_check_mark: | :x: | :question: |
| `@ContentChild(myPredicate)`| :heavy_check_mark: | :x: | :question: |
| `@ContentChildren(myPredicate)`| :heavy_check_mark: | :x: | :question: |
| `@ViewChild(myPredicate)`| :heavy_check_mark: | :x: | :question: |
| `@ViewChildren(myPredicate)`| :heavy_check_mark: | :x: | :question: |
| `@Query(myPredicate)`| :star: :question: | :x: | :question: |		
| | | | |
| | | | |
| **Component lifecycle hooks**| | | |
| `constructor()`| :heavy_check_mark: | :x: | :question: |
| `ngOnChanges(changeRecord)` | :heavy_check_mark: | :x: | :question: |
| `ngOnInit()` | :heavy_check_mark: | :x: | :question: |
| `ngAfterContentInit()` | :heavy_check_mark: | :x: | :question: |
| `ngAfterViewInit()` | :heavy_check_mark: | :x: | :question: |
| `ngOnDestroy()`| :heavy_check_mark: | :x: | :question: |
| `ngAfterViewChecked()`| :x: | :x: | :question: |
| `ngDoCheck()` | :x: | :x: | :question: |
| `ngAfterContentChecked()` | :x: | :x: | :question: |
| | | | |
| | | | |
| **Template syntax**| | | |
| `[value]="firstName"`| :heavy_check_mark: | :x: | :question: |
| `[attr.role]="myAriaRole"`| :heavy_check_mark: | :x: | :question: |
| `[class.extra-sparkle]="isDelightful"`| :heavy_check_mark: | :x: | :question: |
| `[style.width.px]="mySize"`| :heavy_check_mark: | :x: | :question: |
| `(click)="foo($event)"`| :heavy_check_mark: | :x: | :question: |
| `<div title="Hello {{ponyName}}">`| :heavy_check_mark: | :x: | :question: |
| `Hello {{ponyName}}`| :heavy_check_mark: | :x: | :question: |
| `Sum{{1 + 1 + getVal()}}`| :heavy_check_mark: | :x: | :question: |
| `[(title)]="name"`| :heavy_check_mark: | :x: | :question: |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>`| :heavy_check_mark: | :x: | :question: |
| `*myUnless="myExpression"` | :heavy_check_mark: | :x: | :question: |
| `Employer: {{employer?.companyName}}`| :heavy_check_mark: | :x: | :question: |
| `<ng-template>`| :heavy_check_mark: | :x: | :question: |
| `<ng-content>`| :heavy_check_mark: | :x: | :question: |
| `<svg:rect x="0" y="0" width="100" height="100"/>`| :question: | :x: | :question: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>`<br/>`</svg>`| :question: | :x: | :question: |
| `<ng-container>`| :question: | :x: | :question: |
| `<ng-container *ngTemplateOutlet>`| :question: | :x: | :question: |
| `(keydown.enter.esc)="bar($event)"`| :question: | :x: | :question: |
| `(ngSubmit)="bar(...)"`| :question: | :x: | :question: |
| | | | |
| | | | |
| **Built-in directives**| | | |
| `*ngIf="showSection"`| :heavy_check_mark: | :x: | :question: |
| `*ngIf="condition; else elseBlock"`| :heavy_check_mark: | :x: | :question: |
| `*ngIf="condition; then thenBlock else elseBlock"`| :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list; index as i"`| :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list; first as isFirst"`| :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list; even as isEven"`| :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list; odd as isOdd"`| :heavy_check_mark: | :x: | :question: |
| `[ngSwitch], [ngSwitchCase], ...` | :heavy_check_mark: | :x: | :question: |
| `[ngClass]` | :heavy_check_mark: | :x: | :question: |
| `[ngStyle]` | :heavy_check_mark: | :x: | :question: |
| `<ng-template [ngIf]="condition">` | :question: | :x: | :question: |
| | | | |
| | | | |
| **Built-in pipes**| | | |
| `{{ observableOrPromise` &#124; `async }}`| :heavy_check_mark: | :x: | :question: |
| `{{ value_expression` &#124; `json }}`| :heavy_check_mark: | :x: | :question: |
| `{{ value_expression` &#124; `uppercase }}`| :heavy_check_mark: | :x: | :question: |
| `{{ value_expression` &#124; `lowercase }}` | :heavy_check_mark: | :x: | :question: |
| `{{ input_expression` &#124; `keyvalue }}` | :heavy_check_mark: | :x: | :question: |
| `{{ value_expression` &#124; `number }}`| :question: | :x: | :question: |
| `{{ value_expression` &#124; `percent}}`| :question: | :x: | :question: |
| `{{ value_expression` &#124; `uppercase }}`| :question: | :x: | :question: |
| `{{ value_expression` &#124; `currency }}` | :question: | :x: | :question: |
| `{{ value_expression` &#124; `i18nPlural }}` | :question: | :x: | :question: |
| `{{ value_expression` &#124; `slice }}` | :question: | :x: | :question: |
| `{{ value_expression` &#124; `date }}` | :question: | :x: | :question: |
| `{{ value_expression` &#124; `i18nSelect }}` | :question: | :x: | :question: |
| `{{ value_expression` &#124; `titlecase }}` | :question: | :x: | :question: |
| | | | |
| | | | |
| **State** | | | |
| `useState(0)` | :star: :question: | :x: | :question: |
| | | | |
| | | | |
| **Dependency injection** | :heavy_check_mark: | :question: | :question: |
| | | | |
| | | | |
| **Routing and navigation** | :heavy_check_mark: | :question: | :question: |
| | | | |
| | | | |
| **Directive configuration** | :question: | :question: | :question: |
| | | | |
| | | | |
| **NgModules**| :x: | :x: | :x: |
