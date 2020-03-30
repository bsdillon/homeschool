if(typeof MathDefined === "undefined")
{
  alert("areavolume.js requires math.js");
}

function AreaVolume()
{

}

AreaVolume.prototype.SelectProblem = function()
{
  var v = Math.floor(Random()*4);

  switch(v)
  {
    case 0:
      return Area();
      break;
    case 1:
      return Volume();
      break;
    case 2:
      return Surface();
      break;
    case 3:
      return Perimeter();
      break;
  }
}

function Area()
{
  var r = Math.floor(Random()*4);
  var img = "";  
  var s = "";

  switch(r)
  {
    case 0:
      //circle
      img = "./Math/Circle.png"
      r= Random();
      if(r>.333)
      {
        s="C="+Math.floor(Random()*30+20)+"<br>";
      }
      else if(r>.666)
      {
        s="D="+Math.floor(Random()*10+10)+"<br>";
      }
      else
      {
        s="R="+Math.floor(Random()*5+5)+"<br>";
      }
      break;
    case 1:
      //trapazoid
      img = "./Math/Trapazoid.png";
      if(Random()<.5)
      {
        //bases and height
        var b1 = Math.floor(Random()*10+5);
        var b2 = b1 + Math.floor(Random()*10+5);
        var h = Math.floor(Random()*5+5);
        s = "AB="+b1+"<br>DC="+b2+"<br>EA="+h+"<br>";
      }
      else
      {
        //partial bases and two edges of triangle
        var b1 = Math.floor(Random()*10+5);//top base
        var extra = Math.floor(Random()*5+5);
        var DE = b1 + extra;//bottom plus piece on left
        var FC = Math.floor(Random()*5+5);//piece on right
        var h = Math.floor(Random()*5+5);
        var s1 = (h+Math.floor(Random()*5+5));
        var s2 = Math.floor(Math.sqrt((h*h)+(DE*DE))+1);
        s = "AB="+b1+"<br>AE="+h+"<br>";
        if(Random()>.5)
        {
          s+="BC="+s1+"<br>DE="+DE+"<br>";
        }
        else
        {
          s+="AD="+s2+"<br>FC="+FC+"<br>";
        }
      }
      break;
    case 2:
      //triangle
      img = "./Math/Triangle.png";
      r= Random();
      if(r>.333)
      {
        //easy base and height
        var CF = Math.floor(Random()*10+15);
        var AB = Math.floor(Random()*5+10);

        s="CF="+CF+"<br>AB="+AB+"<br>";
      }
      else if(r>.666)
      {
        //have to figure out height
        var AC = Math.floor(Random()*15+25);
        var AE = Math.floor(Random()*5+5);
        var EC = AC-AE;
        var OD = Math.floor(Random()*5+5);
        var AO = Math.floor(Random()*5+5);
        var BD = Math.floor(Random()*5+5);

        s="AE="+AE+"<br>AC="+AC+"<br>OD="+OD+"<br>BD="+BD+"<br>AO="+AO+"<br>";
      }
      else
      {
        //have to figure out base
        var AD = Math.floor(Random()*10+15);
        var FB = Math.floor(Random()*5+10);
        var FC = Math.floor(Random()*10+AD);

        s="AD="+AD+"<br>FB="+FB+"<br>FC="+FC+"<br>";
      }
      break;
    case 3:
      //sector
      img = "./Math/Sector.png"
      s = "m&ang;"+Math.floor(Random()*45+90)+"<br>AB="+Math.floor(Random()*5+5)+"<br>";
    case 4:
      //paralellagram
      img="./Math/Parallelogram.png"
      r= Random();
      if(r<.5)
      {
        //side and height
        if(Random()<.5)
        {
          s="DF="+Math.floor(Random()*20+5)+"<br>";
        }
        else
        {
          s="EB="+Math.floor(Random()*20+5)+"<br>";
        }

        if(Random()<.5)
        {
          s+=" DC="+Math.floor(Random()*20+15)+"<br>";
        }
        else
        {
          s+=" AB="+Math.floor(Random()*20+15)+"<br>";
        }
      }
      else
      {
        //part side, height and angle
        var last = Math.floor(Random()*20+5);

        if(Random()<.5)
        {
          s="FB="+Math.floor(Random()*last+last)+"<br>";
        }
        else
        {
          s="DE="+Math.floor(Random()*last+last)+"<br>";
        }

        if(Random()<.5)
        {
          s+=" DF="+last+"<br>";
        }
        else
        {
          s+=" EB="+last+"<br>";
        }

        if(Random()<.5)
        {
          s+=" AD="+Math.floor(Random()*5+5+last)+"<br>";
        }
        else
        {
          s+=" BC="+Math.floor(Random()*5+5+last)+"<br>";
        }
      }
      break;
  }

  return "Find the area of the figure<br>"+s+"<img src='"+img+"' width='200'><br>";
}

function getNumber(min, Max, round)
{
  r= Random();
  r=r*(Max-min)+min;
  if(round)
  {
    return Math.floor(r);
  }
  else
  {
    return Math.floor(r*100)/100;
  }
}

