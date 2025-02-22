---
title: "Machine Learning on Battery Cycling Data for Health Estimation"
excerpt: "<br/><img src='/images/Final] Machine Learning on Battery Cycling Data for Health Estimation.pptx.png'>"
collection: portfolio
---

## Abstract
Lithium-ion batteries, widely used in electric vehicles and consumer electronics, are essential to modern energy storage systems. While their primary electrochemical reactions facilitate efficient energy storage and release, complex and often immeasurable side reactions contribute to gradual degradation, reducing battery capacity over time. This degradation shortens battery lifespan and poses risks of system failures, property damage, and personal injury. Accurate prediction of a battery's State of Health (SOH) is critical for ensuring safety, optimizing performance, and extending battery longevity. Given the inherent complexity and ambiguous nature of battery degradation mechanisms, deep learning techniques—particularly neural networks—offer a powerful solution. By leveraging large datasets from battery cycling, these models can identify non-linear aging patterns that traditional methods may overlook. This study utilizes battery cycling data comprising capacity, voltage, and current to develop a predictive model for SOH. In addition to these variables, the battery’s State of Charge (SOC) is computed and integrated as a key input feature. To further enhance the model's performance, derivatives of voltage and current (dV/dt and dI/dt) are calculated, capturing dynamic changes during cycling and increasing the input variable set to five: voltage, current, SOC, dV/dt, and dI/dt. A neural network is trained and tested using these features to predict SOH with improved accuracy. This approach demonstrates the potential of deep learning models to bypass traditional barriers in battery health estimation. Accurate SOH prediction not only mitigates safety risks but also contributes to the sustainable use of lithium-ion batteries, offering significant environmental benefits by extending battery life and reducing electronic waste.

## Authors
- **Student Author:** Jay Sakarvadia  
- **Faculty Mentor:** Dr. Anthony Bombik  
- **Program:** OUR Academic Year Research Program  
- **College:** William States Lee College of Engineering  

## Research Approach
This study develops a predictive model for SOH using battery cycling data, leveraging deep learning techniques. Key steps include:
- **Feature Extraction:**  
  - Voltage, Current, and State of Charge (SOC) as primary inputs.  
  - Computing **dV/dt** and **dI/dt** to capture dynamic changes in battery cycling.
- **Neural Network Implementation:**  
  - Training a deep learning model using five input variables to enhance prediction accuracy.  
  - Identifying **non-linear aging patterns** often missed by traditional methods.

## Key Contributions
- **Enhanced SOH prediction** using deep learning over conventional techniques.  
- **Improved safety** by detecting potential failures early.  
- **Environmental impact** by extending battery lifespan and reducing electronic waste.  

## Impact
Accurate SOH prediction ensures **safer, longer-lasting batteries**, benefiting industries relying on lithium-ion energy storage while contributing to sustainability efforts.

---
