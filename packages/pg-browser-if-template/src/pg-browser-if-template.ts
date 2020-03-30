// @todo: rename later to PgIfDirective
export class PgHTMLTemplateElement extends HTMLTemplateElement {
  static get observedAttributes() {
    return ['pg-if-trigger'];
  }

  constructor(
    private context: HTMLElement,
    private pgIfVmRef: string,
    private pgVmRefs: [string, any] | null,
    private callback: () => void,
    private template: string) {

    super();
    this.innerHTML = this.template;
  }

  public setPgIf(value: any, callback: () => void) {
    this.callback = callback;
    this.setAttribute('pg-if-trigger', value);
  }

  protected attributeChangedCallback(attrName: string) {
    if (attrName !== 'pg-if-trigger') {
      return;
    }

    const [uuid, expressionValue] = this.context[this.pgIfVmRef];
    const ngIfRefNode = this.context.querySelector(`#${uuid}`);

    if (expressionValue) {
      const templateNode = this.content.cloneNode(true);
      ngIfRefNode?.parentNode?.replaceChild(ngIfRefNode, templateNode);
      this.callback();
    } else {
      const ngIfTpl = document.createElement('pg-if-tpl');
      ngIfTpl.appendChild(document.createComment(`pg-if: ${expressionValue}`));
      ngIfTpl.id = uuid;
      ngIfRefNode?.parentNode?.replaceChild(ngIfRefNode, ngIfTpl);
    }
  }
}

!customElements.get('pg-if-template') ? customElements.define('pg-if-template', PgHTMLTemplateElement as any, {extends: 'template'}) : null;
export const PgIfTemplate = PgHTMLTemplateElement;
