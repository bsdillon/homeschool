var vowels = ['A','I','U','E','O'];
var consonants = ['0','K','S','T','N','H','M','Y','R','W'];

var hiraganaChars = [
  [0x3042,0x3044,0x3046,0x3048,0x304A],
  [0x304B,0x304D,0x304F,0x3051,0x3053],
  [0x3055,0x3057,0x3059,0x305B,0x305D],
  [0x305F,0x3061,0x3064,0x3066,0x3068],
  [0x306A,0x306B,0x306C,0x306D,0x306E],
  [0x306F,0x3072,0x3075,0x3078,0x307B],
  [0x307E,0x307F,0x3080,0x3081,0x3082],
  [0x3084,0x0085,0x3086,0x0085,0x3088],
  [0x3089,0x308A,0x308B,0x308C,0x308D],
  [0x308F,0x3090,0x0085,0x3091,0x3092]
];

var hiraganaTrue = [
  ['あ','い','う','え','お'],
  ['か','き','く','け','こ'],
  ['さ','し','す','せ','そ'],
  ['た','ち','つ','て','と'],
  ['な','に','ぬ','ね','の'],
  ['は','ひ','ふ','へ','ほ'],
  ['ま','み','む','め','も'],
  ['や',' ','ゆ',' ','よ'],
  ['ら','り','る','れ','ろ'],
  ['わ','ゐ',' ','ゑ','を']
];

var hiraganaNChar = 0x3093;
var hiraganaN = 'ん';

var katakanaChars = [
  [0x30A2,0x30A4,0x30A6,0x30A8,0x30AA],
  [0x30AB,0x30AD,0x30AF,0x30B1,0x30B3],
  [0x30B5,0x30B7,0x30B9,0x30BB,0x30BD],
  [0x30BF,0x30C1,0x30C4,0x30C6,0x30C8],
  [0x30CA,0x30CB,0x30CC,0x30CD,0x30CE],
  [0x30CF,0x30D2,0x30D5,0x30D8,0x30DB],
  [0x30DE,0x30DF,0x30E0,0x30E1,0x30E2],
  [0x30E4,0x0085,0x30E6,0x0085,0x30E8],
  [0x30E9,0x30EA,0x30EB,0x30EC,0x30ED],
  [0x30EF,0x30F0,0x0085,0x30F1,0x30F2]
];


var katakanaTrue = [
  ['ア','イ','ウ','エ','オ'],
  ['カ','キ','ク','ケ','コ'],
  ['サ','シ','ス','セ','ソ'],
  ['タ','チ','ツ','テ','ト'],
  ['ナ','ニ','ヌ','ネ','ノ'],
  ['ハ','ヒ','フ','ヘ','ホ'],
  ['マ','ミ','ム','メ','モ'],
  ['ヤ','','ユ','','ヨ'],
  ['ラ','リ','ル','レ','ロ'],
  ['ワ','ヰ','','ヱ','ヲ']
];

var katakanaNChar = 0x30F3;
var katakanaN = 'ン';

//https://en.wikipedia.org/wiki/Ni_(kana)

//By frequency of use
//first six letters	し き い こ う く り(RI)
//next  six letters	ふ た つ す さ と
// 	け か る め み ち
// 	れ ら ゆ ま ほ ひ
// 	は ぬ に な て せ
// 	あ わ む へ の お
// 	え ろ よ や も ね

//by glyph type and average frequency
// う つ い り(RI) し そ へ く に こ わ ね ん
// き さ け は ま ほ ろ る
// も せ ち た て ひ と ゆ

// す か ふ		WTF 1; 33
// の め あ ぬ		Loop characters; 17
// よ お み		T characters; 16
// え ら		Back hook characters; 16
// む な や		WTF 2; 11
// れ 			Z characters; 9

