---
title: "Engineering Tools"
date: 2025-06-20
draft: false
tags: ["engineering"]
---

# Literature/Resources
## MoM/Structural
[Roark's](https://jackson.engr.tamu.edu/wp-content/uploads/sites/229/2023/03/Roarks-formulas-for-stress-and-strain.pdf) - Formulas for stress/strain

## Fluid Systems


## Propulsion
Rocket Propulsion Elements, Sutton
Design of Liquid Propellant Rocket Engines, Huzel & Huang

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
See handbook's compression values for the durometer, then use those values to calculate clamp force of the bolts you're using, using equation from https://www.engineersedge.com/calculators/torque_calc.htm

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

# Cavitating Venturis
[[Cavitating Venturi - FlowMaxx Engineering]]

[[Cavitating Venturi Script]]


# Fluids Fittings
Swagelok
- Good and swivels, but heavy and expensive

AN
- Good cheap and swivels, used in industry a lot

NPT
- Requires thread sealant
- Twisting sucks for tight spaces

