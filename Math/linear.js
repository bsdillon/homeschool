if(typeof MathDefined === "undefined")
{
  alert("linear.js requires math.js");
}

function LinearEquations()
{
}

LinearEquations.prototype.Line = function()
{
  a = flip(Math.floor(Random()*9+1));
  b = flip(Math.floor(Random()*9+1));
  c = flip(Math.floor(Random()*5+1))*b;

  return a+"x + "+b+"y = "+c;
}

LinearEquations.prototype.System = function()
{
  a = flip(Math.floor(Random()*9+1));
  b = flip(Math.floor(Random()*9+1));
  c = flip(Math.floor(Random()*5+1))*b;

  d = flip(Math.floor(Random()*9+1));
  e = flip(Math.floor(Random()*9+1));
  f = flip(Math.floor(Random()*5+1))*e;

  s = a+"x + "+b+"y = "+c +"<br>"+d+"x + "+e+"y = "+f;
  return [s,[a,b,c],[d,e,f]];
}

LinearEquations.prototype.IneqLine = function()
{
  a = flip(Math.floor(Random()*9+1));
  b = flip(Math.floor(Random()*9+1));
  c = flip(Math.floor(Random()*5+1))*b;

  var s = a+"x + "+b+"y ";
  var r = Math.floor(Random()*5);
  switch(r)
  {
    case 0:
      s+="&lt; ";
      break;
    case 1:
      s+="&gt; ";
      break;
    case 2:
      s+="&le; ";
      break;
    case 3:
      s+="&ge; ";
      break;
    case 4:
      s+="= ";
      break;
  }
  s+=""+c;
  return s;
}

LinearEquations.prototype.Intercept = function()
{
  var B = flip(Math.floor(Random()*9+1));
  return "(0, "+B+")";
}

LinearEquations.prototype.Slope = function()
{
  var dx = flip(Math.floor(Random()*9+1));
  var dy = flip(Math.floor(Random()*9+1));
  if(dx<0)
  {
    //logically this will make all slopes with any negative
    //have the negative on the top.
    dx=0-dx;
    dy=0-dy;
  }

  return (dy)+"/"+(dx);
}

LinearEquations.prototype.Point = function()
{
  x = flip(Math.floor(Random()*9+1));
  y = flip(Math.floor(Random()*9+1));

  return "("+x+","+y+") ";
}

LinearEquations.prototype.Label = function()
{
  var s = "Write the slope-intercept equation. Label all constants.<br>";
  s += "Rewrite this equation in slope-intercept form. Graph it.<br>";
  s += this.Line()+"<br>";
  return s;
}

LinearEquations.prototype.ParaPerp = function()
{
  var s = "Rewrite this equation in slope-intercept form.<br>";
  if(Random()>.5)
  {
    s += "Write another equation which is parallel to this one.<br>";
  }
  else
  {
    s += "Write another equation which is perpendicular to this one.<br>";
  }

  s += this.Line()+"<br>";
  return s;
}

LinearEquations.prototype.PointSlope = function()
{
  var s = "Find the equation of the line";
  if(Random()>.33)
  {
    s += " with this slope and point. Graph it.</br>";
    s += "m="+this.Slope()+" p="+this.Point()+"<br>";
  }
  else if(Random()>.5)
  {
    s += " with these two points. Graph it.</br>";
    s += "q="+this.Point()+" p="+this.Point()+"<br>";
  }
  else
  {
    s += ". Graph it.</br>";
    s += "m="+this.Slope()+" b="+this.Intercept()+"<br>";
  }

  return s;  
}

LinearEquations.prototype.GraphPoints = function()
{
  var s = "Graph the following points on the same graph.<br>";
  s += "<ol type='A'>"
  for(var x=0;x<5;x++)
  {
    s += "<li>"+this.Point()+"</li>"
  }
  s += "</ol>"
  return s;  
}

LinearEquations.prototype.Table = function()
{
  var s = "Create a table for this equation using at least 5 values for x.</br>"
  s += "<table width='100'><tr><th class='under'>x</th><th class='under between'>Equation</th><th class='under'>y</th></tr><tr><td></td><td class='between'>&nbsp;</td><td></td></tr></table><br>";
  s += this.Line()+"<br>";

  return s;
}