var tiles =['0AME_CANDY.png', '0ARI_ANT.png', '0ASISA0I_HYDRANGEA.png', '0EN0TOTU_CHIMNEY.png', '0ENOKO_PAINT.png', '0IMA_TRAIN_STATION.png', '0INU_DOG.png', 
  '0ISI_STONE.png', '0ITIKO_STRAWBERRY.png', '0ONIKIRI_RICE_BALL.png', '0ONI_OGRE.png', '0UKIWA_FLOAT_TOY.png', '0UMA_HORSE.png', '0UNAKE_GHOST.png', 
  '0USI_COW.png', 'HASAMI_SCISSORS.png', 'HATO_PIGEON.png', 'HEHI_SNAKE.png', 'HERIKOHUTA_HELICOPTER.png', 'HETIMA_LOOFAH.png', 'HIKO0UKI_AIRPLANE.png', 
  'HITUSI_SHEEP.png', 'HIYOKO_CHICK.png', 'HOSI_STAR.png', 'HOTARU_FIREFLY.png', 'HOTATE_SCALLOP.png', 'HU0USEN0_BALLOON.png', 'HUKURO0U_OWL.png', 
  'HUNE_BOAT.png', 'KAHUTOMUSI_BEETLE.png', 'KAMOME_SEAGULL.png', 'KASA_UMBRELLA.png', 'KE0ISATU_POLICE.png', 'KEMUSI_CATERPILLAR.png', 'KEN0TAMA_KENDAMA.png', 
  'KIKIYU0U_HOT_AIR_BALLOON.png', 'KIN0KIYO_GOLD_FISH.png', 'KIRIN0_GIRAFE.png', 'KO0ARA_KOALA.png', 'KO0ORI_ICE.png', 'KOMA_TOP.png', 'KURI_CHESNUT.png', 
  'KURUMO_CAR.png', 'KUSIRA_WHALE.png', 'MAKURA_PILLOW.png', 'METAKA_RICE_FISH.png', 'MIKAN0_ORANGE.png', 'MOMO_PEACH.png', 'MUSIMEKANE_MAGNIFYING_GLASS.png', 
  'NAMITA_TEARS.png', 'NASI_PEAR.png', 'NASUHI_EGGPLANT.png', 'NEKI_GREEN_ONION.png', 'NESUMI_MOUSE.png', 'NIN0SIN0_CARROTS.png', 'NISI_RAINBOW.png', 
  'NIWATORI_CHICKEN.png', 'NOKOKIRI_SAW.png', 'NORI_SEAWEED.png', 'NU0IKURUMI_STUFFED_ANIMAL.png', 'NUNO_CLOTH.png', 'NURETA_WET.png', 'NURI0E_COLORING.png', 
  'RA0I0ON0_LION.png', 'REKISI_HISTORY.png', 'RIN0KO_APPLE.png', 'SA0IKORO_DICE.png', 'SAKANA_FISH.png', 'SAKURAN0HO_CHERRIES.png', 'SEMI_CICADA.png', 
  'SEN0HE0I_RICE_CRACKER.png', 'SEN0HU0UKI_FAN.png', 'SI0ITAKE_MUSHROOM.png', 'SIKA_DEER.png', 'SIN0KO0U_TRAFFIC_LIGHT.png', 'SOHUTOKURIMU_ICE_CREAM.png', 
  'SORA_SKY.png', 'SORE_THAT.png', 'SOTUKUSU_SOCKS.png', 'SU0IKA_WATERMELON.png', 'SU0ITO0U_WATER_BOTTLE.png', 'SUSUME_SPARROW.png', 'TA0IKO_DRUM.png', 
  'TA0IYAKI_TAIYAKI.png', 'TAKOYAKI_TAKOYAKI.png', 'TEHAMI_LETTER.png', 'TEHUKURO_GLOVES.png', 'TERUTERUHO0USU_TERU_TERU_BOOZU.png', 'TIKIN0_CHICKEN.png', 
  'TIKUWA_FISH_ROLL.png', 'TIN0HAN0SI_CHIMPANZEE.png', 'TO0UHU_TOFU.png', 'TOKE0I_CLOCK.png', 'TUHAME_SPARROW.png', 'TUKUSI_HORSE_TAIL.png', 
  'TUMIKI_BLOCKS.png', 'WATI_BEE.png', 'YAKAN0_KETTLE.png', 'YOTUTO_SAILBOAT.png', 'YU0UHIN0HOSUTO_MAILBOX.png', 'YUKI_SNOW.png', 'YUME_DREAM.png', 
  'YURE_SHAKE.png'
];

