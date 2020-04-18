[gimmick: math]()

Shockload Force
===

Notes & Use
---

Calculates the force subjected to a body during a shockload event for the following cases:

* Distance fallen, and stopping distance
* Distance fallen, and wire rope type and diameter
* Distance fallen, and rope (percentage elongation)


by Distance
---

#### Terms:

|Variable|Description|Unit|
|-----|-----|-----|
|m | mass| *pounds*|
|l<sub>fall</sub> | Falling distance | *in*|
|d | Stopping distance | *in*|
|F<sub>shock</sub> | Force due to shockload| *lbf*|

#### Equation

$$ F&#x005F;{shock} = m \, \left( \frac {l&#x005F;{fall}}{d} + 1 \right) $$

___

Wire Rope
---

#### Terms:

|Variable|Description|Unit|
|-----|-----|-----|
|m | mass| *pounds*|
|l<sub>fall</sub> | Falling distance| *in*|
|d<sub>rope</sub> | Diameter of wire rope| *in*|
|l<sub>rope</sub> | Length of wire rope| *ft*|
|x | Wire rope area factor| *unitless*|
|E | 15,000,000 |*psi*|
|F<sub>shock</sub> | Force due to shockload| *lbf*|

#### Equation

$$ F&#x005F;{shock} = \left( 
    1 + \sqrt {
        1+ \frac
        { 2 \, l&#x005F;{fall} \, E \, x \, d&#x005F;{rope}^2}
        { 12 \, m \, l&#x005F;{rope} }
}
\right) $$

#### Wire Rope Area Factors ####

|Type|Factor|
|------|------|
|7x7 GAC|0.471|
|7x19 GAC|0.472|
|6x19W, fiber core|0.416|
|6x19W, IWRC|0.482|
|6x36WS, fiber core|0.419|
|6x36WS, IWRC|0.485|
|8x19W, fiber core|0.366|
|8x19W, IWRC|0.497|

___

Percent Rope Elongation
---

#### Terms:

|Variable|Description|Unit|
|-----|-----|-----|
|m | mass| *pounds*|
|l<sub>fall</sub> | Falling distance | *in*|
|l<sub>rope</sub> | length of rope | *ft*|
|F<sub>rope</sub> | force required to acheive manufacturer's stated rope stretch | *lbf*|
|y | elongation | *percentage*|
|F<sub>shock</sub> | Force due to shockload| *lbf*|

#### Equations

$$ a =  \frac {0.005 \, y \, l&#x005F;{rope} }{F&#x005F;{rope}} $$

$$ b = -2 \, a \, m $$

$$ c = \frac {-m \, l&#x005F;{fall}}{12} $$

$$ F&#x005F;{shock} = \left( 
    \frac
    { -b + \sqrt 
        {b^2 - (4 \, a \, c)}}
    {4 \, a}
\right) $$

___

Sources
---

[Understanding shock Loads](http://tdt.usitt.org/GetPDF.aspx?PDF=49-2shockloads). Delbert Hall. TD&T, Vol. 49 No. 2 (spring 2013)
