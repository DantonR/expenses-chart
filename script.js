var totalSpent = document.getElementById('totalSpent')
var bars = document.querySelectorAll('.bar')

var spentOverDays = [90, 49, 33, 62, 44, 65, 33]

const sum = spentOverDays.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

for (let index = 0; index < 7; index++){
    // var moneySpent = Math.floor(Math.random() * 100);
    // spentOverDays.push(moneySpent)
    var percentage = spentOverDays[index] / sum;
    bars[index].style.height = Math.floor(Math.random() * 100) + '%'
}

console.log(spentOverDays)


  
  console.log(sum); //
  console.dir(bars[0])


  

  totalSpent.innerHTML = `$${sum}`

