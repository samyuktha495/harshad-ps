//1) WAP to print the min no prime in the given number
// input: Enter a number: 67439
// output: 4
num=prompt("enter number:")
primes="", nonprimes=""
function checkPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
        return false
    }
    return true
}
for(j of num){
    if(j>1){
     if(checkPrime(j)){
         primes+=j+""
     }else{
         nonprimes=nonprimes+j+""
     }
    }
}

console.log("nonprimes in "+num+" : "+nonprimes)
min = nonprimes[0]
for(i=0;i<nonprimes.length;i++){
if(nonprimes[i]<min)
min=nonprimes[i]
}
console.log("min number is: "+min)

//2) WAP to print the prime sum is more or non prime sum is more
// input: Enter number: 6655
// output: Non prime sum is more
num=prompt("enter number:")
primesum=0, nonprimesum=0

function checkPrime(n){
    for(k=2;k<n;k++){
        if(n%k==0)
        return false
   }
    return true
}

for(j of num){
    if(j>1){
     if(checkPrime(j)){
         primesum+=Number(j)
         
         }else{
         nonprimesum+=Number(j)
     }
        
     
    }
}
res=(primesum>nonprimesum)?"primes sum is more":(primesum==nonprimesum)?"both are equal":"nonprimesum is more"
console.log(res)

// Example 1:
// Input: 378
// Output: Yes it is a Harshad number.
// Explanation: 3+7+8=18. 378 is divisible by 18. Therefore 378 is a harshad number.
num=prompt("enter a number")
digitsum=0
for(l of num){
    digitsum+=Number(l)
}
result=(num % digitsum==0)?"harshad number":"not a harshad number"
console.log(result)