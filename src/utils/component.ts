import { create } from "sheetly";

export interface ComponentOptions {
  selector: string;
  html?: string;
  css?: string | CSSStyleSheet | CSSStyleSheet[];
}

export const Component = ({ html, selector, css }: ComponentOptions) => {
  if (typeof css === "string") {
    css = create(css, document.baseURI);
  }
  return <T extends new () => HTMLElement>(ctor: T, context: ClassDecoratorContext<T>) => {
    // @ts-expect-error
    class AnonymousElement extends ctor {
      static readonly selector = selector;
      constructor() {
        super();
        const shadow = this.attachShadow({
          mode: "open",
        });
        if (html) {
          shadow.innerHTML = html;
        }
        if (css instanceof CSSStyleSheet) {
          shadow.adoptedStyleSheets = [css];
        } else if (Array.isArray(css) && css.every((one) => one instanceof CSSStyleSheet)) {
          shadow.adoptedStyleSheets = css;
        }
      }
    }
    context.addInitializer(function () {
      customElements.define(selector, this);
    });
    return AnonymousElement;
  };
};

export const check = (components: CustomElementConstructor[]) => {
  // 强制产生副作用
  components.length = 0;
}

export interface OnConnected {
  connectedCallback(): void;
}

export interface OnDisconnected {
  disconnectedCallback(): void;
}

export interface OnAdopted {
  adoptedCallback(): void;
}

export interface OnAttributeChanged {
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}

export const fragment = (html: string): DocumentFragment => {
  const t = document.createElement("template");
  t.innerHTML = html;
  return t.content;
};

export const clone = <T extends Node>(el: T): T => el.cloneNode(true) as T;

export type CleanUp = () => void;

export interface Disposable {
  readonly cleanups: CleanUp[];
}

export const effect = (disposable: Disposable, callback: () => CleanUp) => {
  disposable.cleanups.push(callback());
};

export const cleanup = (disposable: Disposable) => {
  for (const cleanup of [...disposable.cleanups].reverse()) {
    cleanup();
  }
};