---
phase: 4
title: "Enhance Status System for Wheel End"
status: completed
priority: P1
effort: "2h"
dependencies: [2]
---

# Phase 4: Enhance Status System for Wheel End

## Overview
Enhance the status system to properly support wheel_end duration type as specified in requirements, including the ability to specify which wheel ends the status.

## Requirements
- Status effects can be configured to expire when reaching a specific wheel
- wheel_end duration type works correctly with target wheel specification
- Status expiration logic properly handles wheel transitions
- Backward compatibility with existing turn_count duration type

## Architecture
Modify status system components to:
1. Store target wheel information for wheel_end statuses
2. Check status expiration on wheel transitions
3. Properly apply and remove wheel_end statuses based on target wheel
4. Update UI to allow specifying target wheel for wheel_end statuses

## Related Code Files
- Modify: script.js (applyStatus function, status expiration logic)
- Modify: index.html (UI elements for target wheel specification)

## Implementation Steps
1. Analyze current status expiration logic in loadWheel function (lines 2279-2298)
2. Enhance applyStatus to store target wheel for wheel_end statuses
3. Modify status expiration check to handle specific target wheels
4. Update UI to allow specifying target wheel when duration type is wheel_end
5. Test status expiration with various wheel transition scenarios

## Detailed Implementation
In applyStatus function:
- For wheel_end statuses, store targetWheel from status data
- In loadWheel function, enhance status expiration logic:
  * Check if status.type === 'wheel_end' 
  * If status.targetWheel is specified, expire when newWheelName === status.targetWheel
  * If status.targetWheel is not specified, expire on any wheel change (current behavior)
- Update UI in action-applyStatus-details to show target wheel input when wheel_end is selected

## Success Criteria
- [ ] Statuses can be configured to expire at specific wheels
- [ ] wheel_end statuses without target wheel expire on any wheel change
- [ ] turn_count statuses continue to work as before
- [ ] Status expiration works correctly in complex wheel navigation scenarios
- [ ] UI properly reflects target wheel configuration

## Risk Assessment
- Medium risk: Modifying core status expiration logic
- Mitigation: Maintain backward compatibility, test thoroughly
- Testing focus: Wheel transitions, specific target wheel expiration