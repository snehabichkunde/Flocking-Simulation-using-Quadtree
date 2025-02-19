class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


// for boundary and range 
class Rect{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(point){
        if(point.x >= this.x - this.width && 
            point.x < this.x + this.width && 
            point.y >= this.y - this.height && 
            point.y < this.y + this.height){
                return true;
            } else {
                return false;
                }
    }

    intersect(boundary){
        let boundaryR = boundary.x + boundary.width;
        let boundaryL = boundary.x - boundary.width;
        let boundaryT = boundary.y - boundary.height;
        let boundaryB = boundary.y + boundary.height;

        let rangeR = this.x + this.width;
        let rangeL = this.x - this.width;
        let rangeT = this.y - this.height;
        let rangeB = this.y + this.height;
    

    if(boundaryR >= rangeL &&
        boundaryL <= rangeR && 
        boundaryT <= rangeB &&
        boundaryB >= rangeT
        ){
            return true;
        }else{
            return false;
        }
    }

}

class Quadtree{
    constructor(boundary , capacity){
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }

    insert(point) {
        if (!this.boundary.contains(point)) {
            return false;  
        }
        
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        else{
            if(!this.divided){
                this.subdivide();
            }
            if(this.ne.insert(point)){
                return true;
            }
            else if(this.nw.insert(point)){
                return true;
            }
            else if(this.sw.insert(point)){
                return true;
            }
            else if(this.se.insert(point)){
                return true;
            }
        }
        return false;
    }
    

    subdivide() {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.width / 2;
        let h = this.boundary.height / 2;
    
        let ne_boundary = new Rect(x + w, y - h, w, h);
        this.ne = new Quadtree(ne_boundary, this.capacity);
    
        let nw_boundary = new Rect(x - w, y - h, w, h);
        this.nw = new Quadtree(nw_boundary, this.capacity);
    
        let se_boundary = new Rect(x + w, y + h, w, h);
        this.se = new Quadtree(se_boundary, this.capacity);
    
        let sw_boundary = new Rect(x - w, y + h, w, h);
        this.sw = new Quadtree(sw_boundary, this.capacity);
    
        this.divided = true;
    }
    
    // finding point in particular range
    query(range, found){
        if(!range.intersect(this.boundary)){
            return false;
        }else{
            for(let i=0; i<this.points.length; i++){
                if(range.contains(this.points[i])){
                    found.push(this.points[i]);
                }
            }
            if(this.divided){
                this.ne.query(range, found);
                this.nw.query(range, found);
                this.se.query(range, found);
                this.sw.query(range, found);
            }
        }
    }

    display() {
        noFill();
        stroke(0);
        //rectMode(CENTER);
        rect(this.boundary.x - this.boundary.width, 
             this.boundary.y - this.boundary.height, 
             this.boundary.width * 2, 
             this.boundary.height * 2);
    
        // Draw all points in the quadtree
        fill(0);
        for (let p of this.points) {
            ellipse(p.x, p.y, 3, 3);
        }

        if(this.divided){
            this.ne.display();
            this.nw.display();
            this.se.display();
            this.sw.display();
        }
    }
    
}