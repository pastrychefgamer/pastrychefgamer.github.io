console.log('JS loaded');

let people, input, name;

const $peopleListElements = $('#results');
const $inputElement = $('input');

$('#people').on('click', handleClick);

function handleClick() {
    input = $inputElement.val();
    getAPIData();
}

function getAPIData() {
    const URL = "https://swapi.co/api/people/?search=" + input;
    // console.log(URL);
    const response = $.ajax({url: URL});
    response.then(function(data) {
        // console.log(data);
        for (let i = 0; i < data["results"].length; i++) {
            console.log(data["results"][i]);
            for (let prop in data["results"][i]) {
                console.log(`data["results"][i].${prop} = ${data["results"][i][prop]}`);

                let liStr = `<li>${prop}: ${data["results"][i][prop]}</li>`;
                $("ul").append(liStr);
            }
        } 
    });

    /* response.then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]["name"]);
            (data[i]["name"]);
        }
    }) */
}
$('#species').on('click', handleClick2);

function handleClick2() {
    input = $inputElement.val();
    getAPIData2();
}

function getAPIData2() {
    const URL = "https://swapi.co/api/species/";
    const response = $.ajax({url: URL});
    response.then(function(data) {
    console.log(data);
    });

    response.then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]["name"]);
            (data[i]["name"]);
        }
    })
}
$('#starships').on('click', handleClick3);

function handleClick3() {
    input = $inputElement.val();
    getAPIData3();
}

function getAPIData3() {
    const URL = "https://swapi.co/api/starships/";
    const response = $.ajax({url: URL});
    response.then(function(data) {
    console.log(data);
    });

    response.then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]["name"]);
            (data[i]["name"]);
        }
    })
}
$('#planets').on('click', handleClick4);

function handleClick4() {
    input = $inputElement.val();
    getAPIData4();
}

function getAPIData4() {
    const URL = "https://swapi.co/api/planets/";
    const response = $.ajax({url: URL});
    response.then(function(data) {
    console.log(data);
    });

    response.then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]["name"]);
            (data[i]["name"]);
        }
    })
}