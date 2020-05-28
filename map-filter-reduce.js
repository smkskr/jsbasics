/** Problem statement get state name having the most population density starting with the letter 'N' */
// What you have
var states = [
    { id: 10, name: 'California', population:33450, area:1200},
    { id: 20, name: 'Florida', population:23758 ,area:3400},
    { id: 30, name: 'New Jersey', population:43569, area:2300 },
    { id: 40, name: 'New York', population:98901, area:550 },
    { id: 50, name: 'Ohio', population:45872, area:3400},
  ];
  
// What you need [10,20,30,40]

/** Solving using forEach() starts*/

//filter states starting with letter 'N'
var stateName = '';
var calDensity = 0.0;
states.forEach(function(state){
    if(state.name[0] === 'N'){
        if((state.population/state.area) > calDensity){
            calDensity = state.population/state.area;
            stateName = state.name;
        }   
       
    }
});
console.log("Using forEach() : " + stateName);

/** Solving using map(),filter(),reduce() starts*/

var statesWithMaxPopDensity = states
  .filter(function (state) {
    return state.name[0] === 'N'
  })
  .map(function (state) {
    return {"id": state.id, "name": state.name, "populationdensity":state.population/state.area};
  })
  .reduce(function (preVal, currentVal) {
    return (preVal.populationdensity || 0) > currentVal.populationdensity ? preVal.name : currentVal.name;
  }, {});
console.log("Using map(),reduce() and filter() : " + statesWithMaxPopDensity);

/** Solving using map(),filter(),reduce() with arrow functions starts*/
var statesWithMaxPopDensityArrow = states
  .filter((state) => state.name[0] === 'N')
  .map((state) => ({"id": state.id, "name": state.name, "populationdensity":state.population/state.area}))
  .reduce((preVal, currentVal) => (preVal.populationdensity || 0) > currentVal.populationdensity ? preVal.name : currentVal.name)
console.log("Using map(),reduce() and filter() with arrow functions : " + statesWithMaxPopDensityArrow);