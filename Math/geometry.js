if(typeof MathDefined === "undefined")
{
  alert("geometry.js requires math.js");
}

function Geometry()
{

}

Geometry.prototype.SelectProblem = function(v)
{
  switch(v)
  {
    case 1:
      return VerticalAngles();
      break;
    case 2:
      return ParallelAngles();
      break;
    case 3:
      return ParallelLines();
      break;
    case 4:
       return ExternalAngle1();
      break;
    case 6:
      return ExternalAngle3();
      break;
    case 7:
      return Diagram1();
      break;
    case 8:
      return Area();
      break;
    case 9:
      return CircleLines();
      break;
  }
}

function CircleLines()
{
  var img = "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Aed1fd0980e9cdf0a325aa50e7d4d08af5d1ef55e68a76e6227c26303%2BIMAGE_TINY%2BIMAGE_TINY.1"

  var s= "Name a line segment which match the term below:<br><ul>";
  s+="<li>Radius</li><li>Diameter</li><li>Tangent</li><li>Secant</li>";
  s+="<li>Chord</li></ul><br><img src='"+img+"' width='200'>";

  return s;
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
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Circle-withsegments.svg/1200px-Circle-withsegments.svg.png"
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
      img = "https://i.stack.imgur.com/N4LOq.png";
      if(Random()<.5)
      {
        //bases and height
        var b1 = Math.floor(Random()*10+5);
        var b2 = b1 + Math.floor(Random()*10+5);
        var h = Math.floor(Random()*5+5);
        s = "AB="+b1+"<br>DC="+b2+"<br>EB="+h+"<br>";
      }
      else
      {
        //partial bases and two edges of triangle
        var b1 = Math.floor(Random()*10+5);//top base
        var extra = Math.floor(Random()*5+5);
        var DE = b1 + extra;//bottom plus piece on left
        var EC = Math.floor(Random()*5+5);//piece on right
        var h = Math.floor(Random()*5+5);
        var s1 = (h+Math.floor(Random()*5+5));
        var s2 = Math.floor(Math.sqrt((h*h)+(DE*DE))+1);
        s = "AB="+b1+"<br>EB="+h+"<br>";
        if(Random()>.5)
        {
          s+="BC="+s1+"<br>DE="+DE+"<br>";
        }
        else
        {
          s+="BD="+s2+"<br>EC="+EC+"<br>";
        }
      }
      break;
    case 2:
      //triangle
      img = "https://www.easycalculation.com/analytical/images/triangle-orthocenter.JPG";
      r= Random();
      if(r>.333)
      {
        var a1 = Math.floor(Random()*5+5);
        var l1 = Math.floor(Random()*10+10);
        var l2 = Math.floor(Random()*10+10);
        var h = Math.floor(Random()*5+Math.max(l1,l2)+5);

        s="OC="+h+"<br>OD="+l1+"<br>OE="+l2+"<br>OF="+a1+"<br>";
      }
      else if(r>.666)
      {
        var a1 = Math.floor(Random()*45+45);
        var a2 = Math.floor(Random()*45+45);
        var a3 = 180-a1-a2;
        var l1 = Math.floor(Random()*10+5);
        var l2 = Math.floor(Random()*10+5);
        var l3 = Math.floor(Random()*10+5);

        s="OF="+l1+"<br>OD="+l2+"<br>OE="+l3+"<br>&ang;FOD="+a1+"<br>&ang;FOE="+a2+"<br>";
      }
      else
      {
        var b1 = Math.floor(Random()*10+10);
        var h = Math.floor(Random()*l1+5);

        s="BC="+b1+"<br>DA="+h+"<br>";
      }
      break;
    case 3:
      //sector
      img = "https://vt-s3-files.s3.amazonaws.com/uploads/problem_question_image/image/222/SectorABC.jpg"
      s = "m&ang;"+Math.floor(Random()*45+90)+"<br>";
    case 4:
      //paralellagram
      img="https://s3mn.mnimgs.com/img/shared/content_ck_images/images/111111111111111111111111111(2).png"
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
          s="DC="+Math.floor(Random()*20+15)+"<br>";
        }
        else
        {
          s="AB="+Math.floor(Random()*20+15)+"<br>";
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
          s="DF="+last+"<br>";
        }
        else
        {
          s="EB="+last+"<br>";
        }

        if(Random()<.5)
        {
          s="AD="+Math.floor(Random()*5+5+last)+"<br>";
        }
        else
        {
          s="BC="+Math.floor(Random()*5+5+last)+"<br>";
        }
      }
      break;
  }

  return "Find the area of the figure<br>"+s+"<img src='"+img+"' width='200'><br>";
}

