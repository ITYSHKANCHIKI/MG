<template>
    <div></div>
</template>

<script>

document.addEventListener("DOMContentLoaded", () => {
    showScreen("screen1");
    setTimeout(() => showScreen("screen2"), 500); // поменять на screen2 (страницу авторизации) // 500 поменять на 2000
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        showScreen("screen3");  // поменять на screen3 (главный экран)
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
window.openScreen9_1 = function () {
    showScreen("screen9_1");
};
window.openScreen9_2 = function () {
    showScreen("screen9_2");
};
window.openScreen9_3 = function () {
    showScreen("screen9_3");
};
window.openScreen10 = function () {
    showScreen("screen10");
};
window.openScreen11 = function () {
    showScreen("screen11");
};
window.openScreen12 = function () {
    showScreen("screen12");
};

window.toggleDropdownMenu = function () {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
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

window.toggleEvents = function (type, container) {
    const plannedPanel = container.querySelector(".content-panel.planned");
    const pastPanel = container.querySelector(".content-panel.past");
    const slider = container.querySelector(".slider");
    const plannedBtn = container.querySelector(".toggle-button.planned-btn");
    const pastBtn = container.querySelector(".toggle-button.past-btn");

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


// Отправка сообщения
/* eslint-enable no-unused-vars */
window.sendMessage = function () {
    // Определяем, какой экран активен
    const activeScreen = document.querySelector('.screen:not(.hidden)');
    if (!activeScreen) return;

    // Находим поле ввода сообщения
    const messageInput = activeScreen.querySelector('.chat-input input');
    const messageText = messageInput.value.trim();

    if (messageText === '') return; // Если поле ввода пустое, ничего не делаем

    // Создаем новый элемент для сообщения
    const newMessage = document.createElement('div');
    newMessage.className = 'message message-outgoing';
    newMessage.textContent = messageText;

    // Добавляем сообщение в список сообщений
    const messagesContainer = activeScreen.querySelector('.chat-messages');
    //messagesContainer.appendChild(newMessage);

    setTimeout(() => {
        messagesContainer.appendChild(newMessage);
    }, 170);

    // Прокручиваем контейнер к последнему сообщению
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Очищаем поле ввода
    messageInput.value = '';
  }
/* eslint-disable no-unused-vars */

const friends = [
    "Иван Иванов",
    "Мария Смирнова",
    "Петр Петров",
    "Александра Васильева",
    "Елена Кузнецова",
    "Дмитрий Сидоров",
    "Анна",
    "Олег Орлов"
];

const searchButton = document.getElementById('searchButton');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Показываем или скрываем строку поиска при нажатии на кнопку
searchButton.addEventListener('click', () => {
    if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
        searchInput.value = ''; // Очищаем поле ввода
        resultsList.innerHTML = ''; // Очищаем результаты
    } else {
        searchContainer.style.display = 'block';
        searchInput.focus(); // Перемещаем фокус на поле ввода
    }
});

// Фильтрация и отображение результатов поиска
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredFriends = friends.filter(friend => friend.toLowerCase().includes(query));

    // Очищаем и скрываем список, если нет совпадений
    resultsList.innerHTML = '';
    if (filteredFriends.length > 0) {
        resultsList.style.display = 'block'; // Показываем список результатов
        filteredFriends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = friend;

            // Добавляем обработчик клика для "Анна Павлова"
            listItem.addEventListener('click', () => {
                if (friend === "Анна") {
                    showScreen("screen10"); // Вызов showScreen
                }
                searchInput.value = friend; // Заполняем строку поиска выбранным именем
                resultsList.innerHTML = ''; // Очищаем список результатов
                resultsList.style.display = 'none'; // Скрываем список
            });

            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.style.display = 'none'; // Скрыть список, если нет совпадений
    }
});



// Добавление мероприятия
let events = [];

function createEvent(e) {
    e.preventDefault(); // Отключаем стандартное поведение формы

    const title = document.querySelector('[v-model="newEvent.title"]').value;
    const place = document.querySelector('[v-model="newEvent.place"]').value;
    const datetime = document.querySelector('[v-model="newEvent.datetime"]').value;
    const description = document.querySelector('[v-model="newEvent.description"]').value;

    const fileInput = document.querySelector('input[type="file"]');
    const imageFile = fileInput.files[0];
    let imageSrc = "";

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
            imageSrc = reader.result;

            // Добавляем новое мероприятие в массив
            addEventToArray(title, place, datetime, description, imageSrc);
            // Очищаем форму
            resetForm();
            // Обновляем список мероприятий
            renderEventList();
            // Переключаемся на экран со списком мероприятий
            showScreen("screen3");
        };
        reader.readAsDataURL(imageFile);
    } else {
        // Если изображения нет, добавляем мероприятие без него
        addEventToArray(title, place, datetime, description, imageSrc);
        resetForm();
        renderEventList();
        showScreen("screen3");
    }
}

