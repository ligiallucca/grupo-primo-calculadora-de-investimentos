<template>
  <div class="form-field">
    <label>Quanto você gostaria de investir? </label>
    <input class="gp-slider" type="range" min="0" max="100" value="0" />
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
label {
  color: $dark;
  font-size: 28px;
  margin-bottom: 32px;
}
.gp-slider {
  width: 100%;
}
input[type='range'] {
  -webkit-appearance: none;
  margin-right: 15px;
  height: 7px;
  background: $grey-light;
  border-radius: 5px;
  background-repeat: no-repeat;
  accent-color: $green;
}

[dir='rtl'] input[type='range'] {
  background: $green;
  background-image: linear-gradient($green, $green);
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: $green;
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  background-image: linear-gradient($green, $green);
  height: 20px;
}

input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: $green;
  background-image: linear-gradient($green, $green);
  cursor: pointer;
}

input[type='range']::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: $green;
  cursor: pointer;
}

input[type='range']::-webkit-slider-thumb:hover {
  background: darken($color: $green, $amount: 10);
}

input[type='range']::-moz-range-thumb:hover {
  background: darken($color: $green, $amount: 10);
}

input[type='range']::-ms-thumb:hover {
  background: darken($color: $green, $amount: 10);
}

/* Input Track */
input[type='range']::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>
