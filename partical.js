class Partical{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 2;
        this.vx = random(-2,2);
        this.vy = random(-2,2);
        this.collided = false;
    }


    checkEdges(){
        if(this.x > width || this.x <0){
            this.vx *= -1;
        }
        if(this.y > height || this.y <0){
            this.vy *= -1;
        }
    }

    collides(partical){
        let distance = dist(this.x, this.y, partical.x, partical.y);
        if(distance <= this.r + partical.r){
            return true;
        }else{
            return false;
        }
    }

    update(){
        this.checkEdges()
        this.x += this.vx;
        this.y += this.vy;
    }


    display(){
        if(this.collided){
            fill(255, 0, 255);
        }else{
            fill(0);
        }
        noStroke();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}