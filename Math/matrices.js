if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

function AddMatrix()
{
  var m = Math.floor(Random()*3+1);
  var n = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr>"

  for(let r=0;r<m,r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<n;c++)
    {
      num1 += Math.floor(Random()*21-11)+" ";
      num2 += Math.floor(Random()*21-11)+" ";
    }

    op="";
    if(r==0)
    {
      op = "+";
    }

    s+="<tr><td>&186;</td><td>"+num1+"</td><td>&186;</td><td>"+op+"</td><td>&186;</td><td>"+num2+"</td><td>&186;</td></tr>";
  }

  s += "<tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr></table>"
  return s;
}

function SubtractMatrix()
{
  var m = Math.floor(Random()*3+1);
  var n = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr>"

  for(let r=0;r<m,r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<n;c++)
    {
      num1 += Math.floor(Random()*21-11)+" ";
      num2 += Math.floor(Random()*21-11)+" ";
    }

    op="";
    if(r==0)
    {
      op = "&minus;";
    }

    s+="<tr><td>&186;</td><td>"+num1+"</td><td>&186;</td><td>"+op+"</td><td>&186;</td><td>"+num2+"</td><td>&186;</td></tr>";
  }

  s += "<tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr></table>"
  return s;
}

function MultMatrix()
{
  var m1 = Math.floor(Random()*3+1);
  var j = Math.floor(Random()*3+1);
  var n2 = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr>"

  var Rmax = Math.max(m1,j);

  for(let r=0;r<Rmax,r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<j;c++)
    {
      num1 += Math.floor(Random()*21-11)+" ";
    }

    for(let c=0;c<n2;c++)
    {
      num2 += Math.floor(Random()*21-11)+" ";
    }

    if(r>=j)
    {
      num2 = "";
    }

    op="";
    if(r==0)
    {
      op = "&times;";
    }

    s+="<tr><td>&186;</td><td>"+num1+"</td><td>&186;</td><td>"+op+"</td><td>&186;</td><td>"+num2+"</td><td>&186;</td></tr>";
  }

  s += "<tr><td>&214;</td><td></td><td>&183;</td><td></td><td>&214;</td><td></td><td>&183;</td><tr></table>"
  return s;
}

function SubtractMatrix()
{
  var m = Math.floor(Random()*1+2);

  var s = "Find the determinant<br><table><tr><td>&214;</td><td></td><td>&183;</td><tr>"

  for(let r=0;r<m,r++)
  {
    var num = "";
    for(let c=0;c<n;c++)
    {
      num += Math.floor(Random()*21-11)+" ";
    }

    s+="<tr><td>&186;</td><td>"+num+"</td><td>&186;</td></tr>";
  }

  s += "<tr><td>&214;</td><td></td><td>&183;</td><tr></table>"
  return s;
}
