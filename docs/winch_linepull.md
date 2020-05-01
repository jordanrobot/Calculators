---
layout: default
title: Winch Linepull
nav_order:
---
[gimmick: math]()

Linepull Winch Calcs
===

Notes & Usage
---

Calculates a simple winch arragement in which there exists:

* A motor
* A reduction stage
* A drum or sprocket stage with constant diameter

This calculator will recalculate if any of the values are changed.  There are three sets of calculations performed depending on the values that are changed.  Each set of calculations are based on the formulas provided in the Calculation section.

1. When the force is changed, the speed is re-calculated
2. When the velocity is changed, the force is re-calculated
3. When any other variable is changed, the velocity and force are both re-calculated.

Terms
---

P = Motor power, *horsepower*

n = Motor Speed, *rotations per minute*

&eta; = efficiency, *percent*

r   = ratio

D   = Diameter of drum, *inches*

v   = velocity of line, *feet per second*

F   = force of line, *pounds force*

Equations
---

$$ v = \frac {\pi n D}{60r} $$ 

$$ F = 
    \frac {5252P} {0.5 Dn} \eta r
$$

Sources
---
