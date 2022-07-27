# Module 5 - Interface construction 

> Moduł 5 - Budowa interfejsu

---------------------------

## That repository includes 5 tasks which I've done after module 5'th during learning the basics of React.

> Repozytorium zawiera 5 zadań, które wykonałam po 5 module nauki podstaw Reacta.

---------------------------

## Task 1
The dialog box appears after clicking on the button. It has the ability to set the title and content. It also contains 'Ok' and 'Anuluj' (en. Cancel) buttons, after clicking each of them, the action (handler) passed from outside to this component should be launched (for now it's console.log).

> Okno dialogowe pojawia się po kliknięciu w przycisk. Ma możliwość ustawienia tytułu oraz treści. Zawiera też przyciski 'Ok' i 'Anuluj', po kliknięciu w każdy z nich powinna uruchamia się akcja (handler) przekazany z zewnątrz do tego komponentu (narazie jest to console.log).

---------

## Task 2
Snackbar is displayed after clicking on the button for a specified number of seconds (5 by default), the possibility of changing this number and determining its position on the screen by means of props.

> Snackbar wyświetla się po kliknięciu w przycisk przez określoną liczbę sekund (domyślnie 5), możliwość zmiany tej liczby oraz określenia jego położenia na ekranie poprzez propsy.

---------

## Task 3
The navigation menu contains navigation links, it is hidden by default. The button allows you to open the menu (first click) and close the menu (click the second time). Several subpages were added with React Router DOM, links to these subpages were inserted using NavLink components. The page currently open is in bold.

> Menu nawigacyjne zawiera linki nawigacyjne, domyślnie jest ukryty. Przycisk pozwala na otworzenie menu (pierwszy klik) oraz zamknięcie menu (kliknięcie po raz drugi). Za pomocą React Router DOM dodano kilka podstron, za pomocą komponentów NavLink wstawiono linki do tych podstron. Aktualnie otwarta strona jest pogrubiona.

---------

## Task 4 & 5
Users' search and user profile - The application downloads a list of users from a JSON file, the UsersList and User presentation components displays users. The UserSearch component is a form with a text field in which we enter the user's first or last name. The search engine starts after pressing the Enter key, next to the field there is a ‘Reset’ button to reset the search. Users who meet the search criteria appear in the list. Users are available under the path /users. After finding the user you are interested in, you can click on the User component (the selected person). Clicking saves the selected object in the application. With help of React Router DOM the path /user-profile was created, to which the click leads. After switching to this path, the details of the selected user are displayed.

> Wyszukiwanie użytkowników i profil użytkownika - Aplikacja pobiera listę użytkowników z pliku JSON, komponenty prezentacyjne UsersList oraz User wyświetlają poszczególnych użytkowników, a komponent UserSearch to formularz z polem tekstowym, w które wpisujemy imię lub nazwisko użytkownika. Wyszukiwarka uruchamia się po wciśnięciu klawisza Enter, obok pola jest przycisk Reset do wyzerowania wyszukiwania. Na liście pojawiają się użytkownicy, którzy spełniają kryteria wyszukiwania. Użytkownicy są dostępni pod ścieżką /users, a po odszukaniu interesującego nas użytkownika można kliknąć w komponent User (wybraną osobę). Kliknięcie powoduje zapisanie wybranego obiektu w aplikacji, a z pomocą React Router DOM utworzono ścieżkę /user-profile, do której prowadzi kliknięcie. Po przejściu na tę ścieżkę widoczne są szczegóły wybranego użytkownika.

---------------------------

## How to run?

---------

First in the terminal of our project write:

### `npm i`

It will install all dependencies needed to start the program.

---------

Then in the terminal write:

### `npm start`

That will open the project on your browser as http://localhost:3000/
