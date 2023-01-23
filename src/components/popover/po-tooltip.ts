import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { PositioningMixin } from "../../mixins/positioning.mixin";

@customElement("po-tooltip")
export class POTooltip extends PositioningMixin(LitElement) {
  @query(".invoker")
  invoker: HTMLElement;

  @query(".content")
  content: HTMLElement;

  @property({ type: Boolean, reflect: true })
  isVisible: boolean;

  @property({ type: String })
  trigger: 'click' | 'hover' = 'hover';

  static styles = css`
    .content {
      margin: 0;
      padding: 5px;
      position: absolute;
    }
  `;

  enterHandler() {
    this.showTooltip();
  }

  isOpen() {
    return this.content.matches(":open");
  }

  toggleTooltip() {
    this.isOpen() ? this.hideTooltip() : this.showTooltip();
  }

  showTooltip() {
    const slot = this.shadowRoot.querySelector("slot");
    const slots = slot.assignedElements({ flatten: true });
    const invoker = slots[0];
    this.computeTooltipPosition(invoker, this.content);
    if (!this.isOpen()) {
      this.content.showPopover();
    }
  }

  hideTooltip() {
    this.content.hidePopover();
  }

  // hook isVisible up to popover show attribute

  leaveHandler(e) {
    console.log(this.trigger);
    console.log("is leaving", e);
    this.hideTooltip();
  }
  /* Use popover=[manual] for manual dismissing (not light dismiss on click) */
  render() {
    return html`
    <!-- prob cleaner to use imperative here for trigger check -->
      <span
        @pointerenter=${this.trigger === 'hover' ? this.enterHandler : null}
        @pointerleave=${this.trigger === 'hover' ? this.leaveHandler : null}
      >
        <!-- todo: check if query can be used with a slot - will save need for a wrapper -->
        <slot name="invoker" class="invoker" @click=${this.trigger === 'click' ? this.toggleTooltip : null}>
          <button>HOVER</button>
        </slot>
        <div class="content" id="tooltip" popover="[manual]">
          <slot name="content"> I am a tooltip! </slot>
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
