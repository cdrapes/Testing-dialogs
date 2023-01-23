import { computePosition, flip } from "@floating-ui/dom";
import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("ds-popup")
export class Popup extends LitElement {
  @state()
  showPopup: boolean;

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
      overflow: hidden;
      /* transform: translateZ(0); */
    }
  `;

  clickHandler() {
    console.log("is entering", this.invoker.style);
    this.computeTooltipPosition();
    this.showPopup = true;
    document.addEventListener("mousedown", () => (this.showPopup = false), {
      once: true,
    });
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
      visibility: this.showPopup ? "visible" : "hidden",
      position: this.positioning,
    };
    return html`
      <div class="invoker" @click=${this.clickHandler}>
        <dialog class="content" open style=${styleMap(displayTooltip)}>
          <slot>Default content</slot>
        </dialog>
      </div>
    `;
  }
}
