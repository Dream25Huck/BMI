
function calculate(){
  const heightPerson = document.getElementById("height");
  const weightPerson = document.getElementById("weight");
  const Bmi = weightPerson.value/(heightPerson.value*heightPerson.value/10000);
  const result = document.getElementById("result");
  const health = document.getElementById("health");
  if(Bmi>18.5 && Bmi<24.9){
      result.innerHTML = `${Math.round(Bmi)}`;
      health.innerHTML = 'You are Healthy';
  }  else if(Bmi<18.5){
    result.innerHTML = `${Math.round(Bmi)}`;
    health.innerHTML = 'You are lessWeight';
  }else if(Bmi>24.9){
    result.innerHTML = `${Math.round(Bmi)}`;
    health.innerHTML = 'You are overWeight';
  }
}
