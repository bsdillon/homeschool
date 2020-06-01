if(typeof MathDefined === "undefined")
{
  alert("equations.js requires math.js");
}

function SolveLine()
{
  var a = flip(Math.floor(Random()*5+1));
  var b = Math.floor(Random()*5+1);
  var x = Math.floor(Random()*5+1);
  var c = a*x;
  
  if(Random()<.5)
  {
    var end = "+ "+b;
    c+=b;
  }
  else
  {
    var end = "&minus; "+b;
    c-=b;
  }

  var s = "<i>Solve for x</i><br>"+c+" = "+a+"x "+end+"<br>";
  s+="<span class='answer'>";
  s+=(a*x)+" = "+a+"x<br>";
  s+=x+" = x";
  s+="</span>";
  return s;
}

function SolveSquare()
{
  var a = flip(Math.floor(Random()*5+1));
  var b = Math.floor(Random()*5+1);
  var x = Math.floor(Random()*5+1);
  var c = a*x*x;
  
  if(Random()<.5)
  {
    var end = "+ "+b;
    c+= b;
  }
  else
  {
    var end = "&minus; "+b;
    c-= b;
  }

  var s= "<i>Solve for x</i><br>"+c+" = "+a+"x<sup>2</sup> "+ end+"<br>";

  s+="<span class='answer'>";
  s+=(a*x*x)+" = "+a+"x<sup>2</sup><br>";
  s+=(x*x)+" = x<sup>2</sup><br>";
  s+="&plusmn;"+x+" = x";
  s+="</span>";
  return s;
}

function SolveSquareRoot()
{
  if(Random()<.5)
  {
    return SqrtOne();
  }
  else
  {
    return SqrtTwo();
  }
}

function SqrtOne()
{
  var c = Math.floor(Random()*5+1);
  var a = flip(Math.floor(Random()*5+1));
  var x = Math.floor(Random()*5+1);
  var b = c - (a*x);

  //c=a)x+b >>> b = c-a)x

  var v = "<i>Solve for x</i><br>"+c+" = "+a+"&radic;x ";
  if(b>0)
  {
    v+= "+ "+b;
  }
  else if(b<0)
  {
    v+= "&minus; "+(-b);
  }

  v+="<br><span class='answer'>";
  v+=(c-b)+" = "+a+"&radic;x<br>";
  v+=x+" = &radic;x<br>";
  v+=(x*x)+" = x<br>";
  v +="</span>";
  return v;
}

function SqrtTwo()
{
  var c = flip(Math.floor(Random()*5+1));
  var a = flip(Math.floor(Random()*5+1));
  var x = Math.floor(Random()*5+1);
  var b = (c*c) - (a*x);

  //c=)(ax+b) >>> b = c^2-ax

  var v = "<i>Solve for x</i><br>"+c+" = &radic;("+a+"x ";

  var end="";
  if(b>0)
  {
    end = "+ "+b;
  }
  else if(b<0)
  {
    end = "&minus; "+(-b);
  }
  v += end+")";

  v+="<br><span class='answer'>";
  v+=(c*c)+" = "+a+"x "+end+"<br>";
  v+=(a*x)+" = "+a+"x<br>";
  v+=x+" = x<br>";
  v +="</span>";
  return v;
}

function SolveFraction()
{
  var x = flip(Math.floor(Random()*5+1));
  var b = flip(Math.floor(Random()*5+1));
  var c = flip(Math.floor(Random()*5+1));
  if(x+b==0)
  {
    x++;
  }

  var a = c*(x+b);
  
  var v = "<i>Solve for x</i><br><table><tr><td>"+c+" = </td><td class='under center'>"+a+"</td></tr><tr><td></td><td>x ";

  if(b>0)
  {
    v += "+ "+b;
  }
  else
  {
    v += "&minus; "+(-b);
  }
  v +="</td></tr></table>";

  return v;
}

function Distribute()
{
  var a = flip(Math.floor(Random()*5+1));
  var b = flip(Math.floor(Random()*5+1));
  var c = flip(Math.floor(Random()*5+1));
  var e1 = Math.floor(Random()*3+1);
  var e2 = Math.floor(Random()*3+1);
  var e3 = e2+Math.floor(Random()*3+1);
  var e1b = Math.floor(Random()*3+1);
  var e2b = Math.floor(Random()*3+1);
  var e3b = e2b+Math.floor(Random()*3+1);
  var chars = ["ab","xy","mn","pq"];
  var r = Math.floor(Random()*4);
  var c1 = chars[r][0];
  var c2 = chars[r][1];

  var v = "<i>Distribute over the binomial</i><br>" + a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>(" + b + c1+"<sup>" + e2 + "</sup>"+c2+"<sup>" + e2b + "</sup> + " + c + c1+"<sup>" + e3 + "</sup>"+c2+"<sup>" + e3b + "</sup>)<br>";
  v+="<span class='answer'>";
  v+="("+a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>)("+ b + c1+"<sup>" + e2 + "</sup>"+c2+"<sup>" + e2b + "</sup>) + ("+a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>)(" + c + c1+"<sup>" + e3 + "</sup>"+c2+"<sup>" + e3b + "</sup>)<br>";
  v+=(a*b)+c1+"<sup>"+(e1+e2)+"</sup>"+c2+"<sup>"+(e1b+e2b)+"</sup> + "+(a*c)+c1+"<sup>"+(e1+e3)+"</sup>"+c2+"<sup>"+(e1b+e3b)+"</sup><br>";
  v +="</span>";
  return v;
}

