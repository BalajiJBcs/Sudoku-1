let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];




              function includes1to9(array){
                let object = {}
              
                for(let i = 0; i < array.length; i++){
                  
                  if(!object[array[i]]){
                    object[array[i]] = 1
                  } else {
                    object[array[i]]++
                  }//end if
                }//end for
              
                for(let key in object){
                  if(object[key] > 1){
                    return false
                  }
                }
                return true
              }
              
              
              function sudokuIsValid(grid){
              
              //check if row is valid
                for(let i = 0; i < grid.length; i++){
                  let rowArray = grid[i]
                  if(!includes1to9(rowArray)){
                    return false
                  } //end if
                } // end for
              
              // check if column is valid
                    for(let i = 0; i < grid.length; i++){
                      let columnArray = []
                      for(let j = 0; j < grid.length; j++){
                        columnArray.push(grid[j][i])
                        }
                         if(!includes1to9(columnArray)){
                             return false
                      } //end if
                    }//end for
              
              //check subgrids
              
                  let arrayX0Y0 = []; let arrayX1Y0 = []; let arrayX2Y0 = [];
              
                  for(let i = 0; i <= 2; i++){
                    for(let j = 0; j <= 2; j++){
                      arrayX0Y0.push(grid[i][j])
                    }//end inner for
                     for(let j = 3; j <= 5; j++){
                        arrayX1Y0.push(grid[i][j])
                      }//end inner for
                      for(let j = 6; j <= 8; j++){
                        arrayX2Y0.push(grid[i][j])
                      }//end inner for
                  }//end outer for
              
                  if(!includes1to9(arrayX0Y0)|| !includes1to9(arrayX1Y0) || !includes1to9(arrayX2Y0)){
                             return false
                      } //end if
              
                  let arrayX0Y1 = []; let arrayX1Y1 = []; let arrayX2Y1 = []
                  
              
                  for(let i = 3; i <= 5; i++){
                    for(let j = 0; j <= 2; j++){
                        arrayX0Y1.push(grid[i][j])
                      }//end for
                      for(let j = 3; j <= 5; j++){
                        arrayX1Y1.push(grid[i][j])
                      }//end for
                       for(let j = 6; j <= 8; j++){
                        arrayX2Y1.push(grid[i][j])
                      }//end for
                  }
                  if(!includes1to9(arrayX0Y1)|| !includes1to9(arrayX1Y1) || !includes1to9(arrayX2Y1)){
                             return false
                      } //end if
              
                  let arrayX0Y2 = []; let arrayX1Y2 = []; let arrayX2Y2 = [];
              
                  for(let i = 6; i <= 8; i++){
                    for(let j = 0; j <= 2; j++){
                        arrayX0Y2.push(grid[i][j])
                      }//end for
                      for(let j = 3; j <= 5; j++){
                        arrayX1Y2.push(grid[i][j])
                      }//end for
                       for(let j = 6; j <= 8; j++){
                        arrayX2Y2.push(grid[i][j])
                      }//end for
                  }// end outer for
                  if(!includes1to9(arrayX0Y2)|| !includes1to9(arrayX1Y2) || !includes1to9(arrayX2Y2)){
                             return false
                      } //end if
                
              
                  return true
              
              } //end function
              
              
              function isSame(grid1, grid2){
              
              for(let i = 0; i < grid1.length; i++){
                for(let j = 0; j < grid1[i].length; j++){
                  if(grid1[i][j] !== grid2[i][j]){
                    return false
                  }//end if
                }//end inner for
              }//end outer for
              
                return true
              
              }
              
              console.log(isSame(puzzle,puzzle))