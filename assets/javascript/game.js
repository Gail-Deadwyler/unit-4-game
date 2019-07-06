$(document).ready(function() {

    // $('img').on('click', function() {

    //     // make sure clicking an image works 
    //     console.log("You clicked me!");
    // });

    // generate a random number between 1 and 5 (inclusive) and show on HTML
    $('h3#numToBeat').text(Math.floor(Math.random() * 5) + 1);

    // click on an image, generate a random number and show on HTML
    $('img.randnum').click(function() {

        $('h3#total_score').text(Math.floor(Math.random() * 5) + 1);

        // var CrystalNum = $(this).text(Math.floor(Math.random() * 5) + 1);
        // console.log(CrystalNum);


    });


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


