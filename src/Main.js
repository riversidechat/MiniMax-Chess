let project_div = CreateElement('div', {id: 'ProjectDiv'}, 'body');
let canvas_path = CreateElement('canvas', {id: 'Main'}, project_div);
Renderer.Canvas = canvas_path;

let board = new Board(3, 3);

Game.Start(Main);

function Main(timeStamp) {
	Game.Update(timeStamp);
	Renderer.ResetColor().FullScreen().FillScreen();

	board.Draw(new Rect(100, 100, Renderer.MaxHeight  - 100, Renderer.MaxHeight  - 100));

	Game.Recall();
}