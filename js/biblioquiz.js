function DataStorage(){
	var items=[];

	this.get_item=function(i) {return items[i];}
	this.get_length=function() {return items.length;}
	this.add_item=function(item) {items.push(item);}
}

function CurrentReview(ds){
	var _dr=null;
	var _ds=ds;

	this.reset=function(){
		if(_dr) delete _dr;
		_dr=new DataReader(_ds);
	}

	this.is_done=function() {return _dr.is_done();}
	this.get_next_item=function() {return _dr.get_next_item();}
}

function CurrentQuiz(ds){
	var _dr=null;
	var _ds=ds;
	var _answers=Array();

	this.reset=function(){
		if(_dr) delete _dr;
		_dr=new DataReader(_ds);
		_answers.length=0;
	}
	
	this.find_by=function(f){
		while(!_dr.is_done()){
			var item=_dr.get_next_item();
			if(f(item)) _answers.push(item);
		}
	}

	this.get_answers=function() {return _answers;}
}

function DataReader(datastorage){

	var _ds=datastorage;
	var done=_ds.get_length() == 0;
	var index=0;

	this.get_next_item=function(){
		if(index >= ds.get_length()-1) done=true;
		return _ds.get_item(index++);
	}

	this.is_done=function() {return done;}
}

function init(){
	//Load data...
	loadJSON('**********************', function(response) {
		var actual_JSON = JSON.parse(response);
		for(var i in actual_JSON.authors) ds.add_item(actual_JSON.authors[i]);

		//Now make shit appear.
		btn_show_all.className='';
		btn_review.className='';
		btn_by_year.className='';
		btn_by_editorial.className='';
		btn_by_author.className='';
		btn_by_name.className='';

		//Setup buttons.
		btn_show_all.onclick=function(){show_all();};
		btn_review.onclick=function(){init_review();};
		btn_next.onclick=function(){next_review();};

		btn_by_year.onclick=function(){init_by_year();};
		btn_by_author.onclick=function(){init_by_author();};
		btn_by_editorial.onclick=function(){init_by_editorial();};
		btn_by_name.onclick=function(){init_by_name();};
		btn_answer.onclick=function(){answer_quiz();};
	});
}

function show_all(){
	question.className="hidden";
	btn_next.className="hidden";
	clear_table();
	table.className="";
	var dr=new DataReader(ds);
	while(!dr.is_done()){
		show_item_on_table(dr.get_next_item(), true);
	}
}

function init_review(){
	clear_table();
	question.className="hidden";
	table.className="";
	//Make "next" button appear.
	btn_next.className="";
	btn_answer.className="hidden";
	//Reset.
	cr.reset();
}

function answer_quiz(){
	clear_table();
	table.className="";
	btn_answer.className="hidden";
	var ans=qz.get_answers();
	for(var i=0; i<ans.length; ++i) show_item_on_table(ans[i], false);
}

function init_by_year(){
	var it=init_quiz_get_item();
	qz.find_by(function(item){return item.yr==it.yr;});
	set_question(it.yr);
}

function init_by_author(){
	var it=init_quiz_get_item();
	qz.find_by(function(item){return item.nam==it.nam;});
	set_question(it.nam);
}

function init_by_name(){
	var it=init_quiz_get_item();
	qz.find_by(function(item){return item.tit==it.tit;});
	set_question(it.tit);
}

function init_by_editorial(){
	var it=init_quiz_get_item();
	qz.find_by(function(item){return item.ed==it.ed;});
	set_question(it.ed);
}

function get_random_item(){
	//Choose a random element...
	var index=Math.floor((Math.random() * ds.get_length()-1)); 
	var item=ds.get_item(index);
	return item;
}

function set_question(val){
	question.className='';
	question.innerHTML=val;
	btn_next.className="hidden";
	btn_answer.className="";
}

function init_quiz_get_item(){
	qz.reset();
	clear_table();
	return get_random_item();
}

function clear_table(){
	document.getElementById("items_body").innerHTML='';
}

function next_review(){

	if(cr.is_done()){ return;}
	show_item_on_table(cr.get_next_item(), false);
	if(cr.is_done())btn_next.className="hidden";
}

function show_item_on_table(it, first){

	var tr=document.getElementById('templates').querySelectorAll('.list_item')[0].cloneNode(true);

	tr.querySelectorAll('td.name')[0].innerHTML=it.nam;
	tr.querySelectorAll('td.title')[0].innerHTML=it.tit;
	tr.querySelectorAll('td.editorial')[0].innerHTML=it.ed;
	tr.querySelectorAll('td.year')[0].innerHTML=it.yr;

	var body=document.getElementById("items_body");

	if(first) body.appendChild(tr);
	else body.insertBefore(tr, body.firstChild);
}

function loadJSON(filename, callback) {   
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', filename, true);
	xobj.onreadystatechange = function () {

		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

var btn_show_all=document.getElementById("btn_show_all");
var btn_review=document.getElementById("btn_review");
var btn_next=document.getElementById("btn_next");
var btn_answer=document.getElementById("btn_answer");
var btn_by_year=document.getElementById("btn_by_year");
var btn_by_author=document.getElementById("btn_by_author");
var btn_by_editorial=document.getElementById("btn_by_editorial");
var btn_by_name=document.getElementById("btn_by_name");
var table=document.getElementById("items");
var question=document.getElementById("question");
var ds=new DataStorage();
var cr=new CurrentReview(ds);
var qz=new CurrentQuiz(ds);
init();
