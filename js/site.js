//need to get values from user. These values represent 
function getValues()
{
    //get values from the page
    let startValue = document.getElementById("pingInput").value;
    let endValue = document.getElementById("zelInput").value;
    //Need to validate our input. 
    //parse into INT
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);



    if(Number.isInteger(startValue) && Number.isInteger(endValue))
    {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);
    }
    else
    {
        alert("You must enter numbers");
    }
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue)
{
    let numbers = [];

    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++)
    {
        //this will excute in a loop until index = eValue.
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark the even numbers bold
//display / view fuctions
function displayNumbers(numbers)
{
    let templateRows="";

    for (let index = 1; index <= 100; index++) 
    {
        let className="";
        let number = numbers[index];
        //let numbers = toString();

        if(number % 15 == 0)
        {
            className="ofBoth";
            number = "Puzzle"
        }
        else if(number % 3 == 0)
        {
            className="of3";
            number = "Puz"
        }
        else if(number % 5 == 0)
        {
            className="of5";
            number = "zle";
        }
        else
        {
            className ="ofNone"
        }
        
        
        templateRows +=`<td class="${className}">${number}</td>`;
    }
    
    document.getElementById("results").innerHTML = templateRows;
}