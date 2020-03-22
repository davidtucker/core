import { Foo } from '../src/foo';

describe("A suite is just a function", () => {
  it("and so is a spec", () => {
    let foo = new Foo<number>(123);
    expect(foo.bar).toEqual(123);
  });
});
