---
title: 'Riemannian Variational Flow Matching for Material and Protein Design'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Olga Zaghen
  - admin
  - Alison Pouplin
  - Cong Liu
  - Max Welling
  - Jan-Willem van de Meent
  - Erik J. Bekkers


# Author notes (optional)
author_notes:
  - ''
  - 'Equal contribution'
  - 'Equal contribution'
  - ''
  - ''
  - ''
  - ''

date: '2025-10-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
# publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: arXiv preprint
# publication_short: In *Arxiv*

abstract: We present Riemannian Gaussian Variational Flow Matching (RG-VFM), a geometric extension of Variational Flow Matching (VFM) for generative modeling on manifolds. In Euclidean space, predicting endpoints (VFM), velocities (FM), or noise (diffusion) are largely equivalent due to affine interpolations. On curved manifolds this equivalence breaks down, and we hypothesize that endpoint prediction provides a stronger learning signal by directly minimizing geodesic distances. Building on this insight, we derive a variational flow matching objective based on Riemannian Gaussian distributions, applicable to manifolds with closed-form geodesics. We formally analyze its relationship to Riemannian Flow Matching (RFM), exposing that the RFM objective lacks a curvature-dependent penalty - encoded via Jacobi fields - that is naturally present in RG-VFM. Experiments on synthetic spherical and hyperbolic benchmarks, as well as real-world tasks in material and protein generation, demonstrate that RG-VFM more effectively captures manifold structure and improves downstream performance over Euclidean and velocity-based baselines.




# Summary. An optional shortened abstract.
summary: We derive a variational objective for flow matching on manifolds with closed-form geodesics and test it on material and protein backbone generation.

tags:
  - arXiv Preprint 2025

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
# hugoblox:
#   ids:
#     doi: 10.5555/123456

# Custom links
links:
  - type: pdf
    url: "https://arxiv.org/abs/2510.01478"
#   - type: code
#     url: https://github.com/HugoBlox/hugo-blox-builder
#   - type: dataset
#     url: https://github.com/HugoBlox/hugo-blox-builder
#   - type: slides
#     url: https://www.slideshare.net/
#   - type: source
#     url: https://github.com/HugoBlox/hugo-blox-builder
#   - type: video
#     url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

