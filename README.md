# Star Wars for Dummies
A SPA utilizing a Star Wars API allowing users to learn a bit more about star wars characters, planets, and movies
 
## Project Description:
After a lot of thought and some searching on-line, I think I have come up with a unique
idea for my SPA React app.
 
I would like to utilize the Star Wars public API called "SWAPI."
https://swapi.dev/
 
I have looked through it a bit and have done some initial testing in the browser to find it operational.  I plan on doing some further testing with fetch and json in vscode shortly after the delivery of this proposal.
 
The application will serve as an encyclopedia of sorts to pull up character, planet, and movie info.  There is quite a bit of data including things like weapons characters have wielded, vehicles they have been seen in, ships they have flown, etc. etc.. However, seeing how I am still trenching through the basics of React, I plan to start with simply the Characters, Planets, and Movies data. 
 
You will be able to browse key characters from the films, different planets, and all seven of the movies to connect everything together.

## Wireframe of App
![Wireframe](https://github.com/timrusin/StarWarsForDummies/blob/main/StarWarsForDumies_wireframe.jpg)

I plan on having a home screen with some fun star wars styling and the infamous scrolling text giving a brief introduction of what the app is all about. You would then be able to click on the character, planet, and movies links to browse items within those dashboards and then click to each item's individual page.  There will also be links on each of these tying the three of these all together too. For example, if you are on Luke Skywalker's profile you can also click to visit his home planet's profile, or what movies he has appeared in. Like I said, there is a lot of data to play with, and if I find myself getting through the basics of this more quickly than I am expecting, then I will
tie in some more of the data to make it more feature rich for the use.

## React Heirarchy approach
![Heirarchy](https://github.com/timrusin/StarWarsForDummies/blob/main/StarWarsForDummies_ReactHeiarchy.jpg)
 
## MVP:
MVP would accomplish the following:
- Home screen displaying scrolling text and nav bar with all nav buttons functioning
- Nav buttons should take the user to each of the items dashboard pages (character, planet, movies)
- Each item within each of those dashboards should link to each item's individual info page
- Links to home planet and movie appearances from character pages should take the user to those other elements
 
## User stories:
- The user should be able to load the page with no errors
- The user should understand the purpose of the app via the home screen text scroll
- The user should be able to click on any of the options in the nav bar with no errors
- The user should be able to browse names of characters, planets, and movies on their respective dashboards.
- The user should be able to click on any dashboard item to have it pull up it's own info page
- The user should also be able to click on subsidiary links within each item to link to other information in the app.
 
## Stretch Goals:
- The most immediate stretch goal would be implementing a simple back button to take the user to the most recent component they were on as I could see it getting really annoying having to backtrack manually when exploring the data
- More categories like weapons, starships, species, etc...
 
## API documentation link:
https://swapi.dev/documentation
 

