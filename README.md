# Skirmish

A real-time battle simulator, developed in JS.

#### Resources

These materials have been a massive help to me during development.

- Daniel Schiffman's [The nature of code](https://natureofcode.com/)
- Robert Nystrom's [Game programming patterns](https://gameprogrammingpatterns.com/)
- Gablaxian's [super-js-adventure](https://gablaxian.com/articles/creating-a-game-with-javascript/introduction) and associated [repo](https://github.com/gablaxian/super-js-adventure)
- Ben Sizer's article on [game AI](https://www.gamedev.net/tutorials/programming/artificial-intelligence/the-total-beginners-guide-to-game-ai-r4942/)
- Darshna Rekha's article on [doubly linked lists](https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d)
- https://www.color-name.com/

#### Change log

*01/12/21*
- Configured webpack
- Added basic unit and platoon classes, and vector class
- Units have basic patrol and rest behaviours

*02/12/21*
- Configured to deploy direct to github pages

*03/12/21*
- Unit animation and graphic updated
- Added multiple engine classes; initialise, input, map
- Added colour scheme data

*05/12/21*
- Grid spatial partition added, linked lists added

*10/12/21*
- Formations added for platoons
- Overlay added for unit and platoon totals
- Data and render methods separated in game.js
- Entities can sense other entities within their own and neighbouring cells; can only react to entities within sight
- Units can form platoons if they sight a friendly unit
- Platoons control movement of their units, units flock when moving as part of platoon
- Linked list and vector utility classes updated with more methods
- Retro font added
- Gameplay can be paused by pressing 'p'.
