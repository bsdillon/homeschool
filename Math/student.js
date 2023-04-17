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

function EveryMath()
{
  var math = new Arithmetic();
  math.SetSectionProbabilities(0,1,1,0,1,1);
  
  s="<table><tr width='150'>"
  for(let c=0;c<4;c++)
  {
    math.SelectArithmetic()
    s+="<td style='padding-right:50px'>"+math.SelectProblem()+"</td>"
  }
  s+="</tr></table><br><br><table><tr><td>";

  math = new Powers();
  r = Random();
  if(r<.33){
    s+=math.PrimeFactor()
  }
  else if (r<.67) {
    s+=math.nRoot()
  }
  else {
    s+=math.PowerRatio()
  }

  s+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br></td><td>";

  math = new Trig();
  r = Random();
  if(r<.33){
    s+= math.EasyGraphFunction();
  }
  else if (r<.67) {
    s+= math.CalcTrig();
  }
  else {
    s+= math.UnitCircle();
  }
  s+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br></td></tr></table><br><br><table><tr><td>";

  s+= AssortmentsSelection()+"<br>";

  s+="</td><td>";

  s+= Factorial()+"<br>";

  s+="</td><td>";

  s+= CountCases()+"<br>";

  s+="</td></tr><tr><td>";

  s+= CountCases2()+"<br>";

  s+="</td><td>";

  s+= venn()+"<br>";

  s+="</td></tr></table><table><tr><td>";

  s+= alienAdditionRule();

  s+="</td><td>";

  s += dataProbability();

  s+="</td></tr></table>";

  //put it into the content
  content.innerHTML = s;
}