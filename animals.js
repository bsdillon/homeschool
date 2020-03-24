var allelles = "ABCDEx";
var mRate = 1/10000.0;
var sRate = 2/100.0;

function Asexual()
{
  this.Type="Asexual";
  this.chromosomes=[];
  this.sets = 4;
  this.paired = false;
  createChromosomes(this);
}

Asexual.prototype.Reproduce = function()
{
  population.push(this.Copy());
  population.push(this.Copy());
}

Asexual.prototype.Copy = function()
{
  var answer = new Asexual();
  answer.chromosomes=[];
  for(let i=0;i<this.chromosomes.length;i++)
  {
    var s = mutate(""+this.chromosomes[i]);
    answer.chromosomes[i]=s;
  }
  Birth(Phenotype(answer));
  return answer;
}

function createChromosomes(party)
{
  var n = party.sets * (party.paired? 2: 1);
  for(let i=0;i<n;i++)
  {
    var s = "xxxxxxxx";
    party.chromosomes[i]=s;
  }
}

function mutate(input)
{
  var answer = "";
  for(let i=0;i<input.length;i++)
  {
    if(Math.random()<mRate)
    {
      answer+=allelles[Math.floor(Math.random()*allelles.length)];
    }
    else
    {
      answer+=input[i];
    }
  }
  return answer;
}

function pColor(party)
{
  var pheno = Phenotype(party);
  var answer = [];
  if(pheno.includes(allelles[0]))
  {
    answer.push("#FF0000");
  }

  if(pheno.includes(allelles[1]))
  {
    answer.push("#FFFF00");
  }

  if(pheno.includes(allelles[2]))
  {
    answer.push("#00FF00");
  }

  if(pheno.includes(allelles[3]))
  {
    answer.push("#00FFFF");
  }

  if(pheno.includes(allelles[4]))
  {
    answer.push("#0000FF");
  }

  if(pheno.includes(allelles[5]))
  {
    answer.push("#888888");
  }
  return answer;
}

function Phenotype(party)
{
  var found ="";
  for(let i=0;i<party.chromosomes.length;i++)
  {
    var c = party.chromosomes[i];
    for(let j=0;j<c.length;j++)
    {
      if(!found.includes(c[j]))
      {
        found+=c[j];
      }
    }
  }

  var answer = "";
  for(let i=0;i<allelles.length;i++)
  {
    if(found.includes(allelles[i]))
    {
      answer+=allelles[i];
    }
  }
  return answer;
}

function gColor(party)
{
  var geno = Genotype(party);
  var answer = [];
  for(let i=0;i<party.chromosomes.length;i++)
  {
    var c = party.chromosomes[i];
    for(let j=0;j<c.length;j++)
    {
      answer.push(parseColor(c[j]));
    }
    answer.push("#000000");
  }
  return answer;
}

function parseColor(c)
{
  var answer = "";
  if(c==='A')
  {
    answer="#FF0000";
  }
  else if(c==='B')
  {
    answer="#FFFF00";
  }
  else if(c==='C')
  {
    answer="#00FF00";
  }
  else if(c==='D')
  {
    answer="#00FFFF";
  }
  else if(c==='E')
  {
    answer="#0000FF";
  }
  else if(c==='x')
  {
    answer="#888888";
  }
  else
  {
    answer="#000000";
  }
  return answer;
}

function Genotype(party)
{
  var answer = party.Type+":";
  for(let i=0;i<party.chromosomes.length;i++)
  {
    var c = party.chromosomes[i];
    var a = c[0];
    count=1;
    for(let j=1;j<c.length;j++)
    {
      if(a!=c[j])//change
      {
        answer+=a+count;
        a=c[j];
        count=1;
      }
      else
      {
        count++;
      }
    }
    answer+=a+count;

    answer+=":";
  }

  return answer;
}

function Survival(party)
{
  found = Phenotype(party);
  return Math.log((found.length/6.0)*(found.length/(allelles.length+0.0)));
}

function Sexual()
{
  this.Type="Sexual";
  this.chromosomes=[];
  this.sets = 4;
  this.paired = true;
  createChromosomes(this);
}

Sexual.prototype.Reproduce = function()
{
  var p = population[Math.floor(Math.random()*population.length)];
  population.push(this.Exchange(p));
}

Sexual.prototype.Exchange = function(party)
{
  var answer = new Sexual();
  answer.chromosomes=[];
  for(let i=0;i<this.chromosomes.length;i++)
  {
    var s = mutate(""+this.chromosomes[i]);
    if(i%2==0)
    {
      s = mutate(""+party.chromosomes[i]);
    }
    answer.chromosomes[i]=s;
  }
  Birth(Phenotype(answer));
  return answer;
}

function Multi()
{
  this.Type="Mulit";
  this.chromosomes=[];
  this.sets = 10;
  this.paired = true;
  createChromosomes(this);
}

Multi.prototype.Reproduce = function()
{
  var p = population[Math.floor(Math.random()*population.length)];
  population.push(this.Exchange(p));
}

Multi.prototype.Exchange = function(party)
{
  var answer = new Multi();
  answer.chromosomes=[];
  for(let i=0;i<this.chromosomes.length;i++)
  {
    var s = mutate(""+this.chromosomes[i]);
    if(i%2==0)
    {
      s = mutate(""+party.chromosomes[i]);
    }
    answer.chromosomes[i]=s;
  }
  Birth(Phenotype(answer));
  return answer;
}

function Slicer()
{
  this.Type="Slicer";
  this.chromosomes=[];
  this.sets = 10;
  this.paired = true;
  createChromosomes(this);
}

Slicer.prototype.Reproduce = function()
{
  var p = population[Math.floor(Math.random()*population.length)];
  population.push(this.Exchange(p));
}

Slicer.prototype.Exchange = function(party)
{
  var answer = new Slicer();
  answer.chromosomes=[];
  for(let i=0;i<this.chromosomes.length;i++)
  {
    if(Math.random()<sRate)
    {
      var s="";
      if(i%2==0)
      {
        var slice = Math.floor(Math.random()*this.chromosomes[i].length);
        var slice2 = Math.floor(Math.random()*this.chromosomes[i+1].length);
        for(let j=0;j<slice;j++)
        {
          s += this.chromosomes[i][j];
        }

        for(let j=slice2;j<this.chromosomes[i+1].length;j++)
        {
          s += this.chromosomes[i+1][j];
        }
      }
      else
      {
        var slice = Math.floor(Math.random()*party.chromosomes[i-1].length);
        var slice2 = Math.floor(Math.random()*party.chromosomes[i].length);
        for(let j=0;j<slice;j++)
        {
          s += party.chromosomes[i-1][j];
        }

        for(let j=slice2;j<party.chromosomes[i].length;j++)
        {
          s += party.chromosomes[i][j];
        }
      }
    }
    else
    {
      var s = this.chromosomes[i];
      if(i%2==0)
      {
        s = party.chromosomes[i];
      }
    }
    answer.chromosomes[i]=mutate(s);
  }
  Birth(Phenotype(answer));
  return answer;
}