function Factor()
{
  var a = flip(Math.floor(Random()*5+1));
  var b = flip(Math.floor(Random()*5+1));
  var c = flip(Math.floor(Random()*5+1));
  var e1 = Math.floor(Random()*7+1);
  var e2 = e1+Math.floor(Random()*3+1);
  var e3 = e1+Math.floor(Random()*3+1);
  var e1b = Math.floor(Random()*7+1);
  var e2b = e1b+Math.floor(Random()*3+1);
  var e3b = e1b+Math.floor(Random()*3+1);
  e1 = Math.min(e2,e3);
  e1b = Math.min(e2b,e3b);
  var chars = ["ab","xy","mn","pq"];
  var r = Math.floor(Random()*4);
  var c1 = chars[r][0];
  var c2 = chars[r][1];

  var v = "<i>Factor the common portion out of the binomial.</i><br>"+ (a*b) + c1+"<sup>" + e2 + "</sup>"+ c2+"<sup>" + e2b + "</sup> + " + (a*c) + c1+"<sup>" + e3 + "</sup>"+ c2+"<sup>" + e3b + "</sup><br>";
  v+="<span class='answer'>";
  v+="("+a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>)("+ b + (e2-e1==0?"":c1+"<sup>" + (e2-e1) + "</sup>")+(e2b-e1b==0?"":c2+"<sup>" + (e2b-e1b) + "</sup>")+") + ("+a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>)(" + c + (e3-e1==0?"":c1+"<sup>" + (e3-e1) + "</sup>")+(e3b-e1b==0?"":c2+"<sup>" + (e3b-e1b) + "</sup>")+")<br>";
  v+=a + c1+"<sup>" + e1 + "</sup>"+c2+"<sup>" + e1b + "</sup>(" + b + (e2-e1==0?"":c1+"<sup>" + (e2-e1) + "</sup>")+(e2b-e1b==0?"":c2+"<sup>" + (e2b-e1b) + "</sup>")+" + " + c + (e3-e1==0?"":c1+"<sup>" + (e3-e1) + "</sup>")+(e3b-e1b==0?"":c2+"<sup>" + (e3b-e1b) + "</sup>")+")";
  v +="</span>";

  return v;
}

function FOIL()
{
  a = Math.floor(Random()*5+1);
  b = flip(Math.floor(Random()*5+1));
  c = Math.floor(Random()*5+1);
  d = flip(Math.floor(Random()*5+1));

  if(Random()>.5)
  {
    a=-a;
    b=-b;
  }

  if(Random()>.5)
  {
    var tmp = "<i>Multiply these binomials</i><br>("+a+"x ";
    if(Random()>.5)
    {
      tmp += "+" + Math.abs(b) + ")("+c+"x ";
    }
    else
    {
      tmp += "&minus;" + Math.abs(b) + ")("+c+"x ";
    }

    if(Random()>.5)
    {
      tmp += "+" + Math.abs(d) + ")";
    }
    else
    {
      tmp += "&minus;" + Math.abs(d) + ")";
    }
    
    return tmp;
  }
  else
  {
    return "<i>Factor this trinomial</i><br>" + (a*c)+"x<sup>2</sup> + "+((c*b)+(a*d))+"x + "+(b*d);
  }
}

function XYPoint()
{
  var s = "<i>Draw and label these points on a plane</i><br>";

  var letter = ['A','B','C','D','E']

  for(let x = 0;x<5;x++)
  {
    s+= letter[x]+": (";
  
    if(Random()<.3)
    {
      s += flip(Math.floor(Random()*10));
      s += ", "
      s += flip(Math.floor(Random()*10));
    }
    else if(Random()<.5)
    {
      s += flip(Math.floor(Random()*10))+"."+Math.floor(Random()*10);
      s += ", "
      s += flip(Math.floor(Random()*10))+"."+Math.floor(Random()*10);
    }
    else
    {
      var d = Math.floor(Random()*5+1);
      s += flip(Math.floor(Random()*(10*d)+1))+"/"+d;
      s += ", "
      var d = Math.floor(Random()*5+1);
      s += flip(Math.floor(Random()*(10*d)+1))+"/"+d;
    }
    s += ")&nbsp;&nbsp;"
    if(x==2)
    {
      s+="<br>";
    }
  }

  return s;
}

