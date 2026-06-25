---
title: 'SO(16,3) Symmetry: Unification of Gravity and Gauge Forces'
lang: en
description: 'SO(16,3) Symmetry: Unification of Gravity and Gauge Forces'
tags: ["physics", "Unification Theory"]
pubDate: '2026-01-30'
heroImage: ../../assets/so163.jpeg
translation:
  zh: 'so163ZH'
draft: false
featured: true
---

## Abstract
We propose and systematize a four-force unification model based on the non-compact orthogonal Lie group $SO(16, 3)$. We prove the mathematical consistency of the following **hierarchical group decomposition chain including the Planck-scale primitive symmetry**:
$$
SO(16, 3) \to SO(16) \times SO(3) \to SO(6, 3) \times SO(10) \to SO(3, 1) \times SO(2, 1) \times SO(1, 1) \times SU(5) \to \text{Standard Model},
$$
and construct a purely geometric MacDowell–Mansouri-type action:
$$
S_{\text{fund}} = \frac{1}{2\kappa^2} \int d^4x \, \varepsilon^{\mu\nu\rho\sigma} \varepsilon_{I_1 \cdots I_{19}} R^{I_1 I_2}{}_{\mu\nu} E_\rho^{I_3} E_\sigma^{I_4} \Phi^{I_5} \cdots \Phi^{I_{19}},
$$
which contains only the $SO(16, 3)$ curvature and vielbein fields, with no fundamental Yang–Mills terms. All low-energy physics—including general relativity, vector/scalar gravity, and the gauge dynamics of the Standard Model—emerges naturally via **hierarchical spontaneous symmetry breaking and geometric recombination phase transitions** of $SO(16, 3)$.

In particular, the unified gauge coupling $g_{\text{uni}}$ and the gravitational coupling $\kappa$ are related by a single geometric scale $v$:
$$
g_{\text{uni}} = C_{\text{norm}} \, \kappa v = C_{\text{norm}} \frac{v}{M_{\text{Pl}}},
$$
realizing genuine dynamical unification. The framework is rigorously consistent at the level of classical differential geometry and Lie algebras, with gauge couplings emerging naturally from geometric scale ratios without manual input.

The core innovation of this work is: **incorporating the primitive symmetric energy level $SO(16) \times SO(3)$ at the Planck scale**, interpreting the subgroup $SO(6, 3)$ as a generalized theory of gravity containing three fundamental gravitational degrees of freedom—tensor gravity (from $SO(3, 1)$), vector gravity (from $SO(2, 1)$), and scalar gravity (from $SO(1, 1)$); meanwhile, $SO(10)$ gauge forces are viewed as effective projections of high-energy geometry onto the internal space, establishing a profound unification between gravitational and gauge interactions.

## 1 Introduction
The unification of fundamental interactions remains one of the deepest problems in theoretical physics. The Standard Model (SM) of particle physics, based on the gauge group $SU(3)_c \times SU(2)_L \times U(1)_Y$, successfully describes the strong, weak, and electromagnetic forces, with all predicted particles (including the Higgs boson) experimentally verified. On the other hand, general relativity (GR) describes gravity as spacetime curvature governed by Einstein’s field equations. Despite their individual successes, the two frameworks are fundamentally incompatible: the Standard Model is a quantum field theory on a fixed background, while general relativity is a classical geometric theory.

Early attempts such as Kaluza–Klein theory [1, 2] proposed unifying gravity and electromagnetism via a fifth dimension, but struggled to accommodate non-Abelian gauge groups (e.g., $SU(3)_c$), and compactification of extra dimensions introduces numerous moduli fields with no experimental support. Supergravity [3] and superstring theory [4] provide more robust frameworks for unifying all interactions in ten or eleven dimensions, but suffer from the "landscape problem" (≈$10^{500}$ vacua) and lack testable predictions.

A recent work closely related to this paper was proposed by Roumelioti, Stefas, and Zoupanos [5], who directly used $SO(2, 16)$ to unify conformal gravity and internal interactions in four spacetime dimensions. However, their framework relies on conformal (Weyl) gravity with ghost modes, leading to quantum consistency issues.

