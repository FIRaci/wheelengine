document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const importBtn = document.getElementById('import-btn');
    const exportBtn = document.getElementById('export-btn');
    const importFileInput = document.getElementById('import-file-input');
    const notificationToast = document.getElementById('notification-toast');
    const canvas = document.getElementById("wheel-canvas");
    const ctx = canvas.getContext("2d");
    const wheelSelector = document.getElementById('wheel-selector');
    const deleteWheelBtn = document.getElementById('delete-wheel-btn');
    const createWheelBtn = document.getElementById('create-wheel-btn');
    const newWheelNameInput = document.getElementById('new-wheel-name');
    const segmentEditorTitle = document.getElementById('segment-editor-title');
    const segmentListUI = document.getElementById('segment-list');
    const mainActionBtn = document.getElementById('main-action-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const segmentTextInput = document.getElementById('segment-text');
    const segmentColorInput = document.getElementById('segment-color');
    const segmentWeightInput = document.getElementById('segment-weight');
    const spinButton = document.getElementById('spin-button');
    const wheelTitle = document.getElementById('wheel-title');
    const spinCountVariableInput = document.getElementById('spin-count-variable');
    const removeAfterSpinCheckbox = document.getElementById('remove-after-spin');
    const defaultLinkSelect = document.getElementById('default-link');
    const wheelSettingsPanel = document.getElementById('wheel-settings-panel');
    const actionSetVariableEnabled = document.getElementById('action-setVariable-enabled');
    const setVariableActionsContainer = document.getElementById('set-variable-actions-container');
    const addSetVariableActionBtn = document.getElementById('add-set-variable-action-btn');
    const actionGoToWheelEnabled = document.getElementById('action-goToWheel-enabled');
    const actionTargetWheelSelect = document.getElementById('action-target-wheel');
    const actionConditionalEnabled = document.getElementById('action-conditional-enabled');
    const conditionOperatorSelect = document.getElementById('condition-operator');
    const conditionValueInput = document.getElementById('condition-value');
    const conditionRerollsInput = document.getElementById('condition-rerolls');
    const navLinks = document.querySelectorAll('.nav-link');
    const appPages = document.querySelectorAll('.app-page');
    const variablesListDiv = document.getElementById('variables-list');
    const newVariableNameInput = document.getElementById('new-variable-name');
    const addVariableBtn = document.getElementById('add-variable-btn');
    const panelOverlay = document.getElementById('panel-overlay');
    const totalWeightInfo = document.getElementById('total-weight-info');
    const copyActionsBtn = document.getElementById('copy-actions-btn');
    const pasteActionsBtn = document.getElementById('paste-actions-btn');
    const variableSuggestionsSettings = document.getElementById('variable-suggestions-settings');
    const variableSuggestionsAction = document.getElementById('variable-suggestions-action');
    const spinCountDisplay = document.getElementById('spin-count-display');
    const logicEditor = document.getElementById('logic-editor');
    const logicEditorPlaceholder = document.getElementById('logic-editor-placeholder');
    const computedVariablesListUI = document.getElementById('computed-variables-list');
    const addComputedVariableBtn = document.getElementById('add-computed-variable-btn');
    const computedVariableEditorContent = document.getElementById('computed-variable-editor-content');
    const computedVariableEditorTitle = document.getElementById('computed-variable-editor-title');
    const computedVariableTargetInput = document.getElementById('computed-variable-target');
    const computedVariableFormulaInput = document.getElementById('computed-variable-formula');
    const rulesListUI = document.getElementById('rules-list');
    const addRuleBtn = document.getElementById('add-rule-btn');
    const ruleEditorContent = document.getElementById('rule-editor-content');
    const ruleEditorTitle = document.getElementById('rule-editor-title');
    const ruleNameInput = document.getElementById('rule-name-input');
    const ruleConditionsContainer = document.getElementById('rule-conditions-container');
    const addRuleConditionBtn = document.getElementById('add-rule-condition-btn');
    const ruleActionsContainer = document.getElementById('rule-actions-container');
    const addRuleActionBtn = document.getElementById('add-rule-action-btn');

    // Global State
    let wheelsData = {}, gameVariables = {}, computedVariables = [], conditionalRules = [];
    let currentWheelName = '', editingSegmentIndex = null;
    let activeEditor = { type: null, id: null };
    let startAngle = 0, spinVelocity = 0, isSpinning = false, draggedIndex = null;
    const friction = 0.992;
    let copiedActions = null;
    let saveTimeout = null;

    // --- LOGIC LƯU/TẢI DỮ LIỆU ---
    function getFullState() { return { wheelsData, gameVariables, computedVariables, conditionalRules }; }
    function throttledSaveState() { clearTimeout(saveTimeout); saveTimeout = setTimeout(() => { try { localStorage.setItem('wheelEngineSaveData', JSON.stringify(getFullState())); showNotification("Đã tự động lưu!"); } catch (e) { console.error("Lỗi khi lưu dữ liệu:", e); showNotification("Lỗi: Không thể tự động lưu.", true); } }, 1000); }
    function loadState(stateObject, fromFile = false) { if (!stateObject || typeof stateObject !== 'object') { showNotification("Lỗi: Dữ liệu không hợp lệ.", true); return; } wheelsData = stateObject.wheelsData || {}; gameVariables = stateObject.gameVariables || {}; computedVariables = stateObject.computedVariables || []; conditionalRules = stateObject.conditionalRules || []; activeEditor = { type: null, id: null }; loadWheel(Object.keys(wheelsData)[0] || null); updateLogicUI(); evaluateAllRules(); const message = fromFile ? "Đã import dự án thành công!" : "Đã tải lại phiên làm việc trước!"; showNotification(message); }
    function handleExport() { const state = getFullState(); const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2)); const downloadAnchorNode = document.createElement('a'); downloadAnchorNode.setAttribute("href", dataStr); downloadAnchorNode.setAttribute("download", `wheel-engine-project_${new Date().toISOString().slice(0,10)}.json`); document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove(); showNotification("Đã xuất file dự án!"); }
    function handleImport(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const newState = JSON.parse(e.target.result); showConfirmationModal("Import sẽ ghi đè lên toàn bộ dự án hiện tại. Bạn có chắc chắn?", () => { loadState(newState, true); }); } catch (error) { showNotification("Lỗi: File JSON không hợp lệ.", true); } finally { importFileInput.value = ''; } }; reader.readAsText(file); }
    
    // --- APP NAVIGATION ---
    navLinks.forEach(link => { link.addEventListener('click', () => { if (isSpinning) return; navLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); const pageId = link.dataset.page + '-page'; appPages.forEach(p => p.classList.remove('active')); const activePage = document.getElementById(pageId); if (activePage) activePage.classList.add('active'); if (link.dataset.page === 'logic-brain') updateLogicUI(); }); });

    // --- BỘ NÃO LOGIC ---
    function evaluateFormula(formula) { if (!formula || typeof formula !== 'string') return 0; let expression = formula.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (match) => { const varData = gameVariables[match]; return varData !== undefined ? varData.value : 0; }); try { return Function(`'use strict'; return (${expression})`)(); } catch (e) { console.warn(`Error evaluating formula "${formula}":`, e); return 0; } }
    function evaluateAllRules(depth = 0) { if (depth > 15) { console.error("Phát hiện lặp vô hạn trong luật chơi!"); return; } let changedInLoop = false; computedVariables.forEach(compVar => { const targetVar = compVar.target; if (targetVar && gameVariables[targetVar]) { const oldValue = gameVariables[targetVar].value; const newValue = Math.round(evaluateFormula(compVar.formula)); if (newValue !== oldValue) { gameVariables[targetVar].value = newValue; changedInLoop = true; } } }); conditionalRules.forEach(rule => { let allConditionsMet = rule.conditions.length > 0; for (const condition of rule.conditions) { const leftValue = evaluateFormula(condition.left); const rightValue = evaluateFormula(condition.right); let result = false; switch (condition.operator) { case '==': result = (leftValue == rightValue); break; case '!=': result = (leftValue != rightValue); break; case '>': result = (leftValue > rightValue); break; case '<': result = (leftValue < rightValue); break; case '>=': result = (leftValue >= rightValue); break; case '<=': result = (leftValue <= rightValue); break; } if (!result) { allConditionsMet = false; break; } } if (allConditionsMet) { if(executeActions(rule.actions)) changedInLoop = true; } }); if (changedInLoop) { updateVariablesUI(); evaluateAllRules(depth + 1); } }
    function executeActions(actions, resultContext = null) { let variablesChanged = false; (actions || []).forEach(action => { if (action.type !== 'setVariable') return; const varName = action.target; if (!varName || !gameVariables[varName]) return; const oldValue = gameVariables[varName].value; let currentValue = oldValue; let rawValue = action.value; if (resultContext && rawValue.trim().toUpperCase() === '[RESULT]') { rawValue = resultContext.text; } let value = evaluateFormula(rawValue); if (isNaN(value)) return; switch (action.operator) { case '=': currentValue = value; break; case '+=': currentValue += value; break; case '-=': currentValue -= value; break; } const finalValue = Math.round(currentValue); if (finalValue !== oldValue) { gameVariables[varName].value = finalValue; variablesChanged = true; } }); if (variablesChanged) { throttledSaveState(); } return variablesChanged; }
    
    // --- UI QUẢN LÝ LOGIC ---
    function updateLogicUI() { updateVariablesUI(); updateComputedVariablesListUI(); updateRulesListUI(); const hasSelection = activeEditor.id !== null; logicEditorPlaceholder.style.display = hasSelection ? 'none' : 'block'; computedVariableEditorContent.style.display = (hasSelection && activeEditor.type === 'computed') ? 'block' : 'none'; ruleEditorContent.style.display = (hasSelection && activeEditor.type === 'conditional') ? 'block' : 'none'; }
    function updateVariablesUI() { variablesListDiv.innerHTML = ''; Object.keys(gameVariables).sort().forEach(varName => { const varData = gameVariables[varName]; const item = document.createElement('div'); item.className = 'list-item variable-item'; const baseLabel = varData.isBase ? '<span class="base-stat-label">Gốc</span>' : ''; item.innerHTML = `<div class="variable-name-group item-info"><strong>${varName}</strong>${baseLabel}</div><input type="number" value="${varData.value}" data-varname="${varName}"><div class="checkbox-group"><input type="checkbox" id="is-base-${varName}" class="custom-checkbox is-base-checkbox" data-varname="${varName}" ${varData.isBase ? 'checked' : ''}><label for="is-base-${varName}" title="Đánh dấu là chỉ số gốc"></label></div><button class="delete-btn delete-variable-btn" data-varname="${varName}">X</button>`; variablesListDiv.appendChild(item); }); updateVariableSuggestions(); }
    function updateComputedVariablesListUI() { computedVariablesListUI.innerHTML = ''; computedVariables.forEach(cv => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = cv.id; if(activeEditor.type === 'computed' && cv.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info"><strong>${cv.target || '...'}</strong> = ${cv.formula || '...'}</span><button class="delete-btn delete-computed-variable-btn" data-id="${cv.id}">X</button>`; computedVariablesListUI.appendChild(li); }); }
    function updateRulesListUI() { rulesListUI.innerHTML = ''; conditionalRules.forEach(rule => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = rule.id; if(activeEditor.type === 'conditional' && rule.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${rule.name || 'Luật không tên'}</span><button class="delete-btn delete-rule-btn" data-id="${rule.id}">X</button>`; rulesListUI.appendChild(li); }); }
    function loadEditor(type, id) { activeEditor = { type, id }; if (type === 'computed') { const compVar = computedVariables.find(cv => cv.id === id); if (!compVar) return; computedVariableEditorTitle.textContent = `Chỉnh Sửa Biến Tính Toán`; computedVariableTargetInput.value = compVar.target; computedVariableFormulaInput.value = compVar.formula; } else if (type === 'conditional') { const rule = conditionalRules.find(r => r.id === id); if (!rule) return; ruleEditorTitle.textContent = `Chỉnh Sửa Luật: "${rule.name}"`; ruleNameInput.value = rule.name; ruleConditionsContainer.innerHTML = ''; rule.conditions.forEach(cond => ruleConditionsContainer.appendChild(createRuleConditionRow(cond))); ruleActionsContainer.innerHTML = ''; rule.actions.forEach(act => ruleActionsContainer.appendChild(createSetVariableActionRow(act, true))); } updateLogicUI(); }
    function saveActiveEditor() { if (!activeEditor.id) return; if (activeEditor.type === 'computed') { const compVar = computedVariables.find(cv => cv.id === activeEditor.id); if (!compVar) return; compVar.target = computedVariableTargetInput.value.trim().replace(/\s+/g, '_'); compVar.formula = computedVariableFormulaInput.value; updateComputedVariablesListUI(); } else if (activeEditor.type === 'conditional') { const rule = conditionalRules.find(r => r.id === activeEditor.id); if (!rule) return; rule.name = ruleNameInput.value.trim(); rule.conditions = []; ruleConditionsContainer.querySelectorAll('.rule-condition-row').forEach(row => { rule.conditions.push({ left: row.querySelector('.rule-condition-left').value, operator: row.querySelector('.rule-condition-operator').value, right: row.querySelector('.rule-condition-right').value, }); }); rule.actions = []; ruleActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => { const actionData = { type: 'setVariable', target: row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_'), operator: row.querySelector('.action-var-operator').value, value: row.querySelector('.action-var-value').value.trim() }; if(actionData.target) rule.actions.push(actionData); }); updateRulesListUI(); } evaluateAllRules(); throttledSaveState(); }
    function createRuleConditionRow(condition = {}) { const row = document.createElement('div'); row.className = 'rule-condition-row'; row.innerHTML = `<div><input type="text" class="rule-condition-left" placeholder="Công thức..." value="${condition.left || ''}"><p class="form-hint">VD: mau_hien_tai / 100</p></div><select class="rule-condition-operator"><option value="==" ${condition.operator === '==' ? 'selected' : ''}>==</option><option value="!=" ${condition.operator === '!=' ? 'selected' : ''}>!=</option><option value=">" ${condition.operator === '>' ? 'selected' : ''}>&gt;</option><option value="<" ${condition.operator === '<' ? 'selected' : ''}>&lt;</option><option value=">=" ${condition.operator === '>=' ? 'selected' : ''}>&gt;=</option><option value="<=" ${condition.operator === '<=' ? 'selected' : ''}>&lt;=</option></select><div><input type="text" class="rule-condition-right" placeholder="Giá trị..." value="${condition.right || '0'}"><p class="form-hint">VD: 0.5 (50%)</p></div><button class="btn-danger btn-delete-action">-</button>`; return row; }

    // --- CORE FUNCTIONS (QUAY, VẼ VÒNG QUAY,...) ---
    function updateVariableSuggestions() { const suggestions = Object.keys(gameVariables); variableSuggestionsSettings.innerHTML = ''; variableSuggestionsAction.innerHTML = ''; suggestions.forEach(varName => { const optionHTML = `<option value="${varName}"></option>`; variableSuggestionsSettings.innerHTML += optionHTML; variableSuggestionsAction.innerHTML += optionHTML; }); }
    function drawWheel(segmentsToDraw) { const segments = segmentsToDraw || (wheelsData[currentWheelName]?.segments) || []; ctx.clearRect(0, 0, canvas.width, canvas.height); if (segments.length === 0) return; const centerX = canvas.width / 2, centerY = canvas.height / 2, outerRadius = canvas.width / 2 - 10; const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 10), 0); let currentAngle = startAngle; segments.forEach(segment => { const arc = (segment.weight / totalWeight) * (2 * Math.PI); ctx.beginPath(); ctx.fillStyle = segment.color; ctx.moveTo(centerX, centerY); ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + arc); ctx.closePath(); ctx.fill(); ctx.save(); ctx.translate(centerX, centerY); ctx.rotate(currentAngle + arc / 2); ctx.textAlign = "center"; ctx.fillStyle = "#fff"; ctx.font = `bold 16px ${getComputedStyle(document.body).fontFamily}`; if (segment.text && segment.text.trim() !== '') { ctx.fillText(segment.text, outerRadius * 0.65, 5); } ctx.restore(); currentAngle += arc; }); }
    function updateCreatorUI() { const currentWheel = wheelsData[currentWheelName]; wheelTitle.textContent = currentWheelName || "Chưa có Vòng Quay"; segmentEditorTitle.textContent = editingSegmentIndex !== null ? `Đang Sửa Ô: "${currentWheel.segments[editingSegmentIndex].text}"` : "Thêm / Sửa Ô"; wheelSettingsPanel.style.display = currentWheelName ? 'block' : 'none'; const wheelNames = Object.keys(wheelsData); wheelSelector.innerHTML = ''; wheelNames.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; wheelSelector.appendChild(option); }); if(currentWheelName) { wheelSelector.value = currentWheelName; } deleteWheelBtn.disabled = !currentWheelName; const segments = currentWheel?.segments || []; segmentListUI.innerHTML = ''; const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 10), 0); totalWeightInfo.textContent = `Tổng trọng số: ${totalWeight}`; segments.forEach((segment, index) => { const percentage = totalWeight > 0 ? ((segment.weight / totalWeight) * 100).toFixed(1) : 0; const li = document.createElement('li'); li.className = 'list-item segment-list-item'; li.dataset.index = index; li.draggable = true; if (index === editingSegmentIndex) li.classList.add('editing'); li.innerHTML = `<div class="color-box" style="background-color: ${segment.color};"></div><span class="item-info">${segment.text}</span><span class="segment-weight">${percentage}%</span><button class="delete-btn delete-segment-btn" data-index="${index}">X</button>`; segmentListUI.appendChild(li); }); const settings = currentWheel?.settings; if (settings) { document.getElementById('wheel-settings-title').textContent = `Cài Đặt: "${currentWheelName}"`; spinCountVariableInput.value = settings.spinCountVariable || ''; removeAfterSpinCheckbox.checked = settings.removeSegment; defaultLinkSelect.innerHTML = '<option value="None">Không liên kết</option>'; wheelNames.forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; if (name === settings.defaultLink) option.selected = true; defaultLinkSelect.appendChild(option); } }); } updateVariablesUI(); drawWheel(); }
    function loadWheel(name) { if (!name || !wheelsData[name]) { currentWheelName = Object.keys(wheelsData)[0] || ''; } else { currentWheelName = name; } if (wheelsData[currentWheelName] && !wheelsData[currentWheelName].settings) { wheelsData[currentWheelName].settings = { spinCountVariable: '', removeSegment: false, defaultLink: 'None' }; } exitEditMode(); }
    function createSetVariableActionRow(action = {}, isForRule = false) { const actionRow = document.createElement('div'); actionRow.className = 'set-variable-action-row'; const hint = isForRule ? 'Dùng công thức, VD: suc_manh * 2' : 'Dùng <strong>[RESULT]</strong> / công thức'; actionRow.innerHTML = `<div class="form-group"><label>Tên biến</label><input type="text" class="action-var-name" list="variable-suggestions-action" placeholder="Chọn hoặc gõ..." value="${action.target || ''}"></div><div class="form-group"><label>Phép toán</label><select class="action-var-operator"><option value="=" ${action.operator === '=' ? 'selected' : ''}>Gán (=)</option><option value="+=" ${action.operator === '+=' ? 'selected' : ''}>Cộng (+=)</option><option value="-=" ${action.operator === '-=' ? 'selected' : ''}>Trừ (-=)</option></select></div><div class="form-group"><label>Giá trị / Công thức</label><input type="text" class="action-var-value" placeholder="VD: 10 hoặc suc_manh * 2" value="${action.value || ''}"><p class="form-hint">${hint}</p></div><button class="btn-danger btn-delete-action">-</button>`; return actionRow; }
    
    // ================= SỬA LỖI Ở ĐÂY =================
    function enterEditMode(index) {
        editingSegmentIndex = index;
        const segment = wheelsData[currentWheelName].segments[index];
        segmentTextInput.value = segment.text;
        segmentWeightInput.value = segment.weight;
        segmentColorInput.value = segment.color;
        
        resetActionPanel();

        const actions = segment.actions || [];
        
        const setVariableActions = actions.filter(a => a.type === 'setVariable');
        if (setVariableActions.length > 0) {
            actionSetVariableEnabled.checked = true;
            setVariableActions.forEach(action => setVariableActionsContainer.appendChild(createSetVariableActionRow(action)));
        }

        const goToWheelAction = actions.find(a => a.type === 'goToWheel');
        if (goToWheelAction) {
            actionGoToWheelEnabled.checked = true;
            actionTargetWheelSelect.value = goToWheelAction.target;
        }

        const conditionalAction = actions.find(a => a.type === 'conditionalReroll');
        if (conditionalAction) {
            actionConditionalEnabled.checked = true;
            conditionOperatorSelect.value = conditionalAction.operator;
            conditionValueInput.value = conditionalAction.value;
            conditionRerollsInput.value = conditionalAction.maxRerolls || 1;
        }

        // Dòng code quan trọng bị thiếu: Hiển thị các panel chi tiết
        [...document.querySelectorAll('#segment-action-panel .action-header input')].forEach(el => {
            const details = el.parentElement.nextElementSibling;
            if (details) details.style.display = el.checked ? 'flex' : 'none';
        });

        mainActionBtn.textContent = "Cập Nhật";
        cancelEditBtn.style.display = 'block';
        pasteActionsBtn.disabled = copiedActions === null;
        updateCreatorUI();
    }
    // ================= KẾT THÚC SỬA LỖI =================

    function resetActionPanel() { actionSetVariableEnabled.checked = false; actionGoToWheelEnabled.checked = false; actionConditionalEnabled.checked = false; setVariableActionsContainer.innerHTML = ''; actionTargetWheelSelect.innerHTML = '<option value="">Chọn Vòng Quay</option>'; Object.keys(wheelsData).forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; actionTargetWheelSelect.appendChild(option); } }); [...document.querySelectorAll('#segment-action-panel .action-details')].forEach(el => el.style.display = 'none'); }
    function exitEditMode() { editingSegmentIndex = null; segmentTextInput.value = ''; segmentWeightInput.value = 10; segmentColorInput.value = '#8AC926'; mainActionBtn.textContent = "Thêm Ô"; cancelEditBtn.style.display = 'none'; resetActionPanel(); updateCreatorUI(); }
    function getResult(segmentsForCalc) { if (!segmentsForCalc || segmentsForCalc.length === 0) return null; const totalWeight = segmentsForCalc.reduce((sum, seg) => sum + (seg.weight || 10), 0); const markerAngleRad = 270 * Math.PI / 180; const finalAngle = (markerAngleRad - (startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); let cumulativeAngle = 0; for (const segment of segmentsForCalc) { const arc = (segment.weight / totalWeight) * (2 * Math.PI); if (finalAngle >= cumulativeAngle && finalAngle < cumulativeAngle + arc) return segment; cumulativeAngle += arc; } return segmentsForCalc[0]; }
    function startSpinSequence() { if (isSpinning) return; const settings = wheelsData[currentWheelName]?.settings; const segments = wheelsData[currentWheelName]?.segments; if (!settings || !segments || segments.length === 0) return; let spinCount = 1; const spinVarName = settings.spinCountVariable; if (spinVarName && gameVariables.hasOwnProperty(spinVarName)) { const varValue = parseInt(gameVariables[spinVarName].value); if (!isNaN(varValue) && varValue > 0) spinCount = varValue; } const spinJob = { totalSpins: spinCount, spinsLeft: spinCount, temporarySegments: [...segments], rerollCondition: wheelsData[currentWheelName]?.rerollCondition ? {...wheelsData[currentWheelName].rerollCondition} : null }; spin(spinJob); }
    function spin(job) { if (job.spinsLeft <= 0 || job.temporarySegments.length < 1) { panelOverlay.style.display = 'none'; const settings = wheelsData[currentWheelName]?.settings; if (settings && settings.defaultLink && settings.defaultLink !== 'None') { loadWheel(settings.defaultLink); } return; }; isSpinning = true; spinButton.disabled = true; panelOverlay.style.display = 'block'; spinVelocity = Math.random() * 0.4 + 0.4; if (job.totalSpins > 1) { const currentSpin = job.totalSpins - job.spinsLeft + 1; spinCountDisplay.textContent = `(Lượt: ${currentSpin}/${job.totalSpins})`; } animate(job); }
    function animate(job) { if (spinVelocity > 0.005) { startAngle += spinVelocity; spinVelocity *= friction; drawWheel(job.temporarySegments); requestAnimationFrame(() => animate(job)); } else { isSpinning = false; spinButton.disabled = false; const result = getResult(job.temporarySegments); if (result) processSpinResult(result, job); else { panelOverlay.style.display = 'none'; spinCountDisplay.textContent = ''; } } }
    function processSpinResult(result, job) { job.spinsLeft--; if (job.rerollCondition && !isNaN(parseInt(result.text)) && job.rerollCondition.maxRerolls > 0) { const resultValue = parseInt(result.text); let shouldReroll = false; const { operator, value } = job.rerollCondition; if ((operator === '<=' && resultValue <= value) || (operator === '>=' && resultValue >= value) || (operator === '==' && resultValue == value) || (operator === '<' && resultValue < value) || (operator === '>' && resultValue > value)) { shouldReroll = true; } if (shouldReroll) { job.rerollCondition.maxRerolls--; job.spinsLeft++; showResultPopup(result, () => spin(job)); return; } } const settings = wheelsData[currentWheelName].settings; if (settings.removeSegment && job.temporarySegments.length > 1) { job.temporarySegments = job.temporarySegments.filter(seg => seg !== result); } showResultPopup(result, () => { const actions = result.actions || []; executeActions(actions, result); evaluateAllRules(); const nextWheelAction = actions.find(a => a.type === 'goToWheel'); if (nextWheelAction && wheelsData[nextWheelAction.target]) { const conditionalReroll = actions.find(a => a.type === 'conditionalReroll'); spinCountDisplay.textContent = ''; loadWheel(nextWheelAction.target, conditionalReroll); } else if (job.spinsLeft > 0) { spin(job); } else { spinCountDisplay.textContent = ''; if (settings && settings.defaultLink && settings.defaultLink !== 'None') { loadWheel(settings.defaultLink); } else { panelOverlay.style.display = 'none'; } } }); }
    
    // --- EVENT HANDLERS ---
    exportBtn.addEventListener('click', handleExport); importBtn.addEventListener('click', () => importFileInput.click()); importFileInput.addEventListener('change', handleImport);
    addVariableBtn.addEventListener('click', () => { const varName = newVariableNameInput.value.trim().replace(/\s+/g, '_'); if (varName && !gameVariables.hasOwnProperty(varName)) { gameVariables[varName] = { value: 0, isBase: false }; newVariableNameInput.value = ''; updateVariablesUI(); throttledSaveState(); } });
    variablesListDiv.addEventListener('input', (e) => { if (e.target.matches('input[type="number"]')) { gameVariables[e.target.dataset.varname].value = parseInt(e.target.value) || 0; evaluateAllRules(); updateVariablesUI(); throttledSaveState(); } });
    variablesListDiv.addEventListener('change', (e) => { if (e.target.matches('.is-base-checkbox')) { gameVariables[e.target.dataset.varname].isBase = e.target.checked; updateVariablesUI(); throttledSaveState(); } });
    variablesListDiv.addEventListener('click', (e) => { if (e.target.matches('.delete-variable-btn')) { delete gameVariables[e.target.dataset.varname]; updateLogicUI(); evaluateAllRules(); throttledSaveState(); } });
    addComputedVariableBtn.addEventListener('click', () => { const newCv = { id: Date.now().toString(), target: '', formula: '' }; computedVariables.push(newCv); loadEditor('computed', newCv.id); throttledSaveState(); });
    computedVariablesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-computed-variable-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; computedVariables = computedVariables.filter(cv => cv.id !== id); if (activeEditor.id === id) activeEditor.id = null; updateLogicUI(); evaluateAllRules(); throttledSaveState(); } else { loadEditor('computed', targetLi.dataset.id); } });
    addRuleBtn.addEventListener('click', () => { const newRule = { id: Date.now().toString(), name: 'Luật Mới', conditions: [], actions: [] }; conditionalRules.push(newRule); loadEditor('conditional', newRule.id); throttledSaveState(); });
    rulesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-rule-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; conditionalRules = conditionalRules.filter(r => r.id !== id); if (activeEditor.id === id) activeEditor.id = null; updateLogicUI(); throttledSaveState(); } else { loadEditor('conditional', targetLi.dataset.id); } });
    logicEditor.addEventListener('input', (e) => { if (e.target.closest('#rule-editor-content, #computed-variable-editor-content')) { saveActiveEditor(); } });
    logicEditor.addEventListener('click', (e) => { if (e.target.matches('.btn-delete-action')) { e.target.parentElement.remove(); saveActiveEditor(); } });
    addRuleConditionBtn.addEventListener('click', () => { if (activeEditor.type !== 'conditional') return; const rule = conditionalRules.find(r => r.id === activeEditor.id); rule.conditions.push({ left: '', operator: '==', right: '0' }); loadEditor('conditional', activeEditor.id); throttledSaveState(); });
    addRuleActionBtn.addEventListener('click', () => { if (activeEditor.type !== 'conditional') return; const rule = conditionalRules.find(r => r.id === activeEditor.id); rule.actions.push({ type: 'setVariable', target: '', operator: '=', value: '' }); loadEditor('conditional', activeEditor.id); throttledSaveState(); });
    createWheelBtn.addEventListener('click', () => { const name = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (name && !wheelsData[name]) { wheelsData[name] = { segments: [], settings: {} }; newWheelNameInput.value = ''; loadWheel(name); throttledSaveState(); } else if (wheelsData[name]) alert('Lỗi: Tên vòng quay đã tồn tại!'); });
    wheelSelector.addEventListener('change', () => { if (!isSpinning) loadWheel(wheelSelector.value); });
    deleteWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; showConfirmationModal(`Bạn có chắc muốn xóa vòng quay "${currentWheelName}"?`, () => { delete wheelsData[currentWheelName]; loadWheel(Object.keys(wheelsData)[0] || null); throttledSaveState(); }); });
    mainActionBtn.addEventListener('click', () => { if (!currentWheelName) return; const newSegmentData = { text: segmentTextInput.value, weight: parseInt(segmentWeightInput.value) || 10, color: segmentColorInput.value, actions: [] }; if (actionSetVariableEnabled.checked) { setVariableActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => { const actionData = { type: 'setVariable', target: row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_'), operator: row.querySelector('.action-var-operator').value, value: row.querySelector('.action-var-value').value.trim() }; if(actionData.target) newSegmentData.actions.push(actionData); }); } if (actionGoToWheelEnabled.checked) newSegmentData.actions.push({ type: 'goToWheel', target: actionTargetWheelSelect.value }); if (actionConditionalEnabled.checked) newSegmentData.actions.push({ type: 'conditionalReroll', operator: conditionOperatorSelect.value, value: parseInt(conditionValueInput.value), maxRerolls: parseInt(conditionRerollsInput.value) || 1 }); if (editingSegmentIndex !== null) { wheelsData[currentWheelName].segments[editingSegmentIndex] = newSegmentData; } else { wheelsData[currentWheelName].segments.push(newSegmentData); } exitEditMode(); throttledSaveState(); });
    cancelEditBtn.addEventListener('click', exitEditMode);
    copyActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null) { copiedActions = JSON.parse(JSON.stringify(wheelsData[currentWheelName].segments[editingSegmentIndex].actions || [])); pasteActionsBtn.disabled = false; } });
    pasteActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null && copiedActions) { wheelsData[currentWheelName].segments[editingSegmentIndex].actions = JSON.parse(JSON.stringify(copiedActions)); enterEditMode(editingSegmentIndex); } });
    segmentListUI.addEventListener('click', (e) => { if (e.target.matches('.delete-segment-btn')) { e.stopPropagation(); const i = parseInt(e.target.dataset.index); wheelsData[currentWheelName].segments.splice(i, 1); exitEditMode(); throttledSaveState(); } else if (e.target.closest('.segment-list-item')) { if (!isSpinning) enterEditMode(parseInt(e.target.closest('.segment-list-item').dataset.index)); } });
    segmentListUI.addEventListener('dragstart', (e) => { if (isSpinning || !e.target.closest('.segment-list-item')) return; draggedIndex = parseInt(e.target.closest('.segment-list-item').dataset.index); e.target.closest('.list-item').classList.add('dragging'); });
    segmentListUI.addEventListener('dragend', (e) => { const dragging = document.querySelector('.dragging'); if (dragging) dragging.classList.remove('dragging'); });
    segmentListUI.addEventListener('dragover', (e) => e.preventDefault());
    segmentListUI.addEventListener('drop', (e) => { e.preventDefault(); if (isSpinning) return; const targetElement = e.target.closest('.segment-list-item'); if (!targetElement) return; const newIndex = parseInt(targetElement.dataset.index); const segments = wheelsData[currentWheelName].segments; if (draggedIndex === newIndex) return; const [removed] = segments.splice(draggedIndex, 1); segments.splice(newIndex, 0, removed); exitEditMode(); throttledSaveState(); });
    spinButton.addEventListener('click', startSpinSequence);
    spinCountVariableInput.addEventListener('input', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.spinCountVariable = e.target.value.trim().replace(/\s+/g, '_'); throttledSaveState(); });
    removeAfterSpinCheckbox.addEventListener('change', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.removeSegment = e.target.checked; throttledSaveState(); });
    defaultLinkSelect.addEventListener('change', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.defaultLink = e.target.value; throttledSaveState(); });
    [...document.querySelectorAll('.action-header input')].forEach(el => el.addEventListener('change', () => { const details = el.parentElement.nextElementSibling; if (details) details.style.display = el.checked ? 'flex' : 'none'; }));
    // Thêm các event listener bị thiếu cho hành động
    addSetVariableActionBtn.addEventListener('click', () => { setVariableActionsContainer.appendChild(createSetVariableActionRow()); });
    setVariableActionsContainer.addEventListener('click', (e) => { if (e.target.classList.contains('btn-delete-action')) { e.target.closest('.set-variable-action-row').remove(); }});

    // --- HELPER FUNCTIONS ---
    function showNotification(message, isError = false) { notificationToast.textContent = message; notificationToast.style.backgroundColor = isError ? '#dc3545' : '#252526'; notificationToast.style.borderColor = isError ? '#dc3545' : '#ffde59'; notificationToast.classList.add('show'); setTimeout(() => { notificationToast.classList.remove('show'); }, 3000); }
    function showResultPopup(result, callback) { const modal = document.getElementById('result-modal'); document.getElementById('result-text').innerText = `Kết quả: ${result.text}`; modal.style.display = 'flex'; document.getElementById('close-modal-button').onclick = () => { modal.style.display = 'none'; if (callback) callback(); }; }
    function showConfirmationModal(message, onConfirm, onCancel) { const modal = document.getElementById('confirmation-modal'); modal.style.display = 'flex'; modal.innerHTML = `<div class="modal-content"><h2>Xác nhận</h2><p style="font-size: 1.2rem; margin-bottom: 25px;">${message}</p><div class="btn-container" style="justify-content:center;"><button id="confirm-yes" class="btn btn-danger">Đồng ý</button><button id="confirm-no" class="btn btn-secondary">Hủy bỏ</button></div></div>`; document.getElementById('confirm-yes').onclick = () => { onConfirm(); modal.style.display = 'none'; }; document.getElementById('confirm-no').onclick = () => { if(onCancel) onCancel(); modal.style.display = 'none'; }; }
    
    // --- INITIALIZE APP ---
    function initialize() { const savedData = localStorage.getItem('wheelEngineSaveData'); if (savedData) { showConfirmationModal("Phát hiện phiên làm việc chưa lưu. Bạn có muốn tải lại không?", () => { loadState(JSON.parse(savedData)); }, () => { createDefaultData(); loadWheel(Object.keys(wheelsData)[0]); }); } else { createDefaultData(); loadWheel(Object.keys(wheelsData)[0]); } }
    function createDefaultData() { gameVariables = { suc_manh_base: { value: 10, isBase: true }, nhanh_nhen_base: { value: 8, isBase: true }, mau_hien_tai: { value: 100, isBase: false }, ti_le_chi_mang: { value: 5, isBase: false }, tong_chi_so_goc: { value: 0, isBase: false } }; wheelsData['Vong_Quay_Chinh'] = { settings: { }, segments: [ { text: 'Tấn Công', weight: 1, color: '#f94144', actions: [{ type: 'setVariable', target: 'mau_hien_tai', operator: '-=', value: '10' }] }, { text: 'Nâng Cấp', weight: 1, color: '#43aa8b', actions: [{ type: 'setVariable', target: 'suc_manh_base', operator: '+=', value: '2' }] } ] }; computedVariables = [{id: '123', target: 'tong_chi_so_goc', formula: 'suc_manh_base + nhanh_nhen_base'}]; conditionalRules = [{ id: '1', name: 'Bonus Chi Mang', conditions: [ { left: 'mau_hien_tai', operator: '<=', right: '50' } ], actions: [ { type: 'setVariable', target: 'ti_le_chi_mang', operator: '=', value: '5 * nhanh_nhen_base'} ] },{ id: '2', name: 'Reset Chi Mang', conditions: [ { left: 'mau_hien_tai', operator: '>', right: '50' } ], actions: [ { type: 'setVariable', target: 'ti_le_chi_mang', operator: '=', value: '5'} ] }]; updateLogicUI(); evaluateAllRules(); }
    initialize();
});

