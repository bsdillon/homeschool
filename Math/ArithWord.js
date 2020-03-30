if(typeof MathDefined === "undefined")
{
  alert("ArithWord.js requires math.js");
}

function ArithWord()
{
}

ArithWord.prototype.RandomProblem = function()
{
  switch(Math.floor(Random()*4))
  {
    case 0:
      return this.Add();
      break;
    case 1:
      return this.LongAdd();
      break;
    case 2:
      return this.Subtract();
      break;
    case 3:
      return this.Multiply();
      break;
    case 4:
      return this.LongMultiply();
      break;
    case 5:
      return this.Divide();
      break;
    case 6:
      return this.LongDivide();
      break;
  }
}

ArithWord.prototype.Add = function()
{
  var destin = "to the store";
  var why = "to buy some things";
  var verb1 = "bought";
  var thing1 = "a tea set for"
  var n1m = 6
  var n1M = 15
  var preUnits = "$";
  var postUnits = "";
  var decimals = 2;
  var verb2 = "got";
  var thing2 = "a balloon for";
  var endPhrase = "her total be";
  var much="much";
  var n2m = 1
  var n2M = 5

  switch(Math.floor(Random()*6))
  {
    //case 0 is hanna buying at the store.
    case 1:
      destin = "to the aquarium";
      why = "to swim with the sharks";
      verb1 = "met with";
      thing1 = "a group of"
      n1m = 5
      n1M = 10
      preUnits = "";
      postUnits = "divers";
      decimals = 0;
      verb2 = "met";
      thing2 = "another";
      much = "many";
      endPhrase = "divers did she meet";
      n2m = 2
      n2M = 5
      break;
    case 2:
      destin = "to the shoe shop";
      why = "to buy pink sparkly shoes";
      verb1 = "bought";
      thing1 = "them for"
      n1m = 10
      n1M = 20
      preUnits = "$";
      postUnits = "";
      decimals = 2;
      verb2 = "got";
      thing2 = "rainbow laces for";
      much = "much";
      endPhrase = "her new shoes cost";
      n2m = 3
      n2M = 5
      break;
    case 3:
      destin = "Washington";
      why = "to watch a boat race";
      verb1 = "saw";
      thing1 = "a fleet of"
      n1m = 3
      n1M = 7
      preUnits = "";
      postUnits = "boats";
      decimals = 0;
      verb2 = "noticed";
      thing2 = "another";
      much = "many";
      endPhrase = "boats did she see";
      n2m = 2
      n2M = 5
      break;
    case 4:
      destin = "to the beach";
      why = "for crab research";
      verb1 = "found";
      thing1 = "a group of"
      n1m = 3
      n1M = 10
      preUnits = "";
      postUnits = "seashells";
      decimals = 0;
      verb2 = "uncovered";
      thing2 = "another";
      much = "many";
      endPhrase = "seashells did she collect";
      n2m = 3
      n2M = 10
      break;
    case 5:
      destin = "to Goodwill";
      why = "for some birthday presents";
      verb1 = "picked";
      thing1 = "some new dresses for"
      n1m = 10
      n1M = 30
      preUnits = "$";
      postUnits = "";
      decimals = 2;
      verb2 = "wanted";
      thing2 = "a pink bike for";
      much = "much";
      endPhrase = "do her presents cost";
      n2m = 10
      n2M = 20
      break;
  }
  var number1 = (Random()*(n1M-n1m)+n1m).toFixed(decimals);
  var number2 = (Random()*(n2M-n2m)+n2m).toFixed(decimals);

  var s = "Hanna went "+destin+" "+why+". First she "+verb1+" "+thing1+" "+preUnits+number1+postUnits;
  s+=". Then she "+verb2+" "+thing2+" "+preUnits+number2+postUnits+". How "+much+" will "+endPhrase+"?"
  s+=" Write down the problem and solve it."
 
  return s;
}

ArithWord.prototype.LongAdd = function()
{
  var thingLong = "the population of birds in Virginia";
  var things = "brids";
  var nm = 3;
  var nM = 10;
  var gm = 10;
  var gM = 40;

  switch(Math.floor(Random()*5))
  {
    //case 0 is bird watching.
    case 1:
      thingLong = "the hangars in the closets";
      things = "hangars";
      nm = 3;
      nM = 7;
      gm = 20;
      gM = 30;
      break;
    case 2:
      thingLong = "size of families in the neighborhood";
      things = "people";
      nm = 15;
      nM = 20;
      gm = 3;
      gM = 7;
      break;
    case 3:
      thingLong = "books in the library shelves";
      things = "books";
      nm = 7;
      nM = 15;
      gm = 15;
      gM = 30;
      break;
    case 4:
      thingLong = "cans in the store";
      things = "cans";
      nm = 5;
      nM = 15;
      gm = 21;
      gM = 40;
      break;
  }

  var number = Math.floor(Random()*(nM-nm)+nm);
  var groups = "";
  for(let i=1;i<number;i++)
  {
    groups += Math.floor(Random()*(gM-gm)+gm) + ", ";
  }
  groups += "and "+Math.floor(Random()*(gM-gm)+gm);

  var s = "Hanna is counting "+thingLong+". She counted "+number;
  s+=" groups. They were "+groups+". How many "+things+" were there in all?";
  return s;
}

