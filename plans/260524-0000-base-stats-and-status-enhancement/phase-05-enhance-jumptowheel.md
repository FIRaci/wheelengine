---
phase: 5
title: "Enhance JumpToWheel (Luck) Functionality"
status: completed
priority: P1
effort: "2h"
dependencies: [2,3]
---

# Phase 5: Enhance JumpToWheel (Luck) Functionality

## Overview
Verify and enhance the JumpToWheel action to ensure it works correctly with base stat source tracking and complex jump scenarios as specified in requirements.

## Requirements
- JumpToWheel with lowest_bs_source/highest_bs_source targets correctly resolves to source wheels
- Source wheel tracking accurately records which wheel modified a base stat
- Complex jump scenarios work: Luck power -> jump to stat source wheel -> roll -> jump back
- Wheel stack properly manages return paths for nested jumps

## Architecture
Review and potentially enhance:
1. Source wheel ID tracking when stats are modified
2. JumpToWheel target resolution logic
3. Wheel stack management for return paths
4. Integration with status system for jump-based scenarios

## Related Code Files
- Modify: script.js (executeActions jumpToWheel case, applyStatus, variable modification logic)
- Possibly modify: index.html (if UI enhancements needed)

## Implementation Steps
1. Review current source wheel ID tracking in setVariable and setRandomVariables actions
2. Verify JumpToWheel target resolution for lowest_bs_source/highest_bs_source
3. Test wheel stack behavior for complex jump scenarios
4. Ensure integration with status system works correctly
5. Add any missing functionality or fixes

## Detailed Implementation
Check and enhance:
- In executeActions, verify that when variables are modified (setVariable, setRandomVariables), the sourceWheelId is correctly set to currentWheelName
- In JumpToWheel case, verify that lowest_bs_source/highest_bs_source correctly maps to the sourceWheelId of the appropriate base stat variable
- Verify wheelStack push/pop logic works for nested jumps
- Test interaction with status system (e.g., statuses that trigger on jump)

## Success Criteria
- [ ] Source wheel IDs accurately track which wheel last modified each base stat
- [ ] JumpToWheel with lowest_bs_source/highest_bs_source resolves to correct wheels
- [ ] Complex jump scenarios work: Jump there -> do something -> jump back correctly
- [ ] Wheel stack properly manages return paths for nested jumps
- [ ] Statuses work correctly with jump-based wheel transitions
- [ ] All existing JumpToWheel functionality preserved

## Risk Assessment
- Medium risk: Modifying core action execution logic
- Mitigation: Focus on verifying existing logic works correctly, make minimal changes
- Testing focus: Source tracking accuracy, complex jump scenarios, status interactions