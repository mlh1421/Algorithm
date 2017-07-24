function Point(x,y){
    this.x=x;
    this.y=y;
}
function displayPts(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].x+","+arr[i].y);
    }
}
var p1=new Point(1,2);
var p2=new Point(3,5);
var p3=new Point(1,7);
var p4=new Point(1,28);
var p5=new Point(1,299);
var points=[p1,p2,p3,p4,p5];
for(var j=0;j<points.length;j++){
    console.log("Point "+(j+1)+"："+points[j].x+","+points[j].y);
}
displayPts(points);
var p6=new Point(12,-3);
points.push(p6);
displayPts(points);
points.shift(p1);
displayPts(points);
