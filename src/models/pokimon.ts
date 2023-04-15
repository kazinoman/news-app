export interface Pokimon {
  id: number;
  url: string;
  width: number;
}

export interface PokimonResponse {
  data: Pokimon[];
}
