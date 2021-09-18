import { Grid } from '../unnamed/Grid.js'

/**
 * A pixel grid.
 */
export class Tile {
  static WIDTH = 64
  static HEIGHT = 64

  constructor() {
    this._pixels = new Grid([Tile.HEIGHT, Tile.WIDTH])
  }

  setPixel({ row, column }, color) {
    this._pixels.set([row, column], color)
  }

  getPixel({ row, column }) {
    return this._pixels.get([row, column])
  }
}
