class Renderer {
    static #ctx;
    static #canvas;
    static #id;

    static #fillColor = new Color(0, 0, 0);
    static #strokeColor = new Color(0, 0, 0);

    static #stroke_weight = 1;
    static #stroke_end = 'round';
    static #stroke_join = 'round';

    static set Canvas(path) {
        let canvas = document.querySelector(path);
        let ctx = canvas.getContext('2d');
        Renderer.#id = path;
        Renderer.#canvas = canvas;
        Renderer.#ctx = ctx;
    }
    static get Canvas() {
        return Renderer.#canvas;
    }
    static get Context() {
        return Renderer.#ctx
    }
    static get ID() {
        return Renderer.#id
    }

    static get FillColor() {
        return Renderer.#fillColor;
    }
    static get StrokeColor() {
        return Renderer.#strokeColor;
    }
    static set FillColor(color) {
        Renderer.#fillColor = color;
    }
    static set StrokeColor(color) {
        Renderer.#strokeColor = color;
    }

    static get MaxWidth() {
        return window.innerWidth;
    }

    static get MaxHeight() {
        return window.innerHeight;
    }

    static get Width() {
        return Renderer.#canvas.width;
    }
    static get Height() {
        return Renderer.#canvas.height;
    }
    static set Width(value) {
        Renderer.#canvas.width = value;
    }
    static set Height(value) {
        Renderer.#canvas.height = value;
    }

    static get StrokeWeight() {
        return Renderer.#stroke_weight;
    }
    static set StrokeWeight(weight) {
        Renderer.#stroke_weight = weight;
    }
    static get StrokeEnd() {
        return Renderer.#stroke_end;
    }
    static set StrokeEnd(type) {
        Renderer.#stroke_end = type;
    }
    static get StrokeJoin() {
        return Renderer.#stroke_join;
    }
    static set StrokeJoin(type) {
        Renderer.#stroke_join = type;
    }

    static ResetColor()
    {
        Renderer.FillColor = Color.Black;
        Renderer.StrokeColor = Color.Black;
        return this;
    }

    static FullScreen() {
        Renderer.Width = Renderer.MaxWidth;
        Renderer.Height = Renderer.MaxHeight;
        return this;
    }
    static FillScreen() {
        Renderer.Rect(new Rect(0, 0, Renderer.Width, Renderer.Height));
        return this;
    }

    static Rect(rect)
    {
        Renderer.#ctx.fillStyle = Renderer.#fillColor.ToString();
        Renderer.#ctx.strokeStyle = Renderer.#strokeColor.ToString();

        Renderer.#ctx.lineWidth = Renderer.#stroke_weight;
        Renderer.#ctx.lineCap = Renderer.#stroke_end;
        Renderer.#ctx.lineJoin = Renderer.#stroke_join;

        Renderer.#ctx.beginPath();

        Renderer.#ctx.moveTo(rect.left, rect.top);
        Renderer.#ctx.lineTo(rect.right, rect.top);
        Renderer.#ctx.lineTo(rect.right, rect.bottom);
        Renderer.#ctx.lineTo(rect.left, rect.bottom);

        Renderer.#ctx.closePath();
        Renderer.#ctx.stroke();
        Renderer.#ctx.fill();

        return this;
    }

    static Line(x0, y0, x1, y1)
    {
        Renderer.#ctx.fillStyle = Renderer.#fillColor.ToString();
        Renderer.#ctx.strokeStyle = Renderer.#strokeColor.ToString();

        Renderer.#ctx.lineWidth = Renderer.#stroke_weight;
        Renderer.#ctx.lineCap = Renderer.#stroke_end;
        Renderer.#ctx.lineJoin = Renderer.#stroke_join;

        Renderer.#ctx.beginPath();
        
        Renderer.#ctx.moveTo(x0, y0);
        Renderer.#ctx.lineTo(x1, y1);
        
        Renderer.#ctx.closePath();
        Renderer.#ctx.stroke();
        Renderer.#ctx.fill();
        
        return this;
    }
    
    static Ellipse(x, y, w, h)
    {
        Renderer.#ctx.fillStyle = Renderer.#fillColor.ToString();
        Renderer.#ctx.strokeStyle = Renderer.#strokeColor.ToString();

        Renderer.#ctx.lineWidth = Renderer.#stroke_weight;
        
        Renderer.#ctx.beginPath();
        
        Renderer.#ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2, false);

        Renderer.#ctx.closePath();
        Renderer.#ctx.stroke();
        Renderer.#ctx.fill();

        return this;
    }
}