function Diagram1()
{
   var img = "https://plato.stanford.edu/entries/diagrams/figure1.png";

   var s = "Use the information below to fill in the angles on this diagram.<br><ul>";

   var r = Random();

   var abc=Math.floor(90-Random()*30);  
   var bac=Math.floor(90-Random()*30);
   if(r<.333)
   {
     bac=abc;
   }
   var acb=180-abc-bac;
   var acd=bac+abc;

   if(r<.333)
   {
     //ABC is isosceles
     s+="<li>AC=BC</li>";
     r = Random();
     if(r<.333)
     {
       s+="<li>m&ang;ABC="+abc+"</li>";
     }
     else if(r<.667)
     {
       s+="<li>m&ang;ACB="+acb+"</li>";
     }
     else
     {
       s+="<li>m&ang;BAC="+bac+"</li>";
     }
   }
   else if(r<.667)
   {
     //give two angles of ABC
     r = Random();
     if(r<.333)
     {
       s+="<li>m&ang;ABC="+abc+"</li>";
       s+="<li>m&ang;BAC="+bac+"</li>";
     }
     else if(r<.667)
     {
       s+="<li>m&ang;ACB="+acb+"</li>";
       s+="<li>m&ang;BAC="+bac+"</li>";
     }
     else
     {
       s+="<li>m&ang;ACB="+acb+"</li>";
       s+="<li>m&ang;ABC="+abc+"</li>";
     }
   }
   else
   {
     //give one angle of ABC and ACD
     r = Random();
     if(r<.333)
     {
       s+="<li>m&ang;ABC="+abc+"</li>";
     }
     else if(r<.667)
     {
       s+="<li>m&ang;ABC="+acb+"</li>";
     }
     else
     {
       s+="<li>m&ang;BAC="+bac+"</li>";
     }
     s+="<li>m&ang;ACD="+acd+"</li>";
   }

   r = Random();

   var temp = Math.floor(acd/2);
   var fcd=Math.floor(flip(Random()*(temp/2))+temp);
   var acf=acd-fcd;
   
   if(r<.25)
   {
     //AB is parallel to CF
     s+="<li>AB is parallel to CF</li>";
     fcd = abc;//parallel angles
     acf=acd-fcd;
   }
   else
   {
       s+="<li>m&ang;FCD="+fcd+"</li>";
   }

   temp = abc/2;
   var abf=Math.floor(flip(Random()*(temp/2))+temp);
   var aeb= 180-abf-bac;

   if(r>.75)
   {
     if(180-bac>90)
     {
       aef=90;
       abf=180-bac-aeb;
     }
     else
     {
       r=.6;//disallow perpendicular lines
     }
   }

   if(r<.25)
   {
     //AB is parallel to CF
     //need one more angle

     if(Random()<.5)
     {
       s+="<li>m&ang;ABF="+abf+"</li>";
     }
     else
     {
       s+="<li>m&ang;BFC="+abf+"</li>";
     }
   }
   else if(r<.5)
   {
     //AEB
     s+="<li>m&ang;AEB="+aeb+"</li>";
   }
   else if(r<.75)
   {
     //AEF
     s+="<li>m&ang;AEF="+(180-aeb)+"</li>";
   }
   else
   {
     //BF perpendicular to AC
     s+="<li>BF &perp; AC</li>";
   }

   s+="</ul><br><img src='"+img+"' width='200'><br>";
   return s;
}

function ExternalAngle1()
{
   var img = "https://sites.google.com/site/mathclasstheatre/_/rsrc/1468874803999/geometry/1120/image.jpeg"

   //this one will ask the user to identify two of the missing three angles
   var a1=Math.floor(90+Random()*90);//exterior
   var a2=180-a1;//supplement
   var a3=Math.floor(Random()*a1);
   var a4=a1-a3;

   var s = "In the diagram below all lines are straight. The ";
   
   var x = Math.floor(Random()*5);
   switch(x)
   {
     case 0:
       s += "m&ang;ACD="+a1+" and m&ang;ABC="+a3;
       break;
     case 1:
       s += "m&ang;ACD="+a1+" and m&ang;BAC="+a4;
       break;
     case 2:
       s += "m&ang;ACB="+a2+" and m&ang;ABC="+a3;
       break;
     case 3:
       s += "m&ang;ACB="+a2+" and m&ang;BAC="+a4;
       break;
     case 4:
       s += "m&ang;ABC="+a3+" and m&ang;BAC="+a4;
       break;
   }

   s += ". Find ";

   switch(x)
   {
     case 0:
       s += "m&ang;ACB and m&ang;BAC";
       break;
     case 1:
       s += "m&ang;ACB and m&ang;ABC";
       break;
     case 2:
       s += "m&ang;ACD and m&ang;BAC";
       break;
     case 3:
       s += "m&ang;ACD and m&ang;ABC";
       break;
     case 4:
       s += "m&ang;ACB and m&ang;ACD";
       break;
   }

   s += ".<br><img src='"+img+"' width='250'><br>";
   return s;
}

