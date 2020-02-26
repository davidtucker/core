## Pregular

#### Meanings
| Icon |  | 
| --- | --- |
| :heavy_check_mark: | will implemented | 
| :alarm_clock: | wil implemented on stable architecture | 
| :star: | new feature | 
| :question: | not sure if this will be implemented | 
| :x: | will not be implemented | 

#### Features
| Feature | Planned | Implemented |
| --- | ---| --- |
| **Component Class decorator** | | |
| `@Component()` | :heavy_check_mark: | No |
| `@Injectable()`| :heavy_check_mark: | No |
| `@Directive()`| :alarm_clock: | No |
| `@Pipe()`| :alarm_clock: | No |
| | | |
| | | |
| **Component configuration** | | |
| `selector` | :heavy_check_mark: | No |
| `host` | :heavy_check_mark: | No |
| `template` | :heavy_check_mark: | No |
| `templateUrl` | :heavy_check_mark: | No |
| `styles` | :heavy_check_mark: | No |
| `styleUrls` | :heavy_check_mark: | No |
| `exportAs` | :heavy_check_mark: | No |
| `encapsulation` | :heavy_check_mark: | No |
| `interpolation` | :heavy_check_mark: | No |
| `inputs` | :question: | No |
| `outputs` | :question: | No |
| `providers` | :question: | No |
| `animations` | :question: | No |
| `queries` | :question: | No |
| `viewProviders` | :x: | - |
| `changeDetection` | :x: | - |
| `entryComponents` | :x: | - |
| `preserveWhitespaces` | :x: | - |
| `module.id` | :x: | - |
| `jit` | :x: | - |
| | | |
| | | |
| **Class field decorators for components** | | |
| `@Input()` | :heavy_check_mark: | No |
| `@Output()`| :heavy_check_mark: | No |
| `@HostBinding('class.valid')`| :heavy_check_mark: | No |
| `@HostListener('click', ['$event'])`| :heavy_check_mark: | No |
| `@ContentChild(myPredicate)`| :heavy_check_mark: | No |
| `@ContentChildren(myPredicate)`| :heavy_check_mark: | No |
| `@ViewChild(myPredicate)`| :heavy_check_mark: | No |
| `@ViewChildren(myPredicate)`| :heavy_check_mark: | No |
| `@Query(myPredicate)`| :star::alarm_clock: | No |
| | | |
| | | |
| **Component lifecycle hooks**| | |
| `constructor()`| :heavy_check_mark: | No |
| `ngOnChanges(changeRecord)` | :heavy_check_mark: | No |
| `ngOnInit()` | :heavy_check_mark: | No |
| `ngAfterContentInit()` | :heavy_check_mark: | No |
| `ngAfterViewInit()` | :heavy_check_mark: | No |
| `ngOnDestroy()`| :heavy_check_mark: | No |
| `ngAfterViewChecked()`| :x: | - |
| `ngDoCheck()` | :x: | - |
| `ngAfterContentChecked()` | :x: | - |
| | | |
| | | |
| **Template syntax**| | |
| `[value]="firstName"`| :heavy_check_mark: | No |
| `[attr.role]="myAriaRole"`| :heavy_check_mark: | No |
| `[class.extra-sparkle]="isDelightful"`| :heavy_check_mark: | No |
| `[style.width.px]="mySize"`| :heavy_check_mark: | No |
| `(click)="foo($event)"`| :heavy_check_mark: | No |
| `<div title="Hello {{ponyName}}">`| :heavy_check_mark: | No |
| `Hello {{ponyName}}`| :heavy_check_mark: | No |
| `Sum{{1 + 1 + getVal()}}`| :heavy_check_mark: | No |
| `[(title)]="name"`| :heavy_check_mark: | No |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>`| :heavy_check_mark: | No |
| `*myUnless="myExpression"` | :heavy_check_mark: | No |
| `Employer: {{employer?.companyName}}`| :heavy_check_mark: | No |
| `<ng-template>`| :heavy_check_mark: | No |
| `<ng-content>`| :heavy_check_mark: | No |
| `<svg:rect x="0" y="0" width="100" height="100"/>`| :alarm_clock: | No |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>`<br/>`</svg>`| :alarm_clock: | No |
| `<ng-container>`| :alarm_clock: | No |
| `<ng-container *ngTemplateOutlet>`| :alarm_clock: | No |
| `(keydown.enter.esc)="bar($event)"`| :alarm_clock: | No |
| `(ngSubmit)="bar(...)"`| :alarm_clock: | No |
| | | |
| | | |
| **Built-in directives**| | |
| `*ngIf="showSection"`| :heavy_check_mark: | No |
| `*ngIf="condition; else elseBlock"`| :heavy_check_mark: | No |
| `*ngIf="condition; then thenBlock else elseBlock"`| :heavy_check_mark: | No |
| `*ngFor="let item of list; index as i"`| :heavy_check_mark: | No |
| `*ngFor="let item of list; first as isFirst"`| :heavy_check_mark: | No |
| `*ngFor="let item of list; even as isEven"`| :heavy_check_mark: | No |
| `*ngFor="let item of list; odd as isOdd"`| :heavy_check_mark: | No |
| `[ngSwitch], [ngSwitchCase], ...` | :heavy_check_mark: | No |
| `[ngClass]` | :heavy_check_mark: | No |
| `[ngStyle]` | :heavy_check_mark: | No |
| | | |
| | | |
| **Built-in pipes**| | |
| `{{ observableOrPromise` &#124; `async }}`| :heavy_check_mark: | No |
| `{{ value_expression` &#124; `json }}`| :heavy_check_mark: | No |
| `{{ value_expression` &#124; `uppercase }}`| :heavy_check_mark: | No |
| `{{ value_expression` &#124; `lowercase }}` | :heavy_check_mark: | No |
| `{{ input_expression` &#124; `keyvalue }}` | :heavy_check_mark: | No |
| `{{ value_expression` &#124; `number }}`| :alarm_clock: | No |
| `{{ value_expression` &#124; `percent}}`| :alarm_clock: | No |
| `{{ value_expression` &#124; `uppercase }}`| :alarm_clock: | No |
| `{{ value_expression` &#124; `currency }}` | :alarm_clock: | No |
| `{{ value_expression` &#124; `i18nPlural }}` | :alarm_clock: | No |
| `{{ value_expression` &#124; `slice }}` | :alarm_clock: | No |
| `{{ value_expression` &#124; `date }}` | :alarm_clock: | No |
| `{{ value_expression` &#124; `i18nSelect }}` | :alarm_clock: | No |
| `{{ value_expression` &#124; `titlecase }}` | :alarm_clock: | No |
| | | |
| | | |
| **Dependency injection decorators** | | |
| `@Self()` | :alarm_clock: | No |
| `@Optional()` | :alarm_clock: | No |
| `@SkipSelf()` | :alarm_clock: | No |
| `@Host()` | :alarm_clock: | No |
| | | |
| | | |
| **State** | | |
| `useState(0)` | :star::alarm_clock: | No |
| **Routing and navigation** | :alarm_clock: | No |
| | | |
| | | |
| **Directive configuration** | :alarm_clock: | No |
| | | |
| | | |
| **NgModules**| :x: | - |
