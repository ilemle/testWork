function remover(elem) {
  //удаляет всё кроме шапки и подвала
  elem.forEach(function (node) {
    if (node.nodeName == "#text") {
    } else {
      if (
        node.getAttribute("class") == "header" ||
        node.getAttribute("class") == "footer"
      ) {
      } else {
        node.remove();
      }
    }
  });
}

function autorise() {
  let mainElArray = document.querySelector(".flexAir").childNodes;

  let div = document.createElement("div");
  div.className = "autoriseForm";
  div.innerHTML = `<form class="forma">
    <div class="autoriseH3">Авторизация<div> 
    <input class="inputWork1" type="text"></input> 
    <div><button class="autoriseButton" type="button" onclick="setAutoriseName()">отправить</button></div>
    </form>`;
  remover(mainElArray);
  document.querySelector(".header").after(div);
}

function setAutoriseName() {
  const currentName = document.querySelector(".inputWork1").value;
  let name = document.querySelector(".userName");
  name.innerHTML = `Привет ${currentName}`;
  setMainMenu();
}

function setMainMenu() {
  let mainElArray = document.querySelector(".flexAir").childNodes;
  remover(mainElArray);
  let mainContent = `
    <section class="isCool">
        <div class="isCoolText">
           <p> Стажировка это круто!</p>
          <p class="isCoolList">
           -работа в команде;<br>
           -реальные проекты;<br>
           -оплачиваемая стажировка;<br>
           -перспективная отрасль;<br>
          </p> 
          <button class="isCoolButtonMore">Подробнее</button>
        </div>
        
        <img src="img/isCoolBG.png" class="isCoolImg">
    </section >


    <section class="vacancy">
        <div class="vacancyText">
            Cвободные вакансии 
        </div>
        <div class="vacancyBlocks">
            <div class="vacancyBlock">
                <div class="vacancyH5"> Программист</div>
                <div class="circle">
                    <img src="img/icon1.png" class="vacancyImg">
                </div>
                <div class="vacancyBlockText"> Верстка макета, интеграция <br>
                сайта, программирование</div>
                <button class="vacancyButton"> Оставить заявку</button>
            </div>
            <div class="vacancyBlock">
                <div class="vacancyH5"> Программист</div>
                <div class="circle">
                    <img src="img/icon2.png" class="vacancyImg">
                </div>
                <div class="vacancyBlockText"> Верстка макета, интеграция <br>
                сайта, программирование</div>
                <button class="vacancyButton"> Оставить заявку</button>
            </div>
            <div class="vacancyBlock">
                <div class="vacancyH5"> Программист</div>
                <div class="circle">
                    <img src="img/icon3.png" class="vacancyImg">
                </div>
                <div class="vacancyBlockText"> Верстка макета, интеграция <br>
                сайта, программирование</div>
                <button class="vacancyButton"> Оставить заявку</button>
            </div>
            <div class="vacancyBlock">
                <div class="vacancyH5"> Программист</div>
                <div class="circle">
                    <img src="img/icon4.png" class="vacancyImg">
                </div>
                <div class="vacancyBlockText"> Верстка макета, интеграция <br>
                сайта, программирование</div>
                <button class="vacancyButton"> Оставить заявку</button>
            </div>
        </div>
    </section>

    <section class="expect">
        <div class="weExpect">
            <div class="expectH3">Мы готовы вам предложить:</div>
            <ul>
                <li><span>Обучение под руководством опытного наставника;</span></li>
                <li><span>Дружелюбный коллектив;</span></li>
                <li><span>Возможность профессионального роста в ИТ-компании;</span></li>
                <li><span>Официальное трудоустройство.</span></li>
            </ul>
        </div>    
        <div class="weExpect">
            <div class="expectH3">Мы ждём от Вас:</div>
            <ul>
                <li><span>Желание и умение обучаться, упорство и целеустремленность;</span></li>
                <li><span>Базовые знания PHP, JavaScript, MySQL, HTML и CSS;</span></li>
                <li><span>Нацеленность на развитие и долгосрочное сотрудничество;</span></li>
                <li><span>Имеешь опыт веб-разработки.</span></li>
            </ul>
        </div>
    </section>
    `;
  let div = document.createElement("div");
  div.innerHTML = mainContent;
  document.querySelector(".header").after(div);
}
////work 3

