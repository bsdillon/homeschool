if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

function createFromRoots()
{
  var a = Math.floor(Random()*5+1);
  if(Random()>.5)
  {
    a = -a;
  }
  
  var n = Math.floor(Random()*3+3)
  var coeffs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(let i=0;i<n;i++)
  {
    loc = Math.floor(Random()*coeffs.length)
    coeffs[loc] = coeffs[loc]+1;
  }
  
  var s = "";
  var ans= 1;
  for(let i=0;i<coeffs.length;i++)
  {
    if(coeffs[i]>0)
    {
      s+=" "+(i-10);

      ans = ans*Math.pow((i-10),coeffs[i]);
      
      if(coeffs[i]>1)
      {
        s+=" ("+coeffs[i]+" times)";
      }
    }
  }
  s = "f(0)="+(ans*a)+" and roots: "+s
  return s;
}

function factoredPolynomial()
{
  var a = Math.floor(Random()*5+1);
  if(Random()>.5)
  {
    a = -a;
  }
  
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
  s = a + s;
  return s;
}
