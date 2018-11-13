var forms= document.querySelector('.formValidate')
var first = forms.querySelector('.first');
var submit = forms.querySelector('.submit');
var last = forms.querySelector('.last');
var birthday = forms.querySelector('.birthday');
var radio1 = forms.querySelector('.radio1');
var radio2 = forms.querySelector('.radio2');
var errorRadio = forms.querySelector('.error-radio');
var country = forms.querySelector('.country');
var email = forms.querySelector('.email');
var fields = forms.querySelectorAll('.field');
var password = forms.querySelector('.password');
var passwordConfirmation = forms.querySelector('.passwordConfirmation');
var data = forms.querySelector('.birthday');
//регулярное выражение для проверки email
var regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var regexData = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


//генерация ошибки
var generateError = function (text){
  var error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

// очиcтка ошибок
var clearError = function (){
  var errors = forms.querySelectorAll('.error');
 for (var i=0; i<errors.length; i++){
   errors[i].remove();
 }
}

// проверка всех полей
var  checkFieldsPresence = function(){
for(var i=0; i<fields.length; i++){
  if (!fields[i].value){
    console.log(fields.value);
    var error = generateError('empty field');
    forms[i].parentElement.insertBefore(error, fields[i]);
  }
}
}


//проверка radio

var checkRadio = function (){

if(!radio1.checked && !radio2.checked) {

var error = generateError('empty')
errorRadio.parentElement.insertBefore(error, errorRadio)
}
}

// проверка select
var checkSelect = function(){
  if (country.value == 1){
 var error = generateError('select your contry')
country.parentElement.insertBefore(error, country)
  }
}

//проверка пароля на совпадение
var checkPassword = function (){
  if (password.value !== passwordConfirmation.value) {
    var error = generateError('Password doesnt match')
    password.parentElement.insertBefore(error, password)
  }
}

//проверка на корректность email
var checkEmail = function (){
if(regexEmail.test(email.value) == false){
  var error = generateError('enter correct email')
  email.parentElement.insertBefore(error, email)
 
  }
}

//проверка даты на корректность
var checkData = function(){
  if(regexData.test(data.value) == false){
 var error = generateError('enter correct data')
  data.parentElement.insertBefore(error, data)
  }
}


forms.addEventListener('submit', function (event) {
  event.preventDefault()
clearError();
checkRadio();
checkSelect();
checkFieldsPresence ();
checkPassword();
checkEmail();
checkData();

})

