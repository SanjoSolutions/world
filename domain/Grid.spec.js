import { Grid } from './Grid.js'
import { Tile } from './Tile.js'

describe('Grid', () => {
  describe('get', () => {
    it('gets a tile at the specified row and column', () => {
      const grid = new Grid()
      const tileA = new Tile()
      const positionA = {row: 0, column: 0}
      const tileB = new Tile()
      const positionB = {row: 0, column: 1}
      grid.set(positionA, tileA)
      grid.set(positionB, tileB)
      expect(grid.get(positionA)).toBe(tileA)
      expect(grid.get(positionB)).toBe(tileB)
    })

    describe('getting an unset tile', () => {
      it('returns null', () => {
        const grid = new Grid()
        expect(grid.get({row: 0, column: 0})).toBeNull()
      })
    })
  })
})