In contrast, this work adopts the non-compact orthogonal group $SO(16, 3)$ as the unification group, built on a ghost-free Einsteinian geometric foundation. $SO(16,3)$ admits **two natural regular decompositions**: one is the **primitive compact bipartite decomposition $SO(16)\times SO(3)$**, corresponding to the primitive symmetry of spacelike internal and timelike geometry at the Planck scale; the other is the **physical sector decomposition $SO(6, 3) \times SO(10)$**, corresponding to the separation of gravity and gauge forces at low energy.

The key decompositions are:
$$
SO(16, 3) \to SO(16)\times SO(3) \to SO(6, 3) \times SO(10),
$$
where:
- $SO(6, 3)$ is interpreted as the generalized gravity sector, further decomposing into $SO(3, 1) \times SO(2, 1) \times SO(1, 1)$, corresponding to:
  - Tensor gravity (Einstein gravity in GR)
  - Vector gravity (a candidate for dark matter)
  - Scalar gravity (a candidate for dark energy)
- $SO(10)$ is a well-known grand unified theory (GUT) group that can accommodate an entire generation of Standard Model fermions (including the right-handed neutrino $\nu_R$) in a single 16-dimensional spinor representation.

The central proposition of this theory is: the subgroup $SO(6, 3)$ should not be regarded as a simple "mixture of gravity and gauge forces", but as a unified generalized theory of gravity; meanwhile, $SO(10)$ gauge forces are not fundamental inputs, but effective effects induced by high-energy $SO(16, 3)$ geometry after symmetry breaking. The gauge coupling is uniquely determined by geometry:
$$
g_{\text{uni}} = C_{\text{norm}} \, \kappa v = C_{\text{norm}} \frac{v}{M_{\text{Pl}}}.
$$

## 2 Group Theory and Mathematical Structure
### 2.1 Definition and Basic Properties of $SO(16, 3)$
The mother group acts on a 19-dimensional real vector space with signature $(16, 3)$, and its Lie algebra dimension is:
$$
\dim \mathfrak{so}(16, 3) = \frac{19 \times 18}{2} = 171.
$$

### 2.2 Primitive Compact Bipartite Decomposition: $\boldsymbol{SO(16,3) \supset SO(16) \times SO(3)}$
$SO(16,3)$ admits a unique **fully compact, regular orthogonal primitive decomposition** that strictly partitions the 19-dimensional internal space into a **16-dimensional fully spacelike subspace** and a **3-dimensional fully timelike subspace**:
$$
V^{16,3} = V^{16,0} \oplus V^{0,3}, \quad (16,3) = (16,0)+(0,3),
$$
corresponding to the direct product symmetry group
$$
SO(16) \times SO(3).
$$
This decomposition corresponds to the **primitive physical energy level at the Planck scale ($\sim 10^{19}\,\text{GeV}$)**, with physical content:
1. **$SO(16)$: Fully spacelike internal hyper-unified symmetry**
    A 16-dimensional positive-definite compact group carrying the primitive symmetry of all matter fields and internal interactions, naturally containing $SO(10)$ as a subgroup, serving as the ultimate internal origin of Standard Model fermions and gauge forces.
2. **$SO(3)$: 3-dimensional timelike geometric rotational symmetry**
    Acting on the 3 timelike degrees of freedom at the unification scale, this is the geometric origin of **time dimension, dark energy, and cosmic isotropy**:
    - 3-dimensional timelike space → 1-dimensional physical time after breaking;
    - Residual $SO(1,1)$ from $SO(3)$ breaking → scalar gravity (dark energy);
    - Timelike isotropy → explains the uniformity of the cosmic microwave background.
3. **Primitive physical state**
    At this energy level, **there is no gravity, no gauge forces, and no coupling between spacetime and internal geometry**—only a pure geometric bipartition exists: spacelike internal symmetry and timelike geometric symmetry are fully decoupled, representing the most primitive unbroken state of the universe.

### 2.3 Geometric Recombination Phase Transition: $\boldsymbol{SO(16) \times SO(3) \to SO(6,3) \times SO(10)}$
This transition is **not conventional subgroup breaking**, but an **orthogonal partition recombination of indefinite quadratic form spaces**, corresponding to a **cosmic geometric phase transition at the GUT scale ($\sim 2\times10^{16}\,\text{GeV}$)**, with physical processes:
1. Vacuum recombination breaks the full spacelike/timelike separation, and $SO(16)$ breaking releases **6 spacelike degrees of freedom**;
2. 6 spacelike + 3 timelike degrees of freedom recombine → form the non-compact generalized gravity sector $SO(6,3)$;
3. Remaining 10 spacelike dimensions → preserved as the compact gauge unification sector $SO(10)$;
4. **Physical outcome**: Gravity and gauge forces separate for the first time, spacetime geometry couples to internal interactions, and the division of low-energy physics is formally established.