ArithWord.prototype.Subtract = function()
{
  var verb = "is buying"
  var thing = "things at the store for"
  var totalm = 10;
  var totalM = 30;
  var preUnit = "$"
  var postUnit = ""
  var verb2 = "has"
  var much = "much"
  var verb3 = "change does she get"
  var decimal = 2;
  var excessm = 5;
  var excessM = 10;

  switch(Math.floor(Random()*4))
  {
    //case 0 is change at store
    case 1:
      verb = "is looking for"
      thing = "a group of missing toys. She has found"
      totalm = 5;
      totalM = 10;
      preUnit = ""
      postUnit = " toys"
      verb2 = "needs to find all"
      much = "many"
      verb3 = "toys are left to find"
      decimal = 0;
      excessm = 5;
      excessM = 10;
      break;
    case 2:
      verb = "is driving"
      thing = "to grandma's house which was"
      totalm = 45;
      totalM = 60;
      preUnit = ""
      postUnit = " miles away"
      verb2 = "is still"
      much = "many"
      verb3 = "miles has she driven"
      decimal = 1;
      excessm = -15;
      excessM = -25;
      break;
    case 3:
      verb = "is paying"
      thing = "the water bill for"
      totalm = 100;
      totalM = 200;
      preUnit = "$"
      postUnit = ""
      verb2 = "has always paid"
      much = "much"
      verb3 = "more is this bill than usual"
      decimal = 2;
      excessm = -25;
      excessM = -50;
      break;
  }
  var total = Math.floor((Random()*(totalM-totalm)+totalm)*Math.pow(10,decimal))/Math.pow(10,decimal);
  var largerAmount = Math.floor((Random()*(excessM-excessm)+total+excessm)*Math.pow(10,decimal))/Math.pow(10,decimal);

  var s = "Hanna "+verb+" "+thing+" "+preUnit+total+postUnit
  s+= ". She "+verb2+" "+preUnit+largerAmount+postUnit+". How "+much+" "+verb3+"?"
  s+=" Write down the problem and solve it."

  return s;
}

ArithWord.prototype.Multiply = function()
{
  var verb = "brought home";
  var preUnit = "";
  var postUnit = " bags of groceries";
  var mUnit = 3;
  var MUnit = 8;
  var decUnit = 0;
  var verb2 = "put";
  var preUnit2 = "";
  var postUnit2 = " cans in each";
  var mPart = 5;
  var MPart = 10;
  var decPart = 0;
  var much = "many";
  var verb3 = "cans are there";

  switch(Math.floor(Random()*4))
  {
    //case 0 grocery case above
    case 1:
      verb = "bought";
      preUnit = "";
      postUnit = " sleds";
      mUnit = 2;
      MUnit = 5;
      decUnit = 0;
      verb2 = "paid";
      preUnit2 = "$";
      postUnit2 = " each";
      mPart = 5;
      MPart = 10;
      decPart = 2;
      much = "much";
      verb3 = "did all the sleds cost";
      break;
    case 2:
      verb = "saw";
      preUnit = "";
      postUnit = " cars";
      mUnit = 5;
      MUnit = 15;
      decUnit = 0;
      verb2 = " also saw";
      preUnit2 = "";
      postUnit2 = " motorcycles";
      mPart = 3;
      MPart = 5;
      decPart = 0;
      much = "many";
      verb3 = "tires were there";
      break;
    case 3:
      verb = "cooked";
      preUnit = "";
      postUnit = " packs of hot dogs";
      mUnit = 5;
      MUnit = 20;
      decUnit = 0;
      verb2 = "took";
      preUnit2 = "";
      postUnit2 = " hot dogs from each pack";
      mPart = 8;
      MPart = 12;
      decPart = 0;
      much = "many";
      verb3 = "hot dogs are there";
      break;
  }

  var Units = Math.floor((Random()*(MUnit-mUnit)+mUnit)*Math.pow(10,decUnit))/Math.pow(10,decUnit);
  var parts = Math.floor((Random()*(MPart-mPart)+mPart)*Math.pow(10,decPart))/Math.pow(10,decPart);

  var s = "Daddy "+verb+" "+preUnit+Units+postUnit+". He "+verb2;
  s+= " "+preUnit2+parts+postUnit2+". How "+much+" "+verb3+"?"
  s+=" Write down the problem and solve it."

  return s;
}

ArithWord.prototype.LongMultiply = function()
{
}

ArithWord.prototype.Divide = function()
{
}

ArithWord.prototype.LongDivide = function()
{
}