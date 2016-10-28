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
  createCanvas(420, 400);
  createP(" ");
  //createP("PS3-------360--------Wii-----PC");
  slider = createSlider(0,10,5);
  createP(" ");

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

  textSize(26);
  fill(0, 0, 0);
  text("Review Score At or Above: " + slider.value(), 10, 30);
  fill(0,0,255);
  rect(20,(height - namesPS3.length/10), 80, namesPS3.length/10);
  text("PS3", 20, 60);
  text(namesPS3.length,22,(height - namesPS3.length/10-2));
  fill(0,240,0);
  rect(120,(height - names360.length/10), 80, names360.length/10);
  text("360", 120, 60);
  text(names360.length,122,(height - names360.length/10-2));
  fill(255,0,0);
  rect(220,(height - namesWii.length/10), 80, namesWii.length/10);
  text("Wii", 220, 60);
  text(namesWii.length,222,(height - namesWii.length/10-2));
  fill(0,0,0);
  rect(320,(height - namesPC.length/10), 80, namesPC.length/10);
  text("PC", 320, 60);
  text(namesPC.length,322,(height - namesPC.length/10-2));
 
  


}