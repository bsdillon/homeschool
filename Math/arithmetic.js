if(typeof MathDefined === "undefined")
{
  alert("arithmetic.js requires math.js");
}

function Arithmetic()
{
  this.maths = [new BasicArithmetic(), new ComplexArithmetic(), new DecimalArithmetic(), new FractionArithmetic(), new ImproperArithmetic(), new MixedArithmetic()];
  this.mathProbabilities = [1,1,1,1,1,1];
}

Arithmetic.prototype.SetSectionProbabilities = function(basic,complex,decimal,fraction,improper,mixed)
{
  this.mathProbabilities = [basic,complex,decimal,fraction,improper,mixed];
  this.myMath = undefined;
  this.operators = [1,1,1,1];
}

Arithmetic.prototype.SetOperators = function(add,sub,mult,div)
{
  this.operators = [add,sub,mult,div];
}

Arithmetic.prototype.SelectArithmetic = function()
{
  var total = 0;

  for(let i=0;i<this.mathProbabilities.length;i++)
  {
    total+=this.mathProbabilities[i];
  }

  var index = Random()*total;

  var sum = total;
  for(let i=this.mathProbabilities.length-1;i>0;i--)
  {
    sum -= this.mathProbabilities[i];

    if(index>=sum)
    {
      this.myMath = this.maths[i];
      return;
    }
  }
  this.myMath = this.maths[0];
}

Arithmetic.prototype.SelectProblem = function()
{
  if(typeof this.myMath === "undefined")
  {
    this.SelectArithmetic();
  }

  var op = Math.floor(Random()*4);
  while(this.operators[op]!=1)
  {
    op = Math.floor(Random()*4);
  }

  var val;
  switch(op)
  {
    case 0:
      val = this.myMath.getAddition();
      break;
    case 1:
      val = this.myMath.getSubtraction();
      break;
    case 2:
      val = this.myMath.getMultiplication();
      break;
    case 3:
      val = this.myMath.getDivision();
      break;
  }
  return val;
}

function BasicArithmetic()
{
  this.allowedDigits = [0,1,2,3,4,5,6,7,8,9];
}

BasicArithmetic.prototype.RestrictDigits = function(set)
{
  this.allowedDigits = set;
}

BasicArithmetic.prototype.pickTwoDigits = function()
{
  var answer = [0,0];
  answer[0] = this.allowedDigits[Math.floor(Random()*this.allowedDigits.length)];
  answer[1] = this.allowedDigits[Math.floor(Random()*this.allowedDigits.length)];
  return answer;
}

BasicArithmetic.prototype.getAddition = function()
{
  var dig = this.pickTwoDigits();

  if(Random())
  {
    return dig[0]+" + "+dig[1]+" = ";
  }
  else
  {
    return dig[1]+" + "+dig[0]+" = ";
  }
}

BasicArithmetic.prototype.getSubtraction = function()
{
  var dig = this.pickTwoDigits();

  if(dig[0]>dig[1])
  {
    return dig[0]+" &minus; "+dig[1]+" = ";
  }
  else
  {
    return dig[1]+" &minus; "+dig[0]+" = ";
  }
}

BasicArithmetic.prototype.getMultiplication = function()
{
  var dig = this.pickTwoDigits();

  if(Random())
  {
    return dig[0]+" &times; "+dig[1]+" = ";
  }
  else
  {
    return dig[1]+" &times; "+dig[0]+" = ";
  }
}

BasicArithmetic.prototype.getDivision = function()
{
  var dig = this.pickTwoDigits();

  while(dig[0]==0&&dig[1]==0)
  {
    dig = this.pickTwoDigits();
  }

  if(dig[0]==0)
  {
    return (dig[1]*dig[0]) + " &divide; "+dig[1]+" = ";
  }
  else
  {
    return (dig[1]*dig[0]) +" &divide; "+dig[0]+" = ";
  }
}

