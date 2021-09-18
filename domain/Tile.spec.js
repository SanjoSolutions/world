import { Tile } from './Tile.js'

describe('Tile', () => {
  test('drawing pixels', () => {
    const tile = new Tile()
    const pixels = [
      {
        position: {
          row: 0,
          column: 0
        },
        color: 'black'
      },
      {
        position: {
          row: 0,
          column: 1
        },
        color: 'red'
      }
    ]
    for (const pixel of pixels) {
      const { position, color } = pixel
      const { row, column } = position
      tile.setPixel({ row, column }, color)
    }
    expect(tile.getPixel(pixels[0].position)).toEqual(pixels[0].color)
    expect(tile.getPixel(pixels[1].position)).toEqual(pixels[1].color)
  })
})
