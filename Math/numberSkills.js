if(typeof MathDefined === "undefined")
{
  alert("numberSkills.js requires math.js");
}

function NumberSkills()
{
}

NumberSkills.prototype.SelectSkill = function()
{
  switch(Math.floor(Random()*1))
  {
    case 0:
      return this.Round();
      break;
  }
}

NumberSkills.prototype.Round = function()
{
  var s = "";

  let x = Math.floor(Random()*3+2);
  let y = Math.floor(Random()*3);
  let place = 10**x;
  let val = Random();
  while(val<place)
  {
    val = val*10;
  }

  while(y>0)
  {
    val = val*10;
    y--;
  }

  return "Round "+Math.floor(val)+" to the nearest "+place;
}

NumberSkills.prototype.Convert = function()
{
  var s = "<i>Fill in the table by converting these values</i><br><table class='bordered'>"
  s+="<tr><th>Fraction</th><th>Decimal</th><th>Percent</th></tr>";

  for(let x = 0;x<3;x++)
  {
    var d=Math.floor(Random()*10+5);
    var n=Math.floor(Random()*d+1);
    var frac = n+"/"+d;
    var dec = Math.floor(100*(n+0.0)/d);
    var percent = dec;
    var dec = dec/100;
    var decText = ""+dec;
    if(dec<1)
    {
      decText ="0"+dec+"0";
    }

    if(x==0)
    {
      s+="<tr><td>"+frac+"</td><td></td><td></td></tr>";
    }
    else if(x==1)
    {
      s+="<tr><td></td><td>"+dec+"</td><td></td></tr>";
    }
    else
    {
      s+="<tr><td></td><td></td><td>"+percent+"%</td></tr>";
    }
  }

  s+="</table>";

  return s;
}
