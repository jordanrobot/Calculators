---
layout: default
title: Frustum
nav_order:
---
[gimmick: math]()

Conical Frustum Flattener
===

Notes & Use
---

This calculator calculates the flat pattern for a right-angle conical frustum.


Figure
---

![](../image/frustum_1.jpg)
![](../image/frustum_2.jpg)


Terms
---

r' = Top radius of conical frustum, units of *length*

R = Bottom radius of conical frustum, units of *length*

h = height of conical frustum, units of *length*

&phi; = included angle of conical frustum, *radians*

s' = Flattened small radius, units of *length*

S = Flattened large radius, units of *length*

h' = Slant height, units of *length*

&theta; = Flattened angle, *radians*

l = Arc length of radius S, units of *length*

l' = Chord length of radius S, units of *length*

Equations
---

Inclided angle of conical frustum...
$$ \phi = \arctan \left( \frac {R - r'}{h} \right) $$

Large flattened radius...
$$ S = \frac {R}{\sin \, \phi} $$

Slant height...
$$ h' = h \sec \, \phi $$

Small flattened radius...
$$ s' = S - h' $$

Flattened angle...
$$ \theta = 2 \pi \sin \, \phi $$

Arc Length (of radius S)...
$$ l = S \, \theta $$

Chord Length (of radius S)...
$$ l' = 2 \, S \sin {\frac {\theta}{2}} $$
