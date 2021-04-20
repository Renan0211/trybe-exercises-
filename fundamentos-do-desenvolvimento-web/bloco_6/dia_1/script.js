function checkDate (date) {
  const dateSplit = date.split('/');
  let dateArray = [];
  let ret = true;
  for( let i = 0; i < dateSplit.length; i += 1) {
    dateArray.push(parseInt(dateSplit[i]))
  }
  if(dateArray[0] < 0 || dateArray[0] > 31) {
     ret = false;
  }
  if (dateArray[1] < 0 || dateArray[1] > 12) {
    ret = false
  }
  if (dateArray[3] < 0) {
    ret = false;
  }
  return ret;
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault()
  date = document.getElementById('start-date').value;
  if(checkDate(date) === false) {
    alert('Data de inicio em formato inválido')
  }
  else {
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');
    const allInputs = document.getElementsByTagName('input');
    // allInputs.push(document.querySelector('textarea'));
    for(let i = 0; i < allInputs.length; i += 1) {
      newP.innerText += allInputs[i].value;
    }
    newDiv.innerText= newP.innerText;
    document.body.appendChild(newDiv);
    console.log(newDiv);
    console.log(newP)
  }
})