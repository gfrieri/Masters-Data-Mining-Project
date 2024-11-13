<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 2: External Data</h1>
    </div>
    <div class="content">
      <p>
        The next external data repositories can be used to enrich the project's analysis:
      </p>

      <h2>StockAnalysis.com</h2>
      <h3>Repository:</h3>
      <ul>
        <li>
          <a href="https://stockanalysis.com/stocks/nvda/employees/" target="_blank">NVIDIA Employees</a>
        </li>
      </ul>
      <h3>Relevance:</h3>
      <p>
        Understanding a company's employee trends can provide insight into it's operational health and strategic direction. 
        Workforce changes often correlate with broader financial and market performance, offering additional context for stock price behavior.
      </p>
      <h3>Impact:</h3>
      <p>
        Incorporating employee data enhances the model's ability to capture company-specific factors that may influence 
        stock prices. Workforce dynamics, combined with external macroeconomic indicators, provide a holistic view of performance, 
        improving the predictive accuracy of the model.
      </p>

      <h2>Yahoo! Finance</h2>
      <h3>Repositories:</h3>
      <ul>
        <li>
          <a href="https://finance.yahoo.com/quote/%5EGSPC/" target="_blank">Standard & Poor's 500 Index (S&P 500)</a>
        </li>
        <li>
          <a href="https://finance.yahoo.com/quote/%5EVIX/" target="_blank">Chicago Board Options Exchange Volatility Index (VIX)</a>
        </li>
      </ul>
      <h3>Relevance:</h3>
      <ul>
        <li>The S&P 500 reflects overall market trends, offering context for stock performance within the broader market.</li>
        <li>The VIX measures market volatility and investor sentiment, providing insight into how uncertainty affects stock prices.</li>
      </ul>
      <h3>Impact:</h3>
      <p>
        Incorporating these indices enhances the model's ability to capture market-wide trends (S&P 500) and volatility-driven risks (VIX), 
        improving accuracy and robustness in predicting stock price under different economic conditions.
      </p>

      <h2>Federal Reserve Economic Data</h2>
      <h3>Repositories:</h3>
      <ul>
        <li>
          <a href="https://fred.stlouisfed.org/series/GDP" target="_blank">Gross Domestic Product (GDP)</a>
        </li>
        <li>
          <a href="https://fred.stlouisfed.org/series/UNRATE" target="_blank">Unemployment Rate (UNRATE)</a>
        </li>
        <li>
          <a href="https://fred.stlouisfed.org/series/CPIAUCSL" target="_blank">Consumer Price Index (CPI)</a>
        </li>
        <li>
          <a href="https://fred.stlouisfed.org/series/FEDFUNDS" target="_blank">Federal Funds Effective Rate (FEDFUNDS)</a>
        </li>
      </ul>
      <h3>Relevance:</h3>
      <ul>
        <li>GDP reflects overall economic performance, highlighting growth or contraction trends that can influence stock prices.</li>
        <li>The Unemployment Rate indicates labor market health, which impacts consumer spending and investor confidence, key drivers of stock performance.</li>
        <li>CPI measures inflation, affecting purchasing power, costs, and profit margins, directly influencing stock valuations.</li>
        <li>The Federal Funds Rate represents monetary policy stance, influencing borrowing costs and market liquidity, critical for stock market dynamics.</li>
      </ul>
      <h3>Impact:</h3>
      <p>
        Including these indicators allows the model to capture macroeconomic conditions (GDP, Unemployment, CPI) 
        and policy-driven effects (Federal Funds Rate) that shape stock price movements. This comprehensive view 
        improves prediction accuracy and robustness by linking stock price to broader economic forces.
      </p>
    </div>

    <div class="footer">
      Delivery date: September 15, 2024
      <br/>
      Developed by: Giuliano Frieri
    </div>
  </div>
</template>

<script>
export default {
  name: 'repositorios_externos',
};
</script>

<style scoped>
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

.content h3, h3 {
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

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}
</style>