function ComplexArithmetic()
{
}

ComplexArithmetic.prototype.getAddition = function()
{
  var s="<table class='big'>";

  var num = Math.floor(Random()*5+1);
  if(Random()<.5)
  {
    num=1;
  }

  for(let i = 0;i<num;i++)
  {
    var a=Math.floor(Random()*1000);

    s+="<tr><td></td><td class='right'>";
    s+=a;
    s+="</td></tr>";
  }

  var b=Math.floor(Random()*1000);

  s+="<tr><td  class='under'>+</td><td  class='under right'>";
  s+=b;
  s+="</td></tr>";
  s+="</table>";

  return s;
}

ComplexArithmetic.prototype.getSubtraction = function()
{
  var a=Math.floor(Random()*1000);
  var b=Math.floor(Random()*1000);

  if(b>a)
  {
    var temp = a;
    a = b;
    b = temp;
  }

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>";
  s+=a;
  s+="</td></tr>";
  s+="<tr><td  class='under'>&minus;</td><td  class='under right'>";
  s+=b;
  s+="</td></tr>";
  s+="</table>";
  return s;
}

ComplexArithmetic.prototype.getMultiplication = function()
{
  var a=Math.floor(Random()*1000);
  var b=Math.floor(Random()*1000);

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>";
  s+=a;
  s+="</td></tr>";
  s+="<tr><td  class='under'>&times;</td><td  class='under right'>";
  s+=b;
  s+="</td></tr>";
  s+="</table>";
  return s;
}

ComplexArithmetic.prototype.getDivision = function()
{
  //var a=Math.floor(Random()*1000+10);
  var a=Math.floor(Random()*8+2);
  var b=Math.floor(Random()*100000+500);

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>";
  s+=b;
  s+="</td></tr>";
  s+="<tr><td  class='under'>&divide;</td><td  class='under right'>";
  s+=a;
  s+="</td></tr>";
  s+="</table>";
  return s;
}

function DecimalArithmetic()
{
}

DecimalArithmetic.prototype.getAddition = function()
{
  var s="<table class='big'>";

  if(Random()<.5)
  {
    var a=Math.floor(Random()*1000);
    var b=Math.floor(Random()*1000);

    s+="<tr><td></td><td class='right'>";
    s+=a;
    s+="."+Math.floor(Random()*10)+Math.floor(Random()*10);
    s+="</td></tr>";
    s+="<tr><td  class='under'>+</td><td  class='under right'>";
    s+=b;
    s+="."+Math.floor(Random()*10)+Math.floor(Random()*10);
    s+="</td></tr>";
  }
  else
  {
    var count = Math.floor(Random()*3+1);
    for(let i=0; i<count;i++)
    {
      var a=Math.floor(Random()*10000);
      var num = Math.floor(Random()*3+1);
      var dec = 1;
      for (let x = 0;x<num; x++)
      {
        dec *= 10;
      }

      var m = a % dec;
      a = Math.floor(a/dec);

      s+="<tr><td></td><td class='right'>";
      s+=a+"."+m;
      s+="</td></tr>";
    }

    var b=Math.floor(Random()*1000);
    s+="<tr><td  class='under'>+</td><td  class='under right'>";
    s+=b;
    s+="."+Math.floor(Random()*10)+Math.floor(Random()*10);
    s+="</td></tr>";
  }

  s+="</table>";

  return s;
}

DecimalArithmetic.prototype.getSubtraction = function()
{
  var a=Math.floor(Random()*10000);
  var num = Math.floor(Random()*3+1);
  var dec = 1;
  for (let x = 0;x<num; x++)
  {
    dec *= 10;
  }

  var m = a % dec;
  a = Math.floor(a/dec);
  var txtA = a+"."+m;
  a = a+(m/dec);

  var b=Math.floor(Random()*10000);
  num = Math.floor(Random()*3+1);
  dec = 1;
  for (let x = 0;x<num; x++)
  {
    dec *= 10;
  }

  m = b % dec;
  b = Math.floor(b/dec);
  var txtB = b+"."+m;
  b = b+(m/dec);

  if(b>a)
  {
    var temp = txtA;
    txtA = txtB;
    txtB = temp;
  }

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>"+txtA+"</td></tr>";
  s+="<tr><td class='under'>&minus;</td><td class='under right'>"+txtB;
  s+="</td></tr></table>";

  return s;
}

