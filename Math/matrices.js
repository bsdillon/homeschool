if(typeof MathDefined === "undefined")
{
  alert("conics.js requires math.js");
}

function AddMatrix()
{
  var m = Math.floor(Random()*3+1);
  var n = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&#9484;</td><td colspan='"+n+"'></td><td>&#9488;</td><td></td><td>&#9484;</td><td colspan='"+n+"'></td><td>&#9488;</td><tr>"

  for(let r=0;r<m;r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<n;c++)
    {
      num1 += "<td>"+Math.floor(Random()*21-11)+"</td>";
      num2 += "<td>"+Math.floor(Random()*21-11)+"</td>";
    }

    op="";
    if(r==0)
    {
      op = "+";
    }

    s+="<tr><td>&#9474;</td>"+num1+"<td>&#9474;</td><td>"+op+"</td><td>&#9474;</td>"+num2+"<td>&#9474;</td></tr>";
  }

  s += "<tr><td>&#9492;</td><td colspan='"+n+"'></td><td>&#9496;</td><td></td><td>&#9492;</td><td colspan='"+n+"'></td><td>&#9496;</td><tr></table>"
  return s;
}

function SubtractMatrix()
{
  var m = Math.floor(Random()*3+1);
  var n = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&#9484;</td><td colspan='"+n+"'></td><td>&#9488;</td><td></td><td>&#9484;</td><td colspan='"+n+"'></td><td>&#9488;</td><tr>"

  for(let r=0;r<m;r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<n;c++)
    {
      num1 += "<td>"+Math.floor(Random()*21-11)+"</td>";
      num2 += "<td>"+Math.floor(Random()*21-11)+"</td>";
    }

    op="";
    if(r==0)
    {
      op = "&minus;";
    }

    s+="<tr><td>&#9474;</td>"+num1+"<td>&#9474;</td><td>"+op+"</td><td>&#9474;</td>"+num2+"<td>&#9474;</td></tr>";
  }

  s += "<tr><td>&#9492;</td><td colspan='"+n+"'></td><td>&#9496;</td><td></td><td>&#9492;</td><td colspan='"+n+"'></td><td>&#9496;</td><tr></table>"
  return s;
}

function MultMatrix()
{
  var m1 = Math.floor(Random()*3+1);
  var j = Math.floor(Random()*3+1);
  var n2 = Math.floor(Random()*3+1);

  var s = "<table><tr><td>&#9484;</td><td colspan='"+j+"'></td><td>&#9488;</td><td></td><td>&#9484;</td><td colspan='"+n2+"'></td><td>&#9488;</td><tr>"

  var Rmax = Math.max(m1,j);

  for(let r=0;r<Rmax;r++)
  {
    var num1 = "";
    var num2 = "";
    for(let c=0;c<j;c++)
    {
      num1 += "<td>"+Math.floor(Random()*21-11)+"</td>";
    }

    for(let c=0;c<n2;c++)
    {
      if(r>=j)
      {
        num2 += "<td></td>";
      }
      else
      {
        num2 += "<td>"+Math.floor(Random()*21-11)+"</td>";
      }
    }

    op="";
    if(r==0)
    {
      op = "&times;";
    }

    s+="<tr><td>&#9474;</td>"+num1+"<td>&#9474;</td><td>"+op+"</td><td>&#9474;</td>"+num2+"<td>&#9474;</td></tr>";
  }

  s += "<tr><td>&#9492;</td><td colspan='"+j+"'></td><td>&#9496;</td><td></td><td>&#9492;</td><td colspan='"+n2+"'></td><td>&#9496;</td><tr></table>"
  return s;
}

function DetermineMatrix()
{
  var m = Math.floor(Random()*1+2);

  var s = "Find the determinant<br><table><tr><td>&#9474;</td><td colspan='"+m+"'></td><td>&#9474;</td><tr>"

  for(let r=0;r<m;r++)
  {
    var num = "";
    for(let c=0;c<m;c++)
    {
      num += "<td>"+Math.floor(Random()*21-11)+"</td>";
    }

    s+="<tr><td>&#9474;</td>"+num+"<td>&#9474;</td></tr>";
  }

  s += "<tr><td>&#9474;</td><td colspan='"+m+"'></td><td>&#9474;</td><tr></table>"
  return s;
}
