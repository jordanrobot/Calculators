---
layout: default
title: Motions
nav_order:
---
[gimmick: math]()

Motions
===

Notes & Use
---

### Motions ###
___

Calculates for various motion-related values:

* time
* max velocity
* acceleration
* deceleration
* distance

Motion profiles are assumed to be trapezoidal in nature, with constant accel, decel, and max speed.

The following calculation order is observed...

1. Changing any value (except Time) will recalculate the Time value
2. The Accel & Decel values (f/s<sup>2</sup>) will remain constant unless the Accel/Decel Distance values are edited.
3. The Top Speed value will remain constant unless the Time value is edited.

### Forces ###
___

The "Forces" dropdown calculates the force required to move a load given the motion values determined above.  Several cases are provided:

* Horizontal moves, in which the load is moved without any sort of lift
* Counter-weight assist moves (CWA), in which the load is lifted via an equally loaded counterweight system.
* Dead Haul, Lift on Acceleration: in which the load is lifted without any means of counterweight.  Acceleration occurs while the load is ascending.
* Dead Haul, Lower on Acceleration: in which the load is lifted without any means of counterweight.  Acceleration occurs while the load is decending.

A friction coefficient input is provided as well.

### Power ###
___

The "Power" dropdown calculates an estimated power requirement based on the motion values and force values above.

Motion Equations
---

D = Total distance of move, *ft*
D<sub>a</sub> = Accel distance, *ft*
D<sub>d</sub> = Decel distance, *ft*

T = Total time of move, *sec*
T<sub>a</sub> = Accel time, *sec*
T<sub>d</sub> = Decel time, *sec*

a = Acceleration, *ft / sec<sup>2</sup>*
d = Deceleration, *ft / sec<sup>2</sup>*

v = Max speed, *ft per sec*

Accel Distance:
$$ D&#x005F;{a} = \frac {a \, T&#x005F;{a}^2} {2} $$

Decel Distance:
$$ D&#x005F;{d} = \frac {d \, T&#x005F;{d}^2} {2} $$

Total Time of move:
$$ T = \left( \frac {v}{a} \right) +
       \left( \frac {v}{d} \right) +
       \left( 
        \frac { D - \left( D&#x005F;{a} + D&#x005F;{d} \right)}
              {v}
       \right)
$$

Forces Equations
---

m = Mass of moved load, *lbm*
F<sub>a</sub> = Force required to accelerate, *lbf*
F<sub>d</sub> = Force required to decelerate, *lbf*
&mu; = Coefficient of friction, *unitless*

For Horizonal & CWA movement:
$$ F&#x005F;{a} = \frac {m}{32.2} \, a + (m \mu) $$
$$ F&#x005F;{d} = \frac {m}{32.2} \, d + (m \mu) $$

Lift on acceleration:
$$ F&#x005F;{a} = m + \left( \frac {m}{32.2} \, a \right) + (m \mu)$$
$$ F&#x005F;{d} = m - \left( \frac {m}{32.2} \, d \right) + (m \mu)$$

Lower on Acceleration:
$$ F&#x005F;{a} = m - \left( \frac {m}{32.2} \, a \right) + (m \mu)$$
$$ F&#x005F;{d} = m + \left( \frac {m}{32.2} \, d \right) + (m \mu)$$

Power Equations
---

P<sub>hp</sub> = power, *hp*
P<sub>kW</sub> = power, *kW*
&eta; = System efficiency, *percentage*

$$ F = \left|F&#x005F;{a}\right| \vee \left|F&#x005F;{d}\right| $$
$$ P&#x005F;{hp} = \frac {F \, v}{550 \eta} $$

$$ P&#x005F;{kW} = 0.7457 P&#x005F;{hp} $$