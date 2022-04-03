import HitBox from "./hitBox";
import Zone from "./zone";

export default class Collisions{
    collisionUp: Zone;
    collisionDown: Zone;
    collisionLeft: Zone;
    collisionRight: Zone;

    constructor(opts:CollisionsInterface){
        this.collisionDown = new Zone(opts.collisionDown);
        this.collisionLeft = new Zone(opts.CollisionLeft);
        this.collisionRight = new Zone(opts.collisionRight);
        this.collisionUp = new Zone(opts.collisionUp);
    }
    draw() {
        this.collisionDown.draw();
        this.collisionLeft.draw();
        this.collisionRight.draw();
        this.collisionUp.draw();
    }
    move(dx: number, dy: number){
        this.collisionDown.move(dx,dy);
        this.collisionLeft.move(dx,dy);
        this.collisionRight.move(dx,dy);
        this.collisionUp.move(dx,dy);
    }

    is_in(hitBox: HitBox, mvmt: string): boolean{
        if(mvmt === 'up'){
            return this.collisionUp.in_zone(hitBox)}
        if(mvmt === 'down') return this.collisionDown.in_zone(hitBox)
        if(mvmt === 'left') return this.collisionLeft.in_zone(hitBox)
        if(mvmt === 'right') return this.collisionRight.in_zone(hitBox)
    }
}