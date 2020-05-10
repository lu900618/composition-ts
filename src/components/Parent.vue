<template>
  <h2>Parent</h2>
  <p>{{ data.message }}</p>
  <p>{{ data.count }}</p>
  <p>{{ computedCount }}</p>
  <button @click="addCount">click</button>
  <p>{{ countRef }}</p>
  <p>{{ position }}</p>
  <p>x: {{ x }}, y: {{ y }}</p>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  ComputedRef,
  watchEffect,
  WatchStopHandle,
  watch,
  ref,
  Ref,
  ToRefs
} from "vue";

import useMousePosition, { Position } from "@/hooks/useMousePosition";

interface ParentReactive {
  message: string;
  count: number;
}

export default defineComponent({
  props: {
    message: {
      type: String
    }
  },
  setup(props) {
    console.log(props.message);
    const data: ParentReactive = reactive<ParentReactive>({
      message: "这是父组件的message",
      count: 0
    });
    const computedCount: ComputedRef<number> = computed(() => data.count * 100);
    const stopWatch: WatchStopHandle = watch(
      () => data.count,
      (newCount, oldCount) => {
        console.log(newCount, oldCount);
      }
    );
    const stop: WatchStopHandle = watchEffect(() => {
      console.log(data.count);
    });
    function addCount() {
      data.count++;
      if (data.count >= 5) {
        stop();
        stopWatch();
      }
    }

    const countRef: Ref<number> = ref<number>(100);
    const position: ToRefs<Position> = useMousePosition();
    const { x, y } = useMousePosition();

    return { data, computedCount, addCount, countRef, position, x, y };
  }
});
</script>

<style></style>