function createTileHTML(tileFileName, hiraganaStyle)
{
  var pieces = tileFileName.split("_");
  var engName = "";
  var japName = "";
  for(let i=0;i<pieces[0].length;i+=2)
  {
    var cPart = pieces[0][i];
    var vPart = pieces[0][i+1];
    var c = consonants.findIndex(function (x) {return x===cPart;});
    var v = vowels.findIndex(function (x) {return x===vPart;});
    if(vPart==='0')
    {
      engName+="N ";
      if(hiraganaStyle)
      {
        japName+="&#"+0x3093+";";
      }
      else
      {
        japName+="&#"+0x30F3+";";
      }
    }
    else
    {
      var cChar = consonants[c];
      if(cChar==='0')
      {
        cChar = ' ';
      }
      engName+=cChar+vowels[v];
      if(hiraganaStyle)
      {
        japName+="&#"+hiraganaChars[c][v]+";";
      }
      else
      {
        japName+="&#"+katakanaChars[c][v]+";";
      }
    }
  }

  var type = hiraganaStyle?"hiragana":"katakana";
  var tmp ="<h2 class='"+type+"'>"+japName+"</h2><h3>"+engName+"</h3><p>";
  var eng = tileFileName.substring(pieces[0].length+1,tileFileName.length-4);
  while(eng.includes("_"))
  {
    eng = eng.replace("_"," ");
  }

  tmp += eng+"</p>";
  tmp += "<img src='./hiragana/images/"+tileFileName+"' width='190'>";
  return tmp;
}

function createGlyphHTML(id, c, v, hiragana, flipSensetive)
{
  var tag = document.getElementById(id);
  var transparency = document.getElementById("overlay");
  if(!transparency)
  {
    var img = document.createElement("IMG");
    img.src = "./hiragana/transGrid.png";
    img.classList.add("overlay");
    img.id="overlay";
    img.onmouseleave=function (){overlayOff();};
    document.body.appendChild(img);
  }

  var type = hiragana? "hiragana": "katakana";
  var tagEng = document.createElement("SPAN");
  tagEng.classList.add("english");
  if(v==-1)
  {
    tagEng.innerHTML = "N0";
  }
  else
  {
    tagEng.innerHTML = (consonants[c]+vowels[v]).toUpperCase();
  }
  tag.appendChild(tagEng);

  var tagJap = document.createElement("SPAN");
  tagJap.id=id+"Jap";
  tagJap.classList.add("hiragana");
  if(hiragana)
  {
    if(v==-1)
    {
      tagJap.innerHTML = "&#"+hiraganaNChar+";";
    }
    else
    {
      tagJap.innerHTML = "&#"+hiraganaChars[c][v]+";";
    }
  }
  else
  {
    if(v==-1)
    {
      tagJap.innerHTML = "&#"+katakanaNChar+";";
    }
    else
    {
      tagJap.innerHTML = "&#"+katakanaChars[c][v]+";";
    }
  }
  tag.appendChild(tagJap);

  var img = document.createElement("IMG");
  img.id = id+"Img";
  img.classList.add(type);
  if(v==-1)
  {
    var tmp = "N0";
  }
  else
  {
    var tmp = consonants[c]+vowels[v];
  }

  if(flipSensetive)
  {
    img.flipFunction = function () { flipGlyph(id,c,v) };
  }
  else
  {
    img.flipFunction = function () {};
  }

  img.onmouseover = function() {overlayOn(img);}
  img.src = "./"+type+"/"+type+"-"+tmp+"-order.gif";
  img.width = "140";
  img.height = "140";
  img.alt = type+" "+tmp;
  tag.appendChild(img);

  tag.classList.add(type);
  tag.classList.add("glyph");
}

