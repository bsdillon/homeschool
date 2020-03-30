if(typeof MathDefined === "undefined")
{
  alert("trig.js requires math.js");
}

function Trig()
{
}

Trig.prototype.TriangleHeader = function()
{
  return "<img src='./Math/SimpleTriangle.png'><br>Solve for all parts of the triangle.<br>";
}

Trig.prototype.RandomTrigFunction = function()
{
  switch(Math.floor(Random()*6))
  {
    case 0:
      return "Sin";
      break;
    case 1:
      return "Cos";
      break;
    case 2:
      return "Tan";
      break;
    case 3:
      return "Csc";
      break;
    case 4:
      return "Sec";
      break;
    case 5:
      return "Cot";
      break;
  }
}

Trig.prototype.TriangleProblem = function()
{
  var t = new Triangle();
  
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      return t.LawSines();
      break;
    case 1:
      return t.LawCosines();
      break;
    case 2:
      return t.SSS();
      break;
  }  
}

Trig.prototype.BasicProblem = function()
{
  var r = Math.floor(Random()*7);
  switch(r)
  {
    case 0:
      return this.GraphFunction()
      break;
    case 1:
      return this.CalcTrig();
      break;
    case 2:
      return this.UnitCircle();
      break;
    case 3:
      return this.LabelTriangle();
      break;
    case 4:
      return this.AngleSum()
      break;
    case 5:
      return this.DoubleAngle()
      break;
    case 6:
      return this.HalfAngle()
      break;
  }
}

Trig.prototype.GraphFunction = function()
{
  var A=Math.floor(Random()*10-5);
  var phi=Math.floor(Random()*8-4);
  var omega=Math.floor(Random()*5+1);
  
  var s="<br><nobr>"+A+" "+this.RandomTrigFunction()+"( ";
  
  if(phi!=0)
  {
    s+="["+phi+"&pi;/8] + ";
  }

  if(Random()>.5)
  {
    s+=omega+"&theta;)";
  }
  else
  {
    s+="&theta;/"+omega+")";
  }

  return "Graph one period of "+s+"</nobr>";
}

Trig.prototype.CalcTrig = function()
{
  var AB=Math.floor(100*(Random()*10+5))/100;
  var BC=Math.floor(100*(Random()*10+10))/100;
  var AC=Math.floor(Math.sqrt((AB*AB)+(BC*BC))*100)/100;
  
  var s="<img src='./math/SimpleRight.png'><br>";
  switch(Math.floor(Random()*3))
  {
    case 0:
      s+="BC="+BC+" ";
      s+="AC="+AC+" ";
      break;
    case 1:
      s+="AB="+AB+" ";
      s+="AC="+AC+" ";
      break;
    case 2:
      s+="AB="+AB+" ";
      s+="BC="+BC+" ";
      break;
  }

  s+="Calculate "+this.RandomTrigFunction()+"(";

  if(Random()>.5)
  {
    s+="A)";
  }
  else
  {
    s+="C)";
  }

  return s;
}

Trig.prototype.UnitCircle = function()
{
  var angle = Math.floor(Random()*360);
  return "Draw the right triangle formed at "+angle+"&deg; on the unit circle";
}

Trig.prototype.LabelTriangle = function()
{
  var angle = Math.floor(Random()*360);
  var s = "<img src='./math/rotated-triangle.png' style='transform:rotate("+angle+"deg);'><br class='clear'><br class='clear'>"
  s += "Label the angles and sides of the triangle. Write the relationships<br>"
  s += "for sin, cos, and tangent of each angle. Write the pythagorean theorem.<br>"

  return s;
}

Trig.prototype.AngleSum = function()
{
  var alpha = Math.floor(Random()*20+20);
  var beta = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);
  var sine_b = Math.sin(beta*Math.PI/180).toFixed(3);
  var cosine_b = Math.cos(beta*Math.PI/180).toFixed(3);

  var s = this.RandomTrigFunction()+"(&alpha;";

  if(Random()<.5)
  {
    s+="+&beta;)<br>";
  }
  else
  {
    s+="-&beta;)<br>";
  }

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "&beta;="+beta+"&deg;  Cos(&beta;)="+cosine_b+" Sin(&beta;)="+sine_b+"<br>";
  t += "Find "+s;
  return t;
}

Trig.prototype.DoubleAngle = function()
{
  var alpha = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);

  var s = this.RandomTrigFunction()+"(2&alpha;)<br>";

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "Find "+s;
  return t;
}

Trig.prototype.HalfAngle = function()
{
  var alpha = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);

  var s = this.RandomTrigFunction()+"(&alpha;/2)<br>";

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "Find "+s;
  return t;
}

function Triangle()
{
  var AB=Math.floor(100*(Random()*10+5))/100;
  var AC=Math.floor(100*(Random()*10+10))/100;
  var BC=Math.floor(100*(Random()*20+15))/100;

  while(!(AC+AB>BC&&AC+BC>AB&&AB+BC>AC))
  {
    //failed test for triangle feasibility
    AB=Math.floor(100*(Random()*10+5))/100;
    AC=Math.floor(100*(Random()*10+10))/100;
    BC=Math.floor(100*(Random()*20+15))/100;
  }

  this.AB=AB;
  this.AC=AC;
  this.BC=BC;

  var AB2=AB*AB;
  var AC2=AC*AC;
  var BC2=BC*BC;
  var AB_AC=2*AB*AC;
  var AB_BC=2*AB*BC;
  var BC_AC=2*BC*AC;
 
  this.C=(Math.acos((BC2+AC2-AB2)/BC_AC)*180/Math.PI).toFixed(2);
  this.A=(Math.acos((AB2+AC2-BC2)/AB_AC)*180/Math.PI).toFixed(2);
  this.B=(Math.acos((BC2+AB2-AC2)/AB_BC)*180/Math.PI).toFixed(2);
}

Triangle.prototype.LawSines = function()
{
  var s = "";
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      s += "&angle;A="+this.A;
      s += " BC="+this.BC;
      s += Random() ? " AB="+this.AB : " AC="+this.AC;
      break;
    case 1:
      s += "&angle;B="+this.B;
      s += " AC="+this.AC;
      s += Random() ? " AB="+this.AB : " BC="+this.BC;
      break;
    case 2:
      s += "&angle;C="+this.C;
      s += " AB="+this.AB;
      s += Random() ? " BC="+this.BC : " AC="+this.AC;
      break;
  }

  return s;    
}

Triangle.prototype.LawCosines = function()
{
  var s="";
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      s += "&angle;A="+this.A;
      s += " AB="+this.AB+" AC="+this.AC;
      break;
    case 1:
      s += "&angle;B="+this.B;
      s += " AB="+this.AB+" BC="+this.BC;
      break;
    case 2:
      s += "&angle;C="+this.C;
      s += " AC="+this.AC+" BC="+this.BC;
      break;
  }
  return s;
}

Triangle.prototype.SSS = function()
{
  s = " AB="+this.AB+" AC="+this.AC+" BC="+this.BC;
  return s;
}

