import { Foo } from '../src/foo';
import { expect } from './setup';

describe("A suite is just a function", () => {
  it("and so is a spec", () => {
    let x = new Foo<number>(123);
    let a = true;
    expect(true).to.be.equal(true);
    expect(true).to.be.equal(true);
  });
});
