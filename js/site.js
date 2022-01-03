//need to get values from user. These values represent 
function getValues()
{
    // get the user value from the page
    let zipInput = document.getElementById("zipValue").value
    let zapInput = document.getElementById("zapValue").value
    //parse for numbers
    zipInput = parseInt(zipInput);
    zapInput = parseInt(zapInput);
    //check that the numbers are int
    if(Number.isInteger(zipInput) && Number.isInteger(zapInput))
    {
        let zzArray = zipZapC(zipInput, zapInput);
        displayData(zzArray);
    }
    else
    {
        alert("nope, try a number");
    }
}

//if else logic 
function zipZapA(zipInput, zapInput)
{  
    //init the returnArray
    let returnArray = [];
    
    //loop from 1-100
    for (let i = 1; i <= 100; i++) 
    {
        //we need to check the current value in 3 steps
        //check if divisible by (3&5), (3) then (5)
        if(i % zipInput == 0 && i % zapInput == 0)
        {
            returnArray.push("ZipZap");
        }
        else if (i % zipInput == 0)
        {
            returnArray.push("Zip");
        }
        else if (i % zapInput == 0)
        {
            returnArray.push("Zap");
        }    
        else
        {
            returnArray.push(i);
        }
    }

    return returnArray;
}
//boolian logic
function zipZapB(zipInput, zapInput)
{
    let returnArray = [];
    let Zip = false;
    let Zap = false;

    for (let i = 1; i <= 100; i++) 
    {
        Zip = i % zipInput == 0;
        Zap = i % zapInput == 0; 

        switch(true)
        {
            case Zip && Zap:
                {
                    returnArray.push('ZipZap')
                    break;
                }
            case Zip:
                {
                    returnArray.push('Zip')
                    break;
                }
            case Zap:
                {
                    returnArray.push('Zap')
                    break;
                }
            default:
                {
                    returnArray.push(i);
                    break;
                }
        }
        
    }

    return returnArray;
}
//modulus function
function zipZapC(zipInput, zapInput)
{
    let returnArray = [];

    for (let i = 1; i <= 100; i++) 
    {
        let value = ( ( i % zipInput == 0 ? 'Zip' : '' ) + (i % zapInput == 0 ? 'Zap' : '') || i )
        returnArray.push(value);
    }

    return returnArray;
}

//loop over the array and create a tablerow for each item. 
function displayData(zzArray)
{
    // get the table body from the HTML
    let tableBody = document.getElementById("results"); 
    
    //get the template from the HTML
    let templateRow = document.getElementById("zzTemplate");

    
    //clear table first
    tableBody.innerHTML="";

for (let index = 0; index < zzArray.length; index += 5) 
    {
        let tableRow = document.importNode(templateRow.content, true);

        //lets me take all the values in the query (in this case the TD tags).
        //And it's operating on the above table row
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(zzArray[index]);
        rowCols[0].textContent = zzArray[index];

        rowCols[1].classList.add(zzArray[index + 1]);
        rowCols[1].textContent = zzArray[index+1];

        rowCols[2].classList.add(zzArray[index + 2]);
        rowCols[2].textContent = zzArray[index + 2];

        rowCols[3].classList.add(zzArray[index + 3]);
        rowCols[3].textContent = zzArray[index + 3];

        rowCols[4].classList.add(zzArray[index + 4]);
        rowCols[4].textContent = zzArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}