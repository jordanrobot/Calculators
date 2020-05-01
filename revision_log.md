##2020 April 25
---

* Updated Jquery (1.11.1) and Jquery Mobile (1.4.5)
* Updated site to HTTPS


###2014-June-02
---

* Updated Jquery Mobile for all pages to version 1.4.2


###2014-Feb-25
---

* [Roller Bearing Lifetime](https://www.scenic-shop.com/Calculators/bearing_rolling_life.html)
    * Added calculator and formula page
* Updated Jquery Mobile to version 1.4.1
* Refactored calculation methods to utilize more maintainable javascript for the following:
    * Linepull Winch Calcs
    * Parallel Keys
    * Pulley Pressures
    * Helical Payout
    * Yoyo Payout
    * Max Unbraced Length
    * Resultant Force over a pulley
    * Capstan Holding Force
    * Shock-load Forces
    * Fleet Angle
    * D:d ratio
* [Yoyo Payout](https://www.scenic-shop.com/Calculators/drums_yoyopayout.html)
    - Added some columns to the formatting
* [Parallel Keys](https://www.scenic-shop.com/Calculators/keys.html)
    * Fixed a bug where a new shaft size would not reliably update the standard key sizes.


###2014-Feb-18
---

* [Drum: Max Unbraced Length](https://www.scenic-shop.com/Calculators/drums_unbraced_length.html)
    * Added realistic step values to input fields (e.g. "thickness" changes by 0.01" everytime the user uses an arrow key or scrolls the mouse while the field is active).
* Backend: reworked how this site's code is revisioned and synced to the web-server -- the goals are increased consistency, rigor, and a possible whole-sale release of the source-code at a later date.

###2014-Feb-06
---

* [Shockload Forces](https://www.scenic-shop.com/Calculators/shockload.html)
    * Added new calculation cases:
        * Wire rope shockloads
        * Rope shockloads (by percent elongation)
    * Falling distance units were changed to inches
    * Revised formulas page with new calculation methods

* [Yoyo Payout](https://www.scenic-shop.com/Calculators/drums_yoyopayout.html)
    * Fixed a calculation error.  Sorry!
    * Refactored code.

###2014-Feb-01
---

* [Parallel Keys](https://www.scenic-shop.com/Calculators/keys.html)
    * Added calculator, formula page, and image


###2014-Jan-29
---

* [Motions](https://www.scenic-shop.com/Calculators/motions.html)
    * Added calculator and formula page


###2014-Jan-21
---

* [HP/Force Speed](https://www.scenic-shop.com/Calculators/hp_force_speed.html)
    * Fixed bug when the calculator was set to "calculate for HP", in which the HP value would calculate with an inverted efficiency.
    * Renamed the "Power Range" slider's label.
* [Yoyo Winch Calcs](https://www.scenic-shop.com/Calculators/winch_yoyo.html)
    * Added calculator
    * Added [formula](http://scenic-shop.com/Calculators/docs/mdwiki.html#!winch_yoyo.md) page

###2014-Jan-20
---

* [Pulley Pressure](https://www.scenic-shop.com/Calculators/pulleys.html)
    * Renamed from Pulley Calcs
    * Fixed error where D:d ratio did not calculate when specifying a tread diameter
* [D:d Ratios](https://www.scenic-shop.com/Calculators/D-to-d.html)
    - Added seperate calculator with a strength reduction calculation for wire rope
    - Added formula page

###2014-Jan-19
---

* [Frustum](https://www.scenic-shop.com/Calculators/frustum_flatten.html)
    * Re-wrote math code
    * Created formula page
    * Added new diagrams
    * Re-formatted page


###2014-Jan-15
---

* [Pulley Calcs](https://www.scenic-shop.com/Calculators/pulleys.html)
    * Added calculator and formulas page
* [Frustum](https://www.scenic-shop.com/Calculators/frustum_flatten.html)
    * Collapsed into a single page, added a dropdown for selecting variables
    * Updated with new style navigation
    * Cleaned up code


###2014-Jan-14
---

* [Linepull Winch](https://www.scenic-shop.com/Calculators/winch_linepull.html)
    * Fixed bug where the Ratio and efficiency slider pop-ups were displaying at page-load.
    * Edited layout

* [HP/Force Speed](https://www.scenic-shop.com/Calculators/hp_force_speed.html)
    * Fixed bug where the HP and efficiency slider pop-ups were displaying at page-load.
    * Added a dropdown to allow calculation for HP from force and speed.
    * Added HP equation to formulas page.


###2014-Jan-09
---

* Updated all calculators to Jquery Mobile version 1.4
* [Piston Force & Speed](https://www.scenic-shop.com/Calculators/piston_force_speed.html)
    * added column formatting
* [ANSI Chain Calculator](https://www.scenic-shop.com/Calculators/chain_ansi.html)
    * added column formatting
    * added formulas page
* [Navigation](https://www.scenic-shop.com/Calculators/)
    * Added link to the index of formula pages

###2014-Jan-04
---

* [Unit Converter](https://www.scenic-shop.com/Calculators/unit_converter.html)
    - Added electronic conversions sections.

###2013-Dec-31
---

* [Shockload Forces](https://www.scenic-shop.com/Calculators/shockload.html)
    - Revised javascript formulas with error-checking, and more maintainable code in anticipation of future changes.
    - Added a formulas page
* [Plain Bearing: PV](https://www.scenic-shop.com/Calculators/bearing_plainPV.html)
    * Added a usage case for thrust applications as well as radial,
    * Added thrust case image and formula section.

###2013-Dec-28
---

* Revised [Disclaimer](https://www.scenic-shop.com/Calculators/disclaimer.html) language
* Added new grouped buttons on the bottom of each page, containing a link to the image, formulas, and disclaimer
* [Capstan Holding Force](https://www.scenic-shop.com/Calculators/capstan_holding_force.html)
    * Added formula page
    * Updated variable selection code
    * Added diagram
* [HP Force/Speed](https://www.scenic-shop.com/Calculators/hp_force_speed.html)
    - Fixed formula button placement errors
* [Resultant Force](https://www.scenic-shop.com/Calculators/resultant_force.html)
    * Added formula page
* Added diagrams to the Formula pages
* [Drum: Max Unbraced Length](https://www.scenic-shop.com/Calculators/drums_unbraced_length.html)
    * Added formula page


###2013-Dec-28
---

`Released`

* Added formula pages for the following calculators:
    * [Linepull Winch](https://www.scenic-shop.com/Calculators/winch_linepull.html)
    * [Piston Force & Speed](https://www.scenic-shop.com/Calculators/piston_force_speed.html)
    * [Drums: Yoyo Payout](https://www.scenic-shop.com/Calculators/drums_yoyopayout.html)
    * [HP Force/Speed](https://www.scenic-shop.com/Calculators/hp_force_speed.html)
* Added an index for the formula pages
* [Drums: Helical Payout](https://www.scenic-shop.com/Calculators/drums_helicalpayout.html) - Edited the formula page to make terms clearer.
* Moved [Plain Bearing: Radial PV](https://www.scenic-shop.com/Calculators/bearing_plainPV_radial.html) from "In Progress" to "Released"
* Added the following variable in [Piston Force & Speed](https://www.scenic-shop.com/Calculators/piston_force_speed.html)
    * Temperature
    * Atmospheric Pressure
    * Pressure Drop was changed from a % to a psi value
* Re-organized winch pages to individual pages, starting with [Linepull Winch](https://www.scenic-shop.com/Calculators/winch_linepull.html)
    - Added Diagram and Formula Links
* [HP/Force/Speed](https://www.scenic-shop.com/Calculators/hp_force_speed.html)
    - Removed seperate Force and Speed pages
    - Added a drop-down to select target variable
    - Rewrote functions to utilize variable drop-down


###2013-Dec-18
---

`Released`

* Added diagrams to the following calculators:
    * [Drums: Helical Payout](https://www.scenic-shop.com/Calculators/drums_helicalpayout.html)
    * [Drums: Yoyo Payout](https://www.scenic-shop.com/Calculators/drums_yoyopayout.html)
    * [Drums: Max Unbraced Length](https://www.scenic-shop.com/Calculators/drums_unbraced_length.html)
    * [Piston Force & Speed](https://www.scenic-shop.com/Calculators/piston_force_speed.html)


`In Progress`

* Added a [Plain Bearing: Radial PV](https://www.scenic-shop.com/Calculators/bearing_plainPV_radial.html) calculator, with diagram, and a link to the formulas and explanation page [Formulas](http://scenic-shop.com/Calculators/docs/mdwiki.html#!bearing_plainPV_radial.md)


###2013-Dec-16
---

`Released`

* Color coding and variable selection working for the following:
    * [Capstan](https://www.scenic-shop.com/Calculators/capstan_holding_force.html)
    * [Fleet Angle](https://www.scenic-shop.com/Calculators/fleet_angle.html)


* [Drums](https://www.scenic-shop.com/Calculators/): 
    * divided the three drum calculators into seperate pages:
    * [Drums: Helical Payout](https://www.scenic-shop.com/Calculators/drums_helicalpayout.html)
        * Fixed an error where the total payout result was halved.
    * [Drums: Yoyo Payout](https://www.scenic-shop.com/Calculators/drums_yoyopayout.html)
    * [Drums: Max Unbraced Length](https://www.scenic-shop.com/Calculators/drums_unbraced_length.html)


* [Navigation](https://www.scenic-shop.com/Calculators/)
    * Split Drum calculators into their own category

###2013-Dec-15
---

`Released`

* Did more work on color-coding, still needs some work.
* [Fleet Angle](https://www.scenic-shop.com/Calculators/fleet_angle.html): 
    * fixed the angle option

* [Capstan](https://www.scenic-shop.com/Calculators/capstan_holding_force.html): 
    * Added a dropdown to select the variable to calculate for.

###2013-Dec-08
---

`Released`

* Color-coded all calculated values and input values pink and green (respectively).
* [Fleet Angle](https://www.scenic-shop.com/Calculators/fleet_angle.html): 
    * Added a dropdown to select the calculated variable
    * Added an option to calculate for angle

`In Progress`

* [Motions](https://www.scenic-shop.com/Calculators/motions.html):
    * Collapsed &mu;Rolling and &mu;Friction into a single field.


###2013-Dec-04
---

`Released`

* [Calculator Index](https://www.scenic-shop.com/Calculators/): 
    * Renamed Revision Log section to "Misc.",
    * Added a link to the Scenic-Shop Blog,

* [Constants](https://www.scenic-shop.com/Calculators/constants.html):
    * Alphabetized list.
    * Changed page name to "Constants".
    * Added a whole lot more constants.

`In Progress`

* [Motions](https://www.scenic-shop.com/Calculators/motions.html):
    * Removed CWA forces calculations.
    * Added a "Power" section that calculates the required power per the given information.
    * Edited visual layout slightly to fit more information onto a screen.

###2013-Dec-03
---
`Released`

* Created this log file, and added a link to the navigation menu.
* Fixed problem where /readonly attributes were not being respected. Added the following line to each file as a fix:
```javascript
$(".calculated_values").prop("readonly",true);
```
* [ANSI Chain Calculator](https://www.scenic-shop.com/Calculators/chain_ansi.html)
    * Added missing units of measure.

* [Fleet Angle](https://www.scenic-shop.com/Calculators/fleet_angle.html):
    * Reorganized values to:
        * Angle
        * Offset
        * Distance

`In Progress`

* Removed extraneous calculator ideas from navigation menu
* [Bronze Bearings PV](https://www.scenic-shop.com/Calculators/bronze_PV.html): Added a placeholder link
* [Motions](https://www.scenic-shop.com/Calculators/motions.html): Renamed slider to "Motion Profile"
* [Motions](https://www.scenic-shop.com/Calculators/motions.html): Roughed in forces formulas


###2013-Dec-02
---
`In Progress`

* [Motion Calculator](https://www.scenic-shop.com/Calculators/motions.html): Completed initial motion formulas.

