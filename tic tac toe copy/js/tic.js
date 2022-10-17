
document.querySelector('#submit').addEventListener('click', players)
///
document.querySelector('#top1').addEventListener('click', playgame)
document.querySelector('#top2').addEventListener('click', playgame)
document.querySelector('#top3').addEventListener('click', playgame)
document.querySelector('#middle1').addEventListener('click', playgame)
document.querySelector('#middle2').addEventListener('click', playgame)
document.querySelector('#middle3').addEventListener('click', playgame)
document.querySelector('#bottom1').addEventListener('click', playgame)
document.querySelector('#bottom2').addEventListener('click', playgame)
document.querySelector('#bottom3').addEventListener('click', playgame)
document.querySelector('#reset').addEventListener('click', reset)
// document.querySelector('#box').addEventListener('click', playerCounter)
function playgame(event ){
    if(playerOne == '' || playerTwo == ''){
        alert('Please submit player names!')
        return
        //return function runs this IF statement to check if player names are empty and if they are it will RETURN to this same function until the IF condition ISNT met
    }
    playerCounter()
    console.log(event)
    // the event object console logs the event taken place on MOUSECLICK when the function playerCounter is ran
    let boxID = event.target.id
    // defines boxID as a variable in this scope of this function
    console.log(boxID)
    let playerTurnValue = ''
    // defines the player turn value to store in the gameBoard array as moves are made
    // let color1 = document.querySelector('.box').style.backgroundColor = 'green'
    // let color2 = document.querySelector('.box').style.backgroundColor = 'red'
    let boxColor = ''
    //defines boxColor to be used later on in the function to reduce redundancy
    if(playerTurn === 0){
        playerTurnValue = 'x'
        boxColor = 'green'
   
    }
    else{
        playerTurnValue = 'o'
        boxColor = 'red'
    }
    //// 33-41 set a conditional based on the playerTurn counter value, and setting the color and assinging the correct player value tp the array
    if(boxID == 'top1'){
        gameBoard[0] = playerTurnValue
        document.getElementById('top1').style.backgroundColor = boxColor
    }
    else if(boxID == 'top2'){
        gameBoard[1] = playerTurnValue
        document.getElementById('top2').style.backgroundColor = boxColor
    }
    else if(boxID == 'top3'){
        gameBoard[2] = playerTurnValue
        document.getElementById('top3').style.backgroundColor = boxColor
    }
    else if(boxID == 'middle1'){
        gameBoard[3] = playerTurnValue
        document.getElementById('middle1').style.backgroundColor = boxColor
    }
    else if(boxID == 'middle2'){
        gameBoard[4] = playerTurnValue
        document.getElementById('middle2').style.backgroundColor = boxColor
    }
    else if(boxID == 'middle3'){
        gameBoard[5] = playerTurnValue
        document.getElementById('middle3').style.backgroundColor = boxColor
    }
    else if(boxID == 'bottom1'){
        gameBoard[6] = playerTurnValue
        document.getElementById('bottom1').style.backgroundColor = boxColor
    }
    else if(boxID == 'bottom2'){
        gameBoard[7] = playerTurnValue
        document.getElementById('bottom2').style.backgroundColor = boxColor
    }
    else if(boxID == 'bottom3'){
        gameBoard[8] = playerTurnValue
        document.getElementById('bottom3').style.backgroundColor = boxColor
    }
    //// 43-78 function in which the box being clicked is being assigned the appropriate color based whos turn it is as based on the values taken from the previous conditional statemetns
    checkWinner()
    let htmlID = '#' + boxID
    console.log(htmlID)
    /// checks for a winner everytime a box is clicked
    
}


function checkWinner(){
    console.log(gameBoard)
if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== ''){
    console.log(gameBoard, 'row1')
    document.getElementById('box').style.pointerEvents = 'none'
   if(gameBoard[0] === 'x'){
          
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }

}
if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, '2')
    if(gameBoard[3] === 'x'){
            
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }
    
}
if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, '3')
    if(gameBoard[6] === 'x'){
             
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }
    
}
if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, 'column1')
   if(gameBoard[0] === 'x'){
       
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }

}
if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, '4')
    if(gameBoard[1] === 'x'){
           
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }
       
}
if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, '5')
    if(gameBoard[2] === 'x'){
           
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }
       
}
if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, 'diaganol')
    if(gameBoard[0] === 'x'){
        alert(playerOne + ' Has Won!')
       }
       else{
        alert(playerTwo + ' Has Won!')
       }
       
}
if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
    document.getElementById('box').style.pointerEvents = 'none'
    console.log(gameBoard, '6')
    if(gameBoard[2] === 'x'){
        
        alert(playerOne + ' Has Won!')
        
       }
       else{
        alert(playerTwo + ' Has Won!')
        
       }
      
}
}
/// 88-199 conditional statements/function that is ran on every box click during gameplay, checking for a winning combination and notifying the appropriate player, while also disabling click on the box

/// event listeners for all boxes that run the same function
let currentPlayer = "x"
let gameBoard = ['','','',
'','','',
'','','',]
let input = document.querySelector('#input')
let counter = 0
let playerTurn = 0
let alreadyClicked = 0
let playerOne = ''
let playerTwo = ''
///globally defined variables and array








