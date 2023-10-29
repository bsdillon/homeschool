var PRESENTE = {'AGARRAR':['GRAB','AGARRO','AGARRAS','AGARRA','AGARRAMOS','AGARR&Aacute;IS','AGARRAN'],
    'AGOTAR':['AGONIZE','AGOTO','AGOTAS','AGOTA','AGOTAMOS','AGOT&Aacute;IS','AGOTAN'],
    'ANGUSTIAR':['FEEL ANGUISH','ANGUSTIO','ANGUSTIAS','ANGUSTIA','ANGUSTIAMOS','ANGUSTI&Aacute;IS','ANGUSTIAN'],
    'ASUSTAR':['ASTONISH','ASUSTO','ASUSTAS','ASUSTA','ASUSTAMOS','ASUST&Aacute;IS','ASUSTAN'],
    'AVANZAR':['ADVANCE','AVANZO','AVANZAS','AVANZA','AVANZAMOS','AVANZ&Aacute;IS','AVANZAN'],
    'AVISAR':['ADVISE','AVISO','AVISAS','AVISA','AVISAMOS','AVIS&Aacute;IS','AVISAN'],
    'BA&Ntilde;AR':['BATHE','BA&Ntilde;O','BA&Ntilde;AS','BA&Ntilde;A','BA&Ntilde;AMOS','BA&Ntilde;&Aacute;IS','BA&Ntilde;AN'],
    'BURLAR':['MOCK','BURLO','BURLAS','BURLA','BURLAMOS','BURL&Aacute;IS','BURLAN'],
    'CAMINAR':['WALK','CAMINO','CAMINAS','CAMINA','CAMINAMOS','CAMIN&Aacute;IS','CAMINAN'],
    'COCINAR':['COOK','COCINO','COCINAS','COCINA','COCINAMOS','COCIN&Aacute;IS','COCINAN'],
    'CONTAR':['COUNT','CONTO','CONTAS','CONTA','CONTAMOS','CONT&Aacute;IS','CONTAN'],
    'CRUZAR':['CROSS','CRUZO','CRUZAS','CRUZA','CRUZAMOS','CRUZ&Aacute;IS','CRUZAN'],
    'DEJAR':['LEAVE','DEJO','DEJAS','DEJA','DEJAMOS','DEJ&Aacute;IS','DEJAN'],
    'DESAYUNAR':['BREAKFAST','DESAYUNO','DESAYUNAS','DESAYUNA','DESAYUNAMOS','DESAYUN&Aacute;IS','DESAYUNAN'],
    'DESCANSAR':['REST','DESCANSO','DESCANSAS','DESCANSA','DESCANSAMOS','DESCANS&Aacute;IS','DESCANSAN'],
    'DISFRUTAR':['ENJOY','DISFRUTO','DISFRUTAS','DISFRUTA','DISFRUTAMOS','DISFRUT&Aacute;IS','DISFRUTAN'],
    'DISPARAR':['SHOOT','DISPARO','DISPARAS','DISPARA','DISPARAMOS','DISPAR&Aacute;IS','DISPARAN'],
    'EMPEZAR':['BEGIN','EMPEZO','EMPEZAS','EMPEZA','EMPEZAMOS','EMPEZ&Aacute;IS','EMPEZAN'],
    'ENSE&Ntilde;AR':['TEACH','ENSE&Ntilde;O','ENSE&Ntilde;AS','ENSE&Ntilde;A','ENSE&Ntilde;AMOS','ENSE&Ntilde;&Aacute;IS','ENSE&Ntilde;AN'],
    'ENTRAR':['ENTER','ENTRO','ENTRAS','ENTRA','ENTRAMOS','ENTR&Aacute;IS','ENTRAN'],
    'ENVIAR':['SEND','ENVIO','ENVIAS','ENVIA','ENVIAMOS','ENVI&Aacute;IS','ENVIAN'],
    'ESPERAR':['WAIT','ESPERO','ESPERAS','ESPERA','ESPERAMOS','ESPER&Aacute;IS','ESPERAN'],
    'GANAR':['EARN','GANO','GANAS','GANA','GANAMOS','GAN&Aacute;IS','GANAN'],
    'GRITAR':['YELL','GRITO','GRITAS','GRITA','GRITAMOS','GRIT&Aacute;IS','GRITAN'],
    'GUIAR':['GUIDE','GUIO','GUIAS','GUIA','GUIAMOS','GUI&Aacute;IS','GUIAN'],
    'GUSTAR':['LIKE','GUSTO','GUSTAS','GUSTA','GUSTAMOS','GUST&Aacute;IS','GUSTAN'],
    'LLEGAR':['ARRIVE','LLEGO','LLEGAS','LLEGA','LLEGAMOS','LLEG&Aacute;IS','LLEGAN'],
    'LOGRAR':['WIN','LOGRO','LOGRAS','LOGRA','LOGRAMOS','LOGR&Aacute;IS','LOGRAN'],
    'MIRAR':['LOOK','MIRO','MIRAS','MIRA','MIRAMOS','MIR&Aacute;IS','MIRAN'],
    'OLVIDAR':['FORGET','OLVIDO','OLVIDAS','OLVIDA','OLVIDAMOS','OLVID&Aacute;IS','OLVIDAN'],
    'PARAR':['STOP (EVENT)','PARO','PARAS','PARA','PARAMOS','PAR&Aacute;IS','PARAN'],
    'PREOCUPAR':['WORRY','PREOCUPO','PREOCUPAS','PREOCUPA','PREOCUPAMOS','PREOCUP&Aacute;IS','PREOCUPAN'],
    'SACAR':['TAKE OUT','SACO','SACAS','SACA','SACAMOS','SAC&Aacute;IS','SACAN'],
    'SALVAR':['SAVE','SALVO','SALVAS','SALVA','SALVAMOS','SALV&Aacute;IS','SALVAN'],
    'TOSTAR':['TOAST','TOSTO','TOSTAS','TOSTA','TOSTAMOS','TOST&Aacute;IS','TOSTAN'],
    'VACIAR':['VARY','VACIO','VACIAS','VACIA','VACIAMOS','VACI&Aacute;IS','VACIAN'],
    'VOCIFERAR':['SHOUT','VOCIFERO','VOCIFERAS','VOCIFERA','VOCIFERAMOS','VOCIFER&Aacute;IS','VOCIFERAN'],
    'VOLAR':['FLY','VOLO','VOLAS','VOLA','VOLAMOS','VOL&Aacute;IS','VOLAN'],
    'COMER':['EAT','COMO','COMES','COME','COMEMOS','COM&Eacute;IS','COMEN'],
    'CORRER':['RUN','CORRO','CORRES','CORRE','CORREMOS','CORR&Eacute;IS','CORREN'],
    'DEBER':['SHOULD','DEBO','DEBES','DEBE','DEBEMOS','DEB&Eacute;IS','DEBEN'],
    'ESCONDER':['HIDE','ESCONDO','ESCONDES','ESCONDE','ESCONDEMOS','ESCOND&Eacute;IS','ESCONDEN'],
    'LEER':['READ','LEO','LEES','LEE','LEEMOS','LE&Eacute;IS','LEEN'],
    'ESCRIBIR':['WRITE','ESCRIBO','ESCRIBES','ESCRIBE','ESCRIBIMOS','ESCRIB&Iacute;S','ESCRIBEN'],
    'PRESUMIR':['PRESUME','PRESUMO','PRESUMES','PRESUME','PRESUMIMOS','PRESUM&Iacute;S','PRESUMEN'],
    'SUMERGIR':['DIVE','SUMERGO','SUMERGES','SUMERGE','SUMERGIMOS','SUMERG&Iacute;S','SUMERGEN'],
    'VIVIR':['LIVE','VIVO','VIVES','VIVE','VIVIMOS','VIV&Iacute;S','VIVEN'],
    'AGRADECER':['THANK','AGRADEZCO','AGRADECES','AGRADECE','AGRADECEMOS','AGRADEC&Eacute;IS','AGRADECEN'],
    'CONOCER':['KNOW','CONOZCO','CONOCES','CONOCE','CONOCEMOS','CONOC&Eacute;IS','CONOCEN'],
    'PERMANECER':['REMAIN','PERMANEZCO','PERMANECES','PERMANECE','PERMANECEMOS','PERMANEC&Eacute;IS','PERMANECEN'],
    'VER':['SEE','VEO','VEES','VEE','VEEMOS','VE&Eacute;IS','VEEN'],
    'HABER':['EXIST','HE','HABES','HABE','HABEMOS','HAB&Eacute;IS','HABEN'],
    'ESTAR':['BE','ESTOY','EST&Aacute;S','EST&Aacute;','ESTAMOS','EST&Aacute;IS','EST&Aacute;N'],
    'SABER':['KNOW','S&Eacute;','SABES','SABE','SABEMOS','SAB&Eacute;IS','SABEN'],
    'SER':['BE','SOY','ERES','ES','SOMOS','SOIS','SON'],
    'IR':['GO','VOY','VAS','VA','VAMOS','V&Aacute;IS','VAN'],
    'ATRAVESAR':['CROSS OVER','ATRAVIESO','ATRAVIESAS','ATRAVIESA','ATRAVESAMOS','ATRAVES&Aacute;IS','ATRAVIESAN'],
    'DESPERTAR':['WAKE UP','DESPIERTO','DESPIERTAS','DESPIERTA','DESPERTAMOS','DESPERT&Aacute;IS','DESPIERTAN'],
    'EMPEZAR':['START','EMPIEZO','EMPIEZAS','EMPIEZA','EMPEZAMOS','EMPEZ&Aacute;IS','EMPIEZAN'],
    'PENSAR':['THINK','PIENSO','PIENSAS','PIENSA','PENSAMOS','PENS&Aacute;IS','PIENSAN'],
    'SENTAR':['SIT','SIENTO','SIENTAS','SIENTA','SENTAMOS','SENT&Aacute;IS','SIENTAN'],
    'ADVERTIR':['WARN','ADVIERTO','ADVIERTAS','ADVIERTA','ADVERTIMOS','ADVERT&Iacute;S','ADVIERTAN'],
    'PROMETIR':['PROMISE','PROMIETO','PROMIETES','PROMIETE','PROMETIMOS','PROMET&Iacute;S','PROMIETEN'],
    'ENCONTRAR':['FIND','ENCUENTRO','ENCUENTRAS','ENCUENTRA','ENCONTRAMOS','ENCONTR&Aacute;IS','ENCUENTRAN'],
    'PODER':['CAN','PUEDO','PUEDES','PUEDE','PODEMOS','POD&Eacute;IS','PUEDEN'],
    'VOLVER':['RETURN','VUELVO','VUELVES','VUELVE','VOLVEMOS','VOLV&Eacute;IS','VUELVEN'],
    'DORMIR':['SLEEP','DUERMO','DUERMES','DUERME','DORMIMOS','DORM&Iacute;S','DUERMIN'],
    'CAER':['FALL','CAIGO','CAES','CAE','CAEMOS','CA&Eacute;IS','CAEN'],
    'DETENER':['STOP (ANOTHER)','DETENGO','DETIENES','DETIENE','DETENEMOS','DETEN&Eacute;IS','DETIENEN'],
    'HACER':['DO/MAKE','HAGO','HACES','HACE','HACEMOS','HAC&Eacute;IS','HACEN'],
    'PROPONER':['PROPOSE','PROPONGO','PROPONES','PROPONE','PROPONEMOS','PROPON&Eacute;IS','PROPONEN'],
    'TENER':['HAVE','TENGO','TIENES','TIENE','TENEMOS','TEN&Eacute;IS','TIENEN'],
    'VALER':['VALUE','VALGO','VALES','VALE','VALEMOS','VAL&Eacute;IS','VALEN'],
    'DECIR':['SAY','DIGO','DICES','DICE','DECIMOS','DEC&Iacute;S','DICEN'],
    'SEGUIR':['FOLLOW','SIGO','SIGUES','SIGUE','SEGIMOS','SEG&Iacute;S','SIGUEN']};