function ThreeDLinear()
{
  var x = flip(Math.floor(Random()*5+1));
  var y = flip(Math.floor(Random()*5+1));
  var z = flip(Math.floor(Random()*5+1));

  var s ="<i>Solve this system of equations</i>";

  if(Random()<.5)
  {
    s ="<i>Use matricies to solve this system of equations</i>";
  }

  for(let i=0;i<3;i++)
  {
    var c1 = flip(Math.floor(Random()*5+1));
    var c2 = flip(Math.floor(Random()*5+1));
    var c3 = flip(Math.floor(Random()*5+1));
  
    s+="<br>"+c1+"x + "+c2+"y + "+c3+"z = "+(c1*x+c2*y+c3*z);
  }

  return s;
}

function AddFraction()
{
  var s = "<table><tr><td colspan='4'><i>Add</i></td></tr>"
  var a = Math.floor(Random()*5+1);
  var b = Math.floor(Random()*5+1);
  var c = Math.floor(Random()*5+1);
  var d = Math.floor(Random()*5+1);
  var e = Math.floor(Random()*5+1);
  var f = Math.floor(Random()*5+1);

  s+= "<tr><td class='under center'>"+a+"</td><td rowspan='2'>+</td><td class='under center'>"+b+"</td><td rowspan='2'>=</td></tr>";
  s+= "<tr><td>"+c+"x";
  if(Random()<.5)
  {
    s+= " + "+d+"</td><td>"+e+"x";
  }
  else
  {
    s+= " &minus; "+d+"</td><td>"+e+"x";
  }

  if(Random()<.5)
  {
    s+= " + "+f+"</td></tr>";
  }
  else
  {
    s+= " &minus; "+f+"</td></tr>";
  }

  s +="</table";
  return s;
}

function SubtractFraction()
{
  var s = "<table><tr><td colspan='4'><i>Subtract</i></td></tr>"
  var a = flip(Math.floor(Random()*5+1));
  var b = flip(Math.floor(Random()*5+1));
  var c = flip(Math.floor(Random()*5+1));
  var d = flip(Math.floor(Random()*5+1));
  var e = flip(Math.floor(Random()*5+1));
  var f = flip(Math.floor(Random()*5+1));

  s+= "<tr><td class='under center'>"+((a*e)+(c*b))+"x + "+((a*f)+(d*b))+"</td><td rowspan='2'>&minus;</td><td class='under center'>"+b+"</td><td rowspan='2'>=</td></tr>";
  s+= "<tr><td>"+(c*e)+"x<sup>2</sup> + "+((d*e)+(c*f))+"x "+(d*f)+"</td><td>"+e+"x +"+f+"</td></tr>";

  s +="</table";
  return s;
}

function Algebra()
{
  //SolveLine
  //SolveSquare
  //SolveSquareRoot
  //SolveFraction
  //Distribute
  //Factor
  //FOIL
  //XYPoint
  //ThreeDLinear
  //AddFraction
  //SubtractFraction

  this.sectionProbabilities = [1,1,1,1,1,1,1,1,1,1,1];
}

Algebra.prototype.SetSectionProbabilities = function(a,b,c,d,e,f,g,h,i,j,k)
{
  //SolveLine
  //SolveSquare
  //SolveSquareRoot
  //SolveFraction
  //Distribute
  //Factor
  //FOIL
  //XYPoint
  //ThreeDLinear
  //AddFraction
  //SubtractFraction

  this.sectionProbabilities = [a,b,c,d,e,f,g,h,i,j,k];
}

Algebra.prototype.SelectProblem = function()
{
    var total = 0;

  for(let i=0;i<this.sectionProbabilities.length;i++)
  {
    total+=this.sectionProbabilities[i];
  }

  var x = Random()*total;
  var current = this.sectionProbabilities[0];

  if(x<current)
  {
    return SolveLine();
  }

  current += this.sectionProbabilities[1];

  if(x<current)
  {
    return SolveSquare();
  }

  current += this.sectionProbabilities[2];

  if(x<current)
  {
    return SolveSquareRoot();
  }
  
  current += this.sectionProbabilities[3];

  if(x<current)
  {
    return SolveFraction();
  }
  
  current += this.sectionProbabilities[4];

  if(x<current)
  {
    return Distribute();
  }
  
  current += this.sectionProbabilities[5];

  if(x<current)
  {
    return Factor();
  }
  
  current += this.sectionProbabilities[6];

  if(x<current)
  {
    return FOIL();
  }
  
  current += this.sectionProbabilities[7];

  if(x<current)
  {
    return XYPoint();
  }
  
  current += this.sectionProbabilities[8];

  if(x<current)
  {
    return ThreeDLinear();
  }
  
  current += this.sectionProbabilities[9];

  if(x<current)
  {
    return AddFraction();
  }
  
  current += this.sectionProbabilities[10];

  if(x<current)
  {
    return SubtractFraction();
  }  
}
