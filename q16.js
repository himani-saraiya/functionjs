function per(num){   
    var i=1
    var sum=0
    while (i<=Math.floor(num /2)){
        if (num%i==0){
            sum=sum+i
        i++
        }
    }
    if (sum==num){
        console.log(num,"perfect number")
    }else{
        console.log(num,"not a perfect number")
        
    }
}per(6)