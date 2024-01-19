<template>
  <div class="banner">
    <h1>Simulador de investimento</h1>
    <p>Descubra o quanto você pode economizar.</p>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
.banner {
  width: 100%;
  height: 347px;
  color: $white;
  padding: 80px 120px;
  background-color: $dark;
  @include for-small-devices {
    height: 270px;
    padding: 88px 32px;
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
