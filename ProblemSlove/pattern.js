const size = 5;
let pattern = '';


for (let i = 0; i < size; i++) {
  
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '*';
    }
    
    pattern += row + '\n';
}


console.log(pattern);

