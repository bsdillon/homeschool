if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

var relations = ["=","&lt;","&gt;","&ge;","&le;"];

function getRelationshipNumber()
{
  return Math.floor(Random()*5);
}

function line()
{
  a = flip(Math.floor(Random()*9+1));
  b = flip(Math.floor(Random()*9+1));
  c = flip(Math.floor(Random()*5+1))*b;

  var temp = a+"x + "+b+"y "+ relation()+" "+c;

  var answer = temp+"<br><div class='answer' name='answer'>";
  answer +=a+"x + "+b+"(0)="+c+"&nbsp;&nbsp;Test for y=0<br>";
  answer +="x="+c+"/"+a+"<br><br>";
  answer +=a+"{0} + "+b+"x="+c+"&nbsp;&nbsp;Test for x=0<br>";
  answer +="y="+c+"/"+b+"</div>";

  return answer;
}

function parabola()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  c = flip(Math.floor(Random()*5+1));
  d = flip(Math.floor(Random()*5+1));

  var rel = getRelationshipNumber();

  var form1 = "y "+ relations[rel] + (a*c)+"x<sup>2</sup> + "+((c*b)+(a*d))+"x + "+(b*d);

  var tmp = "y "+ relations[rel] + "("+a+"x ";
  if(b>0)
  {
    tmp += "+" + Math.abs(b) + ")("+c+"x ";
  }
  else
  {
    tmp += "&minus;" + Math.abs(b) + ")("+c+"x ";
  }

  if(d>0)
  {
    tmp += "+" + Math.abs(d) + ")";
  }
  else
  {
    tmp += "&minus;" + Math.abs(d) + ")";
  }

  var form2 = tmp;

  var answer = form1;
  var other = form2;
  if(Random())
  {
    answer = form2;
    other = form1;
  }

  answer +="<br><div class='answer' name='answer'>"+other+"<br>";
  answer +=a+"x"+(b>0?"+":"&minus;")+Math.abs(b)+"=0 "+c+"x"+(d>0?"+":"&minus;")+Math.abs(d)+"=0&nbsp;&nbsp;Test for y=0<br>";
  answer +=a+"x="+(-b)+" "+c+"x="+(-d)+"<br>";
  answer +="x="+(-b)+"/"+a+" x="+(-d)+"/"+c+"<br><br>";
  answer +="y="+(a*c)+"(0)<sup>2</sup> + "+((c*b)+(a*d))+"(0) + "+(b*d)+"&nbsp;&nbsp;Test for x=0<br>";
  answer +="y="+(b*d)+"<br><br>";
  var xm = (-((c*b)+(a*d)))+"/"+(2*a*c)+")";
  var xmval = (-((c*b)+(a*d)))/(2*a*c);
  answer +="x<sub>m</sub>="+xm+"&nbsp;&nbsp;Find mid-point @ -b/2a<br>";
  answer +="y<sub>m</sub>="+(a*c)+"("+xm+")<sup>2</sup> + "+((c*b)+(a*d))+"("+xm+") + "+(b*d)+"&nbsp;&nbsp;Find y<sub>m</sub><br>";
  tmp = (a*c*xmval*xmval)+(((c*b)+(a*d))*xmval)+(b*d);
  answer +="y<sub>m</sub>="+tmp;
  answer += "</div>";

  return answer;
}

function circle()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  r = Math.floor(Random()*5+1);

  var rel = relation();
  var tmp= "0 "+ rel + " x<sup>2</sup> + y<sup>2</sup> + "+ (2*a) +"x + "+ (2*b) +"y + "+((a*a)+(b*b)-(r*r));

  var answer = tmp+"<br><div class='answer' name='answer'>";
  answer += (-((a*a)+(b*b)-(r*r)))+ rel + " x<sup>2</sup> + "+ (2*a) +"x&nbsp;&nbsp;&nbsp;&nbsp;+ y<sup>2</sup> + "+ (2*b) +"y&nbsp;&nbsp;Reorder and leave a space</br>";
  answer += (-((a*a)+(b*b)-(r*r)))+ rel + " (x + "+ a +")<sup>2</sup> + (y + "+ b +")<sup>2</sup>&nbsp;&nbsp;Complete square<br>";
  answer += "<span>"+(a*a)+" + "+(b*b)+"</span>+"+(-((a*a)+(b*b)-(r*r)))+ rel + " x<sup>2</sup> + "+ (2*a) +"x + "+(a*a)+"+ y<sup>2</sup> + "+ (2*b) +"y + "+(b*b)+"&nbsp;&nbsp;Add third term to both sides<br>";
  answer += r+"<sup>2</sup>"+ rel + " (x + "+ a +")<sup>2</sup> + (y + "+ b +")<sup>2</sup>&nbsp;&nbsp;Square root radius<br>";
  answer += "</div>";

  return answer;
}

