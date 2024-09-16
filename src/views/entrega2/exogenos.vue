<template>
  <div class="container">
    <div class="header">
      <h1>Entrega 2: Repositorios Externos</h1>
    </div>
    <div class="content">
      <p>
        Los siguientes repositorios de datos externos pueden ser utilizados para enriquecer el análisis del proyecto:
      </p>

      <h2>Banco de la República - Inflación, PIB, Tasa de Cambio</h2>
      <h3>Repositorios:</h3>
      <ul>
        <li>
          <a href="https://totoro.banrep.gov.co/analytics/saw.dll?Go&lang=es&NQUser=publico&NQPassword=publico123&path=%2Fshared%2FSeries%20Estad%C3%ADsticas_T%2F1.%20PIB%2F1.%202015%2F1.19%20PIB_Total%20y%20por%20habitante%20a%20precios%20corrientes_IQY&Options=rdf" target="_blank">PIB Precios Corrientes</a>
        </li>
        <li>
          <a href="https://totoro.banrep.gov.co/analytics/saw.dll?Go&lang=es&NQUser=publico&NQPassword=publico123&path=%2Fshared%2FSeries%20Estad%C3%ADsticas_T%2F1.%20PIB%2F1.%202015%2F1.20%20PIB_Total%20y%20por%20habitante%20a%20precios%20constantes_IQY&Options=rdf" target="_blank">PIB Precios Constantes</a>
        </li>
        <li>
          <a href="https://totoro.banrep.gov.co/analytics/saw.dll?Download&Format=excel2007&Extension=.xls&BypassCache=true&lang=es&NQUser=publico&NQPassword=publico123&path=%2Fshared%2FSeries%20Estad%C3%ADsticas_T%2F1.%20Meta%20de%20inflaci%C3%B3n%20base%202018%2F1.1.INF_Serie%20historica%20Meta%20de%20inflacion%20IQY" target="_blank">Inflación Total y Meta</a>
        </li>
        <li>
          <a href="https://totoro.banrep.gov.co/analytics/saw.dll?Go&Action=prompt&path=%2Fshared%2FSeries%20Estad%C3%ADsticas_T%2F1.%20Tasa%20de%20Cambio%20Peso%20Colombiano%2F1.1%20TRM%20-%20Disponible%20desde%20el%2027%20de%20noviembre%20de%201991%2F1.1.16.TCM_Serie%20historica_ultimos_doce%20meses&Options=rdf&lang=es" target="_blank">TRM Peso-Dólar (Últimos 12 Meses)</a>
        </li>
      </ul>
      <h3>Relevancia:</h3>
      <p>
        La inflación y otras variables macroeconómicas (como el PIB, la tasa de cambio, tasas de interés) influyen directamente 
        en el comportamiento de los consumidores con respecto a las tarjetas de crédito. Integrar estas variables permitirá 
        identificar si ciertos cambios en el uso de las tarjetas están correlacionados con fenómenos económicos más amplios.
      </p>
      <h3>Impacto:</h3>
      <p>
        La integración de estas variables permitirá identificar si los cambios en el uso de las tarjetas de crédito están 
        correlacionados con fenómenos económicos más amplios, ayudando a predecir y modelar el riesgo crediticio bajo 
        diferentes condiciones económicas.
      </p>

      <h2>DANE - Encuesta Nacional de Empleo</h2>
      <h3>Repositorios:</h3>
      <ul>
        <li>
          <a href="https://www.dane.gov.co/index.php/estadisticas-por-tema/mercado-laboral/empleo-y-desempleo" target="_blank">Empleo y Desocupación</a>
        </li>
        <li>
          <a href="https://www.dane.gov.co/files/operaciones/RELAB/anex-RELAB-empleo-jun2024.xlsx" target="_blank">Relaciones Laborales (RELAB)</a>
        </li>
      </ul>
      <h3>Relevancia:</h3>
      <p>
        El empleo y el desempleo tienen una relación directa con la capacidad de las personas para cumplir con sus 
        obligaciones crediticias. Incluir datos sobre las tasas de desempleo, ingresos medios y tipo de empleo por 
        región puede proporcionar insights sobre cómo el estatus laboral afecta el uso y la deuda de tarjetas de crédito.
      </p>
      <h3>Impacto:</h3>
      <p>
        La integración de esta información podría mejorar la segmentación del análisis y ayudar a identificar áreas 
        geográficas o demográficas con mayor riesgo de incumplimiento en pagos, permitiendo una gestión de riesgos más precisa.
      </p>

      <h2>Superintendencia Financiera de Colombia - Sistema Financiero</h2>
      <h3>Repositorios:</h3>
      <ul>
        <li>
          <a href="https://www.superfinanciera.gov.co/publicaciones/60765/informes-y-cifrasinformesinforme-actualidad-del-sistema-financiero-colombiano-60765/" target="_blank">Informes del Sistema Financiero</a>
        </li>
        <li>
          <a href="https://www.superfinanciera.gov.co/powerbi/reportes/513/483/" target="_blank">Tasa de Interés Bancario Corriente</a>
        </li>
        <li>
          <a href="https://www.superfinanciera.gov.co/powerbi/reportes/536/483/" target="_blank">Tasas y Desembolsos por Modalidad de Crédito</a>
        </li>
      </ul>
      <h3>Relevancia:</h3>
      <p>
        Conocer el nivel de endeudamiento total de los individuos, más allá de las tarjetas de crédito, es fundamental para 
        entender su carga financiera. La integración de estos datos permitirá analizar el comportamiento de los consumidores 
        en relación a su deuda total y no solo a las tarjetas de crédito.
      </p>
      <h3>Impacto:</h3>
      <p>
        Puede ayudar a identificar patrones de sobreendeudamiento y riesgos sistémicos en el comportamiento de los 
        usuarios de crédito, mejorando así las predicciones de morosidad o riesgo de impago.
      </p>

      <h2>Datos Abiertos - Tasas de Interés Activas por Tipo de Crédito</h2>
      <ul>
        <li>
          <a href="https://www.datos.gov.co/Econom-a-y-Finanzas/Tasas-de-inter-s-activas-por-tipo-de-cr-dito/w9zh-vetq/data_preview" target="_blank">Tasas por Tipo de Crédito</a>
        </li>
      </ul>
      <h3>Relevancia:</h3>
      <p>
        Ofrece información detallada sobre las tasas de interés activas para distintos tipos de crédito en Colombia. 
        Se podría utilizar para entender cómo varían las condiciones crediticias entre diferentes tipos de productos financieros, 
        como tarjetas de crédito, préstamos hipotecarios, y créditos de consumo.
      </p>        
      <h3>Impacto:</h3>
      <p>
        La integración de estos datos permitirá analizar cómo las fluctuaciones en las tasas de interés afectan 
        el comportamiento de los usuarios en cuanto a la adquisición y uso de tarjetas de crédito;
        se puede mejorar la precisión de los modelos predictivos 
        en relación al riesgo crediticio, ya que las tasas de interés tienen un impacto directo en la 
        capacidad de las personas para pagar sus deudas.
      </p>
    </div>

    <div class="footer">
        Fecha de Entrega: Septiembre 15, 2024
        <br>
        Desarrollado por: Giuliano Frieri
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
