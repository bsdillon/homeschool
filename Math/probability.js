if(typeof MathDefined === "undefined")
{
  alert("probability.js requires math.js");
}

function AssortmentsSelection() {
  var temp = "<p>A bag of assorted candies includes ";
  var dark = Math.floor(Random()*10+1);
  var white = Math.floor(Random()*10+1);
  var choc = Math.floor(Random()*10+1);
  temp += dark+" dark, "+white+" white, and "+choc+" regular chocolates.<br>";
  var r = Math.floor(Random()*3);
  var type = ["dark","white","regular"];
  temp += "Express the probability of pulling a "+type[r]+" candy as a fraction, a decimal, and a percentage.</p>";
  return temp;
}

function Factorial() {
  var temp = "<p>Expand ";
  var top = Math.floor(Random()*10+3);
  var bottom = Math.floor(Random()*10+3);
  temp += top + "! / "+bottom+"! and then show the remainder.</p>"

  return temp
}