import { PgIfTemplate } from "../packages/pg-browser-if-template/src";
import { updateDom } from '../packages/pg-browser-dom-utils/src';

interface ElementRef {
  nativeElement: HTMLElement | null;
}

export class AppComponentCompiled extends HTMLElement {
  constructor(public elementRef: ElementRef = {nativeElement: null}) {
    super();
    this.elementRef.nativeElement = this;
  }

  private _pgVm_foo = ['pg-uuid-1', true];
  private set pgVm_foo(value: any) {
    this._pgVm_foo[1] = value;
    this._pgIfTpl_1.setPgIf(value, () => {
      updateDom(this, '_pgVm_foo', value);
    });
  };

  private _pgVm_bar = ['pg-uuid-2', 'valid-value'];
  private set pgVm_bar(value: any) {
    this._pgVm_bar[1] = value;
    this._pgIfTpl_2.setPgIf(value, () => {
      updateDom(this, '_pgVm_bar', value);
    });
  };

  private _pgVm_baz = ['pg-uuid-3', {a: {b: 'valid-object'}}];
  private set pgVm_baz(value: any) {
    this._pgVm_baz[1] = value;
    this._pgIfTpl_3.setPgIf(value, () => {
      updateDom(this, '_pgVm_baz', value);
    });
  };

  private _pgIfTpl_1 = new PgIfTemplate(
    this, '_pgVm_foo', null, () => {
      this._pgIfTpl_2.setPgIf(this._pgVm_bar[1], () => {
        updateDom(this, '_pgVm_bar', this._pgVm_bar[1]);
      });
    },`
    <div id="pg-uuid-1">
      <pg-vm id="pg-uuid-11"></pg-vm>
      <pg-if-tpl id="pg-uuid-2"></pg-if-tpl></pg-vm>
    </div>`);

  private _pgIfTpl_2 = new PgIfTemplate(
    this,  '_pgVm_bar', null, () => {
      this._pgIfTpl_3.setPgIf(this._pgVm_baz[1], () => {
        updateDom(this, '_pgVm_baz', this._pgVm_baz[1]);
      });
    },`
    <div id="pg-uuid-2">
      <pg-if-tpl id="pg-uuid-3"></pg-if-tpl>
      <pg-vm id="pg-uuid-12"></pg-vm>
    </div>`);

  private _pgIfTpl_3 = new PgIfTemplate(
    this, '_pgVm_baz', null, () => null,`
    <div id="pg-uuid-3">
      <pg-vm id="pg-uuid-13"></pg-vm>
      <pg-if-tpl id="pg-uuid-4"></pg-if-tpl>
    </div>`);

  // @note: There will be a kind of pre-rendering at compile time
  // because of the default variable values!
  private _mainTemplate = `
    <pg-if-tpl id="pg-uuid-1"></pg-if-tpl>
  `;

  // @note: the template should be generated in constructor and
  // then appended to this.innerHTML on connectedCallback!
  private _renderTemplate() {
    this.innerHTML = this._mainTemplate;
    this._pgIfTpl_1.setPgIf(this._pgVm_foo[1], () => {
      updateDom(this, '_pgVm_foo', this._pgVm_foo[1]);
    });
  }

  connectedCallback() {
    this._renderTemplate();

    /* this */ console.log(this);
    /* into */console.log({
      elementRef: this.elementRef,
      foo: this._pgVm_foo[1],
      bar: this._pgVm_bar[1],
      baz: this._pgVm_baz[1],
    });
  }
}