DecimalArithmetic.prototype.getMultiplication = function()
{
  var a=Math.floor(Random()*10000);
  var num = Math.floor(Random()*3+1);
  var dec = 1;
  for (let x = 0;x<num; x++)
  {
    dec *= 10;
  }

  var m = a % dec;
  a = Math.floor(a/dec);
  var txtA = a+"."+m;
  a = a+(m/dec);

  var b=Math.floor(Random()*100);
  num = Math.floor(Random()*3+1);
  dec = 1;
  for (let x = 0;x<num; x++)
  {
    dec *= 10;
  }

  m = b % dec;
  b = Math.floor(b/dec);
  var txtB = b+"."+m;
  b = b+(m/dec);

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>";
  s+=txtA;
  s+="</td></tr>";
  s+="<tr><td  class='under'>&times;</td><td  class='under right'>";
  s+=txtB;
  s+="</td></tr>";
  s+="</table>";

  return s;
}

DecimalArithmetic.prototype.getDivision = function()
{
  var a=Math.floor(Random()*1000);

  var s="<table class='big'>";
  s+="<tr><td></td><td class='right'>";
  s+=a;
  s+="."+Math.floor(Random()*10)+Math.floor(Random()*10);
  s+="</td></tr>";
  s+="<tr><td  class='under'>&divide;</td><td  class='under right'>";

  if(Random()>.5)
  {
    s+="."+Math.floor(Random()*10+1)+Math.floor(Random()*10);
  }
  else
  {
    s+=Math.floor(Random()*10+1)+"."+Math.floor(Random()*10+1);
  }
  s+="</td></tr>";
  s+="</table>";
  return s;
}

function FractionArithmetic()
{
  this.primes = [2,3,5,7];
}

FractionArithmetic.prototype.getDenominator = function()
{
  var answer = 1;
  var num = Math.floor(Random()*2+1);
  for(let i=0; i<num; i++)
  {
    answer *= this.primes[Math.floor(Random()*this.primes.length)];
  }
  return answer;
}

FractionArithmetic.prototype.getNumerator = function(max)
{
  var answer = 0;
  while(answer<max)
  {
    answer = this.getDenominator();
  }
  return answer;
}

var sameDenominator = 0;

FractionArithmetic.prototype.getAddition = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  if(n1==n2)
  {
    n2++;
  }

  if(sameDenominator)
  {
    d2=d1;
  }

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="+</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

FractionArithmetic.prototype.getSubtraction = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  if(n1==n2)
  {
    n2++;
  }

  if(sameDenominator)
  {
    d2=d1;
  }

  if((n1+0.0)/d1 < (n2+0.0)/d2)
  {
    var temp = n1;
    n1 = n2;
    n2 = temp;
    temp = d1;
    d1 = d2;
    d2 = temp;
  }

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&minus;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

FractionArithmetic.prototype.getMultiplication = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&times;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

FractionArithmetic.prototype.getDivision = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&divide;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

function ImproperArithmetic()
{
  this.primes = [2,3,5,7];
}

ImproperArithmetic.prototype.getDenominator = function()
{
  var answer = 1;
  var num = Math.floor(Random()*2+1);
  for(let i=0; i<num; i++)
  {
    answer *= this.primes[Math.floor(Random()*this.primes.length)];
  }
  return answer;
}

