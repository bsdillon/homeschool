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
    if(coeffs[i]>0)
    {
      pow = "<sup>"+coeffs[i]+"</sup>"
      if(coeffs[i]==1)
      {
        pow = "";
      }
      
      if(i<10)
      {
        s+= "(x + ";
        s += (10-i)+")"+pow;
      }
      else if(i==10)
      {
        s= "x"+ pow + s;
      }
      else
      {
        s+= "(x &minus; ";
        s += (i-10)+")"+pow;
      }
    }
  }
  return s;
}
