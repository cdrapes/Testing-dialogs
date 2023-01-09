import { LitElement, css, html, PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import "./tooltip";

/**
 * A Dialog Element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("ds-dialog")
export class Dialog extends LitElement {
  @state()
  isOpen: boolean = false;

  @query("#dialog")
  dialog: HTMLDialogElement;

  static styles = css`
    .dialog__content {
    }

    .dialog {
      overflow: hidden;
    }
  `;

  toggleDialog() {
    this.isOpen = !this.isOpen;
    this.dialog.showModal();
  }

  render() {
    return html`
      <div>
        <button @click=${this.toggleDialog} id="btn">
          <slot name="title">Click me</slot>
        </button>
        <dialog class="dialog" id="dialog">
          <slot name="content" class="dialog__content">
            <p>This is my dialog</p>

            <!-- tooltip -->
            <ds-tooltip>
              <p>tooltip 1</p>
              <ds-tooltip>
                <p>tooltip 2</p>
              </ds-tooltip>
            </ds-tooltip>
          </slot>

          <!-- close button -->
          <slot name="footer" class="cta">
            <form method="dialog">
              <button>OK</button>
            </form>
          </slot>
        </dialog>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-dialog": Dialog;
  }
}