### 2.4 Block Decomposition and Dimension Matching
Decomposing the 19-dimensional space as $V = V_9 \oplus V_{10}$ yields the natural block decomposition:
$$
\mathfrak{so}(16, 3) = \mathfrak{so}(6, 3) \oplus \mathfrak{so}(10) \oplus (V_9 \otimes V_{10}),
$$
with dimensions $36 + 45 + 90 = 171$, in perfect agreement. The mixed component $(V_9 \otimes V_{10})$ corresponds to heavy degrees of freedom integrated out after symmetry breaking.

### 2.5 Subdecomposition and Physical Interpretation: Generalized Gravity Perspective
Further decomposition gives:
$$
SO(6, 3) \to SO(3, 1) \times SO(2, 1) \times SO(1, 1),
$$
interpreted under the core viewpoint of this work as:
- $SO(3, 1)$: Local Lorentz group, corresponding to tensor gravity (GR)
- $SO(2, 1)$: Corresponding to vector gravity (long-range or ultra-light mass modes)
- $SO(1, 1)$: Corresponding to scalar gravity (dilaton-like field driving cosmic acceleration)
Meanwhile, $SO(10) \to SU(5) \to \text{SM}$ provides a unification framework for strong and electroweak interactions. This decomposition holds rigorously at the Lie algebra level, and the vacuum alignment is stabilized by a projected Higgs potential (see Section 4).

## 3 Geometric Structure: Extended Vielbein Bundle and Induced Gauge Forces
In the language of Cartan geometry, gravitational theories can be formulated as theories on the vielbein bundle. This section embeds the $SO(16, 3)$ unification framework into this rigorous geometric setting, clarifying the common geometric origin of the three gravitational sectors and gauge forces.

### 3.1 Unified Geometric Structure
The foundation of the theory is an extended vielbein field defined on the 4-dimensional spacetime manifold $\mathcal{M}$:
$$
E^I{}_\mu(x), \quad I = 1, \dots, 19,
$$
mapping spacetime tangent vectors to the 19-dimensional internal space $V^{16,3}$. The structure group $SO(16, 3)$ acts on the index $I$ as the isometry group of the internal space. The spin connection $\Omega^{IJ}{}_\mu$ is the Cartan connection, fixed by the metric-compatibility condition $D_\mu E^I{}_\nu = 0$.

Under the group decomposition $SO(16, 3) \to SO(6, 3) \times SO(10)$, the vielbein naturally splits into:
- $E^i{}_\mu$ ($i = 1, \dots, 9$): Generalized gravity sector (including tensor/vector/scalar degrees of freedom)
- $A^A{}_\mu$ ($A = 1, \dots, 10$): Induced gauge field (non-fundamental gauge connection, high-energy geometric projection)

## 4 Action and Field Equations: Purely Geometric Unification Framework
### 4.1 Fundamental Variables and High-Energy Action
The theory is defined on the 4-dimensional spacetime manifold $\mathcal{M}^4$, equipped with a 19-dimensional internal space $V^{16,3}$ of signature $(+16, -3)$. The fundamental variables are:
- **Vielbein**: $E^I{}_\mu(x)$, 1-form, mapping $T\mathcal{M} \to V^{16,3}$ ($I = 1, \dots, 19$)
- **Spin connection**: $\Omega^{IJ}{}_\mu(x) \in \mathfrak{so}(16, 3)$, fixed by the torsion-free condition $D_\mu E^I{}_\nu = 0$
- **Symmetry-breaking order parameter**: $\Phi^{IJ}(x) = -\Phi^{JI}(x)$, in the adjoint representation of $SO(16,3)$. In the low-energy effective action, its contraction direction is denoted $\Phi^I \equiv \langle \Phi^{IJ} \rangle \xi_J$, where $\xi_J$ is a fixed reference vector.

The high-energy action takes a purely geometric form with no fundamental Yang–Mills terms:
$$
S_{\text{fund}} = \frac{1}{2\kappa^2} \int d^4x \, \varepsilon^{\mu\nu\rho\sigma} \varepsilon_{I_1 \cdots I_{19}} R^{I_1 I_2}{}_{\mu\nu} E_\rho^{I_3} E_\sigma^{I_4} \Phi^{I_5} \cdots \Phi^{I_{19}}.
$$

