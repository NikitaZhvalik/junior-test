const data = require('./data.json');

const task11Result = (animals) => {
    let dogs = 0;
    let cats = 0;
    let totalAge = 0;
    let count = 0;
  
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].type === "dog") {
        dogs++;
      } else if (animals[i].type === "cat") {
        cats++;
      }
      if (animals[i].age != null) {
        totalAge += animals[i].age;
        count++;
      }
    }
    
    let averageAge = Math.floor(totalAge / count);
  
    return {
      dogs,
      cats,
      averageAge,
    }
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].type === "dog" && animals[i].breed && animals[i].features.includes('black')) {
            result++
        }
    }
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    const result = [];
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].type === "cat" && animals[i].features.includes('black')) {
            result.push(animals[i])
        } else if (animals[i].type === "dog" && animals[i].features.includes('white')) {
            result.push(animals[i])
        }
    }
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    const cats = animals.filter(item => item.type === "cat").sort((a, b) => b.age - a.age);
    const dogs = animals.filter(item => item.type === "dog").sort((a, b) => a.age - b.age);
  
    return [...cats, ...dogs];
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    const result = number ** n
    // const result = Math.pow(number, n)
    return result 
}

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    let result = []
    inputArray.forEach((arr) => {
        if (Array.isArray(arr)) {
            result = result.concat(myFlatFunc(arr))
        } else {
            result.push(arr)
        }
    })
    return result
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
