
function getcurrvalue (){
    request.open('GET', 'https://free.currconv.com/api/v7/convert?apiKey=81f08bdce1a01f337f8d&compact=ultra&q=BTC_USD', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
           var ondollar =  data.BTC_USD;
           var eurovale = 1;

           convertnum(ondollar,eurovale);

        } else {
            console.log('error converting to dollar')
        }
    }
    request.send()
}


function convertnum(a,b){
    if(typeof a !== 'number' || typeof b !=='number')
        return 0;
    return a*b;
}
module.exports = {
    convertnum,
}
