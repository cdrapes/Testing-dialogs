import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("ds-container")
export class Container extends LitElement {
  @state()
  showDialogComponents = false;
  @state()
  showPopoverComponents = true;

  dialogContainer = html`
    <h1>Dialog Element Components</h1>
    <h2>Modal dialog</h2>
    <ds-dialog></ds-dialog>

    <br />

    <h2>Modal dialog (fixed positioning)</h2>
    <!-- modal dialog with fixed positioning -->
    <ds-dialog>
      <div slot="content">
        <p>YOLO</p>
        <ds-tooltip positioning="fixed">
          <p>tooltip 1</p>
          <ds-tooltip>
            <p>tooltip 2</p>
          </ds-tooltip>
        </ds-tooltip>
      </div>
    </ds-dialog>

    <br />

    <h2>Non-modal dialog (popup)</h2>
    <ds-popup>
      <div>
        <p>Here is my super cool popup.</p>
        <ds-tooltip positioning="fixed"><p>tooltip</p></ds-tooltip>
      </div>
    </ds-popup>
    <hr />
  `;

  popoverContainer = html` <div>
    <h1>Popover Element Components</h1>

    <!-- Tooltip -->
    <h2>Tooltip</h2>
    <po-tooltip></po-tooltip>

    <!-- Modal -->
    <h2>Modal with Tooltip</h2>
    <po-modal></po-modal>
  </div>`;

  protected render(): unknown {
    const { dialogContainer, showPopoverComponents } = this;
    // return display === "dialog" ? dialogContainer : popoverContainer;
    return html`
      <h1 style="text-align: center">
        Investigating alternative overlay systems
      </h1>

      <p>Using floating UI for positioning</p>

      <label for="dialog">
        Show Dialog Components
        <input
          @change=${() =>
            (this.showDialogComponents = !this.showDialogComponents)}
          id="dialog"
          type="checkbox"
          ?checked=${this.showDialogComponents}
        />
      </label>
      <label for="popover">
        Show Popover Components
        <input
          id="popover"
          type="checkbox"
          @click=${() =>
            (this.showPopoverComponents = !this.showPopoverComponents)}
          ?checked=${this.showPopoverComponents}
        />
      </label>
      <hr />
      ${this.showDialogComponents ? dialogContainer : null}
      ${showPopoverComponents ? this.popoverContainer : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-container": Container;
  }
}
