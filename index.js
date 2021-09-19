import { Tile } from './domain/grid/Tile.js'
import { createFullDocumentCanvas } from './unnamed/createFullDocumentCanvas.js'

const { canvas, context } = createFullDocumentCanvas()
document.body.appendChild(canvas)

const tile = new Tile()
tile.setPixel({row: 0, column: 0}, 'red')
tile.setPixel({row: 0, column: 1}, 'green')
renderTile(tile)

function renderTile(tile) {
  for (let row = 0; row < Tile.HEIGHT; row++) {
    for (let column = 0; column < Tile.WIDTH; column++) {
      const x = column
      const y = row
      const color = tile.getPixel({ row, column })
      if (color) {
        context.fillStyle = color
        context.fillRect(x, y, 1, 1)
      }
    }
  }
}
