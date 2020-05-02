---
layout: default
title: Helical Drum Cable Payout
nav_order: 
---

[gimmick: math]()

Payout of Helical Drums
===

Notes & Use
---

Calculates the payout (in feet), and total number of wraps for a grooved helical drum.

* The drum must be of constant pitch diameter
* This calculator will calculate for both bitter-end rigging and operating-loop rigging.

Figure
---

![](../image/drum_helical_payout.jpg)

Terms
---

l = Groove lead, *inches*

D<sub>pitch</sub> = Pitch diameter of drum, *inches*

w = Width of drum's grooved surface, *inches*

n<sub>lines</sub> = number of lines:

* count each operating cable loop as 1 line.
* count each bitter-end line as 1 line.

g<sub>safe</sub> = safety wraps (per line)

* use total number of safety wraps for a single loop (E.g. three safety wraps at ends of cable is a total of 6 safety wraps for 1 operating loop.)
* Bitter-end lines such as dead hauls are a little more straightforward

g<sub>total</sub> = number of total grooves on drum

g<sub>usable</sub> = number of usable grooves, does not include:

* safety wraps per line
* wasted wraps per line (usually a half-wrap per line)
* unusable half-groove at both ends of drum

L = Payout, length of cable that will fit onto the drum, per line, *feet*

Equations
---

Calculate the total number of wraps:
$$ g&#x005F;{total} = \frac {w} {l} $$

Calculate the usuable wraps:
$$ g&#x005F;{usable} = g&#x005F;{total} - g&#x005F;{safe} n_{lines} - \frac {n&#x005F;{lines}}{2} - 1 $$

Return the payout...
$$ L = \frac {\pi D&#x005F;{pitch} g&#x005F;{usable}} {n&#x005F;{lines}} \frac {1}{12} $$

Sources
---

