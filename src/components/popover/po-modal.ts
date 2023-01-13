import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { PositioningMixin } from "../../mixins/positioning.mixin";

@customElement("po-modal")
export class POModal extends PositioningMixin(LitElement) {
  @query("dialog")
  dialogEl: HTMLDialogElement;
  @query("#increase-btn")
  btn: HTMLButtonElement;

  static styles = css`
    #info-tooltip {
      position: absolute;
      top: 0;
      right: 0;
      margin: 4px;
      cursor: default
    }
  `;

  openDialog() {
    this.dialogEl.showModal();
  }

  clickHandler() {
    const opts = { bubbles: true, composed: true };
    const increaseEvent = new Event("increase-counter", opts);
    this.btn.dispatchEvent(increaseEvent);
  }

  protected render(): unknown {
    return html`
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100"
        rel="stylesheet"
      />
      <button @click=${this.openDialog}>Open Modal</button>
      <dialog>
        <slot>
          <p>My Dialog</p>
          <po-tooltip>
            <span id="info-tooltip" class="material-symbols-outlined"
              >info</span
            >
          </po-tooltip>
          <button id="increase-btn" @click=${this.clickHandler}>
            Add to Counter
          </button>
          <form method="dialog">
            <button>OK</button>
          </form>
        </slot>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "po-modal": POModal;
  }
}
