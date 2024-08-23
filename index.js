function convTemp(){
    const inputvalue = document.getElementById('inputnum').value;
    const inputdegree = document.getElementById('inputoptions').value;
    const outputdegree = document.getElementById('outputoptions').value;

    let convertedval;

    if(inputdegree === outputdegree ){
        convertedval = inputvalue;
    } else if(inputdegree === "Celsius" && outputdegree === "Fah"){
        convertedval = (inputvalue * 9/5) + 32;
    } else if(inputdegree === "Fah" && outputdegree === "Celsius"){
        convertedval = (inputvalue - 32) * 5/9;
    } else if(inputdegree === "Kelvin" && outputdegree === "Celsius"){
        convertedval = inputvalue - 273.15;
    } else if(inputdegree === "Celsius" && outputdegree === "Kelvin"){
        convertedval = parseFloat(inputvalue) + 273.15;
    } else if(inputdegree === "Fah" && outputdegree === "Kelvin"){
        convertedval = ((inputvalue - 32) * 5/9) + 273.15;
    } else if(inputdegree === "Kelvin" && outputdegree === "Fah"){
        convertedval = ((inputvalue - 273.15) * 9/5) + 32;
    }


    document.getElementById('ans').innerHTML = `${convertedval.toFixed(2)} ${outputdegree}`;
}