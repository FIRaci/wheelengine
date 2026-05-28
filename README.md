# Wheel Engine Premium

A powerful interactive wheel-based game mechanic system with deep customization options.

## Features Implemented (Latest Update)

- **Enhanced Base Stats Tracking**: Added earliest/latest globals for tie-breaking in base stats
- **Improved Status System**: Added wheel_end duration with specific target wheel support  
- **JumpToWheel Functionality**: Verified base stat source tracking for jump back mechanics
- **Conditional Rules OR Logic**: Confirmed proper OR logic implementation in rule evaluation
- **UI Enhancements**: Conditional target wheel input display for status effects

## Project Structure

- `script.js` - Core game logic and mechanics
- `index.html` - Main user interface
- `style.css` - Styling and visual presentation
- `test-runner.html` - Comprehensive test suite for verifying functionality
- `plans/` - Documentation and implementation planning

## How to Run

1. Open `index.html` in a modern web browser
2. Use the interface to create wheels, entities, and game mechanics
3. Test features using the built-in test runner (`test-runner.html`)

## Implementation Details

The latest update focused on enhancing the core game mechanics:

### Base Stats Tracking
- Added `highest_bs_earliest`, `highest_bs_latest`, `lowest_bs_earliest`, `lowest_bs_latest` globals
- Implements chronological tie-breaking when base stats are equal
- Variables track both value and source wheel for jump back functionality

### Status System
- Added `wheel_end` duration type that expires when landing on a specific wheel
- Status effects now store `targetWheel` for precise expiration conditions
- UI shows target wheel input only when `wheel_end` duration is selected

### JumpToWheel
- Preserves source wheel ID when base stats are modified
- Enables reliable jump back mechanics based on original stat sources

### Conditional Logic
- OR logic properly implemented using `results.some(r => r)` pattern
- Supports complex condition combinations in rule evaluation

## Development Notes

- Follows YAGNI, KISS, and DRY principles
- Maintains backward compatibility with existing functionality
- All JavaScript code validates without syntax errors
- Comprehensive test suite verifies all implemented features

## Credits

Created with ❤️ by the Wheel Engine team
Latest implementation: made by FIRaci

## License

MIT License - feel free to modify and extend for your own projects.
