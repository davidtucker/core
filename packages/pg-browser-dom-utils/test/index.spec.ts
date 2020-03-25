import { Foo } from '../src/foo';

describe('Pregular browser dom utils', () => {
  it('should test', () => {
    let foo = new Foo<number>(123);
    expect(foo.bar).toEqual(123);
    console.log('Pregular browser dom utils');
  });
});
