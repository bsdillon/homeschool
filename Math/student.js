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

  var a = new ArithWord();
  s+="<tr><td class='hpad'>"+a.RandomProblem()+"</td></tr>";
  s+="<tr><td> </td></tr>";

  var ns = new NumberSkills();
  s+="<tr><td class='hpad'>"+ns.Round()+"</td></tr>";
  s+="<tr><td> </td></tr>";
  s+="</table>";

  s+=ns.Convert();
  
  s+="<table>";
  var a = new Arithmetic();
  a.SetOperators(1,1,1,1);//add,sub,mult,div
  var r = Math.floor(Random()*4);
  switch(r)
  {
    case 0:
  a.SetSectionProbabilities(0,0,1,0,0,0);//basic,complex,decimal,fraction,improper,mixed
  s+="<tr><td class='hpad'>"+a.SelectProblem()+"</td>";
  s+="<td class='hpad'>"+a.SelectProblem()+"</td></tr>";
      break;
    case 1:
  a.SetSectionProbabilities(0,0,0,1,0,0);//basic,complex,decimal,fraction,improper,mixed
  s+="<tr><td class='hpad'>"+a.SelectProblem()+"</td>";
  s+="<td class='hpad'>"+a.SelectProblem()+"</td></tr>";
      break;
    case 2:
  a.SetSectionProbabilities(0,0,0,0,1,0);//basic,complex,decimal,fraction,improper,mixed
  s+="<tr><td class='hpad'>"+a.SelectProblem()+"</td>";
  s+="<td class='hpad'>"+a.SelectProblem()+"</td></tr>";
      break;
    case 3:
  a.SetSectionProbabilities(0,0,0,0,0,1);//basic,complex,decimal,fraction,improper,mixed
  s+="<tr><td class='hpad'>"+a.SelectProblem()+"</td>";
  s+="<td class='hpad'>"+a.SelectProblem()+"</td></tr>";
      break;
  }
  s+="<tr><td></td><td></td></tr><tr>";

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
  //s+=SolveFraction();
  }
  s+="</tr>";
  s+="</table>";

  //put it into the content
  content.innerHTML = s;
}