function setCurtains() {
  let mainElArray = document.querySelector(".flexAir").childNodes;
  remover(mainElArray);
  let div = document.createElement("div");
  div.className = "accordionClass";
  let mainContent = `
    <div class="headingWork3">Популярные вопросы</div>
    <button class="accordion">А вы вообще в курсе, что большой палец и мизинец одного размера?</button>
    <div class="panel">
        <p>Бритые ноги обеспечивали более свободное плавание. Длинная шерсть на груди, защищала органы от переохлаждения. Помпон на кончике хвоста защищал хвост от колючих кустов. Таким образом консультация с широким активом в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. 
        Не следует, однако забывать, что новая модель организационной деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. 
        </p>
    </div>

    <button class="accordion">А Вас не настораживает фраза жены: «Я наложила, иди поешь, пока горячее …»?</button>
    <div class="panel">
         <p>- У моей жены фраза «уже выхожу» означает, что она собирается думать, как собраться начать собираться.
        </p>
    </div>

    <button class="accordion">В пупок входит 8 половинок арахиса. А как проходит ваше весёлое лето?
    </button>
    <div class="panel">
        <p>Есть у меня друг — американец. Очень хочет побывать в России. Решил учить русский язык (я его сразу предупредила что будет сложно, но чем смогу — помогу). И вот как объяснить человеку что выражения "ладно" и "ну ладно" имеют немного разный смысл...</p>
    </div>

    <button class="accordion">Почему пьяный мужик с перегаром в маршрутке всегда садится именно ко мне?
    </button>
    <div class="panel">
        <p>Противоположности притягиваются... Он мужик-ты девушка, он пьяный-ты трезвая, он с перегаром-значит от тебя приятно пахнет...</p>
    </div>

    <button class="accordion">Интересно, а как жарят картошку перфекционисты? Идеально укладывая и переворачивая каждый кусочек, 
    или все таки сваливают все в кучу и жарят?
    </button>
    <div class="panel">
        <p>Слово "перфекционист" чаще всего употребляют в положительном смысле. Говоря "Я — перфекционист во всем!" или "В работе он — перфекционист", люди хотят подчеркнуть свои или чужие достоинства, стремление сделать все идеально. На самом деле если человек действительно перфекционист, то, скорее всего, в жизни он сталкивается с серьезными проблемами, которые могут сказаться на его психическом и физическом здоровье. </p>
    </div>

    <button class="accordion">Забыла встряхнуть сок перед употреблением сколько мне осталось жить? 
    </button>
    <div class="panel">
        <p>Не повезло не повезло</p>
    </div>

    <button class="accordion">Почему собачки должны ездить в транспорте в наморднике. А бешеные бабки - нет?
    </button>
    <div class="panel">
        <p>а справку от ветеринара брать?</p>
    </div>

    
    <button class="accordion">Имеет ли право нотариус тыкать меня лицом в документы, если я пять раз расписался не в том месте?
    </button>
    <div class="panel">
        <p>Я боюсь за свою контекстную рекламу, после того что я гуглил для этой работы...</p>
    </div>
    `;
  div.innerHTML = mainContent;
  document.querySelector(".header").after(div);

  var accordionArray = document.querySelectorAll(".accordion");
  for (let i = 0; i < accordionArray.length; i++) {
    accordionArray[i].addEventListener("click", function () {
      let hidePanel = this.nextElementSibling;
      if (hidePanel.style.maxHeight) {
        hidePanel.style.maxHeight = null;
      } else {
        hidePanel.style.maxHeight = hidePanel.scrollHeight + "px";
      }
    });
  }
}

////4
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMaxRandom() {
  let mainElArray = document.querySelector(".flexAir").childNodes;
  remover(mainElArray);
  let div = document.createElement("div");
  div.className = "randomNumbers";

  let randomNumbersArray = [];
  for (let i = 0; i < 10; i++) {
    randomNumbersArray[i] = getRandomIntInclusive(0, 100);
  }

  const postArray = randomNumbersArray.slice("");
  postArray.sort(function (a, b) {
    return b - a;
  });

  const maxFreeNumbersArray = [];
  for (let i = 0; i < 3; i++) {
    maxFreeNumbersArray[i] = postArray[i];
  }

  div.innerHTML = `
    <div>
    <div class='headingForRandom'>Массив чисел:</div>
    <div class='numbers'>${randomNumbersArray}</div>
    <div class='headingForRandom'>Наибольшие три:</div>
    <div class='numbers'>${maxFreeNumbersArray}</div>
    </div>
    `;
  document.querySelector(".header").after(div);
}

