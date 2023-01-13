import { html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { PositioningMixin } from "../../mixins/positioning.mixin";

@customElement("po-modal")
export class POModal extends PositioningMixin(LitElement) {
  @query("dialog")
  dialogEl: HTMLDialogElement;

  openDialog() {
    this.dialogEl.showModal();
  }

  protected render(): unknown {
    return html`
      <button @click=${this.openDialog}>Open Modal</button>
      <dialog>
        <po-tooltip></po-tooltip>
        <p>My Dialog</p>
        
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "po-modal": POModal;
  }
}
