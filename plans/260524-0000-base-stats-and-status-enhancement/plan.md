---
phase: 0
title: "Base Stats and Status System Enhancement Plan"
status: completed
priority: P1
effort: "8h"
dependencies: []
---

# Plan: Base Stats and Status System Enhancement

## Overview
Implementation plan for enhancing the Wheel Engine with requested features:
1. Enhanced base stats system with global variables for lowest/highest/base stats
2. Improved status system with proper duration handling (turn-based and wheel-end)
3. Enhanced jumpToWheel (Luck) functionality for base stat-based jumps
4. Added OR logic support in conditional rules
5. Various UI and UX improvements

## Requirements
- Functional: 
  - Base stats tracking with global variables (lowest_bs_var, highest_bs_var, etc.)
  - Status effects that can trigger on wheel end
  - JumpToWheel action that can target wheels based on base stat values
  - OR logic in conditional rule blocks
- Non-functional:
  - Maintain backward compatibility
  - Follow existing code patterns
  - Proper error handling

## Architecture
- Enhance calculateGlobalStats function to track additional base stat globals
- Extend status system to support wheel_end duration type
- Improve jumpToWheel action to resolve target wheels based on base stats
- Update conditional rule evaluation to support OR logic
- UI enhancements for new features

## Related Code Files
- Modify: script.js (core logic)
- Modify: index.html (UI elements for new features)

## Implementation Steps
1. Analyze current base stats implementation
2. Enhance base stats tracking with additional global variables
3. Implement status wheel_end duration type
4. Improve jumpToWheel action for base stat-based targeting
5. Add OR logic support to conditional rules
6. Update UI for new features
7. Test all implementations

## Success Criteria
- [ ] Base stats globals work correctly in formulas and actions
- [ ] Status effects can be set to expire at wheel end
- [ ] JumpToWheel can target wheels based on lowest/highest base stat source
- [ ] Conditional rules support OR logic in addition to AND
- [ ] All existing functionality remains intact
- [ ] UI properly reflects new capabilities

## Risk Assessment
- Medium risk: Changes to core logic systems (stats, status, actions)
- Mitigation: Thorough testing, maintain backward compatibility
- Low risk: UI changes are additive