var GERUNDO = {'AGARRAR': ['GRAB', 'AGARRANDO'],
    'AGOTAR': ['AGONIZE', 'AGOTANDO'],
    'ANGUSTIAR': ['FEEL ANGUISH', 'ANGUSTIANDO'],
    'ASUSTAR': ['ASTONISH', 'ASUSTANDO'],
    'AVANZAR': ['ADVANCE', 'AVANZANDO'],
    'AVISAR': ['ADVISE', 'AVISANDO'],
    'BAÑAR': ['BATHE', 'BAÑANDO'],
    'BURLAR': ['MOCK', 'BURLANDO'],
    'CAMINAR': ['WALK', 'CAMINANDO'],
    'COCINAR': ['COOK', 'COCINANDO'],
    'CONTAR': ['COUNT', 'CONTANDO'],
    'CRUZAR': ['CROSS', 'CRUZANDO'],
    'DEJAR': ['LEAVE', 'DEJANDO'],
    'DESAYUNAR': ['BREAKFAST', 'DESAYUNANDO'],
    'DESCANSAR': ['REST', 'DESCANSANDO'],
    'DISFRUTAR': ['ENJOY', 'DISFRUTANDO'],
    'DISPARAR': ['SHOOT', 'DISPARANDO'],
    'EMPEZAR': ['BEGIN', 'EMPEZANDO'],
    'ENSEÑAR': ['TEACH', 'ENSEÑANDO'],
    'ENTRAR': ['ENTER', 'ENTRANDO'],
    'ENVIAR': ['SEND', 'ENVIANDO'],
    'ESPERAR': ['WAIT', 'ESPERANDO'],
    'GANAR': ['EARN', 'GANANDO'],
    'GRITAR': ['YELL', 'GRITANDO'],
    'GUIAR': ['GUIDE', 'GUIANDO'],
    'GUSTAR': ['LIKE', 'GUSTANDO'],
    'LLEGAR': ['ARRIVE', 'LLEGANDO'],
    'LOGRAR': ['WIN', 'LOGRANDO'],
    'MIRAR': ['LOOK', 'MIRANDO'],
    'OLVIDAR': ['FORGET', 'OLVIDANDO'],
    'PARAR': ['STOP (EVENT)', 'PARANDO'],
    'PREOCUPAR': ['WORRY', 'PREOCUPANDO'],
    'SACAR': ['TAKE OUT', 'SACANDO'],
    'SALVAR': ['SAVE', 'SALVANDO'],
    'TOSTAR': ['TOAST', 'TOSTANDO'],
    'VACIAR': ['VARY', 'VACIANDO'],
    'VOCIFERAR': ['SHOUT', 'VOCIFERANDO'],
    'VOLAR': ['FLY', 'VOLANDO'],
    'COMER': ['EAT', 'COMIENDO'],
    'CORRER': ['RUN', 'CORRIENDO'],
    'DEBER': ['SHOULD', 'DEBIENDO'],
    'ESCONDER': ['HIDE', 'ESCONDIENDO'],
    'LEER': ['READ', 'LEIENDO'],
    'ESCRIBIR': ['WRITE', 'ESCRIBIENDO'],
    'PRESUMIR': ['PRESUME', 'PRESUMIENDO'],
    'SUMERGIR': ['DIVE', 'SUMERGIENDO'],
    'VIVIR': ['LIVE', 'VIVIENDO'],
    'AGRADECER': ['THANK', 'AGRADEIENDO'],
    'CONOCER': ['KNOW', 'CONOIENDO'],
    'PERMANECER': ['REMAIN', 'PERMANEIENDO'],
    'VER': ['SEE', 'VEYENDO'],
    'HABER': ['EXIST', 'HABIENDO'],
    'ESTAR': ['BE', 'ESTANDO'],
    'SABER': ['KNOW', 'SABIENDO'],
    'SER': ['BE', 'SIENDO'],
    'IR': ['GO', 'YENDO'],
    'ATRAVESAR': ['CROSS OVER', 'ATRAVESANDO'],
    'DESPERTAR': ['WAKE UP', 'DESPERTANDO'],
    'EMPEZAR': ['START', 'EMPEZANDO'],
    'PENSAR': ['THINK', 'PENSANDO'],
    'SENTAR': ['SIT', 'SENTANDO'],
    'ADVERTIR': ['WARN', 'ADVERTIENDO'],
    'PROMETIR': ['PROMISE', 'PROMETIENDO'],
    'ENCONTRAR': ['FIND', 'ENCONTRANDO'],
    'PODER': ['CAN', 'PODIENDO'],
    'VOLVER': ['RETURN', 'VOLVIENDO'],
    'DORMIR': ['SLEEP', 'DURMIENDO'],
    'CAER': ['FALL', 'CAYENDO'],
    'DETENER': ['STOP (ANOTHER)', 'DETENIENDO'],
    'HACER': ['DO/MAKE', 'HACIENDO'],
    'PROPONER': ['PROPOSE', 'PROPONIENDO'],
    'TENER': ['HAVE', 'TENIENDO'],
    'VALER': ['VALUE', 'VALIENDO'],
    'DECIR': ['SAY', 'DICIENDO'],
    'SEGUIR': ['FOLLOW', 'SEGUIENDO']};

