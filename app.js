let i = 1;

while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        document.write(i + "FizzBuzz <br>");
    }else{
        if(i % 3 == 0){
            document.write(i + " Fizz <br>");
        }
        else if(i % 5 == 0){
            document.write(i + " Buzz <br>")
        }
    }
    i++;
     
}