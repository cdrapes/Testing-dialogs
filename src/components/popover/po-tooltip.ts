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
    const slot = this.shadowRoot.querySelector("slot");
    const slots = slot.assignedElements({ flatten: true });
    const invoker = slots[0];
    this.computeTooltipPosition(invoker, this.content);
    if (!this.content.matches(":open")) {
      this.content.showPopover();
    }
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
        <!-- todo: check if query can be used with a slot - will save need for a wrapper -->
        <slot class="invoker">
          <button>HOVER</button>
        </slot>
        <div class="content" id="tooltip" popover="[manual]">
          <slot> I am a tooltip! </slot>
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
