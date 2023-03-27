import { cardanoWalletLoginEndpoint, switchToBatchedCardanoMode, switchToBatchedEthMode, switchToBatchedPolkadotMode, switchToUnbatchedMode, switchToAutomaticMode, userWalletLoginWithoutChecks, updateBackendUri, getRemoteBackendVersion, postConciselyEncodedData } from 'paima-sdk/paima-mw-core';
declare const endpoints: {
    createLobby: (numberOfRounds: number, roundLength: number, playTimePerPlayer: number, isHidden?: boolean, isPractice?: boolean, playerOneIsWhite?: boolean) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").CreateLobbySuccessfulResponse>;
    joinLobby: (lobbyID: string) => Promise<import("paima-sdk/paima-mw-core").OldResult>;
    closeLobby: (lobbyID: string) => Promise<import("paima-sdk/paima-mw-core").OldResult>;
    submitMoves: (lobbyID: string, roundNumber: number, move: string) => Promise<import("paima-sdk/paima-mw-core").OldResult>;
    getUserStats: (walletAddress: string) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").PackedUserStats>;
    getLobbyState: (lobbyID: string) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").PackedLobbyState>;
    getLobbySearch: (wallet: string, searchQuery: string, page: number, count?: number | undefined) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").LobbyStates>;
    getRoundExecutionState: (lobbyID: string, round: number) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").PackedRoundExecutionState>;
    getRandomOpenLobby: () => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").PackedLobbyState>;
    getOpenLobbies: (wallet: string, page: number, count?: number | undefined) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").LobbyStates>;
    getUserLobbiesMatches: (walletAddress: string, page: number, count?: number | undefined) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").PackedUserLobbies>;
    getNewLobbies: (wallet: string, blockHeight: number) => Promise<import("paima-sdk/paima-mw-core").FailedResult | import("./types").NewLobbies>;
    getMatchWinner: (lobbyId: string) => Promise<import("paima-sdk/paima-mw-core").Result<import("@chess/utils").MatchWinnerResponse>>;
    getRoundExecutor: (lobbyId: string, roundNumber: number) => Promise<import("paima-sdk/paima-mw-core").Result<any>>;
    getMatchExecutor: (lobbyId: string) => Promise<import("paima-sdk/paima-mw-core").Result<any>>;
    exportLogs: () => string;
    pushLog: (message: any, ...optionalParams: any[]) => void;
    getLatestProcessedBlockHeight: () => Promise<import("paima-sdk/paima-mw-core").Result<number>>;
    userWalletLogin: (loginType: string) => Promise<import("paima-sdk/paima-mw-core").Result<import("paima-sdk/paima-mw-core").Wallet>>;
    checkWalletStatus: () => Promise<import("paima-sdk/paima-mw-core").OldResult>;
};
export * from './types';
export { userWalletLoginWithoutChecks, cardanoWalletLoginEndpoint, switchToUnbatchedMode, switchToBatchedEthMode, switchToBatchedCardanoMode, switchToBatchedPolkadotMode, switchToAutomaticMode, updateBackendUri, getRemoteBackendVersion, postConciselyEncodedData, };
export default endpoints;