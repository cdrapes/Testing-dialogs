import { computePosition, flip } from "@floating-ui/dom";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";

// Define the interface for the mixin
export declare class PositioningMixinInterface {
  computeTooltipPosition(invoker: HTMLElement, content: HTMLElement): void;
}

export type Constructor<T = {}> = new (...args: any[]) => T;

/* Positioning Mixin will use floating UI for positioning and will be used by all elements requiring positioning.
 */
export const PositioningMixin = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class PositioningMixinClass extends superClass {
    @property()
    placement: "top" | "left" | "right" | "bottom" = "right";

    computeTooltipPosition(invoker: HTMLElement, content: HTMLElement) {
      const { placement } = this;
      computePosition(invoker, content, {
        placement,
        // middleware: [flip()],
      }).then(({ x, y }) => {
        Object.assign(content.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }
  return PositioningMixinClass as Constructor<PositioningMixinInterface> & T;
};
