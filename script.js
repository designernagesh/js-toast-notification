let container = document.querySelector(".container");
let btn_notify = document.querySelector(".btn_notify");

btn_notify.addEventListener("click", () => {    

    let notify_box = document.createElement('div');

    notify_box.setAttribute('class', 'alert alert-danger');

    notify_box.innerHTML = 'It\'s getting exited to write more and more Javascript code! Am proud to be called as a Javascript Developer.';    

    container.appendChild(notify_box);
  
    setTimeout(()=>notify_box.remove(), 3000)
})
