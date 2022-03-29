var WrongAns1= true
var WrongAns2= true
var WrongAns3= true
var RightAns= true

function setup(){
  
  createCanvas(1250,550)
  background("cyan")
  
  push()
  textSize(115)
  fill("black")
  textStyle(BOLD)
  text("Test Your Knowledge", 50, 175)
  pop()
  
  fill("black")
  textSize(25)
  text("Enter Your Name: ", 400, 300)

  login = createInput("");
  login.style('color', 'black')
  login.position(615, 282, 20, 20)

  button = createButton("SUBMIT")
  button.style('background-color', 'orange')
  button.style('font-size', '26px')
  button.style('color', 'white')
  button.position(550, 350, 40, 40)
  
  button.mousePressed(()=>{
  name1 = login.value();
  if(name1 == ""){
    text("Name can't be blank",550,416)
    return false;
  } else{
      button.mouseClicked(logic)
  }
  })
  

}



function logic(){
  background("cyan")
  login.hide()
  button.hide()
  user = login.value()
  greeting = createElement("h1")
  greeting.html("Hello " + user + "!")
  greeting.position(575, 250)

  push()
  textSize(115)
  fill("black")
  textStyle(BOLD)
  text("Test Your Knowledge", 50, 175)
  pop()

  button1 = createButton("TEST YOU KNOWLEDGE")
  button1.style('background-color', 'orange')
  button1.style('font-size', '26px')
  button1.style('color', 'white')
  button1.position(500, 350, 40, 40)

 button1.mouseClicked(Question1)
}

