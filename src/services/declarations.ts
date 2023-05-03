import {
  Chart,
  ClearRank,
  Difficulty,
  Grade,
  NoteResult,
  PartnerClearRank,
  PlayResult,
  ScoreResult,
  SongData,
} from "../models/music-play";
import { B30Response, Profile } from "../models/profile";
import { token } from "./di";

export interface SearchResult {
  chart: Chart;
  sort: number;
  title: string;
  cover: string;
  constant: number;
  difficulty: Difficulty;
}

export interface ChartService {
  getSongData(): Promise<SongData[]>;
  searchChart(searchText: string): Promise<SearchResult[]>;
}

export interface MusicPlayService {
  inferNoteResult(
    chart: Chart,
    perfect: number | null,
    far: number | null,
    lost: number | null,
    score: number | null
  ): NoteResult | null;
  computeScore(chart: Chart, noteResult: NoteResult): number;
  computePotential(score: number, constant: Chart): number;
  computeGrade(score: number): Grade;
  computeClearRank(play: NoteResult, chart: Chart, clear: PartnerClearRank | null): ClearRank | null;
  computeScoreResult(score: number, chart: Chart): ScoreResult;
}

export interface ProfileService {
  readonly profile: Profile | null;
  createOrUpdateProfile(username: string, potential: number): Promise<void>;
  getProfileList(): Promise<string[]>;
  importProfile(file: File): Promise<void>;
  exportProfile(): Promise<void>;
  useProfile(username: string): Promise<void>;
  addResult(playResult: PlayResult, replace?: boolean): Promise<void>;
  removeResult(chartId: string): Promise<void>;
  b30(): Promise<B30Response>;
}

export const $ChartService = token<ChartService>("chart");
export const $MusicPlayService = token<MusicPlayService>("music-play");
export const $ProfileService = token<ProfileService>("profile");
