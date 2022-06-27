function StudentAlgorithm(letter)
{
  switch(letter)
  {
    case 'E':
      EveryMath()
      break;
    case 'R':
      EveryMath()
      break;
    case 'B':
      EveryMath()
      break;
    case 'H':
      EveryMath();
      break;
    case 'O':
      MathOlympics();
      break;
    case 'P':
      Perfect();
      break;
  }
}

function EveryMath()
{
  var s = "First do some arithmetic.<br>";
  s+="<table>";
  var math = new Arithmetic();
  math.SetSectionProbabilities(0,1,1,0,1,1);
  
  for(let r=0;r<2;r++)
  {
    s+="<tr width='150'>"
    for(let c=0;c<3;c++)
    {
      math.SelectArithmetic()
      s+="<td style='padding-right:50px'>"+math.SelectProblem()+"</td>"
    }
    s+="</tr><tr><td>&nbsp;</td></tr>"
  }

  math = new Powers();
  s+="<tr width='150'>"
  s+="<td style='padding-right:50px'>"+math.PrimeFactor()+"</td>"
  s+="<td style='padding-right:50px'>"+math.nRoot()+"</td>"
  s+="<td style='padding-right:50px'>"+math.PowerRatio()+"</td>"
  s+="</tr><tr><td>&nbsp;</td></tr>"
  s+="</table>"

  math = new LinearEquations();
  s+="Graph this conic section.<br>";
  var tmp = "";
  switch(Math.floor(Random()*5))
  {
    case 0:
      tmp =hyperbola();
      break;
    case 1:
      tmp =circle();
      break;
    case 2:
      tmp =ellipse();
      break;
    case 3:
      tmp =parabola();
      break;
    case 4:
      tmp =line();
      break;
  }
  console.log(tmp);

  s+=tmp+"<br>";

  math = new Trig();
  s+= math.EasyGraphFunction()+"<br><br>";
  s+= math.CalcTrig()+"<br><br>";
  s+= math.UnitCircle()+"<br><br>";

  var c = new LinearEquations();
  switch(Math.floor(Random()*3))
  {
      case 0:
        var tmp ="Find the equation of a line that crosses through these two points.<br>";
        tmp+=c.Point()+" and "+c.Point()+"<br><br>";
        s+="<td><br>"+tmp+"</td>";
        break;
      case 1:
        var tmp ="Find the intersection of the two lines and graph the solution ";
        var r = Math.floor(Random()*3);
        switch(r)
        {
          case 0:
            tmp+="using the y=y method.<br>";
            break;
          case 1:
            tmp+="using the elimination method.<br>";
            break;
          case 2:
            tmp+="using the matrix method.<br>";
            break;
        }
        tmp+=c.IneqLine();
        tmp+="<br>";
        tmp+=c.IneqLine();
        s+="<td><br>"+tmp+"</td>";
        break;
      case 2:
        s+="<td><br>Solve these matrix problems<ol type='A'>";
        s += "<li>"+AddMatrix() + "</li>";
        s += "<li>"+SubtractMatrix() + "</li>";
        s += "<li>"+MultMatrix() + "</li>";
        s += "<li>"+DetermineMatrix() + "</li></ol>";
        s+="</td>";
        break;
  }

  content.innerHTML = s;
  return; 

  //var c = new AreaVolume();
  //var c = new PolynomialDerivative();


  var c = new Trig();
  s += "<td>"+c.BasicProblem()+"</td>";
  s += "<td>"+c.BasicProblem()+"</td></tr><tr>";
  s += "<td>"+c.BasicProblem()+"</td>";
  s += "<td>"+c.BasicProblem()+"</td></tr><tr>";
  s += "<tr><td colspan='2'>"+c.TriangleHeader()+"</td></tr>";
  s += "<tr><td>"+c.TriangleProblem()+"</td><td>"+c.TriangleProblem()+"</td></tr>";

  var c = new AreaVolume();
  s += "<table><tr><td>"+c.SelectProblem()+"</td>";
  s += "<td>"+c.SelectProblem()+"</td></tr>";
  s += "<table>";

  //put it into the content
  content.innerHTML = s;

  var c = new LinearEquations();
  s+="<tr><td>1. Graph this conic section.<br>";
  switch(Math.floor(Random()*5))
  {
    case 0:
      s+=hyperbola();
      break;
    case 1:
      s+=circle();
      break;
    case 2:
      s+=ellipse();
      break;
    case 3:
      s+=parabola();
      break;
    case 4:
      s+=line();
      break;
  }
  s+="</td></tr>";

  var available = [0,1,2,3,4,5,6,7,8];
  for(let i=0; i<3; i++)
  {
    s+="<tr>";
    var index = Math.floor(Random()*available.length);
    var r = available[index];
    available.splice(index,1);
    switch(r)
    {
      case 0:
        s+="<td><br>"+(i+5)+". "+SolveLine()+"</td>";
        break;
      case 1:
        s+="<td><br>"+(i+5)+". "+SolveSquare()+"</td>";
        break;
      case 2:
        s+="<td><br>"+(i+5)+". "+SolveSquareRoot()+"</td>";
        break;
      case 3:
        s+="<td><br>"+(i+5)+". "+Distribute()+"</td>";
        break;
      case 4:
        s+="<td><br>"+(i+5)+". "+Factor()+"</td>";
        break;
      case 5:
        s+="<td><br>"+(i+5)+". Factor or multiply:<br>"+FOIL()+"</td>";
        break;
      case 6:
        var tmp ="Find the equation of a line that crosses through these two points.<br>";
        tmp+=c.Point()+" and "+c.Point()+"<br><br>";
        s+="<td><br>"+(i+5)+". "+tmp+"</td>";
        break;
      case 7:
        var tmp ="Find the intersection of the two lines and graph the solution ";
        var r = Math.floor(Random()*3);
        switch(r)
        {
          case 0:
            tmp+="using the y=y method.<br>";
            break;
          case 1:
            tmp+="using the elimination method.<br>";
            break;
          case 2:
            tmp+="using the matrix method.<br>";
            break;
        }
        tmp+=c.IneqLine();
        tmp+="<br>";
        tmp+=c.IneqLine();
        s+="<td><br>"+(i+5)+". "+tmp+"</td>";
        break;
      case 8:
        s+="<td><br>"+(i+5)+". Solve these matrix problems<ol type='A'>";
        s += "<li>"+AddMatrix() + "</li>";
        s += "<li>"+SubtractMatrix() + "</li>";
        s += "<li>"+MultMatrix() + "</li>";
        s += "<li>"+DetermineMatrix() + "</li></ol>";
        s+="</td>";
        break;
    }
    s+="</tr>";
  }
  s+="</table>";
  
  //put it into the content
  content.innerHTML = s;

  //var s = PolynomialDerivative();
  if(Random()>.5)
  {
    s+="<img src='https://i.stack.imgur.com/70zob.png'><br>"
    s+="Find the perimeter of figure ABCD, area of figure ABCD, volume of figure ABCDEFGH,<br>";
    s+=" and the surface area of figure ABCDEFGH given the following dimensions. You may<br>"
    s+=" assume that the figure is a retangular prism.<br>"
    s+="AB = "+Math.floor(Random()*10+5)+"<br>";
    s+="AE = "+Math.floor(Random()*10+5)+"<br>";
    s+="AD = "+Math.floor(Random()*10+5)+"<br>";
  }
  else
  {
    s+="<img src='https://www.cs.swarthmore.edu/~newhall/cs21/f09/Labs/cone_1.gif'><br>";
    s+="Find the perimeter and area of the circle, the surface areas of the cone, and<br>";
    s+="the volume of the cone with the following dimensions.<br>";
    s+="r = "+Math.floor(Random()*5+3)+"<br>";
    s+="h = "+Math.floor(Random()*10+5)+"<br>";
  }

  s += "You must get each of these 100% correct to pass<br>";

  var a = new Arithmetic();
  a.SetSectionProbabilities(0,1,1,0,1,1);
  
  for(let i=0;i<3;i++)
  {
    a.SelectArithmetic();
    s+=a.SelectProblem()+"<br><br>";
  }


  for(let i=0;i<3;i++)
  {
    var r = Random();
    if(r<.33)
    {
      s += AddMatrix() + "<br><br>";
    }
    else if(r<.66)
    {
      s += SubtractMatrix() + "<br><br>";
    }
    else
    {
      s += MultMatrix() + "<br><br>";
    }
  }
  
  //put it into the content
  content.innerHTML = s;
}

function MathOlympics()
{
  var s="";
  if(Random()>.1)
  {
    var a = new Arithmetic();
    a.SetSectionProbabilities(1,1,1,1,1,1);//basic,complex,decimal,fraction,improper,mixed
    a.SetOperators(1,1,1,1);//add,sub,mult,div
    s=a.SelectProblem();
  }
  else
  {
    var a = new ArithWord();
    s=a.RandomProblem();
  }

  //put it into the content
  content.innerHTML = s;
}

function Perfect()
{
  var s = "You must get each of these 100% correct to pass<br>";

  var a = new Arithmetic();
  a.SetSectionProbabilities(0,1,1,0,1,1);
  
  for(let i=0;i<6;i++)
  {
    a.SelectArithmetic();
    s+=a.SelectProblem()+"<br><br>";
  }

  content.innerHTML = s;
}