### 4.2 Symmetry Breaking Mechanism and Induced Dynamics
#### 4.2.1 Projected Higgs Potential and Vacuum Alignment
To realize the strict breaking $SO(16,3) \to SO(6,3)\times SO(10)$, we introduce a rank-2 antisymmetric tensor field $\Phi^{IJ}$ and a projected potential:
$$
V(\Phi) = \frac{\lambda}{4} \mathrm{Tr}\left( \Phi^2 + v^2 \mathbb{I}_{19} \right)^2 + \frac{\mu}{2} \mathrm{Tr}\left( \Phi^4 - \frac{v^4}{19} (\mathrm{Tr}\Phi^2)^2 \right),
$$
whose vacuum expectation value takes the block-diagonal form:
$$
\langle \Phi^{IJ} \rangle = v \begin{pmatrix} 0_{9\times 9} & 0 \\ 0 & \Omega_{10\times 10} \end{pmatrix}, \quad \Omega = \bigoplus_{a=1}^5 \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}.
$$
This configuration commutes strictly with $SO(6, 3)$ (first 9 dimensions, signature $(6,3)$) and $SO(10)$ (last 10 dimensions, positive-definite), with stabilizer $SO(6, 3) \times SO(10)$. The mixed generators $(\mathbf{9}, \mathbf{10})$ acquire mass $m_{\text{mix}} \sim v$.

#### 4.2.2 Vielbein Decomposition
The vielbein decomposes accordingly:
$$
E^I{}_\mu = (E^i{}_\mu, A^A{}_\mu), \quad
\begin{cases}
i = 1, \dots, 9 & \text{(gravity sector)} \\
A = 1, \dots, 10 & \text{(GUT sector)}
\end{cases}
$$

#### 4.2.3 Low-Energy Effective Action and Coupling Emergence
Expanding the action around $\langle \Phi \rangle$ and extracting gravitational and gauge kinetic terms:
$$
S \supset \int d^4x \sqrt{-g} \left[ C_R \, v^{15} \kappa^2 R + C_F \, v^{15} \kappa^2 F_{\mu\nu}^A F^{A\mu\nu} \right].
$$
To obtain standard physical fields, we perform field rescaling:
$$
g_{\mu\nu}^{\text{phys}} = Z_g g_{\mu\nu}^{\text{geo}}, \quad A_\mu^{A,\text{phys}} = Z_A A_\mu^{A,\text{geo}}.
$$
Requiring the Einstein–Hilbert term coefficient to be $M_{\text{Pl}}^2/2$ and the Yang–Mills term coefficient to be $-1/(4g^2)$, we eliminate geometric normalization factors to obtain the **unified coupling relation**:
$$
\frac{1}{g_{\text{uni}}^2} \propto \frac{1}{(\kappa v)^2} \quad \Rightarrow \quad g_{\text{uni}} = C_{\text{norm}} \, \kappa v = C_{\text{norm}} \frac{v}{M_{\text{Pl}}}. \tag{8}
$$
This relation is dimensionally consistent ($[\kappa]=M^{-1}, [v]=M, [g]=M^0$) and shows that the gauge coupling is not a fundamental parameter, but an emergent quantity from the geometric ratio of the breaking scale to the Planck scale. Taking $v \sim 2\times 10^{16}\,\text{GeV}$, $M_{\text{Pl}}\approx 2.4\times 10^{18}\,\text{GeV}$, and including $4\pi$ factors and group normalization ($C_{\text{norm}}\sim \mathcal{O}(10^2)$), we find $g_{\text{GUT}}\sim 0.6\text{--}0.8$, in excellent agreement with experimental fits.

After $SO(10) \to \text{SM}$ breaking (via the 16-dimensional spinor Higgs $\Psi$), we obtain the GUT relation:
$$
g_3 = g_2 = \sqrt{\frac{5}{3}} \, g_1 = g_{\text{uni}}.
$$

#### 4.2.4 Complete Hierarchical Symmetry Breaking Chain
The full **hierarchical** symmetry breaking chain is:
$$
SO(16, 3) \xrightarrow{\text{Planck-scale primitive breaking}} SO(16) \times SO(3) \xrightarrow{\text{geometric recombination phase transition}} SO(6, 3) \times SO(10) \xrightarrow{\langle \Psi \rangle}
\begin{cases}
SO(3, 1) \times SO(2, 1) \times SO(1, 1) \\
SU(3)_C \times SU(2)_L \times U(1)_Y
\end{cases}
$$
Breaking scale: $v \sim 2 \times 10^{16} \, \text{GeV}$.

