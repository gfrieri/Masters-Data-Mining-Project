<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 1: Model Selection</h1>
    </div>
    <div class="content">
      <p>
        The proposal for the project of Data Mining course in the Computer Engineer Master's Degree is estimating stock using both historical values and 
        external variables such as interest rates, economic indices, and other macroeconomic factors. The goal is to estimate the stock price of a company (NVIDIA in this case)
        using a machine learning model trained with this multi-sourced data.
      </p>
      <h3>Chosen Model: <a href="https://en.wikipedia.org/wiki/Gradient_boosting" target="_blank">Gradient Boosting Machine (GBM)</a></h3>
      <h3>Justification:</h3>
      <p>
        GBM models are highly effective for handling structured tabular data, which is the common structure used for storing 
        financial and macroeconomic data. Additionally, it has the capability to work with a large number of categorical and numerical 
        variables [1], which is ideal for a scenario like this project, where descriptions of various factors need to be taken 
        into account. Functionally, GBM builds a series of decision trees where each subsequent tree attempts to correct the errors of 
        the previous ones. While this model offers high accuracy, robustness against overfitting, and the ability to capture nonlinear relationships, 
        achieving this comes with a high computational cost. However, it can be argued that these advantages outweigh the costs. Moreover, there are 
        lighter versions, such as LightGBM, that offer faster processing and require fewer computational resources.
      </p>
      <h3>Relevance:</h3>
      <p>
        GBMs such as XGBoost are frequently used in the financial field for tasks such as asset value prediction, risk assessment, 
        and anomaly detection. These features make GBMs a relevant choice for predicting stock behavior, as it can 
        handle multiple exogenous variables and incorporate nonlinear relationships between these variables and stock prices. 
        Recent studies have shown that GBMs outperforms other machine learning models (including deep learning models) in 
        terms of accuracy and efficiency for financial problems [2]. Additionally, its ability to handle imbalanced data is 
        particularly useful when dealing with real financial data, which tends to have asymmetric distributions.
      </p>
      <h3>Libraries:</h3>
      <ul>
        <li><a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html" target="_blank">Scikit-learn:</a> Machine Learning library that includes a GBM implementation.</li>
        <li><a href="https://xgboost.readthedocs.io/en/stable/" target="_blank">XGBoost:</a> An efficient and scalable implementation of GBM.</li>
        <li><a href="https://lightgbm.readthedocs.io/en/stable/" target="_blank">LightGBM:</a> Lighter and quicker implementation of GBM.</li>
        <li><a href="https://catboost.ai/" target="_blank">CatBoost:</a> GBM library specialized for handling categorical variables.</li>
      </ul>
      <h3>References:</h3>
      <ol>
        <li>
          M. Reyners, "An Introduction to Gradient Boosting," Winter School on Quantitative Finance, Univ. of Amsterdam, 2019
          Available: <a href=https://staff.fnwi.uva.nl/p.j.c.spreij/winterschool/19ReynersPaper.pdf>https://staff.fnwi.uva.nl/p.j.c.spreij/winterschool/19ReynersPaper.pdf</a>. [Accessed: 18-aug-2024].
        </li>
        <li>
          M. Schmitt, "Deep Learning vs. Gradient Boosting: Benchmarking state-of-the-art machine learning algorithms for credit scoring,"
          arXiv, May 2022. Available: <a href=https://arxiv.org/abs/2205.10535>https://arxiv.org/abs/2205.10535</a>. [Accessed: 18-aug-2024].
        </li>
        <li>
          Main Dataset: 
          "NVIDIA Corporation (NVDA)," yahoo! finance:
          <a href="https://finance.yahoo.com/quote/NVDA/">https://finance.yahoo.com/quote/NVDA/</a>.
          [Accessed: 18-aug-2024].
        </li>
      </ol>
    </div>
    <div class="footer">
        Delivery date: August 18, 2024
        <br>
        Developed by: Giuliano Frieri
    </div>
  </div>
</template>

<script>
export default {
  name: 'seleccion_modelo',
};
</script>

<style scoped>
/* Estilo minimalista para la página */
.container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.header h1 {
  font-size: 28px;
  color: #333;
}

.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

.content h3 {
  color: #444;
  margin-top: 20px;
}

.content a {
  color: #007bff;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}
</style>