LinearEquations.prototype.WordProblem = function()
{
  var s;
  switch(Math.floor(Random()*3))
  {
    case 0:
      s = this.Activity();
      break;
    case 1:
      s = this.Populations();
      break;
    case 2:
      s = this.Trend();
      break;
  }
  return s;
}

LinearEquations.prototype.Activity = function()
{
  var x="a bowling alley";
  var thing1="shoes";
  var thing2="game";
  var thing2Plural="games";
  var verb="play";
  var f = Math.floor(Random()*10+3);
  var c1 = 1;
  var c2 = 1;
  var r1m=25;
  var r1M=35;
  var r2m=5;
  var r2M=15;

  switch(Math.floor(Random()*6))
  {
    //case 0 maintains bowling
    case 1:
      x="a baseball game";
      thing1="tickets";
      thing2="popcorn";
      thing2Plural="bags of popcorn";
      verb="share";
      c1 = 1;
      c2 = 1;
      r1m=20;
      r1M=80;
      r2m=10;
      r2M=20;
      break;
    case 2:
      x="sky dive";
      thing1="seat on the plane";
      thing2="dive camera";
      thing2Plural="cameras";
      verb="take";
      c1 = 1;
      c2 = 1;
      r1m=50;
      r1M=70;
      r2m=10;
      r2M=35;
      break;
    case 3:
      x="the state fair";
      thing1="entry";
      thing2="ride";
      thing2Plural="rides";
      verb="take";
      c1 = 1;
      c2 = 10;
      r1m=30;
      r1M=50;
      r2m=2;
      r2M=5;
      break;
    case 4:
      x="a karyoke bar";
      thing1="cover charge";
      thing2="song";
      thing2Plural="songs";
      verb="sing";
      c1 = 1;
      c2 = 3;
      r1m=25;
      r1M=40;
      r2m=1;
      r2M=3;
      break;
    case 5:
      x="the movies";
      thing1="tickets";
      thing2="candy";
      thing2Plural="bags of candy";
      verb="buy";
      c1 = 1;
      c2 = 1;
      r1m=9;
      r1M=15;
      r2m=2.5;
      r2M=5;
      break;
  }

  var r1 = Math.floor((Random()*(r1M-r1m)+r1m)*100)/100;
  var r2 = Math.floor((Random()*(r2M-r2m)+r2m)*100)/100;
  var r2Share = (r2/f);
  var avg = Math.floor(Random()*f*c2+1)*r2Share+(c1*r1);
  var cost = Math.floor((avg*f)*100)/100;

  var s = "Bob is going to "+x+" with his friends. It costs $"+r1.toFixed(2)+" for "+thing1+" and $"+r2.toFixed(2)+" per "+thing2;
  s += ". Among his "+f+" friends they have $"+cost.toFixed(2)+". How many "+thing2Plural+" can they "+verb+"? How much will they have left?";
  s += "Write an equation for the total cost, then fill in the number of friends to find the answers."
  return s;
}

LinearEquations.prototype.Populations = function()
{
  var animal="panda";
  var pluralAnimal="pandas";
  var limit=30;
  var popMin=10;
  var bm=2;
  var bM=10;
  var dm=5;
  var dM=15;
  var dru="years";
  var bru="years";

  switch(Math.floor(Random()*6))
  {
    //case 0 is the panda case above
    case 1:
      animal="zebra";
      pluralAnimal="zebras";
      limit=35;
      popMin=5;
      dm=10;
      dM=14;
      dru="years";
      bm=1;
      bM=13;
      bru="years";
      break;
    case 2:
      animal="giraffe";
      pluralAnimal="giraffes";
      limit=20;
      popMin=5;
      dm=5;
      dM=14;
      dru="years";
      bm=1.5;
      bM=10;
      bru="years";
      break;
    case 3:
      animal="otter";
      pluralAnimal="otters";
      limit=30;
      popMin=5;
      dm=3;
      dM=8;
      dru="years";
      bm=1;
      bM=5;
      bru="years";
      break;
    case 4:
      animal="penguin";
      pluralAnimal="penguins";
      limit=30;
      popMin=10;
      dm=4;
      dM=9;
      dru="years";
      bm=1;
      bM=7;
      bru="years";
      break;
    case 5:
      animal="seal";
      pluralAnimal="seals";
      limit=40;
      popMin=7;
      dm=2;
      dM=14;
      dru="years";
      bm=.5;
      bM=5;
      bru="years";
      break;
  }

  var dr=Math.floor((Random()*(dM-dm)+dm)*10)/10;
  var br=Math.floor((Random()*(bM-bm)+bm)*10)/10;
  var startPop=Math.floor(Random()*(limit-popMin)+popMin);

  var s = "There are "+startPop+" "+pluralAnimal+" in the zoological park, but it can hold "+limit+". On average one "+animal+" dies every "+dr+" "+dru
  s+=" and one is born every "+br+" "+bru+". When will the population reach its limit or go extinct?"
  s+=" Write an equation for the population based on death and birth rate. Graph it and answer the question.";

  return s;
}


