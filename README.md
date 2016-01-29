# Alkalmazások fejlesztése dokumentáció

## Követelményanalízis
1. Követelmények összegyűjtése
	1. Funkcionális elvárások:
		* A userek teendőket tudnak feljegyezni
		* Van lehetőségük módosítani a todokat
		* Tudják törölni a todokat
	2. Nem funkcionális elvárások:
		* Felhasználóbarát, ergonomikus elrendezés és kinézet.
		* Gyors működés.
2. Használati modell
	1. Folyamatok pontos menete:
		- todo rögzítése:
			- todo-k listázása
			- "details" gomb-ra kattintva feljönnek a kommentek
			- "add comment" gombra kattintva új comment adható hozzá
		

## Tervezés
1. Architektúra terv
	1. Oldaltérkép
		* Felhasználó
			* Főoldal
			* Todo-k listázása
				* Todo módosítása
				* Todo törlése
				* Todo-k listázása
			    * Új komment hozzáadása
			        * Kommentek listázása
			* 
	2. Végpontok
		* GET /newtodo: todo rögzítés oldal
		* POST /newtodo: todo adatok felküldése
		* GET /list: todo listázása oldal
		* GET /edit/:id : todo módosítása oldal
		* POST /edit/:id : todo módosított adatainak felküldése
		* GET /comment/:id : todo kommentjeinek oldal


3. Osztálymodell
	1. Adatmodell

		Todo 1 ───> * Komment
		* leírás      -komment szovege



## Implementáció
1. Fejlesztői környezet bemutatása
	Az alkalmazást egy online c9 nevű IDE-ben lett implementálva a Node.js alapokkal és egyéb modulok használatával.
2. Könyvtárstruktúrában lévő mappák funkiójának bemutatása
```
...
─app                        ROOT
 ├───adapters               JSONAPI adapter tulajdonságok
 ├───components             oldalon jelenlévő komponensek
 ├───controllers            oldalon jelenlévő controllerek
 ├───models                 adatbázis sémák
 ├───routes                 útvonalak
 ├───templates              megjelnés
 └───styles                 stíluslapok
```


## Felhasználói dokumentáció
1. A futtatáshoz szükséges hardver legalább egy SSD-t és 1GB-ramot tartalmazó szerver
2. Futtatás
	- githubról az egész projektet le kell klónozni a helyi könyvtárba ```git clone``` parancsal
	- az npm install parancso kiadva letöltődnek az alkalmazáshoz tartozó függőségek.
	- az alkalmazás az nodemon index parancsal indul
	- az alkalmazáshoz szükséges elindítani a JSONAPI projektet is 
2. az alkalmazás értelemszerűen használható
	- todo-k rögzítése