# biblioquiz

A litle code to ask you about bibliography.

##How to build...

- Add the url for your "get_data.php" in js/biblioquiz.js (line 60).

- Change "get_data.php" for whatever you need that returns a json in this format:

{"authors":[
	{"nam": "Maslow", "tit":"A Theory of Human Motivation", "ed":"Psychological Review","yr":1943,"ord":1},
	{"nam": "Hockett", "tit":"The Origin of Speech", "ed":"Scientific American","yr":1960,"ord":1},
	{"nam": "Halliday", "tit":"Intonation and Grammar in British English", "ed":"The Hague. Mounton Publishers","yr":1967,"ord":1},
	{"nam": "Gardner & Lambert", "tit":"Attitudes and Motivation in Second Language Learning", "ed":"Mass. Newbury House","yr":1972,"ord":1},
	{"nam": "Mehrabian", "tit":"Silent Messages", "ed":"Belmont. Wadsworth Publishing Company","yr":1972,"ord":2},
	{"nam": "Davis", "tit":"Inside Intuition: What We Know About NonVerbal Communication", "ed":"American Anthropologist","yr":1975,"ord":1},
	{"nam": "Suits", "tit":"The Grasshopper: Games, Life and Utopia", "ed":"Toronto University Press","yr":1978,"ord":1},
	{"nam": "Tarone", "tit":"Communication Strategies: Foreigner Talk and Repair", "ed":"Language Learning","yr":1978,"ord":2},
	{"nam": "Canale & Swayn", "tit":"Theoretical Bases of Communicative Approaches to Second Language Teaching and Testing", "ed":"Applied Linguistics","yr":1980,"ord":1},
	{"nam": "Jakobson", "tit":"The Framework of Language", "ed":"Michigan Studies in the Humanity","yr":1980,"ord":2},
	{"nam": "Smith S.", "tit":"The Theater Arts and the Teaching of Second Languages", "ed":"Mass. Addison Wesley","yr":1984,"ord":1},
	{"nam": "Krashen", "tit":"The Input Hypothesis: Issues and Implications", "ed":"N.Y. Longman","yr":1985,"ord":1},
	{"nam": "Nunan", "tit":"The Learner-Centred Curriculum", "ed":"Cambridge. C.U.P.","yr":1988,"ord":1},
	{"nam": "Coll, Palacios & Marchesi", "tit":"Desarrollo Psicológico y Educación, Vol I && II.", "ed":"Alianza","yr":1990,"ord":1},
	{"nam": "Estaire & Zanón", "tit":"El Diseño de Unidades Didácticas Mediante Tareas: Principios y Desarrollo", "ed":"CL&E","yr":1990,"ord":2},
	{"nam": "Brewster, Ellis & Girard", "tit":"The Primary English Teacher's Guide", "ed":"Penguin","yr":1991,"ord":1},
	{"nam": "Van der Walt", "tit":"Linguistics and Second Language Teaching: An Assesment", "ed":"Stellen Bosch Papers in Linguistics","yr":1992,"ord":1},
	{"nam": "Campbell & Kryszewska", "tit":"Learner-Based Teaching", "ed":"Oxford. O.U.P.","yr":1992,"ord":1},
	{"nam": "Quintana", "tit":"Literatura y Enseñanza E/LE", "ed":"ASELE","yr":1993,"ord":1},
	{"nam": "Underhill", "tit":"Sound Foundations", "ed":"Oxford. MacMillan Education","yr":1994,"ord":1},
	{"nam": "Saperston, Wigram & West", "tit":"Art and Science of Music Therapy: A Handbook", "ed":"Routledge","yr":1995,"ord":1},
	{"nam": "Nunan", "tit":"Syllabus Design", "ed":"Oxford. O.U.P.","yr":1998,"ord":1},
	{"nam": "Crowther & Laird", "tit":"Oxford Guide to American and Brisith Cultura", "ed":"Oxford. O.U.P.","yr":1999,"ord":1},
	{"nam": "Schmidt", "tit":"Teaching Culture and Language for Specific Purposes", "ed":"Applied Linguistics Association of Australia","yr":2000,"ord":1},
	{"nam": "Roach", "tit":"English Phonetics and Phonology", "ed":"Oxford. O.U.P.","yr":2001,"ord":1},
	{"nam": "Brewster, Ellis", "tit":"Tell it Again", "ed":"London. Penguin","yr":2002,"ord":1},
	{"nam": "Crystal", "tit":"The Cambridge Encyclopedia of English Language", "ed":"Cambridge. C.U.P.","yr":2003,"ord":1},
	{"nam": "Madrid & McLaren", "tit":"TEFL in Primary Education", "ed":"Granada University","yr":2004,"ord":1},
	{"nam": "Smith", "tit":"Understanding Reading", "ed":"N.J. Lawrence Elbaum Associates","yr":2004,"ord":2},
	{"nam": "Widdowson", "tit":"Text, Context, Pretext", "ed":"Blackwell","yr":2004,"ord":3},
	{"nam": "Herrera, García & González", "tit":"Guía para Elaborar Programaciones y Unidades Didácticas en Educación Infantil y Primaria", "ed":"EOS","yr":2005,"ord":1},
	{"nam": "Yule", "tit":"The Study of Language", "ed":"Cambridge. C.U.P.","yr":2006,"ord":1},
	{"nam": "Harmer", "tit":"The Practice of English Language Teaching", "ed":"Essex. Longman","yr":2007,"ord":1},
	{"nam": "Dietzee & Kashin", "tit":"Learning and Playing in Early Childhood Education", "ed":"Pearson Education","yr":2011,"ord":1},
	{"nam": "Lillard et al", "tit":"The Impact of Pretend Play on Children's Development: A Review of the Evidence", "ed":"Psychological Bulletin","yr":2012,"ord":1},
	{"nam": "Partanen", "tit":"Learning Induced Neuro Plasticity of Speech Processing Before Birth", "ed":"www.pnas.org","yr":2013,"ord":1},
	{"nam": "CEJA", "tit":"Guía Práctica para el Desarrollo de las Competencias Básicas", "ed":"CEJA","yr":2015,"ord":1}
	]
}

- If needed, use "renoir_engine" and add config values in the "configuracion" directory.

# archiving

The itch that was scratched by this repository was scratched in 2017 and never came back. This repository will be no longer updated.
