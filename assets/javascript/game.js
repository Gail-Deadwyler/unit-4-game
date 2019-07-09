$(document).ready(function() {

    var total_score;
    var num_to_beat;
    var wins = 0;
    var loses = 0;
    var running_total = 0;

    randomNumFunc();
    
    // generate a random number between 19 and 120 (inclusive) and show on HTML
    function randomNumFunc() {
        $('h3#numToBeat').text(Math.floor(Math.random() * 102) + 19);
        num_to_beat = $('h3#numToBeat').text();
        num_to_beat = parseInt(num_to_beat);
        return num_to_beat;        
    }

    function resetGame() {
        
        return running_total = 0;
               
    }

    // click on an image, generate a random number (1- 12)and show on HTML
    $('img.randnum').click(function() {
        $('h3#total_score').text(Math.floor(Math.random() * 12) + 1);

        total_score = $('h3#total_score').text();
        total_score = parseInt(total_score);

        running_total += total_score;
        


        // Debugging here --
        console.log("what is num to beat ---", num_to_beat);
        console.log("what is my score ---", total_score);
        console.log("Running total ----" + running_total);

        $('h3#total_score').text(running_total);

        
        if (num_to_beat === running_total) {
            wins++;            
            $('#wins').text(wins);
            randomNumFunc();            
            $('h3#total_score').text("You scored " + running_total.toString() + " pts. You win!");
            resetGame();                     
        }
        
        else if (running_total > num_to_beat) {            
            loses++;
            $('#loses').text(loses);
            randomNumFunc();
            $('h3#total_score').text("You scored " + running_total.toString() + " pts. You lose!");
            resetGame();             
        }
               
    });
    

});


