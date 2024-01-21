<template>
  <header>
    <h1>
      <img src="../assets/images/logo-grupo-primo.png" alt="logo do Grupo Primo" />
    </h1>
  </header>
</template>
<style lang="scss" scoped>
@import './../assets/main.scss';
header {
  display: flex;
  padding: 16px 120px;
  justify-content: start;
  @include for-small-devices {
    padding: 32px;
    width: 100vw;
  }
  img {
    width: 176px;
    height: 32px;
    @include for-small-devices {
      width: 120px;
      height: 22px;
    }
  }
}
</style>
