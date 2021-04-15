if(typeof MathDefined === "undefined")
{
  alert("equations.js requires math.js");
}

function PolynomialDerivative()
{
  var answer = "<img src='derivativerules.png'><p>Use these rules to find the first and second derivitive of this function.</p>";
  var tmp = Math.floor(Random()*9+1);
  var i=0;
  
  while(i<6)
  {
    if(Random()<.5)
    {
      tmp = " + "+tmp;
    }
    else
    {
      tmp = " &minus; "+tmp;
    }

    i+= Math.floor(Random()*2+1);
    
    if(i=1)
    {
      tmp += Math.floor(Random()*9+1)+"x";
    }
    else
    {
      tmp += Math.floor(Random()*9+1)+"x<sup>"+i+"</sup>";
    }
  }
  answer += tmp;
  answer += "<img src='inflections.png'><p>Solve the first derivatives for zeroes (or estimate the values on a graphing calculator). Identify the intervals of upward and downward velocities</p>";  
  answer += "<img src='concavity.png'><p>Solve the second derivative for zeroes (or estimate the values on a graphing calculator). Identify the intervals of upward or downward concavity.</p>";

  return answer;
}

function RiemannSum()
{
   var type = "left";
   var r = Random()
   if(r<.25)
   {
     type = "right";
   }
   else if(r<.5)
   {
     type = "middle";
   }
   else if(r<.75)
   {
     type = "trapizoid";
   }

   var r1 = flip(Math.floor(Random()*5));
   var r2 = flip(Math.floor(Random()*5));
   var r3 = flip(Math.floor(Random()*5));

   var polynomial = "f(x)=x<sup>3</sup>"
   var temp = -(r1+r2+r3);
   if(temp<0)
   {
     polynomial += " &minus; "+(-temp)+"x<sup>2</sup>";
   }
   else if(temp>0)
   {
     polynomial += " + "+temp+"x<sup>2</sup>";
   }

   var temp = -((r1*r2)+(r1*r3)+(r3*r2));
   if(temp<0)
   {
     polynomial += " &minus; "+(-temp)+"x";
   }
   else if(temp>0)
   {
     polynomial += " + "+temp+"x";
   }

   var temp = -(r1*r2*r3);
   if(temp<0)
   {
     polynomial += " &minus; "+(-temp);
   }
   else if(temp>0)
   {
     polynomial += " + "+temp;
   }

   if(r1>r2)
   {
     temp = r1;
     r1=r2;
     r2=temp;
   }
 
   if(r1>r3)
   {
     temp = r1;
     r1=r3;
     r3=temp;
   }
  
   if(r2>r3)
   {
     temp = r2;
     r2=r3;
     r3=temp;
   }

   var a = r1-Math.floor(Random()*5);
   if(Random()>.5)
   {
     a = r1+Math.floor(Random()*(r2-r1));
   }

   var b = r3+Math.floor(Random()*5);
   if(Random()>.5)
   {
     b = r2+Math.floor(Random()*(r3-r2));
   }

   var n = Math.floor(Random()*5+10);

   var s = "Find the "+type+" sum of the function below on the interval ["+a+","+b+"] using "+n+" intervals.<br>"+polynomial+"<br>";

  return s;
}

function RandomCalcFunction()
{
  var r1 = flip(Math.floor(Random()*5));
  var r2 = flip(Math.floor(Random()*5));
  var r3 = flip(Math.floor(Random()*5));

  var _s = "f(x)=x<sup>3</sup> ";

  var c1 = (r1+r2+r3);
  var c2 = (r1*r2)+(r1*r3)+(r2*r3);
  var c3 = r1*r2*r3;

  if(c1>0)
  {
    _s+="+ "+c1+"x<sup>2</sup> ";
  }
  else if(c1<0)
  {
    _s+="&minus; "+(-c1)+"x<sup>2</sup> ";
  }

  if(c2>0)
  {
    _s+="+ "+c2+"x";
  }
  else if(c2<0)
  {
    _s+="&minus; "+(-c2)+"x";
  }

  if(c3>0)
  {
    _s+="+ "+c3;
  }
  else if(c3<0)
  {
    _s+="&minus; "+(-c3);
  }

  return "<i>Use first and second derivatives to find the inflection points and predict the graph of the equation</i><br>"+_s;
}

function XTerm()
{
  var exponent = Math.floor(Math.random()*5+1);
  var val = flip(Math.floor(Math.random()*5+1));

  t = ""+val;

  if(exponent>1 || exponent<0)
  {
    if(Math.random()>.5)
    {
      t+= "x<sup>1/"+exponent+"</sup>";
    }
    else
    {
      t+= "x<sup>"+exponent+"</sup>";
    }
  }
  else if(exponent == 1)
  {
    t+= "x";
  }
      
  return t;
}

var trigBase;

function LogTerm()
{
  if(Math.random() > .5)
  {
    var val = "e<sup>"+trigBase+"</sup>";
  }
  else
  {
    var val = "log ("+trigBase+")";
  }
  return val;
}

function TrigTerm()
{
  var val = flip(Math.floor(Math.random()*5+1));
  if(Math.random()>.5)
  {
    val += "sin";
  }
  else
  {
    val += "cos";
  }

  var exp = Math.floor(Math.random()*4+1);

  if(exp==1)
  {
    val += "(";
  }
  else
  {
    val += "<sup>"+exp+"</sup>(";
  }

  val += trigBase;

  return val + ")";
}

function randomTrig()
{
  var A = flip(Math.floor(Math.random()*5+1));
  var w = flip(Math.floor(Math.random()*3+1));
  var f = flip(Math.floor(Math.random()*3-1));
  var s = "f(x)="+A;

  if(Math.random()>.5)
  {
    s+= "sin";
  }
  else
  {
    s+= "cos";
  }

  s+="("+w+"&theta;";

  if(f==0)
  {
    s+=")";
  }
  else if(f==1)
  {
    s+=" + &pi;/2 )";
  }
  else if(f==-1)
  {
    s+=" - &pi;/2 )";
  }

  return s;
}

function RandomThetas()
{
  var s = "";

  for(var i=0;i<5;i++)
  {
    var d = Math.floor(Math.random()*15+2);
    var n = flip(Math.floor(Math.random()*2+1))*Math.floor(Math.random()*(d-1)+1);
        
    s += "&theta; = "+n+"&pi;/"+d+"<br>";
  }

  return s;
}

function term()
{
  if(Math.random()<.5)
  {
    return TrigTerm();
  }
  else if(Math.random() <.5)
  {
    return XTerm();
  }
  else 
  {
    return LogTerm();
  }
}

function randomize()
{
  for(var i=1;i<=3;i++)
  {
    trigBase = XTerm();
    var s = "f(x) = ";
    var radix = Math.random();

    if(radix>.5)
    {
      s+= "["+term()+"] / ["+term()+"]";
    }
    else
    {
      s+= "["+term()+"]*["+term()+"]";
    }

    document.getElementById("equation"+i).innerHTML=s;
  }

  trigBase = XTerm();
  s = "f(x) = ";
  var radix = Math.random();
  if(radix>.25)
  {
    s+= "["+LogTerm()+"] / ["+term()+"]";
  }
  else if(radix>.5)
  {
    s+= "["+LogTerm()+"]*["+term()+"]";
  }
  else if(radix>.75)
  {
    s+= "["+term()+"] / ["+LogTerm()+"]";
  }
  else
  {
    s+= "["+term()+"]*["+LogTerm()+"]";
  }

  document.getElementById("equation4").innerHTML=s;
  document.getElementById("trigFunction").innerHTML=RandomThetas();
}