function Volume()
{
  var r = Math.floor(Random()*4);
  var img = "";  
  var s = "";

  switch(r)
  {
    case 0:
      //cone
      img = "./Math/cone.png"
      s="h="+getNumber(10,15,false)+" C="+getNumber(15,30,false);
      break;
    case 1:
      //cube
      img = "./Math/cube.png"
      s="S="+getNumber(4,8,false);
      break;
    case 2:
      //cylinder
      img = "./Math/cylinder.png"
      s="h="+getNumber(10,15,false)+" C="+getNumber(15,30,false);
      break;
    case 3:
      //pyramid
      img = "./Math/pyramid.png"
      s="h="+getNumber(10,15,false)+" s="+getNumber(4,9,false);
      break;
    case 4:
      //sphere
      img = "./Math/sphere.png"
      s="C="+getNumber(15,30,false);
      break;
    case 5:
      //rectPrism
      img = "./Math/rectPrism.png"
      s="h="+getNumber(4,8,false)+" w="+getNumber(4,8,false)+" l="+getNumber(10,15,false);
      break;
    case 6:
      //triPrism
      img = "./Math/triPrism.png"
      s="h="+getNumber(4,8,false)+" w="+getNumber(4,8,false)+" l="+getNumber(5,10,false);
      break;
  }

  return "Find the volume of the figure<br>"+s+"<img src='"+img+"' width='200'><br>";
}

function Surface()
{
  var r = Math.floor(Random()*4);
  var img = "";  
  var s = "";

  switch(r)
  {
    case 0:
      //cone
      img = "./Math/cone.png"
      s="h="+getNumber(10,15,false)+" C="+getNumber(15,30,false);
      break;
    case 1:
      //cube
      img = "./Math/cube.png"
      s="S="+getNumber(4,8,false);
      break;
    case 2:
      //cylinder
      img = "./Math/cylinder.png"
      s="h="+getNumber(10,15,false)+" C="+getNumber(15,30,false);
      break;
    case 3:
      //pyramid
      img = "./Math/pyramid.png"
      s="h="+getNumber(10,15,false)+" s="+getNumber(4,9,false);
      break;
    case 4:
      //sphere
      img = "./Math/sphere.png"
      s="C="+getNumber(15,30,false);
      break;
    case 5:
      //rectPrism
      img = "./Math/rectPrism.png"
      s="h="+getNumber(4,8,false)+" w="+getNumber(4,8,false)+" l="+getNumber(10,15,false);
      break;
    case 6:
      //triPrism
      img = "./Math/triPrism.png"
      s="h="+getNumber(4,8,false)+" w="+getNumber(4,8,false)+" l="+getNumber(5,10,false);
      break;
  }

  return "Find the surface area of the figure<br>"+s+"<img src='"+img+"' width='200'><br>";
}

function Perimeter()
{
  var r = Math.floor(Random()*4);
  var img = "";  
  var s = "";

  switch(r)
  {
    case 0:
      //circle
      img = "./Math/Circle.png"
      if(Random()>.5)
      {
        s="D="+Math.floor(Random()*10+10)+"<br>";
      }
      else
      {
        s="R="+Math.floor(Random()*5+5)+"<br>";
      }
      break;
    case 1:
      //trapazoid
      img = "./Math/Trapazoid.png";
      if(Random()<.5)
      {
	//isoceles parallelogram
        var b1 = Math.floor(Random()*10+5);
        var b2 = b1 + Math.floor(Random()*10+5);
        var h = Math.floor(Random()*5+5);
        s = "AB="+b1+"<br>DC="+b2+"<br>AB="+h+"<br>&angle;D=&angle;C<br>";
      }
      else
      {
        //top base, bottom pieces, and height
        var AB = Math.floor(Random()*10+5);//top base
        var DE = Math.floor(Random()*5+5);//piece on left
        var FC = Math.floor(Random()*5+5);//piece on right
        var AE = Math.floor(Random()*5+5);
        var AD = Math.ceiling(Math.sqrt((AE*AE)+(DE*DE)));
        var BC = Math.ceiling(Math.sqrt((AE*AE)+(FC*FC)));

	//required top base and height
        s = "AB="+AB+"<br>AE="+AE+"<br>";

	//either side or bottom piece
        if(Random()>.5)
        {
          s+="DE="+DE+"<br>";
        }
        else
        {
          s+="AD="+AD+"<br>";
        }

	//either side or bottom piece
        if(Random()>.5)
        {
          s+="FC="+FC+"<br>";
        }
        else
        {
          s+="BC="+BC+"<br>";
        }
      }
      break;
    case 2:
      //triangle
      img = "./Math/Triangle.png";
      if(Random()>.5)
      {
        var AD = Math.floor(Random()*10+15);
        var BD = Math.floor(Random()*5+5);
        var DC = Math.floor(Random()*10+AD);

        s="AD="+AD+"<br>BD="+BD+"<br>DC="+DC+"<br>";
      }
      else
      {
        var CF = Math.floor(Random()*5+20);
        var AD = Math.floor(Random()*5+2+CF);

        s="CF="+CF+"<br>AD="+AD+"<br>AC=BC<br>";
      }
      break;
    case 3:
      //sector
      img = "./Math/Sector.png"
      s = "m&ang;"+Math.floor(Random()*45+90)+"<br>AB="+Math.floor(Random()*5+5)+"<br>";
    case 4:
      //paralellagram
      img="./Math/Parallelogram.png"
      //part side, height and angle
      var last = Math.floor(Random()*20+5);

      if(Random()<.5)
      {
        s="FB="+Math.floor(Random()*last+last)+"<br>";
      }
      else
      {
        s="DE="+Math.floor(Random()*last+last)+"<br>";
      }

      if(Random()<.5)
      {
        s+=" DF="+last+"<br>";
      }
      else
      {
        s+=" EB="+last+"<br>";
      }

      if(Random()<.5)
      {
        s+=" AD="+Math.floor(Random()*5+5+last)+"<br>";
      }
      else
      {
        s+=" BC="+Math.floor(Random()*5+5+last)+"<br>";
      }
      break;
  }

  return "Find the perimeter of the figure<br>"+s+"<img src='"+img+"' width='200'><br>";
}
