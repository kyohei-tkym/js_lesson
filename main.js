const fizzBuzz = (x) => {
    if(x % 15 === 0){
        return 'FizzBuzz';
    } else if (x % 5 === 0){
        return 'Buzz';
    } else if (x % 3 === 0){
        return 'Fizz';
    } else{
        return x;
    }
}

for (let i = 1; i <= 100; i++){
    console.log(fizzBuzz(i));
}