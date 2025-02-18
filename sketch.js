let quadtree;
let boundary;
let capacity = 1;
let num  = 5000;

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
    quadtree.display();
}