function flipGlyph(id, cIndex, vIndex)
{
  var tag = document.getElementById(id);
  var tagJap = document.getElementById(id+"Jap");
  var tagImg = document.getElementById(id+"Img");
  var nextSrc="";
  tagJap.classList.value = '';
  tagImg.classList.value = '';
  if(tagImg.src.includes("hiragana"))
  {
    tag.classList.remove("hiragana");
    if(vIndex==-1)
    {
      tagJap.innerHTML="&#"+katakanaNChar+";";
    }
    else
    {
      tagJap.innerHTML="&#"+katakanaChars[cIndex][vIndex]+";";
    }
    nextSrc = tagImg.src.replace("hiragana","katakana");
    nextSrc = nextSrc.replace("hiragana","katakana");
    if(vIndex==-1)
    {
      tagImg.alt = "Katakana N0";
    }
    else
    {
      tagImg.alt = "Katakana "+consonants[cIndex]+vowels[vIndex];
    }
    tagJap.classList.add("katakana");
    tagImg.classList.add("katakana");
    tag.classList.add("katakana");
  }
  else
  {
    tag.classList.remove("katakana");
    if(vIndex==-1)
    {
      tagJap.innerHTML="&#"+hiraganaNChar+";";
    }
    else
    {
      tagJap.innerHTML="&#"+hiraganaChars[cIndex][vIndex]+";";
    }
    nextSrc = tagImg.src.replace("katakana","hiragana");
    nextSrc = nextSrc.replace("katakana","hiragana");
    if(vIndex==-1)
    {
      tagImg.alt = "Hiragana N0";
    }
    else
    {
      tagImg.alt = "Hiragana "+consonants[cIndex]+vowels[vIndex];
    }
    tagJap.classList.add("hiragana");
    tagImg.classList.add("hiragana");
    tag.classList.add("hiragana");
  }
  tagImg.src = nextSrc;
}

function getTop(el) {
  return el.offsetTop + (el.offsetParent && getTop(el.offsetParent));
}

function getLeft(el) {
  return el.offsetLeft + (el.offsetParent && getLeft(el.offsetParent));
}

function overlayOff()
{
  var tag = document.getElementById("overlay");
  tag.style.opacity=0;
  tag.style.left=0;
  tag.style.top=0;
  tag.width=0;
  tag.height=0;
}

function overlayOn(imgTag)
{
  var tag = document.getElementById("overlay");
  tag.style.opacity=1;
  tag.style.left=getLeft(imgTag);
  tag.style.top=getTop(imgTag);
  tag.width=146;
  tag.height=146;
  tag.onclick=function(){imgTag.flipFunction();};
}

//<h2>Learn vowels</h2>
//<iframe width="490" height="276" src="https://www.youtube.com/embed/5hYz3Kn08Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<h2>Alphabet train</h2>
//<iframe width="490" height="276" src="https://www.youtube.com/embed/kEAbfuANKWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<h2>Putting syllables together</h2>
//<iframe width="490" height="276" src="https://www.youtube.com/embed/bXk0ooV-iLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<h2>Singing alphabet</h2>
//<iframe width="490" height="276" src="https://www.youtube.com/embed/8IpHIUxhdaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<h2>Sing the alphabet...again</h2>
//<iframe width="853" height="480" src="https://www.youtube.com/embed/K-nw5EUxDz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<h2>Cyber bunny teaches Japanese</h2>
//<a href='https://www.youtube.com/channel/UCv_2-Z25BEyH-qa_J6IFWjA'>Link</a><br>
//<h2>Great site for practice cards in hiragana and katakana</h2>
//<a href="https://print-kids.net/print/kokugo/">link</a>
//https://print-kids.net/print/kokugo/hiragana-card/hiragana-card10.pdf
//Useful information on hirgana
//http://www.textfugu.com/season-1/reading-writing-memorizing-hiragana/4-8/
//There is a story here that I need to figure out.
//According to the Nihon Shoki and Kojiki, a semi-legendary scholar called Wani was 
//dispatched to Japan by the Kingdom of Baekje during the reign of Emperor Ōjin in the 
//early fifth century, bringing with him knowledge of Confucianism and Chinese characters.[9]
//great caligraphy example and how to handle end of stroke hook/non-hook
//https://youtu.be/gTr3ROSU35g?t=55
//common radicals in kanji
//https://laits.utexas.edu/japanese/joshu/kanji/kanji_radicals/radicals2.html
//first 100 kanji
//https://www.uni-passau.de/fileadmin/dokumente/hsg/nippon/Skripte/kanjibookjlptn5.pdf
//document meant to show someone what their character looks like
//Okagami (The Great Mirror) (大鏡)
//document in chinese meant to teach all the kanji
//https://en.wikipedia.org/wiki/Thousand_Character_Classic
