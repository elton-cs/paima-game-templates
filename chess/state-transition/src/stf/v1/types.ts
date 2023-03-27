import type { ConciseResult } from '@chess/utils';
import type { WalletAddress } from 'paima-sdk/paima-utils';

export type ParsedSubmittedInput =
  | CreatedLobbyInput
  | JoinedLobbyInput
  | ClosedLobbyInput
  | SubmittedMovesInput
  | ScheduledDataInput
  | InvalidInput;

export interface InvalidInput {
  input: 'invalidString';
}

export interface CreatedLobbyInput {
  input: 'createdLobby';
  numOfRounds: number;
  roundLength: number;
  playTimePerPlayer: number;
  isHidden: boolean;
  isPractice: boolean;
  playerOneIsWhite: boolean;
}

export interface JoinedLobbyInput {
  input: 'joinedLobby';
  lobbyID: string;
}

export interface ClosedLobbyInput {
  input: 'closedLobby';
  lobbyID: string;
}

export interface SubmittedMovesInput {
  input: 'submittedMoves';
  lobbyID: string;
  roundNumber: number;
  pgnMove: string;
}

export interface ScheduledDataInput {
  input: 'scheduledData';
  effect: SideEffect;
}

type SideEffect = ZombieRoundEffect | UserStatsEffect;

export interface ZombieRoundEffect {
  type: 'zombie';
  lobbyID: string;
}

export interface UserStatsEffect {
  type: 'stats';
  user: WalletAddress;
  result: ConciseResult;
}