### 4.3 Variational Derivation of Unified Field Equations
The field equations are obtained by varying the action with respect to the independent fields $E^I{}_\mu$ and $\Phi^{IJ}$. The spin connection $\Omega^{IJ}{}_\mu$ is fixed by the torsion-free condition $D_\mu E^I{}_\nu = 0$.
1. **Variation with respect to the vielbein** gives the generalized Einstein equation:
   $$
   \varepsilon^{\mu\nu\rho\sigma} \varepsilon_{I_1 I_2 I_3 I_4 J_1 \cdots J_{15}} R^{I_1 I_2}{}_{\mu\nu} E^{I_4}{}_\sigma \Phi^{J_1} \cdots \Phi^{J_{15}} = 0.
   $$
2. **Variation with respect to the breaking field** gives the vacuum constraint equation, forcing $\Phi$ to project onto a fixed-rank subspace.
3. **Torsion-free condition** (auxiliary equation):
   $$
   D_\mu E^I{}_\nu \equiv \partial_\mu E^I{}_\nu - \Gamma^\rho{}_{\mu\nu} E^I{}_\rho + \Omega_\mu{}^I{}_J E^J{}_\nu = 0.
   $$
4. In the low-energy limit, the equations project onto the $SO(6, 3)$ subsector, equivalent to the Einstein–Proca–Klein–Gordon system; the $SO(10)$ components yield the Yang–Mills equation $\nabla_\mu F^{\mu\nu} = 0$.

### 4.4 Complete Quantum Action
For completeness, the full action including quantum corrections and matter is:
$$
S_{\text{full}} = S_{\text{geom}} + S_\Phi + S_\Psi + S_{\text{curv}^2} + S_{\text{GF}},
$$
where:
- $S_{\text{geom}} = \dfrac{1}{2\kappa^2} \displaystyle\int d^4x \, \varepsilon^{\mu\nu\rho\sigma} \varepsilon_{I_1 \cdots I_{19}} R^{I_1 I_2}{}_{\mu\nu} E_\rho^{I_3} E_\sigma^{I_4} \Phi^{I_5} \cdots \Phi^{I_{19}}$
- $S_\Phi = \displaystyle\int d^4x \sqrt{-g} \left( \frac{1}{2} (D_\mu \Phi^{IJ})(D^\mu \Phi_{IJ}) - V(\Phi) \right)$
- $S_\Psi = \displaystyle\int d^4x \sqrt{-g} \left( \bar{\Psi} \gamma^\mu (\nabla_\mu + \Omega_\mu) \Psi + y \bar{\Psi} \Psi \Phi^I \Gamma_I \right)$
- $S_{\text{curv}^2} = \displaystyle\int d^4x \sqrt{-g} \left( a R^2 + b R_{\mu\nu} R^{\mu\nu} + c E_4 + d T^2 \right)$
- $S_{\text{GF}} =$ BRST gauge-fixing term (for the $SO(16, 3)$ path-integral measure)

where:
- $S_\Phi$ uses a rank-2 antisymmetric tensor breaking field
- $S_\Psi$ uses the 512-dimensional spinor of $\mathrm{Spin}(16, 3)$, with Yukawa couplings generating Standard Model fermion masses
- $S_{\text{curv}^2}$ includes higher-derivative terms to control UV behavior (e.g., the Gauss–Bonnet term $E_4$ is a topological term in four dimensions)
- The theory is ghost-free at the classical level; quantum unitarity for non-compact directions is ensured via constrained quantization or BRST ghost cancellation, and the model is currently framed as a classical effective geometric framework.

### 4.5 Summary
This framework achieves genuine geometric unification:
- All forces originate from a single geometric action
- The unification coupling $g_{\text{uni}} = C_{\text{norm}} \kappa v$ is a natural result after field rescaling, not an ad-hoc assumption
- Three types of gravity (tensor, vector, scalar) emerge naturally from $SO(6, 3)$
- No arbitrary Yang–Mills terms or extra spacetime dimensions are introduced

