if(typeof MathDefined === "undefined")
{
  alert("equations.js requires math.js");
}

function RandomStatProblem()
{
  var r = Random();
  if(r<.33)
  {
    return LinearRegression();
  }
  else if(r<.33)
  {
    return RandomDataSet();
  }
  else
  {
    return RandomClusters();
  }
}

function RandomClusters()
{
  var text = "Graph the data and find the center of each cluster:<br>";
  var num = Random()*4;
  for(var i=0;i<num;i++)
  {
    text += RandomCluster()+"; ";
  }
  text += RandomCluster();
  return text;
}

function RandomCluster()
{
  var text = "";
  var cX = Random()*20;
  var sX = .5;
  var cY = Random()*20;
  var sY = .5;

  var num = Random()*5+5;
  for(var i=0;i<num;i++)
  {
    var x = (Math.floor(RandomDataPoint(cX,sX)*10))/10;
    var y = (Math.floor(RandomDataPoint(cY,sY)*10))/10;
    text+="("+x+", "+y+"); ";
  }
    var x = (Math.floor(RandomDataPoint(cX,sX)*10))/10;
    var y = (Math.floor(RandomDataPoint(cY,sY)*10))/10;
    text+="("+x+", "+y+")";
    return text;
}

function LinearRegression()
{
  var b = Random()*10-5;
  var m = flip(Random()*1.0/Random());
  
  var minX = Random()*5;
  var maxX = Random()*20+10;

  var text = "Graph and find the mean-fit line for this data set:<br>";
  var c = Random()*10+10;
  var s = Random()*5+1;
  for(var i=0;i<9;i++)
  {
    var x = Math.floor((minX+(Random()*(maxX-minX)))*10)/10;
    var y = Math.floor((b + (m*x) + RandomDataPoint(c,s))*10)/10;
    text+="("+x+", "+y+"); ";
  }
  var x = Math.floor((minX+(Random()*(maxX-minX)))*10)/10;
  var y = Math.floor((b + (m*x) + RandomDataPoint(c,s))*10)/10;
  text+="("+x+", "+y+")<br><br>";
  text+="Find average x and y. That is the center of the line. For each point find x-XAvg and y-YAvg. Add up (x-XAvg)*(y-YAvg). Add up (x-XAvg)<sup>2</sup>. Divide (x-XAvg)*(y-YAvg)/(x-XAvg)<sup>2</sup>. That is the slope of the line.";
  return text;
}

function RandomDataSet()
{
  var text = "Find the mean and standard deviation of the data set:<br>";
  var c = Random()*10+10;
  var s = Random()*5+1;
  for(var i=0;i<9;i++)
  {
    text+=RandomDataPoint(c,s)+", ";
  }
  text+=RandomDataPoint(c,s);

  return text;
}

function RandomDataPoint(center, spread)
{
  var u = 1 - Random();
  var v = 1 - Random();

  var val = Math.sqrt(-2.0*Math.log(u))*Math.cos(2*Math.PI*v);

  //val is naturally centered on zero with spread of 2.
  return (val/2.0*spread)+center;
}
