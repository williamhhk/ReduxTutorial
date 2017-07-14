let url = 'Default.aspxPage=Price%20Breaks&UOM=EA&Size=1.000000000&Item=DEL+.0380PCLX&Part=&ID=8461&ContentPage=TRUE'
let pattern = "[?&]ID=([^&#]*)";
let regexp = new RegExp(pattern);
var result = regexp.exec(url);



// Word Boundary
console.log(/\bcat\b/.test("cat concatenate"));
//  No word boundary
console.log(/\bcat\b/.test("catcon cat enate"));

//http://eloquentjavascript.net/09_regexp.html


//  No word boundary
console.log(/\bcat\b/.test("catconcatenate"));


var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));
// → the CIA and FBI


var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1


var re = /hi/g;
re.test('hi there!');
console.log(RegExp.lastMatch); // "hi"
console.log(RegExp['$&']);     // "hi"

var name1 = "dea+hl[]rd";
var text = "This dea+hl[]rd guy is super annoying.";
 
console.log(name1.match(/[^\w\s]/g));

// console.log(/[^\w\s]/g.test(name1));
console.log(RegExp['$&'])

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//$&	Inserts the matched substring.
var escaped = name1.replace(/[^\w\s]/g, "\\$&");
console.log(escaped);
regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → This _dea+hl[]rd_ guy is super annoying.