import { LitElement, css, html, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

/**
 * A Dialog Element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ds-dialog')
export class Dialog extends LitElement {
  @state()
  isOpen: boolean = false;

  @query('#dialog')
  dialog: HTMLDialogElement;

  toggleDialog() {
    this.isOpen = !this.isOpen;
    this.dialog.showModal();
  }

  render() {
    return html`
    <div>
      <button @click=${this.toggleDialog} id="btn">Open Dialog</button>
      <dialog id="dialog">
        <p>This is my dialog</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </div>
    `;
  }

  static styles = css`
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-dialog': Dialog;
  }
}
