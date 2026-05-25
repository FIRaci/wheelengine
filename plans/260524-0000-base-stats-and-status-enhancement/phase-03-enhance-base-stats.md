---
phase: 3
title: "Enhance Base Stats Tracking"
status: completed
priority: P1
effort: "3h"
dependencies: [2]
---

# Phase 3: Enhance Base Stats Tracking

## Overview
Enhance the calculateGlobalStats function to track additional base stat globals for earliest/latest tie-breaking as specified in requirements.

## Requirements
- Add lowest_bs_earliest, lowest_bs_latest globals
- Add highest_bs_earliest, highest_bs_latest globals  
- Track earliest/latest roll order specifically for base stat tie-breaking
- Maintain existing functionality for highest_bs_var, lowest_bs_var
- Ensure source wheel tracking continues to work correctly

## Architecture
Modify calculateGlobalStats function in script.js to:
1. Track roll order for base stat variables specifically
2. Implement proper earliest/latest tie-breaking for base stats
3. Return all six base stat related global variables
4. Ensure source wheel IDs are correctly associated

## Related Code Files
- Modify: script.js (calculateGlobalStats function, lines 748-796)

## Implementation Steps
1. Analyze current calculateGlobalStats implementation
2. Add tracking for base stat specific roll order
3. Implement earliest/latest tie-breaking logic for base stats
4. Add return values for the four new global variables
5. Verify existing functionality remains intact
6. Test with various base stat tie scenarios

## Detailed Implementation
In calculateGlobalStats function:
- Create baseStatRollOrder array filtering chronologicalKeys to only base stat variables
- Track highest/lowest base stat values with proper tie-breaking:
  * For highest_bs_earliest: first base stat to reach highest value
  * For highest_bs_latest: last base stat to reach highest value  
  * For lowest_bs_earliest: first base stat to reach lowest value
  * For lowest_bs_latest: last base stat to reach lowest value
- Ensure source wheel IDs are pulled from the correct variables

## Success Criteria
- [ ] calculateGlobalStats returns all six base stat globals
- [ ] lowest_bs_earliest/lowerst_bs_latest track correct base stat variables
- [ ] highest_bs_earliest/highest_bs_latest track correct base stat variables
- [ ] Source wheel IDs correctly associated with tracking variables
- [ ] Existing highest_bs_var/lowest_bs_var functionality unchanged
- [ ] All globals accessible in formulas and actions

## Risk Assessment
- Medium risk: Modifying core stats calculation logic
- Mitigation: Preserve existing behavior, add new functionality incrementally
- Testing focus: Tie-breaking scenarios, source wheel accuracy