## :warning:Early Draft:warning:


## Pregular

React has its Preact. It's time for Angular to get his Pregular! 
Full AOT support and as real WebComponents. Even the template syntax of Angular!

***Source of quote: [Bitcollage](https://twitter.com/Bitcollage/status/1231293460268945408)***

### Motivation

My main motivation for Pregular is [Preact](https://preactjs.com/) and the fact that I am fascinated about compilers (Babel, PostCSS), the love to Angular, Typescript, Reactive-Programming(RxJS) and of course to challenge myself. It is amazing that [Jason Miller](https://twitter.com/_developit) has developed against the interfaces of React and created an **extremely slim** version of React. Exactly the same I intend to do with Pregular.

>Pregular should be fast and extremely slim in terms of file size!


### Goal

Almost every line of code which could be executed at runtime should be created or optimized at [compile time](https://en.wikipedia.org/wiki/Compile_time).

This way of creating code has many advantages. Huge runtime-libs, high memory usage, large bundled files, not optimize-code are practically almost nonexistent when the code generated at compile time. This is also called [AOT](https://en.wikipedia.org/wiki/Ahead-of-time_compilation). With this approach the [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiler has less work to do, and that is damn good for performance.

### What do I mean when I talk about full AOT support?

This has nothing to do with Angular. It's more about [AOT](https://en.wikipedia.org/wiki/Ahead-of-time_compilation) approach. Angular does it in his way and Pregular in his way. 

#### Do not reinvent the wheel and simply use the official interfaces of Angular.

With Pregular you will have the same Angular Interfaces. I will use the Angular original ones. Internally I will map the interfaces to Pregular. The main difference is that the code will directly transpiled to WebComponents without any dependency to Angular. It will just be plain Javascript. 

This procedure, also compiling directly to WebComponents has another advantage. You can use the written Pregular components in every conceivable Framework or Project. It does not matter if it is used React, Vue or Svelte.


#### Of course you could say why you are not supporting angular/elements and why putting in all this effort for Pregular?

Well let me explain. The Typescript Eco-System in terms of plugin development and how to traverse or manipulate easily an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) is hard and not well documented. Furthermore, Angular is huge, this fact will take me a very long time to understand what is happening under the hood of Angular. Maybe in the end, when Pregular is implemented I will be much more smarter on how Angular works because I will have to deal with it while implementing Pregular. Hopefully.

#### Awesome toolings exist already. I do not have to write my own compiler, Angular-Template-Syntax-Parser or CSS-Parser.

I decided to go with Babel, Typescript (only typing system), PostCSS-Compiler, Angular-html-Parser, lit-html and lit-html-server for [SSR](https://www.youtube.com/watch?v=GQzn7XRdzxY). I am very familiar with them. Especially with writing Babel and PostCSS plugins. I have already looked into Angular-HTML-Parser library, it is not magic, it is handcraft that I already know from Babel and PostCSS.

### There are some challenges that need to be overcome.

#### Using exactly the same Angular Template Syntax

The biggest and most exciting challenge will be to implement the Angular Template Syntax in Pregular. Parsing should not be a problem, because there is already the [Angular-Template-Parser](https://astexplorer.net/#/gist/e73a7230966cc85d54937b6511ae9c2f/4d0a4cfc03f38daf3d5c6882b7bbebb98a1fd569). In my point of view 2 things are important. ***First***, not to reinvent the wheel and to use an existing, flexible, fast rendering engine, e.g. [lit-html](https://lit-html.polymer-project.org/guide/rendering-templates) s tag function `html` and ***Secondly***, most important, writing an adapter that translates Angular-Template-Syntax into the desired rendering engine at compile time.

#### lit-html is like your very own template construction kit

>lit-html is extremely customizable and extensible. Directives customize how values are handled, allowing for asynchronous values, efficient keyed-repeats, error boundaries, and more. lit-html is like your very own template construction kit.<br>
<br>***Source of quote: [lit-html.polymer-project.org](https://lit-html.polymer-project.org)***

#### How could it be possible to implement directives with WebComponents?

There are two types of components in WebComponents. The classic one is to inherit directly from HTMLElement and define it with customElements.define:

**Creation**:
```js
customElements.define('app-header', class extends HTMLElement {...});
```
**Usage**:
```html
<app-header></app-header>
```

and secondly to inherit directly from an e.g HTMLButtonElement, HTMLDivElement or HTMLImgElement and interact directly in the instance of HTMLImageElement.

**Creation**:
```js
customElements.define('ng-if-img', class extends HTMLImageElement {...}, {extends: 'img'});
```

**Usage**:
```html
<img is="ng-if-img" ng-if-value="someValue" />
```

As you can see, the second variant is ideal for Angular Directive with WebComponents. 

The shown concept (above) is on a very high abstract level. Of sure, in the implementation of Pregular there will more happens under the hood. I just wanted to show that even Angular directives can be implemented with real WebComponents. 

### Independent packages

At the end of the day it would be desirable if the Angular-Template-Syntax or other feature from Pregular could be used in other Projects, Frameworks or Libs. Therefore the development of Pregular is focused on [loose coupling](https://en.wikipedia.org/wiki/Loose_coupling).

There are many frameworks out there. Many are self-contained. You can't just use features in other Frameworks, Libs or Projects. This should be different with Pregular. It should be like lit-html which expressed it very well.

>lit-html is like your very own template construction kit

You will able to use any features of Pregular in other independent Projects!

#### Compiling not only to WebComponents

Theoretically, it would be also possible to use Pregular to compile directly into [React](http://reactjs.org), [Vue](https://vuejs.org/) or to another component Framework / Lib / Project. 

### Proposal platform for Angular Component

Let me first explain how BabelJS and the TC39 committee work together and what my intention behind ***Proposal platform for Angular Components*** is.

I assume that you have all heard of BabelJS and that it is used in almost every javascript project. With Babel you can use next generator Javascript today. I mean you can already test features in browsers that would normally not work. The best example is `async await`. This has been working long before native support.

#### What does TC39 committee do?

>[TC39](https://github.com/tc39/proposals) is the committee that evolves JavaScript. Their members are companies (among others, all major browser vendors). TC39 members meet regularly, and their meetings are attended by delegates who are sent and invited by experts.<br><br>Each proposal for an ECMAScript feature goes through the following maturity stages, starting with stage 0. The progression from one stage to the next one must be approved by TC39.<br><br>
***Source of Quote: [2ality.com](https://2ality.com/2015/11/tc39-process.html)***

#### What is the relationship between BabelJS and TC39?

New Javascript features are only implemented by BabelJS if they reach Stage-1 in the TC39 committee. In short, TC39 invents new features, passes them to the next stage or discards them and Babel makes sure that can be used in not supported Browsers. This allows TC39 to detect design flaws early and even get feedback from the Community whether the new feature is accepted or not.

<em>***Note:*** Exactly the same is applied to Typescript. Only features will be implemented by Typescript which reached Stage-3 on TC39. There is one exception I can remember and that is the [@decorators](https://github.com/tc39/proposal-decorators)(stage-2) proposal.</em>

#### What does this have to do with Pregular?

First of all, I would like to make it clear that my intention is not to propose e.g. a new decorator or a directive. These can already be implemented by Angular resources. Rather, it is about trying out completely new concepts. In an old project of mine [app-decorators](https://github.com/SerkanSipahi/app-decorators#itemjs) you can define real javascript events (see below `@on load`, `@on click` example Code) in CSS. A part of this feature is executed at compile time and the rest, a small runtime executes at runtime.

I think with BabelJS and PostCSS you can implement ideas faster than with Typescript and Angular. The tooling, the developer experience around BabelJS and PostCSS is simply more easier and the community has much more experience with these two tools. You would have more devs who might work on this project.

These are just two examples (see above code examples) what i already implemented with app-decorators and would like to port to Pregular.

Maybe we can 'build a bridge' between Pregular and Angular just like BabelJS and TC39 do.

// Example CSS-File
```css
/** These atrule (@) events will be loaded asynchronous (non blocking) **/

/** will be loaded on load event **/
@on load {
  @fetch path/to/on/load.css;
}

/** will be loaded when clicked .up class **/
@on click .up {
  @fetch path/to/on/click/up.css;
}

/** will be loaded when url changed **/
@route hello/my/friend.html {
  @fetch path/to/on/some/route/action.css;
}

/** critical path (inline css will appear immediately) **/
my-box div {
  width: 100px;
  height: 100px;
}
```

Or moving an Element by declaring events in css properties.

```css
my-box div {
  top: mousemove('top');
  left: mousemove('left');
}
```

### And what about AI-Based which you can see at the top of the github repo?

I don't want to talk about that yet but when the time comes, you will be the first to know but in short, it follows a different approach like [guess-js](https://github.com/guess-js/guess). The fetching of the files (HTML, CSS and Javascript) per Component by the Browser is much more fragmented or/and clustered. Interaction such as Events (Click, Hove) are also considered.

The only thing in common with guess-js is that the evaluation is done by an AI.

### Conclusion

This is not a design document. These are just my thoughts on how I imagine Pregular to be. Design documents follow as soon as they are worked out. Of course you are welcome to participate in this project. I would be happy about it.<br>

## Pregular Features

### Meanings
| Icon |  | 
| --- | --- |
| :heavy_check_mark: | will implemented | 
| :alarm_clock: | will developed when first alpha is released | 
| :star: | new feature | 
| :question: | not sure if this will be implemented | 
| :warning: | experimental | 
| :x: | will not be implemented |

| | Planned | Implemented |
| --- | ---| --- |
| **Component Class decorator** | | |
| `@Component()` | :heavy_check_mark: | No |
| `@Directive()`| :heavy_check_mark: | No |
| `@Pipe()`| :heavy_check_mark: | No |
| `@Injectable()`| :alarm_clock: | No |
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
| <details close><summary>`elementType`</summary><br><pre>@Component({<br>  selector: 'lazy-img-polyfill'<br>  elementType: 'img'<br>})<br><br>`<img is="lazy-img-polyfill" loading="lazy" src="image/url.jpg">`<br><br><font size="1">***\* Safari needs polyfill***</font></pre></details> | :star::alarm_clock::warning: | No |
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
| <details close><summary>`@Query(myPredicate)`</summary><br>Alias for:<br>`@ContentChild`, `@ContentChildren`, `@ViewChild` and `@ViewChildren`</details> | :star::alarm_clock::warning: | No |
| <details close><summary>`@On('click .foo')`</summary><br>(1) Defining an event with a selector in a class method<br>(2) Alias for `@HostBinding` => `@On('click')`</details> | :star::alarm_clock::warning: | No |
| <details close><summary>`@Route('/name/{{value}}', myPredicate, {name: 'myOutlet'})`</summary><br><pre>@Component({<br>  selector: 'some-component',<br>  template: <br>    `<router-outlet name="myOutlet"></router-outlet>`<br>})<br>class Foo {<br>  @Route('/name1/{{value}}', {name: 'myOutlet'}, BarComponent)<br>  route1 = 'myRoute1';<br>}</pre></details> | :star::alarm_clock::warning: | No |
| | | |
| | | |
| **Built-in Services**| | |
| `ElementRef, constructor(private elr: ElementRef)`| :heavy_check_mark: | No |
| `TemplateRef` | :alarm_clock: | No |
| `ViewContainerRef` | :alarm_clock: | No |
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
| **Built-in Services**| | |
| `ElementRef`| :heavy_check_mark: | No |
| `TemplateRef` | :alarm_clock: | No |
| `ViewContainerRef` | :alarm_clock: | No |
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
| `@Attribute()` | :alarm_clock: | No |
| `@Inject(<any_token>)` | :alarm_clock: | No |
| `@Inject(DOCUMENT)` | :alarm_clock: | No |
| `@Inject(WINDOW)` | :star::alarm_clock: | No |
| `@Inject(LOCATION)` | :star::alarm_clock: | No |
| `@Inject(NAVIGATOR)` | :star::alarm_clock: | No |
| `@Inject(HISTORY)` | :star::alarm_clock: | No |
| `@Inject(LOCALSTORAGE)` | :star::alarm_clock: | No |
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
<br>

## Browser Support
| Chrome*| Firefox* | Edge | Safari* | IE11+ | Chrome Android* | Mobile Safari* |
| --- | --- | --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark:|

\* Indicates the current version of the browser<br>
<font size="1">***In special cases lazy load polyfills for older browsers (+IE11 excluded) but not in first step of pregular***</font>
