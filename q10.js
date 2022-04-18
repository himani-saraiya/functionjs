function Greater(num){
    if(num>20){
        return true
    }
}
 
function students(list_of_marks){
    count=0
    for(var i of list_of_marks){
        var result= Greater(i)
        if (result === true){
            count++
        }
    }
    console.log(count);
}
students([21,25,19,25,33,54])
 
