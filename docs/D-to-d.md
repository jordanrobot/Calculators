---
layout: default
title: D:d Ratio
nav_order: 5
---
[gimmick: math]()

D:d Ratio
===

Notes & Use
---

Calculates:

* D:d ratios for given pulley and cable sizes
* Adjusted capacity of wire rope due to D:d bend
    - Note: that at a D:d ratio of 10 and less, permanent distortions of the rope will occur. (This is a general rule of thumb, different construction ropes will vary.)

Figure
---

![](../image/pulleys.jpg)

Terms
---


D<sub>tread</sub> = Tread diameter, *inches*

D<sub>cable</sub> = Cable diameter, *inches*


Equations
---

Pitch Diameter, *inches*:
$$ D&#x005F;{pitch} = D&#x005F;{tread} + D&#x005F;{cable}$$

D:d ratio, unitless:
$$ D:d = \frac {D&#x005F;{pitch}} {D&#x005F;{cable}} $$

Calculate the adjusted tensile strength of wire rope, *percentage*:

$$ F&#x005F;{T-adjusted} = 1 - \frac {0.5}{\sqrt{D:d}} $$

Sources
---

[Wire Rope](http://catalog.mazzellalifting.com/Indexes/WireRope/Pages133134.aspx). Mazzella Lifting Technologies, pp. 133-134.

[Steel Rope Technical Information](http://www.bridon.com/x/downloads/steel_technical.pdf). Bridon International Ltd, pp 34.