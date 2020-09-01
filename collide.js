function touching(wall,bullet){
    if ((wall.width/2 + bullet.width/2) > (bullet.x - wall.x ) && (wall.width/2 + bullet.width/2) > (wall.x - bullet.x )){ //} && (wall.height/2 + car.height/2) > (car.y - wall.y ) && (wall.height/2 + car.height/2) > (wall.y - car.y ) ) {
      return true;
    }
  
    else{
      return false;
    }
  
  }