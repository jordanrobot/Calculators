---
---
[gimmick: math]()

Rolling Bearing Life
===

Notes & Use
---

Calculates design values related to lifetime for rolling element bearings when the following is true:

* The bearing operation is *not* characterized as an occilating motion; the spinning object tends to make full rotations at a roughly constant speed.
* The RPM shall be approximated as an average RPM over the lifetime of the bearing.
*  The radial and thrust loads have been converted to an equivalent load as per the bearing manufacturer's reccomendations.

This calculator does not calculate for:

* Equivalent load
* Tapered roller bearings.


Terms
---

C = Basic dynamic load rating, *pounds force* or *Newtons*

C<sub>0</sub> = Basic static load rating, *pounds force* or *Newtons*

L = Load on bearing, *pounds force* or *Newtons*

S<sub>0</sub> = Safety factor for static loads, *unitless*

C<sub>x</sub> = Rated lifetime hours, *revolutions*

n = Average *rotations per minute* of bearing at load *L*.

r = *Revolutions*

h = Operating *hours*

x = bearing type factor, from table:

|Type|factor|
|------|------|
|Ball Bearing|3|
|Roller Bearing|(10 / 3)|

a<sub>1</sub> = Rotation factor, from table:

|Rotating member|factor|
|------|------|
|Inner Ring|1|
|Outer Ring|1.2|

a<sub>2</sub> = Reliability factor, from table:

|Reliability|factor|
|------|------|
|90%|1|
|95%|0.62|
|96%|0.53|
|97%|0.44|
|98%|0.33|
|99%|0.21|

a<sub>3</sub> = Application factor, generally 1.0.

* a<sub>3</sub> = 1.0 under ideal lubrication condition, when rolling element and track surface are completely isolated by oil film and surface failure can be ignored.
* a<sub>3</sub> &lt; 1 for poor lubrication conditions (such as low viscocity, minimal or dirty lubrication),  extremely slow speeds, shock loading, vibration, or extreme temperatures.  Value should not fall below *0.5*.
* a<sub>3</sub> &gt; 1 for supremely excellent conditions.

Equations:
---

####Calculate for "Lifetime":

---

Safety factor:
$$ S&#x005F;{0} = \frac { C&#x005F;{0} } {L} $$

Revolutions:
$$ r = \left( \frac {C}{ L \, a&#x005F;{1}} \right)^x
    \, C&#x005F;{x} \, a&#x005F;{2} \, a&#x005F;{3}
$$

Hours:
$$ h = \frac {r}{60 \, n} $$


####Calculate for "Bearing Rating":

---

Basic static load:
$$ C&#x005F;{0} = S&#x005F;{0} \, L $$

Revolutions:
$$ r = 60 \, h \, n $$

Basic dynamic load:

$$ C = L \, a&#x005F;{1} 
            \left(
                \frac
                    {r}
                    {C&#x005F;{x} \, a&#x005F;{2} \, a&#x005F;{3}}
            \right)^ \frac{1}{x}
$$

####Calculate for "Load":

---

Safety factor:
$$ S&#x005F;{0} = \frac { C&#x005F;{0} } {L} $$

Revolutions:
$$ r = 60 \,h \, n $$

Load:
$$ L = \frac {C}
    { a&#x005F;{1} \,
        \left( \frac
            {r}
            {C&#x005F;{x} \, a&#x005F;{2} \, a&#x005F;{3}}
        \right)^ \frac{1}{x}
}
$$

#### Calculate for "RPM":

---

Safety factor:
$$ S&#x005F;{0} = \frac { C&#x005F;{0} } {L} $$

Revolutions:
$$ r = \left( \frac {C} {L \, a&#x005F;{1}}\right)^x \,
    C&#x005F;{x} \, a&#x005F;{2} \, a&#x005F;{3}
$$

RPM:
$$ n = \frac{r}{60 \, h} $$


Sources
---

* Robert L. Mott, *[Machine Elements in Mechanical Design](http://www.amazon.com/Machine-Elements-Mechanical-Design-Edition/dp/0130618853/ref=sr_1_1?ie=UTF8&qid=1388274723&sr=8-1&keywords=mechanical+elements+in+machine+design)*, 4th ed. pp. 606-616, 2003.
* Nose Seiko Co., *[Bearing Life and Load Rating](http://www.nose-seiko.co.jp/en/image/pdf/e01.pdf)*
