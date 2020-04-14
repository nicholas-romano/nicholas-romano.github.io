//Let's Play Rock, Paper, Scissors!
//Global Variables
var player_move;
var computer_move;
var winner;
var playerRunningTotal = 0;
var computerRunningTotal = 0;
var current_round = 0;
var AnimationCount = 0;


$(function() {
      
      //enable Player Move buttons:
      $('#playerMove button').removeAttr('disabled');
      
      $('#playTournament').on('click', function(){
            $('#play_tournament').hide();
            $('#abort_tournament').show();
            $('#rounds').show();
            $('#yourPoints').text('0');
            $('#computerPoints').text('0');
            
            $('#stage_one').attr('id', 'hidden_stage');
            $('#hidden_stage2').attr('id', 'stage_two');
      });
      
      $('#rounds').on('submit', function(event) {
            
            event.preventDefault();
            
            $('#stage_two').attr('id', 'hidden_stage2');
            $('#hidden_stage3').attr('id', 'stage_three');
            
            $('#playerMove button').removeAttr('disabled');
            
            $(this).hide();
            
            var rounds = parseInt($('#round_wins').val());
            
            $('#winner_goal').html(rounds);
            
            if (rounds === 1) {
                  $('#round_or_rounds').html('round');
            }
            else {
                  $('#round_or_rounds').html('rounds');
            }
            
            $('#game_space').show();

      });
                                    
      $('#abortTournament').on('click', function() {
            
            var exit_tournament = confirm("Are you sure you want to exit the tournament?");
                  
            if (exit_tournament) {
                  $('#play_tournament').show();
                  $('#abort_tournament').hide();
                  $('#rounds').hide();
                  $('#resetTournament').remove();
                  $('#current_round').html(1);
                  $('#yourPoints').text('0');
                  $('#computerPoints').text('0');
                  $('#play_result #YourMove h4').html('');
                  $('#play_result #ComputerMove h4').html('');
                  $('#play_result #win_or_lose h2').html('');
                  $('#YourMove, #ComputerMove, #win_or_lose').hide();
                  $('#tournamentWinner h2').html('');
                  $('.playing_field #image').remove();
                  $('.playing_field #image2').remove();
                  $('#game_space').hide();
                  $('#play_tournament').show();
                  current_round = 0;
                  playerRunningTotal = 0;
                  computerRunningTotal = 0;
                  
                  $('#stage_two').attr('id', 'hidden_stage2');
                  $('#stage_three').attr('id', 'hidden_stage3');
                  $('#final_stage').attr('id', 'hidden_final_stage');
                  $('#hidden_stage').attr('id', 'stage_one');
            }
            else {
                  return false;
            }
      });                              
                                    
      $('#playerMove button').on('click', function(event) {
            
            event.preventDefault();
            
            $('#play_result #YourMove h4').html('');
            $('#play_result #ComputerMove h4').html('');
            $('#play_result #win_or_lose h2').html('');
            $('#play_result #tournamentWinner h2').html('');
            
            incrementRounds();
            
            //disable Player Move buttons:
            $('#playerMove button').attr('disabled', 'disabled');
            
            var playerMove = $(this).attr('id');
                                                 
            $('.playing_field #image').remove();
            $('.playing_field #image2').remove();
                                          
            $('.playing_field').append('<img id="image" src="images/Player-Rock-Move.png" alt="Player Move" />');
            $('.playing_field').append('<img id="image2" src="images/Rock-Move.png" alt="Computer Move" />');
                                        
            $('#image').addClass('rotate');
            $('#image2').addClass('rotate');
            
            $("#image, #image2").bind('oanimationend animationend webkitAnimationEnd', function() {
                                                
                  AnimationCount += 1;
                                                            
                  if (AnimationCount === 2) {
                        AnimationCount = 0;
                        return;
                  }
                  else {
                        $('#YourMove').show();
                        $('#ComputerMove').show();
                        $('#win_or_lose').show();
                        playGame(playerMove);
                  }
                  
            });
                                         
      });
});

function incrementRounds() {
      
      current_round += 1;
            
      $('#current_round').html(current_round);

}

