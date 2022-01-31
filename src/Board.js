class Piece {
	static Types = { None: 0, Pawn: 1, Knight: 2, Bishop: 3, Rook: 4, Queen: 5, King: 6 };
	static Colors = { None: 0, Black: 1, White: 2 };
	constructor(type = Piece.Types.None, x = 0, y = 0, color = Piece.Colors.None) {
		this.type = type;
		this.x = x;
		this.y = y;
		this.color = color;
	}
}

class Board {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.pieces = new Array(rows).fill(Array(cols).fill(new Piece()));
	}

	Draw(rect) {
		let pieceWidth = rect.w / this.cols;
		let pieceHeight = rect.h / this.rows;
		for(let r = 0; r < this.rows; ++r) {
			for(let c = 0; c < this.cols; ++c) {
				let pieceX = c * pieceWidth + rect.x;
				let pieceY = r * pieceHeight + rect.y;
				console.log(pieceWidth);
				var pieceRect = new Rect(pieceX, pieceY, pieceWidth, pieceHeight);
				pieceRect.y = (pieceRect.y > rect.h) ? rect.h : pieceRect.y
				Renderer.FillColor = (((r + c) % 2) == 1) ? Color.SaddleBrown : Color.SandyBrown;
				Renderer.StrokeColor = Color.None;
				Renderer.Rect(pieceRect);
			}
		}
	}
}