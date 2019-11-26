
let gridRows = 3;
let gridColumns = 3;
let emptyGridAreas = [];
let filledGridAreas = [];
let gamePoints = 0;
let gridElement = $("#grid");
let interval;
let fontSizeMultiplier;
let penType = "Pen";
function togglePenType() {
  if(penType==="Pen"){
    penType = "Pencil";
  } else {
    penType = "Pen";
  };
  $("#penTypeToggle").html(`Toggle pen type - ${penType}`);
};

function gameSetup() {
  gridElement.innerHTML = ""
  gridRows = 9;
  emptyGridAreas = [];
  filledGridAreas = [];
  gamePoints = 0;
  numCells = gridRows**2

  gridElement.css(
    "grid-template",
    `repeat(${gridRows}, 1fr) / repeat(${gridRows}, 1fr)`
  );


  for(let index = 0; index < numCells; index++){
    fontSize = 80/gridRows;
    const div = `<textarea class="cell" id="cell${[index]}" style="font-size:${fontSize}vh">`;
    gridElement.append(div);
  };
  
};


gameSetup();