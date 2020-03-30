if(typeof MathDefined === "undefined")
{
  alert("physics.js requires math.js");
}

function Physics()
{
}

Physics.prototype.RandomFunction = function()
{
  return this.InclinedMass1();
}

Physics.prototype.Inelastic = function()
{
  var m1 = Math.floor(Random()*1000+500);
  var m2 = Math.floor(Random()*1000+500);
  var v1 = Math.floor(Random()*20+5);
  var v2 = Math.floor(Random()*20+5);
  var momentum = (v1*m1)+(v2*m2);
  var vFinal = momentum/(m1+m2);

  var w1 = Math.floor(m1*2.2);
  var w2 = Math.floor(m2*2.2);

  if(Random()>.5)
  {
    v1-=Math.floor(Random()*5+1);
  }

  var mph1 = Math.floor(v1*3600/1600);
  var mph2 = Math.floor(v2*3600/1600);
  var mphFinal = Math.floor(vFinal*3600/1600);

  var s = "Two cars are in a collision. Each of the drivers gave their speed to the officer and we have the weight of the cars in question. What speed will the combined mass travel after the crash?<br>Car#1: "+w1+"lbs<br>Car#2: "+w2+"lbs<br><br>Car#1 speed: "+mph1+"mph<br>Car#2 speed: "+mph2+"mph<br>Remember that 1 mile = 1600 meters and 1 kg = 2.2 lbs<br><br><img src='http://www.physicstutorials.org/images/stories/inelasticcollisionson.png' width='300'><br>"
  return s;
}


Physics.prototype.Elastic = function()
{
  var m1 = Math.floor(Random()*25+5);
  var m2 = Math.floor(Random()*25+5);
  while(m2==m1)
  {
    m2 = Math.floor(Random()*25+5);
  }
  var v1 = Math.floor(Random()*5+5);
  var v2 = Math.floor(Random()*5+5);
  while(v2==v1)
  {
    v2 = Math.floor(Random()*5+5);
  }

  var s = "Two masses collide and exchange momentum. Given the masses and velocities from just BEFORE the collision, what will the velocities be AFTER the collsion??<br>m1="+m1+" kg<br>m2="+m2+" kg<br><br>v1="+v1+" m/s<br>v2="+v2+" m/s<br><br><img src='http://titan.bloomfield.edu/facstaff/dnicolai/images/ImagesPhy-105/lesson66.jpg' width='300'><br>"
  return s;
}

Physics.prototype.InclinedMass1 = function()
{
  var s = "In the diagram below the coefficient of friction &mu;<sub>s</sub>="+(Math.floor(Random()*10+5)/10);
  var m1 = Math.floor(Random()*50+10)/10;//major mass
  var m2 = Math.floor(Random()*20+5)/10;//minor mass
  var theta = Math.floor(Random()*80+10);//angle

  s+=". Given the information below, will the weight slide up, down, or stay still?<br>";
  s+="M="+m2+"kg; m="+m1+"kg; &theta;="+theta+"&deg;";

  s+="<br><img src='http://s3.amazonaws.com/answer-board-image/3e773e52-58e2-460e-beb2-7dff5ef109ca.png' width='175'><br>"
  return s;
}

Physics.prototype.VectorMath = function()
{
  var s = "Draw the vector sum and find the exact vector in <x,y> components and magnitude @ angle forms.<br>";
  var angle = Math.floor(Random()*360);
  var magnitude = Math.floor(Random()*20+2);
  var number = Math.floor(Random()*3+2);

  for(var i = 0;i<number;i++)
  {
    s+= magnitude+"N @ "+angle+"&deg;<br>";
    angle = Math.floor(Random()*360);
    magnitude = Math.floor(Random()*20+2);
  }

  return s;
}


