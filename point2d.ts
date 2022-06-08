
export class Point2d {
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    getX(): number { 
        return this.x; 
    }
    getY(): number { 
        return this.y; 
    }
    setX(x: number) {
         this.x = x; 
        }
    setY(y: number) {
         this.y = y; 
        }
    
    setXY(x: number, y: number): void{ 
        this.x = x, this.y = y; 
    }
    getXY(): object {
        return [
            this.x, 
            this.y
            ]
    }
}
