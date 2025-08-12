---
title: "Engineering Tools"
date: 2025-06-20
draft: false
tags: ["engineering"]
---

# Literature/Resources
[Marks Standard Handbook](https://273015.xyz/Eugene%20A.%20Avallone%2C%20Theodore%20Baumeister%2C%20Ali%20Sadegh%20-%20Marks%20Standard%20Handbook%20for%20Mechanical%20Engineers-McGraw-Hill%20Professional%20(2006).pdf) - Marks handbook

## MoM/Structural
[Roark's](https://jackson.engr.tamu.edu/wp-content/uploads/sites/229/2023/03/Roarks-formulas-for-stress-and-strain.pdf) - Formulas for stress/strain

[Machinery's Handbook](https://273015.xyz/Franklin%20D%20Jones%2C%20Henry%20H%20Ryffel%2C%20Erik%20Oberg%2C%20Christopher%20J%20McCauley%2C%20Ricardo%20M%20Heald%20-%20Machinery's%20Handbook-Industrial%20Press%2C%20Inc.%20(2004).pdf) - Manufacturing guidance

[Intermediate Solid Mechanics](https://273015.xyz/Marko%20V.%20Lubarda%2C%20Vlado%20A.%20Lubarda%20-%20Intermediate%20Solid%20Mechanics%20(2020%2C%20Cambridge%20University%20Press)%20-%20libgen.lc.pdf) - Advanced solid mechanics

## Fluids & Systems
[Fluids, White](https://273015.xyz/Fluid%20Mechanics%20(9th%20Edition)%20(Frank%20M.%20White%2C%20Henry%20Xue)%20(Z-Library).pdf) - Fluid mechanics

[Modern Compressible Flow, Anderson](https://273015.xyz/Modern%20Compressible%20Flow%20With%20Historical%20Perspective%20(John%20D.%20Anderson)%20(Z-Library).pdf) - Compressible flow

## Propulsion
[Rocket Propulsion Elements, Sutton](https://273015.xyz/George%20P.%20Sutton%2C%20Oscar%20Biblarz%20-%20Rocket%20Propulsion%20Elements-Wiley%20(2016).pdf) - Intro to rocket propulsion

[Design of Liquid Propellant Rocket Engines, Huzel & Huang](https://273015.xyz/HuzelHuang.pdf) - Advanced rocket propulsion

[Space Propulsion Analysis & Design](https://273015.xyz/Space%20Propulsion%20Analysis%20and%20Design.pdf) - More advanced rocket prop

[Rao nozzle design](https://rrs.org/2023/01/28/making-correct-parabolic-nozzles/)

[Liquid film cooling](https://apps.dtic.mil/sti/pdfs/ADA234288.pdf)

[Gasket design guide](https://www.usseal.com/Grafoil/What-is-Grafoil.pdf)

### NTRS
[Engine heat transfer](https://ntrs.nasa.gov/api/citations/19940019998/downloads/19940019998.pdf)

[Engine material selection](https://ntrs.nasa.gov/api/citations/20160008869/downloads/20160008869.pdf)

[Film cooling](https://ntrs.nasa.gov/api/citations/19930085379/downloads/19930085379.pdf)

## YouTube Videos

[Engine cycles](https://www.youtube.com/watch?v=Owji-ukVt9M)

[Engine ignition](https://www.youtube.com/watch?v=bAUVCn_jw5I)

[Engine cooling](https://www.youtube.com/watch?v=he_BL6Q5u1Y)

# O-ring seals
See parker o-ring calculator and handbook links on blog homepage

## Compression
See handbook's compression values for the durometer, then use those values to calculate clamp force of the bolts you're using. This is very approximate since nut factor should be determined empirically for the specific application. The number of turns method (calculating strain/stress/force from deflection) is much more accurate. 

$$
F = \frac{T}{K d}
$$
$$
\begin{aligned}
\text{where } & F = \text{clamp force (axial load)} \\
              & T = \text{applied torque} \\
              & K = \text{nut factor (dimensionless)} \\
              & d = \text{nominal bolt diameter}
\end{aligned}
$$

Calculator with U.S. units:
<label for="torque">Torque (T) in ft·lb:</label>
<input type="number" id="torque" step="any" placeholder="e.g., 75"><br>

<label for="nutFactor">Nut Factor (K):</label>
<input type="number" id="nutFactor" step="any" placeholder="e.g., 0.2"><br>

<label for="diameter">Bolt Diameter (d) in inches:</label>
<input type="number" id="diameter" step="any" placeholder="e.g., 0.5"><br><br>

<button class="calc-button" onclick="calculateClampForce()">Calculate Clamp Force</button>

<p id="result"></p>

<script>
function calculateClampForce() {
  const T = parseFloat(document.getElementById('torque').value);
  const K = parseFloat(document.getElementById('nutFactor').value);
  const d = parseFloat(document.getElementById('diameter').value);

  if (isNaN(T) || isNaN(K) || isNaN(d) || K === 0 || d === 0) {
    document.getElementById('result').innerText = "Please enter valid, non-zero values.";
    return;
  }

  const F = (T * 12) / (K * d); // Convert ft·lb to in·lb by multiplying by 12
  document.getElementById('result').innerText = `Clamp Force (F): ${F.toFixed(2)} lbf`;
}
</script>

