class Color {
    static rLuminosity = 0.299;
    static gLuminosity = 0.587;
    static bLuminosity = 0.114;

    #r
    #g
    #b
    #a

    Grayscale;
    Inverted;

    constructor(r, g, b, a = 1) {
        this.#r = r;
        this.#g = g;
        this.#b = b;
        this.#a = a;

        this.Grayscale = false;
        this.Inverted = false;
    }

    get r() {
        return this.GetColorValue(this.#r);
    }
    get g() {
        return this.GetColorValue(this.#g);
    }
    get b() {
        return this.GetColorValue(this.#b);
    }
    get a() {
        return this.#a;
    }

    set r(value) {
        this.#r = value;
    }
    set g(value) {
        this.#g = value;
    }
    set b(value) {
        this.#b = value;
    }
    set a(value) {
        this.#a = value;
    }

    ToString()
    {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
    static Stringify(color)
    {
        return `rgba(${color.r},${color.g},${color.b},${color.a})`;
    }

    GetColorValue(value) {
        if(this.Grayscale) {
            return this.Grayscale();
        } else {
            return (this.Inverted) ? this.Invert(value) : value;
        }
    }

    Grayscale() {
        let grayscale = (this.#r * Color.rLuminosity) + (this.#g * Color.gLuminosity) + (this.#b * Color.bLuminosity);
        return (this.Inverted) ? this.Invert(grayscale) : grayscale;
    }

    Invert(value) {
        return 255 - value;
    }

    static get Maroon()	{ return new Color(128,0,0); }
    static get DarkRed()	{ return new Color(139,0,0); }
    static get Brown()	{ return new Color(165,42,42); }
    static get Firebrick()	{ return new Color(178,34,34); }
    static get Crimson()	{ return new Color(220,20,60); }
    static get Red()	{ return new Color(255,0,0); }
    static get Tomato()	{ return new Color(255,99,71); }
    static get Coral()	{ return new Color(255,127,80); }
    static get IndianRed()	{ return new Color(205,92,92); }
    static get LightCoral()	{ return new Color(240,128,128); }
    static get DarkSalmon()	{ return new Color(233,150,122); }
    static get Salmon()	{ return new Color(250,128,114); }
    static get LightSalmon()	{ return new Color(255,160,122); }
    static get OrangeRed()	{ return new Color(255,69,0); }
    static get DarkOrange()	{ return new Color(255,140,0); }
    static get Orange()	{ return new Color(255,165,0); }
    static get Gold()	{ return new Color(255,215,0); }
    static get DarkGoldenRod()	{ return new Color(184,134,11); }
    static get GoldenRod()	{ return new Color(218,165,32); }
    static get PaleGoldenRod()	{ return new Color(238,232,170); }
    static get DarkKhaki()	{ return new Color(189,183,107); }
    static get Khaki()	{ return new Color(240,230,140); }
    static get Olive()	{ return new Color(128,128,0); }
    static get Yellow()	{ return new Color(255,255,0); }
    static get YellowGreen()	{ return new Color(154,205,50); }
    static get DarkOliveGreen()	{ return new Color(85,107,47); }
    static get OliveDrab()	{ return new Color(107,142,35); }
    static get LawnGreen()	{ return new Color(124,252,0); }
    static get Chartreuse()	{ return new Color(127,255,0); }
    static get GreenYellow()	{ return new Color(173,255,47); }
    static get DarkGreen()	{ return new Color(0,100,0); }
    static get Green()	{ return new Color(0,128,0); }
    static get ForestGreen()	{ return new Color(34,139,34); }
    static get Lime()	{ return new Color(0,255,0); }
    static get LimeGreen()	{ return new Color(50,205,50); }
    static get LightGreen()	{ return new Color(144,238,144); }
    static get PaleGreen()	{ return new Color(152,251,152); }
    static get DarkSeaGreen()	{ return new Color(143,188,143); }
    static get MediumSpringGreen()	{ return new Color(0,250,154); }
    static get SpringGreen()	{ return new Color(0,255,127); }
    static get SeaGreen()	{ return new Color(46,139,87); }
    static get MediumAquaMarine()	{ return new Color(102,205,170); }
    static get MediumSeaGreen()	{ return new Color(60,179,113); }
    static get LightSeaGreen()	{ return new Color(32,178,170); }
    static get DarkSlateGray()	{ return new Color(47,79,79); }
    static get Teal()	{ return new Color(0,128,128); }
    static get DarkCyan()	{ return new Color(0,139,139); }
    static get Aqua()	{ return new Color(0,255,255); }
    static get Cyan()	{ return new Color(0,255,255); }
    static get LightCyan()	{ return new Color(224,255,255); }
    static get DarkTurquoise()	{ return new Color(0,206,209); }
    static get Turquoise()	{ return new Color(64,224,208); }
    static get MediumTurquoise()	{ return new Color(72,209,204); }
    static get PaleTurquoise()	{ return new Color(175,238,238); }
    static get AquaMarine()	{ return new Color(127,255,212); }
    static get PowderBlue()	{ return new Color(176,224,230); }
    static get CadetBlue()	{ return new Color(95,158,160); }
    static get SteelBlue()	{ return new Color(70,130,180); }
    static get CornFlowerBlue()	{ return new Color(100,149,237); }
    static get DeepSkyBlue()	{ return new Color(0,191,255); }
    static get DodgerBlue()	{ return new Color(30,144,255); }
    static get LightBlue()	{ return new Color(173,216,230); }
    static get SkyBlue()	{ return new Color(135,206,235); }
    static get LightSkyBlue()	{ return new Color(135,206,250); }
    static get MidnightBlue()	{ return new Color(25,25,112); }
    static get Navy()	{ return new Color(0,0,128); }
    static get DarkBlue()	{ return new Color(0,0,139); }
    static get MediumBlue()	{ return new Color(0,0,205); }
    static get Blue()	{ return new Color(0,0,255); }
    static get RoyalBlue()	{ return new Color(65,105,225); }
    static get BlueViolet()	{ return new Color(138,43,226); }
    static get Indigo()	{ return new Color(75,0,130); }
    static get DarkSlateBlue()	{ return new Color(72,61,139); }
    static get SlateBlue()	{ return new Color(106,90,205); }
    static get MediumSlateBlue()	{ return new Color(123,104,238); }
    static get MediumPurple()	{ return new Color(147,112,219); }
    static get DarkMagenta()	{ return new Color(139,0,139); }
    static get DarkViolet()	{ return new Color(148,0,211); }
    static get DarkOrchid()	{ return new Color(153,50,204); }
    static get MediumOrchid()	{ return new Color(186,85,211); }
    static get Purple()	{ return new Color(128,0,128); }
    static get Thistle()	{ return new Color(216,191,216); }
    static get Plum()	{ return new Color(221,160,221); }
    static get Violet()	{ return new Color(238,130,238); }
    static get Magenta()	{ return new Color(255,0,255); }
    static get Orchid()	{ return new Color(218,112,214); }
    static get MediumVioletRed()	{ return new Color(199,21,133); }
    static get PaleVioletRed()	{ return new Color(219,112,147); }
    static get DeepPink()	{ return new Color(255,20,147); }
    static get HotPink()	{ return new Color(255,105,180); }
    static get LightPink()	{ return new Color(255,182,193); }
    static get Pink()	{ return new Color(255,192,203); }
    static get AntiqueWhite()	{ return new Color(250,235,215); }
    static get Beige()	{ return new Color(245,245,220); }
    static get Bisque()	{ return new Color(255,228,196); }
    static get BlanchedAlmond()	{ return new Color(255,235,205); }
    static get Wheat()	{ return new Color(245,222,179); }
    static get CornSilk()	{ return new Color(255,248,220); }
    static get LemonChiffon()	{ return new Color(255,250,205); }
    static get LightGoldenRodYellow()	{ return new Color(250,250,210); }
    static get LightYellow()	{ return new Color(255,255,224); }
    static get SaddleBrown()	{ return new Color(139,69,19); }
    static get Sienna()	{ return new Color(160,82,45); }
    static get Chocolate()	{ return new Color(210,105,30); }
    static get Peru()	{ return new Color(205,133,63); }
    static get SandyBrown()	{ return new Color(244,164,96); }
    static get BurlyWood()	{ return new Color(222,184,135); }
    static get Tan()	{ return new Color(210,180,140); }
    static get RosyBrown()	{ return new Color(188,143,143); }
    static get Moccasin()	{ return new Color(255,228,181); }
    static get NavajoWhite()	{ return new Color(255,222,173); }
    static get PeachPuff()	{ return new Color(255,218,185); }
    static get MistyRose()	{ return new Color(255,228,225); }
    static get LavenderBlush()	{ return new Color(255,240,245); }
    static get Linen()	{ return new Color(250,240,230); }
    static get OldLace()	{ return new Color(253,245,230); }
    static get PapayaWhip()	{ return new Color(255,239,213); }
    static get SeaShell()	{ return new Color(255,245,238); }
    static get MintCream()	{ return new Color(245,255,250); }
    static get SlateGray()	{ return new Color(112,128,144); }
    static get LightSlateGray()	{ return new Color(119,136,153); }
    static get LightSteelBlue()	{ return new Color(176,196,222); }
    static get Lavender()	{ return new Color(230,230,250); }
    static get FloralWhite()	{ return new Color(255,250,240); }
    static get AliceBlue()	{ return new Color(240,248,255); }
    static get GhostWhite()	{ return new Color(248,248,255); }
    static get Honeydew()	{ return new Color(240,255,240); }
    static get Ivory()	{ return new Color(255,255,240); }
    static get Azure()	{ return new Color(240,255,255); }
    static get Snow()	{ return new Color(255,250,250); }
    static get Black()	{ return new Color(0,0,0); }
    static get DimGray()	{ return new Color(105,105,105); }
    static get Gray() { return new Color(128,128,128); }
    static get DarkGray()	{ return new Color(169,169,169); }
    static get Silver()	{ return new Color(192,192,192); }
    static get LightGray()	{ return new Color(211,211,211); }
    static get Gainsboro()	{ return new Color(220,220,220); }
    static get WhiteSmoke()	{ return new Color(245,245,245); }
    static get White()  { return new Color(255,255,255); }
    static get None()	{ return new Color(0, 0, 0, 0); }
}