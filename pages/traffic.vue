<script setup lang="ts">
import { ref } from "vue";

const MAX_LANE = 3;
const LANE_WIDTH = 50;

type Car = {
  id: number;
  x: number;
  lane: number;
  length: number;
  speed: number;
  desiredSpeed: number;
}

function getFrontOfCar({x, length}: Car): number {
  return x + length;
}

function areNextToEachOther(car1: Car, car2: Car): boolean {
  if (Math.abs(car1.lane - car2.lane) > 1) {
    return false;
  }

  if (car1.x < car2.x && getFrontOfCar(car1) > car2.x) {
    return true;
  }
  if (car2.x < car1.x && getFrontOfCar(car2) > car1.x) {
    return true;
  }

  return false;
}

const cars = ref<Car[]>([...Array(10).keys()].map((n: number) => ({
  id: n,
  x: (n * 10) % 100,
  lane: n % MAX_LANE,
  length: 100,
  speed: 100 * (n % 17) + 20,
  desiredSpeed: 50 + ((n*2)%20)
})));

const active = ref<boolean>(true);

setInterval(function () {
  if (!active.value) {
    return;
  }
  const road = document.getElementById('road');
  if (!road) {
    console.error('No road element');
    window.alert('There is no road')
    return;
  }
  const roadLength = road.clientWidth;
  cars.value = cars.value.map(function (car: Car, _, allCars: Car[]) {
    let newCarSpeed = car.x + (car.speed / 100);
    if (newCarSpeed >= roadLength) {
      newCarSpeed = -(car.length)
    }
    const otherCarsInLane: Car[] = allCars.filter(({id, lane}: Car) => lane === car.lane && id !== car.id);
    if (otherCarsInLane
        .some((otherCar: Car) => otherCar.x > car.x && otherCar.x < getFrontOfCar(car) + 10)
    ) {
      car.lane++
    }

    /**
     * if is going faster than car in front and has space on right, move to next lane
     * if there is no next lane, slow to speed of car in front
     * if there is space on left, move down a lane
     */
    return {
      ...car,
      x: newCarSpeed
    }
  })
},
    1000 / 60
)

</script>

<template>
<div class="traffic" id="road" :style="{height: `${MAX_LANE * LANE_WIDTH}px`}">
  <div v-for="(car) in cars" :key="car.id"
       class="traffic__car"
       :style="{
          left: `${car.x}px`,
          top: `${car.lane * 50}px`,
          width: `${car.length}px`,
          height: `${LANE_WIDTH * 0.9}px`
       }"
       v-text="car.id"
  />
</div>
  <label for="active">
    Active

  <input type="checkbox" v-model="active" id="active">
  </label>
</template>

<style lang="scss" scoped>
.traffic {
  position: relative;
  overflow-x: hidden;

  &__car {
    position: absolute;
    background-color: red;
    outline: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
</style>