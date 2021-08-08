/*
    Steps-
        Get Values from the Page    (getValues() - Start or Controller Function)
        Generate Numbers from the Start Value to the End Value  (generateNumbers - Logic Function(s))
        Add new entries into results. Turn bold the 'even' numbers  (displayNumbers - Display or View Function(s))
*/
function getValues() {
    //Retrieve values from the app page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Parse into Integer
    startValue = parseInt(startValue); endValue = parseInt(endValue);

    // Validate if Parsed Values are Integers - use isInteger to ensure Integer was used
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter Integers");
    }
}
function generateNumbers(startValue, endValue) {
    // Return array of inserted loop numbers from passed in start and end values
    let numbers = [];
    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }
    return numbers;
}
function displayNumbers(numbersArray) {
    // Build string to capture results; Set results inside html table at end
    let tableResults = "";
    numbersArray.forEach(number => {
        // Even Number check to set 'Bold text' - Use css class to control font
        let setCSSFont = (number % 2 === 0) ? "even" : "odd";
        tableResults += `<tr><td class="${setCSSFont}">${number}</td></tr>`;
    });
    document.getElementById("tblResults").innerHTML = tableResults;
}