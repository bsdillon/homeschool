function StudentAlgorithm(letter)
{
  switch(letter)
  {
    case 'E':
      ElenaMath()
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
  var s = "<table class='padded' width='500'><tr>";
  var c = new LinearEquations();
  s += "<td>"+c.ParaPerp()+"</td>";
  s += "<td>"+c.PointSlope()+"</td></tr><tr>";
  s += "<td>"+c.Table()+"</td><td></td></tr><tr>";
  s += "<td>"+c.WordProblem()+"</td>";
  s += "<td>"+c.WordProblem()+"</td></tr>";
  s += "</table>"

  var c = new AreaVolume();
  s += "<table><tr><td>"+c.SelectProblem()+"</td>";
  s += "<td>"+c.SelectProblem()+"</td></tr>";
  s += "</table>";

  //put it into the content
  content.innerHTML = s;
}

function HannaMath()
{
  var s = "<table>"
  for(let i=0; i<1; i++)
  {
    s+="<tr>";
      var r = Math.floor(Random()*5);
      switch(r)
      {
        case 0:
          s+="<td>"+SolveLine()+"</td>";
          break;
        case 1:
          s+="<td>"+SolveSquare()+"</td>";
          break;
        case 2:
          s+="<td>"+SolveSquareRoot()+"</td>";
          break;
        case 3:
          s+="<td>"+Distribute()+"</td>";
          break;
        case 4:
          s+="<td>"+Factor()+"</td>";
          break;
    }
    s+="</tr>";
  s+="<tr><td> </td></tr>";
  }
  s+="<tr><td> </td></tr></table>";

  var c = new LinearEquations();
  s+="Find the equation of a line that crosses through these two points.<br>";
  s+=c.Point()+" and "+c.Point()+"<br><br>";

  s+="Find the intersection of the two lines and graph the solution ";
  var r = Math.floor(Random()*3);
  switch(r)
  {
    case 0:
      s+="using the y=y method.<br>";
      break;
    case 1:
      s+="using the elimination method.<br>";
      break;
    case 2:
      s+="using the matrix method.<br>";
      break;
  }
  s+=c.IneqLine();
  s+=c.IneqLine();
  s+="<br>";

  s += AddMatrix() + "<br><br>";
  s += SubtractMatrix() + "<br><br>";
  s += MultMatrix() + "<br><br>";
  s += DetermineMatrix() + "<br><br>";
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