//5

function katalog() {
  let mainElArray = document.querySelector(".flexAir").childNodes;
  remover(mainElArray);
  let div = document.createElement("div");
  div.className = "katalog";

  div.innerHTML = `
    <ul >
    <li ><div data-number="1">1.Главная</div></li>
    <li ><div data-number="2">2.Каталог</div>
        <ul>
            <li ><div data-number="3">3.Телефоны</div>
                <ul>
                    <li ><div data-number="4">4.iPhone 6</div></li>
                    <li ><div data-number="5"> 5.iPhone 5</div></li>
                    <li ><div data-number="6">6.iPhone 4</div></li>
                    <li ><div data-number="7">7.Аксессуары</div></li>
                </ul>
            </li>
            <li ><div data-number="8">8.Планшеты</div>
                <ul>
                    <li ><div data-number="9">9.iPpad Air</div></li>
                    <li ><div data-number="10">10.iPad Mini</div></li>
                    <li ><div data-number="11">11.Аксессуары</div></li>
                </ul>
            </li>
            <li ><div data-number="12">12.Ноутбуки</div>
                <ul>
                    <li ><div data-number="13">13.iPad Air</div></li>
                    <li ><div data-number="14">14.iPad Mini</div></li>
                    <li ><div data-number="15">15.Аксессуары</div></li>
                </ul>
            </li>
        </ul>
    </li>
    <li ><div data-number="16">16.О компании</div></li>
    </ul>

    <input placeholder="Введите номер раздела"></input>
    <div><button type="button" onclick="get_breadcrumbs()">Найти</button></div>
    `;
  document.querySelector(".header").after(div);
}

// function get_breadcrumbs(){
//     const num=document.querySelector('.katalog input').value;
//     const elemUl=document.querySelector('.katalog ');

//     if(elemUl.nextElementSibling==null){

//     }

// }
////////////
// const breadArray = [];
// function DOMComb(oParent, num) {
//   const reEx = /{0-9}/;
//   if (oParent.hasChildNodes()) {
//     for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
//       if (oNode.innerHTML === reEx);
//       {
//         console.log(oNode.innerHTML);
//       }
//       //  console.log(oNode.innerHTML);
//       if (oParent.getAttribute("data-number") === num) {
//         oParent.style.backgroundColor = "lightgrey";
//         break;
//       }
//       DOMComb(oNode, num);
//     }
//   }
// }

// function get_breadcrumbs() {
//   const elemUl = document.querySelector(".katalog ");
//   const num = document.querySelector(this).value;

//   DOMComb(elemUl, num);
// }





//6

// function sendRequest(url) {
//   let result = null;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       result = data;
//       console.log("В запросе ", result);
//       return result;
//     });
// }
function getDataRequest(url) {
  return fetch(url).then((response) => response.json());
}

async function weather() {
  //const url = `https://jsonplaceholder.typicode.com/users`;
  const sity = document.querySelector(".inputSity").value;
  const url = `
  http://api.openweathermap.org/data/2.5/weather?q=${sity}&lang=ru&appid=caef64f0563d8064f064787ec1b3fe53
  `;

  let data = null;
  data = await getDataRequest(url);

  let tempK = data.main.temp;
  const tempC = (tempK - 273.15).toFixed(1);
  console.log(tempC);

  weatherDataBlock = document.querySelector(".weatherData");
  weatherDataBlock.innerHTML = `В городе ${sity} текущая температура ${tempC}`;
}

function getWeatherBlock() {
  let mainElArray = document.querySelector(".flexAir").childNodes;
  remover(mainElArray);
  let div = document.createElement("div");

  div.className = "weatherBlock";
  div.innerHTML = `
    <div>
        <input class="inputSity" placeholder="введите город" > </input>
        <button class='weatherBlockButton' onclick="weather()">узнать погоду</button>
        <div class="weatherData">  </div>
    </div>
    `;
  document.querySelector(".header").after(div);
}
