# chess-simulator
A console application to simulate the chess piece movements on an empty chessboard.The simulator supports three chess pieces: King, Queen, and Pawn.

## Problem Statement

The application simulates an empty 8x8 chessboard and calculates possible movements for:
- **Pawn**: Moves 1 step at a time, in vertical forward direction.
- **King**: Moves 1 step at a time, in all 8 directions (vertical, horizontal and diagonal).
- **Queen**: Moves across the board in all 8 directions.

## Prerequisites

- Node.js (v18 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone https://github.com/santosh279/chess-simulator.git
cd chess-simulator
```

2. Install dependencies
```bash
npm install
```

## Usage
Run the simulator using:
```bash
npm start <piece> <position>
```

## Input Format
- Piece: "King", "Queen", or "Pawn" (case-sensitive).
- Position: Position must be with capital letter followed by number (e.g., A1, A2).

## Examples

***1. King at D5:***
```bash
npm start King D5
# Output: C4, C5, C6, D4, D6, E4, E5, E6
```

***2. Queen at E4:***
```bash
npm start Queen E4
# Output: A4,B4,C4,D4,F4,G4,H4,E1,E2,E3,E5,E6,E7,E8,A8,B7,C6,D5,F3,G2,H1,B1,C2,D3,F5,G6,H7
```

***3. Pawn at G1:***
```bash
npm start Pawn G1
# Output: G2
```

## Error Handling

If invalid inputs are provided, then the application will show appropriate error messages.

### Invalid Piece
```bash
npm start Rook D5
# Error: Unknown piece: Rook
```

### Invalid Position
```bash
npm start King A10
# Error: Invalid position format: A10
```

### Missing Parameters
```bash
npm start
# Usage: npm start <piece> <position>
# Example: npm start King D5
```

## Assumptions
1. The chessboard is always empty (no other pieces are considered for movement).
2. Pawns only move forward.
3. No special moves are implemented
4. Input is case-sensitive:
    - Use "King", "Queen" or "Pawn" (not lowercase),
    - Use uppercase letters for positions, (e.g., "A1" instead "a1").
5. Invalid inputs (e.g., "Test_kingg" or unsupported piece) result in an error message.