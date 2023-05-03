import html from "bundle-text:./template.html";
import {
  CleanUp,
  Component,
  Disposable,
  OnConnected,
  OnDisconnected,
  cleanup,
  clone,
  fragment,
} from "../../../utils/component";
import { sheet } from "./style.css.js";
import { Chart } from "../../../models/music-play";
import { onClickElsewhere } from "../../../utils/click-elsewhere";
import { Inject } from "../../../services/di";
import { $ChartService, ChartService, SearchResult } from "../../../services/declarations";

const frag = fragment(html);
const searchItem = frag.querySelector("template#search-item")!.content.querySelector("div.search-item")!;
const inputTemplate = frag.querySelector("template#auto-complete-input")!;
const tooMuch = frag.querySelector("template#too-much-results")!.content.firstElementChild!;
const noResult = frag.querySelector("template#no-result")!.content.firstElementChild!;

export
@Component({
  selector: "chart-select",
  css: sheet,
  html: `<slot></slot><div class="search-panel"></div>`,
})
class ChartSelect extends HTMLElement implements OnConnected, OnDisconnected, Disposable {
  static observedAttributes: string[] = ["name"];

  @Inject($ChartService)
  accessor chartService!: ChartService;

  panel!: HTMLDivElement;
  searchInput!: HTMLInputElement;
  selectedChart: Chart | null = null;
  cleanups: CleanUp[] = [];

  connectedCallback() {
    const host = clone(inputTemplate.content);
    const input = (this.searchInput = host.querySelector("input")!);
    this.syncAttributesToSearchInput();
    let count = 0;
    input.oninput = async () => {
      count++;
      const current = count;
      const result = await this.chartService.searchChart(input.value);
      if (count === current) {
        this.renderSearchResults(result);
      }
    };
    input.onkeydown = (e) => {
      if (e.key.toLowerCase() === "arrowdown") {
        this.panel.querySelector("div[tabindex]")?.focus();
      }
    };
    this.panel = this.shadowRoot!.querySelector("div.search-panel")!;
    onClickElsewhere(this, this.panel, () => {
      this.togglePanelVisible(false);
    });
    this.togglePanelVisible(false);
    this.appendChild(host);
  }

  disconnectedCallback() {
    cleanup(this);
  }

  private syncAttributesToSearchInput() {
    const attributes = this.attributes;
    for (let i = 0, l = attributes.length; i < l; i++) {
      const attr = attributes[i]!;
      this.searchInput.setAttribute(attr.name, attr.value);
    }
  }

  private togglePanelVisible(visible: boolean) {
    if (visible) {
      this.panel.style.display = "block";
    } else {
      this.panel.style.display = "none";
    }
  }

  private renderSearchResults(results: SearchResult[]) {
    this.togglePanelVisible(true);
    this.panel.innerHTML = "";
    if (results.length > 30) {
      this.panel.appendChild(clone(tooMuch));
      return;
    }
    if (!results.length) {
      this.panel.appendChild(clone(noResult));
      return;
    }
    const items: HTMLDivElement[] = [];
    for (const [i, result] of results.entries()) {
      const item = clone(searchItem);
      items.push(item);
      item.querySelector("img.cover")!.src = result.cover;
      const c = item.querySelector("span.constant")!;
      c.style.backgroundColor = `var(--${result.difficulty})`;
      c.textContent = result.constant.toFixed(1);
      const n = item.querySelector("span.song-name")!;
      n.textContent = result.title;
      const handleSelect = () => {
        this.selectChart(result.chart);
        this.togglePanelVisible(false);
      };
      item.onclick = handleSelect;
      item.onkeydown = (e) => {
        const key = e.key.toLowerCase();
        if (key === "enter") {
          handleSelect();
        }
        if (key === "arrowdown") {
          items[(i + 1) % items.length]?.focus();
        }
        if (key === "arrowup") {
          items[(i - 1 + items.length) % items.length]?.focus();
        }
        if (key === "escape") {
          this.togglePanelVisible(false);
          this.searchInput?.focus();
        }
      };
      this.panel.appendChild(item);
    }
  }

  private selectChart(chart: Chart) {
    if (this.searchInput) {
      this.selectedChart = chart;
      this.searchInput.value = chart.id;
      this.searchInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }
}
