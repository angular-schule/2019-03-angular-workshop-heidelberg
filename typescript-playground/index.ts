import { Test } from "./test";
import { Math } from "./math";

let test = new Test(`Hallo Heidelberg! ❤️`);
var antwort = test.dieAntwort('Die Antwort auf...');
console.log(antwort)


// TODO: neue Klasse zum Addieren von Werten
// zB. math.ts und dann: Math.sum(2, 3)

console.log(Math.sum(2, 3));