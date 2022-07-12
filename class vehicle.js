class vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk(){
        return "beep";
} toString(){
    return 'the vehicle is a ${this.make} ${this.model} from ${this.year}.';
}
}

class car extends vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numwheels=4;
    }
}


class motercycle extends vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numwheels=2;
        
    }
    revEngine(){
        return "VROOM!!!";
    }
}
  class garage {
      constructor(capacity){
          this.vehicles=[];
          this.capacity=capacity;
      }
  }

add(newVehicle){
    if(!(newVehicle)){
        return "only vehicles are allowed in here!!"
    }
    if(this.vehicles.length>=this.capacity){
        return "Sorry we're full";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
}
