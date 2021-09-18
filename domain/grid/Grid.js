/**
 * Contains tiles.
 */
export class Grid {
  constructor() {
    this._tiles = new Map()
  }

  set({ row, column }, tile) {
    if (!this._tiles.has(row)) {
      this._tiles.set(row, new Map())
    }
    this._tiles.get(row).set(column, tile)
  }

  get({ row, column }) {
    return this._tiles.get(row)?.get(column) ?? null
  }
}
