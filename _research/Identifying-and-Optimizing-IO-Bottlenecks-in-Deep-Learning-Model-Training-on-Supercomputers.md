---
title: "Profiling I/O Behavior of a Particle-Physics Distributed Deep Learning Workload on the Polaris Supercomputer"
collection: research
category: projects
permalink: /research/Profiling-IO-Behavior-of-a-Particle-Physics Distributed-Deep-Learning-Workload-on-the-Polaris-Supercomputer
excerpt: 'Utilizing profilers and tracers to analyze I/O and GPU activity in order to optimize large-scale deep learning model training on supercomputers.'
date: 2023-08-03
venue: 'Argonne National Laboratory''s Learning on The Lawn Summer Research Conference'
#slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://drive.google.com/file/d/16ZJ7nTYQNC8zkdU-heT7gn4j1FmMLGCo/view?usp=sharing'
posterurl: 'https://drive.google.com/file/d/1Zq2On1txC2-BGxUahsy0vmreCEBePWRG/view?usp=sharing'
display_label: "Presented"
display_preposition: "at"
# citation: 'Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2).'
---

AI models, particularly neural networks, have become pivotal and popular. Inspired by the human brain, neural networks excel in processing complex data, pattern recognition, and problem-solving. They can be used to create groundbreaking applications in various fields. Training these networks is computationally expensive, leading scientists to use supercomputers for distributed computation. This causes significant delays in I/O (storage and retrieval of data from a file system). These delays can be analyzed to identify performance bottlenecks and inform optimizations to the system architecture to better compute time and costs. With the goal of understanding I/O behaviors for complex AI models and the capabilities of profiling tools, we deployed the "CosmicTagger" model on the Polaris supercomputer. We utilized NVIDIA Nsight to trace GPU activity and PyDarshan to trace I/O activity during model training. Moving forward, we aim to correlate and combine these two data streams using a standard time format to observe I/O bottlenecks during training, providing insights into opportunities for potential I/O optimizations.
