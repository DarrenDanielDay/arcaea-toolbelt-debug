import { sheet } from "./style.css.js";
import { ResultCard } from "../result-card";
import { B30Response, BestResultItem } from "../../../models/profile";
import { Component, HyplateElement, Show, cssVar, signal } from "hyplate";
import { Inject } from "../../../services/di";
import {
  $AssetsResolver,
  $AssetsService,
  $ChartService,
  $PreferenceService,
  AssetsResolver,
  AssetsService,
  ChartService,
  ColorTheme,
  PreferenceService,
} from "../../../services/declarations";

const renderB30 = (response: B30Response) => {
  const { queryTime, b30, b31_39, b30Average, maxPotential, minPotential, potential, r10Average, username } = response;
  const now = new Date(queryTime);
  const renderBest = (best: BestResultItem) => {
    const card = new ResultCard();
    card.setChart(best.song, best.chart);
    card.setBest(best.no);
    card.setResult(best.note, best.score, best.clear);
    card.setPlayTime(best.date ?? null);
    card.setNow(now);
    return card;
  };
  return (
    <div class="card" part="b30-result-card">
      <div class="mask">
        <div class="row">
          <div class="c8">
            <div class="username">
              {username} ({potential})
            </div>
            <div class="details">
              B30Avg={b30Average.toFixed(4)} R10Avg={r10Average.toFixed(4)} Ptt Range [{minPotential.toFixed(4)},{" "}
              {maxPotential.toFixed(4)}]
            </div>
          </div>
          <div class="c4">
            <div class="banner">Player Best30</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="b30">
          <div class="card-list best-1-10">{b30.slice(0, 10).map(renderBest)}</div>
          <div class="card-list best-11-20">{b30.slice(10, 20).map(renderBest)}</div>
          <div class="card-list best-21-30">{b30.slice(20, 30).map(renderBest)}</div>
        </div>
        <div class="divider"></div>
        <div class="b39">
          <div class="card-list best-31-33">{b31_39.slice(0, 3).map(renderBest)}</div>
          <div class="card-list best-34-36">{b31_39.slice(3, 6).map(renderBest)}</div>
          <div class="card-list best-37-39">{b31_39.slice(6, 9).map(renderBest)}</div>
        </div>
        <div class="footer">
          <div>
            Generated by Arcaea Toolbelt@YukiChan -RESURRECTION-{" "}
            <time datetime={now.toISOString()}>{now.toLocaleString()}</time>
          </div>
          <div>
            {process.env.BASE_URI}#b30
          </div>
        </div>
      </div>
    </div>
  );
};

export
@Component({
  tag: "best-30-yukichan",
  styles: [sheet],
})
class Best30YukiChan extends HyplateElement {
  @Inject($ChartService)
  accessor chart!: ChartService;
  @Inject($AssetsResolver)
  accessor resolver!: AssetsResolver;
  @Inject($AssetsService)
  accessor assets!: AssetsService;
  @Inject($PreferenceService)
  accessor preference!: PreferenceService;

  b30 = signal<B30Response | null>(null);
  hd = signal(false);
  override render() {
    this.autorun(() => {
      const b30 = this.b30();
      const hd = this.hd();
      const theme = this.preference.signal("theme")();
      if (b30) {
        this.#updateBg(hd, theme);
        this.#updateResultCards(hd);
      }
    });
    return <Show when={this.b30}>{(response) => renderB30(response)}</Show>;
  }

  getExportNode() {
    const node = this.shadowRoot.querySelector(".card");
    return node instanceof HTMLElement ? node : null;
  }

  #updateResultCards(hd: boolean) {
    const node = this.getExportNode();
    if (!node) return;
    cssVar(node, "inner-width", hd ? `${(800 * 1000) / 240}` : null);
    node.querySelectorAll<ResultCard>("result-card").forEach((card) => {
      card.setHD(hd);
    });
  }

  async #updateBg(hd: boolean, theme: ColorTheme) {
    const index = await this.chart.getSongIndex();
    const song = theme === "dark" ? index["odysseia"]! : index["lovelessdress"]!;
    const chart = song.charts[2]!;
    const url = await this.assets.getAssets(this.resolver.resolveCover(chart, song, hd));
    const card = this.getExportNode();
    card!.style.backgroundImage = `url("${url}")`;
  }
}
