import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('ds-tooltip')
export class Tooltip extends LitElement {
  @state()
  isHovering: boolean;

  @property()
  positioning: 'absolute' | 'fixed' = 'absolute';

  static styles = css`
    .invoker {
      width: 20px;
      height: 20px;
      border: 1px solid red;
    }

    .content {
      /* use position fixed to paint over an overflow hidden parent */
      /* position: fixed; */
      padding: 2em;
    }
  `;

  enterHandler() {
    console.log('is entering');
    this.isHovering = true;
  }

  leaveHandler() {
    console.log('is leaving');
    this.isHovering = false;
  }

  render() {
    const displayTooltip = {
      opacity: this.isHovering ? '1' : '0',
      position: this.positioning,
    };
    return html`
      <div class='invoker' @mouseenter=${this.enterHandler} @mouseleave=${
      this.leaveHandler
    }>
      
        <dialog class="content" open style=${styleMap(displayTooltip)}>
          <slot></slot>
        </dialog>
      </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-tooltip': Tooltip;
  }
}
