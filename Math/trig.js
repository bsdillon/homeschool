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

Trig.prototype.EasyGraphFunction = function()
{
  var A=Math.floor(Random()*3+1);
  var phi=Math.floor(Random()*3-1);
  var omega=Math.floor(Random()*3+1);
  
  var tmp="<br><nobr>"+A+" ";
  var func = ['Sin', 'Cos', 'Tan'];
  tmp += func[Math.floor(Random()*func.length)]+"( "

  if(omega==1)
  {
    tmp+="&theta;";
  }
  else if(Random()>.5)
  {
    tmp+="-"+omega+"&theta;";
  }
  else
  {
    tmp+=omega+"&theta;";
  }

  if(phi<0)
  {
    tmp+=" &minus; &pi;/2)";
  }
  else if(phi>0)
  {
    tmp+=" + &pi;/2)";
  }
  else
  {
    tmp+=")";
  }

  return "Graph one period of "+tmp+"</nobr>";
}

Trig.prototype.GraphFunction = function()
{
  var A=Math.floor(Random()*5+1);
  var phi=Math.floor(Random()*8-4);
  var omega=Math.floor(Random()*5+1);
  
  var tmp="<br><nobr>"+A+" "+this.RandomTrigFunction()+"( ";
  
  if(phi!=0)
  {
    var d = 8;
    while(phi%2==0)
    {
      phi = phi/2;
      d = d/2;
    }

    if(d!=1)
    {
      tmp+="["+phi+"&pi;/"+d+"] + ";
    }
    else
    {
      tmp+="["+phi+"&pi;] + ";
    }
  }

  if(omega==1)
  {
    tmp+="&theta;)";
  }
  else if(Random()>.5)
  {
    tmp+=omega+"&theta;)";
  }
  else
  {
    tmp+="&theta;/"+omega+")";
  }
  alert(tmp);
  return "Graph one period of "+tmp+"</nobr>";
}

Trig.prototype.CalcTrig = function()
{
  var AB=Math.floor(100*(Random()*10+5))/100;
  var BC=Math.floor(100*(Random()*10+10))/100;
  var AC=Math.floor(Math.sqrt((AB*AB)+(BC*BC))*100)/100;
  
  var s="<img src='./Math/SimpleRight.png'><br>";
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

  s+=" - show all your work"

  return s;
}

Trig.prototype.UnitCircle = function()
{
  var angle = Math.floor(Random()*360);
  return "Draw the right triangle formed at "+angle+"&deg; on the unit circle. Label each corner and give the length of all sides.";
}

Trig.prototype.LabelTriangle = function()
{
  var angle = Math.floor(Random()*360);
  var tmp = "<img src='./Math/rotated-triangle.png' style='transform:rotate("+angle+"deg);'><br class='clear'><br class='clear'>"
  tmp += "Label the angles and sides of the triangle. Write the relationships<br>"
  tmp += "for sin, cos, and tangent of each angle. Write the pythagorean theorem.<br>"

  return tmp;
}

Trig.prototype.AngleSum = function()
{
  var alpha = Math.floor(Random()*20+20);
  var beta = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);
  var sine_b = Math.sin(beta*Math.PI/180).toFixed(3);
  var cosine_b = Math.cos(beta*Math.PI/180).toFixed(3);

  var tmp = this.RandomTrigFunction()+"(&alpha;";

  if(Random()<.5)
  {
    tmp+="+&beta;)<br>";
  }
  else
  {
    tmp+="-&beta;)<br>";
  }

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "&beta;="+beta+"&deg;  Cos(&beta;)="+cosine_b+" Sin(&beta;)="+sine_b+"<br>";
  t += "Find "+tmp;
  return t;
}

Trig.prototype.DoubleAngle = function()
{
  var alpha = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);

  var tmp = this.RandomTrigFunction()+"(2&alpha;)<br>";

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "Find "+tmp;
  return t;
}

Trig.prototype.HalfAngle = function()
{
  var alpha = Math.floor(Random()*20+20);
  var sine_a = Math.sin(alpha*Math.PI/180).toFixed(3);
  var cosine_a = Math.cos(alpha*Math.PI/180).toFixed(3);

  var tmp = this.RandomTrigFunction()+"(&alpha;/2)<br>";

  var t = "&alpha;="+alpha+"&deg;  Cos(&alpha;)="+cosine_a+" Sin(&alpha;)="+sine_a+"<br>";
  t += "Find "+tmp;
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
  var tmp = "";
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      tmp += "&angle;A="+this.A;
      tmp += " BC="+this.BC;
      tmp += Random() ? " AB="+this.AB : " AC="+this.AC;
      break;
    case 1:
      tmp += "&angle;B="+this.B;
      tmp += " AC="+this.AC;
      tmp += Random() ? " AB="+this.AB : " BC="+this.BC;
      break;
    case 2:
      tmp += "&angle;C="+this.C;
      tmp += " AB="+this.AB;
      tmp += Random() ? " BC="+this.BC : " AC="+this.AC;
      break;
  }

  return tmp;
}

Triangle.prototype.LawCosines = function()
{
  var tmp="";
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      tmp += "&angle;A="+this.A;
      tmp += " AB="+this.AB+" AC="+this.AC;
      break;
    case 1:
      tmp += "&angle;B="+this.B;
      tmp += " AB="+this.AB+" BC="+this.BC;
      break;
    case 2:
      tmp += "&angle;C="+this.C;
      tmp += " AC="+this.AC+" BC="+this.BC;
      break;
  }
  return tmp;
}

Triangle.prototype.SSS = function()
{
  tmp = " AB="+this.AB+" AC="+this.AC+" BC="+this.BC;
  return tmp;
}

