let quadtree;
let boundary;
let capacity = 1;
let num  = 500;

function setup() {
    createCanvas(400, 400);
    boundary = new Rect(width/2, height/2, width/2, height/2);
    quadtree = new Quadtree(boundary, capacity);
    //print(quadtree);
    for(let i=0; i<num; i++){
        let p = new Point(random(width), random(height));
        quadtree.insert(p);
    }

    print(quadtree);
    
}

function draw() {
    background(220);

    let range = new Rect(mouseX, mouseY, 40, 40);
    noFill();
    stroke(0, 255, 0);
    rect(range.x - range.width, range.y - range.height, range.width * 2, range.height * 2);
    let foundPoints = [];
    quadtree.query(range, foundPoints);
    quadtree.display();
    for(let i=0; i<foundPoints.length; i++){
        noStroke();
        fill(255, 0, 0);
        ellipse(foundPoints[i].x, foundPoints[i].y, 3, 3);
    }
}
