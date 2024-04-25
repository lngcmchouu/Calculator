var checkE = false;
var checkO = false; // Biến để theo dõi xem đã nhập phép tính hay chưa

function add(char) {
  var display = document.getElementById('display');
  if(checkE){
    display.value = char; 
    checkE = false; 
  }
  else if (display.value.trim() === '' || '+-*/%'.indexOf(display.value.slice(-1)) !== -1 )
  {
    if ('0123456789'.indexOf(char) !== -1) 
    {
      display.value += char;
      checkO = false;
    }
  } 
  else if (!checkO) display.value += char;
}
function clearLast() {
  var display = document.getElementById('display');
  if(display.value == 'Error')
    display.value='';
  display.value = display.value.slice(0, -1);
}

function clearAll() {
  document.getElementById('display').value = '';
}
function calc() {
  try {
    var display = document.getElementById('display');
    display.value = eval(display.value);
  } 
  catch (error) {
    display.value = 'Error';
    checkE = true;
  }
 
}
function opposite() {
  var display = document.getElementById('display');
  if (display.value.trim() === '') 
    return; 
  display.value = parseFloat(display.value) * -1;
}
function per(){
  var display = document.getElementById('display');
  if (display.value.trim() === '')
    return; 
  display.value = parseFloat(display.value) / 100;
}
