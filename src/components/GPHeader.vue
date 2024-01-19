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
  width: 100%;
  display: flex;
  padding: 32px 120px;
  justify-content: start;
  @include for-small-devices {
    padding: 32px;
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
