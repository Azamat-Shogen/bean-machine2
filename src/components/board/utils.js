export const getTopGrid = () => {
    let rows = 9;
    let cols = 9;
    let arr = [];
    const edge = "*"
    const empty = ""
    const ball = "0"
   
    for(let i = 0; i < cols; i++){
        let outer = []
      for (let j = 0; j < rows; j++){
          outer.push(empty);
         
      }
      arr.push(outer)
    }

    arr[0][4] = ball;
    arr[2][4] = edge
    arr[4][3] =  arr[4][5] = edge;
    arr[6][2] = arr[6][4] = arr[6][6] = edge;
    arr[8][1] = arr[8][3] = arr[8][5] =  arr[8][7] = edge

    return arr
}