var Cost;
var Income=0;
var Saving;
var Allocation=0;
var CurrentResidue;




function calculateCost() {
	 var itemName=document.querySelector("#itemId").value;
	 var cost= document.querySelector("#costId").value;
	 // var date= document.querySelector("#date").value;

	 	 if (itemName == "") {
	 	alert ("Please enter Expense name");
        return false;
    }
	 	 if (cost == "") {
	 	alert ("Please enter Expense amount");
        return false;
    }

      if (isNaN(cost)) 
    {
        alert("Expense amount must be numbers");
        return false;
    }



	 var table=document.getElementsByTagName('table')[0];
	 var newCostRow=table.insertRow(1);
	 var newCell1=newCostRow.insertCell(0);
	 var newCell2=newCostRow.insertCell(1);

	 newCell1.innerHTML= itemName.toUpperCase();
	 newCell2.innerHTML= cost;

	 var myArray=[cost];

	 document.getElementById('itemId').value= '';
	 document.getElementById('costId').value= '';


	 for (var i = 0; i<myArray.length; i++) {
	 	console.log(`My Current item values are ${myArray.toString()}`);

	 	var calcTableCell=document.getElementById("costTable"), sumCostValue=0; minusCostValue=Income;
	 	console.log(`Initial Income is ${Income}`)
	 	console.log(`Initial minusCostValue is ${minusCostValue}`)

	 	for (var i = 1; i <calcTableCell.rows.length; i++) {
	 		sumCostValue=sumCostValue+ parseInt(calcTableCell.rows[i].cells[1].innerHTML);
            minusCostValue=minusCostValue- parseInt(calcTableCell.rows[i].cells[1].innerHTML);
	 	console.log(`Sum of cost is ${sumCostValue}`)	


	 	document.querySelector("#displayCostResultId1").innerHTML= `Total Cost: ${sumCostValue}`;
	    document.querySelector("#displayCostResultId2").innerHTML= `Total Cost: ${sumCostValue}`;


	 	

	 	Cost = sumCostValue;
	 	 console.log(`Total cost is ${Cost}`)
	 	


	 	

	 	// if (date == ""){
	 	// 	alert("Hey,Its better to enter a date for reference");
	 	// 	return false;
	 	// }
	 	// document.querySelector("#dateDisplay").innerHTML=`${date}`;

	 	 	 
	 	}}}



