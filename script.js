window.onload = () => {
  var grid = [
    [0, 0, 9, 6, 0, 8, 5, 0, 0],
    [1, 0, 0, 4, 0, 0, 9, 3, 0],
    [4, 6, 0, 0, 3, 1, 0, 0, 0],
    [3, 0, 1, 7, 8, 9, 0, 0, 0],
    [0, 7, 8, 0, 0, 4, 0, 5, 9],
    [0, 0, 4, 0, 6, 0, 1, 0, 7],
    [8, 4, 2, 5, 0, 0, 0, 1, 0],
    [5, 0, 0, 1, 2, 0, 4, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 5]
  ];

  let a = document.querySelectorAll("input");
  console.log(a);

  a.forEach(function (item) {
    
    var x, y;
    item.onmouseover = function () {
      item.classList.add("hovers");
    };
    item.onmouseleave = function () {
      item.classList.remove("hovers");
    };
    x = item.getAttribute("id").substring(0, 1);
    y = item.getAttribute("id").substring(1);
    item.onfocus = function () {
      changeSelected(x, y, "#e2ebf3");
      changeRed(item.value, false); 
      item.style.backgroundColor = "#bbdefb";

    };
    item.onblur = function () {
      grid[x][y] = parseInt(item.value);
     
      console.log(grid);
      changeRed(item.value, true); 
      re();
   
      changeSelected(x, y, "white");
    };
    item.oninput = function () {
      changeRed(item.value, false); 
      
    };
    item.onchange = () => {
      
    };
    console.log(x, y);
  });

  gridFiling = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var id = i + "" + j;

        document.getElementById(id).value = "";
        document.getElementById(id).style.backgroundColor = "#fff";
        document.getElementById(id).removeAttribute("disabled", "disabled");
        document.getElementById(id).classList.remove("dis");
        if (grid[i][j] != 0) {
     
          document.getElementById(id).value = grid[i][j];
        
          document.getElementById(id).setAttribute("disabled", "disabled");
        document.getElementById(id).style.backgroundColor = "#ebebe4";
        
          document.getElementById(id).classList.add("dis");
         
        }
      }
    }
  };
  gridFiling(grid);
  easyGrid = () => {
    grid = [
      [0, 6, 0, 0, 0, 0, 3, 8, 0],
      [1, 0, 5, 0, 0, 0, 4, 0, 2],
      [3, 0, 4, 0, 0, 0, 0, 1, 0],
      [5, 0, 1, 6, 0, 2, 9, 4, 0],
      [0, 0, 9, 8, 3, 0, 2, 7, 5],
      [8, 2, 0, 0, 0, 0, 0, 0, 1],
      [2, 0, 0, 3, 0, 0, 7, 5, 0],
      [0, 0, 0, 2, 0, 0, 1, 0, 9],
      [4, 9, 6, 1, 0, 7, 0, 2, 0],
    ];

   
    gridFiling(grid);
  };
  mediumGrid = () => {
    grid = [
      [7,0,0,0,5,3,0,0,0],
      [0,8,0,1,0,0,0,4,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,8,0,0,4,3,1],
      [1,0,0,4,0,5,9,0,0],
      [0,0,8,0,0,9,7,0,0],
      [0,9,2,3,0,8,0,0,4],
      [0,6,0,0,0,0,0,0,0],
      [6,5,0,0,0,4,0,0,0]
    ];

  

    gridFiling(grid);
  };
  hardGrid = () => {
    grid = [
      [0,0,0,0,0,1,2,0,3],
      [0,0,1,0,0,8,0,0,0],
      [0,0,0,4,0,0,7,0,1],
      [0,0,0,8,0,0,0,5,0],
      [0,1,4,0,9,6,0,0,7],
      [0,0,0,0,1,3,6,0,0],
      [0,0,8,2,0,0,0,0,0],
      [9,0,0,0,8,0,0,0,5],
      [6,0,3,0,0,0,0,0,0]
    ];

    gridFiling(grid);
  };

  changeSelected = (x, y, color) => {
    for (let i = 0; i < 9; i++) {
      let id = x + "" + i;
      if (
        document.getElementById(id).classList.contains("dis") &&
        color == "white"
      ) {
        document.getElementById(id).style.backgroundColor = "#ebebe4";
      } else {
        document.getElementById(id).style.backgroundColor = color;
      }
    }
    for (let i = 0; i < 9; i++) {
      let id = i + "" + y;
      if (
        document.getElementById(id).classList.contains("dis") &&
        color == "white"
      ) {
        document.getElementById(id).style.backgroundColor = "#ebebe4";
      } else {
        document.getElementById(id).style.backgroundColor = color;
      }
    }
    let xlength = 8;
    let startxLength = 6;
    let ylength = 8;
    let startyLength = 6;
    if (x >= 0 && x <= 2) {
      xlength = 2;
      startxLength = 0;
    } else if (x > 2 && x <= 5) {
      xlength = 5;
      startxLength = 3;
    }
    if (y >= 0 && y <= 2) {
      ylength = 2;
      startyLength = 0;
    } else if (y > 2 && y <= 5) {
      ylength = 5;
      startyLength = 3;
    }
    for (let i = startxLength; i <= xlength; i++) {
      for (let j = startyLength; j <= ylength; j++) {
        const id = i + "" + j;
        if (
          document.getElementById(id).classList.contains("dis") &&
          color == "white"
        ) {
          document.getElementById(id).style.backgroundColor = "#ebebe4";
        } else {
          document.getElementById(id).style.backgroundColor = color;
        }
      }
    }
  };
  re=()=>{
    for (let i = 0; i < 9; i++) {
      
      for (let j = 0; j < 9; j++) {
        
        if(!document.getElementById(i + "" + j).classList.contains("dis")){
          document.getElementById(i + "" + j).style.backgroundColor = "#fff";
        }
      }
    }

  }
  changeRed = (value, white) => {
    for (let i = 0; i < 9; i++) {
     
      for (let j = 0; j < 9; j++) {
  
        if (
          document.getElementById(i + "" + j).classList.contains("dis") &&
          white == true
        ) {
          document.getElementById(i + "" + j).style.backgroundColor = "#ebebe4";
        } else if (
          document.getElementById(i + "" + j).value == value &&
          value != 0
        ) {
          document.getElementById(i + "" + j).style.backgroundColor = "#bbdefb";
        }
        
        
      }
    }
  }
   
  let validates1 = (x) => {
    var sumrow = 0;
    var sumcol = 0;
    var set1 = new Set();
    var set2 = new Set();
    for (let i = 0; i < 9; i++) {
      set1.add(grid[x][i]);
      sumrow += grid[x][i];
    }
    if (set1.size != 9 || sumrow != 45) {
      return false;
    }
    for (let i = 0; i < 9; i++) {
      set2.add(grid[i][x]);
      sumcol += grid[i][x];
    }
    if (set2.size != 9 || sumcol != 45) {
      return false;
    }

    return true;
  };
  let validates2 = (x, y) => {
    var sumbox = 0;
    var set3 = new Set();
    let xlength = 8;
    let startxLength = 6;
    let ylength = 8;
    let startyLength = 6;
    if (x >= 0 && x <= 2) {
      xlength = 2;
      startxLength = 0;
    } else if (x > 2 && x <= 5) {
      xlength = 5;
      startxLength = 3;
    }
    if (y >= 0 && y <= 2) {
      ylength = 2;
      startyLength = 0;
    } else if (y > 2 && y <= 5) {
      ylength = 5;
      startyLength = 3;
    }
    for (let i = startxLength; i <= xlength; i++) {
      for (let j = startyLength; j <= ylength; j++) {
       
        set3.add(grid[i][j]);
       
        sumbox += grid[i][j];
      }
    }
 
    if (set3.size != 9 || sumbox != 45) {
      return false;
    }
    return true;
  };
  validater = () => {
    var v1 = [];
    var v2 = [];
    for (let i = 0; i < 9; i++) {
      let c = validates1(i);
      v1.push(c);
      console.log(c);
    }
    for (let i = 0; i < 9; i = i + 3) {
      for (let j = 0; j < 9; j = j + 3) {
        let v = validates2(i, j);
        v2.push(v);
        console.log(v);
      }
    }
    
    var z = true;
    for (let i = 0; i < 9; i++) {
      if (v1[i] != v2[i] || v1[i] != true || v2[i] != true) {
        z = false;
        break;
      }
    }
    if (z == true) {
      alert("You win ");
    } else {
      alert("Something's Wrong ");
    }
  };
};

