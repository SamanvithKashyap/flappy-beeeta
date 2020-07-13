class Planet{
    constructor(x,y){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("./images/planet.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
       
        
        
    }
};