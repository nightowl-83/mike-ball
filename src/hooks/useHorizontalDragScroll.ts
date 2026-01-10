import { useCallback, useRef } from "react";

/**
 * Enables click-and-drag horizontal scrolling for mouse/trackpad users.
 * Touch users keep native swipe scrolling.
 */
export function useHorizontalDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const state = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: null as number | null,
  });

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;

    state.current.isDown = true;
    state.current.startX = e.clientX;
    state.current.scrollLeft = el.scrollLeft;
    state.current.pointerId = e.pointerId;

    try {
      el.setPointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el || !state.current.isDown) return;

    // Prevent text selection while dragging
    e.preventDefault();

    const dx = e.clientX - state.current.startX;
    el.scrollLeft = state.current.scrollLeft - dx;
  }, []);

  const endDrag = useCallback(() => {
    const el = ref.current;
    const pointerId = state.current.pointerId;

    state.current.isDown = false;
    state.current.pointerId = null;

    if (!el || pointerId == null) return;
    try {
      el.releasePointerCapture?.(pointerId);
    } catch {
      // ignore
    }
  }, []);

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onPointerLeave: endDrag,
  };
}