function ellipse()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  c = flip(Math.floor(Random()*5+1));
  d = flip(Math.floor(Random()*5+1));
  r = Math.floor(Random()*5+1);

  var rel = relation();
  var tmp = "0 "+ rel + " " + (d*d) +"x<sup>2</sup> + "+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (2*b*c*c) +"y + "+((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));

  var answer = tmp+"<br><div class='answer' name='answer'>";
  answer += (-((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r)))+ rel + " " + (d*d) +"x<sup>2</sup> + "+ (2*a*d*d) +"x + &nbsp;&nbsp;&nbsp;&nbsp;+ "+ (c*c)+"y<sup>2</sup> + "+(2*b*c*c) +"y&nbsp;&nbsp;Reorder and leave a space</br>";
  answer += (-((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r)))+ rel + " " + (d*d) +"(x<sup>2</sup> + "+ (2*a) +"x + &nbsp;&nbsp;&nbsp;&nbsp;)+ "+ (c*c)+"(y<sup>2</sup> + "+(2*b) +"y&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;Factor the leading coefficient</br>";
  answer += (-((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r)))+ rel + " " + (d*d) +"(x + "+ a +")<sup>2</sup>+ "+ (c*c)+"(y + "+b+")<sup>2</sup>&nbsp;&nbsp;Complete squares</br>";
  answer += (-((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r)))+ rel + " " + (d*d) +"(x<sup>2</sup> + "+ (2*a) +"x + "+(a*a)+")+ "+ (c*c)+"(y<sup>2</sup> + "+(2*b) +"y + "+(b*b)+")&nbsp;&nbsp;Fill in third term</br>";
  answer += (a*a*d*d)+" + " +(b*b*c*c)+" + "+(-((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r)))+ rel + " " + (d*d) +"x<sup>2</sup> + "+ (2*a*d*d) +"x + "+(a*a*d*d)+"+"+ (c*c)+"y<sup>2</sup> + "+(2*b*c*c) +"y + "+(b*b*c*c)+"&nbsp;&nbsp;Distribute and add on both sides</br>";
  answer += (c*c*d*d*r*r)+"/["+(c*c)+"*"+(d*d)+"] "+ rel + " " + (d*d) +"(x + "+ a +")<sup>2</sup>/["+(c*c)+"*"+(d*d)+ "] + "+(c*c)+"(y + "+b+")<sup>2</sup>/["+(c*c)+"*"+(d*d)+"]&nbsp;&nbsp;Divide by both factors</br>";
  answer += r+"<sup>2</sup>"+ rel + " (x + "+ a +")<sup>2</sup>/"+Math.abs(c)+"<sup>2</sup> + (y + "+b+")<sup>2</sup>/"+Math.abs(d)+"<sup>2</sup>&nbsp;&nbsp;Square root radius</br>";
  answer += "</div>";

  return answer;
}

