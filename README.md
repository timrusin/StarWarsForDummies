## Star Wars for Dummies
#### Designed by: Tim Rusin
A SPA utilizing a Star Wars API allowing users to learn a bit more about star wars characters, planets, and movies
 
## Summary:
Star Wars for Dummies is a single page application built with React that utilizes the public API ["SWAPI"](https://swapi.dev/documentation)

The application, in its current beta state, allows the user to browse information from the first six Star Wars films, research a total of 82 characters seen throughout the films, as well as 60 planets that make up the Star Wars universe.

This application is still in development that will eventually include not only more categories (species, starships, vehicles) but also more functionality allowing the user to make connections between all of the categories to browse information more thoroughly. (ie. What vehicles has Luke Skywalker driven? What planet is his home world? What species is he, etc..) As my React skills are developing, I look forward to implementing all of these features.

## Technologies implemented:
- React
- reactstrap
- CSS
- Public API utilization using Fetch and json protocols
- Netlify

## Wireframe of App
![Wireframe](https://github.com/timrusin/StarWarsForDummies/blob/main/StarWarsForDumies_wireframe.jpg)

## Original React Heiarchy
![OriginalHeiarchy](https://github.com/timrusin/StarWarsForDummies/blob/main/images/StarWarsForDummies_ReactHeiarchy.jpg)

## Progression of design:
![Opening Star Wars Crawl](https://github.com/timrusin/StarWarsForDummies/blob/main/images/opening%20crawl.jpg)

I became pretty obsessed with the opening crawl on the home page. Although this was a styling thing, I felt like it was a must for the app. The crawl really adds theming that is very on brand for the application. This was a bit tricky and can still probably be tweaked a bit. I dove into a lot of css animation and keyframe research to make this work. 

![Card with styling](https://github.com/timrusin/StarWarsForDummies/blob/main/images/card%20with%20styling.jpg)

I tried to stick with the yellow font color that is so classic to the Star Wars films but then later added some box shadows to make it appear that the boxes were floating in space, as well as changing some of the font to that classic blue color that is synonymous to Star Wars theming as well. 

![Drop down pages](https://github.com/timrusin/StarWarsForDummies/blob/main/images/page%20drop%20down.jpg)![Page Buttons](https://github.com/timrusin/StarWarsForDummies/blob/main/images/page%20buttons.jpg)

All of the data from the API is accessible by page allowing 10 objects at a time.  I originally had drop down menus allowing the user to choose what page they wanted to go to for the characters and planets.  I found this to be more cumbersome than it was worth, specifically with the mobile drop down menu. I decided to go with simple "prev" and "next" page buttons on each page instead. I hope to implement a search function in the future as well.

![Nav bar closed](https://github.com/timrusin/StarWarsForDummies/blob/main/images/mobile%20closed.jpg)![Nav bar open](https://github.com/timrusin/StarWarsForDummies/blob/main/images/mobile%20open.jpg)

As mentioned above, the application is very mobile friendly utilizing a hamburger drop down navigation bar.
 
## [Try the app out](https://starwarsfordummies.netlify.app/)

## Moving forward:
- Utilization of all of the API's data (species, starships, vehicles)
- Interconnecting links within the pages to make the app more functional and enjoyable
- Implementing star wars fonts, more theming 
- Adding a search function for any data within the API
- Gathering images for everything and utilizing a switch statement to sync photos to the data
 
## API documentation link:
https://swapi.dev/documentation

# Cedit:
[starting point for home screen crawl](https://www.youtube.com/watch?v=kHrV2ZHzF-0)

 

