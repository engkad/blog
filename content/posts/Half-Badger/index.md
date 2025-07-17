---
title: "Half-Badger Liquid Rocket Engine"
date: 2025-06-03
draft: true
tags: ["engineering","undergrad"]
---

(photo gallery?)

# Introduction
Half-Badger is a liquid rocket designed to compete in the FAR-OUT liquid/hybrid rocket competition in Mojave, CA.

(include slideshow somehow?)

# Propulsion Engineering
Most of my efforts contributed to the propulsion and fluid system that fell under the responsibility of the Propulsion sub-team, for which I was a co-lead. I was also heavily involved test stand design and test operations, including co-founding a committee to develop a permanent propulsion test facility at UW-Madison.

## System Design Comments

### Competition
#### Why FAR-OUT?
FAR-OUT is the first competition dedicated to liquid and hybrid rockets. This means it has much more to offer when it comes to expertise and advising of liquid propulsion systems than Spaceport, which has only had 1 team attempt liquids.

#### How is it scored
A number of factors go into the scoring, primarily how close you are to your predicted apogee, and how good your mass fractions and engine efficiency (Isp) are.

#### Why 15k ft altitude target?
15k was a good target for us since it's the upper bound of the lowest category.

#### Why build a liquid rocket?
Building a liquid rocket offers an incredible opportunity for students to get hands-on experience that is directly applicable to the aerospace industry.

### TCA
#### Material Selection

Aluminum (6061-T6)
- 3x lighter than 316 but 3x lower yield and ultimate strength
- bad oxygen compatibility unless coated (adds complexity)
- great manufacturability
- selected for IPA fuel tank and some structural members

Stainless steel (316/316L)
- best oxygen/corrosion compatibility
- maintains good strength at high temperatures
- decent manufacturability
- tensile strength increases significantly at cryogenic temperatures
- chosen for TCA and LOX tank

Copper alloy
- good oxygen/corrosion compatibility
- best thermal conductivity (~10x 316, higher for cryogenic temps)
- >3x more expensive than stainless
- around half the tensile strength
	- so still doesn't perform as well in thermal transient sim, would need to design differently to take advantage of conductivity (regen)

Inconel
- great oxygen/corrosion compatibility
- excellent strength at high temps
- very difficult manufacturing
- very expensive
- would be good for reinforcing critical areas

#### Propulsion Parameters

Mixture ratio=1.0
- good compromise between combustion temperature and isp, could go higher with more sophisticated cooling methods
- using stainless steel melting point: used as a starting point, since a higher combustion temperature could be tolerated with more film cooling. We were planning on some iteration with film cooling calcs but 10% isn't too much or too little so we stuck with it

Chamber pressure=500 psi
- good compromise between tank pressure requirements (tank thickness and ability to pressure test to 1.5x) and throat area (which dictates exit diameter through expansion ratio)
- throat area determined with CEA and thrust coefficient equation

Nozzle design
- rao parabolic offers close to ideal performance, chose lower end of 80% bell length (nearly 98.5% ideal) since this small of an engine with our tolerances likely won't benefit from any better

Film cooling
- chose 10% as a good starting point
	- used by other engines in industry
	- 1D numerical simulation for the film cooling showed 10% would be sufficient
	- not confident in some of the assumptions made in the analysis, so decided to test with some TCs to verify and improve model for further designs
	- since we can't know the exact behavior occurring in the chamber, we had two options:
		- attempt two-phase compressible CFD with combustion (not feasible with our resources as a student group)
		- start with a rough (theoretically conservative) estimate from our analysis, and then validate analysis parameters through testing

Burn time = 5s
	- originally 7.5s with a the old n2o engine design, but with higher combustion temperature we needed a lower burn time to take advantage of transient, also less burn time since larger thrust

Vehicle diameter and length
- match similar rockets we've built, diameter is sufficient for a our desired expansion with reasonable chamber pressure

