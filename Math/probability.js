if(typeof MathDefined === "undefined")
{
  alert("probability.js requires math.js");
}

function AssortmentsSelection() {
  var temp = "<p>A bag of assorted candies includes ";
  var dark = Math.floor(Random()*10+1);
  var white = Math.floor(Random()*10+1);
  var choc = Math.floor(Random()*10+1);
  temp += dark+" dark, "+white+" white, and "+choc+" regular chocolates.<br>";
  var r = Math.floor(Random()*3);
  var type = ["dark","white","regular"];
  temp += "Express the probability of pulling a "+type[r]+" candy as a fraction, a decimal, and a percentage.</p>";
  return temp;
}

function n_choose_r() {
  var people = Math.floor(Random()*3)+2
  var games = [["5 card stud",5], ["cribbage",6], ["rummy", 7], ["gin", 10]];
  var g = Math.floor(Random()*games.length);
  var tmp = "You are playing a game of "+games[g][0]+" with a group of "+people+" friends."
  tmp += "That means "+games[g][1]+" cards per hand. How many unique deals could you play?"
  tmp += " Remember that in a 'hand' the order will not matter, but in a deal each hand has to go to the right person."
  return tmp;
}

function n_permute_r() {
  var classes =["Art","Baseball","Computers","Driving","Electronics","Future Businessman","Geography","History","Individual Finances","Jazz","Karate","Latin","Math","National Government","Ocean Studies","Pre-calculus","Qualifying Exams","Robotis","Spanish","Trigonometry","University Prep","Vocal Music","Water Conservation","Xenobiology","Youth Government","Zoolology"]
  var selected = [];
  var c = Math.floor(Random()*5+10);
  list = "<b>";
  while(selected.length<c)
  {
    var next = Math.floor(Random()*26);
    if(selected.indexOf(next)<0)
    {
      selected.push(next);
      list+=classes[next]+"&nbsp;&nbsp;***&nbsp;&nbsp;";
      if(selected.length%5==0)
      {
        list+="<br>";
      }
    }
  }
  list +="</b>"

  var tmp = "At A-B High the senior class is picking their schedules from the class list below."
  tmp += "If the students have to select 5 classes how many unique class schedules can be selected?"
  tmp += " Remember that the order of classes matter.<br>"
  tmp += list;
  return tmp;
}

function repetition() {
  var words = ["Ferrocarril", "Mesosaur", "Fullfilled", "Insurrection", "Historicity", "Minnesotta", "Lightning", "Telephone", "Preindustrial", "Nova Scotia", "Uruaguay", "Beattific"];
  var w = Math.floor(Random()*words.length);
  var len = words[w].length;
  var tmp = "How many unique "+len+"-length 'words' can you create by recombining the letters of "+words[w]+"?";
  return tmp;
}

function Factorial() {
  var temp = "<p>Expand ";
  var top = Math.floor(Random()*10+3);
  var bottom = Math.floor(Random()*10+3);
  temp += top + "! / "+bottom+"! and then show the remainder.</p>"

  return temp
}

function CountCases() {
  var temp = "How many different license plates can have ";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  num = Math.floor(Random()*5+3);
  temp += num+" digits in the format ";
  count = Math.floor(Random()*(num-2))+2;
  for(let i=0;i<num;i++) {
    char = "#"
    if(Random()<.72 && count>0) {
      char = "X";
      count-=1;
    }
    temp+=char
  }
  temp+="?";
  return temp;
}

function CountCases2() {
  var temp = "<p>A bag of assorted marbles includes ";
  var red = Math.floor(Random()*5+1);
  var blue = Math.floor(Random()*5+1);
  var yellow = Math.floor(Random()*5+1);
  temp += red+" red, "+blue+" blue, and "+yellow+" yellow.<br>";
  num = Math.floor(Random()*3+1);
  temp += "If you select "+num+" how many unique permutations can you get?<br>How many unique combinations can you get?</p>";
  return temp;
}

