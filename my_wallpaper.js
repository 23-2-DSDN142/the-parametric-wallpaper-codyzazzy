//your parameter variables go here!
let rect_width  = 140;
let rect_height = 140;
let rectx = 0;
let recty = 0;
let random_colour_range_min = 0;
let random_colour_range_max = 255;
let mystrokeWeight = 3;
let translatex = 100;
let translatey = 0;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);//GRID_WALLPAPER or DEVELOP_GLYPH
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rotate the rectangle by 45 dergrees to the right
  push();
  translate(translatex, translatey);
  rotate(45);
  strokeWeight(mystrokeWeight);
  rect(recty, rectx, rect_width, rect_height);
  pop();

  push();
  translate(translatex, translatey+15);
  rotate(50);
  strokeWeight(mystrokeWeight-1);
  rect(recty*0.85, rectx*0.85, rect_width*0.85, rect_height*0.85);
  pop();
  
  push();
  translate(translatex, translatey+30);
  rotate(55);
  strokeWeight(mystrokeWeight-1);
  rect(recty*0.7, rectx*0.7, rect_width*0.7, rect_height*0.7);
  pop();
  
  push();
  translate(translatex, translatey+45);
  rotate(60);
  strokeWeight(mystrokeWeight-1);
  rect(recty*0.55, rectx*0.55, rect_width*0.55, rect_height*0.55);
  pop();
}