function Question1(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1 = createElement("h1")
  Q1.html("Q1. Who is the President of U.S.A?")
  Q1.style("color", "black")
  Q1.style("background-color", "cyan")
  Q1.position(50, 175)

  Q1A = createButton("A: Donald Trump")
  Q1A.style("color", "black")
  Q1A.style("background-color", "white")
  Q1A.position(50,250)
  Q1A.style("font-size", "24px")
  Q1A.mousePressed(Q1Option1Ans)

  Q1B = createButton("B: Kamala Harris")
  Q1B.style("color", "black")
  Q1B.style("background-color", "white")
  Q1B.position(50,300)
  Q1B.style("font-size", "24px")
  Q1B.mousePressed(Q1Option2Ans)

  Q1C = createButton("C: Mike Pence")
  Q1C.style("color", "black")
  Q1C.style("background-color", "white")
  Q1C.position(50,350)
  Q1C.style("font-size", "24px")
  Q1C.mousePressed(Q1Option3Ans)

  Q1D = createButton("D: Joe Biden")
  Q1D.style("color", "black")
  Q1D.style("background-color", "white")
  Q1D.position(50,400)
  Q1D.style("font-size", "24px")
  Q1D.mousePressed(Q1Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question2)

}
 function Q1Option1Ans(){
   Q1A.style("background-color", "red")
   Q1D.style("background-color", "green")

   Q1A.attribute('disabled', '')
   Q1B.attribute('disabled', '')
   Q1C.attribute('disabled', '')
   Q1D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q1Option2Ans(){
  Q1B.style("background-color", "red")
  Q1D.style("background-color", "green")

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q1Option3Ans(){
  Q1C.style("background-color", "red")
  Q1D.style("background-color", "green")

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q1Option4Ans(){
  Q1D.style("background-color", "green")

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
}













function Question2(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()
  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q2 = createElement("h1")
  Q2.html("Q2. Who designs a construction plan?")
  Q2.style("color", "black")
  Q2.style("background-color", "cyan")
  Q2.position(50, 175)

  Q2A = createButton("A: Donald Trump")
  Q2A.style("color", "black")
  Q2A.style("background-color", "white")
  Q2A.position(50,250)
  Q2A.style("font-size", "24px")
  Q2A.mousePressed(Q2Option1Ans)

  Q2B = createButton("B: Kamala Harris")
  Q2B.style("color", "black")
  Q2B.style("background-color", "white")
  Q2B.position(50,300)
  Q2B.style("font-size", "24px")
  Q2B.mousePressed(Q2Option2Ans)

  Q2C = createButton("C: Mike Pence")
  Q2C.style("color", "black")
  Q2C.style("background-color", "white")
  Q2C.position(50,350)
  Q2C.style("font-size", "24px")
  Q2C.mousePressed(Q2Option3Ans)

  Q2D = createButton("D: Joe Biden")
  Q2D.style("color", "black")
  Q2D.style("background-color", "white")
  Q2D.position(50,400)
  Q2D.style("font-size", "24px")
  Q2D.mousePressed(Q2Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question3)

}
 




function Q2Option1Ans(){
   Q2A.style("background-color", "red")
   Q2D.style("background-color", "green")

   Q2A.attribute('disabled', '')
   Q2B.attribute('disabled', '')
   Q2C.attribute('disabled', '')
   Q2D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q2Option2Ans(){
  Q2B.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q2Option3Ans(){
  Q2C.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q2Option4Ans(){
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns4 = createElement("h1")
  WrongAns4.html("Right Answer")
  WrongAns4.style("color", "green")
  WrongAns4.style("background-color", "cyan")
  WrongAns4.position(50, 450)
  
}
















function Question3(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  Q2.hide()
  Q2A.hide()
  Q2B.hide()
  Q2C.hide()
  Q2D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q3 = createElement("h1")
  Q3.html("Q3. Which job is about making food?")
  Q3.style("color", "black")
  Q3.style("background-color", "cyan")
  Q3.position(50, 175)

  Q3A = createButton("A: Donald Trump")
  Q3A.style("color", "black")
  Q3A.style("background-color", "white")
  Q3A.position(50,250)
  Q3A.style("font-size", "24px")
  Q3A.mousePressed(Q2Option1Ans)

  Q3B = createButton("B: Kamala Harris")
  Q3B.style("color", "black")
  Q3B.style("background-color", "white")
  Q3B.position(50,300)
  Q3B.style("font-size", "24px")
  Q3B.mousePressed(Q2Option2Ans)

  Q3C = createButton("C: Mike Pence")
  Q3C.style("color", "black")
  Q3C.style("background-color", "white")
  Q3C.position(50,350)
  Q3C.style("font-size", "24px")
  Q3C.mousePressed(Q2Option3Ans)

  Q3D = createButton("D: Joe Biden")
  Q3D.style("color", "black")
  Q3D.style("background-color", "white")
  Q3D.position(50,400)
  Q3D.style("font-size", "24px")
  Q3D.mousePressed(Q2Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question4)

}
 




function Q3Option1Ans(){
   Q3A.style("background-color", "red")
   Q3D.style("background-color", "green")

   Q3A.attribute('disabled', '')
   Q3B.attribute('disabled', '')
   Q3C.attribute('disabled', '')
   Q3D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q3Option2Ans(){
  Q3B.style("background-color", "red")
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q3Option3Ans(){
  Q3C.style("background-color", "red")
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q2Option4Ans(){
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  WrongAns4 = createElement("h1")
  WrongAns4.html("Right Answer")
  WrongAns4.style("color", "green")
  WrongAns4.style("background-color", "cyan")
  WrongAns4.position(50, 450)
  
}








function Question4(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  Q2.hide()
  Q2A.hide()
  Q2B.hide()
  Q2C.hide()
  Q2D.hide()

  Q3.hide()
  Q3A.hide()
  Q3B.hide()
  Q3C.hide()
  Q3D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q4 = createElement("h1")
  Q4.html("Q3. Which job is about making food?")
  Q4.style("color", "black")
  Q4.style("background-color", "cyan")
  Q4.position(50, 175)

  Q4A = createButton("A: Donald Trump")
  Q4A.style("color", "black")
  Q4A.style("background-color", "white")
  Q4A.position(50,250)
  Q4A.style("font-size", "24px")
  Q4A.mousePressed(Q2Option1Ans)

  Q4B = createButton("B: Kamala Harris")
  Q4B.style("color", "black")
  Q4B.style("background-color", "white")
  Q4B.position(50,300)
  Q4B.style("font-size", "24px")
  Q4B.mousePressed(Q2Option2Ans)

  Q4C = createButton("C: Mike Pence")
  Q4C.style("color", "black")
  Q4C.style("background-color", "white")
  Q4C.position(50,350)
  Q4C.style("font-size", "24px")
  Q4C.mousePressed(Q2Option3Ans)

  Q4D = createButton("D: Joe Biden")
  Q4D.style("color", "black")
  Q4D.style("background-color", "white")
  Q4D.position(50,400)
  Q4D.style("font-size", "24px")
  Q4D.mousePressed(Q2Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question4)

}
 




function Q2Option1Ans(){
   Q2A.style("background-color", "red")
   Q2D.style("background-color", "green")

   Q2A.attribute('disabled', '')
   Q2B.attribute('disabled', '')
   Q2C.attribute('disabled', '')
   Q2D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q2Option2Ans(){
  Q2B.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q2Option3Ans(){
  Q2C.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q2Option4Ans(){
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns4 = createElement("h1")
  WrongAns4.html("Right Answer")
  WrongAns4.style("color", "green")
  WrongAns4.style("background-color", "cyan")
  WrongAns4.position(50, 450)
  
}