LinearEquations.prototype.Trend = function()
{
  var topic = "his salary";
  var domain = "his sales job";
  var verb = "he made";
  var bad = 50000;
  var goal = 100000;
  var preUnit="$"
  var postUnit="";

  switch(Math.floor(Random()*7))
  {
    //case 0 the sales job scenario
    case 1:
      topic = "his weight";
      domain = "his health records";
      verb = "he weighed";
      bad = 300;
      goal = 190;
      preUnit=""
      postUnit="lbs";
      break;
    case 2:
      topic = "hiring rates";
      domain = "his department";
      verb = "there were";
      bad = 50;
      goal = 120;
      preUnit=""
      postUnit=" employees";
      break;
    case 3:
      topic = "reunion size";
      domain = "his family";
      verb = "there were";
      bad = 5;
      goal = 50;
      preUnit=""
      postUnit=" people";
      break;
    case 4:
      topic = "shellfish population";
      domain = "Chesapeake Bay";
      verb = "they estimated";
      bad = 10000;
      goal = 1000000;
      preUnit=""
      postUnit=" oysters";
      break;
    case 5:
      topic = "fuel efficiency";
      domain = "his car";
      verb = "it used";
      bad = 12;
      goal = 20;
      preUnit=""
      postUnit="mpg";
      break;
    case 6:
      topic = "cancer rate";
      domain = "his medical practice";
      verb = "there were";
      bad = 12;
      goal = 0;
      preUnit=""
      postUnit=" new cancer patients";
      break;
  }

  var datem = 2000;
  var dateM = 2017;
  var date1 = Math.floor(Random()*(dateM-datem)+datem);
  var date2 = Math.floor(Random()*(dateM-datem)+datem);

  var limit = Math.max(goal,bad);
  var min = Math.min(goal,bad);

  var n1 = Math.floor(Random()*(limit-min)+min);
  var n2 = Math.floor(Random()*(limit-min)+min);

  var s = "Bob is looking at "+topic+" history from "+domain+". In "+date1+" "+verb+" ";
  s += preUnit+n1+postUnit+". In 2018 "+verb+" "+preUnit+n2+postUnit+". How fast is "
  s += topic+" changing? The goal is "+preUnit+goal+postUnit+", but "+preUnit+bad+postUnit;
  s += " is unacceptable. If the trend continues, when will it reach one or the other? "
  s += "Write an equation for the trend. Make a table showing the next 5 years of data. ";
  s += "Answer the question.";

  return s;
}