var PRETERITO = {'AGARRAR':['GRAB','AGARR&Eacute;','AGARRASTE','AGARR&Oacute;','AGARRAMOS','AGARRASTEIS','AGARRARON'],
    'AGOTAR':['AGONIZE','AGOT&Eacute;','AGOTASTE','AGOT&Oacute;','AGOTAMOS','AGOTASTEIS','AGOTARON'],
    'ANGUSTIAR':['FEEL ANGUISH','ANGUSTI&Eacute;','ANGUSTIASTE','ANGUSTI&Oacute;','ANGUSTIAMOS','ANGUSTIASTEIS','ANGUSTIARON'],
    'ASUSTAR':['ASTONISH','ASUST&Eacute;','ASUSTASTE','ASUST&Oacute;','ASUSTAMOS','ASUSTASTEIS','ASUSTARON'],
    'AVANZAR':['ADVANCE','AVANZ&Eacute;','AVANZASTE','AVANZ&Oacute;','AVANZAMOS','AVANZASTEIS','AVANZARON'],
    'AVISAR':['ADVISE','AVIS&Eacute;','AVISASTE','AVIS&Oacute;','AVISAMOS','AVISASTEIS','AVISARON'],
    'BAÑAR':['BATHE','BAÑ&Eacute;','BAÑASTE','BAÑ&Oacute;','BAÑAMOS','BAÑASTEIS','BAÑARON'],
    'BURLAR':['MOCK','BURL&Eacute;','BURLASTE','BURL&Oacute;','BURLAMOS','BURLASTEIS','BURLARON'],
    'CAMINAR':['WALK','CAMIN&Eacute;','CAMINASTE','CAMIN&Oacute;','CAMINAMOS','CAMINASTEIS','CAMINARON'],
    'COCINAR':['COOK','COCIN&Eacute;','COCINASTE','COCIN&Oacute;','COCINAMOS','COCINASTEIS','COCINARON'],
    'CONTAR':['COUNT','CONT&Eacute;','CONTASTE','CONT&Oacute;','CONTAMOS','CONTASTEIS','CONTARON'],
    'CRUZAR':['CROSS','CRUC&Eacute;','CRUZASTE','CRUZ&Oacute;','CRUZAMOS','CRUZASTEIS','CRUZARON'],
    'DEJAR':['LEAVE','DEJ&Eacute;','DEJASTE','DEJ&Oacute;','DEJAMOS','DEJASTEIS','DEJARON'],
    'DESAYUNAR':['BREAKFAST','DESAYUN&Eacute;','DESAYUNASTE','DESAYUN&Oacute;','DESAYUNAMOS','DESAYUNASTEIS','DESAYUNARON'],
    'DESCANSAR':['REST','DESCANS&Eacute;','DESCANSASTE','DESCANS&Oacute;','DESCANSAMOS','DESCANSASTEIS','DESCANSARON'],
    'DISFRUTAR':['ENJOY','DISFRUT&Eacute;','DISFRUTASTE','DISFRUT&Oacute;','DISFRUTAMOS','DISFRUTASTEIS','DISFRUTARON'],
    'DISPARAR':['SHOOT','DISPAR&Eacute;','DISPARASTE','DISPAR&Oacute;','DISPARAMOS','DISPARASTEIS','DISPARARON'],
    'EMPEZAR':['BEGIN','EMPEZ&Eacute;','EMPEZASTE','EMPEZ&Oacute;','EMPEZAMOS','EMPEZASTEIS','EMPEZARON'],
    'ENSEÑAR':['TEACH','ENSEÑ&Eacute;','ENSEÑASTE','ENSEÑ&Oacute;','ENSEÑAMOS','ENSEÑASTEIS','ENSEÑARON'],
    'ENTRAR':['ENTER','ENTR&Eacute;','ENTRASTE','ENTR&Oacute;','ENTRAMOS','ENTRASTEIS','ENTRARON'],
    'ENVIAR':['SEND','ENVI&Eacute;','ENVIASTE','ENVI&Oacute;','ENVIAMOS','ENVIASTEIS','ENVIARON'],
    'ESPERAR':['WAIT','ESPER&Eacute;','ESPERASTE','ESPER&Oacute;','ESPERAMOS','ESPERASTEIS','ESPERARON'],
    'GANAR':['EARN','GAN&Eacute;','GANASTE','GAN&Oacute;','GANAMOS','GANASTEIS','GANARON'],
    'GRITAR':['YELL','GRIT&Eacute;','GRITASTE','GRIT&Oacute;','GRITAMOS','GRITASTEIS','GRITARON'],
    'GUIAR':['GUIDE','GUI&Eacute;','GUIASTE','GUI&Oacute;','GUIAMOS','GUIASTEIS','GUIARON'],
    'GUSTAR':['LIKE','GUST&Eacute;','GUSTASTE','GUST&Oacute;','GUSTAMOS','GUSTASTEIS','GUSTARON'],
    'LLEGAR':['ARRIVE','LLEG&Eacute;','LLEGASTE','LLEG&Oacute;','LLEGAMOS','LLEGASTEIS','LLEGARON'],
    'LOGRAR':['WIN','LOGR&Eacute;','LOGRASTE','LOGR&Oacute;','LOGRAMOS','LOGRASTEIS','LOGRARON'],
    'MIRAR':['LOOK','MIR&Eacute;','MIRASTE','MIR&Oacute;','MIRAMOS','MIRASTEIS','MIRARON'],
    'OLVIDAR':['FORGET','OLVID&Eacute;','OLVIDASTE','OLVID&Oacute;','OLVIDAMOS','OLVIDASTEIS','OLVIDARON'],
    'PARAR':['STOP (EVENT)','PAR&Eacute;','PARASTE','PAR&Oacute;','PARAMOS','PARASTEIS','PARARON'],
    'PREOCUPAR':['WORRY','PREOCUP&Eacute;','PREOCUPASTE','PREOCUP&Oacute;','PREOCUPAMOS','PREOCUPASTEIS','PREOCUPARON'],
    'SACAR':['TAKE OUT','SAC&Eacute;','SACASTE','SAC&Oacute;','SACAMOS','SACASTEIS','SACARON'],
    'SALVAR':['SAVE','SALV&Eacute;','SALVASTE','SALV&Oacute;','SALVAMOS','SALVASTEIS','SALVARON'],
    'TOSTAR':['TOAST','TOST&Eacute;','TOSTASTE','TOST&Oacute;','TOSTAMOS','TOSTASTEIS','TOSTARON'],
    'VACIAR':['VARY','VACI&Eacute;','VACIASTE','VACI&Oacute;','VACIAMOS','VACIASTEIS','VACIARON'],
    'VOCIFERAR':['SHOUT','VOCIFER&Eacute;','VOCIFERASTE','VOCIFER&Oacute;','VOCIFERAMOS','VOCIFERASTEIS','VOCIFERARON'],
    'VOLAR':['FLY','VOL&Eacute;','VOLASTE','VOL&Oacute;','VOLAMOS','VOLASTEIS','VOLARON'],
    'COMER':['EAT','COM&Iacute;','COMISTE','COMI&Oacute;','COMIMOS','COMISTEIS','COMIERON'],
    'CORRER':['RUN','CORR&Iacute;','CORRISTE','CORRI&Oacute;','CORRIMOS','CORRISTEIS','CORRIERON'],
    'DEBER':['SHOULD','DEB&Iacute;','DEBISTE','DEBI&Oacute;','DEBIMOS','DEBISTEIS','DEBIERON'],
    'ESCONDER':['HIDE','ESCOND&Iacute;','ESCONDISTE','ESCONDI&Oacute;','ESCONDIMOS','ESCONDISTEIS','ESCONDIERON'],
    'LEER':['READ','LE&Iacute;','LEISTE','LEY&Oacute;','LEIMOS','LEISTEIS','LEYERON'],
    'ESCRIBIR':['WRITE','ESCRIB&Iacute;','ESCRIBISTE','ESCRIBI&Oacute;','ESCRIBIMOS','ESCRIBISTEIS','ESCRIBIERON'],
    'PRESUMIR':['PRESUME','PRESUM&Iacute;','PRESUMISTE','PRESUMI&Oacute;','PRESUMIMOS','PRESUMISTEIS','PRESUMIERON'],
    'SUMERGIR':['DIVE','SUMERG&Iacute;','SUMERGISTE','SUMERGI&Oacute;','SUMERGIMOS','SUMERGISTEIS','SUMERGIERON'],
    'VIVIR':['LIVE','VIV&Iacute;','VIVISTE','VIVI&Oacute;','VIVIMOS','VIVISTEIS','VIVIERON'],
    'AGRADECER':['THANK','AGRADEC&Iacute;','AGRADECISTE','AGRADECI&Oacute;','AGRADECIMOS','AGRADECISTEIS','AGRADECIERON'],
    'CONOCER':['KNOW','CONOC&Iacute;','CONOCISTE','CONOCI&Oacute;','CONOCIMOS','CONOCISTEIS','CONOCIERON'],
    'PERMANECER':['REMAIN','PERMANEC&Iacute;','PERMANECISTE','PERMANECI&Oacute;','PERMANECIMOS','PERMANECISTEIS','PERMANECIERON'],
    'ESTAR':['BE','ESTUVE','ESTUVISTE','ESTUVO','ESTUVIMOS','ESTUVISTEIS','ESTUVIERON'],
    'VER':['SEE','V&Iacute;','VISTE','VI&Oacute;','VIMOS','VISTEIS','VIERON'],
    'HABER':['EXIST','HUBE','HUBISTE','HUBO','HUBIMOS','HUBISTEIS','HUBIERON'],
    'SABER':['KNOW','SUPE','SUPISTE','SUPO','SUPIMOS','SUPISTEIS','SUPIERON'],
    'SER':['BE','FUI','FUISTE','FUE','FUIMOS','FUISTEIS','FUERON'],
    'IR':['GO','FUI','FUISTE','FUE','FUIMOS','FUISTEIS','FUERON'],
    'ATRAVESAR':['CROSS OVER','ATRAVES&Eacute;','ATRAVESASTE','ATRAVES&Oacute;','ATRAVESAMOS','ATRAVESASTEIS','ATRAVESARON'],
    'DESPERTAR':['WAKE UP','DESPERT&Eacute;','DESPERTASTE','DESPERT&Oacute;','DESPERTAMOS','DESPERTASTEIS','DESPERTARON'],
    'EMPEZAR':['START','EMPEZ&Eacute;','EMPEZASTE','EMPEZ&Oacute;','EMPEZAMOS','EMPEZASTEIS','EMPEZARON'],
    'PENSAR':['THINK','PENS&Eacute;','PENSASTE','PENS&Oacute;','PENSAMOS','PENSASTEIS','PENSARON'],
    'SENTAR':['SIT','SENT&Eacute;','SENTASTE','SENT&Oacute;','SENTAMOS','SENTASTEIS','SENTARON'],
    'ADVERTIR':['WARN','ADVERT&Iacute;','ADVERTISTE','ADVERTI&Oacute;','ADVERTIMOS','ADVERTISTEIS','ADVERTIERON'],
    'PROMETIR':['PROMISE','PROMET&Iacute;','PROMETISTE','PROMETI&Oacute;','PROMETIMOS','PROMETISTEIS','PROMETIERON'],
    'ENCONTRAR':['FIND','ENCONTR&Eacute;','ENCONTRASTE','ENCONTR&Oacute;','ENCONTRAMOS','ENCONTRASTEIS','ENCONTRARON'],
    'PODER':['CAN','PUD&Eacute;','PUDISTE','PUDO','PUDIMOS','PUDISTEIS','PUDIERON'],
    'VOLVER':['RETURN','VOLV&Iacute;','VOLVISTE','VOLVI&Oacute;','VOLVIMOS','VOLVISTEIS','VOLVIERON'],
    'DORMIR':['SLEEP','DORM&Iacute;','DORMISTE','DURMI&Oacute;','DORMIMOS','DORMISTEIS','DURMIERON'],
    'CAER':['FALL','CA&Iacute;','CAISTE','CAY&Oacute;','CAIMOS','CAISTEIS','CAYERON'],
    'DETENER':['STOP (ANOTHER)','DETUVE','DETUVISTE','DETUVO','DETUVIMOS','DETUVISTEIS','DETUVIERON'],
    'HACER':['DO/MAKE','HAC&Iacute;','HACISTE','HACI&Oacute;','HACIMOS','HACISTEIS','HACIERON'],
    'PROPONER':['PROPOSE','PROPUSE','PROPUSISTE','PROPUSO','PROPUSIMOS','PROPUSISTEIS','PROPUSIERON'],
    'TENER':['HAVE','TUVE','TUVISTE','TUVO','TUVIMOS','TUVISTEIS','TUVIERON'],
    'VALER':['VALUE','VAL&Iacute;','VALISTE','VALI&Oacute;','VALIMOS','VALISTEIS','VALIERON'],
    'DECIR':['SAY','DIJE','DIJISTE','DIJO','DIJIMOS','DIJISTEIS','DIJIERON'],
    'SEGUIR':['FOLLOW','SEGU&Iacute;','SEGUISTE','SIGI&Oacute;','SEGUIMOS','SEGUISTEIS','SIGIERON']};

