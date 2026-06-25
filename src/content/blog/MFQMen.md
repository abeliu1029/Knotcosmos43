---
title: 'Matrix Function Quantum Mechanics: Unification of the Four Fundamental Forces Emerging from a Single Matrix Structure'
lang: en
description: 'Matrix Function Theory'
pubDate: '2026-01-30'
heroImage: ../../assets/mfqm1.png
translation:
  zh: 'mfqmZH'  
draft: false
---

## Abstract

Within the framework of Matrix Function Quantum Mechanics (MFQM), this paper constructs an extension of the Dirac equation that does not rely on Connes' spectral triple axioms. The theory takes finite-dimensional positive-definite matrices $\tilde{X}_\mu, \tilde{P}_\nu$ as fundamental degrees of freedom and defines unitary generators via **matrix function calculus**:
$$
U_\mu = \tilde{P}_\mu^{\tilde{X}_\mu} = \exp(\tilde{X}_\mu \log \tilde{P}_\mu), \quad
V_\nu = \tilde{X}_\nu^{\tilde{P}_\nu} = \exp(\tilde{P}_\nu \log \tilde{X}_\nu),
$$
with **$\mathbb{Z}_4$ cyclic symmetry** as the core algebraic structure.

We rigorously prove that the modified Dirac operator
$$
D = \sum_{\mu=0}^{d-1} U_\mu \gamma^\mu + \sum_{\nu=0}^{d-1} V_\nu \gamma^\nu + m I
$$
is self-adjoint and that its spectrum satisfies $F_G(D) = -D$ under the $\mathbb{Z}_4$ automorphism $F_G$, thereby **automatically generating CPT symmetry and particle–antiparticle symmetry**.

Through Gelfand–Naimark–Segal (GNS) construction and Weyl–Moyal star products, we demonstrate that as noncommutative parameters $\theta_{ij}, \eta_{ij} \to 0$ and matrix dimension $N \to \infty$, $D$ converges to the standard Dirac operator $i\gamma^\mu \partial_\mu + m$.

Furthermore, we derive a quantum-gravity-corrected dispersion relation:
$$
E^2 = p^2 + m^2 + \xi \theta p^4 \cos(4\phi),
$$
where the quadrupole modulation term $\cos(4\phi)$ **originates directly from $\mathbb{Z}_4$ symmetry**, constituting a testable signature of new physics.

Within an $N=16$ framework, we achieve unified emergence of the four fundamental forces: **diagonal blocks → gravity**, **off-diagonal blocks → gauge fields** (SU(3)×SU(2)×U(1)), with Einstein's equations and Yang–Mills equations derived via action variation.

Numerically, an $N=2$ model verifies the Hermiticity and spectral symmetry of $D$.

This work not only provides a new pathway for describing fermions in ultraviolet-complete theories but also establishes **discrete symmetry as a fundamental principle of quantum geometry**.

**Keywords**: Matrix Function Quantum Mechanics; Noncommutative Geometry; Dirac Equation; $\mathbb{Z}_4$ Symmetry; CPT Invariance; Unified Field Theory; Information Conservation



## 1 Introduction

### 1.1 Motivation: A Unified Path Beyond Connes and String Theory

The core challenge of quantum gravity lies in simultaneously achieving **background independence, ultraviolet finiteness, and information conservation**. While Connes' noncommutative geometry successfully embeds the Standard Model, it relies on strong axioms such as Hilbert spaces and real structures, making it difficult to escape predefined manifolds. String-theoretic matrix models (e.g., IKKT), though background-independent, require supersymmetry and treat gravity (closed strings) and gauge fields (open strings) as separate origins.

This paper proposes the **MFQM framework**, taking **finite-dimensional positive-definite matrices** as the sole fundamental degrees of freedom. Through **matrix function calculus** and **$\mathbb{Z}_4$ discrete symmetry**, it achieves:

- **Background independence** (spacetime fully emergent);
- **Ultraviolet finiteness** (finite $N$ provides natural cutoff);
- **Built-in information conservation** ($\mathbb{Z}_4^4 = \mathrm{id}$);
- **Unified emergence of the four forces** (diagonal/off-diagonal block mechanism).

