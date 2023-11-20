   function MakeAtomRow(tag, answertag)
   {
     var index = Math.floor(Math.random()*Object.keys(Atoms).length);
     var protons = index+1;
     var symbol = Object.keys(Atoms)[index];
     var description = Atoms[Object.keys(Atoms)[index]];
     var neutrons = NormalNeutrons[index]+Math.floor(Math.random()*5-2);
     var mass = index+neutrons;
     var electrons = index+Math.floor(Math.random()*5-2);
     var charge = index - electrons;

     if(answertag!=null)
     {
       //symbol and notations
       var cell = answertag.insertCell(0);
       var s = "";
       if(neutronsOrMass==1)
       {
         s = "<sup>"+mass+"</sup>";
       }

       s += symbol;

       if(chargeOrElectrons==0)
       {
         if(charge==0)
         {
           //no op
         }
         else if (charge >0)
         {
           s+= "+"+charge;
         }
         else
         {
           s+= "-"+(-charge);
         }
       }
       cell.innerHTML = s;

       //Description
       var cell = answertag.insertCell(1);
       cell.innerHTML = description;

       //Protons
       var cell = answertag.insertCell(2);
       cell.innerHTML = protons;

       //Neutrons
       var cell = answertag.insertCell(3);
       cell.innerHTML = neutrons;

       //Electrons
       var cell = answertag.insertCell(4);
       cell.innerHTML = electrons;

       //Atomic Number
       var cell = answertag.insertCell(5);
       cell.innerHTML = index;

       //Atomic Mass
       var cell = answertag.insertCell(6);
       cell.innerHTML = mass;

       //Charge
       var cell = answertag.insertCell(7);
       cell.innerHTML = charge;
     }

     var symbolNameAtomicNumberOrProton = Math.floor(Math.random()*4);
     if(symbolNameAtomicNumberOrProton!=0)
     {
       symbol = "X";
     }

     if(symbolNameAtomicNumberOrProton!=1)
     {
       description = "?";
     }

     if(symbolNameAtomicNumberOrProton!=2)
     {
       index = "?";
     }

     if(symbolNameAtomicNumberOrProton!=3)
     {
       protons = "?";
     }

     var neutronsOrMass = Math.floor(Math.random()*2);

     if(neutronsOrMass!=0)
     {
       neutrons = "?";
     }

     if(neutronsOrMass!=1)
     {
       mass = "?";
     }

     var chargeOrElectrons = Math.floor(Math.random()*2);

     if(chargeOrElectrons!=0)
     {
       charge = "?";
     }

     if(chargeOrElectrons!=1)
     {
       electrons = "?";
     }

     //symbol and notations
     var cell = tag.insertCell(0);
     var s = "";
     if(neutronsOrMass==1)
     {
       s = "<sup>"+mass+"</sup>";
     }

     s += symbol;

     if(chargeOrElectrons==0)
     {
       if(charge==0)
       {
         //no op
       }
       else if (charge >0)
       {
         s+= "+"+charge;
       }
       else
       {
         s+= "-"+(-charge);
       }
     }
     cell.innerHTML = s;

     //Description
     var cell = tag.insertCell(1);
     cell.innerHTML = description;

     //Protons
     var cell = tag.insertCell(2);
     cell.innerHTML = protons;

     //Neutrons
     var cell = tag.insertCell(3);
     cell.innerHTML = neutrons;

     //Electrons
     var cell = tag.insertCell(4);
     cell.innerHTML = electrons;

     //Atomic Number
     var cell = tag.insertCell(5);
     cell.innerHTML = index;

     //Atomic Mass
     var cell = tag.insertCell(6);
     cell.innerHTML = mass;

     //Charge
     var cell = tag.insertCell(7);
     cell.innerHTML = charge;
   }
