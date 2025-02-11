
function fizzbuzz(num){
    let fb;
  for(let i = 1;i <= num; i++){
    if(i % 3 == 0 && i % 5 == 0){
     fb = 'fizzbuzz'
    }else if(i % 3 == 0){
      fb = 'fizz'
    }else if(i % 5 == 0){
      fb = 'buzz'
    }else{
      fb = i
    }
    const li = document.createElement("li");
    const response = document.createTextNode(fb);
    li.appendChild(response);
    document.getElementById("list").appendChild(li);
  }
  return fb;
}
fizzbuzz(15);