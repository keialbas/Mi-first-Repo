var numbers =[1,2,4,1,23,3,5,2,43,45,346,6,546,45,7,457,45,6,5,2,12,1,23,1,312,34,23,4,3,3,3,3,3,3,4,4,5,5,3,4,5,6,4,20,20]

numbers.sort()
console.log(numbers.length)
var count = 1;
for(i =0; i<numbers.length-1; i++){
    if (numbers[i] == numbers[i+1]){
    count ++
    }
    else{
        console.log(numbers[i]+"="+count)
        count =1
    }

}
