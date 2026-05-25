---
phase: 7
title: "Consolidated Implementation Plan"
status: pending
priority: P1
effort: "1h"
dependencies: [3,4,5,6]
---

# Phase 7: Consolidated Implementation Plan

## Overview
This phase consolidates all implementation tasks from previous phases into a unified plan with specific code changes.

## Implementation Tasks Summary

### Task 1: Enhance Base Stats Tracking (Phase 3)
**Location:** script.js, calculateGlobalStats function (lines 748-796)
**Changes:**
- Add tracking for base stat specific roll order
- Implement earliest/latest tie-breaking logic for base stats
- Add return values for lowest_bs_earliest, lowest_bs_latest, highest_bs_earliest, highest_bs_latest
- Ensure source wheel IDs remain correctly associated

### Task 2: Enhance Status System (Phase 4)
**Locations:** 
- script.js, applyStatus function (lines 3162-3189)
- script.js, loadWheel function (lines 2304-2347)
- index.html, UI for status duration type
**Changes:**
- Enhance applyStatus to store target wheel for wheel_end statuses
- Modify loadWheel status expiration to handle specific target wheels
- Update UI to show target wheel input when wheel_end duration is selected

### Task 3: Verify/Enhance JumpToWheel (Phase 5)
**Location:** script.js, jumpToWheel case in executeActions (lines 1167-1201)
**Changes:**
- Verify source wheel ID tracking in setVariable and setRandomVariables actions
- Confirm JumpToWheel target resolution works correctly
- Validate wheel stack behavior for complex jump scenarios
- No changes needed if current implementation is correct

### Task 4: Verify Conditional Rules OR Logic (Phase 6)
**Location:** script.js, evaluateAllRules function (lines 892-949)
**Changes:**
- Verify logicOperator handling works correctly
- Confirm UI implementation properly saves/loads logic operator
- Test AND, OR, and mixed logic scenarios
- No changes needed if current implementation is correct

### Task 5: UI Updates for New Features
**Location:** index.html
**Changes:**
- Add target wheel input field in status UI when wheel_end is selected
- Ensure new base stat globals appear in autocomplete suggestions
- Verify jumpToWheel UI options are correct

## Detailed Implementation Instructions

### Task 1: Base Stats Tracking Enhancement
1. In calculateGlobalStats function:
   - Add baseStatKeys and baseStatChronologicalKeys variables (lines 754-755)
   - Add tracking variables for highestBsEarliestVal, highestBsLatestVal, etc. (lines 763-768)
   - Add earliest/latest tracking logic inside the chronologicalKeys loop (after line 781)
   - Update return object to include the four new globals (after line 795)

### Task 2: Status System Enhancement
1. In applyStatus function:
   - No changes needed - already stores appliedWheelId correctly
2. In loadWheel function:
   - The current implementation (lines 2314-2327) already handles wheel_end with targetWheel
   - Verify it works as specified in idea.txt
3. In index.html:
   - Add conditional display of target wheel input when status duration type is wheel_end

### Task 3: JumpToWheel Verification
1. Check setVariable and setRandomVariables actions in executeActions:
   - Verify sourceWheelId is set to currentWheelName when stats are modified
2. Verify jumpToWheel case correctly uses calculateGlobalStats to get source wheels
3. Test wheelStack push/pop logic for return paths

### Task 4: Conditional Rules Verification
1. Check evaluateAllRules function:
   - Verify line 918: const logicOperator = block.logicOperator || 'AND';
   - Verify line 934: conditionsMet = logicOperator === 'AND' ? results.every(r => r) : results.some(r => r);
2. Check UI elements in macro/action editors:
   - Verify logic operator dropdowns exist and function correctly
3. Check save logic for conditional rules:
   - Verify logicOperator is preserved when saving/loading rules

### Task 5: UI Updates
1. In index.html, around the status UI section:
   - Add JavaScript to show/hide target wheel input based on duration type selection
   - Add target wheel input field that appears when "wheel_end" is selected

## Success Criteria for This Phase
- [ ] All implementation tasks clearly defined
- [ ] Specific file locations and line numbers identified
- [ ] Dependencies between tasks understood
- [ ] Ready to begin code implementation

## Risk Assessment
- Low risk: This is a planning phase only
- Next phase will carry implementation risks which are addressed in individual task descriptions