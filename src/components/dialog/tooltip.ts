import { computePosition, flip } from "@floating-ui/dom";
import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { PositioningMixin } from "../../mixins/positioning.mixin";

@customElement("ds-tooltip")
export class Tooltip extends PositioningMixin(LitElement) {
  @state()
  isHovering: boolean;

  @property()
  positioning: "absolute" | "fixed" = "absolute";

  @query(".invoker")
  invoker: HTMLElement;

  @query(".content")
  content: HTMLElement;

  static styles = css`
    .invoker {
      width: 20px;
      height: 20px;
      border: 1px solid red;
      position: relative;
    }

    .content {
      /* use position fixed to paint over an overflow hidden parent */
      /* position: fixed; */
      margin: 0;
      padding: 5px;
      position: absolute;
    }
  `;

  enterHandler() {
    console.log("is entering", this.invoker.style);
    const slot = this.shadowRoot.querySelector("slot");
    const slots = slot.assignedElements({ flatten: true });
    const invoker = slots[0];
    this.computeTooltipPosition(invoker, this.content);
    this.isHovering = true;
  }

  leaveHandler() {
    console.log("is leaving");
    this.isHovering = false;
  }

  render() {
    const displayTooltip = {
      visibility: this.isHovering ? "visible" : "hidden",
      position: this.positioning,
    };
    return html`
      <slot
        @mouseenter=${this.enterHandler}
        @mouseleave=${this.leaveHandler}
        name="invoker"
        class="invoker"
      >
        <button>default invoker</button>
      </slot>
      <dialog class="content" open style=${styleMap(displayTooltip)}>
        <slot name="content">
          <div>My tooltip</div>
        </slot>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-tooltip": Tooltip;
  }
}
