/* Ques # 26:
 Alien color # 2: choose a color for an alien as you did  in exercise 25, and write an if-else chain.

 . If the alien's color is green, print the statement that player just earned 5 points for shooting the alien.

 . If the alien's color isn't green, print a message that player just earned the 10 points.

 . Write one version of this program that runs if block and another that runs the else block.*/


 let alienColor: string = "green"
 alienColor = "red"
 if( alienColor === "green"){
    console.log("player just earned 5 points!")
 }
 else{
    console.log("players just  earned 10 points")
 }