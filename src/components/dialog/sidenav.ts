import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";

@customElement("ds-sidenav")
export class SideNav extends LitElement {
  @state()
  isOpen: boolean = false;

  @query("#sidenav")
  sidenav: HTMLDialogElement;

  static styles = css`
    #sidenav {
      right: auto;
      height: 100vh;
    }
    .sidenav__container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .sidenav__menus {
      margin-top: auto;
    }

    svg {
      display: block;
      width: 32px;
      height: 32px;
      margin: 8px;
    }

    #close-btn {
      display: block;
      margin: auto;
    }
  `;

  openMenu() {
    console.log('opening menu')
  }

  render() {
    return html`
      <button @click=${() => this.sidenav.showModal()}>Open Nav</button>
      <dialog id="sidenav">
        <div class="sidenav__container">
          <div class="sidenav__apps">
            <ds-tooltip positioning="fixed">
              <svg slot="invoker"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
                @click=${this.openMenu}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M8 25a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-4 4-4 8-4s8 0 8 4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-10-4-14-24-14S8 15 8 25z"
                  ></path>
                  <circle cx="32" cy="37" r="8"></circle>
                  <path
                    d="m16 29-3.91 11.73A9.32 9.32 0 0 0 20.94 53h22.12a9.32 9.32 0 0 0 8.85-12.27L48 29"
                  ></path>
                </g>
              </svg>
              <div slot="content">open app</div>
            </ds-tooltip>
            <svg
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="icomoon-ignore"></g>
                <path
                  d="M28.244 7.47h-25.572v17.060h26.656v-17.060h-1.084zM27.177 8.536l-10.298 10.298c-0.47 0.47-1.289 0.47-1.759 0l-10.3-10.298h22.356zM3.738 8.961l6.923 6.922-6.923 6.923v-13.846zM4.589 23.464l6.827-6.826 2.951 2.95c0.436 0.436 1.016 0.677 1.633 0.677s1.197-0.241 1.633-0.677l2.951-2.951 6.826 6.826h-22.822zM28.262 22.807l-6.923-6.924 6.923-6.924v13.848z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div class="sidenav__menus">
            <form method="dialog">
              <svg
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="icomoon-ignore"></g>
                  <path
                    d="M16 2.672c-7.361 0-13.328 5.967-13.328 13.328s5.967 13.328 13.328 13.328 13.328-5.967 13.328-13.328c0-7.361-5.967-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.5-12.262-12.262s5.5-12.262 12.262-12.262 12.262 5.5 12.262 12.262c0 6.761-5.5 12.262-12.262 12.262z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M15.955 9.013c-2.706 0-4.217 1.672-4.236 4.322h1.176c-0.037-1.922 0.97-3.332 3.005-3.332 1.455 0 2.668 1.026 2.668 2.519 0 0.97-0.523 1.754-1.213 2.407-1.418 1.316-1.815 1.935-1.887 3.738h1.191c0.070-1.635 0.034-1.602 1.461-3.029 0.952-0.896 1.623-1.792 1.623-3.173 0-2.164-1.717-3.452-3.787-3.452z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16 20.799c-0.588 0-1.066 0.477-1.066 1.066 0 0.589 0.478 1.066 1.066 1.066s1.066-0.477 1.066-1.066c0-0.588-0.477-1.066-1.066-1.066z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Settings</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g id="Settings">
                      <rect
                        id="Rectangle"
                        fill-rule="nonzero"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <circle
                        id="Oval"
                        stroke="#0C0310"
                        stroke-width="2"
                        stroke-linecap="round"
                        cx="12"
                        cy="12"
                        r="3"
                      ></circle>
                      <path
                        d="M10.069,3.36281 C10.7151,1.54573 13.2849,1.54573 13.931,3.3628 C14.338,4.5071 15.6451,5.04852 16.742,4.52713 C18.4837,3.69918 20.3008,5.51625 19.4729,7.25803 C18.9515,8.35491 19.4929,9.66203 20.6372,10.069 C22.4543,10.7151 22.4543,13.2849 20.6372,13.931 C19.4929,14.338 18.9515,15.6451 19.4729,16.742 C20.3008,18.4837 18.4837,20.3008 16.742,19.4729 C15.6451,18.9515 14.338,19.4929 13.931,20.6372 C13.2849,22.4543 10.7151,22.4543 10.069,20.6372 C9.66203,19.4929 8.35491,18.9515 7.25803,19.4729 C5.51625,20.3008 3.69918,18.4837 4.52713,16.742 C5.04852,15.6451 4.5071,14.338 3.3628,13.931 C1.54573,13.2849 1.54573,10.7151 3.36281,10.069 C4.5071,9.66203 5.04852,8.35491 4.52713,7.25803 C3.69918,5.51625 5.51625,3.69918 7.25803,4.52713 C8.35491,5.04852 9.66203,4.5071 10.069,3.36281 Z"
                        id="Path"
                        stroke="#0C0310"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <button id="close-btn" autofocus>OK</button>
            </form>
          </div>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ds-sidenav": SideNav;
  }
}
