

const consecutiveDays = (arrInput, n) => {
    const daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];   
    const resultArray = [];
    let currentIdx = daysArray.findIndex((day) => day.toLowerCase() === arrInput[0].toLowerCase());
    for(let i = 0; i < n; i++) {
        if(currentIdx > (daysArray.length - 1)) currentIdx = 0;
        resultArray.push(daysArray[currentIdx]);
        currentIdx++;
    }
    return [...resultArray];
}

// test case 1
console.log("===test case 1: [Mon]; n = 7 ===");
console.log(consecutiveDays(["Mon"], 7));

// test case 2
console.log("===test case 2: [Mon]; n = 10 ===");
console.log(consecutiveDays(["Mon"], 10));

// test case 3
console.log("===test case 3 [Fri, Sun]; n = 5 ===");
console.log(consecutiveDays(["Fri", "Sun"], 5));

// test case 4
console.log("===test case 4: [Mon, Thu, Sat]; n = 5 ===");
console.log(consecutiveDays(["Mon", "Thu", "Sat"], 5));

// test case 5
console.log("===test case 5 [Thu]; n = 1 ===");
console.log(consecutiveDays(["Thu"],1));

// test case 6
console.log("===test case 6 [Sun]; n = 3 ===");
console.log(consecutiveDays(["Sun"],3));