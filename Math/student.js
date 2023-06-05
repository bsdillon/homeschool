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
  s+="</tr></table><br>";

  math = new Powers();
  r = Random();
  if(r<.33){
    s+=math.PrimeFactor()
  }
  else if (r<.67) {
    s+=math.nRoot()
  }
  else {
    s+=math.PowerRatio()+"<br>"
  }

  s+="<br>";

  math = new Trig();
  r = Random();
  if(r<.33){
    s+= math.EasyGraphFunction();
  }
  else if (r<.67) {
    s+= math.CalcTrig();
  }
  else {
    s+= math.UnitCircle()+"<br>";
  }
  s+="<br>";

  for(let i=0;i<2;i++) {
    r = Random();
    if(r<1.0/3) {
      s+= AssortmentsSelection()+"<br>";
    }
    else if(r<2.0/3) {
      s+= alienAdditionRule();
    }
    else{
      s += repetition() 
    }
    s+="<br>";
  }


  //put it into the content
  content.innerHTML = s;
}