Tank pressure
	- added up pressure drops along tubing and flow components (valves, cav, tees, etc)
#### Propellants
The initial oxidizer selected was saturated nitrous oxide (N2O) as used on HalfCat Sphinx, however nitrous has a number of drawbacks to it:
- Saturated N2O is stored at very high pressures (~600-1000psi depending on temperature), which means a very high risk of BLEVE event
- Two-phase flow is extremely hard to characterize and measure, which goes against our goals of trying to measure and learn as much as we can from this engine
- Risk of cavitation from pressure drop -> bubble collapse combined with organic contamination ("dieseling") can cause detonation in fluid line

And we instead chose to use cryogenic liquid oxygen as our oxidizer, which also carries significant risks and required safety protocols, but has the advantages of:
- Industry-standard oxidizer, excellent learning opportunity for cryogenics and oxygen safety procedures/considerations that are directly applicable to industry
- Much better engine performance, ~20% better Isp than N2O for our chamber pressure and expansion ratio
	- Also higher Isp for the same combustion temperature

As far as our fuel selection goes, we decided on the alcohols isopropyl alcohol and ethyl alcohol for the following reasons:
- Very similar performance to other hydrocarbons like kerosene
- Both IPA and ethanol have lower freezing points than kerosene, less risk of freezing near cryogenic fluid system
- Both are very cheap and easy to source, IPA slightly moreso but very slightly lower performance

The pressurant was decided to be nitrogen due to cost
- N2
	- Cheap
	- Slightly worse performing than helium
	- Could potentially condense in a lox tank, this can be mitigated by diffusers and minimizing turbulence and mixing in the tankj
	- Lower gamma so less joule thompson cooling
- He
	- ~5x more expensive than N2
	- Helium has much higher kinematic viscosity, so much lower reynolds number -> less pressure losses
	- Lower density, so less pressurant mass needed to fill the same amount of volume

#### Injector
(injector design notes and description, pictures)

#### Combustion Chamber
(cc design notes etc)

#### Nozzle
(nozzle esign notes etc)

### Fluid System
#### Tanks
Initially, our design for the tank was modeled off of HalfCat Rocketry's Sphinx rocket, using saturated nitrous oxide as the oxidizer, which autogeneously pressurizes itself, and through the use of a stacked piston tank, the fuel (isopropyl alcohol) as well.

This design as some flaws however. Since cavitating venturis are not used in N2O systems (since it would immediately cavitate which is dangerous in nitrous), the flow is not very decoupled from the combustion chamber. This is not necessarily an issue, but combined with the fact that N2O-IPA combustion in the Sphinx design is very unstable (verified c* efficiencies of ~70%), this means that the very stiff injector (over 50%) is absolutely necessary to maintain semi-stable combustion, and may not adequately decouple instability that could excite a natural frequency of the feedline and piston tank (which could be particularly susceptible since the floating piston is coupled to propellant pressures).

For these and several other reasons, we decided to change our oxidizer to cryogenic liquid oxygen, and instead use a separate nitrogen pressurant tank to pressurize the independent LOX and IPA tanks.

#### Fluids Routing
(P&ID)

### Test Operations




### Regrettable decisions
Administrative/timeline
- Not building prototypes sooner
	- could've machined injector out of aluminum, forcing us to practice CAM on aluminum while also having a test article to validate discharge coefficients with
- Not leak testing more sections of line prior to water flow test

Fluid system
- NPT requires tons of thread tape, swagelok is really expensive 
	- coul've used more AN flared fittings
- Forgot to put zero thrust tees on vent valves - venting can be a lot of thrust!
- Tubing for PTs should be as small as possible to minimize volume, 1/8" or something. Can still have length to prevent cryo temps
- Need faster acting valves, 1s is too slow
- Purge line needs to be lower pressure for ox side since purging during startup
- Need tubes to carry vent/dump LOX away from test stand

TCA
- forgot to put PT/TC in manifold
	- ended up putting a tee into the inlet lines, this works fine too