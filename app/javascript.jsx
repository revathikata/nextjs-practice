import React from 'react'

function javascript() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i);
    }
    // 2
    const num2 =[];
    for (let i= 1; i<=100; i+=2){
      num2.push(i)
    }
    // 3
    const num3 = []
    for(let i = 1; i <= 10; i++)
  {
      let row = "7 * " + i + " = " + 7 * i;
      num3.push(row);
  }
  // 4
  const num4 = []
  function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        let row = n + " * " + i + " = " + n * i;
        num4.push(row); // Push each row of the multiplication table into num4 array
    }
  }
  for (let i = 1; i <= 10; i++) {
    printTable(i); // Call printTable function for each number from 1 to 10
  }
  // 5
  const num5 = []
  let sum = 0;
  
  for(let i = 1; i <= 10; i++)
  {
      sum += i;
  }
  num5.push(sum)
  // 6
  const num6 = []
  let prod = 1
  for (let i=1; i<=10; i++){
    prod *= 1
    num6.push(prod)
  }
  // 7
  const num7 = []
  var num = 0;
  for(var i = 11; i < 30; i += 2)
  {
    num += i;
  num7.push(num)
  }
  
  
    return (
      <div className="prac text-white">
        <h6>Welcome</h6>
        <p style={{color:'green', fontWeight:'bold'}}>Print numbers from 1 to 10 : </p> <span style={{color:'blue'}}>{numbers.join(', ')}</span> 
        <p style={{color:'green', fontWeight:'bold'}}>Print the odd numbers less than 100: </p><span style={{color:'blue'}}>{num2.join(',')}</span>
        <p style={{color:'green', fontWeight:'bold'}}>Print the multiplication table with 7</p><span style={{color:'blue'}}>{num3.join(',')}</span>
        <p style={{color:'green', fontWeight:'bold'}}>Print all the multiplication tables with numbers from 1 to 10</p><span style={{color:'blue'}}>{num4.join(',')}</span>
        <p style={{color:'green', fontWeight:'bold'}}>Calculate the sum of numbers from 1 to 10</p><span style={{color:'blue'}}>{num5.join(',')}</span>
        <p style={{color:'green', fontWeight:'bold'}}> Calculate 10!</p><span style={{color:'blue'}}>{num6.join(',')}</span>
        <p style={{color:'green', fontWeight:'bold'}}> Calculate the sum of odd numbers greater than 10 and less than 30</p><span style={{color:'blue'}}>{num7.join(',')}</span>
      </div>
    );
  }

export default javascript