function addEventToArray(title, place, datetime, description, imageSrc) {
    events.push({
        id: events.length + 1, // Генерируем уникальный ID
        title,
        place,
        datetime,
        description,
        image: imageSrc,
    });
}

function resetForm() {
    document.querySelector('[v-model="newEvent.title"]').value = "";
    document.querySelector('[v-model="newEvent.place"]').value = "";
    document.querySelector('[v-model="newEvent.datetime"]').value = "";
    document.querySelector('[v-model="newEvent.description"]').value = "";
    document.querySelector('input[type="file"]').value = "";
}

document.getElementById("create-event-form").addEventListener("submit", createEvent);

function renderEventList() {
    const eventsGrid = document.querySelector(".events-grid");

    events.forEach((event) => {
        // Проверяем, есть ли уже карточка с таким id
        if (!eventsGrid.querySelector(`[data-id="${event.id}"]`)) {
            const button = document.createElement("button");
            button.setAttribute("data-id", event.id); // Уникальный идентификатор
            button.addEventListener("click", () => openEventDetails(event.id));

            const eventCard = document.createElement("div");
            eventCard.className = "event-card";

            const img = document.createElement("img");
            img.className = "event-image";
            img.src = event.image || "default-image.jpg"; // Подставляем изображение или заглушку
            img.width = 150;

            const titleDiv = document.createElement("div");
            titleDiv.className = "event-title";
            titleDiv.textContent = event.title;

            eventCard.appendChild(img);
            eventCard.appendChild(titleDiv);
            button.appendChild(eventCard);
            eventsGrid.appendChild(button);
        }
    });
    updateProfileEvents();
}

function updateProfileEvents(event) {

    const plannedPanel = document.querySelector(".content-panel.planned");

    const textToDelete = plannedPanel.querySelector("p");
    if (textToDelete) {
        textToDelete.remove(); // Убираем только текстовое содержимое, оставляя другие элементы нетронутыми
    }

    const eventsGrid = plannedPanel.querySelector(".events-grid");

    // Создаем карточку мероприятия
    events.forEach((event) => {
        // Проверяем, есть ли уже карточка с таким id
        if (!eventsGrid.querySelector(`[data-id="${event.id}"]`)) {
            const button = document.createElement("button");
            button.setAttribute("data-id", event.id); // Уникальный идентификатор
            button.addEventListener("click", () => openEventDetails(event.id));

            const eventCard = document.createElement("div");
            eventCard.className = "event-card";

            const img = document.createElement("img");
            img.className = "event-image";
            img.src = event.image || "default-image.jpg"; // Подставляем изображение или заглушку
            img.width = 150;

            const titleDiv = document.createElement("div");
            titleDiv.className = "event-title";
            titleDiv.textContent = event.title;

            eventCard.appendChild(img);
            eventCard.appendChild(titleDiv);
            button.appendChild(eventCard);
            eventsGrid.appendChild(button);
        }
    });
}

function openEventDetails(eventId) {
    const eventDetailsScreen = document.querySelector("#screen11");
    const event = events.find((e) => e.id === eventId);

    if (event) {
        const [date, time] = event.datetime.split("T"); // Разделяем дату и время
        eventDetailsScreen.setAttribute("data-event-id", event.id);

        document.getElementById("event-picture").src = event.image || "default-image.jpg";
        document.getElementById("event-title").textContent = event.title;
        document.getElementById("event-date").innerHTML = `Дата: ${date}`; // Выводим на отдельных строках
        document.getElementById("event-time").innerHTML = `Время: ${time}`;
        document.getElementById("event-place").innerHTML = `Место проведения: ${event.place}`;
        document.getElementById("event-description").textContent = `${event.description}`;
        document.getElementById("data-event-id").textContent = `Id: ${eventId}`;

        showScreen("screen11");
    }
}

