[gimmick: math]()

Parallel Keys
===

Notes & Use
---

Calculates for the selection and design of parallel keys in shafts.  Only compressive and shear stresses are taken into account. This calculator does not take into consideration:

* tolerances related to proper fits in a keyway
* localized stresses
* strength of the shaft and/or hub relative to the key material
* abrasion and fatigue resistance
* stresses caused by key rolling or cyclic impact loads

All key depths are assumed to be (0.5 * key height).

The calculator selects a standard key size (height &times; width) based on the key shape selected, and the shaft size.  Note these key sizes per shaft diameter are per ANSI B17.1-1967 (R2003)

Figure
---

![](../image/keys.jpg)

Terms
---

d = Shaft diameter, *inches*
h = key height, *inches*
w = key width, *inches*
l = key length, *inches*
S = Safety factor, *unitless*
F<sub>y</sub> = Material yield strength, *psi*
T = torque thru shaft, *in &dot; lbf*

A<sub>s</sub> = Shear area, *square inches*
A<sub>c</sub> = Compression area, *square inches*

&sigma;<sub>s</sub> = Actual shear stress, *psi*
&sigma;<sub>c</sub> = Actual compression stress, *psi*

&tau;<sub>s</sub> = Allowable shear stress, *psi*
&tau;<sub>c</sub> = Actual compression stress, *psi*

Equations
---

Shear area:
$$ A&#x005F;{s} = w \times l $$

Compression area:
$$ A&#x005F;{c} = \frac {h \times l} {2} $$

Actual shear stress:
$$ \sigma&#x005F;{s} = \frac {2 T}{d \, l \, w} $$

Actual compressions stress:
$$ \sigma&#x005F;{c} = \frac {4 T}{d \, l \, h} $$

Allowable shear stress:
$$ \tau&#x005F;{s} = \frac {0.5 F&#x005F;{y}}{S} $$

Allowable compression stress:
$$ \tau&#x005F;{c} = \frac {F&#x005F;{y}}{S} $$


Pass/Fail Test
---
&sigma;<sub>s</sub> and &sigma;<sub>c</sub> are compared to the respective allowable values:

* Pass = actual < allowable
* Fail = actual &ge; allowable

Material Yeild Strengths
---

The design values provided by the drop-down material box are culled from various sources. A full table of those values is as follows:

|Material|F<sub>y</sub>|
|------|------|
||*psi*|
|C1018 Steel|53,000|
|C1020 Steel|51,000|
|C1045 Steel|71,000|
|C1090 Spring Steel|78,300|
|A36 Steel|36,000|
|316 SS|30,000|


Sources
---

* Oberg, Erik, et al., *[The Machinery's Handbook](http://www.amazon.com/Machinerys-Handbook-Toolbox-Edition-Oberg/dp/0831128003/ref=sr_1_1?ie=UTF8&qid=1391291948&sr=8-1&keywords=The+Machinery%27s+Handbook%2C+28th+ed.)*, 28th ed., Industrial Press, 2008, pp. 2385.

* Mott, Robert L.  *[Machine Elements in Mechanical Design](http://www.amazon.com/Machine-Elements-Mechanical-Design-Edition/dp/0130618853/ref=sr_1_1?ie=UTF8&qid=1388274723&sr=8-1&keywords=mechanical+elements+in+machine+design)*, 4th ed., Prentice Hall, 2003, pp. 498-500.