ImproperArithmetic.prototype.getNumerator = function(max)
{
  var answer = 1;
  var oldAnswer = 1;
  while(answer<max)
  {
    oldAnswer = answer;
    answer += Math.floor(Random()*9+1);
  }

  var num = Math.floor(Random()*3+2);
  while(answer<max*num)
  {
    oldAnswer = answer;
    answer += Math.floor(Random()*9+1);
  }
  return oldAnswer;
}

ImproperArithmetic.prototype.getAddition = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="+</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

ImproperArithmetic.prototype.getSubtraction = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  if((n1+0.0)/d1 < (n2+0.0)/d2)
  {
    var temp = n1;
    n1 = n2;
    n2 = temp;
    temp = d1;
    d1 = d2;
    d2 = temp;
  }

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&minus;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

ImproperArithmetic.prototype.getMultiplication = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&times;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

ImproperArithmetic.prototype.getDivision = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);

  var s="<table>";
  s+="<tr><td class='under center'>"+n1+"</td><td rowspan='2'>";
  s+="&divide;</td><td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

function MixedArithmetic()
{
  this.primes = [2,3,5,7];
}

MixedArithmetic.prototype.getWhole = function()
{
  return Math.floor(Random()*3+1);
}

MixedArithmetic.prototype.getDenominator = function()
{
  var answer = 1;
  var num = Math.floor(Random()*2+1);
  for(let i=0; i<num; i++)
  {
    answer *= this.primes[Math.floor(Random()*this.primes.length)];
  }
  return answer;
}

MixedArithmetic.prototype.getNumerator = function(max)
{
  var answer = 1;
  var oldAnswer = 1;
  while(answer<max)
  {
    oldAnswer = answer;
    answer += Math.floor(Random()*9+1);
  }
  return oldAnswer;
}

MixedArithmetic.prototype.getAddition = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);
  var w1=this.getWhole();
  var w2=this.getWhole();

  var s="<table>";
  s+="<tr><td rowspan='2'>"+w1+"</td><td class='under center'>"+n1+"</td>";
  s+="<td rowspan='2'>+</td><td rowspan='2'>"+w2+"</td>";
  s+="<td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

MixedArithmetic.prototype.getSubtraction = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);
  var w1=this.getWhole();
  var w2=this.getWhole();

  if(w1+((n1+0.0)/d1) < w2+((n2+0.0)/d2))
  {
    var temp = w1;
    w1 = w2;
    w2 = temp;
    temp = n1;
    n1 = n2;
    n2 = temp;
    temp = d1;
    d1 = d2;
    d2 = temp;
  }

  var s="<table>";
  s+="<tr><td rowspan='2'>"+w1+"</td><td class='under center'>"+n1+"</td>";
  s+="<td rowspan='2'>&minus;</td><td rowspan='2'>"+w2+"</td>";
  s+="<td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

MixedArithmetic.prototype.getMultiplication = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);
  var w1=this.getWhole();
  var w2=this.getWhole();

  var s="<table>";
  s+="<tr><td rowspan='2'>"+w1+"</td><td class='under center'>"+n1+"</td>";
  s+="<td rowspan='2'>&times;</td><td rowspan='2'>"+w2+"</td>";
  s+="<td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}

MixedArithmetic.prototype.getDivision = function()
{
  var d1=this.getDenominator();
  var d2=this.getDenominator();
  var n1=this.getNumerator(d1);
  var n2=this.getNumerator(d2);
  var w1=this.getWhole();
  var w2=this.getWhole();

  var s="<table>";
  s+="<tr><td rowspan='2'>"+w1+"</td><td class='under center'>"+n1+"</td>";
  s+="<td rowspan='2'>&divide;</td><td rowspan='2'>"+w2+"</td>";
  s+="<td class='under center'>"+n2+"</td><td rowspan='2'>=</td></tr>";
  s+="<tr><td class='center'>"+d1+"</td><td class='center'>"+d2+"</td></tr>";
  s+="</table>";

  return s;
}
