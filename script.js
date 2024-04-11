//We add this two functions to do not have to use external libraries.

/* function getID(i){
    return document.getElementById(i);
}

function getVal(i){
    return getID(i).value;
} */

/* function getID(i) {
       return document.getElementById(i);
   }

   function getVal(i) {
       return getID(i).value;
   } */

   function getID(i) {
return document.getElementById(i);
}

function getVal(i) {
var element = getID(i);
return element ? parseFloat(element.value) : undefined; //if element, then return element.value, else return undefined (? then and : else)
}

// The isNaN will ensure that will not have a NaN type in a,b and c
function solve() {

var a = getVal("aVariable"),
    b = getVal("bVariable"),
    c = getVal("cVariable");

//Calculating the delta

if ( isNaN(a) || isNaN(b) || isNaN(c)) {
    alert ("Please enter a valid numeric value for a, b and c");
    return;
}

if (a === 0) {
    alert("Coefficient 'a' cannot be zero");
    return;
}

/* if( isNaN(a)){ a = 1;}
if( isNaN(b)) { b = 0;}
if ( isNaN(c)) {c = 0;} */


var discriminant = (b*b) - (4*a*c);

var x1 = getID("firstSolution"), 
   x2 = getID("secondSolution"),
   noSolution = getID ("noSolution"),
   discriminantElement = getID ("discriminant");

   noSolution.style.display = "none";

   x1.innerHTML = "";
   x2.innerHTML = "";
   discriminantElement.innerHTML = '<span id="d"> Discriminant value:' + discriminant + '</span>';

if (discriminant < 0) {
    noSolution.style.display = "block";
} else if (discriminant === 0) {
    var solutionOne = (-b / (2 * a));

    x1.innerHTML = "Solution of X when discriminant is 0: " + solutionOne.toString();

} else if (discriminant > 0){
    var solutionOneRoot = (-b + Math.sqrt(discriminant)) / (2 * a),
        solutionSecondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

    x1.innerHTML = "First Solution (x1): " + " " + solutionOneRoot.toString();
    x2.innerHTML = "Second solution (x2): " + " " + solutionSecondRoot.toString();
} else {
    x1.innerHTML = "There is no solution for (x1 and X2)";

    /* alert ("There is no solution");
    return;  */
}

/* if (isNaN(solutionOneRoot)) {
    x1.innerHTML = "There is no solution for (x1)";    
} 

if(isNaN(solutionSecondRoot)){ 
    x2.innerHTML = "There is no solution for (x2)";    
}  */

var y1 = getID("firstSolutionY");
var y2 = getID("secondSolutionY");

if(discriminant < 0){

    y1.innerHTML = "There is no Solution of X due the discriminant is negative";
    y2.innerHTML = "There is no Solution of X due the discriminant is negative";
    
} else if(discriminant === 0){

    var ySolutionDiscriminantZero = (((a * (solutionOne * solutionOne)) + (b * solutionOne) + c));

    y1.innerHTML = "Solution of Y when discriminant is 0:" + " " + ySolutionDiscriminantZero.toString();
} else {

var yFirstSolution = (((a * (solutionOneRoot * solutionOneRoot)) + (b * solutionOneRoot) + c));
var ySecondSolution = (((a * ( solutionSecondRoot * solutionSecondRoot)) + (b * solutionSecondRoot) + c));

y1.innerHTML = "First Solution (y1):" + " " + yFirstSolution.toString();
y2.innerHTML = "Second solution (y2):" + " " + ySecondSolution.toString();

if (isNaN(yFirstSolution)) {
    y1.innerHTML = "There is no solution for (y1)";    
    } 

if(isNaN(ySecondSolution)){ 
    y2.innerHTML = "There is no solution for (y2)";    
    }
}

/* functionPlot({
    title: 'y = a*(x^2) + (b * x) + c',
    target: "#myFunction",
    width: 600,
    height: 400,
   
    xAxis: {
        label: 'x - axis',
        domain: [-10 , 10]
      },
       
      yAxis: {
        label: 'y - axis',
        domain:[-10 , 10]
      },
    data: [{
      fn: `(${a} * (x * x)) + (${b} * x) + ${c}`
    }], 
   
  });
 */

  var parameters = {
    title: 'y = a*(x^2) + (b * x) + c',
    target: "#myFunction",
    width: 600,
    height: 400,
   
    xAxis: {
        label: 'x - axis',
        domain: [-10 , 10]
      },
       
      yAxis: {
        label: 'y - axis',
        domain:[-10 , 10]
      },
  /* disableZoom: true, */
   data: [{
      fn: `(${a} * (x * x)) + (${b} * x) + ${c}`
    }], 
   
  };

  function plot(){

    var xMinInput = getID("xMin").value;      
    var xMaxInput = getID("xMax").value;
    var yMinInput = getID("yMin").value;
    var yMaxInput = getID("yMax").value;

    parameters.xAxis.domain = [xMinInput, xMaxInput];
    parameters.yAxis.domain = [yMinInput, yMaxInput];


    functionPlot(parameters);
  

  };

  plot();

};

 var submitButton = document.getElementById("submit");
submitButton.onclick = function(){
solve()

};

/* 
  var f = document.getElementById("myFunction").value;  
  var xMin = document.getElementById("xMin").value;      
  var xMax = document.getElementById("xMax").value;
  var yMin = document.getElementById("yMin").value;
  var yMax = document.getElementById("yMax").value;
  
 parameters.data[0].fn = f;
 parameters.xAxis.domain = [xMin, xMax];
 parameters.yAxis.domain = [yMin, yMax];  */



  /* function plot() {

    var f = document.querySelector("#function").value;  
    var xMin = document.querySelector("#xMin").value;      
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    
   parameters.data[0].fn = f;
   parameters.xAxis.domain = [xMin, xMax];
   parameters.yAxis.domain = [yMin, yMax]; 
   
    

   
functionPlot(parameters);

} */








/* var delta = getID("d");
 */
   //delta is smaller than 0 --> no real roots
   //delta is equal to 0 --> one root
   //delta is greater than 0 --> two roots


 /*   delta.innerHTML = d; */

  /*  if(discriminant < 0){

       noSolution.style.display = "block";

   } else if (discriminant === 0){

       var solutionOne = -b / (2*a);
       x1.innerHTML = "Solution when delta is 0:" + solutionOne.toString();
   } else {
       var solutionOneRoot = (-b + (Math.sqrt(discriminant))) / (2*a),
           solutionSecondRoot = (- b - (Math.sqrt(discriminant))) / ( 2*a);

           x1.innerHTML = "First Solution (x1): " + solutionOneRoot.toString();
           x2.innerHTML = "Second solution (x2): " + solutionSecondRoot.toString();
   }

} */