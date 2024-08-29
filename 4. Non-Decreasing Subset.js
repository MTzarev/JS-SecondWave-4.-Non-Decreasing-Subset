function nonDecreasingSubset (arr){
let newArr = [];
for (let i=0; i<arr.length; i++){
    
    if(Number(arr[i])<Number(arr[i-1])||arr[i]<arr[0]){
        continue;
    }else{
        newArr.push(arr[i]);
    }
}
console.log(newArr.join(` `));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
