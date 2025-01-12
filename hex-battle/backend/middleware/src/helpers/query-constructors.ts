import type { WalletAddress } from '@paima/sdk/utils';
import { buildBackendQuery } from '@paima/sdk/mw-core';

export function getLobby(lobby_id: string): string {
  const endpoint = 'lobby/id';
  const options = {
    lobby_id,
  };
  return buildBackendQuery(endpoint, options);
}

export function getLobbyMap(lobby_id: string): string {
  const endpoint = 'lobby/map';
  const options = {
    lobby_id,
  };
  return buildBackendQuery(endpoint, options);
}

export function getLatestCreatedLobby(wallet: WalletAddress): string {
  const endpoint = 'lobby/get_latest_created_lobby';
  const options = {
    wallet,
  };
  return buildBackendQuery(endpoint, options);
}

export function getOpenLobbies(wallet: WalletAddress, count: number, page: number): string {
  const endpoint = 'lobby';
  const options = { wallet };
  return buildBackendQuery(endpoint, options);
}

export function getMyGames(wallet: WalletAddress, count: number, page: number): string {
  const endpoint = 'lobby/my_games';
  const options = {
    wallet,
  };
  return buildBackendQuery(endpoint, options);
}

export function getMoves(lobby_id: string, round: number): string {
  const endpoint = 'game/move';
  const options = {
    lobby_id,
    round,
  };
  return buildBackendQuery(endpoint, options);
}

export function getLeaderboardByLatest(wallet: string): string {
  const endpoint = 'leaderboard/latest';
  const options = {
    wallet,
  };
  return buildBackendQuery(endpoint, options);
}
export function getLeaderboardByWins(wallet: string): string {
  const endpoint = 'leaderboard/wins';
  const options = {
    wallet,
  };
  return buildBackendQuery(endpoint, options);
}
export function getLeaderboardByPlayed(wallet: string): string {
  const endpoint = 'leaderboard/played';
  const options = {
    wallet,
  };
  return buildBackendQuery(endpoint, options);
}
export function isGameOver(lobby_id: string) {
  const endpoint = 'game/is_game_over';
  const options = {
    lobby_id,
  };
  return buildBackendQuery(endpoint, options);
}
