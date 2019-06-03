function settimeout2(s, obj){
    var n=0
    if(s != undefined)
    {
        n=s;
    }
    var timer = setInterval(function(obj){
        $(".settimeout").html(n);
        n--;
        if(0==n){
            self.location.href="/";
            clearInterval(timer);
            return;
        }
    },1000);
}