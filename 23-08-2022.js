// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let result = num.toString().split("").map(n=>Number(n))
    for(let i = 0; i < result.length; i++){
        if(result[i] !== 0){
        let length =  result.slice(i,result.length).length  
        result[i] = result[i] * (10 ** (length - 1))
        }
    }
    return result.filter(n=> n !== 0).join(" + ")
  }

  expandedForm(12)