## Down Events presentation

* Introduction to Events (and eventlisteners)
* Note about JavaScript vs jQuery
* Events + HTML elements (what can have an eventlistener)
* Basic button example
* Event types
  * keydown, keyup, mousedown, mouseup (mouseenter, mouseleave, onblur, onfocus)



Initial spur question
The team name appears when you tap your finger down, instead of when you pick your finger up off the screen. This is the first time coming across something like this, so I was wondering if it truly is a "down event?"
There is no way to cancel the team name once you bring it up, so I was thinking it might be a violation of WCAG 2.1 criterion 2.5.2 https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html.
Would appreciate any thoughts you have! 

This is actually a :hover effect in css that they placed on the parent list item of each logo. I took a look through their javascript because there is a “mousedown” event which was my first guess but it is hover. They have css that increases the img size on only :hover, and displays the team’s name as well. The reason that seems to happen on “down” for mobile is that phones handle down and hover as the same event usually.

With that in mind, then, would you say that it doesn’t violate 2.5.2?
 
https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html

Reading through the SC I don’t know if I have a solid yes or no for this. My thoughts are that this is an ok use of a down-event as described in the section “Down-event” in the success criteria. If the name appears on an up-event it will trigger the page traversal and load a new page. So the down-event is the only way to be able to see this in action in its current state. It is functioning as almost an enhancement for the page traversal where on down you see the team’s name and the user can slide off that link to cancel going to that page after seeing the team name. It is a really weird use case if you ask me, but it is working in this manner currently.  I would probably argue also that it is a pretty unnecessary action, and hiding the name of the team isn’t a great idea however they are fading the opacity so the text is still available to screen readers. Maybe it is more of a concern for cognitive diverse users where the sudden appearance of the name and logo size change would be jarring when trying to traverse pages?

Sources:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events