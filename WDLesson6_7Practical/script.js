let data, info; // global variables

async function init(){  
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  //console.log(data);

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.on_street_name}</h3>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <p>${complaint.crash_time}</p>
                 <p>${complaint.borough}</p>
                 <p>${complaint.zip_code}</p>
                 <p>${complaint.number_of_persons_injured}</p>
                 <p>${complaint.vehicle_type_code1}</p>
              </div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

  //Filling Dropdown Menus
  let boroughs = fillDropDown("borough");
  document.getElementById("boroughs").innerHTML = boroughs;
  document.getElementById("boroughs2").innerHTML = boroughs;

  let vehicle_types = fillDropDown("vehicle_type_code1");
  document.getElementById("vehicle_types").innerHTML = vehicle_types;  
}

function filterByBorough(){
  let borough = document.getElementById("boroughs").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.on_street_name}</h3>
                    <hr>
                    <p>${complaint.crash_date}</p>
                    <p>${complaint.crash_time}</p>
                    <p>${complaint.borough}</p>
                    <p>${complaint.zip_code}</p>
                    <p>${complaint.number_of_persons_injured}</p>
                    <p>${complaint.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
} 

function filterByBoroughAndVehicle(){
  let borough = document.getElementById("boroughs2").value;
  let vehicle_type = document.getElementById("vehicle_types").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough && complaint.vehicle_type_code1 == vehicle_type){
      build += `<div class="fitted card">
                    <h3>${complaint.on_street_name}</h3>
                    <hr>
                    <p>${complaint.crash_date}</p>
                    <p>${complaint.crash_time}</p>
                    <p>${complaint.borough}</p>
                    <p>${complaint.zip_code}</p>
                    <p>${complaint.number_of_persons_injured}</p>
                    <p>${complaint.vehicle_type_code1}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  
}
//function to fill drop down
function fillDropDown(field){
  let list = [];
  let build = `<option>Select Option</option>`;

  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[field])){
      list.push(data_field[field]);
    }
  }

  list.sort();

  for(let fieldValue of list){
    build += `<option>${fieldValue}</option>`;
  }

  return build;
}