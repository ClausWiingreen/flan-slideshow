export class CartesianPoint {
    constructor(public x: number, public y: number){}

    add(p: CartesianPoint){
        return new CartesianPoint(this.x + p.x, this.y + p.y); 
    }

    times(n: number){
        return new CartesianPoint(this.x * n, this.y * n);
    }

    toString(){
        return "(x: " + this.x + ", y: " + this.y + ")";
    }
}

export class PolarPoint {
    constructor(public angle: number, public distance: number){}
    
    toCartesian(){
        let angleInRadians = (this.angle - 90) * Math.PI / 180.0;
        return new CartesianPoint(Math.cos(angleInRadians), Math.sin(angleInRadians)).times(this.distance);
    }

    toString(){
        return "(φ: " + this.angle + ", ρ: " + this.distance + ")";
    }
}
