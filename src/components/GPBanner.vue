<template>
  <div class="banner">
    <div class="backdrop">
      <h1>Simulador de investimento</h1>
      <p>Descubra o quanto você pode economizar.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
.banner {
  // height: 347px;
  color: $white;
  background-image: url('../assets/images/header-bg.jpg');
  background-size: cover;
  background-color: $dark;


  .backdrop {
    background-color: $dark;
    height: 100%;
    padding: 80px 120px;
    opacity: 0.9;
  }
  h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 58px;
    margin-bottom: 8px;
    @include for-small-devices {
      font-size: 26px;
      line-height: 31px;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    @include for-small-devices {
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>
