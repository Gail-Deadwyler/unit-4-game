$(document).ready(function() {

    var total_score;
    var num_to_beat;
    var wins = 0;
    var loses = 0;

    // $('img').on('click', function() {

    //     // make sure clicking an image works 
    //     console.log("You clicked me!");
    // });

    // generate a random number between 1 and 5 (inclusive) and show on HTML
    $('h3#numToBeat').text(Math.floor(Math.random() * 5) + 1);

    num_to_beat = $('h3#numToBeat').text();
    num_to_beat = parseInt(num_to_beat);
    // alert(num_to_beat);

    // click on an image, generate a random number and show on HTML
    $('img.randnum').click(function() {
        $('h3#total_score').text(Math.floor(Math.random() * 5) + 1);

        total_score = $('h3#total_score').text();
        total_score = parseInt(total_score);


        // keep track of wins and loses
        console.log("what is num to beat ---", num_to_beat);
        console.log("what is total score ---", total_score);

        if (num_to_beat == total_score) {
            wins++;            
            $('#wins').text(wins);
            // alert("you have" + wins + " wins");
        }
        else if (total_score > num_to_beat) {
            loses++;
            $('#loses').text(loses);
            // alert("you have" + loses + " loses");
        }
        
        // alert(total_score);

        // var CrystalNum = $(this).text(Math.floor(Math.random() * 5) + 1);
        // console.log(CrystalNum);
    });




    

    // keep track of image random score




    // var RandNum = $('<div>');
    // RandNum.text(Math.floor(Math.random() * 5) + 1);
    // $('h3#numToBeat').append(RandNum);

    // $('.num').on('click', function() {
    //     // console.log(event);
    //     // check if number is clicked
    //     // console.log(this.innerHTML);
    //     // append numers into an empty string
    
    //     if (selectSecondNums === true) {
    //         second_numbers = second_numbers + $(this).attr('val');
    //         console.log(second_numbers, typeof second_numbers );
    //     }
    //     else {
    //         first_numbers = first_numbers + $(this).attr('val');
    //         console.log(first_numbers, typeof first_numbers);
    //     }
    // });

});


