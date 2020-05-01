---
layout: default
title: Pullies
nav_order:
---
[gimmick: math]()

Pulley Pressures
===

Notes & Use
---

Calculates:

* D:d ratios for given pulley and cable sizes
* Tread pressure
    - Pressure exerted on the groove by the load
    - Wrap angle is taken into account, see image
    - A round cable is assumed
    - A properly-sized round groove is assumed, the nominal groove diameter is approximately:
$$ D&#x005F;{groove} = 1.06 \times D&#x005F;{cable} $$
    - Note that the tread pressure as depicted in the figure below is not technically accurate, but more illustrative in nature.  The tread pressure is actually calculated as the force acting on the cross-sectional midplane of the sheave such that:
$$ \frac {Force} {Diameter&#x005F;{cable} \times Diameter&#x005F;{tread}} $$

* Bore pressure
    - Pressure exerted on the shaft bore by the load
    - Note that the bore pressure as depicted in the figure below is not technically accurate, but more illustrative in nature. The bore pressure is actually calculated as the force acting on the cross-sectional midplane of the bore such that: $$ \frac {Force} {width&#x005F;{bore} \times Diameter&#x005F;{bore}} $$

Figure
---

![](../image/pulleys.jpg)

Terms
---

L = Load, *pounds force*

D<sub>tread</sub> = Tread diameter, *inches*

D<sub>cable</sub> = Cable diameter, *inches*

D<sub>bore</sub> = Bore diameter, *inches*

w = width at bore, *inches*

&phi; = angle of wrap around the sheave, *degrees*.
Where:

* &phi; &ge; 0&deg;
* &phi; < 180&deg;

Equations
---

Pitch Diameter, *inches*:
$$ D&#x005F;{pitch} = D&#x005F;{tread} + D&#x005F;{cable}$$

D:d ratio, unitless:
$$ D:d = \frac {D&#x005F;{pitch}} {D&#x005F;{cable}} $$

Calculate the resultant force on the sheave, *lbf*:

$$ F&#x005F;{resultant} = 2 L \, cos \, \left( \frac {180 - \phi}{2} \right) $$

Tread pressure, *psi*:

$$ P&#x005F;{tread} = \frac {F&#x005F;{resultant}}{D&#x005F;{tread} D&#x005F;{cable}} $$

Bore pressure, *psi*:

$$ P&#x005F;{bore} = \frac {F&#x005F;{resultant}}{w \, D&#x005F;{bore}} $$

Sources
---

[Nylatron Tech Report](http://www.hhspecialties.com/TR1%2011-04.pdf). H&H Specialties, Inc., 2004.

[Stage Rigging Handbook](http://www.amazon.com/Stage-Rigging-Handbook-Third-Edition/dp/0809327414/ref=sr_1_1?ie=UTF8&qid=1389850373&sr=8-1&keywords=stage+rigging+handbook). Jay O. Glerum, 23rd ed, pp 12-13.