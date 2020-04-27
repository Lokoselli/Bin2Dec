function binDec(){
  event.preventDefault()
  var binary = document.forms[0].elements[0].value
  var lenBin = binary.length - 1
  binMult = 2 ** lenBin
  var final = 0;
  
  for(i in binary){
    final += binary[i] * binMult
    binMult /=2 
  
  }
  document.forms[1].elements[0].value = final
}

function decBin(){
  event.preventDefault()
  var decimal = document.forms[1].elements[0].value
  var original = decimal
  var binaryHouses = {}
  var power2 = 0
  while(decimal > 1){
    decimal /=2
    binaryHouses[power2] = "0"
    power2++
  }
  
  var final = ""
  count = Object.keys(binaryHouses).length-1
  while(count >= 0){

    while(original-(2 ** count) >= 0){


      binaryHouses[count] = "1"
      original -= 2 ** count

    }
    count--
  }
  count = Object.keys(binaryHouses).length
  while(Object.keys(binaryHouses).length > final.length){
    final += binaryHouses[count-1]
    count--
  }
  document.forms[0].elements[0].value = final
}

function clear(){
  event.preventDefault()
  alert(this.forms.elements[0].value)
}

