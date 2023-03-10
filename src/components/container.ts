import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("ds-container")
export class Container extends LitElement {
  @state()
  showDialogComponents = true;
  @state()
  showPopoverComponents = false;

  @state()
  counter: number = 0;

  static styles = css``;

  increaseCounterHandler() {
    this.counter = this.counter + 1;
    console.log("counter increased: ", this.counter);
    this.requestUpdate();
  }

  dialogContainer = html`
    <h1>Dialog Element Components</h1>

    <h2>Tooltip</h2>
    <ds-tooltip>
      <button slot="invoker">hover me</button>
      <div slot="content">content</div>
    </ds-tooltip>

    <h2>Modal dialog</h2>
    <ds-dialog> </ds-dialog>

    <br />

    <h2>Modal dialog (fixed positioning)</h2>
    <!-- modal dialog with fixed positioning -->
    <ds-dialog>
      <div slot="content">
        <p>YOLO</p>
        <ds-tooltip>
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
        <ds-tooltip></ds-tooltip>
      </div>
    </ds-popup>

    <!-- Nav -->
    <h2>Side Nav</h2>
    <ds-sidenav></ds-sidenav>

    <!-- Nested Nav -->

    <hr />
  `;

  popoverContainer = () => html` <div>
    <h1>Popover Element Components</h1>

    <!-- Tooltip - hover -->
    <h2>Tooltip (hover)</h2>
    <po-tooltip></po-tooltip>

    <!-- Tooltip - click -->
    <h2>Tooltip (click)</h2>
    <po-tooltip trigger="click">
      <button slot="invoker">click me</button>
      <div slot="content">tool tippin</div>
    </po-tooltip>

    <!-- Modal with Events -->
    <h2>Modal with Events + Tooltip</h2>
    <po-modal @increase-counter=${this.increaseCounterHandler}></po-modal>
    <p>Counter: ${this.counter}</p>

    <!-- Popup -->
    <h2>Popup</h2>

    <!-- Nested Popup -->
    <h2>Nested Popup</h2>

    <!-- Nested Popup -->
    <h2>Nested Popup with Tooltips</h2>
  </div>`;

  protected render(): unknown {
    const { dialogContainer, showPopoverComponents } = this;
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
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
      ${showPopoverComponents ? this.popoverContainer() : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-container": Container;
  }
}
