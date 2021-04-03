class Paper {
constructor(x, y, r, options){
    var options = {
        isStatic : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2
    }

   }
   x = x;
   y = y;
   r = r;
   Paper =  Bodies.circle(x, y, r, options);
}
