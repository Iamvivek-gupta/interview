// sort by height problem.


let a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a){
  // const people = a.filter(e => e !== -1);
  // const sortedPeople = people.sort( (a,b) => a - b);
  // console.log(sortedPeople);
  // let i = -1;
  // return a.map(value => {
  //   if(value === -1) return -1;
  //   i++;
  //   return a = sortedPeople[i]
  // })

  // second solution below
  const sortedPeople = a.filter(e => e !== -1).sort( (a,b) => a - b);
  return a.map(e => e === -1 ? e : sortedPeople.shift());
}


console.log(sortByHeight(a));

// 