# Boids Flocking with Quadtree Optimization

This project simulates Boids flocking behavior, enhanced with a Quadtree for efficient neighbor searching.

## Boids Flocking

Boids are simple agents that follow three core rules to simulate flocking:

* **Alignment:** Match the average velocity of nearby boids.
* **Cohesion:** Move towards the average position of nearby boids.
* **Separation:** Maintain a minimum distance from nearby boids.

## Quadtree Optimization

A Quadtree is used to speed up the process of finding nearby boids. It works by recursively dividing the simulation space into quadrants.  Here's how it works:

1. **Subdivision:** The simulation area is initially represented by a single "node" in the Quadtree.  Each node can hold a certain number of boids (defined by a `capacity`). When a node becomes "full," it subdivides into four child nodes (northwest, northeast, southwest, southeast).  This creates a hierarchical structure.

2. **Insertion:** Boids are inserted into the Quadtree.  The Quadtree traverses the hierarchy, placing each boid in the smallest node that contains it and has space.

3. **Querying:** To find nearby boids for a given boid, we define a search area (a rectangle) around that boid.  The Quadtree efficiently searches for points within this rectangle.  It starts at the root node and only explores child nodes whose boundaries intersect the search area. This eliminates the need to check boids in nodes that are far away.

## Efficiency

Without a Quadtree, finding neighbors requires checking every boid against every other boid, resulting in O(n^2) complexity (where 'n' is the number of boids).  With a Quadtree, the search complexity is, on average, O(n log n). This is because the Quadtree effectively reduces the number of comparisons needed. The hierarchical structure allows us to quickly discard large portions of the space that are guaranteed not to contain any relevant neighbors.  In the best-case scenario (where boids are evenly distributed), the query time approaches O(log n).

## Implementation

* **p5.js:** This project uses the p5.js library for graphics and vector math.
* **`sketch.js`:** Contains the main simulation loop and Quadtree integration.
* **`boid.js`:** Defines the `Boid` class and flocking logic.
* **`quadtree.js`:** Implements the `Quadtree`, `Point`, and `Rect` classes.

## How it Works

1. Boids are created and placed in the simulation space.
2. A Quadtree is built, and each boid is inserted as a point.
3. For each boid:
    * A search area (rectangle) is defined around the boid.
    * The Quadtree is queried to find nearby points (potential neighbors).
    * The `Boid`'s flocking rules (alignment, cohesion, separation) are applied using the nearby boids.
    * The boid's position and velocity are updated.
4. The process repeats, creating the flocking simulation.

## Dependencies

* p5.js (included via CDN in `index.html`)

## To Run

Open `index.html` in your web browser.