if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

function line()
{
  a = flip(Math.floor(Random()*9+1));
  b = flip(Math.floor(Random()*9+1));
  c = flip(Math.floor(Random()*5+1))*b;

  return a+"x + "+b+"y "+ relation()+" "+c;
}

function parabola()
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
    var tmp = "y "+ relation() + "("+a+"x ";
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
    return "y "+ relation() + (a*c)+"x<sup>2</sup> + "+((c*b)+(a*d))+"x + "+(b*d);
  }
}

function circle()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  r = Math.floor(Random()*5+1);

  return "0 "+ relation() + " x<sup>2</sup> + y<sup>2</sup> + "+ (2*a) +"x + "+ (2*b) +"y + "+((a*a)+(b*b)-(r*r));
}

function ellipse()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  c = flip(Math.floor(Random()*5+1));
  d = flip(Math.floor(Random()*5+1));
  r = Math.floor(Random()*5+1);

  return "0 "+ relation() + " " + (d*d) +"x<sup>2</sup> + "+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (2*b*c*c) +"y + "+((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
}

function hyperbola()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  c = flip(Math.floor(Random()*5+1));
  d = flip(Math.floor(Random()*5+1));
  r = 1;

  if(Random()>.5)
  {
    return "0 "+ relation() + " -" + (d*d) +"x<sup>2</sup> + "+ (c*c)+"y<sup>2</sup> + "+ (-2*a*d*d) +"x + "+ (2*b*c*c) +"y + "+(-(d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
  }
  else
  {
    return "0 "+ relation() + " " + (d*d) +"x<sup>2</sup> - "+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (-2*b*c*c) +"y + "+((d*d*a*a)-(c*c*b*b)-(c*c*d*d*r*r));
  }
}

function ConicSections()
{
  this.sectionProbabilities = [0,1,1,4,4];
}

ConicSections.prototype.SetSectionProbabilities = function(l,p,c,e,h)
{
  this.sectionProbabilities = [l,p,c,e,h];
}

ConicSections.prototype.SelectProblem = function()
{
  var total = 0;

  for(let i=0;i<=4;i++)
  {
    total+=this.sectionProbabilities[i];
  }

  var x = Random()*total;
  var current = this.sectionProbabilities[0];

  var instructions = "<i>Graph both relationships and find the point(s) of intersection.</i><br>";
  if(x<current)
  {
    if(Random()<.5)
    {
      instructions = "<i>Solve with matrices</i><br>";
    }
    return instructions+line()+"<br>"+line();
  }

  current += this.sectionProbabilities[1];

  if(x<current)
  {
    return instructions+line()+"<br>"+parabola();
  }

  current += this.sectionProbabilities[2];

  if(x<current)
  {
    return instructions+line()+"<br>"+circle();
  }

  current += this.sectionProbabilities[3];

  if(x<current)
  {
    return instructions+line()+"<br>"+ellipse();
 }

  current += this.sectionProbabilities[4];

  if(x<current)
  {
    return instructions+line()+"<br>"+hyperbola();
  }
}
