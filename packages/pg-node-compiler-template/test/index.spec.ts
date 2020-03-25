import { Foo } from '../src/foo';

describe('Pregular node compile template', () => {
  it('should test', () => {
    let foo = new Foo<number>(123);
    expect(foo.bar).toEqual(123);
    console.log('Pregular node compile template');
  });
});
