import { strLen } from '../index';

console.log(strLen('hello world!'));

describe('Test strLen', () => {
  it('Correctly evaluates the length of Hello World! as 12', () => {
    expect(strLen('hello world!')).toEqual(12);
  });

  it('Correctly evaluates the length of Hello World!!! to be too long, bruv', () => {
    expect(strLen('hello world!!!')).toEqual('too long bruv');
  });
});
