
  /*

  Завдання 1.

    Написати скрипт, який буде перемикати вкладки по натисканню
    на кнопки у хедері.

    Головна умова – змінювати файл HTML не можна.

    Алгоритм:
      1. Вибрати кожну кнопку у шапці
         + бонус вибрати одним селектором

      2. Повісити кнопку онклік
          button1.onclick = function(event) {

          }
          + бонус: один обробник на всі три кнопки

      3. Написати функцію, яка вибирає відповідну вкладку
         та додає до неї клас active

      4. Написати функцію hideAllTabs яка ховає всі вкладки.
         Видаляючи клас active з усіх вкладок

    Методи роботи:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

      const button1 = document.querySelector('[data-tab="1"]');
      const button2 = document.querySelector('[data-tab="2"]');
      const button3 = document.querySelector('[data-tab="3"]');

      let imgOne = document.querySelector('.tabContainer div:nth-child(1)');
      console.log(imgOne);
      let imgTwo = document.querySelector('.tabContainer div:nth-child(2)');
      let imgThree = document.querySelector('.tabContainer div:nth-child(3)');

      button1.onclick = function(event) {
        imgOne.classList.toggle('active');
      }

      button2.onclick = function(event) {
        imgTwo.classList.toggle('active');
      }

      button3.onclick = function(event) {
        imgThree.classList.toggle('active');
      }