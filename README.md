## Pregular

#### Meanings
| Icon |  | 
| --- | --- |
| :heavy_check_mark: | will implemented | 
| :alarm_clock: | will developed when first alpha is released | 
| :star: | new feature | 
| :question: | not sure if this will be implemented | 
| :warning: | experimental | 
| :x: | will not be implemented | 

#### Features
| Feature | Planned | Implemented |
| --- | ---| --- |
| **Component Class decorator** | | |
| `@Component()` | :heavy_check_mark: | No |
| `@Injectable()`| :alarm_clock: | No |
| `@Directive()`| :alarm_clock: | No |
| `@Pipe()`| :alarm_clock: | No |
| | | |
| | | |
| **Component configuration** | | |
| `selector` | :heavy_check_mark: | No |
| `template` | :heavy_check_mark: | No |
| `templateUrl` | :heavy_check_mark: | No |
| `styles` | :heavy_check_mark: | No |
| `styleUrls` | :heavy_check_mark: | No |
| `encapsulation` | :heavy_check_mark: | No |
| `interpolation` | :heavy_check_mark: | No |
| `host` | :alarm_clock: | No |
| `exportAs` | :alarm_clock: | No |
| <details close><summary>`elementType`</summary><br><pre>@Component({<br>  selector: 'my-real-image-component'<br>  elementType: 'img'<br>})<br><br>`<img is="my-real-image-component" src="image/url.jpg">`</pre></details> | :star::alarm_clock::warning: | No |
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
| `@HostBinding('class.valid')`| :alarm_clock: | No |
| `@HostListener('click', ['$event'])`| :alarm_clock: | No |
| `@ContentChild(myPredicate)`| :alarm_clock: | No |
| `@ContentChildren(myPredicate)`| :alarm_clock: | No |
| `@ViewChild(myPredicate)`| :alarm_clock: | No |
| `@ViewChildren(myPredicate)`| :alarm_clock: | No |
| <details close><summary>`@Query(myPredicate)`</summary><br>Alias for: `@ContentChild`, `@ContentChildren`, `@ViewChild` and `@ViewChildren`</details> | :star::alarm_clock::warning: | No |
| <details close><summary>`@On('click .foo')`</summary><br>(1) Defining an event with a selector in a class method<br>(2) Alias for `@HostBinding` => `@On('click')`</details> | :star::alarm_clock::warning: | No |
| <details close><summary>`@Route('/name/{{value}}', myPredicate, {name: 'myOutlet'})`</summary><br><pre>@Component({<br>  selector: 'some-component',<br>  template: <br>    `<router-outlet name="myOutlet"></router-outlet>`<br>})<br>class Foo {<br>  @Route('/name1/{{value}}', {name: 'myOutlet'}, BarComponent)<br>  route1 = 'myRoute1';<br>}</pre></details> | :star::alarm_clock::warning: | No |
| | | |
| | | |
| **Component lifecycle hooks**| | |
| `constructor()`| :heavy_check_mark: | No |
| `ngOnChanges(changeRecord)` | :heavy_check_mark: | No |
| `ngOnInit()` | :heavy_check_mark: | No |
| `ngAfterViewInit()` | :heavy_check_mark: | No |
| `ngOnDestroy()`| :heavy_check_mark: | No |
| `ngAfterContentInit()` | :alarm_clock: | No |
| `ngAfterViewChecked()`| :x: | - |
| `ngDoCheck()` | :x: | - |
| `ngAfterContentChecked()` | :x: | - |
| | | |
| | | |
| **Template syntax**| | |
| `Hello {{ponyName}}`| :heavy_check_mark: | No |
| `<div title="Hello {{ponyName}}">`| :heavy_check_mark: | No |
| `(click)="foo($event)"`| :heavy_check_mark: | No |
| `[value]="firstName"`| :alarm_clock: | No |
| `[attr.role]="myAriaRole"`| :alarm_clock: | No |
| `[class.extra-sparkle]="isDelightful"`| :alarm_clock: | No |
| `[style.width.px]="mySize"`| :alarm_clock: | No |
| `Sum{{1 + 1 + getVal()}}`| :alarm_clock: | No |
| `[(title)]="name"`| :alarm_clock: | No |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>`| :alarm_clock: | No |
| `*myUnless="myExpression"` | :alarm_clock: | No |
| `Employer: {{employer?.companyName}}`| :alarm_clock: | No |
| `<ng-template>`| :alarm_clock: | No |
| `<ng-content>`| :alarm_clock: | No |
| `<router-outlet>`, `<router-outlet name="myOutlet">`| :alarm_clock: | No |
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
| `*ngIf="condition; then thenBlock else elseBlock"`| :alarm_clock: | No |
| `*ngFor="let item of list; index as i"`| :alarm_clock: | No |
| `*ngFor="let item of list; first as isFirst"`| :alarm_clock: | No |
| `*ngFor="let item of list; even as isEven"`| :alarm_clock: | No |
| `*ngFor="let item of list; odd as isOdd"`| :alarm_clock: | No |
| `*ngFor="let item of items; index as i; trackBy: trackByFn`| :alarm_clock: | No |
| `[ngSwitch], [ngSwitchCase], ...` | :alarm_clock: | No |
| `[ngClass]` | :alarm_clock: | No |
| `[ngStyle]` | :alarm_clock: | No |
| | | |
| | | |
| **Built-in pipes**| | |
| `{{ observableOrPromise` &#124; `async }}`| :heavy_check_mark: | No |
| `{{ value_expression` &#124; `json }}`| :alarm_clock: | No |
| `{{ value_expression` &#124; `uppercase }}`| :alarm_clock: | No |
| `{{ value_expression` &#124; `lowercase }}` | :alarm_clock: | No |
| `{{ input_expression` &#124; `keyvalue }}` | :alarm_clock: | No |
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
| **State** | :alarm_clock: | No |
| | | |
| | | |
| **Routing and navigation** | :alarm_clock: | No |
| | | |
| | | |
| **Directive configuration** | :alarm_clock: | No |
| | | |
| | | |
| **NgModules**| :x: | - |