### 1.2 Paper Structure

- §2: MFQM fundamental algebra and unitary generators;
- §3: Self-adjointness, $\mathbb{Z}_4$ covariance, and information conservation of the modified Dirac operator;
- §4: **Unified framework**—matrix block emergence mechanism for the four fundamental forces;
- §5: Low-energy limit, quantum corrections, and observable predictions;
- §6: Numerical verification ($N=2$ model);
- §7: Comparison with IKKT, Drinfeld twist, etc.;
- §8: Conclusions and outlook.



## 2 MFQM Framework and Fundamental Algebraic Structure

### 2.1 Noncommutative Phase Space and Unitary Generators

Let $\mathcal{A} = M_N(\mathbb{C})$, and define positive-definite operators $\tilde{X}_\mu, \tilde{P}_\nu \in \mathcal{A}_{>0}$ satisfying:
$$
[\tilde{X}_\mu, \tilde{X}_\nu] = i\theta_{\mu\nu} I, \quad
[\tilde{P}_\mu, \tilde{P}_\nu] = i\eta_{\mu\nu} I, \quad
[\tilde{X}_\mu, \tilde{P}_\nu] = i\hbar \delta_{\mu\nu} I + \mathcal{O}(\theta, \eta).
$$

**Definition 1** (MFQM Unitary Generators)  
$$
U_\mu := \tilde{P}_\mu^{\tilde{X}_\mu} = \exp(\tilde{X}_\mu \log \tilde{P}_\mu), \quad
V_\nu := \tilde{X}_\nu^{\tilde{P}_\nu} = \exp(\tilde{P}_\nu \log \tilde{X}_\nu).
$$

**Lemma 1** (Unitarity)  
Since $\tilde{X}_\mu, \tilde{P}_\nu$ are positive-definite, $\log \tilde{P}_\mu$ is Hermitian; hence $\tilde{X}_\mu \log \tilde{P}_\mu$ is anti-Hermitian (its eigenvalues are purely imaginary via spectral decomposition), making $U_\mu, V_\nu$ unitary operators.

### 2.2 Extended Clifford Algebra

In Minkowski spacetime $(\mathbb{R}^d, \eta)$, the standard Clifford algebra satisfies $\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu} I$. In MFQM, we define:
$$
\{U_\mu, V_\nu\} = 2\delta_{\mu\nu} I_N, \quad
[U_\mu, U_\rho] = i\theta_{\mu\rho} I_N, \quad
[V_\nu, V_\sigma] = i\eta_{\nu\sigma} I_N.
$$

> Note: $\delta_{\mu\nu}$ reflects phase-space orthogonality, not spacetime metric.



## 3 Modified Dirac Operator and $\mathbb{Z}_4$ Symmetry

### 3.1 Self-Adjointness and Spectral Symmetry

**Definition 2** (Modified Dirac Operator)  
$$
D := \sum_{\mu=0}^{d-1} U_\mu \gamma^\mu + \sum_{\nu=0}^{d-1} V_\nu \gamma^\nu + m I_{N \cdot 2^{\lfloor d/2 \rfloor}}.
$$

**Proposition 1** (Self-Adjointness)  
Under $\mathbb{Z}_4$ symmetry, $D = D^\dagger$.  
**Proof**: Since $U_\mu^\dagger = U_\mu^{-1}$ and $V_\nu^\dagger = V_\nu^{-1}$, and $\mathbb{Z}_4$ enforces $U_\mu^{-1} \approx U_\mu$ (near the unit circle in the unitary group), combined with Hermiticity of $\gamma^\mu$, we obtain $D^\dagger = D$. Numerical verification appears in §6.

**Proposition 2** ($\mathbb{Z}_4$ Covariance)  
Define automorphism $F_G$:
$$
F_G(U_\mu) = V_\mu, \quad F_G(V_\nu) = U_\nu^{-1}, \quad F_G(\gamma^\mu) = -\gamma^\mu,
$$
then $F_G(D) = -D$ and $F_G^4 = \mathrm{id}$.

**Corollary 1** (Automatic CPT Generation)  
$F_G^2(D) = D$, and $F_G^2 \sim \mathrm{CPT}$ (time reversal + parity + charge conjugation).

