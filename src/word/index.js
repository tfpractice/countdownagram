const { floor, random, } = Math;

export const vowels = 'aeiouy'.split('');
export const cons = 'bcdfghjklmnpqrstvwxz'.split('');

export const rand = arr => arr[(floor(random() * arr.length))];
export const addVowel = vArr => [ ...(new Set(vArr).add(rand(vowels))), ];
export const addCons = vArr => [ ...(new Set(vArr).add(rand(cons))), ];

export const genVowels = (vArr = [],count) => 
new Set(vArr).size < count ? genVowels(addVowel([ ...vArr, ]), count) : vArr;
export const genCons = (cArr = [],count) => 
new Set(cArr).size < count ? genVowels(addVowel([ ...cArr, ]), count) : cArr;