function hyperbola()
{
  a = flip(Math.floor(Random()*5+1));
  b = flip(Math.floor(Random()*5+1));
  c = flip(Math.floor(Random()*5+1));
  d = flip(Math.floor(Random()*5+1));
  r = 1;

  var xCoeff = 1;
  if(Random()>.5)
  {
    xCoeff = -1;
  }
  var rel = relation();
  var end = xCoeff>0?((d*d*a*a)-(c*c*b*b)-(c*c*d*d*r*r)):(-(d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
  temp = "0 "+ rel + (xCoeff>0?" +":" -") + (d*d) +"x<sup>2</sup>"+(xCoeff>0?" -":" +")+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (-2*b*c*c) +"y + "+end;

  var answer = temp+"<br><div class='answer' name='answer'>";
  answer += (-end)+ rel + (xCoeff>0?" +":" -") + (d*d) +"x<sup>2</sup> "+(2*a*d*d) +"x"+"&nbsp;&nbsp;&nbsp;&nbsp;"+(xCoeff>0?" - ":" + ")+(c*c)+"y<sup>2</sup> + "+(-2*b*c*c) +"y&nbsp;&nbsp;Reorder and leave a space<br>";
  var x2 = xCoeff>0?(2*a):(-2*a);
  var y2 = xCoeff>0?(2*b):(-2*b);
  answer += (-end)+ rel + (xCoeff>0?" +":" -") + (d*d) +"(x<sup>2</sup> +"+x2+"x&nbsp;&nbsp;&nbsp;&nbsp;)"+(xCoeff>0?" - ":" + ")+ (c*c)+"(y<sup>2</sup> + "+ y2 +"y&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;Factor leading coefficients<br>";
  answer += (-end)+ rel + (xCoeff>0?" +":" -") + (d*d) +"(x +"+(x2/2)+")<sup>2</sup>"+(xCoeff>0?" - ":" + ")+ (c*c)+"(y + "+ (y2/2) +")<sup>2</sup>&nbsp;&nbsp;Complete the squares<br>";
  answer += (-end)+ rel + (xCoeff>0?" +":" -") + (d*d) +"(x<sup>2</sup> +"+x2+"x + "+((x2/2)*(x2/2))+")"+(xCoeff>0?" - ":" + ")+ (c*c)+"(y<sup>2</sup> + "+ y2 +"y + "+((y2/2)*(y2/2))+")&nbsp;&nbsp;Replace missing third term<br>";
  var x3 = xCoeff>0?(d*(x2/2)*(x2/2)*d):-(d*(x2/2)*(x2/2)*d);
  var y3 = xCoeff>0?-(c*(y2/2)*(y2/2)*c):(c*(y2/2)*(y2/2)*c);
  answer += x3+" + " +y3+" + " +(-end)+ rel + (xCoeff>0?" +":" -") + (d*d) +"x<sup>2</sup> "+(2*a*d*d) +"x + "+x3+(xCoeff>0?" - ":" + ")+(c*c)+"y<sup>2</sup> + "+(-2*b*c*c) +"y + "+y3+"&nbsp;&nbsp;Distribute and add on both sides<br>";
  var rwf = x3+y3-end;
  answer += rwf+"/["+(c*c)+"*"+(d*d)+"]" + rel + (xCoeff>0?" +":" -") + (d*d) +"(x +"+(x2/2)+")<sup>2</sup>/["+(d*d)+"*"+(c*c)+"]"+(xCoeff>0?" - ":" + ")+ (c*c)+"(y + "+ (y2/2) +")<sup>2</sup>/["+(c*c)+"*"+(d*d)+"]&nbsp;&nbsp;Complete the squares<br>";
  answer += "1 " + rel + (xCoeff>0?" +":" -") +"(x +"+(x2/2)+")<sup>2</sup>/"+Math.abs(c)+"<sup>2</sup>"+(xCoeff>0?" - ":" + ")+ "(y + "+ (y2/2) +")<sup>2</sup>/"+Math.abs(d)+"<sup>2</sup>"+"&nbsp;&nbsp;Complete the squares<br>";


  answer += "</div>";

  return answer;
}

function ConicSections()
{
  this.sectionProbabilities = [1,2,3,3,3];
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

function intersection()
{
  var xCoeff = [0,0,0];
  var yCoeff = [0,0,0];
  var integer = 0;

  var s = "Find the intersection of the two equations<br>";
  var answer = "<br><div class='answer' name='answer'>";
  var first = 1;
  for(let i=0;i<2;i++)
  {
    var r = Math.floor(Random()*5);
    if(r==0)
    {
      //line
      a = flip(Math.floor(Random()*9+1));
      b = flip(Math.floor(Random()*9+1));
      c = flip(Math.floor(Random()*5+1))*b;

      xCoeff[1]+=a;
      yCoeff[1]+=b;
      integer-=c;
      s+= a+"x + "+b+"y = "+c;
      answer += a+"x + "+b+"y -"+c;
    }
    else if(r==1)
    {
      //parabola
      a = flip(Math.floor(Random()*5+1));
      b = flip(Math.floor(Random()*5+1));
      c = flip(Math.floor(Random()*5+1));
      d = flip(Math.floor(Random()*5+1));

      xCoeff[2]+=a*c;
      xCoeff[1]+=((c*b)+(a*d));
      yCoeff[1]-=1;
      integer+=(b*d);
      if(Random()>.5)
      {
        s+= "y ="+ (a*c)+"x<sup>2</sup> + "+((c*b)+(a*d))+"x + "+(b*d);
        answer+= "-y + "+ (a*c)+"x<sup>2</sup> + "+((c*b)+(a*d))+"x + "+(b*d);
      }
      else
      {
        var tmp = "("+a+"x ";
        if(b>0)
        {
          tmp += "+" + Math.abs(b) + ")("+c+"x ";
        }
        else
        {
          tmp += "&minus;" + Math.abs(b) + ")("+c+"x ";
        }

        if(d>0)
        {
          tmp += "+" + Math.abs(d) + ")";
        }
        else
        {
          tmp += "&minus;" + Math.abs(d) + ")";
        }

        s+= "y = "+tmp;
        answer += "-y + "+tmp;
      }
    }
    else if(r==2)
    {
      //circle
      a = flip(Math.floor(Random()*5+1));
      b = flip(Math.floor(Random()*5+1));
      r = Math.floor(Random()*5+1);

      xCoeff[1]+=2*a;
      xCoeff[2]+=1;
      yCoeff[1]+=2*b;
      yCoeff[2]+=1;
      integer+=((a*a)+(b*b)-(r*r));
      s+= "0 = x<sup>2</sup> + y<sup>2</sup> + "+ (2*a) +"x + "+ (2*b) +"y + "+((a*a)+(b*b)-(r*r));
      answer += "x<sup>2</sup> + y<sup>2</sup> + "+ (2*a) +"x + "+ (2*b) +"y + "+((a*a)+(b*b)-(r*r));
    }
    else if(r==3)
    {
      //ellipse
      a = flip(Math.floor(Random()*5+1));
      b = flip(Math.floor(Random()*5+1));
      c = flip(Math.floor(Random()*5+1));
      d = flip(Math.floor(Random()*5+1));
      r = Math.floor(Random()*5+1);

      xCoeff[1]+=(2*a*d*d);
      xCoeff[2]+=d*d;
      yCoeff[1]+=(2*b*c*c);
      yCoeff[2]+=c*c;
      integer+=((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
      s+= "0 = " + (d*d) +"x<sup>2</sup> + "+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (2*b*c*c) +"y + "+((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
      answer += (d*d) +"x<sup>2</sup> + "+ (c*c)+"y<sup>2</sup> + "+ (2*a*d*d) +"x + "+ (2*b*c*c) +"y + "+((d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
    }
    else if(r==4)
    {
      //hyperbola
      a = flip(Math.floor(Random()*5+1));
      b = flip(Math.floor(Random()*5+1));
      c = flip(Math.floor(Random()*5+1));
      d = flip(Math.floor(Random()*5+1));
      r = 1;

      var coeffSign = 1;
      if(Random()>.5)
      {
        coeffSign = -1;
      }
      var end = coeffSign>0?((d*d*a*a)-(c*c*b*b)-(c*c*d*d*r*r)):(-(d*d*a*a)+(c*c*b*b)-(c*c*d*d*r*r));
      xCoeff[1]+=(coeffSign>0?2*a*d*d:-2*a*d*d);
      xCoeff[2]+=(coeffSign>0?d*d:-d*d);
      yCoeff[1]+=(coeffSign>0?2*b*c*c:-2*b*c*c);
      yCoeff[2]+=(coeffSign>0?-c*c:c*c);
      integer+=end;
      s+= "0 =" +  (coeffSign>0?" +":" -") + (d*d) +"x<sup>2</sup>"+(coeffSign>0?" -":" +")+ (c*c)+"y<sup>2</sup>"+(coeffSign>0?" +":" -")+ (2*a*d*d) +"x" + (coeffSign>0?" -":" +") + (-2*b*c*c) +"y + "+end;
      answer += (coeffSign>0?" +":" -") + (d*d) +"x<sup>2</sup>"+(coeffSign>0?" -":" +")+ (c*c)+"y<sup>2</sup>"+(coeffSign>0?" +":" -")+ (2*a*d*d) +"x" + (coeffSign>0?" -":" +") + (-2*b*c*c) +"y + "+end;
    }
    s+="<br>";

    if(first>0)
    { //for the addition step of the answer we will need the first coefficients to be negative.
      xCoeff[1]*=-1;
      xCoeff[2]*=-1;
      yCoeff[1]*=-1;
      yCoeff[2]*=-1;
      integer*=-1;
      first--;
      answer += " = 0 = ";
    }
  }
  
  answer += "&nbsp;&nbsp;&nbsp;&nbsp;Write the two equations equal to zero and to each other<br>";
  answer += "0 = ";
  if(Math.abs(xCoeff[2])>0)
  {
    answer += xCoeff[2]+"x<sup>2</sup>";
  }

  if(xCoeff[1]>0)
  {
    answer += " + "+xCoeff[1]+"x";
  }
  else if(xCoeff[1]<0)
  {
    answer += " "+xCoeff[1]+"x";
  }

  if(yCoeff[2]>0)
  {
    answer += " + "+yCoeff[2]+"y<sup>2</sup>";
  }
  else if(yCoeff[2]<0)
  {
    answer += " "+yCoeff[2]+"y<sup>2</sup>";
  }

  if(yCoeff[1]>0)
  {
    answer += " + "+yCoeff[1]+"y";
  }
  else if(yCoeff[1]<0)
  {
    answer += " "+yCoeff[1]+"y";
  }

  if(integer>0)
  {
    answer += " + " + integer;
  }
  else if(integer>0)
  {
    answer += " " + integer;
  }
  answer += "&nbsp;&nbsp;&nbsp;&nbsp;Collect all the like terms on one side.<br>";
  answer += "Solve the remaining equation as you would regular conic section.<br>";
  answer += "Any intersections occur where the final equation is y=0.<br>";
  answer +="</div>";

  return s + answer;
}
