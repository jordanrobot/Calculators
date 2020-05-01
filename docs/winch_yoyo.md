---
layout: default
title: Yoyo Winch Calcs
nav_order:
---
[gimmick: math]()

Yoyo Winch Calcs
===

Notes & Usage
---

Calculates a simple winch arragement in which there exists:

* A motor
* A reduction stage
* A yoyo (or pilewind) drum.

The behavior of this system is such that at any time during the machine's operation, the linepull velocity and force are changing depending on the diameter of the drum.  E.g. as the motor drives at a constant speed, the drum pulls in cable.  As the machine takes up cable, the effective diameter of the drum increases, with the following effects:

* The line speed will increase when turned a consistent rpm, and
* The force exibited on the line will decrease.

Conversly, the opposite effects will occur as the machine lets out cable.

As such, the values provided in the Force and Speed input boxes represent the two extreme states of the drum's diameter.  It is important to note that while in use, the force and velocity will vacilate between those values depending on the drum's current diameter.

Calculator Methodology
---

This calculator will recalculate if any of the values are changed.  There are two sets of calculations performed depending on the values that are changed.  Each set of calculations are based on the formulas provided in the Calculation section.

1. When the forces or velocities are changed, the ratio is re-calculated, then applied to the other speed and force inputs,
2. When any other variable is changed, the velocity and force are both re-calculated.

Terms
---

P = Motor power, *horsepower*

n = Motor Speed, *rotations per minute*

&eta; = efficiency, *percent*

r   = ratio

D = Diameter of the drum, *inches*

v = velocity of the line, *feet per second*

F = force on the line, *pounds force*

Equations
---

The following calculations are used regardless of the drum's current diameter...

$$ F = \frac {P \, 5252} {0.5 \, D \, n} n \, \eta $$

$$ v = \frac {\pi \, n \, D}{60 \, r} $$ 

When calculating the ratio as the Force or Velocity variables are changed, rearrange as follows:

$$ r = \frac {\pi \, n \, D}{60 \, v} $$ 

Sources
---
