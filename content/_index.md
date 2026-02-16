---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: /uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: hero
    id: papers
    content:
      title: Featured Publications
      text: |
        For more details, visit my <a href="https://scholar.google.com/citations?user=flooreijkelboom" target="_blank" style="font-weight: bold; color: #2961ea;">Google Scholar</a>.
    design:
      css_class: text-center
  - block: markdown
    content:
      title: ''
      text: |

        ## Preprint

        **Categorical Flow Maps**  
        Daan Roos*, Oscar Davis*, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom*</span>, Michael Bronstein, Max Welling, İsmail İlkan Ceylan, Luca Ambrogioni, Jan-Willem van de Meent

        *Under review*


        **Discovering Lie Groups with Flow Matching**  
        Jung Yeon Park, Yuxuan Chen, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom</span>, Jan-Willem van de Meent, Lawson L.S. Wong, Robin Walters  
        
        *Under review*

        ## Published


        **[Purrception: Variational Flow Matching for Vector-Quantized Image Generation](https://arxiv.org/abs/2510.01478)**  
        Răzvan-Andrei Matişan, Vincent Tao Hu, Grigory Bartosh, Björn Ommer, Cees GM Snoek, Max Welling, Jan-Willem van de Meent, Mohammad Mahdi Derakhshani*, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom*</span>  
        *ICLR 2026*

        **[Riemannian Variational Flow Matching for Material and Protein Design](https://arxiv.org/abs/2502.12981)**  
        Olga Zaghen, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom*</span>, Alison Pouplin*, Cong Liu, Max Welling, Jan-Willem van de Meent, Erik J. Bekkers  
        *ICLR 2026*


        **[Controlled Generation with Equivariant Variational Flow Matching](https://arxiv.org/abs/2506.18340)**  
        <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom</span>, Heiko Zimmermann, Sharvaree Vadgama, Erik J Bekkers, Max Welling, Christian A Naesseth*, Jan-Willem van de Meent*  
        *ICML 2025*

        **[Exponential Family Variational Flow Matching for Tabular Data Generation](https://arxiv.org/abs/2506.05940)**  
        Andrés Guzmán-Cordero*, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom*</span>, Jan-Willem van de Meent  
        *ICML 2025*

        **[Towards Variational Flow Matching on General Geometries](https://arxiv.org/abs/2502.12981)**  
        Olga Zaghen, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom</span>, Alison Pouplin, Erik J Bekkers  
        *ICLR 2025 Workshop on Deep Generative Model in Machine Learning (Best Paper award)*


        **[Variational Flow Matching for Graph Generation](https://arxiv.org/abs/2406.04843)**  
        <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom*</span>, Grigory Bartosh*, Christian A. Naesseth, Max Welling, Jan-Willem van de Meent  
        *NeurIPS 2024*

        **[Clifford Group Equivariant Simplicial Message Passing Networks](https://arxiv.org/abs/2402.10011)**  
        Cong Liu*, David Ruhe*, <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom</span>, Patrick Forré  
        *ICLR 2024*

        **[E(n) Equivariant Message Passing Simplicial Networks](https://arxiv.org/abs/2305.07100)**  
        <span style="font-weight: bold; color: #2961ea;">Floor Eijkelboom</span>, Rob Hesselink, Erik J Bekkers  
        *ICML 2024*
    design:
      css_class: 'container-fluid'
      css_style: 'max-width: 1200px; margin: 0 auto; padding: 0 2rem; width: 90%;'
---
