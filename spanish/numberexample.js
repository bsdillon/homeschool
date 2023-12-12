var specials = {
  0:"",
  10:"diez",
  11:"once",
  12:"doce",
  13:"trece",
  14:"catorce",
  15:"quince",
  16:"dieciséis",
  17:"diecisiete",
  18:"dieciocho",
  19:"diecinueve",
  21:"veintiuno",
  22:"veintidós",
  23:"veintitrés",
  24:"veinticuatro",
  25:"veinticinco",
  26:"veintiséis",
  27:"veintisiete",
  28:"veintiocho",
  29:"veintinueve",
  100:"cien",
  };

var singles = {
  0:"",
  1:"uno",
  2:"dos",
  3:"tres",
  4:"cuatro",
  5:"cinco",
  6:"seis",
  7:"siete",
  8:"ocho",
  9:"nueve",
  };

var tens = {
  0:"",
  2:"veinte",
  3:"treinta",
  4:"cuarenta",
  5:"cinquenta",
  6:"sesenta",
  7:"setenta",
  8:"ochenta",
  9:"noventa",
  };

var hundreds = {
  0:"",
  1:"ciento ",
  2:"dos cientos ",
  3:"tres cientos ",
  4:"cuatro cientos ",
  5:"quinientos ",
  6:"seicientos ",
  7:"setecientos ",
  8:"ocho cientos ",
  9:"novecientos ",
  };

var thousand = "mil"

function numberProblem(flag)
{
  var number = Math.floor(Random()*100000+1000);
  //var number = 100388;
  var lower = number % 1000;
  var upper = Math.floor(number/1000);

  var lText = parseHundreds(lower);
  var uText = parseHundreds(upper)+" "+thousand+" ";

  if (Random()>.5)
  {
    return "Write this number in Spanish:<br>"+number+"<br><span class='answer "+flag+"'>"+uText+lText+"</span><br>";
  }
  else
  {
    return "Write the number that correponds to the Spanish:<br>"+ uText+lText +"<br><span class='answer "+flag+"'>"+number+"</span><br>";
  }
}

function parseHundreds(number)
{
  var hundred = Math.floor(number/100);
  number = number - (hundred*100);
  if ((hundred*100) in specials)
  {
    hundred = specials[hundred*100]; //only applies to 100
  }
  else
  {
    hundred = hundreds[hundred]; // 200-900; 0 is also dealt with as an edge case
  }

  if(number==0)
  {
    return hundred; //numbers like 700 where du == 00
  }

  if (number in specials)
  {
    number = specials[number]; //numbers like 17 and 24
    return hundred+number;
  }

  var one = number%10;
  var ten = Math.floor(number/10);

  one = singles[one]
  and = " y "  // we assume it is c d y u
  if (one == "") // if there is no one it is c d only
  {
    and = ""
  }
  last = and+one;

  ten = tens[ten];
  end = ten+last // we assume it is d y u OR d
  if(ten=="") // if we have no d
  {
    end = one; // we don't even want and. just u
  }

  if(hundred=="") // return either d y u, d, or u, the case of du==00 is handled above
  {
    return end;
  }

  return hundred+" "+end;
}