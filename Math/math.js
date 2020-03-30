var MathDefined = true;

var seed = 0;
var rng;

function RandomInit(staticValue,offset)
{
  if(staticValue)
  {
    var time= new Date().getTime();

    //less miliseconds since start of day
    //this corrects for gregorian calendar
    time -= new Date().getHours()*60*60*1000;

    time /= 1000*60*60*24;//miliseconds per day.

    seed = Math.floor(time)%1000+offset;
  }
  else
  {
    seed = Math.floor(1000*Math.random())/1000.0;
  }

  rng = new RNG(seed);
}

function RNG(s)
{
  this.m = 0X80000000;
  this.a = 1103515245;
  this.c = 12345;

  this.seed = s ? s : Math.floor(Math.random() * (this.m-1));
}

RNG.prototype.nextInt = function()
{
  this.seed = (this.a * this.seed + this.c) % (this.m-1);
  return this.seed;
}

RNG.prototype.nextFloat = function()
{
  return this.nextInt() / (this.m - 1);
}

function Random()
{
   return rng.nextFloat();
}

function flip(val)
{
  if(Random()>.5)
  {
    return val;
  }
  return -val;
}

function relation()
{
  rand = Random();
  if(rand<.2)
  {
    relText = "&lt;";
  }
  else if(rand<.4)
  {
    relText = "&le;";
  }
  else if(rand<.6)
  {
    relText = "&gt;";
  }
  else if(rand<.8)
  {
    relText = "&gt;";
  }
  else
  {
    relText = "=";
  }

  return relText;
}

