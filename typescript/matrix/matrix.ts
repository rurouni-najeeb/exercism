export class Matrix {
  _rows : number[][] = []
  _columns : number[][] = []
  constructor(input : string) {
    input.split("\n").forEach((element) => {
      this._rows.push(element.split(" ").map(item => Number(item)))
    });
  }

  get rows(): number[][] {
    return this._rows
  }

  get columns(): number[][] {
    for(let col = 0; col < this._rows[0].length; col++){
      this._columns.push([]);
      for(let row = 0; row < this._rows.length; row++)
        this._columns[col].push(this._rows[row][col]);
    }

    return this._columns;
  }
}
