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
| `viewProviders` | :question: | :x: | :question: |
| `template` | :heavy_check_mark: | :x: | :question: |
| `templateUrl` | :heavy_check_mark: | :x: | :question: |
| `styles` | :heavy_check_mark: | :x: | :question: |
| `styleUrls` | :heavy_check_mark: | :x: | :question: |
| `changeDetection` | :question: | :x: | :question: |
| `animations` | :question: | :x: | :question: |
| `encapsulation` | :heavy_check_mark: | :x: | :question: |
| `interpolation` | :heavy_check_mark: | :x: | :question: |
| `entryComponents` | :question: | :x: | :question: |
| `preserveWhitespaces` | :question: | :x: | :question: |
| `module.id` | :question: | :x: | :question: |
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
| `ngDoCheck()` | :question: | :x: | :question: |
| `ngAfterContentInit()` | :heavy_check_mark: | :x: | :question: |
| `ngAfterContentChecked()` | :question: | :x: | :question: |
| `ngAfterViewInit()` | :heavy_check_mark: | :x: | :question: |
| `ngAfterViewChecked()`| :question: | :x: | :question: |
| `ngOnDestroy()`| :heavy_check_mark: | :x: | :question: |
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
| **Dependency injection**| | | |
| :question: | :heavy_check_mark: | :question: | :question: |
| | | | |
| | | | |
| **Routing and navigation**| | | |
| :question: | :heavy_check_mark: | :question: | :question: |
| | | | |
| | | | |
| **Directive configuration**| | | |
| :question: | :question: | :question: | :question: |
| | | | |
| | | | |
| **NgModules**| | | |
| :question: | :x: | :x: | :x: |
