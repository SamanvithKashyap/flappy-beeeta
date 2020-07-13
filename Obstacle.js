class Obstacle{
    constructor(x,y){
        var options = {
           'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        //this.x = random(10,600);
        //this.y = random(10,600);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("./images/meteroid.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
       
        
        
    }
};