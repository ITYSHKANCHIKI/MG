<template>
  <div id="app"></div>
</template>

<script>

document.addEventListener("DOMContentLoaded", () => {
    showScreen("screen1");
    setTimeout(() => showScreen("screen2"), 2000);
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        showScreen("screen3");
    });
    window.addNavHandlers(); // Вызов из глобального контекста
});


// Экспорт функций в глобальную область видимости 
window.openScreen3 = function () {
    showScreen("screen3");
};
window.openScreen4 = function () {
    showScreen("screen4");
};
window.openScreen5 = function () {
    showScreen("screen5");
};
window.openScreen6 = function () {
    showScreen("screen6");
};
window.openScreen7 = function () {
    showScreen("screen7");
};
window.openScreen8 = function () {
    showScreen("screen8");
};

window.toggleDropdownMenu = function () {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

window.editEvent = function () {
    alert("Редактирование мероприятия");
    // Реализуйте логику редактирования мероприятия
};

window.deleteEvent = function () {
    if (confirm("Вы уверены, что хотите удалить мероприятие?")) {
        alert("Мероприятие удалено");
        // Реализуйте логику удаления мероприятия
    }
};

window.addNavHandlers = function () {
    document.querySelectorAll("nav button").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            switch (index) {
                case 0:
                    showScreen("screen3");
                    break;
                case 1:
                    showScreen("screen4");
                    break;
                case 2:
                    showScreen("screen6");
                    break;
                case 3:
                    showScreen("screen5");
                    break;
            }
        });
    });
};

function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen) => {
        if (screen.id === screenId) {
            screen.classList.add("visible");
            screen.classList.remove("hidden");
        } else {
            screen.classList.add("hidden");
            screen.classList.remove("visible");
        }
    });
}

window.toggleEvents = function (type) {
    const plannedPanel = document.querySelector(".content-panel.planned");
    const pastPanel = document.querySelector(".content-panel.past");
    const slider = document.querySelector(".slider");
    const plannedBtn = document.querySelector(".toggle-button.planned-btn");
    const pastBtn = document.querySelector(".toggle-button.past-btn");

    if (type === "planned") {
        plannedPanel.classList.add("active");
        pastPanel.classList.remove("active");
        slider.style.left = "0";
        plannedBtn.classList.add("active");
        pastBtn.classList.remove("active");
    } else {
        plannedPanel.classList.remove("active");
        pastPanel.classList.add("active");
        slider.style.left = "50%";
        plannedBtn.classList.remove("active");
        pastBtn.classList.add("active");
    }
};


function Calendar2(id, year, month) {
//window.Calendar2 = function(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = '<tr>',
      months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  // Начало календаря с пустых ячеек
  if (DNfirst != 0) {
      for (var k = 1; k < DNfirst; k++) calendar += '<td>';
  } else {
      for (var j = 0; j < 6; j++) calendar += '<td>';
  }

  // Текущая дата, завтра и через два дня
  var today = new Date();
  var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  var dayAfterTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);

  // Заполнение дней месяца
  for (var i = 1; i <= Dlast; i++) {
      var currentDate = new Date(D.getFullYear(), D.getMonth(), i);

      if (i == today.getDate() && D.getFullYear() == today.getFullYear() && D.getMonth() == today.getMonth()) {
          calendar += '<td class="today">' + i;
      } else if (i == tomorrow.getDate() && D.getFullYear() == tomorrow.getFullYear() && D.getMonth() == tomorrow.getMonth()) {
          calendar += '<td class="event1">' + i;
      } else if (i == dayAfterTomorrow.getDate() && D.getFullYear() == dayAfterTomorrow.getFullYear() && D.getMonth() == dayAfterTomorrow.getMonth()) {
          calendar += '<td class="event1">' + i;
      } else {
          calendar += '<td>' + i;
      }

      if (currentDate.getDay() == 0) {
          calendar += '<tr>';
      }
  }

  // Добавление пустых ячеек в конце
  for (var l = DNlast; l < 7; l++) calendar += '<td>&nbsp;';

  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = months[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();

  // Убедиться, что всегда 6 строк
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
      document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}

// Инициализация календаря
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

// Переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
};

// Переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
};

// -------------------------------- Бэкенд: гпт написал

/*

import axios from 'axios';

const registerUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/register', { email, password });
    console.log(response.data.token);
    // Сохранить токен в localStorage или vuex
  } catch (error) {
    console.error(error);
  }
};

const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/profile', {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log(response.data);
};

*/

</script>

<style scoped>

</style>

<style scoped>
/* Убедитесь, что у карты есть размеры */
#yandex-map {
  width: 100%;
  height: 400px;
}
</style>