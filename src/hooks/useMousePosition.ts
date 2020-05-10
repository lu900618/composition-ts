import { reactive, onMounted, onUnmounted, toRefs } from "vue";

export interface Position {
  x: number;
  y: number;
}

export default function useMousePosition() {
  const position: Position = reactive<Position>({ x: 0, y: 0 });
  function mouseMouseMoveHandler(e: MouseEvent) {
    position.x = e.pageX;
    position.y = e.pageY;
  }
  onMounted(() => {
    window.addEventListener("mousemove", mouseMouseMoveHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMouseMoveHandler);
  });

  // toRefs为了防止外部结构
  return toRefs<Position>(position);
}