var IMPERFECTO = {'AGARRAR':['GRAB','AGARRABA','AGARRABAS','AGARRABA','AGARR&Aacute;BAMOS','AGARRABAIS','AGARRABAN'],
    'AGOTAR':['AGONIZE','AGOTABA','AGOTABAS','AGOTABA','AGOT&Aacute;BAMOS','AGOTABAIS','AGOTABAN'],
    'ANGUSTIAR':['FEEL ANGUISH','ANGUSTIABA','ANGUSTIABAS','ANGUSTIABA','ANGUSTI&Aacute;BAMOS','ANGUSTIABAIS','ANGUSTIABAN'],
    'ASUSTAR':['ASTONISH','ASUSTABA','ASUSTABAS','ASUSTABA','ASUST&Aacute;BAMOS','ASUSTABAIS','ASUSTABAN'],
    'AVANZAR':['ADVANCE','AVANZABA','AVANZABAS','AVANZABA','AVANZ&Aacute;BAMOS','AVANZABAIS','AVANZABAN'],
    'AVISAR':['ADVISE','AVISABA','AVISABAS','AVISABA','AVIS&Aacute;BAMOS','AVISABAIS','AVISABAN'],
    'BAÑAR':['BATHE','BAÑABA','BAÑABAS','BAÑABA','BAÑ&Aacute;BAMOS','BAÑABAIS','BAÑABAN'],
    'BURLAR':['MOCK','BURLABA','BURLABAS','BURLABA','BURL&Aacute;BAMOS','BURLABAIS','BURLABAN'],
    'CAMINAR':['WALK','CAMINABA','CAMINABAS','CAMINABA','CAMIN&Aacute;BAMOS','CAMINABAIS','CAMINABAN'],
    'COCINAR':['COOK','COCINABA','COCINABAS','COCINABA','COCIN&Aacute;BAMOS','COCINABAIS','COCINABAN'],
    'CONTAR':['COUNT','CONTABA','CONTABAS','CONTABA','CONT&Aacute;BAMOS','CONTABAIS','CONTABAN'],
    'CRUZAR':['CROSS','CRUZABA','CRUZABAS','CRUZABA','CRUZ&Aacute;BAMOS','CRUZABAIS','CRUZABAN'],
    'DEJAR':['LEAVE','DEJABA','DEJABAS','DEJABA','DEJ&Aacute;BAMOS','DEJABAIS','DEJABAN'],
    'DESAYUNAR':['BREAKFAST','DESAYUNABA','DESAYUNABAS','DESAYUNABA','DESAYUN&Aacute;BAMOS','DESAYUNABAIS','DESAYUNABAN'],
    'DESCANSAR':['REST','DESCANSABA','DESCANSABAS','DESCANSABA','DESCANS&Aacute;BAMOS','DESCANSABAIS','DESCANSABAN'],
    'DISFRUTAR':['ENJOY','DISFRUTABA','DISFRUTABAS','DISFRUTABA','DISFRUT&Aacute;BAMOS','DISFRUTABAIS','DISFRUTABAN'],
    'DISPARAR':['SHOOT','DISPARABA','DISPARABAS','DISPARABA','DISPAR&Aacute;BAMOS','DISPARABAIS','DISPARABAN'],
    'EMPEZAR':['BEGIN','EMPEZABA','EMPEZABAS','EMPEZABA','EMPEZ&Aacute;BAMOS','EMPEZABAIS','EMPEZABAN'],
    'ENSEÑAR':['TEACH','ENSEÑABA','ENSEÑABAS','ENSEÑABA','ENSEÑ&Aacute;BAMOS','ENSEÑABAIS','ENSEÑABAN'],
    'ENTRAR':['ENTER','ENTRABA','ENTRABAS','ENTRABA','ENTR&Aacute;BAMOS','ENTRABAIS','ENTRABAN'],
    'ENVIAR':['SEND','ENVIABA','ENVIABAS','ENVIABA','ENVI&Aacute;BAMOS','ENVIABAIS','ENVIABAN'],
    'ESPERAR':['WAIT','ESPERABA','ESPERABAS','ESPERABA','ESPER&Aacute;BAMOS','ESPERABAIS','ESPERABAN'],
    'GANAR':['EARN','GANABA','GANABAS','GANABA','GAN&Aacute;BAMOS','GANABAIS','GANABAN'],
    'GRITAR':['YELL','GRITABA','GRITABAS','GRITABA','GRIT&Aacute;BAMOS','GRITABAIS','GRITABAN'],
    'GUIAR':['GUIDE','GUIABA','GUIABAS','GUIABA','GUI&Aacute;BAMOS','GUIABAIS','GUIABAN'],
    'GUSTAR':['LIKE','GUSTABA','GUSTABAS','GUSTABA','GUST&Aacute;BAMOS','GUSTABAIS','GUSTABAN'],
    'LLEGAR':['ARRIVE','LLEGABA','LLEGABAS','LLEGABA','LLEG&Aacute;BAMOS','LLEGABAIS','LLEGABAN'],
    'LOGRAR':['WIN','LOGRABA','LOGRABAS','LOGRABA','LOGR&Aacute;BAMOS','LOGRABAIS','LOGRABAN'],
    'MIRAR':['LOOK','MIRABA','MIRABAS','MIRABA','MIR&Aacute;BAMOS','MIRABAIS','MIRABAN'],
    'OLVIDAR':['FORGET','OLVIDABA','OLVIDABAS','OLVIDABA','OLVID&Aacute;BAMOS','OLVIDABAIS','OLVIDABAN'],
    'PARAR':['STOP (EVENT)','PARABA','PARABAS','PARABA','PAR&Aacute;BAMOS','PARABAIS','PARABAN'],
    'PREOCUPAR':['WORRY','PREOCUPABA','PREOCUPABAS','PREOCUPABA','PREOCUP&Aacute;BAMOS','PREOCUPABAIS','PREOCUPABAN'],
    'SACAR':['TAKE OUT','SACABA','SACABAS','SACABA','SAC&Aacute;BAMOS','SACABAIS','SACABAN'],
    'SALVAR':['SAVE','SALVABA','SALVABAS','SALVABA','SALV&Aacute;BAMOS','SALVABAIS','SALVABAN'],
    'TOSTAR':['TOAST','TOSTABA','TOSTABAS','TOSTABA','TOST&Aacute;BAMOS','TOSTABAIS','TOSTABAN'],
    'VACIAR':['VARY','VACIABA','VACIABAS','VACIABA','VACI&Aacute;BAMOS','VACIABAIS','VACIABAN'],
    'VOCIFERAR':['SHOUT','VOCIFERABA','VOCIFERABAS','VOCIFERABA','VOCIFER&Aacute;BAMOS','VOCIFERABAIS','VOCIFERABAN'],
    'VOLAR':['FLY','VOLABA','VOLABAS','VOLABA','VOL&Aacute;BAMOS','VOLABAIS','VOLABAN'],
    'ESTAR':['BE','ESTABA','ESTABAS','ESTABA','EST&Aacute;BAMOS','ESTABAIS','ESTABAN'],
    'ATRAVESAR':['CROSS OVER','ATRAVESABA','ATRAVESABAS','ATRAVESABA','ATRAVES&Aacute;BAMOS','ATRAVESABAIS','ATRAVESABAN'],
    'DESPERTAR':['WAKE UP','DESPERTABA','DESPERTABAS','DESPERTABA','DESPERT&Aacute;BAMOS','DESPERTABAIS','DESPERTABAN'],
    'EMPEZAR':['START','EMPEZABA','EMPEZABAS','EMPEZABA','EMPEZ&Aacute;BAMOS','EMPEZABAIS','EMPEZABAN'],
    'PENSAR':['THINK','PENSABA','PENSABAS','PENSABA','PENS&Aacute;BAMOS','PENSABAIS','PENSABAN'],
    'SENTAR':['SIT','SENTABA','SENTABAS','SENTABA','SENT&Aacute;BAMOS','SENTABAIS','SENTABAN'],
    'ENCONTRAR':['FIND','ENCONTRABA','ENCONTRABAS','ENCONTRABA','ENCONTR&Aacute;BAMOS','ENCONTRABAIS','ENCONTRABAN'],
    'COMER':['EAT','COM&Iacute;A','COM&Iacute;AS','COM&Iacute;A','COM&Iacute;AMOS','COM&Iacute;AIS','COM&Iacute;AN'],
    'CORRER':['RUN','CORR&Iacute;A','CORR&Iacute;AS','CORR&Iacute;A','CORR&Iacute;AMOS','CORR&Iacute;AIS','CORR&Iacute;AN'],
    'DEBER':['SHOULD','DEB&Iacute;A','DEB&Iacute;AS','DEB&Iacute;A','DEB&Iacute;AMOS','DEB&Iacute;AIS','DEB&Iacute;AN'],
    'ESCONDER':['HIDE','ESCOND&Iacute;A','ESCOND&Iacute;AS','ESCOND&Iacute;A','ESCOND&Iacute;AMOS','ESCOND&Iacute;AIS','ESCOND&Iacute;AN'],
    'LEER':['READ','LE&Iacute;A','LE&Iacute;AS','LE&Iacute;A','LE&Iacute;AMOS','LE&Iacute;AIS','LE&Iacute;AN'],
    'AGRADECER':['THANK','AGRADEC&Iacute;A','AGRADEC&Iacute;AS','AGRADEC&Iacute;A','AGRADEC&Iacute;AMOS','AGRADEC&Iacute;AIS','AGRADEC&Iacute;AN'],
    'CONOCER':['KNOW','CONOC&Iacute;A','CONOC&Iacute;AS','CONOC&Iacute;A','CONOC&Iacute;AMOS','CONOC&Iacute;AIS','CONOC&Iacute;AN'],
    'PERMANECER':['REMAIN','PERMANEC&Iacute;A','PERMANEC&Iacute;AS','PERMANEC&Iacute;A','PERMANEC&Iacute;AMOS','PERMANEC&Iacute;AIS','PERMANEC&Iacute;AN'],
    'VER':['SEE','V&Iacute;A','V&Iacute;AS','V&Iacute;A','V&Iacute;AMOS','V&Iacute;AIS','V&Iacute;AN'],
    'HABER':['EXIST','HAB&Iacute;A','HAB&Iacute;AS','HAB&Iacute;A','HAB&Iacute;AMOS','HAB&Iacute;AIS','HAB&Iacute;AN'],
    'SABER':['KNOW','SAB&Iacute;A','SAB&Iacute;AS','SAB&Iacute;A','SAB&Iacute;AMOS','SAB&Iacute;AIS','SAB&Iacute;AN'],
    'SER':['BE','ERA','ERAS','ERA','ÉRAMOS','ERAIS','ERAN'],
    'PODER':['CAN','POD&Iacute;A','POD&Iacute;AS','POD&Iacute;A','POD&Iacute;AMOS','POD&Iacute;AIS','POD&Iacute;AN'],
    'VOLVER':['RETURN','VOLV&Iacute;A','VOLV&Iacute;AS','VOLV&Iacute;A','VOLV&Iacute;AMOS','VOLV&Iacute;AIS','VOLV&Iacute;AN'],
    'CAER':['FALL','CA&Iacute;A','CA&Iacute;AS','CA&Iacute;A','CA&Iacute;AMOS','CA&Iacute;AIS','CA&Iacute;AN'],
    'DETENER':['STOP (ANOTHER)','DETEN&Iacute;A','DETEN&Iacute;AS','DETEN&Iacute;A','DETEN&Iacute;AMOS','DETEN&Iacute;AIS','DETEN&Iacute;AN'],
    'HACER':['DO/MAKE','HAC&Iacute;A','HAC&Iacute;AS','HAC&Iacute;A','HAC&Iacute;AMOS','HAC&Iacute;AIS','HAC&Iacute;AN'],
    'PROPONER':['PROPOSE','PROPON&Iacute;A','PROPON&Iacute;AS','PROPON&Iacute;A','PROPON&Iacute;AMOS','PROPON&Iacute;AIS','PROPON&Iacute;AN'],
    'TENER':['HAVE','TEN&Iacute;A','TEN&Iacute;AS','TEN&Iacute;A','TEN&Iacute;AMOS','TEN&Iacute;AIS','TEN&Iacute;AN'],
    'VALER':['VALUE','VAL&Iacute;A','VAL&Iacute;AS','VAL&Iacute;A','VAL&Iacute;AMOS','VAL&Iacute;AIS','VAL&Iacute;AN'],
    'ESCRIBIR':['WRITE','ESCRIB&Iacute;A','ESCRIB&Iacute;AS','ESCRIB&Iacute;A','ESCRIB&Iacute;AMOS','ESCRIB&Iacute;AIS','ESCRIB&Iacute;AN'],
    'PRESUMIR':['PRESUME','PRESUM&Iacute;A','PRESUM&Iacute;AS','PRESUM&Iacute;A','PRESUM&Iacute;AMOS','PRESUM&Iacute;AIS','PRESUM&Iacute;AN'],
    'SUMERGIR':['DIVE','SUMERG&Iacute;A','SUMERG&Iacute;AS','SUMERG&Iacute;A','SUMERG&Iacute;AMOS','SUMERG&Iacute;AIS','SUMERG&Iacute;AN'],
    'VIVIR':['LIVE','VIV&Iacute;A','VIV&Iacute;AS','VIV&Iacute;A','VIV&Iacute;AMOS','VIV&Iacute;AIS','VIV&Iacute;AN'],
    'IR':['GO','IBA','IBAS','IBA','IBAMOS','IBAIS','IBAN'],
    'ADVERTIR':['WARN','ADVERT&Iacute;A','ADVERT&Iacute;AS','ADVERT&Iacute;A','ADVERT&Iacute;AMOS','ADVERT&Iacute;AIS','ADVERT&Iacute;AN'],
    'PROMETIR':['PROMISE','PROMET&Iacute;A','PROMET&Iacute;AS','PROMET&Iacute;A','PROMET&Iacute;AMOS','PROMET&Iacute;AIS','PROMET&Iacute;AN'],
    'DORMIR':['SLEEP','DORM&Iacute;A','DORM&Iacute;AS','DORM&Iacute;A','DORM&Iacute;AMOS','DORM&Iacute;AIS','DORM&Iacute;AN'],
    'DECIR':['SAY','DEC&Iacute;A','DEC&Iacute;AS','DEC&Iacute;A','DEC&Iacute;AMOS','DEC&Iacute;AIS','DEC&Iacute;AN'],
    'SEGUIR':['FOLLOW','SEGU&Iacute;A','SEGU&Iacute;AS','SEGU&Iacute;A','SEGU&Iacute;AMOS','SEGU&Iacute;AIS','SEGU&Iacute;AN']};

