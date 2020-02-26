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
| `@Component()` | :heavy_check_mark: | :x: |
| `@Injectable()`| :heavy_check_mark: | :x: |
| `@Directive()`| :alarm_clock: | :x: |
| `@Pipe()`| :alarm_clock: | :x: |
| | | |
| | | |
| **Component configuration** | | |
| `selector` | :heavy_check_mark: | :x: |
| `host` | :heavy_check_mark: | :x: |
| `template` | :heavy_check_mark: | :x: |
| `templateUrl` | :heavy_check_mark: | :x: |
| `styles` | :heavy_check_mark: | :x: |
| `styleUrls` | :heavy_check_mark: | :x: |
| `exportAs` | :heavy_check_mark: | :x: |
| `encapsulation` | :heavy_check_mark: | :x: |
| `interpolation` | :heavy_check_mark: | :x: |
| `inputs` | :question: | :x: |
| `outputs` | :question: | :x: |
| `providers` | :question: | :x: |
| `animations` | :question: | :x: |
| `queries` | :question: | :x: |
| `viewProviders` | :x: | :x: |
| `changeDetection` | :x: | :x: |
| `entryComponents` | :x: | :x: |
| `preserveWhitespaces` | :x: | :x: |
| `module.id` | :x: | :x: |
| `jit` | :x: | :x: |
| | | |
| | | |
| **Class field decorators for components** | | |
| `@Input()` | :heavy_check_mark: | :x: |
| `@Output()`| :heavy_check_mark: | :x: |
| `@HostBinding('class.valid')`| :heavy_check_mark: | :x: |
| `@HostListener('click', ['$event'])`| :heavy_check_mark: | :x: |
| `@ContentChild(myPredicate)`| :heavy_check_mark: | :x: |
| `@ContentChildren(myPredicate)`| :heavy_check_mark: | :x: |
| `@ViewChild(myPredicate)`| :heavy_check_mark: | :x: |
| `@ViewChildren(myPredicate)`| :heavy_check_mark: | :x: |
| `@Query(myPredicate)`| :star: | :x: |
| | | |
| | | |
| **Component lifecycle hooks**| | |
| `constructor()`| :heavy_check_mark: | :x: |
| `ngOnChanges(changeRecord)` | :heavy_check_mark: | :x: |
| `ngOnInit()` | :heavy_check_mark: | :x: |
| `ngAfterContentInit()` | :heavy_check_mark: | :x: |
| `ngAfterViewInit()` | :heavy_check_mark: | :x: |
| `ngOnDestroy()`| :heavy_check_mark: | :x: |
| `ngAfterViewChecked()`| :x: | :x: |
| `ngDoCheck()` | :x: | :x: |
| `ngAfterContentChecked()` | :x: | :x: |
| | | |
| | | |
| **Template syntax**| | |
| `[value]="firstName"`| :heavy_check_mark: | :x: |
| `[attr.role]="myAriaRole"`| :heavy_check_mark: | :x: |
| `[class.extra-sparkle]="isDelightful"`| :heavy_check_mark: | :x: |
| `[style.width.px]="mySize"`| :heavy_check_mark: | :x: |
| `(click)="foo($event)"`| :heavy_check_mark: | :x: |
| `<div title="Hello {{ponyName}}">`| :heavy_check_mark: | :x: |
| `Hello {{ponyName}}`| :heavy_check_mark: | :x: |
| `Sum{{1 + 1 + getVal()}}`| :heavy_check_mark: | :x: |
| `[(title)]="name"`| :heavy_check_mark: | :x: |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>`| :heavy_check_mark: | :x: |
| `*myUnless="myExpression"` | :heavy_check_mark: | :x: |
| `Employer: {{employer?.companyName}}`| :heavy_check_mark: | :x: |
| `<ng-template>`| :heavy_check_mark: | :x: |
| `<ng-content>`| :heavy_check_mark: | :x: |
| `<svg:rect x="0" y="0" width="100" height="100"/>`| :alarm_clock: | :x: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>`<br/>`</svg>`| :alarm_clock: | :x: |
| `<ng-container>`| :alarm_clock: | :x: |
| `<ng-container *ngTemplateOutlet>`| :alarm_clock: | :x: |
| `(keydown.enter.esc)="bar($event)"`| :alarm_clock: | :x: |
| `(ngSubmit)="bar(...)"`| :alarm_clock: | :x: |
| | | |
| | | |
| **Built-in directives**| | |
| `*ngIf="showSection"`| :heavy_check_mark: | :x: |
| `*ngIf="condition; else elseBlock"`| :heavy_check_mark: | :x: |
| `*ngIf="condition; then thenBlock else elseBlock"`| :heavy_check_mark: | :x: |
| `*ngFor="let item of list; index as i"`| :heavy_check_mark: | :x: |
| `*ngFor="let item of list; first as isFirst"`| :heavy_check_mark: | :x: |
| `*ngFor="let item of list; even as isEven"`| :heavy_check_mark: | :x: |
| `*ngFor="let item of list; odd as isOdd"`| :heavy_check_mark: | :x: |
| `[ngSwitch], [ngSwitchCase], ...` | :heavy_check_mark: | :x: |
| `[ngClass]` | :heavy_check_mark: | :x: |
| `[ngStyle]` | :heavy_check_mark: | :x: |
| | | |
| | | |
| **Built-in pipes**| | |
| `{{ observableOrPromise` &#124; `async }}`| :heavy_check_mark: | :x: |
| `{{ value_expression` &#124; `json }}`| :heavy_check_mark: | :x: |
| `{{ value_expression` &#124; `uppercase }}`| :heavy_check_mark: | :x: |
| `{{ value_expression` &#124; `lowercase }}` | :heavy_check_mark: | :x: |
| `{{ input_expression` &#124; `keyvalue }}` | :heavy_check_mark: | :x: |
| `{{ value_expression` &#124; `number }}`| :alarm_clock: | :x: |
| `{{ value_expression` &#124; `percent}}`| :alarm_clock: | :x: |
| `{{ value_expression` &#124; `uppercase }}`| :alarm_clock: | :x: |
| `{{ value_expression` &#124; `currency }}` | :alarm_clock: | :x: |
| `{{ value_expression` &#124; `i18nPlural }}` | :alarm_clock: | :x: |
| `{{ value_expression` &#124; `slice }}` | :alarm_clock: | :x: |
| `{{ value_expression` &#124; `date }}` | :alarm_clock: | :x: |
| `{{ value_expression` &#124; `i18nSelect }}` | :alarm_clock: | :x: |
| `{{ value_expression` &#124; `titlecase }}` | :alarm_clock: | :x: |
| | | |
| | | |
| **Dependency injection decorators** | | |
| `@Self()` | :alarm_clock: | :x: |
| `@Optional()` | :alarm_clock: | :x: |
| `@SkipSelf()` | :alarm_clock: | :x: |
| `@Host()` | :alarm_clock: | :x: |
| | | |
| | | |
| **State** | | |
| `useState(0)` | :star: | :x: |
| **Routing and navigation** | :heavy_check_mark: | :question: |
| | | |
| | | |
| **Directive configuration** | :question: | :question: |
| | | |
| | | |
| **NgModules**| :x: | :x: | :x: |
