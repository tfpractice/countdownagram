import { findAll, } from 'subanagram';
import { prompt, } from 'inquirer';

const vowelQ = {
 type: 'list',
 name: 'v',
 message: 'How Many Vowels',
 choices: [ '3','4','5', ],
};
const conQ = {
 type: 'list',
 name: 'c',
 message: 'How Many Consonants',
 choices: [ '3','4','5', ],
};
const askVowels = () => 
prompt([ vowelQ, conQ, ]).then(askConsonants).catch(console.error);

// const generateWords = ({v,c})
const askConsonants = ({ v, }) => prompt([ conQ, ]).then(console.log).catch(console.error);

askVowels();
