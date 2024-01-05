<h1 align="center">
  [GAME_NAME] Backend
</h1>
<p align="center">
The [GAME_NAME] Backend is the application which utilizes Paima Engine (and all other helper libraries in this repo) to enable anyone interacting with it to play the [GAME_NAME] game via any supported front end.
</p>

# [State Transition Module](./src/stf/v1/index.ts)

This is the entrypoint of the state-transition module.

Exports a function `gameStateTransitionRouter` that allows one to route between different versions of State Transition Functions (stf) based on block height. This example only contains one version `gameStateTransitionV1`.

Modify to add additional versions of your game state machine.

## [Entry](./src/stf/v1/index.ts)

Exports an anonymous function that represents `gameStateTransitionV1` from the router. The function parses user input and returns the appropriate stf.

The following are all valid possible user inputs that can be used to transition between states.

![user Inputs](./src/stf/v1/index.drawio.png)

Modify to add/remove user inputs for calling stfs.

## [Transition](./src/stf/v1/transition.ts)

Contains functions that represent all valid state transitions.

Exported functions take some associated parameters and return an array of SQL updates via promises. The functions `createdLobby`, `joinedLobby`, `closedLobby`, `submittedMoves`, and `scheduledData` are callable via user input as mentioned in [Entry](#entry) while functions like `zombieRound`, `updateStats`, and `executeRound` are used elsewhere. <mark>(Presumably in the round executor?)</mark>

`validateSubmittedMoves` and `finalizeMatch` are internal functions.

Modify to add/remove state transition functions.

## [Persist](./src/stf/v1/persist/index.ts)

Contains bulk of the logic used by stfs in [Transition](#transition) to create and order SQL updates for the game's entire state. The functions found here generate the SQL queries.

## [Types](./src/stf/v1/types.ts)

Contains definitions for types and interfaces. 

## [Parser](./src/stf/v1/parser.ts)

Contains definitions for grammer used to interact with the state machine. See [Read and Write to L2 State](https://docs.paimastudios.com/home/read-write-L2-state/base-format) in Paima docs for more details.