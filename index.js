function introduction(name) { return `Hi, my name is ${name}.` }
//1) takes in an argument of a name and returns a phrase with that name using string interpolation

function introductionWithLanguage(name, language) { return `Hi, my name is ${name} and I am learning to program in ${language}.`}
//2) takes in two arguments, a name and a language, and returns a phrase using those arguments

function introductionWithLanguageOptional(name, language="JavaScript") { return `Hi, my name is ${name} and I am learning to program in ${language}.` }
//3) takes in two arguments, a name and a language, and language defaults to JavaScript