function players(){
   
    console.log(counter)
    
    if(counter == 0){
        let inputPlayer = document.querySelector('#playersInput').value
        console.log('hi')
        console.log(inputPlayer)
        playerOne = inputPlayer
        document.querySelector('#player1').innerText = 'Player 1: ' + playerOne
        counter = counter + 1
    }
    else if (counter == 1){
        let inputPlayer = document.querySelector('#playersInput').value
        console.log('hi')
        console.log(inputPlayer)
        playerTwo = inputPlayer
        document.querySelector('#player2').innerText = 'Player 2: ' + playerTwo
        counter = counter + 1
    }
    else {
        alert('You have two players already!')
    }
   
}
/// 222-246 function that is checking for players, and making sure only two players are allowed

function playerCounter(){

    if(playerTurn == 0){
       playerTurn = playerTurn + 1
       console.log(playerTurn)
    }
    else{
       playerTurn = playerTurn - 1
       console.log(playerTurn)
    }
}
/// 249-259 function keeping track of whos turn it is via a counter, counter == 0 being player and counter == 1 being player two

function reset(){
    let boxNumbers = document.getElementsByClassName('box')
    /// boxNumbers is tied to any element with the class 'box' meaning all the boxes are defined via this variable, acts as an array, holding all the boxes as well
    gameBoard = ['','','',
    '','','',
    '','','',]
    /// resetting game board array values
    console.log(boxNumbers)
    document.getElementById('box').style.pointerEvents = 'click'
    /// allowing the the boxes to clickable again
    for(let i=0; i < boxNumbers.length; i++){
        console.log(boxNumbers[i])
    boxNumbers[i].style.backgroundColor = 'white'
    }
    /// loop that runs through all the box numbers and resets the color to white.
}
//// 262-273 function for resetting the game


// function playGame1(){
//     console.log(playerTurn)


//     if (playerTurn == 0){
//         document.getElementById('top1').style.backgroundColor = 'green'
//         console.log('green')
//        document.querySelector('#top1').removeEventListener('click', playGame1)

//     }
//     else if (playerTurn == 1){
//         document.getElementById('top1').style.backgroundColor = 'red'
//         document.querySelector('#top1').removeEventListener('click', playGame1)

//     }
    
// }
// function playGame2(){
//     console.log(playerTurn)
//     if(alreadyClicked == 0){
//         alreadyClicked = alreadyClicked + 1
//         console.log(alreadyClicked)
//     if (playerTurn == 0){
//         document.getElementById('top2').style.backgroundColor = 'green'
//         console.log('green')

//     }
//     else if (playerTurn == 1){
//         document.getElementById('top2').style.backgroundColor = 'red'

//     }
//     else if(document.getElementById('top2').style.backgroundColor != 'white'){
//         alert('this square is already clicked')
//     }
// }
// }
// function playGame3(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('top3').style.backgroundColor = 'green'
//         console.log('green')

//     }
//     else if (playerTurn == 1){
//         document.getElementById('top3').style.backgroundColor = 'red'

//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame4(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('middle1').style.backgroundColor = 'green'
//         console.log('green')

//     }
//     else if (playerTurn == 1){
//         document.getElementById('middle1').style.backgroundColor = 'red'

//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame5(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('middle2').style.backgroundColor = 'green'
//         console.log('green')

//         console.log(playerTurn)
//     }
//     else if (playerTurn == 1){
//         document.getElementById('middle2').style.backgroundColor = 'red'
  
//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame6(){
//     console.log(playerTurn)
 
//     if (playerTurn == 0){
//         document.getElementById('middle3').style.backgroundColor = 'green'
//         console.log('green')
 
//         console.log(playerTurn)
//     }
//     else if (playerTurn == 1){
//         document.getElementById('middle3').style.backgroundColor = 'red'

//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame7(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('bottom1').style.backgroundColor = 'green'
//         console.log('green')

//         console.log(playerTurn)
//     }
//     else if (playerTurn == 1){
//         document.getElementById('bottom1').style.backgroundColor = 'red'
       
//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame8(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('bottom2').style.backgroundColor = 'green'
//         console.log('green')
  
//         console.log(playerTurn)
//     }
//     else if (playerTurn == 1){
//         document.getElementById('bottom2').style.backgroundColor = 'red'

//     }

// else{
//     alert('this square is already clicked')
// }
// }
// function playGame9(){
//     console.log(playerTurn)

//     if (playerTurn == 0){
//         document.getElementById('bottom3').style.backgroundColor = 'green'
//         console.log('green')

//         console.log(playerTurn)
//     }
//     else if (playerTurn == 1){
//         document.getElementById('bottom3').style.backgroundColor = 'red'

//     }

// else{
//     alert('this square is already clicked')
// }
// }




// console.log()



// //create text - and fields for inputs
// let total = 0
// document.querySelector('#add').addEventListener('click', add)
// document.querySelector('#subtract').addEventListener('click', subtract)
// document.querySelector('#divide').addEventListener('click', divide)
// document.querySelector('#multiply').addEventListener('click', multiply)

// function add() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) + Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function subtract() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) - Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function divide() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) / Number(inputTwo)

//     document.querySelector('#result').innerText = total
// }
// function multiply() {
//     let inputOne = document.querySelector('#inputOne').value
//     let inputTwo = document.querySelector('#inputTwo').value

//     total = Number(inputOne) * Number(inputTwo)

//     document.querySelector('#result').innerText = total