function venn() {
  var temp = "Draw a venn diagram that demonstrates the relationship below. Be sure to label all areas with at least ONE object.<br>";
  r = Random();
  if(r<.36) {
    if(Random()<.5){
      temp += "A &cup; B"
    }
    else {
      temp += "A &cap; B"
    }

    r2 = Random();
    if(r2<.33){
      temp += " &cup; C"
    }
    else if(r2<.67){
      temp += " &cap; C"
    }
  }
  else if(r<.54) {
    if(Random()<.5){
      temp += "A + B"
    }
    else {
      temp += "A &minus; B"
    }
  }
  else if(r<.72) {
    if(Random()<.5){
      temp += "x &isin; A"
    }
    else {
      temp += "x &notin; A"
    }
  }
  else {
    r2 = Random();
    if(r2<.33){
      temp += "A &sub; B"
    }
    else if(r2<.67){
      temp += "A &nsub; B"
    }
    else {
      temp += "A &sube; B"
    }
  }

  return temp+"<br>";
}

function alienAdditionRule()
{
  var temp = "<p>You are introduced to a random member of a visiting alien delegation wearing colored robes.<br>";
  temp += "<table class='score'><tr><th> </th><th>Tall</th><th>Short</th><th>Fat</th></tr>"
  tr = Math.floor(Random()*20+1);
  sr = Math.floor(Random()*20+1);
  fr = Math.floor(Random()*20+1);
  red = tr+sr+fr;
  tg = Math.floor(Random()*20+1);
  sg = Math.floor(Random()*20+1);
  fg = Math.floor(Random()*20+1);
  green = tg+sg+fg;
  tb = Math.floor(Random()*20+1);
  sb = Math.floor(Random()*20+1);
  fb = Math.floor(Random()*20+1);
  blue = tb+sb+fb;
  tall = tr+tg+tb;
  short = sr+sg+sb;
  fat = fr+fg+fb;
  total = tall+short+fat
  temp += "<tr><th>Red</th>  <td>"+tr+"</td><td>"+sr+"</td><td>"+fr+"</td><td>"+red+"</td></tr>"
  temp += "<tr><th>Green</th><td>"+tg+"</td><td>"+sg+"</td><td>"+fg+"</td><td>"+green+"</td></tr>"
  temp += "<tr><th>Blue</th> <td>"+tb+"</td><td>"+sb+"</td><td>"+fb+"</td><td>"+blue+"</td></tr>"
  temp += "<tr><th></th>     <td>"+tall+"</td><td>"+short+"</td><td>"+fat+"</td><td>"+total+"</td></tr>"
  
  sets = ["meeting a tall alien","meeting a short alien","meeting a fat alien","meeting an alien in red robes","meeting an alien in green robes","meeting an alien in blue robes"];
  s1 = Math.floor(Random()*sets.length);
  s2 = Math.floor(Random()*sets.length);
  while(s1==s2){
    s2 = Math.floor(Random()*sets.length);
  }
  temp += "</table>P(A)=Probability of "+sets[s1]+"<br>P(B)=Probability of "+sets[s2]+"<br><br>";

  combination = ["A and B","A or B","A but not B","B but not A"];
  c1 = Math.floor(Random()*combination.length);
  temp += "What is the probability of P("+combination[c1]+")?</p>";

  return temp;
}

function dataProbability()
{
  var temp = "<p>The data below shows the weight of corn ears harvested at one farm.";
  n1 = Math.floor(Random()*9+1);
  n2 = Math.floor(Random()*9+1);
  while(n1==n2){n2 = Math.floor(Random()*9+1);}
  if(n1>n2){tp=n1;n1=n2;n2=tp;}
  temp+="Based on this data, what is the probability of harvesting an ear ";
  r = Random();
  if(r<.33) {
    temp+="weighing less than 6."+n1+" oz?";
  }
  else if(r<.67) {
    temp+="weighing more than 6."+n2+" oz?";
  }
  else {
    temp+="weighing between 6."+n1+" oz and 6."+n2+" oz?";
  }

  temp+="<br><table class='unpadded'>";

  sets = [0,0,0,0,0,0,0,0,0,0]

  for(let i=0;i<5;i++){
    temp+="<tr>"

    for(let j=0;j<sets.length;j++){
      if(sets[j]==0 && Random()<.22) { sets[j]=1; }
      char = "&nbsp;"
      if(sets[j]==1) { char="*"; }

      if(i==4){
        temp += "<th class='under'>"+char+"</th>";
      }
      else {
        temp += "<th>"+char+"</th>";
      }
    }
    temp+="</tr>"
  }

  temp+="<tr>"
  for(let j=0;j<sets.length;j++){
    temp+="<th class='rotate'>6."+j+"oz&nbsp;&nbsp;</th>";
  }
  temp+="</tr>"


  return temp;
}