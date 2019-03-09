function submitButton(){
    let food;
    let quadrant;
    console.log("onechecked:", document.getElementById("one").checked);
    let isOne = document.getElementById("one").checked;
    console.log("twochecked:", document.getElementById("two").checked);
    let isTwo = document.getElementById("two").checked;
    console.log("threeChecked:", document.getElementById("three").checked);
    let isThree = document.getElementById("three").checked;
    console.log("Fourchecked:", document.getElementById("four").checked);
    let isFour = document.getElementById("four").checked;

    let quadArray = [];
    quadArray.push(isOne);
    quadArray.push(isTwo);
    quadArray.push(isThree);
    quadArray.push(isFour);


    for(let i = 0; i <quadArray.length; i++){
        if(quadArray[i] == true){
            quadrant = quadArray[i];
            break;
        }
    }

    console.log("hotdogchecked:", document.getElementById("hotdogs").checked);
    let isHotdogs = document.getElementById("hotdogs").checked;
    console.log("burgerchecked:", document.getElementById("burgers").checked);
    let isBurgers = document.getElementById("burgers").checked;
    console.log("eitherChecked:", document.getElementById("either").checked);
    let isEither = document.getElementById("either").checked;

    let foodArray = [];
    foodArray.push(isHotdogs);
    foodArray.push(isBurgers);
    foodArray.push(isEither);

    for(let i =0; i < foodArray.length; i++){
        if(foodArray[i] == true){
            food = foodArray[i];
            break;
        }
    }

    const serviceobject = {
        food: food,
        quadrant: quadrant
    }
    sendObject(serviceobject);
}

function sendObject(serviceobject){

    return serviceobject;
}

function displayResponse(response){
    document.getElementById("formOptions")
}