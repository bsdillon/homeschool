if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

function factoredPolynomial()
{
  var n = Math.floor(Random()*3+3)
  var coeffs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(let i=0;i<n;i++)
  {
    loc = Math.floor(Random()*coeffs.length)
    coeffs[loc] = coeffs[loc]+1;
  }
  
  var s = "";
  for(let i=0;i<coeffs.length;i++)
  {
    s += "(x "
    if(i<=10)
    {
      s+= "+ ";
    }
    else
    {
      s+= "&minus; ";
    }
    s += i+")<sup>"+coeffs[i]+"</sup>";
  }
  return s;
}
