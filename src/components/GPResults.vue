<script lang="ts" setup>
import { store } from '@/store';
</script>
<template>

  <section class="results">
    <div class="results-box">
      <p>{{`Em ${store.investmentFormData.numberOfMonths} meses investindo no 
      fundo Arca você teria`}}</p>
      <div class="result">{{ `R$ ${store.results.arcaResult.toFixed(2)}` }}</div>
      <hr class="line-marker" />
    </div>
    <div class="observation-box selic">
      <p>Com a rentabilidade da Selic você teria apenas:  </p>
      <p class="margin-top-8 text-bold"><span>R$ </span>{{ store.results.selicResult.toFixed(2) }}</p>
    </div>
    <div class="observation-box">
      
      <p>taxa selic:<span>9,25%</span></p>
      <span></span>
    </div>
    <div class="observation-box">
      <p>rentabilidade do arca:<span>18%a.a.</span></p>
      <span></span>
    </div>
    <div class="observation-container">
      <img src="../assets/images/question.svg" alt="" />
      <div class="observation-text">
        Valores utilizados no simulador de investimentos (referentes à data de última atualização -
        esses valores podem alterar de acordo com o mercado):
        <div class="observation">- Data da última atualização: 10/01/2024</div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
.results {
  width: 660px;
  .results-box {
    p {
      font-size: 26px;
      font-weight: 500;
      color: $dark;
    }
    .result {
      font-size: 72px;
      font-weight: 600;
      margin-top: 16px;
      text-transform: capitalize;
    }

    .line-marker {
      border: 4px solid $green;
      border-radius: 8px;
      margin: 0;
    }
  }
  .observation-box {
    padding: 32px;
    margin-top: 24px;
    border-radius: 16px;
    background-color: $grey-light;
    p {
      font-size: 16px;
      text-transform: uppercase;

      span {
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
  .observation-container {
    width: 96%;
    display: flex;
    font-size: 14px;
    color: $grey-dark;
    margin-top: 48px;
    align-items: flex-start;

    img {
      margin-right: 32px;
    }
  }
  .observation {
    font-size: 14px;
    color: $grey-dark;
    margin-top: 24px;
  }
}
</style>
