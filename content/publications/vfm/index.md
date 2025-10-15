---
title: 'Variational Flow Matching for Graph Generation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Grigory Bartosh
  - Christian A. Naesseth
  - Max Welling
  - Jan-Willem van de Meent


# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'
  - ''
  - ''
  - ''

date: '2024-05-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
# publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Neurips 2024
# publication_short: In *Arxiv*

abstract: We present a formulation of flow matching as variational inference, which we refer to as variational flow matching (VFM). We use this formulation to develop CatFlow, a flow matching method for categorical data that is easy to implement, computationally efficient, and achieves strong results on graph generation tasks. In VFM, the objective is to approximate the posterior probability path, which is a distribution over possible end points of a trajectory. VFM admits both the original flow matching objective and the CatFlow objective as special cases. We also relate VFM to score-based models, in which the dynamics are stochastic rather than deterministic, and derive a bound on the model likelihood based on a reweighted VFM objective. We evaluate CatFlow on one abstract graph generation task and two molecular generation tasks. In all cases, CatFlow exceeds or matches performance of the current state-of-the-art models.


summary: We apply variational flow matching to VQ latent image generation through a hybrid discrete-continuous approach for improved image generation.

tags:
  - Neurips 2024

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
# hugoblox:
#   ids:
#     doi: 10.5555/123456

# Custom links
links:
  - type: pdf
    url: "https://arxiv.org/abs/2406.04843"
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

