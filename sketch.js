
let boids = [];
let num = 1000;

let quadtree;
let boundary;
let capacity = 3;

let perceptionRadious = 30;



function setup() {
    createCanvas(400, 400);

    boundary = new Rect(width/2, height/2, width/2, height/2);

    quadtree = new Quadtree(boundary, capacity);

    for(let i =0; i<num; i++){
        boids.push(new Boid(random(width), random(height)))
    }

}    


function draw() {
    background(220);
    print(frameRate());

    quadtree.clearQuadtree();

    for(let i = 0; i< num; i++){
        let p = new Point(boids[i].position.x, boids[i].position.y, boids[i]);
        quadtree.insert(p);

        let range = new Rect(boids[i].position.x, boids[i].position.y, perceptionRadious, perceptionRadious);
        let nearbyPoints = [];

        quadtree.query(range,nearbyPoints)

        let nearbyBoids = []; // Array to hold the extracted Boid objects
        for (let j = 0; j < nearbyPoints.length; j++) {
            if (nearbyPoints[j] && nearbyPoints[j].userData) { // Safeguard against undefined
                nearbyBoids.push(nearbyPoints[j].userData);
            }
        }


        boids[i].flock(nearbyBoids);
        boids[i].display();
        boids[i].update();
    }

    print(frameRate());

    quadtree.display();
}
