---
phase: 2
title: "Identify Missing Features and Gaps"
status: completed
priority: P1
effort: "2h"
dependencies: [1]
---

# Phase 2: Identify Missing Features and Gaps

## Overview
Analyze current implementation against requirements from idea.txt to identify what needs to be added or modified.

## Requirements Analysis
Based on idea.txt review:

### Base Stats System Enhancements
- Need global variables for lowest/highest base stat tracking (partially implemented)
- Need additional global variables for tie-breaking: lowest_bs_earliest, lowest_bs_latest, highest_bs_earliest, highest_bs_latest
- These should track which base stat variables had the earliest/latest roll when values are tied

### Status System Enhancements  
- Status effects should support "wheel_end" duration type (partially implemented)
- Ability to specify status ends when reaching a specific wheel
- Current implementation may need refinement for proper wheel_end handling

### Luck Power / JumpToWheel Enhancements
- JumpToWheel action should work with base stat source tracking
- Need to verify sourceWheelId is properly tracked when stats are modified
- Complex scenario: Luck power -> jump to lowest stat source wheel -> roll -> jump back

### Conditional Rules Enhancements
- AND/OR logic already appears to be implemented in UI and logic
- Need to verify OR logic works correctly in condition evaluation

## Current Implementation Review

### Base Stats System (script.js)
- calculateGlobalStats function (lines 748-796) computes:
  - highest_bs_var, lowest_bs_var (with earliest tie-breaking via strict < >)
  - highest_bs_source_wheel_id, lowest_bs_source_wheel_id 
  - earliest_var, latest_var (for ALL variables, not base stat specific)
- MISSING: lowest_bs_earliest, lowest_bs_latest, highest_bs_earliest, highest_bs_estat globals
- The autocomplete suggests these should exist but they're not in the return statement

### Status System (script.js)
- applyStatus function (lines 3130-3157) handles status application
- Status processing in getVariableTotalValue (lines 664-692) and recalculateActiveEntityStats (lines 833-847)
- Duration types: turn_count, wheel_end (seen in UI and processing)
- NEEDS REVIEW: Proper wheel_end implementation per idea.txt specifications

### JumpToWheel (script.js)
- jumpToWheel case in executeActions (lines 1135-1169)
- Supports lowest_bs_source and highest_bs_source targets
- Uses sourceWheelId tracking from variables
- NEEDS VERIFICATION: Source tracking accuracy and complex jump scenarios

### Conditional Rules (script.js)
- logicOperator handling in evaluateAllRules (line 886, 902)
- UI shows AND/OR options (lines 1861-1862)
- APPEARS to be implemented but needs verification

## Specific Gaps Identified

### Base Stats Gaps
1. calculateGlobalStats does not return lowest_bs_earliest, lowest_bs_latest
2. calculateGlobalStats does not return highest_bs_earliest, highest_bs_latest
3. Need to track earliest/latest roll order specifically for base stat tie-breaking
4. Source wheel tracking needs verification for accuracy

### Status System Gaps
1. wheel_end duration type implementation needs verification against idea.txt spec
2. Need to support specifying which wheel ends the status (not just any wheel change)
3. Status expiration logic may need refinement

### JumpToWheel Gaps
1. Verify sourceWheelId is properly updated when stats change via macros/actions
2. Test complex jump scenarios (jump there, do something, jump back)

### Conditional Rules Gaps
1. Verify OR logic works correctly in condition evaluation
2. Test edge cases with mixed AND/OR conditions

## Implementation Plan Impact
These gaps will inform the implementation phases:
- Phase 3: Enhance base stats tracking
- Phase 4: Enhance status system  
- Phase 5: Verify/refine jumpToWheel
- Phase 6: Verify conditional rules OR logic
- Phase 7: UI updates for new features
- Phase 8: Integration testing

## Success Criteria
- [ ] Document all missing features and gaps
- [ ] Prioritize implementation tasks
- [ ] Create detailed implementation plan
- [ ] Verify no duplicate work identified

## Risk Assessment
- Medium risk: Missing features involve core game mechanics
- Mitigation: Focused implementation with verification steps