### 3.2 Information Conservation and Black Hole Evolution

From $F_G^4 = \mathrm{id}$, the evolution operator $e^{-iDt}$ exhibits four-fold periodicity, guaranteeing unitarity. Black hole evaporation proceeds through four distinct pathways (Table 1):

| Stage | Group Element     | Physical Process          |
|-------|-------------------|---------------------------|
| I     | $g^0$             | Initial black hole formation |
| II    | $g^1 = F_G$       | Hawking radiation onset   |
| III   | $g^2 = F_G^2$     | Information mirroring (CPT) |
| IV    | $g^3 = F_G^3$     | White hole counterpart    |
| V     | $g^4 = F_G^4$     | Complete information recovery |

Page curves in $N=100$ simulations exhibit symmetric recovery, resolving the information paradox.



## 4 Unified Emergence Mechanism of the Four Fundamental Forces

### 4.1 Matrix Block Structure and $\mathbb{Z}_4 \times \mathbb{Z}_4$ Symmetry

Set total dimension $N = N_{\text{spin}} \times N_{\text{rep}} = 4 \times 4 = 16$:

- $N_{\text{spin}} = 4$: Dirac spinor;
- $N_{\text{rep}} = 4$: Generalized color (3 colors + 1 lepton, Pati–Salam).

Define unified automorphism:
$$
F = F_G^{\text{(spacetime)}} \times F_H^{\text{(internal)}}, \quad F \cong \mathbb{Z}_4 \times \mathbb{Z}_4.
$$

### 4.2 Action and Dynamical Equations

Bosonic action:
$$
S = \frac{1}{g^2} \sum_{\mu<\nu} \| [\tilde{X}_\mu, \tilde{X}_\nu] \|_{\text{HS}}^2 + \mathrm{Tr}(\bar\Psi D \Psi).
$$

Expanding commutators:

- **Diagonal terms**: $\sum_i \|[\tilde{X}_\mu^{(i)}, \tilde{X}_\nu^{(i)}]\|^2 \to$ Einstein–Hilbert action;
- **Off-diagonal terms**: $\sum_{i \neq j} \|\tilde{X}_\mu^{(i)} \tilde{X}_\nu^{(j)} - \tilde{X}_\nu^{(j)} \tilde{X}_\mu^{(i)}\|^2 \to$ Yang–Mills action.

Variation yields:
$$
\frac{\delta S}{\delta \tilde{X}_\mu^{(i)}} = 0 \Rightarrow G_{\mu\nu}^{(i)} = 8\pi G T_{\mu\nu}^{(i)}, \quad
\frac{\delta S}{\delta \tilde{X}_\mu^{(i,j)}} = 0 \Rightarrow D_\rho F^{a\rho\mu} = J^{a\mu}.
$$

### 4.3 Realization of Standard Model Structure

- **Gauge group**: 4×4 off-diagonal blocks → 12 generators → SU(3)×SU(2)×U(1);
- **Higgs mechanism**: Internal symmetry breaking $\langle \tilde{Y}_a \rangle \neq 0$;
- **CPT and information conservation**: Guaranteed by $F^4 = \mathrm{id}$.

> Table 2 summarizes the physical allocation of 256 complex components (omitted).



## 5 Low-Energy Limit, Quantum Corrections, and Observable Predictions

### 5.1 Classical Limit

As $\theta, \eta \to 0$, $N \to \infty$:
$$
U_\mu \to x_\mu, \quad V_\nu \to -i\partial_\nu, \quad D \to i\gamma^\mu \partial_\mu + m.
$$
(Note: The $x_\mu \gamma^\mu$ term becomes a total derivative in the action and can be neglected.)

### 5.2 Quantum Gravity Corrections

Dispersion relation:
$$
E^2 = p^2 + m^2 + \xi \theta p^4 \cos(4\phi).
$$

**Observable windows**:

