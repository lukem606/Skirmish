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

_01/12/21_

- Configured webpack
- Added basic unit and platoon classes, and vector class
- Units have basic patrol and rest behaviours

_02/12/21_

- Configured to deploy direct to github pages

_03/12/21_

- Unit animation and graphic updated
- Added multiple engine classes; initialise, input, map
- Added colour scheme data

_05/12/21_

- Grid spatial partition added, linked lists added

_10/12/21_

- Formations added for platoons
- Overlay added for unit and platoon totals
- Data and render methods separated in game.js
- Entities can sense other entities within their own and neighbouring cells; can only react to entities within sight
- Units can form platoons if they sight a friendly unit
- Platoons control movement of their units, units flock when moving as part of platoon
- Linked list and vector utility classes updated with more methods
- Retro font added
- Gameplay can be paused by pressing 'p'.

_14/12/21_

- Restructuring of project. Global lists for platoons and units, co-ordinate with grid cell lists.
- Improved platoon movement and flocking.
- Creating platoons from 2 joined units now stable.

_25/12/21_

- Fixed bug in unit detection of units in platoons (for joining platoons)
- Ballistics class written
- Units detect enemies and enter 'combat' behaviour
- Units seek enemy if they are not within attack range
- Units attack in-range enemies, creating instances of Ballistic class
- Ballistic moves in straight line towards target
- TODO: implement ballistics collisions
  - Get cell at ballistic current position and future position
  - Get all units in cells
  - Filter by distance, then dot product of direction vectors
    - Direction of velocity, then direction between two entities

_8/1/22_

- Implemented ballistics collisions
- Units render gray when health is 0 or less
- TODO:
  - Implement unit death properly
    - Dead units should no longer perform any activity
    - Dead units should be removed from platoons
    - Units totals should be updated
    - Aggressor unit's target should be updated
