class Rect {
    x;
    y;
    w;
    h;

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    get top() {
        return this.y;
    }
    get left() {
        return this.x;
    }
    get bottom() {
        return this.y + this.h;
    }
    get right() {
        return this.x + this.w;
    }
    get centerX() {
        return this.x + (this.w / 2);
    }
    get centerY() {
        return this.y + (this.h / 2);
    }

    set top(value) {
        this.y = value;
    }
    set left(value) {
        this.x = value;
    }
    set bottom(value) {
        this.y = (value - this.h);
    }
    set right(value) {
        this.x = (value - this.w);
    }
    set centerX(value) {
        this.x = (value - (this.w / 2));
    }
    set centerY(value) {
        this.y = (value - (this.h / 2));
    }

    Scale(x, y)
    {
        this.x -= ((this.w * x) - this.w) / 2;
        this.y -= ((this.h * y) - this.h) / 2;
        this.w *= x;
        this.h *= y;
    }

    Inflate(x, y)
    {
        this.x -= x;
        this.y -= y;
        this.w += x * 2;
        this.h += y * 2;
    }

    Collision(rect)
    {
        if(this.left < rect.right)
        {
            if(this.right > rect.left)
            {
                if(this.top < rect.bottom)
                {
                    if(this.bottom > rect.top)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}