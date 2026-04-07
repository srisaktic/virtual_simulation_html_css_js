var q1 = false;
// var q2 = false;
// var q3 = false;
// var q4 = false;
// var q5 = false;

function ask1() {
    if (!q1) {
        var question = "1. Why is modulation necessary in communication engineering?\n\na. To compress the signal\nb. To reduce the size of antenna\nc. To decrease the signal power\nd. To decrease the data rate";        var answer = 'b';
        var option = prompt(question, 'a');

        if(option == answer) {
            alert("Correct Answer");
            q1 = true;
        }
        else
            alert("Wrong. The correct answer was option " + answer + ".");

    }
}

// function ask2() {
//     if (!q2) {
//         var question = "2. What happens when the amplitude of the modulating signal is greater than the amplitude of the carrier?\n\na)Decay\nb)Distortion\nc)Amplification\nd)Attenuation\n\nEnter your answer choice";
//         var answer = 'b';
//         var option = prompt(question, 'a');

//         if(option == answer) {
//             alert("Correct Answer");
//             q2 = true;
//         }
//         else
//             alert("Wrong. The correct answer was option " + answer + ".");

//     }
// }

// function ask3() {
//     if (!q3) {
//         var question = "3. What happens when the amplitude of the modulating signal is greater than the amplitude of the carrier?\n\na)Decay\nb)Distortion\nc)Amplification\nd)Attenuation\n\nEnter your answer choice";
//         var answer = 'b';
//         var option = prompt(question, 'a');

//         if(option == answer) {
//             alert("Correct Answer");
//             q3 = true;
//         }
//         else
//             alert("Wrong. The correct answer was option " + answer + ".");

//     }
// }

// function ask4() {
//     if (!q4) {
//         var question = "4. What happens when the amplitude of the modulating signal is greater than the amplitude of the carrier?\n\na)Decay\nb)Distortion\nc)Amplification\nd)Attenuation\n\nEnter your answer choice";
//         var answer = 'b';
//         var option = prompt(question, 'a');

//         if(option == answer) {
//             alert("Correct Answer");
//             q4 = true;
//         }
//         else
//             alert("Wrong. The correct answer was option " + answer + ".");

//     }
// }

// function ask5() {
//     if (!q5) {
//         var question = "5. What happens when the amplitude of the modulating signal is greater than the amplitude of the carrier?\n\na)Decay\nb)Distortion\nc)Amplification\nd)Attenuation\n\nEnter your answer choice";
//         var answer = 'b';
//         var option = prompt(question, 'a');

//         if(option == answer) {
//             alert("Correct Answer");
//             q5 = true;
//         }
//         else
//             alert("Wrong. The correct answer was option " + answer + ".");

//     }
// }