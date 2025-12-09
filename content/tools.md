---
title: "Engineering Tools"
date: 2025-06-20
draft: false
tags: ["engineering"]
TocOpen: true
showToc: false
---
## Course Notes
[https://kyleadler.com/posts/course-notes/](https://kyleadler.com/posts/course-notes/)

## General
[Marks Standard Handbook](https://273015.xyz/Eugene%20A.%20Avallone%2C%20Theodore%20Baumeister%2C%20Ali%20Sadegh%20-%20Marks%20Standard%20Handbook%20for%20Mechanical%20Engineers-McGraw-Hill%20Professional%20(2006).pdf) - Marks handbook

[Mechanical Engineering Design](https://273015.xyz/Shigleys_Mechanical_Engineering_Design_10ed.pdf) - Shigley's

## MoM / Structural
[Roark's](https://jackson.engr.tamu.edu/wp-content/uploads/sites/229/2023/03/Roarks-formulas-for-stress-and-strain.pdf) - Formulas for stress/strain

[Machinery's Handbook](https://273015.xyz/Franklin%20D%20Jones%2C%20Henry%20H%20Ryffel%2C%20Erik%20Oberg%2C%20Christopher%20J%20McCauley%2C%20Ricardo%20M%20Heald%20-%20Machinery's%20Handbook-Industrial%20Press%2C%20Inc.%20(2004).pdf) - Manufacturing guidance

[Intermediate Solid Mechanics](https://273015.xyz/Marko%20V.%20Lubarda%2C%20Vlado%20A.%20Lubarda%20-%20Intermediate%20Solid%20Mechanics%20(2020%2C%20Cambridge%20University%20Press)%20-%20libgen.lc.pdf) - Advanced solid mechanics

### Engineering vs true stress-strain
![true vs engineering stress strain](/images/stressstrain.png)
https://yasincapar.com/engineering-stress-strain-vs-true-stress-strain/

### LRFD/LSD vs ASD
**Allowable Strength Design (ASD):** Calculate/simulate nominal loads/stresses and compare to an “allowable strength” defined by the yield/ultimate strength divided by a safety factor $\Omega$. This is a simple and intuitive method and common safety factors are 3/4; 3 to yield and 4 to ultimate, whichever results in lower allowable strength. Alternative SF e.g. 2/3 used for extreme load cases like hurricane etc.  
**Load and Resistance Factor Design (LRFD) or Limit State Design (LSD):** Used in structural engineering and can get very complex. Works better when looking at ductile post-yield behavior and nonlinear analysis since safety factor placed on loads and material strength based on type of loading and type of failure. E.g. dead load (predictable) has small factor applied to it but wind loading (more variable) has a larger factor. Similarly, failure due to tensile stress has a smaller knockdown than buckling following the same reasoning. LRFD lets you get more detailed with what safety factors you put on which loads rather than a blanket safety factor which can be overconservative. LRFD is also backed by extensive empirical data to inform the factors and design safe but not overconservative (\$\$\$) structures.  
  
see: [Basic Design Concepts: LRFD](https://www.bgstructuralengineering.com/BGDesign/BGDesign05.htm)

## Chemistry/propellants

<blockquote data-callout="info" data-callout-title="Cryo quick ref">
<table class="gas-table">
  <thead>
    <tr>
      <th>Propellant</th>
      <th>Molar Mass (g/mol)</th>
      <th>Density (kg/m³)</th>
      <th>Density (lb/ft³)</th>
      <th>Boiling Point (K)</th>
      <th>Boiling Point (°F)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LOX (O₂, liquid @ ~90 K)</td>
      <td>31.999</td>
      <td>1140</td>
      <td>71.2</td>
      <td>90.2</td>
      <td>-297.1</td>
    </tr>
    <tr>
      <td>LH₂ (H₂, liquid @ ~20 K)</td>
      <td>2.016</td>
      <td>71</td>
      <td>4.43</td>
      <td>20.3</td>
      <td>-422.6</td>
    </tr>
    <tr>
      <td>LCH₄ (CH₄, liquid @ ~111 K)</td>
      <td>16.043</td>
      <td>420</td>
      <td>26.2</td>
      <td>111.6</td>
      <td>-259.6</td>
    </tr>
    <tr>
	  <td>LN₂ (N₂, liquid @ ~77 K)</td>
	  <td>28.014</td>
	  <td>808</td>
	  <td>50.4</td>
	  <td>77.4</td>
	  <td>-320.5</td>
	</tr>

  </tbody>
</table>

<style>
.gas-table {
  border-collapse: collapse;
  margin: 1em auto;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  border-bottom: 2px solid #ccc;
}
.gas-table th, .gas-table td {
  border: 1px solid #ddd;
  padding: 6px 10px;
  text-align: center;
  background-color: inherit; /* inherit uniform background */
}
.gas-table a {
  color: #2563eb;
  text-decoration: none;
}
.gas-table a:hover {
  text-decoration: underline;
}
</style>

</blockquote>

<details>
<summary><strong>Periodic table</strong></summary>
<iframe src="https://ptable.com/?lang=en" width="100%" height="800" style="border:0;"
  title="Interactive periodic table (Ptable)"></iframe>
</details>

<details>
<summary><strong>Common gas properties</strong></summary>

<table class="gas-table">
  <thead>
    <tr>
      <th colspan="6" style="text-align:left;">Common Gases (298 K, 1 atm)</th>
    </tr>
    <tr>
      <th>Gas</th>
      <th>Molar Mass (g/mol)</th>
      <th>Density (g/L)</th>
      <th>Boiling Point (K)</th>
      <th>Boiling Point (°F)</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Hydrogen (H₂)</td><td>2.016</td><td>0.082</td><td>20.3</td><td>-422.6</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740" target="_blank">NIST</a></td></tr>
    <tr><td>Helium (He)</td><td>4.003</td><td>0.166</td><td>4.2</td><td>-452.1</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440597" target="_blank">NIST</a></td></tr>
    <tr><td>Nitrogen (N₂)</td><td>28.014</td><td>1.165</td><td>77.4</td><td>-320.4</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379" target="_blank">NIST</a></td></tr>
    <tr><td>Oxygen (O₂)</td><td>31.999</td><td>1.331</td><td>90.2</td><td>-297.1</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447" target="_blank">NIST</a></td></tr>
    <tr><td>Carbon Dioxide (CO₂)</td><td>44.010</td><td>1.799</td><td>194.7 (subl.)</td><td>-109.2</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389" target="_blank">NIST</a></td></tr>
    <tr><td>Argon (Ar)</td><td>39.948</td><td>1.633</td><td>87.3</td><td>-305.6</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440371" target="_blank">NIST</a></td></tr>
    <tr><td>Air (avg.)</td><td>28.97</td><td>1.184</td><td>—</td><td>—</td>
      <td><a href="https://webbook.nist.gov/chemistry/fluid/" target="_blank">NIST</a></td></tr>
  </tbody>

  <thead>
    <tr>
      <th colspan="6" style="text-align:left;">Rocket Propellants (liquid near use temperature)</th>
    </tr>
    <tr>
      <th>Propellant</th>
      <th>Molar Mass (g/mol)</th>
      <th>Density (g/cm³)</th>
      <th>Boiling Point (K)</th>
      <th>Boiling Point (°F)</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>LOX (O₂, liquid @ ~90 K)</td><td>31.999</td><td>1.14</td><td>90.2</td><td>-297.1</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447" target="_blank">NIST</a></td></tr>
    <tr><td>LH₂ (H₂, liquid @ ~20 K)</td><td>2.016</td><td>0.071</td><td>20.3</td><td>-422.6</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740" target="_blank">NIST</a></td></tr>
    <tr><td>LCH₄ (CH₄, liquid @ ~111 K)</td><td>16.043</td><td>0.42</td><td>111.6</td><td>-259.6</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C74828" target="_blank">NIST</a></td></tr>
    <tr><td>N₂O (liquid @ ~184 K)</td><td>44.013</td><td>1.22</td><td>184.7</td><td>-128.3</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C10024972" target="_blank">NIST</a></td></tr>
    <tr><td>N₂O₄ (storable @ 298 K)</td><td>92.011</td><td>1.44</td><td>294.0</td><td>129.3</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C1054473" target="_blank">NIST</a></td></tr>
    <tr><td>Hydrazine (N₂H₄, liquid @ 298 K)</td><td>32.045</td><td>1.01</td><td>386.6</td><td>235.9</td>
      <td><a href="https://webbook.nist.gov/cgi/cbook.cgi?ID=C302012" target="_blank">NIST</a></td></tr>
    <tr><td>MMH (CH₆N₂, liquid @ 298 K)</td><td>46.073</td><td>0.88</td><td>337.0</td><td>144.0</td>
      <td><a href="https://pubchem.ncbi.nlm.nih.gov/compound/Monomethylhydrazine" target="_blank">PubChem</a></td></tr>
    <tr><td>UDMH (C₂H₈N₂, liquid @ 298 K)</td><td>60.098</td><td>0.79</td><td>364.6</td><td>191.3</td>
      <td><a href="https://pubchem.ncbi.nlm.nih.gov/compound/Dimethylhydrazine" target="_blank">PubChem</a></td></tr>
    <tr><td>Kerosene (RP-1, liquid @ 298 K)</td><td>~170 (avg.)</td><td>0.81</td><td>~450–500 (range)</td><td>~350–440 (range)</td>
      <td><a href="https://pubchem.ncbi.nlm.nih.gov/compound/Kerosene" target="_blank">PubChem</a></td></tr>
  </tbody>
</table>

<style>
.gas-table {
  border-collapse: collapse;
  margin: 1em auto;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  border-bottom: 2px solid #ccc;
}
.gas-table th, .gas-table td {
  border: 1px solid #ddd;
  padding: 6px 10px;
  text-align: center;
  background-color: inherit; /* inherit uniform background */
}
.gas-table a {
  color: #2563eb;
  text-decoration: none;
}
.gas-table a:hover {
  text-decoration: underline;
}
</style>




</details>

## Thermo
[Thermodynamics, Nellis](https://273015.xyz/NellisKleinThermodynamics2011.pdf) - Thermo

[An Introduction to Combustion Concepts and Applications](https://273015.xyz/An_introduction_to_combustion_concepts_and_applications_3ed.pdf) - Combustion

[CoolProp Online](https://ibell.pythonanywhere.com/) - Online refprop


### States and properties
[Cp and Cv deriation/notes](https://engineering.purdue.edu/~wassgren/teaching/ME20000/NotesAndReading/Lec10_Reading_Wassgren.pdf)
## Fluids
[Fluids, White](https://273015.xyz/Fluid%20Mechanics%20(9th%20Edition)%20(Frank%20M.%20White%2C%20Henry%20Xue)%20(Z-Library).pdf) - Fluid mechanics

[Modern Compressible Flow, Anderson](https://273015.xyz/Modern%20Compressible%20Flow%20With%20Historical%20Perspective%20(John%20D.%20Anderson)%20(Z-Library).pdf) - Compressible flow

### Incompressible flow
<blockquote data-callout="danger" data-callout-title="Assumptions and limitations">
Incompressible flow assumes small change in density ~&lt;5%, which correlates to M~=0.3. It's a good starting point but be sure to check your change in density and determine if the assumption was valid or not.
</blockquote>

### Compressible flow
[Compressible flow solver](https://devenport.aoe.vt.edu/aoe3114/calc.html)

#### Isentropic relations
[Link to course notes](/course_notes/EMA524/524_lecture_4_isentropic_relations.pdf)

$$
\frac{p_2}{p_1}=\left(\frac{T_2}{T_1}\right)^{\frac{\gamma}{\gamma-1}},\qquad
\frac{\rho_2}{\rho_1}=\left(\frac{T_2}{T_1}\right)^{\frac{1}{\gamma-1}},\qquad
\frac{p_2}{p_1}=\left(\frac{\rho_2}{\rho_1}\right)^{\gamma}
$$

Useful direct forms / inversions:

$$
\frac{T_2}{T_1}=\left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}}
=\left(\frac{\rho_2}{\rho_1}\right)^{\gamma-1}
$$

$$
\frac{\rho_2}{\rho_1}=\left(\frac{p_2}{p_1}\right)^{\frac{1}{\gamma}}
$$


#### Mach relations
[Link to course notes](/course_notes/EMA524/524_lecture_18_mach_relations.pdf)

$$
\frac{T}{T_0}=\left(1+\frac{\gamma-1}{2}M^2\right)^{-1}
$$

$$
\frac{p}{p_0}=\left(1+\frac{\gamma-1}{2}M^2\right)^{-\frac{\gamma}{\gamma-1}}
$$

$$
\frac{\rho}{\rho_0}=\left(1+\frac{\gamma-1}{2}M^2\right)^{-\frac{1}{\gamma-1}}
$$

Invert to get M from stagnation/static pressure ratio:
$$
M=\sqrt{\frac{2}{\gamma-1}\left[\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}}-1\right]}
$$

Choked, (M = 1) ratios:
$$
\frac{T^*}{T_0}=\frac{2}{\gamma+1},\quad
\frac{p^*}{p_0}=\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}},\quad
\frac{\rho^*}{\rho_0}=\left(\frac{2}{\gamma+1}\right)^{\frac{1}{\gamma-1}}
$$

Area–Mach relation (isentropic, 1D nozzle):
$$
\frac{A}{A^*}=\frac{1}{M}\left[\frac{2}{\gamma+1}\left(1+\frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{2(\gamma-1)}}
$$

#### Fanno flow
TBA

#### Rayleigh flow

![Rayleigh line plot](/images/RayleighLinePlot.png)
TBA

## GSE
### Tanks
**Propellant collapse**
[NTRS: A History of Collapse Factor Modeling and Empirical Data for Cryogenic Propellant Tanks](https://ntrs.nasa.gov/api/citations/20100026018/downloads/20100026018.pdf)

**Pressurization**
[NTRS: Contamination of Liquid Oxygen by Pressurized Gaseous Nitrogen](https://ntrs.nasa.gov/api/citations/19890010128/downloads/19890010128.pdf)

### Misc
[NTRS: Leak classification](https://ntrs.nasa.gov/api/citations/19680013998/downloads/19680013998.pdf)

[DoD propellant explosive equivalent](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/414526m.pdf?ver=201#page=215)

[ASME stored energy calc](https://www.chiefdelphi.com/uploads/default/original/3X/0/a/0a4630706b356d9a1f1adca65dd04972c8669984.pdf)

## Propulsion
[Rocket Propulsion Elements, Sutton](https://273015.xyz/George%20P.%20Sutton%2C%20Oscar%20Biblarz%20-%20Rocket%20Propulsion%20Elements-Wiley%20(2016).pdf) - Intro to rocket propulsion

[Design of Liquid Propellant Rocket Engines, Huzel & Huang](https://273015.xyz/HuzelHuang.pdf) - Advanced rocket propulsion

[Space Propulsion Analysis & Design](https://273015.xyz/Space%20Propulsion%20Analysis%20and%20Design.pdf) - More advanced rocket prop

[Rao nozzle design](https://rrs.org/2023/01/28/making-correct-parabolic-nozzles/)

[Liquid film cooling](https://apps.dtic.mil/sti/pdfs/ADA234288.pdf)

[Graphite gasket design guide](https://www.usseal.com/Grafoil/What-is-Grafoil.pdf)

[NTRS: Engine material selection](https://ntrs.nasa.gov/api/citations/20160008869/downloads/20160008869.pdf)

### Thermal/cooling
[NTRS: Engine heat transfer](https://ntrs.nasa.gov/api/citations/19940019998/downloads/19940019998.pdf)

[NTRS: Film cooling](https://ntrs.nasa.gov/api/citations/19930085379/downloads/19930085379.pdf)

### Turbomachinery
#### Pumps
NSS: TBA
#### Turbines

### Injector
### Combustion chamber
#### Combustion stability 
**Casiano thesis**
[Extensions to the Time Lag Models for Practical Application to Rocket Engine Stability Design](https://etda.libraries.psu.edu/catalog/10688)
Same guys work at MSFC 
[Status on the Verification of Combustion Stability for the J-2X Engine Thrust Chamber Assembly](https://ntrs.nasa.gov/citations/20130014078)

Other 
[Chug and Buzz …. The Neglected and Disrespected Combustion Instabilities](https://ntrs.nasa.gov/api/citations/20170008957/downloads/20170008957.pdf)

### Nozzle

## English units
Unfortunately they are an inevitable consequence of working in the USA.
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Propellant Quick Converter</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 15px; }
  h3 { margin-bottom: 5px; }
  table { border-collapse: collapse; margin-bottom: 10px; font-size: 14px;   border: 1px solid #ccc; /* uniform border for all edges */}
  th, td { border: 1px solid #ccc; padding: 4px 6px; text-align: center; }
  input { width: 60px; max-width: 6ch; font-size: 12px; padding: 2px; text-align: center; }
  button { margin: 3px 2px 10px 0; padding: 6px 10px; font-size: 14px; cursor: pointer; }
</style>
</head>
<body>

<h3>Temperature Converter</h3>
<table>
  <tr><th>°F</th><th>°C</th><th>K</th><th>°R</th></tr>
  <tr>
<td><input id="tempF" type="number" placeholder="°F"></td>
<td><input id="tempC" type="number" placeholder="°C"></td>
<td><input id="tempK" type="number" placeholder="K"></td>
<td><input id="tempR" type="number" placeholder="°R"></td>
  </tr>
</table>
<button onclick="convertTemperature()">Calculate Temp</button>
<button onclick="clearTemp()">Clear Temp</button>

<h3>Pressure Converter</h3>
<table>
  <tr><th>psia</th><th>bar</th><th>atm</th><th>kPa</th></tr>
  <tr>
<td><input id="pPsi" type="number" placeholder="psia"></td>
<td><input id="pBar" type="number" placeholder="bar"></td>
<td><input id="pAtm" type="number" placeholder="atm"></td>
<td><input id="pKPa" type="number" placeholder="kPa"></td>
  </tr>
</table>
<button onclick="convertPressure()">Calculate Pressure</button>
<button onclick="clearPressure()">Clear Pressure</button>

<script>
// ----- Temperature -----
function convertTemperature() {
  let F = parseFloat(document.getElementById("tempF").value);
  let C = parseFloat(document.getElementById("tempC").value);
  let K = parseFloat(document.getElementById("tempK").value);
  let R = parseFloat(document.getElementById("tempR").value);

  if (!isNaN(F)) { C=(F-32)*5/9; K=C+273.15; R=F+459.67; }
  else if (!isNaN(C)) { F=C*9/5+32; K=C+273.15; R=F+459.67; }
  else if (!isNaN(K)) { C=K-273.15; F=C*9/5+32; R=F+459.67; }
  else if (!isNaN(R)) { F=R-459.67; C=(F-32)*5/9; K=C+273.15; }
  else return;

  document.getElementById("tempF").value=F.toFixed(2);
  document.getElementById("tempC").value=C.toFixed(2);
  document.getElementById("tempK").value=K.toFixed(2);
  document.getElementById("tempR").value=R.toFixed(2);
}

function clearTemp() {
  ["tempF","tempC","tempK","tempR"].forEach(id => document.getElementById(id).value="");
}

// ----- Pressure -----
function convertPressure() {
  let psi=parseFloat(document.getElementById("pPsi").value);
  let bar=parseFloat(document.getElementById("pBar").value);
  let atm=parseFloat(document.getElementById("pAtm").value);
  let kPa=parseFloat(document.getElementById("pKPa").value);

  if(!isNaN(psi)){ bar=psi*0.0689476; atm=psi/14.6959; kPa=psi*6.89476; }
  else if(!isNaN(bar)){ psi=bar/0.0689476; atm=bar/1.01325; kPa=bar*100; }
  else if(!isNaN(atm)){ psi=atm*14.6959; bar=atm*1.01325; kPa=atm*101.325; }
  else if(!isNaN(kPa)){ psi=kPa/6.89476; bar=kPa/100; atm=kPa/101.325; }
  else return;

  document.getElementById("pPsi").value=psi.toFixed(3);
  document.getElementById("pBar").value=bar.toFixed(3);
  document.getElementById("pAtm").value=atm.toFixed(3);
  document.getElementById("pKPa").value=kPa.toFixed(3);
}

function clearPressure() {
  ["pPsi","pBar","pAtm","pKPa"].forEach(id=>document.getElementById(id).value="");
}
</script>

</body>
</html>

### lbm to lbf and units
Use \(g_c\) when going between lbm and lbf. Alternatively use slugs.
$$
g_c = 32.174\ \frac{\text{lbm}\cdot\text{ft}}{\text{lbf}\cdot\text{s}^2}
$$
Convince yourself this makes sense by trying 
$$
F = m \cdot g
$$
where F is in lbf, m is in lbm, and g is in ft/s^2. 1 lbm should weigh 1 lbf so you need to divide out the magnitude of g and cancel out the units respectively.

### SCFM
**Not** a volumetric flow, really just a mass flow. The "**S**tandard" in the name means it is a volume flow at a standardized temperature and pressure, which means the density of the working fluid is defined and thus it is a mass flow. For many fluids applications this is 59°F and 14.7psia, and to convert from lb/s to SCFM you do the following:
$$
\dot{m}\ [\text{SCFM}] = \frac{\dot{m}\ [\frac{\text{lbm}}{\text{s}}]}{\rho\ (\text{T=59°F*,\ P=14.7 psia*})\ [\frac{\text{lbm}}{\text{ft}^3}]}\times \frac{60\ [\text{s}]}{1\ [\text{m}]}
$$
\*ensure these conditions are consistent

## YouTube videos

[Engine cycles](https://www.youtube.com/watch?v=Owji-ukVt9M)

[Engine ignition](https://www.youtube.com/watch?v=bAUVCn_jw5I)

[Engine cooling](https://www.youtube.com/watch?v=he_BL6Q5u1Y)

[Efficient Engineer MoM playlist](https://youtube.com/playlist?list=PLEYqyyrm-hQ3wtF34smyJSAOqUJqnf1ch&si=2b-eFbrYjB88YK5C)

## Random tools
### Relief valve sizing
See API520
### O-ring seals
[Parker](https://divapps.parker.com/divapps/oring/ORingSelector/?LangID=EN&lang=en&cntry=us/17061&LangSrcType=local) O-ring selector/groove calculator ([handbook](https://www.parker.com/content/dam/Parker-com/Literature/O-Ring-Division-Literature/ORD-5700.pdf))

#### Compression
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

### Coding
**Python venv one-liner for bash***
```
python3 -m venv venv && source venv/bin/activate && pip install X
```

## Random case studies
### NASA 3d printed engine
[Additively manufactured GRCop-42 copper-alloy combustion chamber failure analysis: The role of build interruptions](https://www.sciencedirect.com/science/article/pii/S1350630725004510?via%3Dihub)

[Scott Manley Video](https://www.youtube.com/watch?v=S5TdVYSgqr4)
### NK-33/RD-180 mods and history
[YT: The Engines That Came In From The Cold - And how The NK-33/RD-180 Came To The USA](https://www.youtube.com/watch?v=TMbl_ofF3AM)

<details>
<summary><strong>NK33 mods paper</strong></summary>
<iframe src="/pdfs/Modifications_for_NK33.pdf" width="100%" height="600px"></iframe>
</details>
### LOX valve fire
[Case Study: LOX Valve Internal Fire](https://wha-international.com/case-study-lox-valve-internal-fire/)