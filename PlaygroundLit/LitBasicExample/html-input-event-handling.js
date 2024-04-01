import {html, css, LitElement} from './node_modules/lit';

export class HtmlInputEventHandling extends LitElement {
    render() {
        return html`
            <h2>Hello World!</h2>
        `;
    }
}
customElements.define('html-input-event-handling', HtmlInputEventHandling);