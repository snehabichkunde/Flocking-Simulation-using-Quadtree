let perceptionRadious = 10;

class Boid{

    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(-3, 3));
        this.acceleration = createVector(0, 0);
        this.maxSpeed = 1;
        this.maxForce = 1;
    }

    edges(){
        if(this.position.x > width){
            this.position.x = 0;
        }
        if(this.position.x < 0){
            this.position.x = width;
        }
        if(this.position.y > height){
            this.position.y = 0;
        }
        if(this.position.y < 0){
            this.position.y = height;
        }
    }

    update(){
        this.edges();
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    // make flock of boids to travel in the same direction 
    alignment(boids){
        let steering = createVector();   // basically steering force 
        let total = 0; // number of neighbours

        for(let i=0; i<boids.length; i++){
            let d = dist(this.position.x, this.position.y, boids[i].position.x, boids[i].position.y);
            if(boids[i]!= this && d < perceptionRadious){
                steering.add(boids[i].velocity);
                total++;
            }
        }
        if(total>0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        this.acceleration = steering;
    }

    cohension(){

    }
    

    seperation(){

    }

    display(){
        noStroke();
        fill(0);
        ellipse(this.position.x, this.position.y,  3, 3)
    }

}