function playGame(playerMove) {
      
      var player_move = getPlayerMove(playerMove);
                                                                    
      var computer_move = getComputerMove();
                                                            
      var winner = getWinner(player_move, computer_move);
                                                            
      var result = "";
                        
      if (winner === 'player') {
                              
            playerRunningTotal += 1;
            result = "You" + "<br />" + "Win!";
            
      }
      else if (winner === 'computer') {
                              
            computerRunningTotal += 1;
            result = "You" + "<br />" + "Lose";
            
      }
                                                                    
      if (winner === 'tie') {
            result = "It's a" + "<br />" + "tie";                                              
      }
      
      $('#play_result #YourMove h4').html('You chose ' + player_move);
      
      $('#play_result #ComputerMove h4').html('Computer chose ' + computer_move);
      
      $('#play_result #win_or_lose h2').html(result);
      
      $('#score #YourScore h2 #yourPoints').html(playerRunningTotal);
      
      $('#score #ComputerScore h2 #computerPoints').html(computerRunningTotal);
       
      checkForTournamentWinner();
}

function getPlayerMove(playerMove) {
      
      if (playerMove == 'paper') {
            $('#image').attr('src', 'images/Player-Paper-Move.png');
      }
      else if (playerMove == 'scissors') {
            $('#image').attr('src', 'images/Player-Scissors-Move.png');
      }
      else {
            $('#image').attr('src', 'images/Player-Rock-Move.png');   
      }
      return playerMove; 
}

function getComputerMove() {
  
    var randomNumber = Math.random();
      
      if (randomNumber < 0.33) {
            computer_move = 'rock';
            $('#image2').attr('src', 'images/Rock-Move.png');

      }
      else if (randomNumber < 0.66) {
            computer_move = 'paper';
            $('#image2').attr('src', 'images/Paper-Move.png');

      }
      else {
            computer_move = 'scissors';
            $('#image2').attr('src', 'images/Scissors-Move.png');
            
      }
      return computer_move;
      
}

function getWinner(player_move, computer_move) {
    
  if (player_move === 'rock') {
        if (computer_move === 'paper') {
          winner = 'computer';
            
        }
        else if (computer_move === 'scissors') {
          winner = 'player';
            
        }
        else {
          winner = 'tie';
        }
    }
   
   if (player_move === 'scissors') {
        if (computer_move === 'paper') {
          winner = 'player';
            
        }
        else if (computer_move === 'scissors') {
          winner = 'tie';
        }
        else {
          winner = 'computer';
            
        }
    }
  
    if (player_move === 'paper') {
        if (computer_move === 'paper') {
          winner = 'tie';
        }
        else if (computer_move === 'rock') {
          winner = 'player';
            
        }
        else {
          winner = 'computer';
           
        }
    }
    
    return winner;
}

function checkForTournamentWinner() {
      
      var winner_goal = parseInt($('#winner_goal').text());
      
      if (playerRunningTotal === winner_goal) {
            
            $('#stage_three').attr('id', 'hidden_stage3');
            $('#hidden_final_stage').attr('id', 'final_stage');
            
            playerRunningTotal = 0;
            computerRunningTotal = 0;
            $('#tournamentWinner h2').html('You have won the Tournament!');
            $('#tournamentWinner').append('<button id="resetTournament" onclick="resetTournament();">Reset Tournament</button>');
            //disable Player Move buttons:
            $('#playerMove button').attr('disabled', 'disabled');
      }
      else if (computerRunningTotal === winner_goal) {
            
            $('#stage_three').attr('id', 'hidden_stage3');
            $('#hidden_final_stage').attr('id', 'final_stage');
            
            playerRunningTotal = 0;
            computerRunningTotal = 0;
            $('#tournamentWinner h2').html('Computer has won the Tournament');
            $('#tournamentWinner').append('<button id="resetTournament" onclick="resetTournament();">Reset Tournament</button>');
            //disable Player Move buttons:
            $('#playerMove button').attr('disabled', 'disabled');
      }
      else {
            //enable Player Move buttons:
            $('#playerMove button').removeAttr('disabled');
            return;
      }      
      
}

function resetTournament() {
                  $('#play_tournament').show();
                  $('#abort_tournament').hide();
                  $('#resetTournament').remove();
                  $('#current_round').html(1);
                  $('#yourPoints').text('0');
                  $('#computerPoints').text('0');
                  $('#play_result #YourMove h4').html('');
                  $('#play_result #ComputerMove h4').html('');
                  $('#play_result #win_or_lose h2').html('');
                  $('#YourMove, #ComputerMove, #win_or_lose').hide();
                  $('#tournamentWinner h2').html('');
                  $('.playing_field #image').remove();
                  $('.playing_field #image2').remove();
                  $('#game_space').hide();
                  $('#play_tournament').show();
                  current_round = 0;
                  playerRunningTotal = 0;
                  computerRunningTotal = 0;
                  
                  $('#stage_two').attr('id', 'hidden_stage2');
                  $('#stage_three').attr('id', 'hidden_stage3');
                  $('#final_stage').attr('id', 'hidden_final_stage');
                  $('#hidden_stage').attr('id', 'stage_one');
}


