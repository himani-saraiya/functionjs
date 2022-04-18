function Numbers(limit){
    for(i=0;i<=limit;i++){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
    }
}
Numbers(3);