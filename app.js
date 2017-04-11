$(document).ready(function() {
  var playerChoice, computer, random;
  var options = ['#a1', '#a2', '#a3', '#b1', '#b2', '#b3', '#c1', '#c2', '#c3'];

  function takeTurn() {
    $('#messages').html('<h2>Computer\'s turn!</h2>');
    setTimeout(function() {
    random = Math.floor(Math.random() * 9);
    while ($(options[random]).html() !== '') {
      random = Math.floor(Math.random() * 9);
    }
    $(options[random]).append(computer);
    if (isGameOver() === false) {
    $('#messages').html('<h2>Your turn!</h2>');
  }
}, 500);
  }

  function isGameOver() {
    if ($('#a1').html() === computer && $('#a2').html() === computer && $('#a3').html() === computer ||
        $('#b1').html() === computer && $('#b2').html() === computer && $('#b3').html() === computer ||
        $('#c1').html() === computer && $('#c2').html() === computer && $('#c3').html() === computer ||
        $('#a1').html() === computer && $('#b1').html() === computer && $('#c1').html() === computer ||
        $('#a2').html() === computer && $('#b2').html() === computer && $('#c2').html() === computer ||
        $('#a3').html() === computer && $('#b3').html() === computer && $('#c3').html() === computer ||
        $('#a3').html() === computer && $('#b2').html() === computer && $('#c1').html() === computer ||
        $('#a1').html() === computer && $('#b2').html() === computer && $('#c3').html() === computer) {
          $('#messages').html('<h2>You lost...</h2>');
          reset();
    } else if ($('#a1').html() === playerChoice && $('#a2').html() === playerChoice && $('#a3').html() === playerChoice ||
        $('#b1').html() === playerChoice && $('#b2').html() === playerChoice && $('#b3').html() === playerChoice ||
        $('#c1').html() === playerChoice && $('#c2').html() === playerChoice && $('#c3').html() === playerChoice ||
        $('#a1').html() === playerChoice && $('#b1').html() === playerChoice && $('#c1').html() === playerChoice ||
        $('#a2').html() === playerChoice && $('#b2').html() === playerChoice && $('#c2').html() === playerChoice ||
        $('#a3').html() === playerChoice && $('#b3').html() === playerChoice && $('#c3').html() === playerChoice ||
        $('#a3').html() === playerChoice && $('#b2').html() === playerChoice && $('#c1').html() === playerChoice ||
        $('#a1').html() === playerChoice && $('#b2').html() === playerChoice && $('#c3').html() === playerChoice) {
          $('#messages').html('<h2>You Won!</h2>');
          reset();
    } else if ($('#a1').html() && $('#a2').html() && $('#a3').html() && $('#b1').html() && $('#b2').html() && $('#b3').html() && $('#c1').html() && $('#c2').html() && $('#c3').html()) {
        $('#messages').html('<h2>It\'s a draw!</h2>');
        reset();
    } else {
      return false;
    }
  }

  function reset() {
    setTimeout(function() {
      $('td').html('');
      $('#messages').html('');
    }, 2500);
    if (computer === 'X') {
      setTimeout(takeTurn, 3000);
    } else {
      setTimeout(function() {
      $('#messages').html('<h2>Your turn!</h2>');
    }, 3000);
    }
  }

  $('#x').click(function() {
    playerChoice = 'X';
    computer = 'O';
    $('#question').fadeOut();
    $('#game').slideDown();
    $('#messages').html('<h2>Your turn!</h2>');
  });

  $('#o').click(function() {
    playerChoice = 'O';
    computer = 'X';
    $('#question').fadeOut();
    $('#game').slideDown();
    takeTurn();
  });

  $('td').click(function() {
    if ($(this).html() === '') {
    $(this).append(playerChoice);
  }
    if (isGameOver() === false) {
      takeTurn();
    };
  });

});
