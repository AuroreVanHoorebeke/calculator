function safeEval(str){
    return Function('return ' + str)()
  }
  
  const a = '(13 + 17) / 3'
  
  console.log(safeEval(a))