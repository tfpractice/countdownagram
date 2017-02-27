import 'jasmine-expect';
import { addVowel,genVowels, } from 'src/word/index';

describe('genVowels', () => {
  it('returns a vowel array', () => {
    console.log(genVowels([],3));
    expect(genVowels([],3)).toEqual(value);
  });
});
