if(typeof MathDefined === "undefined")
{
  alert("trig.js requires math.js");
}

function Powers()
{
  this.showAnswer=false
}

Powers.prototype.PrimeFactor = function()
{
  var s = "Represent this number as the product of prime squares.<br>";
  var values = [2,3,5,7,11];
  var counts = [0,0,0,0,0];
  var value = 1;
  var num = Math.floor(Random()*5+5);
  for(let i=0;i<num;i++)
  {
    var n = Math.floor(Random()*values.length);
    value = value * values[n];
    counts[n]++;
  }

  if (self.showAnswer)
  {
    var answer = "";
    for(let i=0;i<counts.length;i++)
    {
      if(counts[i]>0)
      {
        answer+=values[i]+"<sup>"+counts[i]+"</sup>";
      }
    }
  
    s+=value+"<br><div class='answer' name='answer'>";
  }
  s+=answer+"</div>";
  return s;
}

Powers.prototype.nRoot = function()
{
  var roots = ["&#x221A;","&#x221B;"];
  var rootIndex = Math.floor(Random()*2);
  var s = "Simplify<br>";
  s += roots[rootIndex]+"<span style='text-decoration:overline'>";

  var values = [2,3,5,7];
  var counts = [0,0,0,0];
  var value = 1;
  var num = Math.floor(Random()*5+5);
  for(let i=0;i<num;i++)
  {
    var n = Math.floor(Random()*values.length);
    value = value * values[n];
    counts[n]++;
  }

  var values2 = ['a','b','n','p','x','y'];
  var counts2 = [0,0,0,0,0,0];
  var num = Math.floor(Random()*5+2);

  for(let i=0;i<num;i++)
  {
    counts2[Math.floor(Random()*values.length)]++;
  }

  s+=value
  for(let i=0;i<counts2.length;i++)
  {
    if(counts2[i]>0)
    {
      counts2[i] = flip(counts2[i]);
      s+=values2[i]+"<sup>"+counts2[i]+"</sup>";
    }
  }
  s+="</span><br>";

  if (self.showAnswer)
  {
    //creating the answer
    var inval = 1;
    var outval = 1;
    for(let i=0;i<counts.length;i++)
    {
      if(counts[i]>=rootIndex+2)
      {
        var tmp = Math.floor(counts[i]/(rootIndex+2));
        outval*=Math.pow(values[i],tmp);
        counts[i]-=(tmp*(rootIndex+2));
      }
      inval*=Math.pow(values[i],counts[i]);
    }
    if(outval==1)
    {
      outval="";
    }
  
    var outside = "<div class='answer' name='answer'>"+outval;
  }
  var inside = roots[rootIndex]+"<span style='text-decoration:overline'>"+inval;

  var inval = "";
  var outval = "";
  for(let i=0;i<counts2.length;i++)
  {
    if(Math.abs(counts2[i])>=rootIndex+2)
    {
      var tmp = Math.floor(counts2[i]/(rootIndex+2));
      outval+=values2[i]+(tmp==1?"":"<sup>"+tmp+"</sup>");
      counts2[i]-=(tmp*(rootIndex+2));
    }

    if(Math.abs(counts2[i])>0)
    {
      inval+=values2[i]+(tmp==1?"":"<sup>"+counts2[i]+"</sup>");
    }
  }

  if (self.showAnswer)
  {
    outside +=outval;
    inside +=inval;
    s+= outside+inside+"</span>";
  }
  else
  {
    inside +=inval;
    s+= inside+"</span>";
  }

  s += "</div>"
  return s;
}

Powers.prototype.PowerRatio = function()
{
  var values = [2,3,5,7];
  var counts = [0,0,0,0];
  var value = 1;
  var num = Math.floor(Random()*2+2);
  for(let i=0;i<num;i++)
  {
    var n = Math.floor(Random()*values.length);
    value = value * values[n];
    counts[n]++;
  }

  var lenT = Math.log(value,10)+1;

  var top = value+"";
  var values2 = ['a','b','n','p','x','y'];
  var counts2 = [0,0,0,0,0,0];
  var num = Math.floor(Random()*5+5);

  for(let i=0;i<num;i++)
  {
    counts2[Math.floor(Random()*values2.length)]++;
  }

  for(let i=0;i<counts2.length;i++)
  {
    if(counts2[i]>0)
    {
      counts2[i]=flip(counts2[i]);
      top +=values2[i]+"<sup>"+counts2[i]+"</sup>";
      lenT+=2;
    }
  }

  var counts3 = [0,0,0,0];
  var value3 = 1;
  var num = Math.floor(Random()*2+2);
  for(let i=0;i<num;i++)
  {
    var n = Math.floor(Random()*values.length);
    value3 = value3 * values[n];
    counts3[n]++;
  }

  var lenB = Math.log(value3,10)+1;
  var bottom = value3+"";

  var counts4 = [0,0,0,0,0,0];
  var num = Math.floor(Random()*5+5);

  for(let i=0;i<num;i++)
  {
    counts4[Math.floor(Random()*values2.length)]++;
  }

  for(let i=0;i<counts4.length;i++)
  {
    if(counts4[i]>0)
    {
      counts4[i]=flip(counts4[i]);
      bottom +=values2[i]+"<sup>"+counts4[i]+"</sup>";
      lenB+=2;
    }
  }

  var s = "Simplify<br>"+top+" / "+bottom;

  var topVal =1;
  var bottomVal = 1;

  for(let i=0;i<counts.length;i++)
  {
    let tmp = counts[i]-counts3[i];
    if(tmp>0)
    {
      topVal*=Math.pow(values[i],tmp);
    }
    else if(tmp<0)
    {
      bottomVal*=Math.pow(values[i],-tmp);
    }
  }

  top = ""+topVal;
  bottom = ""+bottomVal;
  lenT = Math.log(topVal,10)+1;
  lenB = Math.log(bottomVal,10)+1;

  for(let i=0;i<counts2.length;i++)
  {
    let tmp = counts2[i]-counts4[i];
    if(tmp>0)
    {
      top+=values2[i]+"<sup>"+tmp+"</sup>";
      lenT+=2;
    }
    else if(tmp<0)
    {
      bottom+=values2[i]+"<sup>"+(-tmp)+"</sup>";
      lenB+=2;
    }
  }

  if (self.showAnswer)
  {
    var answer = "<div class='answer' name='answer'>"
    answer += top+" / "+bottom+"</div>";
  
    return s+answer;
  }
  return top;
}
