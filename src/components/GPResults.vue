<script lang="ts" setup>
import { store } from '@/store';
import { watch } from 'vue';

watch(() => store.results, () => {} )

  const numberOfMonths = store.investmentFormData.numberOfMonths;
  const arcaResult = store.results.arcaResult.toFixed(2);
  const selicResult = store.results.selicResult.toFixed(2);

</script>
<template>
  <section class="results">
    <div class="results-box">
      <p>{{`Em ${numberOfMonths} meses você teria`}}</p>
      <div class="result">{{ `R$ ${arcaResult}` }}</div>
      <hr class="line-marker" />
    </div>
    <div class="observation-box">
      <p>taxa selic:<span>9,25%</span>{{ selicResult }}</p>
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
      font-size: 32px;
      font-weight: 600;
      color: $dark;
    }
    .result {
      font-size: 88px;
      font-weight: 600;
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
        margin-left: 16px;
        text-transform: lowercase;
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