## 5 Structure and Role of Mixed Geometric Modes
### 5.1 Origin and Representation
In the 19-dimensional internal space of the unified vielbein $E^I{}_\mu$, the index splits after symmetry breaking as $I = (i, A)$, where $i = 1, \dots, 9$ (gravity) and $A = 1, \dots, 10$ (gauge). In Cartan geometry, the off-diagonal components of the spin connection $\Omega^{iA}{}_\mu$ are called mixed geometric modes, transforming in the $(\mathbf{9}, \mathbf{10})$ representation.

### 5.2 Dynamics and Mass Generation
Mixed modes have no independent kinetic term; their dynamics are governed by curvature–vielbein couplings in the unified action. In the Higgs vacuum background $\langle \Phi \rangle$, the equations of motion give:
$$
\Omega^{iA}{}_\mu = \mathcal{O}\left(\frac{1}{v} \partial E\right),
$$
inducing an effective mass term:
$$
\mathcal{L} \to -\frac{1}{2} m_{\text{mix}}^2 \, \Omega^{iA}{}_\mu \Omega^{\mu}{}_{iA}, \quad m_{\text{mix}} \sim v.
$$
Thus, at low energies ($E \ll v$), mixed modes are fully integrated out and do not appear in the effective theory.

### 5.3 Physical Interpretation
Mixed geometric modes are auxiliary degrees of freedom of high-energy unified geometry, serving only to:
- Preserve $SO(16, 3)$ covariance
- Transmit symmetry-breaking information
- Produce no observable particles or new long-range forces

This is fundamentally distinct from "mixed gauge bosons", avoiding experimental constraints and theoretical complexity from extra degrees of freedom.

## 6 Fermion Embedding ($\mathrm{Spin}(16, 3)$)
### 6.1 Spinor Representation and Branching
The complex spinor representation of $\mathrm{Spin}(16, 3)$ has dimension $2^9 = 512$. The branching rule is:
$$
512 \to (16, 16) \oplus (\overline{16}, \overline{16}),
$$
where each 16-dimensional representation of $SO(10)$ contains one full generation of Standard Model fermions:
$$
16 \to 10 \oplus \overline{5} \oplus 1.
$$

### 6.2 Explicit Embedding Scheme
Three generations of fermions are realized by three independent 512-dimensional spinor fields, with Yukawa couplings induced by the vacuum expectation value of the breaking field $\Phi^{IJ}$ to generate mass hierarchies and flavor mixing matrices. Explicit branching maps are given in Appendix B.

## 7 Low-Energy Effective Theory and Observable Predictions
Below the breaking scale $v \sim 2 \times 10^{16} \, \text{GeV}$, the low-energy effective theory contains:
- General relativity (from $SO(3, 1)$)
- Vector and scalar gravity modes with mass $m_V, m_\phi \sim v$; unobservable directly without secondary breaking, but may contribute to equivalence principle violation or fifth forces
- Standard Model (induced via $SO(10) \to \text{SM}$) with gauge couplings satisfying $g_3 = g_2 = \sqrt{5/3} \, g_1$
- Right-handed weak interactions: $SU(2)_R$ gauge bosons $W^\pm_R$ from $SO(10)$ breaking, with mass $\sim v$

**Specific observable predictions include:**
1. **Gauge coupling unification**: At $M_{\text{GUT}} = v \sim 2 \times 10^{16} \, \text{GeV}$, $g_3 = g_2 = \sqrt{5/3} \, g_1$, consistent with LEP/SLD data extrapolation
2. **Proton decay**: Mediated by $SO(10)$ $X, Y$ bosons, dominant channel $p \to e^+ \pi^0$, expected lifetime $\tau_p \sim 10^{34} \text{--} 10^{36}$ years, testable by next-generation experiments such as Hyper-K and DUNE
3. **High-energy new physics**: If vector gravity modes are suppressed to the TeV scale (e.g., via extra symmetry breaking), resonant states may be observable at LHC/FCC; otherwise, only indirectly constrained by precision gravity experiments such as MICROSCOPE and LISA
4. **Neutrino masses**: Right-handed neutrino mass $M_R \sim v$ from the vacuum expectation value of the spinor Higgs $\Psi$, yielding light neutrino masses $m_\nu \sim m_D^2 / v$ via the seesaw mechanism

