function number(speed){
    if (speed<=70){
        console.log("ok")
    }
    else{
        if(speed>70){
            point=(speed-70)/5
            console.log(point)
        }
    }
    if (point>12){
        console.log(point,"licence suspended")
    }
}number(135)