var IMPERETIVO = {'AGARRAR':['GRAB','--','NO AGARRES','AGARRE','AGARREMOS','NO AGARR&Eacute;IS','AGARREN','AGARRA','AGARRAD'],
    'AGOTAR':['AGONIZE','--','NO AGOTES','AGOTE','AGOTEMOS','NO AGOT&Eacute;IS','AGOTEN','AGOTA','AGOTAD'],
    'ANGUSTIAR':['FEEL ANGUISH','--','NO ANGUSTIES','ANGUSTIE','ANGUSTIEMOS','NO ANGUSTI&Eacute;IS','ANGUSTIEN','ANGUSTIA','ANGUSTIAD'],
    'ASUSTAR':['ASTONISH','--','NO ASUSTES','ASUSTE','ASUSTEMOS','NO ASUST&Eacute;IS','ASUSTEN','ASUSTA','ASUSTAD'],
    'AVANZAR':['ADVANCE','--','NO AVANZES','AVANZE','AVANZEMOS','NO AVANZ&Eacute;IS','AVANZEN','AVANZA','AVANZAD'],
    'AVISAR':['ADVISE','--','NO AVISES','AVISE','AVISEMOS','NO AVIS&Eacute;IS','AVISEN','AVISA','AVISAD'],
    'BAÑAR':['BATHE','--','NO BAÑES','BAÑE','BAÑEMOS','NO BAÑ&Eacute;IS','BAÑEN','BAÑA','BAÑAD'],
    'BURLAR':['MOCK','--','NO BURLES','BURLE','BURLEMOS','NO BURL&Eacute;IS','BURLEN','BURLA','BURLAD'],
    'CAMINAR':['WALK','--','NO CAMINES','CAMINE','CAMINEMOS','NO CAMIN&Eacute;IS','CAMINEN','CAMINA','CAMINAD'],
    'COCINAR':['COOK','--','NO COCINES','COCINE','COCINEMOS','NO COCIN&Eacute;IS','COCINEN','COCINA','COCINAD'],
    'CONTAR':['COUNT','--','NO CONTES','CONTE','CONTEMOS','NO CONT&Eacute;IS','CONTEN','CONTA','CONTAD'],
    'CRUZAR':['CROSS','--','NO CRUZES','CRUZE','CRUZEMOS','NO CRUZ&Eacute;IS','CRUZEN','CRUZA','CRUZAD'],
    'DEJAR':['LEAVE','--','NO DEJES','DEJE','DEJEMOS','NO DEJ&Eacute;IS','DEJEN','DEJA','DEJAD'],
    'DESAYUNAR':['BREAKFAST','--','NO DESAYUNES','DESAYUNE','DESAYUNEMOS','NO DESAYUN&Eacute;IS','DESAYUNEN','DESAYUNA','DESAYUNAD'],
    'DESCANSAR':['REST','--','NO DESCANSES','DESCANSE','DESCANSEMOS','NO DESCANS&Eacute;IS','DESCANSEN','DESCANSA','DESCANSAD'],
    'DISFRUTAR':['ENJOY','--','NO DISFRUTES','DISFRUTE','DISFRUTEMOS','NO DISFRUT&Eacute;IS','DISFRUTEN','DISFRUTA','DISFRUTAD'],
    'DISPARAR':['SHOOT','--','NO DISPARES','DISPARE','DISPAREMOS','NO DISPAR&Eacute;IS','DISPAREN','DISPARA','DISPARAD'],
    'EMPEZAR':['BEGIN','--','NO EMPEZES','EMPEZE','EMPEZEMOS','NO EMPEZ&Eacute;IS','EMPEZEN','EMPEZA','EMPEZAD'],
    'ENSEÑAR':['TEACH','--','NO ENSEÑES','ENSEÑE','ENSEÑEMOS','NO ENSEÑ&Eacute;IS','ENSEÑEN','ENSEÑA','ENSEÑAD'],
    'ENTRAR':['ENTER','--','NO ENTRES','ENTRE','ENTREMOS','NO ENTR&Eacute;IS','ENTREN','ENTRA','ENTRAD'],
    'ENVIAR':['SEND','--','NO ENVIES','ENVIE','ENVIEMOS','NO ENVI&Eacute;IS','ENVIEN','ENVIA','ENVIAD'],
    'ESPERAR':['WAIT','--','NO ESPERES','ESPERE','ESPEREMOS','NO ESPER&Eacute;IS','ESPEREN','ESPERA','ESPERAD'],
    'GANAR':['EARN','--','NO GANES','GANE','GANEMOS','NO GAN&Eacute;IS','GANEN','GANA','GANAD'],
    'GRITAR':['YELL','--','NO GRITES','GRITE','GRITEMOS','NO GRIT&Eacute;IS','GRITEN','GRITA','GRITAD'],
    'GUIAR':['GUIDE','--','NO GUIES','GUIE','GUIEMOS','NO GUI&Eacute;IS','GUIEN','GUIA','GUIAD'],
    'GUSTAR':['LIKE','--','NO GUSTES','GUSTE','GUSTEMOS','NO GUST&Eacute;IS','GUSTEN','GUSTA','GUSTAD'],
    'LLEGAR':['ARRIVE','--','NO LLEGES','LLEGE','LLEGEMOS','NO LLEG&Eacute;IS','LLEGEN','LLEGA','LLEGAD'],
    'LOGRAR':['WIN','--','NO LOGRES','LOGRE','LOGREMOS','NO LOGR&Eacute;IS','LOGREN','LOGRA','LOGRAD'],
    'MIRAR':['LOOK','--','NO MIRES','MIRE','MIREMOS','NO MIR&Eacute;IS','MIREN','MIRA','MIRAD'],
    'OLVIDAR':['FORGET','--','NO OLVIDES','OLVIDE','OLVIDEMOS','NO OLVID&Eacute;IS','OLVIDEN','OLVIDA','OLVIDAD'],
    'PARAR':['STOP (EVENT)','--','NO PARES','PARE','PAREMOS','NO PAR&Eacute;IS','PAREN','PARA','PARAD'],
    'PREOCUPAR':['WORRY','--','NO PREOCUPES','PREOCUPE','PREOCUPEMOS','NO PREOCUP&Eacute;IS','PREOCUPEN','PREOCUPA','PREOCUPAD'],
    'SACAR':['TAKE OUT','--','NO SACES','SACE','SACEMOS','NO SAC&Eacute;IS','SACEN','SACA','SACAD'],
    'SALVAR':['SAVE','--','NO SALVES','SALVE','SALVEMOS','NO SALV&Eacute;IS','SALVEN','SALVA','SALVAD'],
    'TOSTAR':['TOAST','--','NO TOSTES','TOSTE','TOSTEMOS','NO TOST&Eacute;IS','TOSTEN','TOSTA','TOSTAD'],
    'VACIAR':['VARY','--','NO VACIES','VACIE','VACIEMOS','NO VACI&Eacute;IS','VACIEN','VACIA','VACIAD'],
    'VOCIFERAR':['SHOUT','--','NO VOCIFERES','VOCIFERE','VOCIFEREMOS','NO VOCIFER&Eacute;IS','VOCIFEREN','VOCIFERA','VOCIFERAD'],
    'VOLAR':['FLY','--','NO VOLES','VOLE','VOLEMOS','NO VOL&Eacute;IS','VOLEN','VOLA','VOLAD'],
    'ESTAR':['BE','--','NO ESTOES','ESTOE','ESTEMOS','NO EST&Eacute;IS','ESTOEN','EST&Aacute;','EST&Aacute;D'],
    'ATRAVESAR':['CROSS OVER','--','NO ATRAVIESES','ATRAVIESE','ATRAVESEMOS','NO ATRAVES&Eacute;IS','ATRAVIESEN','ATRAVIESA','ATRAVIESAD'],
    'DESPERTAR':['WAKE UP','--','NO DESPIERTES','DESPIERTE','DESPERTEMOS','NO DESPERT&Eacute;IS','DESPIERTEN','DESPIERTA','DESPIERTAD'],
    'EMPEZAR':['START','--','NO EMPIEZES','EMPIEZE','EMPEZEMOS','NO EMPEZ&Eacute;IS','EMPIEZEN','EMPIEZA','EMPIEZAD'],
    'PENSAR':['THINK','--','NO PIENSES','PIENSE','PENSEMOS','NO PENS&Eacute;IS','PIENSEN','PIENSA','PIENSAD'],
    'SENTAR':['SIT','--','NO SIENTES','SIENTE','SENTEMOS','NO SENT&Eacute;IS','SIENTEN','SIENTA','SIENTAD'],
    'ENCONTRAR':['FIND','--','NO ENCUENTRES','ENCUENTRE','ENCONTREMOS','NO ENCONTR&Eacute;IS','ENCUENTREN','ENCUENTRA','ENCUENTRAD'],
    'COMER':['EAT','--','NO COMAS','COMA','COMAMOS','NO COM&Aacute;IS','COMAN','COME','COMED'],
    'CORRER':['RUN','--','NO CORRAS','CORRA','CORRAMOS','NO CORR&Aacute;IS','CORRAN','CORRE','CORRED'],
    'DEBER':['SHOULD','--','NO DEBAS','DEBA','DEBAMOS','NO DEB&Aacute;IS','DEBAN','DEBE','DEBED'],
    'ESCONDER':['HIDE','--','NO ESCONDAS','ESCONDA','ESCONDAMOS','NO ESCOND&Aacute;IS','ESCONDAN','ESCONDE','ESCONDED'],
    'LEER':['READ','--','NO LEAS','LEA','LEAMOS','NO LE&Aacute;IS','LEAN','LEE','LEED'],
    'AGRADECER':['THANK','--','NO AGRADEZCAS','AGRADEZCA','AGRADECAMOS','NO AGRADEC&Aacute;IS','AGRADEZCAN','AGRADECE','AGRADECED'],
    'CONOCER':['KNOW','--','NO CONOZCAS','CONOZCA','CONOCAMOS','NO CONOC&Aacute;IS','CONOZCAN','CONOCE','CONOCED'],
    'PERMANECER':['REMAIN','--','NO PERMANEZCAS','PERMANEZCA','PERMANECAMOS','NO PERMANEC&Aacute;IS','PERMANEZCAN','PERMANECE','PERMANECED'],
    'VER':['SEE','--','NO VEAS','VEA','VEAMOS','NO VE&Aacute;IS','VEAN','VEE','VEED'],
    'HABER':['EXIST','--','NO HAS','HA','HABAMOS','NO HAB&Aacute;IS','HAN','HABE','HABED'],
    'SABER':['KNOW','--','NO SAS','SA','SABAMOS','NO SAB&Aacute;IS','SAN','SABE','SABED'],
    'SER':['BE','--','NO SEAS','SEA','SAMOS','NO S&Aacute;IS','SEAN','S&Eacute;','SED'],
    'PODER':['CAN','--','NO PUEDAS','PUEDA','PODAMOS','NO POD&Aacute;IS','PUEDAN','PUEDE','PUEDED'],
    'VOLVER':['RETURN','--','NO VUELVAS','VUELVA','VOLVAMOS','NO VOLV&Aacute;IS','VUELVAN','VUELVE','VUELVED'],
    'CAER':['FALL','--','NO CAIGAS','CAIGA','CAIGAMOS','NO CAIG&Aacute;IS','CAIGAN','CAE','CAED'],
    'DETENER':['STOP (ANOTHER)','--','NO DETENGAS','DETENGA','DETENGAMOS','NO DETENG&Aacute;IS','DETENGAN','DETEN','DETENED'],
    'HACER':['DO/MAKE','--','NO HAGAS','HAGA','HAGAMOS','NO HAG&Aacute;IS','HAGAN','HACE','HACED'],
    'PROPONER':['PROPOSE','--','NO PROPONGAS','PROPONGA','PROPONGAMOS','NO PROPONG&Aacute;IS','PROPONGAN','PROPON','PROPONED'],
    'TENER':['HAVE','--','NO TENGAS','TENGA','TENGAMOS','NO TENG&Aacute;IS','TENGAN','TEN','TENED'],
    'VALER':['VALUE','--','NO VALGAS','VALGA','VALGAMOS','NO VALG&Aacute;IS','VALGAN','VALE','VALED'],
    'ESCRIBIR':['WRITE','--','NO ESCRIBAS','ESCRIBA','ESCRIBAMOS','NO ESCRIB&Aacute;IS','ESCRIBAN','ESCRIBE','ESCRIBID'],
    'PRESUMIR':['PRESUME','--','NO PRESUMAS','PRESUMA','PRESUMAMOS','NO PRESUM&Aacute;IS','PRESUMAN','PRESUME','PRESUMID'],
    'SUMERGIR':['DIVE','--','NO SUMERJAS','SUMERJA','SUMERGAMOS','NO SUMERG&Aacute;IS','SUMERJAN','SUMERGE','SUMERGID'],
    'VIVIR':['LIVE','--','NO VIVAS','VIVA','VIVAMOS','NO VIV&Aacute;IS','VIVAN','VIVE','VIVID'],
    'IR':['GO','--','NO VAS','VA','VAMOS','NO V&Aacute;IS','VAN','VE','ID'],
    'ADVERTIR':['WARN','--','NO ADVIERTAS','ADVIERTA','ADVERTAMOS','NO ADVERT&Aacute;IS','ADVIERTAN','ADVIERTA','ADVIERTID'],
    'PROMETIR':['PROMISE','--','NO PROMIETAS','PROMIETA','PROMETAMOS','NO PROMET&Aacute;IS','PROMIETAN','PROMIETE','PROMIETID'],
    'DORMIR':['SLEEP','--','NO DUERMAS','DUERMA','DORMAMOS','NO DORM&Aacute;IS','DUERMAN','DUERME','DORMID'],
    'DECIR':['SAY','--','NO DIGAS','DIGA','DIGAMOS','NO DIG&Aacute;IS','DIGAN','DI','DECID'],
    'SEGUIR':['FOLLOW','--','NO SIGAS','SIGA','SIGAMOS','NO SIG&Aacute;IS','SIGAN','SIGUE','SIGUID']};

