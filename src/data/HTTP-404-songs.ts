// @ts-ignore
import data from "../../content/HTTP-404-songs.yaml";

export interface FourOhFourSong {
  title: string;
  artist: string;
  url: string;
}

export const HTTP404Songs: FourOhFourSong[] = data;
