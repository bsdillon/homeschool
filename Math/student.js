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
  s+="</table>";

  math = new Powers();
  r = Random();
  if(r<.33){
    s+=math.PrimeFactor()+"<br><br>"
  }
  else if (r<.67) {
    s+=math.nRoot()+"<br><br>"
  }
  else {
    s+=math.PowerRatio()+"<br><br>"
  }

  math = new Trig();
  r = Random();
  if(r<.33){
    s+= math.EasyGraphFunction()+"<br><br>";
  }
  else if (r<.67) {
    s+= math.CalcTrig()+"<br><br>";
  }
  else {
    s+= math.UnitCircle()+"<br><br>";
  }

  s+= AssortmentsSelection();

  s+= Factorial();

  //put it into the content
  content.innerHTML = s;
}