var PARTICIPIO = {'AGARRAR':['GRAB','AGARRADO'],
    'AGOTAR':['AGONIZE','AGOTADO'],
    'ANGUSTIAR':['FEEL ANGUISH','ANGUSTIADO'],
    'ASUSTAR':['ASTONISH','ASUSTADO'],
    'AVANZAR':['ADVANCE','AVANZADO'],
    'AVISAR':['ADVISE','AVISADO'],
    'BAÑAR':['BATHE','BAÑADO'],
    'BURLAR':['MOCK','BURLADO'],
    'CAMINAR':['WALK','CAMINADO'],
    'COCINAR':['COOK','COCINADO'],
    'CONTAR':['COUNT','CONTADO'],
    'CRUZAR':['CROSS','CRUZADO'],
    'DEJAR':['LEAVE','DEJADO'],
    'DESAYUNAR':['BREAKFAST','DESAYUNADO'],
    'DESCANSAR':['REST','DESCANSADO'],
    'DISFRUTAR':['ENJOY','DISFRUTADO'],
    'DISPARAR':['SHOOT','DISPARADO'],
    'EMPEZAR':['BEGIN','EMPEZADO'],
    'ENSEÑAR':['TEACH','ENSEÑADO'],
    'ENTRAR':['ENTER','ENTRADO'],
    'ENVIAR':['SEND','ENVIADO'],
    'ESPERAR':['WAIT','ESPERADO'],
    'GANAR':['EARN','GANADO'],
    'GRITAR':['YELL','GRITADO'],
    'GUIAR':['GUIDE','GUIADO'],
    'GUSTAR':['LIKE','GUSTADO'],
    'LLEGAR':['ARRIVE','LLEGADO'],
    'LOGRAR':['WIN','LOGRADO'],
    'MIRAR':['LOOK','MIRADO'],
    'OLVIDAR':['FORGET','OLVIDADO'],
    'PARAR':['STOP (EVENT)','PARADO'],
    'PREOCUPAR':['WORRY','PREOCUPADO'],
    'SACAR':['TAKE OUT','SACADO'],
    'SALVAR':['SAVE','SALVADO'],
    'TOSTAR':['TOAST','TOSTADO'],
    'VACIAR':['VARY','VACIADO'],
    'VOCIFERAR':['SHOUT','VOCIFERADO'],
    'VOLAR':['FLY','VOLADO'],
    'ESTAR':['BE','ESTADO'],
    'ATRAVESAR':['CROSS OVER','ATRAVESADO'],
    'DESPERTAR':['WAKE UP','DESPERTADO'],
    'EMPEZAR':['START','EMPEZADO'],
    'PENSAR':['THINK','PENSADO'],
    'SENTAR':['SIT','SENTADO'],
    'ENCONTRAR':['FIND','ENCONTRADO'],
    'COMER':['EAT','COMIDO'],
    'CORRER':['RUN','CORRIDO'],
    'DEBER':['SHOULD','DEBIDO'],
    'ESCONDER':['HIDE','ESCONDIDO'],
    'LEER':['READ','LEIDO'],
    'AGRADECER':['THANK','AGRADECIDO'],
    'CONOCER':['KNOW','CONOCIDO'],
    'PERMANECER':['REMAIN','PERMANECIDO'],
    'VER':['SEE','VISTO'],
    'HABER':['EXIST','HABIDO'],
    'SABER':['KNOW','SABIDO'],
    'SER':['BE','SIDO'],
    'PODER':['CAN','PODIDO'],
    'VOLVER':['RETURN','VUELTO'],
    'CAER':['FALL','CAIDO'],
    'DETENER':['STOP (ANOTHER)','DETENIDO'],
    'HACER':['DO/MAKE','HECHO'],
    'PROPONER':['PROPOSE','PROPUESTO'],
    'TENER':['HAVE','TENIDO'],
    'VALER':['VALUE','VALIDO'],
    'ESCRIBIR':['WRITE','ESCRITO'],
    'PRESUMIR':['PRESUME','PRESUMIDO'],
    'SUMERGIR':['DIVE','SUMERGIDO'],
    'VIVIR':['LIVE','VIVIDO'],
    'IR':['GO','IDO'],
    'ADVERTIR':['WARN','ADVERTIDO'],
    'PROMETIR':['PROMISE','PROMETIDO'],
    'DORMIR':['SLEEP','DORMIDO'],
    'DECIR':['SAY','DICHO'],
    'SEGUIR':['FOLLOW','SEGUIDO']}
