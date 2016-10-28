var games;
var namesPS3 = [];
var namesWii = [];
var names360 = [];
var namesPC = [];

function preload() {
  games = loadTable(
    'gamedata.csv',
    'csv',
    'header');
}

function setup() { 
  //noCanvas();
  createCanvas(400, 400);
  slider = createSlider(0,10,5);
	print(games.getRowCount() + " total rows in table");
  print(games.getColumnCount() + " total columns in table");
} 

function draw() { 
  background(220);
  
  namesPS3.splice(0,namesPS3.length);
  names360.splice(0,names360.length);
  namesWii.splice(0,namesWii.length);
    namesPC.splice(0,namesPC.length);
  
   for (i = 0; i < games.getRowCount(); i++){
    if( games.getString(i,"Score") >= slider.value() && games.getString(i,"Platform") == "PlayStation 3"){
      namesPS3.push(games.getString(i,"Game"));
    }
    if( games.getString(i,"Score") >= slider.value() && games.getString(i,"Platform") == "Wii"){
      namesWii.push(games.getString(i,"Game"));
    }
     if( games.getString(i,"Score") >= slider.value() && games.getString(i,"Platform") == "Xbox 360"){
      names360.push(games.getString(i,"Game"));
    }
     if( games.getString(i,"Score") >= slider.value() && games.getString(i,"Platform") == "PC"){
      namesPC.push(games.getString(i,"Game"));
    }
  }
  textSize(32);
  fill(0,0,255);
  rect(20,(height - namesPS3.length/10), 80, height);
  text(namesPS3.length,20,(height - namesPS3.length/10));
  fill(0,255,0);
  rect(120,(height - names360.length/10), 80, height);
  text(names360.length,120,(height - names360.length/10));
  fill(255,0,0);
  rect(220,(height - namesWii.length/10), 80, height);
  text(namesWii.length,220,(height - namesWii.length/10));
  fill(0,0,0);
  rect(320,(height - namesPC.length/10), 80, height);
  text(namesPC.length,320,(height - namesPC.length/10));
 
  
 // createP(namesWii.length);
  //createP(names360.length);
textSize(26);
fill(0, 0, 0);
text("Review Score At or Above:  " + slider.value(), 10, 30);

}