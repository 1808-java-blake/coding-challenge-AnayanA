// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
  // TODO: Create the solution
  let list = [3,5];
  let sum = 0;
  let limit = 0;
  list.forEach(element => {
    console.log(element);
    let inc = 0;
    limit = 0;
    while (limit < number)
    {
      sum += limit;
      limit = inc * element;
      if(element === 5)
      {
        console.log(element)
        if((limit%3) === 0)
        {
          console.log('current limit is: ' + limit);
          continue;
        }
      }

      inc++;
      console.log(limit)
    }
  });
  return sum;
}

module.exports = solution;
