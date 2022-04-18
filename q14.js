function nolist(a,b){
    for(var i=0;i<a.length;i++){
        for (var j=0;j<b.length;j++){
            if (a[i]%2==0 && b[j]%2==0){
                console.log("dono even hai")
                // return "dono even hai"      
            }else{
                console.log("dono even nhi h")
                // return "dono even nahi hai"
            }
        }
    }
}
nolist([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])