LinearEquations.prototype.fullProblem = function()
{
  data = this.System();
  set1 = data[1];
  set2 = data[2];

  classN = "hidden";
  if(showingAnswer)
  {
    classN = "red";
  }

  temp = "Solve this set of linear equations by substitution, elimination, ";
  temp += "and matrices.<br>"+data[0]+"<br>"

  answer = [temp,""];
  temp ="";

  gcf = GCF(set1[0],set1[1]);
  n1 = -set1[0]/gcf;
  d1 = set1[1]/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m1 = n1+"/"+d1;
  if(d1==1)
  {
    m1 = n1;
  }

  perm1 = [n1, d1,0,0,0];
  part1 = m1+"x";

  gcf = GCF(set1[2],set1[1]);
  n1 = set1[2]/gcf;
  d1 = set1[1]/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  b1 = n1+"/"+d1;
  b1Alt = -n1+"/"+d1;
  if(d1==1)
  {
    b1 = n1;
    b1Alt = -n1;
  }
  perm1[2] = n1;
  perm1[3] = d1;
  perm1[4] = b1;

  if (b1>=0)
  {
    part1 += " + "+b1;
  }
  else
  {
    part1 += " &minus; "+(-b1);
  }
  temp += "y = "+part1+"<br>";

  gcf = GCF(set2[0],set2[1]);
  n1 = -set2[0]/gcf;
  d1 = set2[1]/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m2 = n1+"/"+d1;
  m2Alt = -n1+"/"+d1;
  if(d1==1)
  {
    m2 = n1;
    m2Alt = -n1;
  }

  perm2 = [n1, d1,0,0,0];
  part2 = m2+"x";

  gcf = GCF(set2[2],set2[1]);
  n1 = set2[2]/gcf;
  d1 = set2[1]/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  b2 = n1+"/"+d1;
  if(d1==1)
  {
    b2 = n1;
  }

  perm2[2] = n1;
  perm2[3] = d1;
  perm2[4] = b2;

  if (b2>=0)
  {
    part2 += " + "+b2;
  }
  else
  {
    part2 += " &minus; "+(-b2);
  }
  temp += "y = "+part2+"<br>";

  temp += part1 + " = " + part2+"<br><br>"

  //=============Solve substitution===============

  temp += m1 + "x + " + m2Alt +"x = " + b2 +" + "+b1Alt+"<br>";

  gcf = GCF(set1[1],set2[1]);
  d1 = set1[1]/gcf;
  d2 = set2[1]/gcf;
  dT = set1[1]*d2

  n1 = (-set1[0])*d2;
  n2 = set2[0]*d1;//m WAS -x/y but we added it to move to other side
  nT = n1+n2;

  n1 = set2[2]*d1;
  n2 = -set1[2]*d2;//m WAS c/y but we sutracted it to move to other side
  b1 = n1 + n2

  gcf = GCF(nT,dT);
  nT = nT/gcf;
  d1 = dT/gcf;

  if(d1<0)
  {
    nT = -nT;
    d1 = -d1;
  }

  mT = nT+"/"+d1;
  if(d1==1)
  {
    mT = nT;
  }

  gcf = GCF(b1,dT);
  b1 = b1/gcf;
  d2 = dT/gcf;

  if(d2<0)
  {
    b1 = -b1;
    d2 = -d2;
  }
 
  bT = b1+"/"+d2;
  if(d2==1)
  {
    bT = b1;
  }

  temp += mT+"x = "+bT+"<br>";

  nF = b1*d1;
  dF = d2*nT;

  gcf = GCF(nF,dF);
  nF = nF/gcf;
  dF = dF/gcf;

  if(dF<0)
  {
    nF = -nF;
    dF = -dF;
  }

  v = nF+"/"+dF;
  if(dF==1)
  {
    v = nF;
  }

  temp += "x = "+v+"<br><br>";

  //==========Check answer on equation 1=============

  n1 = perm1[0];
  d1 = perm1[1];
  
  gcf = GCF(n1,d1);
  n1 = n1/gcf;
  d1 = d1/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m = n1+"/"+d1;
  if(d1==1)
  {
    m = n1;
  }

  temp += "y = "+m+"("+v+") + "+perm1[4]+"<br>";

  n1 = perm1[0]*nF;
  d1 = perm1[1]*dF;
  
  gcf = GCF(n1,d1);
  n1 = n1/gcf;
  d1 = d1/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m = n1+"/"+d1;
  if(d1==1)
  {
    m = n1;
  }

  temp += "y = "+m+" + "+perm1[4]+"<br>";

  n = n1*perm1[3];
  n2 = perm1[2]*d1;
  d = perm1[3]*d1;

  n = n+n2;

  gcf = GCF(n,d);
  n = n/gcf;
  d = d/gcf;

  if(d<0)
  {
    n = -n;
    d = -d;
  }

  m = n+"/"+d;
  if(d==1)
  {
    m = n;
  }

  temp += "y = "+m+"<br><br>";

  //=========Check on equation 2================

  n1 = perm2[0];
  d1 = perm2[1];
  
  gcf = GCF(n1,d1);
  n1 = n1/gcf;
  d1 = d1/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m = n1+"/"+d1;
  if(d1==1)
  {
    m = n1;
  }

  temp += "y = "+m+"("+v+") + "+perm2[4]+"<br>";

  n1 = perm2[0]*nF;
  d1 = perm2[1]*dF;
  
  gcf = GCF(n1,d1);
  n1 = n1/gcf;
  d1 = d1/gcf;

  if(d1<0)
  {
    n1 = -n1;
    d1 = -d1;
  }

  m = n1+"/"+d1;
  if(d1==1)
  {
    m = n1;
  }

  temp += "y = "+m+" + "+perm2[4]+"<br>";

  n = n1*perm2[3];
  n2 = perm2[2]*d1;
  d = perm2[3]*d1;

  n = n+n2;

  gcf = GCF(n,d);
  n = n/gcf;
  d = d/gcf;

  if(d<0)
  {
    n = -n;
    d = -d;
  }

  m = n+"/"+d;
  if(d==1)
  {
    m = n;
  }

  temp += "y = "+m+"<br><br>";

  temp += "Solution: ("+v+", "+m+")<br><br>"

  //=========Elimination================

  gcf = GCF(set1[1], set2[1]);
  m1 = -set2[1]/gcf;
  m2 = set1[1]/gcf;

  if(m1<0 && m2<0)
  {
    m1 = -m1;
    m2 = -m2;
  }

  temp += m1+"["+set1[0]+"x + "+set1[1]+"y = "+set1[2]+"]<br>";
  temp += m2+"["+set2[0]+"x + "+set2[1]+"y = "+set2[2]+"]<br><br>";

  temp += (m1*set1[0])+"x + "+(m1*set1[1])+"y = "+(m1*set1[2])+"<br>";
  temp += (m2*set2[0])+"x + "+(m2*set2[1])+"y = "+(m2*set2[2])+"<br><br>";

  temp += ((m1*set1[0])+(m2*set2[0]))+"x = "+((m1*set1[2])+(m2*set2[2]))+"<br>";
 
  n = ((m1*set1[2])+(m2*set2[2]));
  d = ((m1*set1[0])+(m2*set2[0]));

  gcf = GCF(n, d);
  n = n/gcf;
  d = d/gcf;

  if(d<0)
  {
    n = -n;
    d = -d;
  }

  v2 = n+"/"+d;
  if(d==1)
  {
    v2 = n;
  } 

  temp += "x = "+v2;

  temp += "Matches: "+v+" = "+v2;

  //=========Matrices================

  temp += "D = <br>|"+set1[0]+" "+set1[1]+"|<br>|"+set2[0]+" "+set2[1]+"|<br>"
  temp += "D = "+(set1[0]*set2[1])+" &minus; "+(set1[1]*set2[0])+"<br>"
  dd = (set1[0]*set2[1])-(set1[1]*set2[0]);
  temp += "D = "+dd+"<br><br>"

  temp += "Dx = <br>|"+set1[2]+" "+set1[1]+"|<br>|"+set2[2]+" "+set2[1]+"|<br>"
  temp += "Dx = "+(set1[2]*set2[1])+" &minus; "+(set1[1]*set2[2])+"<br>"
  dx = (set1[2]*set2[1])-(set1[1]*set2[2]);
  temp += "Dx = "+dx+"<br><br>"

  temp += "Dy = <br>|"+set1[0]+" "+set1[2]+"|<br>|"+set2[0]+" "+set2[2]+"|<br>"
  temp += "Dy = "+(set1[0]*set2[2])+" &minus; "+(set1[2]*set2[0])+"<br>"
  dy = (set1[0]*set2[2])-(set1[2]*set2[0]);
  temp += "Dy = "+dy+"<br><br>"

  n = dy;
  d = dd;
  gcf = GCF(n, d);
  n = n/gcf;
  d = d/gcf;

  if(d<0)
  {
    n = -n;
    d = -d;
  }

  v2M = n+"/"+d;
  if(d==1)
  {
    v2M = n;
  } 

  temp += "y = Dy/D = "+v2M+"<br>"

  n = dx;
  d = dd;
  gcf = GCF(n, d);
  n = n/gcf;
  d = d/gcf;

  if(d<0)
  {
    n = -n;
    d = -d;
  }

  vM = n+"/"+d;
  if(d==1)
  {
    vM = n;
  } 

  temp += "x = Dx/D = "+vM+"<br>"

  answer[1]= temp;
  return answer;
}