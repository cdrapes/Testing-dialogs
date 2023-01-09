import {
  computePosition,
  flip
} from "@floating-ui/dom";
import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("ds-tooltip")
export class Tooltip extends LitElement {
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
    this.computeTooltipPosition();
    this.isHovering = true;
  }

  leaveHandler() {
    console.log("is leaving");
    this.isHovering = false;
  }

  computeTooltipPosition() {
    const { invoker, content } = this;
    computePosition(invoker, content, {
      placement: "right",
      middleware: [flip()],
    }).then(({ x, y }) => {
      Object.assign(content.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  render() {
    const displayTooltip = {
      visibility: this.isHovering ? "visible" : "hidden",
      position: this.positioning,
    };
    return html`
      <div
        class="invoker"
        @mouseenter=${this.enterHandler}
        @mouseleave=${this.leaveHandler}
      >
        <dialog class="content" open style=${styleMap(displayTooltip)}>
          <slot></slot>
        </dialog>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-tooltip": Tooltip;
  }
}