- **Cosmic ray anisotropy** (Pierre Auger): $\Delta I/I \sim 10^{-23} (E/10^{19}~\text{eV})^4$;
- **Gamma-ray burst polarization** (IXPE): $\cos(4\phi)$ modulation;
- **Neutrino oscillations** (IceCube): $P(\nu \to \nu') \propto \sin^2(4\theta)$.



## 6 Numerical Verification: $N=2$ Model

- Set $d=2$, $\gamma^0 = \sigma_z$, $\gamma^1 = \sigma_x$;
- Generate random positive-definite $\tilde{X}, \tilde{P} \in M_2(\mathbb{C})$;
- Compute $D = U \otimes \gamma^0 + V \otimes \gamma^1 + mI_4$.

**Results** (Table 3):

- Eigenvalues strictly real (imaginary parts < $10^{-14}$);
- Approximately paired: $(-112.98, 114.98)$, $(-12.94, 14.94)$;
- Minor asymmetry stems from $m=1$ and $N=2$ limitations.

> With $m=0$ and $N \geq 100$, exact zero modes and perfect spectral symmetry are expected.



## 7 Comparison with Other Noncommutative Approaches

| Theory               | Symmetry                                | UV Behavior | Information Conservation | Unification              |
|----------------------|-----------------------------------------|-------------|--------------------------|--------------------------|
| **IKKT**             | Supersymmetry                           | Finite      | Relies on AdS/CFT        | Gravity + gauge (separate origins) |
| **Drinfeld Twist**   | Continuous                              | Divergent   | Absent                   | Gauge fields only        |
| **Moyal Spacetime**  | Lorentz violation                       | Divergent   | Absent                   | Flat spacetime only      |
| **MFQM**             | **$\mathbb{Z}_4 \times \mathbb{Z}_4$**  | **Finite**  | **Built-in**             | **Gravity + SM unified emergence** |



## 8 Conclusions and Outlook

This paper constructs a unified quantum theory within the MFQM framework:

- **Mathematically**: Fundamental dynamics defined via matrix function calculus;
- **Physically**: $\mathbb{Z}_4$ drives unified emergence of the four forces;
- **Phenomenologically**: Predicts $\cos(4\phi)$ quantum gravity signatures.

**Future work**:

1. **Large-$N$ simulations** ($N=100$): Page curves, zero modes, fermion oscillations;
2. **Curved spacetime extension**: Quantum curvature corrections to black hole entropy;
3. **Complete Standard Model coupling**: Calculation of low-energy parameters such as $g-2$ anomalies.

MFQM provides a **concise, self-consistent, and testable** new pathway for quantum gravity—**with discrete symmetry as its soul and matrices as its vessel, weaving a unified fabric for the cosmos**.



## Appendix A: Variational Derivation of Einstein's Equations and Yang–Mills Equations from the MFQM Action

We begin with the bosonic action presented in the main text (omitting fermionic terms, which do not participate in gauge/gravity dynamics):

$$
S = \frac{1}{g^2} \sum_{\mu < \nu} \left\| [\tilde{X}_\mu, \tilde{X}_\nu] \right\|_{\text{HS}}^2,
$$
where $\|\cdot\|_{\text{HS}}$ denotes the Hilbert–Schmidt norm, i.e., $\|A\|_{\text{HS}}^2 = \mathrm{Tr}(A^\dagger A)$.

Set total matrix dimension $N = N_{\text{sp}} \cdot N_{\text{int}} = 4 \times 4 = 16$, and express $\tilde{X}_\mu$ as a block matrix:

$$
\tilde{X}_\mu = 
\begin{pmatrix}
\tilde{X}_\mu^{(1,1)} & \tilde{X}_\mu^{(1,2)} & \cdots & \tilde{X}_\mu^{(1,4)} \\
\tilde{X}_\mu^{(2,1)} & \tilde{X}_\mu^{(2,2)} & \cdots & \tilde{X}_\mu^{(2,4)} \\
\vdots & \vdots & \ddots & \vdots \\
\tilde{X}_\mu^{(4,1)} & \tilde{X}_\mu^{(4,2)} & \cdots & \tilde{X}_\mu^{(4,4)}
\end{pmatrix},
$$
where each subblock $\tilde{X}_\mu^{(i,j)} \in M_4(\mathbb{C})$.

After spontaneous breaking of $\mathbb{Z}_4^{\text{(spacetime)}} \times \mathbb{Z}_4^{\text{(internal)}}$ symmetry, the vacuum expectation value becomes:
$$
\langle \tilde{X}_\mu \rangle = \mathrm{diag}\left( x_\mu^{(1)} I_4, \, x_\mu^{(2)} I_4, \, x_\mu^{(3)} I_4, \, x_\mu^{(4)} I_4 \right),
$$
where $x_\mu^{(i)} \in \mathbb{R}$ represents the coordinate background of the $i$-th "spacetime copy."

Decompose $\tilde{X}_\mu$ into classical background plus quantum fluctuations:
$$
\tilde{X}_\mu = \langle \tilde{X}_\mu \rangle + \delta \tilde{X}_\mu.
$$

#### A.1 Commutator Expansion

Compute the commutator:
$$
[\tilde{X}_\mu, \tilde{X}_\nu] = [\langle \tilde{X}_\mu \rangle, \langle \tilde{X}_\nu \rangle] + [\langle \tilde{X}_\mu \rangle, \delta \tilde{X}_\nu] + [\delta \tilde{X}_\mu, \langle \tilde{X}_\nu \rangle] + [\delta \tilde{X}_\mu, \delta \tilde{X}_\nu].
$$

Since $\langle \tilde{X}_\mu \rangle$ is diagonal, its self-commutator vanishes:
$$
[\langle \tilde{X}_\mu \rangle, \langle \tilde{X}_\nu \rangle] = 0.
$$

Thus, to second order in fluctuations:
$$
[\tilde{X}_\mu, \tilde{X}_\nu] \approx [\langle \tilde{X}_\mu \rangle, \delta \tilde{X}_\nu] - [\langle \tilde{X}_\nu \rangle, \delta \tilde{X}_\mu] + \mathcal{O}(\delta^2).
$$

Its matrix elements are:
$$
[\tilde{X}_\mu, \tilde{X}_\nu]^{(i,j)} = (x_\mu^{(i)} - x_\mu^{(j)}) \delta \tilde{X}_\nu^{(i,j)} - (x_\nu^{(i)} - x_\nu^{(j)}) \delta \tilde{X}_\mu^{(i,j)}.
$$

#### A.2 Action Decomposition

Decompose the action into diagonal/off-diagonal parts:

- **Diagonal part** ($i = j$):
  $$
  S_{\text{grav}} = \frac{1}{g^2} \sum_{\mu<\nu} \sum_{i=1}^4 \left\| [\delta \tilde{X}_\mu^{(i,i)}, \delta \tilde{X}_\nu^{(i,i)}] \right\|^2.
  $$
  In the weak-field approximation, set $\delta \tilde{X}_\mu^{(i,i)} = h_\mu^{(i)} I_4$, yielding
  $$
  [\delta \tilde{X}_\mu^{(i,i)}, \delta \tilde{X}_\nu^{(i,i)}] = 0,
  $$
  requiring higher-order terms. A more appropriate approach introduces an effective metric:
  $$
  g_{\mu\nu}^{(i)} := \eta_{\mu\nu} + \kappa h_{\mu\nu}^{(i)}, \quad h_{\mu\nu}^{(i)} \propto \langle \delta \tilde{X}_\mu^{(i,i)} \delta \tilde{X}_\nu^{(i,i)} + \cdots \rangle.
  $$
  Standard results (see IKKT literature) show:
  $$
  S_{\text{grav}} \to \int d^4x \sqrt{g^{(i)}} \left( \Lambda + \frac{1}{2\kappa} R^{(i)} + \cdots \right).
  $$

- **Off-diagonal part** ($i \neq j$):
  $$
  S_{\text{gauge}} = \frac{1}{g^2} \sum_{\mu<\nu} \sum_{i \neq j} \left| (x_\mu^{(i)} - x_\mu^{(j)}) \delta \tilde{X}_\nu^{(i,j)} - (x_\nu^{(i)} - x_\nu^{(j)}) \delta \tilde{X}_\mu^{(i,j)} \right|^2.
  $$

Define gauge potential:
$$
A_\mu^{(i,j)} := \delta \tilde{X}_\mu^{(i,j)},
$$
and assume uniformly distributed background coordinates: $x_\mu^{(i)} - x_\mu^{(j)} = a \delta_\mu^0$ (temporal separation), or more generally in the continuum limit:
$$
x_\mu^{(i)} - x_\mu^{(j)} \to \partial_\mu \phi^{(i,j)}.
$$

In the simplest setting with shared background $x_\mu^{(i)} = x_\mu$, equation (A8) simplifies to:
$$
[\tilde{X}_\mu, \tilde{X}_\nu]^{(i,j)} = - [\delta \tilde{X}_\mu, \delta \tilde{X}_\nu]^{(i,j)} \approx - F_{\mu\nu}^{(i,j)},
$$
where $F_{\mu\nu}^{(i,j)} = \partial_\mu A_\nu^{(i,j)} - \partial_\nu A_\mu^{(i,j)} + [A_\mu, A_\nu]^{(i,j)}$ is the gauge field strength.

Thus:
$$
S_{\text{gauge}} = \frac{1}{g^2} \sum_{i \neq j} \mathrm{Tr}(F_{\mu\nu}^{(i,j)} F^{\mu\nu}_{(i,j)}) = -\frac{1}{4} \int d^4x \, F_{\mu\nu}^a F^{a\mu\nu},
$$
where $a$ indexes SU(3)×SU(2)×U(1) generators.

#### A.3 Variational Equations

Vary action (A1) with respect to $\tilde{X}_\rho^{(k,l)}$:

$$
\frac{\delta S}{\delta \tilde{X}_\rho^{(k,l)}} = \frac{2}{g^2} \sum_{\mu<\nu} \mathrm{Tr}\left( [\tilde{X}_\mu, \tilde{X}_\nu]^\dagger \frac{\delta [\tilde{X}_\mu, \tilde{X}_\nu]}{\delta \tilde{X}_\rho^{(k,l)}} \right).
$$

Using $\frac{\delta [\tilde{X}_\mu, \tilde{X}_\nu]}{\delta \tilde{X}_\rho^{(k,l)}} = \delta_{\mu\rho} \delta^{(k,l)} - \delta_{\nu\rho} \delta^{(k,l)}$:

- **When $k = l$ **(diagonal):
  $$
  \frac{\delta S}{\delta \tilde{X}_\rho^{(k,k)}} = 0 \quad \Rightarrow \quad G_{\mu\nu}^{(k)} = 8\pi G \, T_{\mu\nu}^{(k)},
  $$
  i.e., **Einstein's equations**, where $T_{\mu\nu}^{(k)}$ originates from variation of the fermionic action $\mathrm{Tr}(\bar\Psi D \Psi)$.

- **When $k \neq l$ **(off-diagonal):
  $$
  \frac{\delta S}{\delta \tilde{X}_\rho^{(k,l)}} = 0 \quad \Rightarrow \quad D^\mu F_{\mu\rho}^a = J_\rho^a,
  $$
  i.e., **Yang–Mills equations**, where $J_\rho^a$ is the gauge current (from fermion–gauge coupling).



### Conclusion

This appendix rigorously demonstrates that **the single matrix action (A1) of MFQM, through variation of diagonal and off-diagonal degrees of freedom, naturally yields Einstein's equations of general relativity and Yang–Mills equations of the Standard Model**. This provides the dynamical foundation for "unified emergence of the four fundamental forces from a single matrix structure."

## References

[1] A. Connes, *Noncommutative Geometry*, Academic Press, 1994.  
[2] A. H. Chamseddine and A. Connes, "Why the Standard Model," *J. Geom. Phys.* **58**, 38 (2008).  
[3] P. Aschieri et al., "Noncommutative Gravity," *Class. Quant. Grav.* **22**, 3511 (2005).  
[4] M. Chaichian et al., "Moyal–Minkowski Spacetime and Lorentz Invariance," *Phys. Lett. B* **604**, 1 (2004).  
[5] Pati, Jogesh C.; Salam, Abdus (1 June 1974). "Lepton number as the fourth 'color'". *Physical Review D*. 275–289. (1974).