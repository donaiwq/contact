const form = document.querySelector('form')
const listBox = document.querySelector('.listBox')
const btn = document.querySelector('button')
const nameUser = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const image = document.querySelector('#image')





function setItemToStorage(contact) {
  let data = JSON.parse(localStorage.getItem('contact-data')) || [];
  data.push(contact);
  localStorage.setItem('contact-data', JSON.stringify(data));
  listBox.innerHTML = "";

}
btn.addEventListener('click', (e) => {
  e.preventDefault()
  // if (!nameUser.value.trim() || !email.value.trim()) {
  //   alert('Please enter')
  //   return;
  // }

  let obj = {
    contact: nameUser.value,
    email: email.value,
    phone: phone.value,
    image: image.value
  }
  setItemToStorage(obj)
  render()
})



function render() {
  if (!localStorage.getItem('contact-data')) {
    localStorage.setItem('contact', '[]')
  }
  let data = JSON.parse(localStorage.getItem('contact-data'))
  listBox.innerHTML = ' '
  data.forEach((item, index) => {
    // let ulDiv = document.querySelector('.list')
    // ulDiv.append(listBox)
    listBox.innerHTML += `
<li><a>${item.contact} </a> <a> ${item.email}</a> <a>${item.phone}</a>  <img class='img' src=${item.image} > <div class='btnboxjs'><button onclick='editContact(${index})'>Edit</button> <button  onclick='deleteContact(${index})' id='btnDel' class='btn'>X</button>
</div>
 
</li>
 
  `
  })
}
function deleteContact(index) {
  let data = JSON.parse(localStorage.getItem('contact-data'))
  data.splice(index, 1)

  localStorage.setItem('contact-data', JSON.stringify(data))
  render()
}

let modal = document.querySelector(".modal");
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let inp3 = document.querySelector('.inp3')
let inp4 = document.querySelector('.inp4')
let btnSave = document.querySelector(".savebtn");
let btnDel = document.querySelector("#btnDel");

function editContact(index) {
  modal.style.display = 'block';
  let data = JSON.parse(localStorage.getItem('contact-data'))
  inp1.value = data[index].contact
  inp1.setAttribute('id', index)
  inp2.value = data[index].email
  inp2.setAttribute('id', index)
  inp3.value = data[index].phone
  inp3.setAttribute('id', index)
  inp4.value = data[index].image
  inp4.setAttribute('id', index)

}

btnDel.addEventListener('click', () => {
  modal.style.display = 'none';
})

btnSave.addEventListener('click', () => {
  let data = JSON.parse(localStorage.getItem('contact-data'))
  let id = inp1.id




  let newList = {
    contact: inp1.value,
    email: inp2.value,
    phone: inp3.value,
    image: inp4.value
  }
  data.splice(id, 1, newList)

  localStorage.setItem('contact-data', JSON.stringify(data))
  modal.style.display = 'none'
  render()
})


