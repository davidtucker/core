require('source-map-support').install();
import * as t from '@angular/compiler/src/render3/r3_ast';
import { parseTemplate as parse } from '@angular/compiler';

export class IvyAstVisitor implements t.Visitor<void> {
  result: any[] = [];

  visitElement(element: t.Element) {
    this.result.push(['Element', element.name]);
    this.visitAll([
      element.attributes,
      element.inputs,
      element.outputs,
      element.references,
      element.children,
    ]);
  }

  visitTemplate(template: t.Template) {
    this.result.push(['Template']);
    this.visitAll([
      template.attributes,
      template.inputs,
      template.outputs,
      template.templateAttrs,
      template.references,
      template.variables,
      template.children,
    ]);
  }

  visitContent(content: t.Content) {
    this.result.push(['Content', content.selector]);
    t.visitAll(this, content.attributes);
  }

  visitVariable(variable: t.Variable) {
    this.result.push(['Variable', variable.name, variable.value]);
  }

  visitReference(reference: t.Reference) {
    this.result.push(['Reference', reference.name, reference.value]);
  }

  visitTextAttribute(attribute: t.TextAttribute) {
    this.result.push(['TextAttribute', attribute.name, attribute.value]);
  }

  visitBoundAttribute(attribute: t.BoundAttribute) {
    this.result.push([
      'BoundAttribute',
      attribute.type,
      attribute.name,
      attribute.value,
    ]);
  }

  visitBoundEvent(event: t.BoundEvent) {
    this.result.push([
      'BoundEvent',
      event.name,
      event.target,
      event.handler,
    ]);
  }

  visitText(text: t.Text) {
    this.result.push(['Text', text.value]);
  }

  visitBoundText(text: t.BoundText) {
    this.result.push(['BoundText', text.value]); }

  visitIcu(icu: t.Icu) {
    this.result.push(['Icu', icu]);
  }

  private visitAll(nodes: t.Node[][]) {
    nodes.forEach(node => t.visitAll(this, node));
  }
}

const res = parse('<div *ngIf="a | b | async"><div></div></div>', 'template-name', {});
const visitor = new IvyAstVisitor();
t.visitAll(visitor, res.nodes);
