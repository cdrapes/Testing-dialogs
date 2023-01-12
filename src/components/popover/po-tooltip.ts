import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { PositioningMixin } from "../../mixins/positioning.mixin";

@customElement("po-tooltip")
export class POTooltip extends PositioningMixin(LitElement) {
  @query(".invoker")
  invoker: HTMLElement;

  @query(".content")
  content: HTMLElement;

  static styles = css`
    .content {
      margin: 0;
      padding: 5px;
      position: absolute;
    }
  `;

  enterHandler() {
    this.computeTooltipPosition(this.invoker, this.content);
    this.content.showPopover();
    if (!this.content.matches(":open")) this.content.showPopOver();
  }

  leaveHandler(e) {
    console.log("is leaving", e);
    this.content.hidePopover();
  }

  /* Use popover=[manual] for manual dismissing (not light dismiss on click) */
  render() {
    return html`
      <span
        @pointerenter=${this.enterHandler}
        @pointerleave=${this.leaveHandler}
      >
        <button popoverhovertarget="tooltip" class="invoker">CLICK ME</button>
        <div class="content" id="tooltip" popover="[manual]">
          I am a tooltip!
        </div>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "po-tooltip": POTooltip;
  }
}