function ExternalAngle3()
{
   var img = "https://sites.google.com/site/mathclasstheatre/_/rsrc/1468874803999/geometry/1120/image.jpeg"

   //this one will ask the user if the lines are parallel
   var a1=Math.floor(90+Random()*90);//exterior
   var a2=180-a1;//supplement
   var a3=Math.floor(Random()*a1);
   var a4=a1-a3;
   var a5=a3;//parallel   

   if(Random()<.5)
   {
     a5-=Math.floor(Random()*(a5/2));
   }
   var a6=a1-a5;

   var s = "In the diagram below, all lines are straight. Given these angles, are AB and CE parallel?<br>";
   
   switch(Math.floor(Random()*5))
   {
     case 0:
       s += "m&ang;ACD="+a1+", m&ang;ABC="+a3;
       if(Random()<.5)
       {
         s+=", and m&ang;ACE="+a5;
       }
       else
       {
         s+=", and m&ang;ECD="+a6;
       }
       break;
     case 1:
       s += "m&ang;ACD="+a1+", m&ang;BAC="+a4;
       if(Random()<.5)
       {
         s+=", and m&ang;ACE="+a5;
       }
       else
       {
         s+=", and m&ang;ECD="+a6;
       }
       break;
     case 2:
       s += "m&ang;ACB="+a2+", m&ang;ABC="+a3;
       if(Random()<.5)
       {
         s+=", and m&ang;ACE="+a5;
       }
       else
       {
         s+=", and m&ang;ECD="+a6;
       }
       break;
     case 3:
       s += "m&ang;ACB="+a2+", m&ang;BAC="+a4;
       if(Random()<.5)
       {
         s+=", and m&ang;ACE="+a5;
       }
       else
       {
         s+=", and m&ang;ECD="+a6;
       }
       break;
     case 4:
       s += "m&ang;ABC="+a3+", m&ang;BAC="+a4;
       if(Random()<.5)
       {
         s+=", and m&ang;ACE="+a5;
       }
       else
       {
         s+=", and m&ang;ECD="+a6;
       }
       break;
   }

   s += "<br><img src='"+img+"' width='250'><br>";
   return s;
}

function VerticalAngles()
{
   var img = "http://image.tutorvista.com/cms/images/38/vertical-angles-theorem.JPG";

   var s = "In the diagram below, m&ang;";
   
   switch(Math.floor(Random()*4))
   {
     case 0:
       s += "AOC";
       break;
     case 1:
       s += "BOC";
       break;
     case 2:
       s += "AOD";
       break;
     case 3:
       s += "BOD";
       break;
   }

   s += "="+Math.floor(Random()*120+30)+"&deg;. Find the measure of all four angles.<br><img src='"+img+"'><br>";
   return s;
}

function ParallelAngles()
{
   var img = "http://www.algebralab.org/img/51386f9f-0021-40f4-8ba9-4e289f214301.gif";

   var s = "In the diagram below <i>l&parallel;m</i>, m&ang;"+Math.floor(Random()*8+1);
   
   s += "="+Math.floor(Random()*120+30)+"&deg;. Find the measure of all 8 angles.<br><img src='"+img+"'><br>";
   return s;
}

function ParallelLines()
{
   var img = "http://www.drcruzan.com/Images/Mathematics/ParallelLines/ParallelTrasversalLabeledAngles.png";

   var angle1 = Math.floor(Random()*4+1);
   var mod1 = angle1 % 2;

   var angle2 = Math.floor(Random()*4+5);
   var mod2 = angle2 % 2;

   while(mod1==mod2)
   {
     angle2 = Math.floor(Random()*4+5);
     mod2 = angle2 % 2;
   }
   
   var m1 = Math.floor(Random()*120+30);
   var m2 = Math.floor(Random()*120+30);

   if(Random()>.5)
   {
     m2 = 180-m1;
   }

   var s = "In the diagram below m&ang;"+angle1+"="+m1+"&deg; and m&ang;"+angle2+"="+m2+"&deg;. Are lines a and b parallel?<br><img src='"+img+"'><br>";
   
   return s;
}
