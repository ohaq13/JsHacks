/*
* This will attempt to bid 10 sec before
* the auction ends, and submit bid 5 secs 
* before end. Currenlty works when less 
* then 24 hours remaining
*
* Open the product you want to bid on and 
* Copy paste the below in console window, 
* make sure computer does not go to sleep
* This will promot for max bid enter that 
* tab needs to be left open. If you change 
* your mind just refresh/reload the page 
* and paste teh code again to put a new ammount 
*/

maxBidAmount = prompt("Please enter your max bid like 50.8", "Max Bid");
t =  setInterval(function()
{
    var runSecondsBeforeEnd = 10;
    
    var timeLeft = new Date(parseInt(document.querySelector(".timeMs[timems]").getAttribute("timems")) - (runSecondsBeforeEnd * 1000)) - new Date().getTime();
    console.log("Max Bid: %s %c(Time Left to Auto Bid: %sh %sm %ss)",maxBidAmount, 'color:green', new Date(timeLeft).getUTCHours(),new Date(timeLeft).getUTCMinutes(),new Date(timeLeft).getUTCSeconds() )

    if (timeLeft <= 0 )
    {
        document.getElementById("bidBtn_btn").click();
        setTimeout(function()
        { 
            document.getElementById("app-bidlayer-bidsection-input").value = maxBidAmount;
            document.querySelector('button[data-sid="m4952.l9220"]').click();
			console.log("Bid for %s Attempted",maxBidAmount); 
        }, 3000);

        clearInterval(t);
    }
}, 5000);
