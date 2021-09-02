document.getElementById("easy").addEventListener("click", setEasyBoard);
document.getElementById("med").addEventListener("click", setMedBoard);
document.getElementById("hard").addEventListener("click", setHardBoard);

window.onload = () => {
	check();
	const board = [
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
  
	
	board.forEach((row, rowIdx) => {
		row.forEach((col, colIdx) => {
			const cellIdx = rowIdx * 9 + colIdx + 1;
			if (board[rowIdx][colIdx] === 0) {
				document.querySelector(`#cell-${cellIdx} input`).value = "";
			} else {
				document.querySelector(`#cell-${cellIdx} input`).value =
					board[rowIdx][colIdx];
				document
					.querySelector(`#cell-${cellIdx} input`)
					.setAttribute("disabled", true);
			}
		});
	});
}
  


function setEasyBoard() {
	check();
	const board = [
		[0, 0, 9, 6, 0, 8, 5, 0, 0],
		[1, 0, 0, 4, 0, 0, 9, 3, 0],
		[4, 6, 0, 0, 3, 1, 0, 0, 0],
		[3, 0, 1, 7, 8, 9, 0, 0, 0],
		[0, 7, 8, 0, 0, 4, 0, 5, 9],
		[0, 0, 4, 0, 6, 0, 1, 0, 7],
		[8, 4, 2, 5, 0, 0, 0, 1, 0],
		[5, 0, 0, 1, 2, 0, 4, 6, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 5],
	];

	board.forEach((row, rowIdx) => {
		row.forEach((col, colIdx) => {
			const cellIdx = rowIdx * 9 + colIdx + 1;
			if (board[rowIdx][colIdx] === 0) {
				document.querySelector(`#cell-${cellIdx} input`).value = "";
			} else {
				document.querySelector(`#cell-${cellIdx} input`).value =
					board[rowIdx][colIdx];
				document
					.querySelector(`#cell-${cellIdx} input`)
					.setAttribute("disabled", true);
			}
		});
	});
}

function setMedBoard() {
	check();
	const board = [
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
	board.forEach((row, rowIdx) => {
		row.forEach((col, colIdx) => {
			const cellIdx = rowIdx * 9 + colIdx + 1;
			if (board[rowIdx][colIdx] === 0) {
				document.querySelector(`#cell-${cellIdx} input`).value = "";
			} else {
				document.querySelector(`#cell-${cellIdx} input`).value =
					board[rowIdx][colIdx];
				document
					.querySelector(`#cell-${cellIdx} input`)
					.setAttribute("disabled", true);
			}
		});
	});
}

function setHardBoard(){
	check();
	const board=[
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

	board.forEach((row, rowIdx) => {
		row.forEach((col, colIdx) => {
			const cellIdx = rowIdx * 9 + colIdx + 1;
			if (board[rowIdx][colIdx] === 0) {
				document.querySelector(`#cell-${cellIdx} input`).value = "";
			} else {
				document.querySelector(`#cell-${cellIdx} input`).value =
					board[rowIdx][colIdx];
				document
					.querySelector(`#cell-${cellIdx} input`)
					.setAttribute("disabled", true);
			}
		});
	});
}




function validateRow(rowNumber) {
	const values = [];
	const start = (rowNumber - 1) * 9 + 1;
	const end = rowNumber * 9;

	for (let i = start; i <= end; i++) {
		const v = document.querySelector(`#cell-${i} input`).value;
		if (v !== "") values.push(v);
	}
	values.sort();
	console.log(values);
	for (let i = 0; i < values.length - 1; i++) {
		if (values[i] == values[i + 1]) {
			alert("Somethings's wrong try again ");
		}
	}
}


function validateRows() {
	for (let i = 1; i <= 9; i++) {
		validateRow(i);
	}
}

function validateSudoku() {
	const isValid = validateRows() && validateColumns() && validateBlocks();
}

document.getElementById("validate").addEventListener("click", validateSudoku);

function highlight(evt, handler) {
	const numClicked = evt.target.value;
	if (numClicked)
	  for (let i = 1; i <= 81; i++) {
		const element = document.querySelector(`#cell-${i} input`);
		if (element.value === numClicked) {
		  if (handler === "addhigh") {
			element.classList.add("highlight");
		  } else if (handler === "removehigh") {
			setTimeout(function () {
			  element.classList.remove("highlight");
			}, 2000);
		  }
		}
	  }
  }
  
  // for each input element of the cell.......
  document.querySelectorAll("input").forEach((el) => {
	el.addEventListener("keypress", (event) => {
	  const ASCIICode = event.which ? event.which : event.keyCode;
	  // validating only numbers allowed in each input
	  if (ASCIICode > 31 && (ASCIICode < 49 || ASCIICode > 57))
		event.preventDefault();
	});
  });
  // for each cell.......
  document.querySelectorAll(".cell").forEach((el) => {
	// adding highlights to the same no.s in board on doubleclick
	el.addEventListener("dblclick", (event) => {
	  highlight(event, "addhigh");
	});
  
	// removing highlights 2sec later moving away from the mouse
	el.addEventListener("mouseout", (event) => {
	  highlight(event, "removehigh");
	});
  });



function check() {
	document.querySelector("table").innerHTML = `<tbody>
	<tr>
		<td><div class="cell" id="cell-1"><input type="text"/></div></td>
		<td><div class="cell" id="cell-2"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-3"><input type="text"/></div></td>
		<td><div class="cell" id="cell-4"><input type="text"/></div></td>
		<td><div class="cell" id="cell-5"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-6"><input type="text"/></div></td>
		<td><div class="cell" id="cell-7"><input type="text"/></div></td>
		<td><div class="cell" id="cell-8"><input type="text"/></div></td>
		<td><div class="cell" id="cell-9"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-10"><input type="text"/></div></td>
		<td><div class="cell" id="cell-11"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-12"><input type="text"/></div></td>
		<td><div class="cell" id="cell-13"><input type="text"/></div></td>
		<td><div class="cell" id="cell-14"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-15"><input type="text"/></div></td>
		<td><div class="cell" id="cell-16"><input type="text"/></div></td>
		<td><div class="cell" id="cell-17"><input type="text"/></div></td>
		<td><div class="cell" id="cell-18"><input type="text"/></div></td>
	</tr>
	<tr class="border-bottom">
		<td><div class="cell" id="cell-19"><input type="text"/></div></td>
		<td><div class="cell" id="cell-20"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-21"><input type="text"/></div></td>
		<td><div class="cell" id="cell-22"><input type="text"/></div></td>
		<td><div class="cell" id="cell-23"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-24"><input type="text"/></div></td>
		<td><div class="cell" id="cell-25"><input type="text"/></div></td>
		<td><div class="cell" id="cell-26"><input type="text"/></div></td>
		<td><div class="cell" id="cell-27"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-28"><input type="text"/></div></td>
		<td><div class="cell" id="cell-29"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-30"><input type="text"/></div></td>
		<td><div class="cell" id="cell-31"><input type="text"/></div></td>
		<td><div class="cell" id="cell-32"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-33"><input type="text"/></div></td>
		<td><div class="cell" id="cell-34"><input type="text"/></div></td>
		<td><div class="cell" id="cell-35"><input type="text"/></div></td>
		<td><div class="cell" id="cell-36"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-37"><input type="text"/></div></td>
		<td><div class="cell" id="cell-38"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-39"><input type="text"/></div></td>
		<td><div class="cell" id="cell-40"><input type="text"/></div></td>
		<td><div class="cell" id="cell-41"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-42"><input type="text"/></div></td>
		<td><div class="cell" id="cell-43"><input type="text"/></div></td>
		<td><div class="cell" id="cell-44"><input type="text"/></div></td>
		<td><div class="cell" id="cell-45"><input type="text"/></div></td>
	</tr>
	<tr class="border-bottom">
		<td><div class="cell" id="cell-46"><input type="text"/></div></td>
		<td><div class="cell" id="cell-47"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-48"><input type="text"/></div></td>
		<td><div class="cell" id="cell-49"><input type="text"/></div></td>
		<td><div class="cell" id="cell-50"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-51"><input type="text"/></div></td>
		<td><div class="cell" id="cell-52"><input type="text"/></div></td>
		<td><div class="cell" id="cell-53"><input type="text"/></div></td>
		<td><div class="cell" id="cell-54"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-55"><input type="text"/></div></td>
		<td><div class="cell" id="cell-56"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-57"><input type="text"/></div></td>
		<td><div class="cell" id="cell-58"><input type="text"/></div></td>
		<td><div class="cell" id="cell-59"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-60"><input type="text"/></div></td>
		<td><div class="cell" id="cell-61"><input type="text"/></div></td>
		<td><div class="cell" id="cell-62"><input type="text"/></div></td>
		<td><div class="cell" id="cell-63"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-64"><input type="text"/></div></td>
		<td><div class="cell" id="cell-65"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-66"><input type="text"/></div></td>
		<td><div class="cell" id="cell-67"><input type="text"/></div></td>
		<td><div class="cell" id="cell-68"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-69"><input type="text"/></div></td>
		<td><div class="cell" id="cell-70"><input type="text"/></div></td>
		<td><div class="cell" id="cell-71"><input type="text"/></div></td>
		<td><div class="cell" id="cell-72"><input type="text"/></div></td>
	</tr>
	<tr>
		<td><div class="cell" id="cell-73"><input type="text"/></div></td>
		<td><div class="cell" id="cell-74"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-75"><input type="text"/></div></td>
		<td><div class="cell" id="cell-76"><input type="text"/></div></td>
		<td><div class="cell" id="cell-77"><input type="text"/></div></td>
		<td class="border-right"><div class="cell" id="cell-78"><input type="text"/></div></td>
		<td><div class="cell" id="cell-79"><input type="text"/></div></td>
		<td><div class="cell" id="cell-80"><input type="text"/></div></td>
		<td><div class="cell" id="cell-81"><input type="text"/></div></td>
	</tr>
</tbody>`;
}
