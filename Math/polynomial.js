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
      if(i<10)
      {
        s+= "(x + ";
        s += (i-10)+")<sup>"+coeffs[i]+"</sup>";
      }
      else if(i==10)
      {
        if(coeffs[i]==0)
        {
          s= "x"+s;
        }
        else
        {
          s= "x<sup>"+coeffs[i]+"</sup>"+s;
        }
      }
      else
      {
        s+= "(x &minus; ";
        s += (i-10)+")<sup>"+coeffs[i]+"</sup>";
      }
    }
  }
  return s;
}
