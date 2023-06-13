import * as taskFunctions from "./tasksImports";

export function createMainPage(element) {
  const mainElement = element;
  mainElement.classList.add("wrap", "mainPage");
  mainElement.innerHTML = `<h1>Tasks</h1>
    <ul>
        <li>
            <h2>Homework 1</h2>
            <ul>
            <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>В переменных a и b хранятся числа. Написать 
            программу, которая выводит в консоль произведение 
            и сумму этих чисел.</div>
            <button id="sumMultiplication" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>В двух переменных хранятся строки символов. 
            Написать программу, которая выведет в консоль 
            суммарное количество символов в обоих строках</div>
            <button id="countStringSymbols" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>Написать программу, которая запрашивает у пользователя ввод
             трёхзначного числа, а потом выводит в консоль сумму цифр введённого
             числа</div>
            <button id="sumUserNumber">Solution</button>
            </div>
                </li>
            </ul>
        </li>
        <li>
            <h2>Homework 2</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>В переменных a и b хранятся числа. Вывести в 
            консоль наибольшее из них</div>
            <button id="maxNumber" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Запросить у пользователя ввод числа от 1 до 12. 
            Вывести в консоль название месяца, соответствующее 
            этому числу (1 — январь, 2 — февраль и т.д.)</div>
            <button id="monthsPresented">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>В переменных circle и square хранятся площади круга 
            и квадрата соответственно. Написать программу, 
            которая определяет, поместится ли круг в квадрат</div>
            <button id="isCircleFitToSquare" disabled>Solution</button>
            </div>
                </li>
            </ul>
        </li>
        <li>
            <h2>Homework 3</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>Вывести в консоль сумму всех целых чисел от 50 до 
            100</div>
            <button id="sumNaturalNumbers">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Вывести в консоль таблицу умножения на 7</div>
            <button id="multiplacationTable">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>Запросить у пользователя ввод числа N. Вывести в 
            консоль среднее арифметическое всех нечётных
            чисел от 1 до N</div>
            <button id="arithmeticMean">Solution</button>
            </div>
                </li>
            </ul>    
        </li>
        <li>
            <h2>Homework 4</h2>
            <div class="li">
            <div>Создайте объект user, содержащий поле name со 
            значением ‘John’.<br/>
            1.Запросить у пользователя ввод числа. Записать 
            введенное значение в поле age объекта user.<br/>
            2.Создать копию объекта user с именем admin. 
            Добавить новому объекту поле role со значением 
            ‘admin’.<br/>
            *Записать все значения полей объекта admin в 
            отдельные переменные. Имена переменных
            должны совпадать с названиями полей</div>
            <button id="objects">Solution</button>
            </div>
        </li>
        <li>
            <h2>Homework 5</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>Создайте массив целых чисел из 10 элементов.
            Выведите в консоль сумму всех элементов массива</div>
            <button id="sumArrayElements" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Создайте новый массив на основе исходного, в 
            котором каждый элемент будет вдвое больше 
            элемента исходного массива с таким же индексом. 
            (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
            массив)</div>
            <button id="createArrayDoubleElements" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>*Найдите и выведите в консоль наибольший и 
            наименьший элементы исходного массива</div>
            <button id="findArrayExtremums" disabled>Solution</button>
            </div>
                </li>
            </ul>    
        </li>
        <li>
            <h2>Homework 6</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>Напишите функцию diff, которая получает в качестве 
            параметров 2 числа и возвращает разницу между 
            наибольшим и наименьшим</div>
            <button id="diff" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Напишите функцию isWord, которая принимает на 
            вход текстовую строку. Функция возвращает true, если 
            строка состоит из одного слова и false, если из 
            нескольких</div>
            <button id="isWord" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>*Напишите функцию pow(a, x), которая вернёт 
            значение числа a, возведённого в степень x.</div>
            <button id="pow" disabled>Solution</button>
            </div>
                </li>
            </ul>    
        </li>
        <li>
            <h2>Homework 7</h2>
            <div class="li">
            <div>Сверстать страницу и подключить к ней файл со 
            скриптом. На странице должны быть три текстовых
            параграфа, поле ввода и кнопка. Напишите скрипт, 
            который будет выполнять следующие условия:<br/>
            1.Кнопка скрыта, если в поле ввода нет значения.<br/>
            2.При клике на кнопку добавляется новый параграф, 
            содержащий текст из поля ввода.<br/>
            3.*Если параграфов становится больше 5, первый из 
            них удаляется</div>
            <div id="task7"></div>
            </div>                
        </li>
        <li>
          <h2>Homework 8</h2>
          <ul>
            <li>
              <div class="li">
              <h3>Task 1</h3>
              <div>Запросите у пользователя дату в формате 
              ДД.ММ.ГГГГ. Напишите программу, выводящую день 
              недели по введённой дате</div>
              <button id="userDate">Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 2</h3>
              <div>Написать программу, которая выводит в консоль 
              количество минут, прошедшее с начала сегодняшнего 
              дня</div>
              <button id="countDayMinutes">Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 3</h3>
              <div>*В двух переменных хранятся даты рождения двух
              пользователей в формате ДД.ММ.ГГГГ. Написать 
              программу, которая определяет более молодого 
              пользователя</div>
              <button id="youngestUser" disabled>Solution</button>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h2>Homework 9</h2>
          <ul>
            <li>
              <div class="li">
              <h3>Task 1</h3>
              <div>Даны длины трёх сторон треугольника. Определить, 
              является ли треугольник прямоугольным</div>
              <button id="isRightTriangle" disabled>Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 2</h3>
              <div>Пользователь вводит число R. Написать программу, 
              которая выведет в консоль длину окружности и 
              площадь круга с радиусом R</div>
              <button id="calculateCircleLengthSquare">Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 3</h3>
              <div>*Пользователь вводит числа a, b и c. Написать 
              программу, выводящую корни квадратного 
              уравнения с коэффициентами a, b и c</div>
              <button id="calculateRootsQuadraticEquation">Solution</button>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h2>Homework 10</h2>
          <ul>
            <li>
              <div class="li">
              <h3>Task 1</h3>
              <div>Пользователь вводит текстовую строку. Определить с 
              помощью регулярного выражения, является ли 
              введённая строка:<br/>
              Датой.</div>
              <button id="checkDate">Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 2</h3>
              <div>Пользователь вводит текстовую строку. Определить с 
              помощью регулярного выражения, является ли 
              введённая строка:<br/>
              Адресом электронной почты.</div>
              <button id="checkEmail">Solution</button>
              </div>
            </li>
            <li>
              <div class="li">
              <h3>Task 3</h3>
              <div>Пользователь вводит текстовую строку. Определить с 
              помощью регулярного выражения, является ли 
              введённая строка:<br/>
              *Номером телефона</div>
              <button id="checkPhone">Solution</button>
              </div>
            </li>
          </ul>
        </li>
    </ul>`;

  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", taskFunctions.sum);
  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", taskFunctions.multiplication);
  mainElement
    .querySelector("#countStringSymbols")
    .addEventListener("click", taskFunctions.countStringSymbols);
  mainElement
    .querySelector("#sumUserNumber")
    .addEventListener("click", taskFunctions.sumUserNumber);

  mainElement
    .querySelector("#maxNumber")
    .addEventListener("click", taskFunctions.maxNumber);
  mainElement
    .querySelector("#monthsPresented")
    .addEventListener("click", taskFunctions.monthsPresented);
  mainElement
    .querySelector("#isCircleFitToSquare")
    .addEventListener("click", taskFunctions.isCircleFitToSquare);

  mainElement
    .querySelector("#sumNaturalNumbers")
    .addEventListener("click", taskFunctions.sumNaturalNumbers);
  mainElement
    .querySelector("#multiplacationTable")
    .addEventListener("click", taskFunctions.multiplacationTable);
  mainElement
    .querySelector("#arithmeticMean")
    .addEventListener("click", taskFunctions.arithmeticMean);

  mainElement
    .querySelector("#objects")
    .addEventListener("click", taskFunctions.objects);

  mainElement
    .querySelector("#sumArrayElements")
    .addEventListener("click", taskFunctions.sumArrayElements);
  mainElement
    .querySelector("#createArrayDoubleElements")
    .addEventListener("click", taskFunctions.createArrayDoubleElements);
  mainElement
    .querySelector("#findArrayExtremums")
    .addEventListener("click", taskFunctions.findArrayExtremums);

  mainElement
    .querySelector("#diff")
    .addEventListener("click", taskFunctions.diff);
  mainElement
    .querySelector("#isWord")
    .addEventListener("click", taskFunctions.isWord);
  mainElement
    .querySelector("#pow")
    .addEventListener("click", taskFunctions.pow);

  mainElement
    .querySelector("#userDate")
    .addEventListener("click", taskFunctions.userDate);
  mainElement
    .querySelector("#countDayMinutes")
    .addEventListener("click", taskFunctions.countDayMinutes);
  mainElement
    .querySelector("#youngestUser")
    .addEventListener("click", taskFunctions.youngestUser);

  taskFunctions.createSection(mainElement.querySelector("#task7"));

  mainElement
    .querySelector("#isRightTriangle")
    .addEventListener("click", taskFunctions.isRightTriangle);
  mainElement
    .querySelector("#calculateCircleLengthSquare")
    .addEventListener("click", taskFunctions.calculateCircleLengthSquare);
  mainElement
    .querySelector("#calculateRootsQuadraticEquation")
    .addEventListener("click", taskFunctions.calculateRootsQuadraticEquation);

  mainElement
    .querySelector("#checkDate")
    .addEventListener("click", taskFunctions.checkDate);
  mainElement
    .querySelector("#checkEmail")
    .addEventListener("click", taskFunctions.checkEmail);
  mainElement
    .querySelector("#checkPhone")
    .addEventListener("click", taskFunctions.checkPhone);
}
