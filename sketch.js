// let quadtree;
// let boundary;
// let capacity = 1;
// let num  = 1000;


// let particals = [];

let boids = [];
let num = 500;



function setup() {
    createCanvas(400, 400);

    for(let i =0; i<num; i++){
        boids.push(new Boid(random(width), random(height)))
    }


    // for(let i=0; i<num; i++){
    //     particals[i] = new Partical(random(width), random(height));
    // }



    // boundary = new Rect(width/2, height/2, width/2, height/2);
    // quadtree = new Quadtree(boundary, capacity);
    //print(quadtree);
    

    // print(quadtree);
    
}

function draw() {
    background(220);
    for(let i = 0; i< num; i++){
        boids[i].flock(boids);
        boids[i].display();
        boids[i].update();
    }

    // quadtree.clearQuadtree();
    print(frameRate());

    // // Insert all particles into the quadtree
    // for (let i = 0; i < num; i++) {
    //     particals[i].collided = false; // Reset collision state
    //     let p = new Point(particals[i].x, particals[i].y, particals[i]);
    //     quadtree.insert(p);
    // }

    // // Check collisions efficiently
    // for (let i = 0; i < num; i++) {
    //     let range = new Rect(particals[i].x, particals[i].y, particals[i].r * 2, particals[i].r * 2);
    //     let foundPoints = [];
    //     quadtree.query(range, foundPoints);

    //     for (let j = 0; j < foundPoints.length; j++) {
    //         let p = foundPoints[j].userData;
    //         if (particals[i] !== p && particals[i].collides(p)) { 
    //             particals[i].collided = true;
    //             p.collided = true; 
    //             break;
    //         }
    //     }
    // }

    // // Update and display particles after collision checks
    // for (let i = 0; i < num; i++) {
    //     particals[i].update();
    //     particals[i].display();
    // }

    // quadtree.display();
}