window.deleteEvent = function () {
    // Получаем текущий экран описания мероприятия
    const eventDetailsScreen = document.querySelector(".screen.visible");

    // Определяем ID мероприятия, которое нужно удалить (используем data-id для хранения ID)
    const eventId = eventDetailsScreen.getAttribute("data-event-id");

    if (!eventId) {
        console.error("Не удалось найти ID мероприятия для удаления.");
        return;
    }

    // Удаляем мероприятие из массива events
    const eventIndex = events.findIndex((event) => event.id === Number(eventId));
    if (eventIndex !== -1) {
        events.splice(eventIndex, 1);
    } else {
        console.error("Мероприятие не найдено в массиве.");
        return;
    }

    // Удаляем карточку мероприятия из всех сеток
    const eventCards = document.querySelectorAll(`[data-id="${eventId}"]`);
    eventCards.forEach((card) => card.remove());

    // Возвращаемся на главный экран со списком мероприятий
    showScreen("screen3");
};


const friendsList = ["Иван", "Мария", "Алексей", "Светлана", "Ольга"];


// Функция для отображения друзей на экране
function renderFriendsList() {
    const chatList = document.querySelector(".friends-list"); // Получаем элемент списка
    chatList.innerHTML = ""; // Очищаем список перед рендерингом

    friendsList.forEach(friend => {
        const friendElement = document.createElement("p"); // Создаём элемент <p>
        friendElement.textContent = friend; // Добавляем имя друга
        chatList.appendChild(friendElement); // Вставляем элемент в список
    });
    }
renderFriendsList();

window.addFriend = function () {
  const userNameElement = document.querySelector("#screen10 #user-name"); 
  const userName = userNameElement.textContent; 
  
  friendsList.push(userName);
  renderFriendsList();

  const addImage = document.querySelector(".add-friend-pic");
  addImage.remove();

  const newImage = document.createElement("img");
  newImage.src = "added-friend.png"; 
  newImage.className = "add-friend-pic"; 
  newImage.width = 20;
  newImage.height = 20;

  const userElement = document.querySelector(".anna-name"); 
  userElement.appendChild(newImage); 
}

// Добавление друзей в мероприятие
function openFriendsList() {
  // Создаём контейнер для списка друзей
  const modal = document.createElement("div");
  modal.className = "friends-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Выберите друзей</h3>
      <ul class="friends-to-add">
        ${friendsList
          .map(
            friend =>
              `<li>
                <label>
                  <input type="checkbox" value="${friend}"> ${friend}
                </label>
              </li>`
          )
          .join("")}
      </ul>
      <button class="confirm-button">Добавить</button>
      <button class="close-button">Закрыть</button>
    </div>
  `;

  // Добавляем всплывающее окно на страницу
  document.body.appendChild(modal);

  // Закрытие окна
  modal.querySelector(".close-button").onclick = () => modal.remove();

  // Добавление выбранных друзей
  modal.querySelector(".confirm-button").onclick = () => {
    const selectedFriends = Array.from(
      modal.querySelectorAll("input[type='checkbox']:checked")
    ).map(input => input.value);

    addParticipants(selectedFriends);
    modal.remove(); // Удаляем модальное окно
  };
}

// Функция для добавления участников в .participants-list
function addParticipants(selectedFriends) {
  const participantsList = document.querySelector(".participants-list");

  if (!document.querySelector(".participants-header")) {
    const header = document.createElement("h3");
    header.className = "participants-header";
    header.textContent = "Список участников";
    participantsList.parentNode.insertBefore(header, participantsList); // Вставляем перед списком
  }

  selectedFriends.forEach(friend => {
    if (!Array.from(participantsList.children).some(el => el.textContent === friend)) {
      const participant = document.createElement("p");
      participant.textContent = friend;
      participantsList.appendChild(participant);
    }
  });
}

// Обработчик на кнопку "Добавить друзей"
document.querySelector(".add-button").onclick = openFriendsList;

</script>

<style scoped>

</style>

<style scoped>
#yandex-map {
  width: 100%;
  height: 400px;
}
</style>