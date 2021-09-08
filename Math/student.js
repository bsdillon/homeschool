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
      HannaMath();
      break;
    case 'O':
      MathOlympics();
      break;
    case 'P':
      Perfect();
      break;
  }
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

function ElenaMath()
{
  var s = "<table class='padded'><tr>";
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
}

function EveryMath()
{
  //var s = PolynomialDerivative();
  var s = "";
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

function HannaMath()
{
  var c = new LinearEquations();
  var s = "<table>"
  s+="<tr><td>1. Graph these conic sections.<ol type='A'>";
  s+="<li>"+circle()+"</li>";
  s+="<li>"+ellipse()+"</li>";
  s+="<li>"+parabola()+"</li>";
  s+="<li>"+line()+"</li></ol></td></tr>";
  for(let i=0; i<3; i++)
  {
    s+="<tr>";
      var r = Math.floor(Random()*8);
      switch(r)
      {
        case 0:
          s+="<td>"+(i+2)+". "+SolveLine()+"</td>";
          break;
        case 1:
          s+="<td>"+(i+2)+". "+SolveSquare()+"</td>";
          break;
        case 2:
          s+="<td>"+(i+2)+". "+SolveSquareRoot()+"</td>";
          break;
        case 3:
          s+="<td>"+(i+2)+". "+Distribute()+"</td>";
          break;
        case 4:
          s+="<td>"+(i+2)+". "+Factor()+"</td>";
          break;
        case 5:
          s+="<td>"+(i+2)+". Factor or multiply:<br>"+FOIL()+"</td>";
          break;
        case 6:
           var tmp ="Find the equation of a line that crosses through these two points.<br>";
           tmp+=c.Point()+" and "+c.Point()+"<br><br>";
           s+="<td>"+(i+2)+". "+tmp+"</td>";
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
          s+="<td>"+(i+2)+". "+tmp+"</td>";
          break;
        case 8:
           s+="<td>"+(i+2)+". ";
           s += AddMatrix() + "<br><br>";
           s += SubtractMatrix() + "<br><br>";
           s += MultMatrix() + "<br><br>";
           s += DetermineMatrix() + "<br><br>";
           s+="</td>";
          break;
    }
    s+="</tr>";
  }
  s+="</table>";
  
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
