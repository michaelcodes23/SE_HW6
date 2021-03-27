// Have player pick a piece



let piece = ""
const pick = () => {
    piece = prompt("Would you like to be an X or an O?","X / O");
if(piece != "X" && piece != "O"){
    alert("You have to pick either an 'X' or an 'O'")
    pick();
    }
// break;

}

pick();
let piece2 = "";
if(piece === 'X'){
    piece2 += "O"
}
else piece2 += "X"

const $player1 = piece;
const $player2 = piece2;

const winningScenario = () =>{
    //Player 1 winning scenarios
        console.log($('.1').text());
    if($('.1').text() == $player1 && $('.2').text() == $player1 && $('.3').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.4').text() == $player1 && $('.5').text() == $player1 && $('.6').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.7').text() == $player1 && $('.8').text() == $player1 && $('.9').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.1').text() == $player1 && $('.4').text() == $player1 && $('.7').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.2').text() == $player1 && $('.5').text() == $player1 && $('.8').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.3').text() == $player1 && $('.6').text() == $player1 && $('.9').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.1').text() == $player1 && $('.5').text() == $player1 && $('.9').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.3').text() == $player1 && $('.5').text() == $player1 && $('.7').text() == $player1){
        alert("Player 1 won the game!");
    }
    else if($('.1').text() == $player2 && $('.2').text() == $player2 && $('.3').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.4').text() == $player2 && $('.5').text() == $player2 && $('.6').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.7').text() == $player2 && $('.8').text() == $player2 && $('.9').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.1').text() == $player2 && $('.4').text() == $player2&& $('.7').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.2').text() == $player2 && $('.5').text() == $player2 && $('.8').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.3').text() == $player2 && $('.6').text() == $player2 && $('.9').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.1').text() == $player2 && $('.5').text() == $player2 && $('.9').text() == $player2){
        alert("Player 2 won the game!");
    }
    else if($('.3').text() == $player2 && $('.5').text() == $player2 && $('.7').text() == $player2){
        alert("Player 2 won the game!");
    }
}

const button = $('.but');
const restart = () => {
    console.log("button is working!")
        $('.1').text("");
        $('.2').text("");
        $('.3').text("");
        $('.4').text("");
        $('.5').text("");
        $('.6').text("");
        $('.7').text("");
        $('.8').text("");
        $('.9').text("");
        $('.footer').text("Let's start the game, Player 1 - Make Your Move!").css(`fontSize`,`30px`);
}

$(() => {
$('.but').on('click', restart);
let playerTurn = 1;

    // $button.click(function(){
 
    //     $('.1').text("");
    //     $('.2').text("");
    //     $('.3').text("");
    //     $('.4').text("");
    //     $('.5').text("");
    //     $('.6').text("");
    //     $('.7').text("");
    //     $('.8').text("");
    //     $('.9').text("");
 
    // })
    $("td").click(function() {
        if(playerTurn == 1) {
            
            if($(this).text()== ''){
            $('.footer').text(`Player 2, it's your turn!`).css(`fontSize`,`30px`);
            $(this).append($player1); 
            playerTurn = 2;
            if($('.1').text() !== "" && $('.2').text() !== "" && $('.3').text() !== "" && $('.4').text() !== "" && $('.5').text() !== "" && $('.6').text() !== ""
            && $('.7').text() !== "" && $('.8').text() !== ""&& $('.9').text() !== ""){
                alert("Its a tie, refresh the page or press the button below to play again!");
            }
            else{
            winningScenario();
            }          
            }
        }
        else {
            if($(this).text() == ''){    
            $(this).append($player2);
               $('.footer').text(`Player 1, it's your turn`).css(`fontSize`,`30px`);
            playerTurn = 1;
              if($('.1').text() !== "" && $('.2').text() !== "" && $('.3').text() !== "" && $('.4').text() !== "" && $('.5').text() !== "" && $('.6').text() !== ""
            && $('.7').text() !== "" && $('.8').text() !== ""&& $('.9').text() !== ""){
                alert("Its a tie, refresh the page or press the button below to play again!");
            }
            else{
            winningScenario();
            }     
            }
        }
    });

  
 
});

