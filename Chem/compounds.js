var greekNumbers = {2:"di", 3:"tri", 4:"tetra"};

var UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LOWERS = "abcdefghijklmnopqrstuvwxyz"

   function stoichProblem()
   {
     ions = selectIons()
     formula = ions[0]
     name = ions[1]

     elementList = []
     soFar = ""
     for (let i = 0; i < formula.length; i++)
     {
       uIndex = UPPERS.indexOf(formula[i])
       lIndex = LOWERS.indexOf(formula[i])
       if(uIndex > -1 && soFar.length==0)
       {
         soFar = soFar+formula[i]  // this is either the first capital Hg or only capital H
       }
       else if (lIndex> -1 && soFar.length>0) // this is the ONLY lower case as in Hg
       {
         soFar = soFar+formula[i]
         elementList.push(soFar)
         soFar = ""
       }
       else if (uIndex >-1) //this is the SECOND capital and therefore a different element
       {
         elementList.push(soFar)
         soFar = formula[i]
       }
       else if (soFar.length>0) // this NOT a lower and not an upper
       {
         elementList.push(soFar)
         soFar = ""
       }
     }

     if (soFar.length>0) // Anything left
     {
       elementList.push(soFar)
       soFar = ""
     }

     NUMBER = Math.floor(Random()*10+5)

     return "If you have "+NUMBER+" atoms of "+elementList[Math.floor(Random()*elementList.length)]+", how many "+formula+" can you make? Will you have any left over?"
   }

   function selectIons()
   {
     pIon = SelectIon(true)
     nIon = SelectIon(false)

     x = pIon[2];
     y = -nIon[2];

     if(y>x)//switch order x greatest
     {
       var t = x;
       x = y;
       y = t
     }
     
     while(y) { //euclid method to find gcf
       var t = y;
       y = x % y;
       x = t;
     }
     gcf = x //x is gcf

     //most reduced numbers
     x = pIon[2]/gcf;
     y = -nIon[2]/gcf;

     formula = "";
     name = "";
     if(x==y)
     {
       formula = pIon[0]+nIon[0];
       name = pIon[1]+" "+nIon[1];
     }
     else
     {
       if(y>1 && pIon[3]>1)
       {
         //this is a multi-atom ion like NH4 so we
         //surround it with ( ) and add the number.
         formula = "("+pIon[0]+")<sub>"+y+"</sub>";
         name = pIon[1]+" ";
       }
       else if (y>1)
       {
         formula = pIon[0]+"<sub>"+y+"</sub>";
         name = greekNumbers[y]+pIon[1]+" ";

       }
       else
       {
         formula = pIon[0];
         name = pIon[1]+" ";
       }

       if(x>1 && nIon[3]>1)
       {
         //this is a multi-atom ion like NH4 so we
         //surround it with ( ) and add the number.
         formula += "("+nIon[0]+")<sub>"+x+"</sub>";
         name += nIon[1];
       }
       else if(x>1)
       {
         formula += nIon[0]+"<sub>"+x+"</sub>";
         name += greekNumbers[x]+nIon[1];
       }
       else
       {
         formula += nIon[0];
         name += nIon[1];
       }
     }
     return [formula, name]
   }

   function nameCompound()
   {
     ions = selectIons()
     formula = ions[0]
     name = ions[1]
     answer = ["Write the formula of the named molecule.<br>"+name,formula];
     if(Math.random()<.5)
     {
       answer[0] ="What is the name of this molecule?<br>"+formula;
       answer[1] =name;
     }

     answer[0] = answer[0] + "<br>Find the empirical formula, the molar mass, and the percent of molar mass from each element.";
     return answer;
   }

   function SelectIon(positive)
   {
     value = Math.floor(Math.random()*21);
     if(positive)
     {
       if(value<6)
       {
         var index = Math.floor(Math.random()*Object.keys(p1Ions).length);
         pIon = Object.keys(p1Ions)[index];
         return [pIon, p1Ions[pIon][0],1,p1Ions[pIon][2]]
       }
       else if(value<18)
       {
         var index = Math.floor(Math.random()*Object.keys(p2Ions).length);
         pIon = Object.keys(p2Ions)[index];
         return [pIon, p2Ions[pIon][0],2,p2Ions[pIon][2]]
       }
       else
       {
         var index = Math.floor(Math.random()*Object.keys(p3Ions).length);
         pIon = Object.keys(p3Ions)[index];
         return [pIon, p3Ions[pIon][0],3,p3Ions[pIon][2]]
       }
     }
     else
     {
       if(value<6)
       {
         var index = Math.floor(Math.random()*Object.keys(n1Ions).length);
         nIon = Object.keys(n1Ions)[index];
         return [nIon, n1Ions[nIon][0],-1,n1Ions[nIon][2]]
       }
       else if(value<18)
       {
         var index = Math.floor(Math.random()*Object.keys(n2Ions).length);
         nIon = Object.keys(n2Ions)[index];
         return [nIon, n2Ions[nIon][0],-2,n2Ions[nIon][2]]
       }
       else
       {
         var index = Math.floor(Math.random()*Object.keys(n3Ions).length);
         nIon = Object.keys(n3Ions)[index];
         return [nIon, n3Ions[nIon][0],-3,n3Ions[nIon][2]]
       }
     }
   }

   function CreateCompound()
   {
      var name = "";

      //some other chemical
      //positive ion
      var pIon = "";
      var pValence = 0;
      var pFormula = "";
      var pMass = 0;
      if(Math.random()<(6.0/21))
      {
        var index = Math.floor(Math.random()*Object.keys(p1Ions).length);
        pIon = Object.keys(p1Ions)[index];
        name += p1Ions[pIon][0];
        pFormula += pIon;
        pValence = 1;
        pMass = p1Ions[pIon][1];
      }
      else if(Math.random()<(18.0/21))
      {
        var index = Math.floor(Math.random()*Object.keys(p2Ions).length);
        pIon = Object.keys(p2Ions)[index];
        name += p2Ions[pIon];
        pFormula += Object.keys(p2Ions)[index];
        pValence = 2;
        pMass = p2Ions[pIon][1];
      }
      else
      {
        var index = Math.floor(Math.random()*Object.keys(p3Ions).length);
        pIon = Object.keys(p3Ions)[index];
        name += p3Ions[pIon];
        pFormula += pIon;
        pValence = 3;
        pMasss = p3Ions[pIon][1];
      }

      var pValue = [pIon, pValence, pFormula, pMass];
      name += " ";

      //negative ion
      var nValence = 0;
      var nFormula = "";
      var nMass = 0;
      var nIon = "";
      if(Math.random()<(6.0/21))
      {
        nValence = 1;
        var index = Math.floor(Math.random()*Object.keys(n1Ions).length);
        nIon = Object.keys(n1Ions)[index];
        name += n1Ions[nIon][0];
        nFormula += nIon;
        nMass = n1Ions[nIon][1]
      }
      else if(Math.random()<(18.0/21))
      {
        nValence = 2;
        var index = Math.floor(Math.random()*Object.keys(n2Ions).length);
        nIon = Object.keys(n2Ions)[index];
        name += n2Ions[nIon][0];
        nFormula += nIon;
        nMass = n2Ions[nIon][1];
      }
      else
      {
        nValence = 3;
        var index = Math.floor(Math.random()*Object.keys(n3Ions).length);
        nIon = Object.keys(n3Ions)[index];
        name += n3Ions[nIon][0];
        nFormula += nIon;
        nMass = n3Ions[nIon][1]
      }

      var nValue = [nIon, nValence, nFormula, nMass];

      var subscripts = getSubscripts(pValence, nValence);
      mass = Limit((pMass*subscripts[0])+(nMass*subscripts[1]),3)
      formula = FinalFormula(pFormula, nFormula, subscripts);

      return [pValue, nValue, subscripts, formula, name, mass]
   }

   function CreateAcid()
   {
      var formula="H";
      var name="";
      var mass = 0

      //this is an acid
      mass += 1.00797
      var pIon = "H";
      var pValence = 1;
      var pFormula = pIon;
      var pMass = 1.00797;

      var nIon = "";
      var nMass = 0;
      var nValence = 0;
      var nFormula = "";
      if(Math.random()<.66)
      {
        nValence = 1;

        if(Math.random()<(1.0/6))
        {
          name = "acetic acid";
          nIon = "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>";

          nFormula = "HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub>";
          nMass = 56.045;

        }
        else
        {
          var index = Math.floor(Math.random()*Object.keys(acid1Ions).length);
          nIon = Object.keys(acid1Ions)[index];
          nFormula = nIon;

          name = "hyrdro ";
          name += acid1Ions[nIon][0];

          nMass += acid1Ions[nIon][1]
        }
      }
      else if(Math.random()<.66)
      {
        var index = Math.floor(Math.random()*Object.keys(acid2Ions).length);
        nIon = Object.keys(acid2Ions)[index];

        name += acid2Ions[nIon][0];

        nFormula = Object.keys(acid2Ions)[index];
        nMass = acid2Ions[nIon][1]
        nValence = 2;
      }
      else
      {
        var index = Math.floor(Math.random()*Object.keys(acid3Ions).length);
        nIon = Object.keys(acid3Ions)[index]

        name += acid3Ions[nIon][0];

        nFormula = nIon;
        nMass = acid3Ions[nIon][1]
        nValence = 3;
      }

      var pValue = [pIon, pValence, pFormula, pMass];
      var nValue = [nIon, nValence, nFormula, nMass];

      var subscripts = getSubscripts(pValence, nValence);
      mass = Limit((pMass*subscripts[0])+(nMass*subscripts[1]),3)
      formula = FinalFormula(pFormula, nFormula, subscripts);

      return [pValue, nValue, subscripts, formula, name, mass]
   }
 
   function getChemical()
   {
      if(Math.random()<.2)
      {
        return CreateAcid();
      }
      else
      {
        return CreateCompound();
      }
   }

   function Limit(val, decimals)
   {
     var x = ""+val;
     var dot = x.indexOf('.');
     if(dot+decimals<x.length)
     {
       return x.substring(0,dot+decimals);
     }
     else
     {
       return x;
     }
   }

   function FinalFormula(pFormula, nFormula, subscripts)
   {
     var answer = "";
     if(pFormula.includes("<sub>") && subscripts[0]!=1)
     {
       answer = "("+pFormula+")<sub>"+subscripts[0]+"</sub>";
     }
     else if(subscripts[0]==1)
     {
       answer = pFormula;
     }
     else
     {
       answer = pFormula+"<sub>"+subscripts[0]+"</sub>";
     }

     if(nFormula.includes("<sub>") && subscripts[1]!=1)
     {
       answer += "("+nFormula+")<sub>"+subscripts[1]+"</sub>";
     }
     else if(subscripts[1]==1)
     {
       answer += nFormula;
     }
     else
     {
       answer += nFormula+"<sub>"+subscripts[1]+"</sub>";
     }

     return answer;
   }

   function getSubscripts(pVal, nVal)
   {
     if(pVal==nVal)
     {
       return [1,1];
     }
     else
     {
       return [nVal, pVal];
     }
   }

   function ChemEquation(tag)
   {
       match = true;//we presume a false match

       while(match)
       {
         var chem1 = CreateCompound()
         var p1 = chem1[0];
         var n1 = chem1[1];

         var chem2 = CreateCompound()
         var p2 = chem2[0];
         var n2 = chem2[1];

        match = p1[0]===p2[0] || n1[0]===n2[0];//check for real match
      }

      tag.innerHTML = chem1[3]+" + " + chem2[3] + " &rarr; <br>";
   }