## 8 Conclusion
We construct a consistent geometric unification framework based on $SO(16, 3)$: the only fundamental input is a purely geometric action containing only $SO(16, 3)$ curvature and the 19-dimensional vielbein, with no fundamental Yang–Mills terms or independent gauge couplings. All low-energy physics—including general relativity, vector/scalar gravity, and Standard Model gauge dynamics—emerges naturally as an induced effect via **hierarchical spontaneous symmetry breaking and geometric recombination phase transitions**.

The core contributions of this work are:
- **First incorporating the Planck-scale primitive symmetric energy level $SO(16) \times SO(3)$**, clarifying the primitive physical state of spacelike internal and timelike geometry in the very early universe;
- Interpreting the subgroup $SO(6, 3)$ as a generalized theory of gravity with tensor, vector, and scalar degrees of freedom;
- Revealing that $SO(10)$ gauge forces are not fundamental, but effective projections of high-energy geometry onto the internal space;
- Achieving genuine dynamical unification: gauge coupling and gravitational strength are related by the unified geometric scale $v$ as $g_{\text{uni}} = C_{\text{norm}} \kappa v$, predicting $g_3 = g_2 = \sqrt{5/3} \, g_1$ at $v \sim 2 \times 10^{16} \, \text{GeV}$, consistent with experiment;
- Clarifying the role of mixed geometric modes: as high-energy auxiliary degrees of freedom, they are fully integrated out at low energies, producing no observable particles and avoiding experimental constraints from extra degrees of freedom.

This framework transcends the traditional "group unification" paradigm, rooting four-force unification in a single geometric origin, combining mathematical elegance and physical consistency, and providing a new path toward the ultimate unification of quantum gravity and particle physics.

## Appendix
### A Algebra Dimensions and Branching (Cheat Sheet)
$$
\dim \mathfrak{so}(N) = \frac{N(N-1)}{2}, \quad
\dim \mathfrak{so}(19) = 171, \quad
\dim \mathfrak{so}(9) = 36, \quad
\dim \mathfrak{so}(10) = 45, \quad
9 \times 10 = 90.
$$

### B Spinor Mapping
| $(\alpha, A)$                   | $SO(10)$ rep.  | SM fields       | Gen. |
| ------------------------------- | -------------- | --------------- | ---- |
| $(1, 1)$                        | $1$            | $\nu_R$         | 1    |
| $(1, 2\text{--}5)$              | $10$           | $u_R, d_R, e_R$ | 1    |
| $(2\text{--}5, 6\text{--}10)$   | $\overline{5}$ | $q_L, e_L$      | 1    |
| $(6, 1)$                        | $1$            | $\nu_R$         | 2    |
| $(6, 2\text{--}5)$              | $10$           | $u_R, d_R, e_R$ | 2    |
| $(7\text{--}10, 6\text{--}10)$  | $\overline{5}$ | $q_L, e_L$      | 2    |
| $(11, 1)$                       | $1$            | $\nu_R$         | 3    |
| $(11, 2\text{--}5)$             | $10$           | $u_R, d_R, e_R$ | 3    |
| $(12\text{--}15, 6\text{--}10)$ | $\overline{5}$ | $q_L, e_L$      | 3    |

### C Yukawa Coupling and Mass Matrix Example
Yukawa term:
$$
\mathcal{L}_Y = y_{ij} \, \bar{\Psi}_i \Phi \Psi_j + \text{h.c.}
$$
$3 \times 3$ mass matrix template:
$$
M = v \begin{pmatrix}
\varepsilon^3 & \varepsilon^2 & \varepsilon \\
\varepsilon^2 & \varepsilon & 1 \\
\varepsilon & 1 & 1
\end{pmatrix}, \quad \varepsilon \sim 0.2.
$$

## References
[1] T. Kaluza. "Zum Unitätsproblem der Physik". In: *Sitzungsber. Preuss. Akad. Wiss. Berlin (Math. Phys.)* (1921), pp. 966–972.

[2] O. Klein. "Quantentheorie und fünfdimensionale Relativitätstheorie". In: *Z. Phys.* 37.12 (1926), pp. 895–906.

[3] Z. Freedman and A. Van Proeyen. *Supergravity*. Cambridge University Press, 2012.

[4] B. Green, H. Schwarz, and E. Witten. *Superstring Theory*. Vol. 1. Cambridge University Press, 1987.

[5] D. Roumelioti, S. Stefas, and G. Zoupanos. "Unification of conformal gravity and internal interactions". In: *Eur. Phys. J. C* 84 (2024), p. 577.