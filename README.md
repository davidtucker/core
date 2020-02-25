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
| `inputs` | :heavy_check_mark: | :x: | :question: |
| `host` | :heavy_check_mark: | :x: | :question: |
| `template` | :heavy_check_mark: | :x: | :question: |
| `templateUrl` | :heavy_check_mark: | :x: | :question: |
| `styles` | :heavy_check_mark: | :x: | :question: |
| `styleUrls` | :heavy_check_mark: | :x: | :question: |
| `encapsulation` | :heavy_check_mark: | :x: | :question: |
| `interpolation` | :heavy_check_mark: | :x: | :question: |
| `animations` | :question: | :x: | :question: |
| `viewProviders` | :x: | :x: | :question: |
| `changeDetection` | :x: | :x: | :question: |
| `entryComponents` | :x: | :x: | :question: |
| `preserveWhitespaces` | :x: | :x: | :question: |
| `module.id` | :x: | :x: | :question: |
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
| `(click)="readRainbow($event)"`| :heavy_check_mark: | :x: | :question: |
| `<div title="Hello {{ponyName}}">`| :heavy_check_mark: | :x: | :question: |
| `Hello {{ponyName}}`| :heavy_check_mark: | :x: | :question: |
| `[(title)]="name"`| :heavy_check_mark: | :x: | :question: |
| `<video #movieplayer`<br/>`<button (click)="movieplayer.play()">`<br/>`</video>`| :heavy_check_mark: | :x: | :question: |
| `*myUnless="myExpression"` | :heavy_check_mark: | :x: | :question: |
| `Card No.: {{cardNumber` &#124; `myCardNumberFormatter}}`| :heavy_check_mark: | :x: | :question: |
| `Employer: {{employer?.companyName}}`| :heavy_check_mark: | :x: | :question: |
| `<svg:rect x="0" y="0" width="100" height="100"/>`| :question: | :x: | :question: |
| `<svg>`<br/>`<rect x="0" y="0" width="100" height="100"/>`<br/>`</svg>`| :question: | :x: | :question: |
| | | | |
| | | | |
| **Built-in directives**| | | |
| `*ngIf="showSection"`| :heavy_check_mark: | :x: | :question: |
| `*ngFor="let item of list"`| :heavy_check_mark: | :x: | :question: |
| `[ngSwitch], [ngSwitchCase], ...` | :heavy_check_mark: | :x: | :question: |
| `[ngClass]` | :heavy_check_mark: | :x: | :question: |
| `[ngStyle]` | :heavy_check_mark: | :x: | :question: |
| | | | |
| | | | |
| **Dependency injection** | :heavy_check_mark: | :question: | :question: |
| | | | |
| **Routing and navigation** | :heavy_check_mark: | :question: | :question: |
| | | | |
| **Directive configuration** | :question: | :question: | :question: |
| | | | |
| **NgModules**| :x: | :x: | :x: |
