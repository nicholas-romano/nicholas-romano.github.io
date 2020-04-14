function init() {

  var music = new Howl({
      src: ['audio/Friday-night-synthwave-electronic-music.mp3'],
      loop: true
  });

  music.once('load', function(){
    music.play();
  });

  var missle_shot = new Howl({
      src: ['audio/missle-shot.mp3', 'missle-shot.wave']
  });

  var missle_contact = new Howl({
      src: ['audio/blast.mp3', 'blast.wav']
  });

  var rocketship_explosion = new Howl({
      src: ['audio/explosion.mp3', 'explosion.wav']
  });

  var end_game = true;

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var right_border = screenWidth - 100;
  var bottom_border = screenHeight - 50;
  var left_border = 10;
  var top_border = 10;
  var center = screenWidth / 2;
  var lives = 2;
  var rocketship_attacked = false;

  var closeDialogue;

  window.onresize = resize;

  function resize()
  {
    rocketship.style.top = bottom_border - 100 + 'px';

    if (parseInt(rocketship.style.left) >= right_border) {
      rocketship.style.left = center + "px";
    }

    if (parseInt(rocketship.style.left) <= left_border) {
      rocketship.style.left = center + "px";
    }

  }

  var ufo;
  var ufo2;
  var ufo3;
  var ufo4;
  var ufo5;

  function targetEnemies() {
    ufo = document.getElementById("ufo");
    ufo2 = document.getElementById("ufo2");
    ufo3 = document.getElementById("ufo3");
    ufo4 = document.getElementById("ufo4");
    ufo5 = document.getElementById("ufo5");
  }

  var screen_container;

  setUpEnemies("ufo", 0);
  setUpEnemies("ufo2", -150);
  setUpEnemies("ufo3", 150);
  setUpEnemies("ufo4", -300);
  setUpEnemies("ufo5", 300);

  function setUpEnemies(name, position) {

    ufo = document.createElement("IMG");
    ufo.style.position = "absolute";
    ufo.style.left = center + position + "px";
    ufo.style.top = top_border + 50 + "px";

    var enemy = {id: name, class: "enemies", alt: "UFO", src: "images/ufo.png"};

    for (var index in enemy) {
      var attr = document.createAttribute(index);
      attr.value = enemy[index];
      ufo.setAttributeNode(attr);
    }

    screen_container = document.getElementById("screen");
    screen_container.appendChild(ufo);

  }

  function moveEnemies() {

    var total_enemies = document.getElementsByClassName("enemies");

    if (total_enemies.length > 0) {

      //loop through enemies and check for missle contact:
      for (var i = 0; i < total_enemies.length; i++) {

        var ufo_id = total_enemies[i].getAttribute('id');
        var ufo = document.getElementById(ufo_id);
        moveTo(ufo);
      }
    }

  }

  var rocketship = document.getElementById("rocketship");
  rocketship.style.position = 'absolute';
  rocketship.style.left = center + 'px';
  rocketship.style.top = bottom_border - 100 + 'px';
  rocketship.style.visibility = "visible";

  var missile = document.getElementById("missle");
  missle.style.position = 'absolute';
  missle.style.left = parseInt(rocketship.style.left) + 30 + 'px';
  missle.style.top = parseInt(rocketship.style.top) + 'px';
  missle.style.visibility = "hidden";

  var explosion = document.getElementById("explosion");
  explosion.style.position = 'absolute';
  explosion.style.left = parseInt(ufo.style.left);
  explosion.style.top = parseInt(ufo.style.top);
  explosion.style.visibility = "hidden";

  var dialogue_begin = document.getElementById('dialogue_begin');
  var b_lives_amt = document.getElementById('b_lives-amt');
  dialogue_begin.style.display = "block";

  var dialogue_lostship = document.getElementById('dialogue_lostship');
  var ls_lives_amt = document.getElementById('ls_lives-amt');
  dialogue_lostship.style.display = "none";

  var dialogue_gameover = document.getElementById('dialogue_gameover');
  var go_dialogue_heading = document.getElementById('go_dialogue-heading');
  var go_dialogue_body = document.getElementById('go_dialogue-body');
  dialogue_gameover.style.display = "none";

  b_lives_amt.innerHTML = lives;

  var game_results = document.getElementById('game_results');

  var wins = document.getElementById('wins');
  var loses = document.getElementById('loses');

  var total_wins = 0;
  var total_loses = 0;

  gameResults();

  function gameResults() {
    if (total_wins !== 0 || total_loses !== 0) {
      game_results.style.display = "block";
    }
    else {
      game_results.style.display = "none";
    }
  }

  action_button.addEventListener('click', function() {

      end_game = false;

      targetEnemies();

      dialogue_begin.style.display = "none";

      document.onmousemove = moveRocketship;
      document.onkeypress = fireMissle;

      moveEnemies();

  });

    //Moving the Rocketship with mouse movement:
  function moveRocketship(event) {

    var rocketship = document.getElementById('rocketship');

    var x = event.clientX;
    rocketship.style.left = x - 50 + "px";

    var rocketship_position = parseInt(rocketship.style.left);

      if (rocketship_position >= right_border) {
        rocketship.style.left = right_border + "px";
      }

      if (rocketship_position <= left_border) {
        rocketship.style.left = left_border + "px";
      }

  }

  function checkDistance(distance) {
    if (distance === 25) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkHitBorder(location) {

  }

  function moveTo(enemy) {

      if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {
        var direction = Math.floor((Math.random() * 10) + 1);
        var distance = 0;
        var moving;

        switch(direction) {
          case 1:
            moving = setInterval(moveLeft, 15, enemy);
          break;
          case 2:
            moving = setInterval(moveRight, 15, enemy);
          break;
          case 3:
            moving = setInterval(moveDown, 15, enemy);
          break;
          case 4:
            moving = setInterval(moveUp, 15, enemy);
          break;
          case 5:
            moving = setInterval(moveUpLeft, 15, enemy);
          break;
          case 6:
            moving = setInterval(moveUpRight, 15, enemy);
          break;
          case 7:
            moving = setInterval(moveDownLeft, 15, enemy);
          break;
          case 8:
            moving = setInterval(moveDownRight, 15, enemy);
          break;
          default:
            moveTo(enemy);
          break;
        }

          function moveLeft(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.left = parseInt(enemy.style.left) - 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.left) <= left_border) {
                enemy.style.left = left_border + "px";
                clearInterval(moving);
                distance = 0;
                moveTo(enemy);
              }

            }
            else {
              clearInterval(moving);
            }

          }

          function moveRight(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.left = parseInt(enemy.style.left) + 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.left) >= right_border) {
                enemy.style.left = right_border + "px";
                clearInterval(moving);
                distance = 0;
                moveTo(enemy);
              }
            }


          }

          function moveDown(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) + 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) >= bottom_border) {
                enemy.style.top = bottom_border + "px";
                clearInterval(moving);
                distance = 0;
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }


          }

          function moveUp(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) - 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) <= top_border) {
                enemy.style.top = top_border + "px";
                clearInterval(moving);
                distance = 0;
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }

          }

          function moveUpLeft(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) - 5 + "px";
              enemy.style.left = parseInt(enemy.style.left) - 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) <= top_border || parseInt(enemy.style.left) <= left_border) {
                if (parseInt(enemy.style.top) <= top_border) {
                  enemy.style.top = top_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                if (parseInt(enemy.style.left) <= left_border) {
                  enemy.style.left = left_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }
          }

          function moveUpRight(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) - 5 + "px";
              enemy.style.left = parseInt(enemy.style.left) + 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) <= top_border || parseInt(enemy.style.left) >= right_border) {
                if (parseInt(enemy.style.top) <= top_border) {
                  enemy.style.top = top_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                if (parseInt(enemy.style.left) >= right_border) {
                  enemy.style.left = right_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }
          }

          function moveDownLeft(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) + 5 + "px";
              enemy.style.left = parseInt(enemy.style.left) - 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) >= bottom_border || parseInt(enemy.style.left) <= left_border) {
                if (parseInt(enemy.style.top) >= bottom_border) {
                  enemy.style.top = bottom_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                if (parseInt(enemy.style.left) <= left_border) {
                  enemy.style.left = left_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }
          }

          function moveDownRight(enemy) {

            if (!rocketship_attacked && document.body.contains(enemy) && end_game === false) {

              enemy.style.top = parseInt(enemy.style.top) + 5 + "px";
              enemy.style.left = parseInt(enemy.style.left) + 5 + "px";
              distance += 1;

              var rocketship_attack = checkForRocketshipAttack(enemy);

              if (rocketship_attack) {
                rocketshipAttack(enemy);
              }

              var max_distance = checkDistance(distance);

              if (max_distance) {
                  distance = 0;
                  clearInterval(moving);
                  moveTo(enemy);
              }

              if (parseInt(enemy.style.top) >= bottom_border || parseInt(enemy.style.left) >= right_border) {
                if (parseInt(enemy.style.top) >= bottom_border) {
                  enemy.style.top = bottom_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                if (parseInt(enemy.style.left) >= right_border) {
                  enemy.style.left = right_border + "px";
                  clearInterval(moving);
                  distance = 0;
                }
                moveTo(enemy);
              }
            }
            else {
              clearInterval(moving);
            }
          }

      }//end if statement

    }//end moveTo()

  //Spacebar is pressed on keyboard to fire missle
  function fireMissle() {
    event.preventDefault();
    if (event.keyCode == 32) {
      if (!rocketship_attacked) {
        //Shoot the missle if there isn't one already displayed:
        if (missle.style.visibility == "hidden") {
          missle_shot.play();
          missle.style.left = parseInt(rocketship.style.left) + 30 + 'px';
          missle.style.top = parseInt(rocketship.style.top) + 'px';
          missle.style.visibility = "visible";

          var missleShot = setInterval(missleShooting, 20);
        }
      }
    }

    function missleShooting() {
      if (rocketship_attacked === false) {

        missle.style.top = parseInt(missle.style.top) - 15 + 'px';

        var missle_top = parseInt(missle.style.top);
        var missle_bottom = parseInt(missle.style.top) + 80;
        var missle_strike_pointx = parseInt(missle.style.left) + 2;

        var total_enemies = document.getElementsByClassName("enemies");

        //check whether enemies exists:
        if (total_enemies.length > 0) {

          //loop through enemies and check for missle contact:
          for (var i = 0; i < total_enemies.length; i++) {

            var ufo_id = total_enemies[i].getAttribute('id');
            var ufo = document.getElementById(ufo_id);

            //bottom of ufo ship
            var enemy_bottom = parseInt(ufo.style.top) + 25;
            //top of ufo ship
            var enemy_top = parseInt(ufo.style.top);
            //right side of ufo ship
            var enemy_right = parseInt(ufo.style.left) + 100;
            //left side of ufo ship
            var enemy_left = parseInt(ufo.style.left) - 5;

            checkForMissleContact(ufo, missle_top, missle_bottom, missle_strike_pointx, enemy_bottom, enemy_top, enemy_left, enemy_right);
          }
        }

    } //if rocketship has been attacked, hide missle:
    else {
      missle.style.left = parseInt(rocketship.style.left) + 30 + 'px';
      missle.style.top = parseInt(rocketship.style.top) + 'px';
      missle.style.visibility = "hidden";
      clearInterval(missleShot);
    }

      //missle has left the top of the screen
      if (parseInt(missle.style.top) <= top_border - 70) {
        missle.style.left = parseInt(rocketship.style.left) + 30 + 'px';
        missle.style.top = parseInt(rocketship.style.top) + 'px';
        missle.style.visibility = "hidden";
        clearInterval(missleShot);
      }
    } //end missleShooting()

    function checkForMissleContact(enemy, missle_top, missle_bottom, missle_strike_pointx, enemy_bottom, enemy_top, enemy_left, enemy_right) {

      //missile hits enemy
      if ((missle_top <= enemy_bottom) && (missle_bottom >= enemy_top && missle_top >= enemy_top) && (missle_strike_pointx >= enemy_left && missle_strike_pointx <= enemy_right)) {
        missle_contact.play();
        clearInterval(missleShot);
        explosion.style.left = parseInt(enemy.style.left) - 30 + 'px';
        explosion.style.top = parseInt(enemy.style.top) - 30 + 'px';
        //show explosion
        explosion.style.visibility = "visible";
        //remove missle
        missle.style.visibility = "hidden";
        //remove enemy ship
        enemy.parentNode.removeChild(enemy);

        var explodeEnemy = setInterval(endExplosion, 50);

        var total_enemies = document.getElementsByClassName("enemies");

        //if no enemies are left, game over
        if (total_enemies.length === 0) {
          gameOver("You Win!");
        }

      } //end missle contact

      function endExplosion() {
        explosion.style.visibility = "hidden";
        clearInterval(explodeEnemy);
      }

    } //end checkForMissleContact() function

  }//end spacebar pressed to fire missle

  function checkForRocketshipAttack(enemy) {

    if (document.body.contains(rocketship)) {

      var enemy_bottom = parseInt(enemy.style.top) + 45;
      var enemy_top = parseInt(enemy.style.top);
      var enemy_right = parseInt(enemy.style.left) + 100;
      var enemy_left = parseInt(enemy.style.left) - 5;

      var rightside_contact = parseInt(rocketship.style.left) + 55;
      var leftside_contact = parseInt(rocketship.style.left);
      var top_contact = parseInt(rocketship.style.top) - 10;

      if ((enemy_bottom >= top_contact) && (enemy_left <= rightside_contact) && (enemy_right >= leftside_contact)) {
        rocketship_explosion.play();
        rocketship_attacked = true;
        explosion.style.left = parseInt(rocketship.style.left) - 30 + 'px';
        explosion.style.top = parseInt(rocketship.style.top) - 30 + 'px';
        //hide rocketship
        rocketship.style.visibility = "hidden";
        //show explosion
        explosion.style.visibility = "visible";

        return true;
      }
      else {
        return false;
      }
    }

  }

  function rocketshipAttack(enemy) {
    var status;
    if (explosion.style.visibility == "visible") {

      if (lives === 0) {
        gameOver("You Lose");
        status = "end";
      }
      else {
        reset();
        status = "continue"
      }
      var explodeRocketship = setInterval(endRocketshipExplosion, 1000, enemy, status);
    }

    function endRocketshipExplosion(enemy, status) {
      clearInterval(explodeRocketship);
      explosion.style.visibility = "hidden";
      closeDialogue = setInterval(closeDialogue, 3000, enemy, status);
    }

    function closeDialogue(enemy, status) {
      clearInterval(closeDialogue);
      if (status === "continue") {
        dialogue_lostship.style.display = "none";
        rocketship.style.visibility = "visible";
        rocketship_attacked = false;
        moveEnemies();
      }
      else {
        dialogue_gameover.style.display = "none";
        rocketship.style.visibility = "visible";
        rocketship_attacked = false;
      }


    }

  }

  function reset() {

      lives -= 1;
      ls_lives_amt.innerHTML = lives;
      dialogue_lostship.style.display = "block";

      rocketship.style.left = center + 'px';
      rocketship.style.top = bottom_border - 100 + 'px';

      resetEnemy('ufo', 0);
      resetEnemy('ufo2', -150);
      resetEnemy('ufo3', 150);
      resetEnemy('ufo4', -300);
      resetEnemy('ufo5', 300);
  }

  function resetEnemy(enemy, position) {
    if (document.querySelector('#' + enemy)) {
      var ufo = document.getElementById(enemy);
      ufo.style.left = center + position + 'px';
      ufo.style.top = top_border + 50 + 'px';
    }
  }

  function disableRocket() {
    document.onkeypress = function(event) {
      event.preventDefault();
      if (event.keyCode == 32) {
        return false;
      }

    }
    document.onmousemove = function(event) {
      return false;
    }
  }

  function gameOver(outcome) {
    if (outcome === "You Win!") {
      go_dialogue_heading.innerHTML = outcome;
      go_dialogue_body.innerHTML = "";
      total_wins += 1;
      wins.innerHTML = total_wins;
    }
    else {
      go_dialogue_heading.innerHTML = "Game Over";
      go_dialogue_body.innerHTML = "<h3>" + outcome + "</h3>";
      total_loses += 1;
      loses.innerHTML = total_loses;
    }
    end_game = true;
    dialogue_gameover.style.display = "block";
    var gameOver = setInterval(clearGameOver, 3000);

    function clearGameOver() {
      clearInterval(gameOver);
      dialogue_gameover.style.display = "none";
      lives = 2;

      restartGame('ufo', 0);
      restartGame('ufo2', -150);
      restartGame('ufo3', 150);
      restartGame('ufo4', -300);
      restartGame('ufo5', 300);

      disableRocket();
      targetEnemies();
      gameResults();
      b_lives_amt.innerHTML = lives;
      rocketship.style.left = center + 'px';
      rocketship.style.top = bottom_border - 100 + 'px';
      dialogue_begin.style.display = "block";
    }
  }

  function restartGame(enemy, position) {

    if (document.querySelector('#' + enemy)) {
      //reposition existing ship:
      resetEnemy(enemy, position);
    }
    else {
      //add a new ship
      setUpEnemies(enemy, position);
    }

  }



} //end init() function
