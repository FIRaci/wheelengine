document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const wheelDisplayArea = document.querySelector('.wheel-display-area');
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
    const segmentRemovalModeSelect = document.getElementById('segment-removal-mode');
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
    const panelOverlay = document.getElementById('panel-overlay');
    const totalWeightInfo = document.getElementById('total-weight-info');
    const copyActionsBtn = document.getElementById('copy-actions-btn');
    const pasteActionsBtn = document.getElementById('paste-actions-btn');
    const variableSuggestionsSettings = document.getElementById('variable-suggestions-settings');
    const variableSuggestionsAction = document.getElementById('variable-suggestions-action');
    const spinCountDisplay = document.getElementById('spin-count-display');
    const resetSpinBtn = document.getElementById('reset-spin-btn');
    const segmentActionPanel = document.getElementById('segment-action-panel');
    const logicMapContainer = document.getElementById('logic-map-container');
    const copyWheelBtn = document.getElementById('copy-wheel-btn');
    const pasteWheelBtn = document.getElementById('paste-wheel-btn');

    // Collection System DOM Elements
    const actionSetCollectionSlotsEnabled = document.getElementById('action-setCollectionSlots-enabled');
    const actionSetCollectionSlotsTarget = document.getElementById('action-setCollectionSlots-target');
    const actionSetCollectionSlotsValue = document.getElementById('action-setCollectionSlots-value');
    const actionAddToCollectionEnabled = document.getElementById('action-addToCollection-enabled');
    const actionAddToCollectionTarget = document.getElementById('action-addToCollection-target');


    // Sidebar DOM Elements
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarNav = document.getElementById('sidebar-nav');
    const sidebarTabContent = document.getElementById('sidebar-tab-content');
    const activeEntitySelector = document.getElementById('active-entity-selector');
    const entityStatsDisplay = document.getElementById('entity-stats-display');
    const gameLog = document.getElementById('game-log');


    // Multimedia Elements
    const tickSoundUpload = document.getElementById('tick-sound-upload');
    const clearTickSoundBtn = document.getElementById('clear-tick-sound-btn');
    const actionPlaySoundEnabled = document.getElementById('action-playSound-enabled');
    const actionSoundUpload = document.getElementById('action-sound-upload');
    const clearActionSoundBtn = document.getElementById('clear-action-sound-btn');
    const entityAvatarUpload = document.getElementById('entity-avatar-upload');
    const entityAvatarPreview = document.getElementById('entity-avatar-preview');
    const clearEntityAvatarBtn = document.getElementById('clear-entity-avatar-btn');


    // Logic Brain DOM Elements
    const logicSubNavLinks = document.querySelectorAll('.sub-nav-link');
    const logicSubPages = document.querySelectorAll('.logic-sub-page');
    const variableTemplateListDiv = document.getElementById('variable-template-list');
    const newVariableNameInput = document.getElementById('new-variable-name');
    const newVariableValueInput = document.getElementById('new-variable-value');
    const newVariableIconUpload = document.getElementById('new-variable-icon-upload');
    const addVariableBtn = document.getElementById('add-variable-btn');
    const collectionTemplateListUI = document.getElementById('collection-template-list');
    const newCollectionNameInput = document.getElementById('new-collection-name');
    const addCollectionBtn = document.getElementById('add-collection-btn');
    const logicEditor = document.getElementById('logic-editor');
    const logicEditorPlaceholder = document.getElementById('logic-editor-placeholder');
    const computedVariablesListUI = document.getElementById('computed-variables-list');
    const addComputedVariableBtn = document.getElementById('add-computed-variable-btn');
    const computedVariableEditorContent = document.getElementById('computed-variable-editor-content');
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

    // Entity Manager DOM Elements
    const entityListUI = document.getElementById('entity-list');
    const newEntityNameInput = document.getElementById('new-entity-name');
    const addEntityBtn = document.getElementById('add-entity-btn');
    const entityEditor = document.getElementById('entity-editor');
    const entityEditorContent = document.getElementById('entity-editor-content');
    const entityEditorTitle = document.getElementById('entity-editor-title');
    const entityNameInput = document.getElementById('entity-name-input');
    const entityVariablesListDiv = document.getElementById('entity-variables-list');
    const entityCollectionsListDiv = document.getElementById('entity-collections-list');
    const entityEditorPlaceholder = document.getElementById('entity-editor-placeholder');
    const importEntitiesBtn = document.getElementById('import-entities-btn');
    const exportEntitiesBtn = document.getElementById('export-entities-btn');
    const importEntitiesInput = document.getElementById('import-entities-input');


    // Global State
    let wheelsData = {}, variableTemplate = {}, collectionTemplate = {}, entities = {}, computedVariables = [], conditionalRules = [], projectSettings = {};
    let activeEntityId = null;
    let editingEntityId = null;
    let currentWheelName = '', editingSegmentIndex = null;
    let activeEditor = { type: null, id: null };
    let startAngle = 0, spinVelocity = 0, isSpinning = false, draggedIndex = null;
    const friction = 0.992;
    let copiedActions = null;
    let copiedWheelData = null;
    let saveTimeout = null;
    let variableSnapshot = null;
    let editingSegmentData = {};
    const MAX_LOG_ENTRIES = 50;

    // Sound Management
    let tickAudio = new Audio();
    tickAudio.loop = true;

    // --- DATA I/O FUNCTIONS ---
    function getFullState() { return { wheelsData, variableTemplate, collectionTemplate, entities, computedVariables, conditionalRules, projectSettings }; }
    function throttledSaveState() { clearTimeout(saveTimeout); saveTimeout = setTimeout(() => { try { localStorage.setItem('wheelEngineSaveData', JSON.stringify(getFullState())); showNotification("Đã tự động lưu!"); } catch (e) { console.error("Lỗi khi lưu dữ liệu:", e); showNotification("Lỗi: Không thể tự động lưu.", true); } }, 1000); }

    function loadState(stateObject, fromFile = false) {
        if (!stateObject || typeof stateObject !== 'object') {
            showNotification("Lỗi: Dữ liệu không hợp lệ.", true); return;
        }

        variableTemplate = stateObject.variableTemplate || {};
        collectionTemplate = stateObject.collectionTemplate || {};
        entities = stateObject.entities || {};

        // Backward compatibility & data integrity
        Object.values(entities).forEach(entity => {
            if (!entity.collections) entity.collections = {};
             // Ensure all template collections exist on the entity
             Object.keys(collectionTemplate).forEach(collectionId => {
                if(!entity.collections[collectionId]) {
                    entity.collections[collectionId] = [];
                }
             });
        });

        activeEntityId = Object.keys(entities)[0] || null;

        wheelsData = stateObject.wheelsData || {};
        computedVariables = stateObject.computedVariables || [];
        conditionalRules = stateObject.conditionalRules || [];
        projectSettings = stateObject.projectSettings || {};

        if(projectSettings.tickSoundData) {
            tickAudio.src = projectSettings.tickSoundData;
        }

        activeEditor = { type: null, id: null };
        editingEntityId = null;
        loadWheel(Object.keys(wheelsData)[0] || null);
        updateAllUI();
        evaluateAllRules();

        const message = fromFile ? "Đã import dự án thành công!" : "Đã tải lại phiên làm việc trước!";
        showNotification(message);
    }

    function handleExport() { const state = getFullState(); const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state)); const downloadAnchorNode = document.createElement('a'); downloadAnchorNode.setAttribute("href", dataStr); downloadAnchorNode.setAttribute("download", `wheel-engine-project_${new Date().toISOString().slice(0,10)}.json`); document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove(); showNotification("Đã xuất file dự án!"); }
    function handleImport(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const newState = JSON.parse(e.target.result); showConfirmationModal("Import sẽ ghi đè lên toàn bộ dự án hiện tại. Bạn có chắc chắn?", () => { loadState(newState, true); }); } catch (error) { showNotification("Lỗi: File JSON không hợp lệ.", true); } finally { importFileInput.value = ''; } }; reader.readAsText(file); }

    function handleExportEntities() { if (Object.keys(entities).length === 0) { showNotification("Không có thực thể nào để export.", true); return; } const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entities)); const downloadAnchorNode = document.createElement('a'); downloadAnchorNode.setAttribute("href", dataStr); downloadAnchorNode.setAttribute("download", `wheel-engine-entities_${new Date().toISOString().slice(0,10)}.json`); document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove(); showNotification("Đã xuất file dữ liệu thực thể!"); }
    function handleImportEntities(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const newEntities = JSON.parse(e.target.result); if (typeof newEntities !== 'object' || newEntities === null || Array.isArray(newEntities)) { throw new Error("File không chứa dữ liệu thực thể hợp lệ."); } showConfirmationModal("Import sẽ ghi đè lên toàn bộ danh sách thực thể hiện tại. Bạn có chắc chắn?", () => { entities = newEntities; activeEntityId = Object.keys(entities)[0] || null; editingEntityId = null; loadState(getFullState()); /* Reload to ensure data integrity */ showNotification("Đã import danh sách thực thể thành công!"); }); } catch (error) { showNotification(`Lỗi: ${error.message}`, true); } finally { importEntitiesInput.value = ''; } }; reader.readAsText(file); }

    // --- MEDIA HELPERS ---
    function handleFileUpload(file, callback) {
        if (!file) {
            callback('');
            return;
        };
        const reader = new FileReader();
        reader.onload = (e) => callback(e.target.result);
        reader.readAsDataURL(file);
    }

    function playSound(soundData) {
        if (!soundData) return;
        try {
            const audio = new Audio(soundData);
            audio.play().catch(e => console.error("Audio playback error:", e));
        } catch (e) {
            console.error("Invalid audio data:", e);
        }
    }


    // --- APP NAVIGATION ---
    navLinks.forEach(link => { link.addEventListener('click', () => { if (isSpinning) return; navLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); const pageId = link.dataset.page + '-page'; appPages.forEach(p => p.classList.remove('active')); document.getElementById(pageId)?.classList.add('active'); if (link.dataset.page === 'logic-brain') updateAllUI(); }); });
    logicSubNavLinks.forEach(link => { link.addEventListener('click', () => { logicSubNavLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); const subpageId = link.dataset.subpage + '-subpage'; logicSubPages.forEach(p => p.classList.remove('active')); document.getElementById(subpageId)?.classList.add('active'); if (link.dataset.subpage === 'logic-map') { renderLogicMap(); } }); });
    sidebarNav.addEventListener('click', (e) => {
        if (e.target.matches('.sidebar-tab-btn')) {
            const tabId = e.target.dataset.tab;
            sidebarNav.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            sidebarTabContent.querySelectorAll('.sidebar-tab').forEach(tab => {
                tab.classList.toggle('active', tab.id === tabId);
            });
        }
    });

    // --- LOGIC MAP FUNCTION ---
    function renderLogicMap() { const nodes = []; const edges = []; Object.keys(wheelsData).forEach(wheelName => { nodes.push({ id: wheelName, label: wheelName, shape: 'box' }); const wheel = wheelsData[wheelName]; if (wheel.segments) { wheel.segments.forEach(segment => { if (segment.actions) { const goToWheelAction = segment.actions.find(a => a.type === 'goToWheel' && a.target); if (goToWheelAction) { edges.push({ from: wheelName, to: goToWheelAction.target, label: `Trúng ô: '${segment.text}'`, arrows: 'to' }); } } }); } if (wheel.settings && wheel.settings.defaultLink && wheel.settings.defaultLink !== 'None') { edges.push({ from: wheelName, to: wheel.settings.defaultLink, label: 'Liên kết mặc định', arrows: 'to', dashes: true }); } }); const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges), }; const options = { layout: { hierarchical: { direction: "UD", sortMethod: "directed", }, }, edges: { color: "#999", font: { color: '#efefef', size: 12, strokeWidth: 0 }, }, nodes: { color: { background: '#404040', border: '#ffde59', highlight: { background: '#ffde59', border: '#ffc107' } }, font: { color: '#f0f0f0', size: 14 } }, physics: false, }; new vis.Network(logicMapContainer, data, options); }


    // --- CORE LOGIC (STATS & ACTIONS) ---
    function getActiveEntity() { return (activeEntityId && entities[activeEntityId]) ? entities[activeEntityId] : null; }
    function getActiveVariables() { return getActiveEntity()?.variables || {}; }

    function evaluateFormula(formula, contextEntityId = activeEntityId) {
        if (typeof formula !== 'string') return formula;
        const contextEntity = contextEntityId && entities[contextEntityId];
        if (!contextEntity) return formula;
        const contextVars = contextEntity.variables;

        let expression = formula.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (match) => {
            const varData = contextVars[match];
            if (varData === undefined) return match;
            const totalValue = (varData.base || 0) + (varData.bonus || 0);
            if (typeof totalValue === 'string') return `'${totalValue.replace(/'/g, "\\'")}'`;
            return totalValue;
        });

        try { return Function(`'use strict'; return (${expression})`)(); }
        catch (e) { return formula; }
    }


    function evaluateAllRules(depth = 0) {
        if (!activeEntityId || depth > 15) return;
        let changedInLoop = false;

        computedVariables.forEach(compVar => {
            const targetVarName = compVar.formula.replace(/_base|_bonus/g, '').split(/[+\-*/\s()]/).find(v => variableTemplate[v]);
            if (!targetVarName) return;

            const activeVars = getActiveVariables();
            const targetVar = activeVars[targetVarName];
            if (!targetVar) return;

            const oldValue = targetVar.bonus;
            const baseValue = targetVar.base;
            const totalValue = evaluateFormula(compVar.formula);
            const newBonus = totalValue - baseValue;

            if (newBonus !== oldValue) {
                addLogMessage(`Luật tính toán: <span class="log-highlight">${targetVarName}</span> cập nhật từ ${baseValue + oldValue} -> ${totalValue}`);
                targetVar.bonus = newBonus;
                changedInLoop = true;
            }
        });
        conditionalRules.forEach(rule => {
            let allConditionsMet = rule.conditions.length > 0;
            for (const condition of rule.conditions) {
                const leftValue = evaluateFormula(condition.left);
                const rightValue = evaluateFormula(condition.right);
                let result = false;
                switch (condition.operator) {
                    case '==': result = (leftValue == rightValue); break;
                    case '!=': result = (leftValue != rightValue); break;
                    case '>': result = (leftValue > rightValue); break;
                    case '<': result = (leftValue < rightValue); break;
                    case '>=': result = (leftValue >= rightValue); break;
                    case '<=': result = (leftValue <= rightValue); break;
                }
                if (!result) { allConditionsMet = false; break; }
            }
            if (allConditionsMet) {
                addLogMessage(`Luật <span class="log-highlight">${rule.name}</span> được kích hoạt.`);
                if (executeActions(rule.actions)) changedInLoop = true;
            }
        });
        if (changedInLoop) {
            updateEntityEditorUI();
            updateSidebarDisplay();
            evaluateAllRules(depth + 1);
        }
    }

    function executeActions(actions, resultContext = null) {
        const activeEntity = getActiveEntity();
        if (!activeEntity) return false;
        let variablesChanged = false;
        const activeVars = activeEntity.variables;

        (actions || []).forEach(action => {
            switch (action.type) {
                case 'setVariable':
                    const varName = action.target;
                    const targetProp = action.targetProperty || 'bonus';
                    if (!varName || !activeVars[varName]) return;

                    const oldValue = activeVars[varName][targetProp];
                    let rawValue = action.value;
                    if (resultContext && typeof rawValue === 'string' && rawValue.trim().toUpperCase() === '[RESULT]') {
                        rawValue = resultContext.text;
                    }
                    const value = evaluateFormula(rawValue);
                    let finalValue;

                    switch (action.operator) {
                        case '=': finalValue = value; break;
                        case '+=': finalValue = (oldValue || 0) + value; break;
                        case '-=': finalValue = (oldValue || 0) - value; break;
                    }

                    if (typeof oldValue === 'string' && action.operator !== '=') return;

                    if (finalValue !== oldValue) {
                        addLogMessage(`-> <span class="log-highlight">${varName}.${targetProp}</span>: ${oldValue} -> ${finalValue}`);
                        activeVars[varName][targetProp] = finalValue;
                        variablesChanged = true;
                    }
                    break;
            }

        });
        if (variablesChanged) { throttledSaveState(); }
        return variablesChanged;
    }

    // --- UI UPDATE FUNCTIONS ---
    function updateAllUI() {
        updateVariableTemplateUI();
        updateCollectionTemplateUI();
        updateComputedVariablesListUI();
        updateRulesListUI();
        updateEntityListUI();
        updateActiveEntitySelector();
        updateEntityEditorUI();
        updateSidebarDisplay();
        updateCreatorUI();
        clearTickSoundBtn.style.display = projectSettings.tickSoundData ? 'inline-block' : 'none';
    }

    function updateVariableTemplateUI() {
        variableTemplateListDiv.innerHTML = '';
        Object.keys(variableTemplate).sort().forEach(varName => {
            const varData = variableTemplate[varName];
            const item = document.createElement('div');
            item.className = 'list-item variable-item';
            item.innerHTML = `
                <div class="image-preview-container" style="display: ${varData.icon ? 'block' : 'none'}">
                    <img src="${varData.icon || ''}" class="image-preview">
                </div>
                <div class="variable-name-group item-info"><strong>${varName}</strong></div>
                <div class="variable-inputs">
                    <div><label>Base</label><input type="text" class="variable-base-input" value="${varData.base}" data-varname="${varName}"></div>
                    <div><label>Bonus</label><input type="text" class="variable-bonus-input" value="${varData.bonus}" data-varname="${varName}"></div>
                </div>
                <button class="delete-btn delete-variable-btn" data-varname="${varName}">X</button>`;
            variableTemplateListDiv.appendChild(item);
        });
        updateVariableSuggestions();
    }

    function updateCollectionTemplateUI() {
        collectionTemplateListUI.innerHTML = '';
        Object.values(collectionTemplate).sort((a, b) => a.name.localeCompare(b.name)).forEach(coll => {
            const li = document.createElement('li');
            li.className = 'list-item';
            li.innerHTML = `<span class="item-info">${coll.name}</span><button class="delete-btn delete-collection-btn" data-id="${coll.id}">X</button>`;
            collectionTemplateListUI.appendChild(li);
        });
        updateCollectionSelectorDropdowns();
    }

    function updateCollectionSelectorDropdowns() {
        const optionsHTML = Object.values(collectionTemplate)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(coll => `<option value="${coll.id}">${coll.name}</option>`)
            .join('');
        actionSetCollectionSlotsTarget.innerHTML = optionsHTML;
        actionAddToCollectionTarget.innerHTML = optionsHTML;
    }


    function updateEntityListUI() { entityListUI.innerHTML = ''; Object.values(entities).forEach(entity => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = entity.id; if (editingEntityId === entity.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${entity.name}</span><button class="delete-btn delete-entity-btn" data-id="${entity.id}">X</button>`; entityListUI.appendChild(li); }); }
    function updateActiveEntitySelector() { activeEntitySelector.innerHTML = '<option value="none">-- Không có --</option>'; Object.values(entities).forEach(entity => { const option = document.createElement('option'); option.value = entity.id; option.textContent = entity.name; activeEntitySelector.appendChild(option); }); activeEntitySelector.value = activeEntityId && entities[activeEntityId] ? activeEntityId : 'none'; }

    function updateEntityEditorUI() {
        const hasSelection = !!editingEntityId;
        entityEditorPlaceholder.style.display = hasSelection ? 'none' : 'block';
        entityEditorContent.style.display = hasSelection ? 'block' : 'none';
        if (!hasSelection) return;

        const entity = entities[editingEntityId];
        entityEditorTitle.textContent = `Chỉnh sửa: ${entity.name}`;
        entityNameInput.value = entity.name;
        entityAvatarPreview.src = entity.avatar || '';
        clearEntityAvatarBtn.style.display = entity.avatar ? 'inline-block' : 'none';

        entityVariablesListDiv.innerHTML = '';
        Object.keys(entity.variables).sort().forEach(varName => {
            const varData = entity.variables[varName];
            const item = document.createElement('div');
            item.className = 'list-item variable-item';
            item.innerHTML = `
                <div class="variable-name-group item-info"><strong>${varName}</strong></div>
                <div class="variable-inputs">
                    <div><label>Base</label><input type="text" class="variable-base-input" value="${varData.base}" data-varname="${varName}" data-entityid="${entity.id}"></div>
                    <div><label>Bonus</label><input type="text" class="variable-bonus-input" value="${varData.bonus}" data-varname="${varName}" data-entityid="${entity.id}"></div>
                </div>`;
            entityVariablesListDiv.appendChild(item);
        });

        // Populate collections
        entityCollectionsListDiv.innerHTML = '';
        Object.keys(collectionTemplate).sort((a,b) => collectionTemplate[a].name.localeCompare(collectionTemplate[b].name)).forEach(collectionId => {
            const collectionTpl = collectionTemplate[collectionId];
            const collectionGroup = document.createElement('div');
            collectionGroup.className = 'collection-editor-group';

            const title = document.createElement('h4');
            title.textContent = collectionTpl.name;
            collectionGroup.appendChild(title);

            const slots = entity.collections[collectionId] || [];
            if (slots.length === 0) {
                const emptyText = document.createElement('p');
                emptyText.className = 'form-hint';
                emptyText.textContent = 'Trống';
                collectionGroup.appendChild(emptyText);
            } else {
                slots.forEach((item, index) => {
                    const slotDiv = document.createElement('div');
                    slotDiv.className = 'collection-editor-slot';
                    slotDiv.innerHTML = `
                        <label>#${index + 1}</label>
                        <input type="text" value="${item || ''}" data-entityid="${entity.id}" data-collectionid="${collectionId}" data-slotindex="${index}">
                    `;
                    collectionGroup.appendChild(slotDiv);
                });
            }
            entityCollectionsListDiv.appendChild(collectionGroup);
        });
    }

    function updateSidebarDisplay() {
        updateSidebarTitle();
        updateSidebarTabs();
        updateEntityStatDisplay();
    }

    function updateSidebarTitle() {
        const activeEntity = getActiveEntity();
        sidebarTitle.textContent = activeEntity ? activeEntity.name : 'Thông Tin';
    }

    function updateSidebarTabs() {
        const previouslyActiveTabId = sidebarNav.querySelector('.sidebar-tab-btn.active')?.dataset.tab;

        // Clear previous dynamic tabs and content
        sidebarNav.querySelectorAll('.dynamic-tab').forEach(el => el.remove());
        sidebarTabContent.querySelectorAll('.dynamic-tab-content').forEach(el => el.remove());

        const activeEntity = getActiveEntity();
        if (!activeEntity) {
             // Deactivate all first
            sidebarNav.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active'));
            sidebarTabContent.querySelectorAll('.sidebar-tab').forEach(tab => tab.classList.remove('active'));

            // Reactivate stats tab
             const statsBtn = sidebarNav.querySelector('.sidebar-tab-btn[data-tab="stats-tab"]');
            if (statsBtn) statsBtn.classList.add('active');
            const statsContent = document.getElementById('stats-tab');
            if (statsContent) statsContent.classList.add('active');
            return;
        }

        Object.keys(activeEntity.collections || {}).sort((a,b) => collectionTemplate[a]?.name.localeCompare(collectionTemplate[b]?.name)).forEach(collectionId => {
            const collectionTpl = collectionTemplate[collectionId];
            if (!collectionTpl) return; // Skip if template doesn't exist

            // Create Tab Button
            const tabBtn = document.createElement('button');
            tabBtn.className = 'sidebar-tab-btn dynamic-tab';
            tabBtn.dataset.tab = `collection-${collectionId}-tab`;
            tabBtn.textContent = collectionTpl.name;
            sidebarNav.appendChild(tabBtn);

            // Create Tab Content Pane
            const tabContent = document.createElement('div');
            tabContent.id = `collection-${collectionId}-tab`;
            tabContent.className = 'sidebar-tab dynamic-tab-content collection-tab-content';

            const collectionDisplay = document.createElement('div');
            collectionDisplay.className = 'entity-collection-display';

            const slots = activeEntity.collections[collectionId];
            if (!slots || slots.length === 0) {
                 collectionDisplay.innerHTML = '<p class="form-hint">Không có ô nào.</p>';
            } else {
                slots.forEach((item, index) => {
                    const slotDiv = document.createElement('div');
                    slotDiv.className = 'collection-slot';
                    const itemClass = item ? 'slot-item' : 'slot-item empty';
                    const itemText = item || 'Trống';
                    slotDiv.innerHTML = `<span class="slot-index">#${index + 1}</span><span class="${itemClass}">${itemText}</span>`;
                    collectionDisplay.appendChild(slotDiv);
                });
            }
            tabContent.appendChild(collectionDisplay);
            sidebarTabContent.appendChild(tabContent);
        });

        // Restore active tab, defaulting to stats tab
        const tabToActivate = sidebarNav.querySelector(`.sidebar-tab-btn[data-tab="${previouslyActiveTabId}"]`) || sidebarNav.querySelector('.sidebar-tab-btn[data-tab="stats-tab"]');
        if (tabToActivate) {
            sidebarNav.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active'));
            sidebarTabContent.querySelectorAll('.sidebar-tab').forEach(tab => tab.classList.remove('active'));

            tabToActivate.classList.add('active');
            const contentToActivate = document.getElementById(tabToActivate.dataset.tab);
            if(contentToActivate) contentToActivate.classList.add('active');
        }
    }


    function updateEntityStatDisplay() {
        entityStatsDisplay.innerHTML = '';
        const activeVars = getActiveVariables();
        if (!activeEntityId || Object.keys(activeVars).length === 0) {
            entityStatsDisplay.innerHTML = '<p class="form-hint">Không có thực thể nào được chọn.</p>'; return;
        }

        Object.keys(activeVars).sort().forEach(varName => {
            const item = document.createElement('div');
            item.className = 'stat-item';
            const { base = 0, bonus = 0 } = activeVars[varName];
            const varTpl = variableTemplate[varName] || {};
            const total = base + bonus;
            const details = bonus !== 0 ? `<span class="stat-item-details">(${base} ${bonus > 0 ? '+': ''}${bonus})</span>` : '';

            item.innerHTML = `
                <img src="${varTpl.icon || ''}" class="stat-item-icon" style="display: ${varTpl.icon ? 'block' : 'none'}">
                <span class="stat-item-name">${varName}</span>
                <span class="stat-item-value">${total}</span>
                ${details}`;
            entityStatsDisplay.appendChild(item);
        });
    }

    function addLogMessage(message) { const li = document.createElement('li'); li.innerHTML = message; gameLog.prepend(li); while (gameLog.children.length > MAX_LOG_ENTRIES) { gameLog.lastChild.remove(); } }
    function loadEntityEditor(entityId) { editingEntityId = entityId; updateEntityListUI(); updateEntityEditorUI(); }
    function updateComputedVariablesListUI() { computedVariablesListUI.innerHTML = ''; computedVariables.forEach(cv => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = cv.id; if(activeEditor.type === 'computed' && cv.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info"><strong>Tổng</strong> = ${cv.formula || '...'}</span><button class="delete-btn delete-computed-variable-btn" data-id="${cv.id}">X</button>`; computedVariablesListUI.appendChild(li); }); }
    function updateRulesListUI() { rulesListUI.innerHTML = ''; conditionalRules.forEach(rule => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = rule.id; if(activeEditor.type === 'conditional' && rule.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${rule.name || 'Luật không tên'}</span><button class="delete-btn delete-rule-btn" data-id="${rule.id}">X</button>`; rulesListUI.appendChild(li); }); }
    function loadEditor(type, id) { activeEditor = { type, id }; if (type === 'computed') { const compVar = computedVariables.find(cv => cv.id === id); if (!compVar) return; computedVariableFormulaInput.value = compVar.formula; } else if (type === 'conditional') { const rule = conditionalRules.find(r => r.id === activeEditor.id); if (!rule) return; ruleNameInput.value = rule.name; ruleConditionsContainer.innerHTML = ''; rule.conditions.forEach(cond => ruleConditionsContainer.appendChild(createRuleConditionRow(cond))); ruleActionsContainer.innerHTML = ''; rule.actions.forEach(act => ruleActionsContainer.appendChild(createSetVariableActionRow(act, true))); }
    logicEditorPlaceholder.style.display = (activeEditor.id) ? 'none' : 'block';
    computedVariableEditorContent.style.display = (activeEditor.type === 'computed') ? 'block' : 'none';
    ruleEditorContent.style.display = (activeEditor.type === 'conditional') ? 'block' : 'none';
    updateComputedVariablesListUI(); updateRulesListUI();
    }
    function saveActiveEditor() { if (!activeEditor.id) return; if (activeEditor.type === 'computed') { const compVar = computedVariables.find(cv => cv.id === activeEditor.id); if (!compVar) return; compVar.formula = computedVariableFormulaInput.value; updateComputedVariablesListUI(); } else if (activeEditor.type === 'conditional') { const rule = conditionalRules.find(r => r.id === activeEditor.id); if (!rule) return; rule.name = ruleNameInput.value.trim(); rule.conditions = []; ruleConditionsContainer.querySelectorAll('.rule-condition-row').forEach(row => { rule.conditions.push({ left: row.querySelector('.rule-condition-left').value, operator: row.querySelector('.rule-condition-operator').value, right: row.querySelector('.rule-condition-right').value, }); }); rule.actions = []; ruleActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => { const actionData = { type: 'setVariable', target: row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_'), targetProperty: row.querySelector('.action-var-target-prop').value, operator: row.querySelector('.action-var-operator').value, value: row.querySelector('.action-var-value').value.trim() }; if(actionData.target) rule.actions.push(actionData); }); updateRulesListUI(); } evaluateAllRules(); throttledSaveState(); }
    function createRuleConditionRow(condition = {}) { const row = document.createElement('div'); row.className = 'rule-condition-row'; row.innerHTML = `<div><input type="text" class="rule-condition-left" placeholder="Công thức..." value="${condition.left || ''}"><p class="form-hint">VD: mau_hien_tai, hoac chung_toc</p></div><select class="rule-condition-operator"><option value="==" ${condition.operator === '==' ? 'selected' : ''}>==</option><option value="!=" ${condition.operator === '!=' ? 'selected' : ''}>!=</option><option value=">" ${condition.operator === '>' ? 'selected' : ''}>&gt;</option><option value="<" ${condition.operator === '<' ? 'selected' : ''}>&lt;</option><option value=">=" ${condition.operator === '>=' ? 'selected' : ''}>&gt;=</option><option value="<=" ${condition.operator === '<=' ? 'selected' : ''}>&lt;=</option></select><div><input type="text" class="rule-condition-right" placeholder="Giá trị..." value="${condition.right || '0'}"><p class="form-hint">VD: 50 (số) hoặc 'Elf' (chuỗi)</p></div><button class="btn-danger btn-delete-action">-</button>`; return row; }

    // --- WHEEL FUNCTIONS ---
    function drawWheel(segmentsToDraw) {
        const segments = segmentsToDraw || (wheelsData[currentWheelName]?.segments) || [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (segments.length === 0) return;
        const centerX = canvas.width / 2, centerY = canvas.height / 2, outerRadius = canvas.width / 2 - 10;
        const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0);
        let currentAngle = startAngle;
        segments.forEach((segment) => {
            const arc = (segment.weight / totalWeight) * (2 * Math.PI);
            ctx.beginPath();
            ctx.fillStyle = segment.color;
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + arc);
            ctx.closePath();
            ctx.fill();
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(currentAngle + arc / 2);
            ctx.textAlign = "center";
            ctx.fillStyle = "#fff";
            ctx.font = `bold 16px ${getComputedStyle(document.body).fontFamily}`;
            if (segment.text && segment.text.trim() !== '') {
                ctx.fillText(segment.text, outerRadius * 0.65, 5);
            }
            ctx.restore();
            currentAngle += arc;
        });
    }

    function updateVariableSuggestions() { const suggestions = Object.keys(variableTemplate); variableSuggestionsSettings.innerHTML = ''; variableSuggestionsAction.innerHTML = ''; suggestions.forEach(varName => { const optionHTML = `<option value="${varName}"></option>`; variableSuggestionsSettings.innerHTML += optionHTML; variableSuggestionsAction.innerHTML += optionHTML; }); }
    function updateCreatorUI() { const currentWheel = wheelsData[currentWheelName]; if(!currentWheel) { wheelTitle.textContent = "Chưa có Vòng Quay"; wheelSettingsPanel.style.display = 'none'; segmentListUI.innerHTML = ''; totalWeightInfo.textContent = ''; pasteWheelBtn.disabled = copiedWheelData === null; drawWheel(); return; } wheelTitle.textContent = currentWheelName || "Chưa có Vòng Quay"; segmentEditorTitle.textContent = editingSegmentIndex !== null ? `Đang Sửa Ô: "${currentWheel.segments[editingSegmentIndex].text}"` : "Thêm / Sửa Ô"; wheelSettingsPanel.style.display = currentWheelName ? 'block' : 'none'; pasteWheelBtn.disabled = copiedWheelData === null; copyWheelBtn.disabled = !currentWheelName; const wheelNames = Object.keys(wheelsData); wheelSelector.innerHTML = ''; wheelNames.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; wheelSelector.appendChild(option); }); if(currentWheelName) { wheelSelector.value = currentWheelName; } deleteWheelBtn.disabled = !currentWheelName; const segments = currentWheel?.segments || []; segmentListUI.innerHTML = ''; const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0); totalWeightInfo.textContent = `Tổng trọng số: ${totalWeight}`; segments.forEach((segment, index) => { const percentage = totalWeight > 0 ? ((segment.weight / totalWeight) * 100).toFixed(1) : 0; const li = document.createElement('li'); li.className = 'list-item segment-list-item'; li.dataset.index = index; li.draggable = true; if (index === editingSegmentIndex) li.classList.add('editing'); li.innerHTML = `<div class="color-box" style="background-color: ${segment.color};"></div><span class="item-info">${segment.text}</span><span class="segment-weight">${percentage}%</span><button class="delete-btn delete-segment-btn" data-index="${index}">X</button>`; segmentListUI.appendChild(li); }); const settings = currentWheel?.settings; if (settings) { document.getElementById('wheel-settings-title').textContent = `Cài Đặt: "${currentWheelName}"`; spinCountVariableInput.value = settings.spinCountVariable || '';
    segmentRemovalModeSelect.value = settings.removalMode || 'none';
    defaultLinkSelect.innerHTML = '<option value="None">Không liên kết</option>'; wheelNames.forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; if (name === settings.defaultLink) option.selected = true; defaultLinkSelect.appendChild(option); } }); } updateVariableSuggestions(); drawWheel(); }
    function loadWheel(name) { if (!name || !wheelsData[name]) { currentWheelName = Object.keys(wheelsData)[0] || ''; } else { currentWheelName = name; } const currentWheel = wheelsData[currentWheelName]; if (currentWheel) { if (!currentWheel.settings) { currentWheel.settings = {}; } if (!currentWheel.settings.removalMode) { currentWheel.settings.removalMode = 'none'; } if (typeof currentWheel.settings.spinCountVariable === 'undefined') { currentWheel.settings.spinCountVariable = ''; } if (typeof currentWheel.settings.defaultLink === 'undefined') { currentWheel.settings.defaultLink = 'None'; } } exitEditMode(); }

    function createSetVariableActionRow(action = {}) {
        const actionRow = document.createElement('div');
        actionRow.className = 'set-variable-action-row';
        actionRow.innerHTML = `
            <div class="form-group">
                <label>Tên biến</label>
                <input type="text" class="action-var-name" list="variable-suggestions-action" placeholder="Chọn hoặc gõ..." value="${action.target || ''}">
            </div>
             <div class="form-group">
                <label>Mục tiêu</label>
                <select class="action-var-target-prop">
                    <option value="bonus" ${action.targetProperty === 'bonus' ? 'selected' : ''}>Bonus (Tạm thời)</option>
                    <option value="base" ${action.targetProperty === 'base' ? 'selected' : ''}>Base (Gốc)</option>
                </select>
            </div>
            <div class="form-group">
                <label>Phép toán</label>
                <select class="action-var-operator">
                    <option value="=" ${action.operator === '=' ? 'selected' : ''}>Gán (=)</option>
                    <option value="+=" ${action.operator === '+=' ? 'selected' : ''}>Cộng (+=)</option>
                    <option value="-=" ${action.operator === '-=' ? 'selected' : ''}>Trừ (-=)</option>
                </select>
            </div>
            <div class="form-group full-width">
                <label>Giá trị / Công thức</label>
                <input type="text" class="action-var-value" placeholder="VD: 10, 'Kiếm Sĩ', suc_manh" value="${action.value || ''}">
            </div>
            <button class="btn-danger btn-delete-action">-</button>`;
        return actionRow;
    }

    function enterEditMode(index) { editingSegmentIndex = index; const segment = wheelsData[currentWheelName].segments[index]; editingSegmentData = JSON.parse(JSON.stringify(segment)); populateActionPanelFromEditingState(); updateAllActionSummaries(); mainActionBtn.textContent = "Cập Nhật"; cancelEditBtn.style.display = 'block'; pasteActionsBtn.disabled = copiedActions === null; updateCreatorUI(); }
    function populateActionPanelFromEditingState() {
        resetActionPanelVisuals();
        const { text, weight, color, actions = [] } = editingSegmentData;
        segmentTextInput.value = text || '';
        segmentWeightInput.value = weight || 1;
        segmentColorInput.value = color || '#8AC926';

        const setVarActions = actions.filter(a => a.type === 'setVariable');
        actionSetVariableEnabled.checked = setVarActions.length > 0;
        setVarActions.forEach(action => setVariableActionsContainer.appendChild(createSetVariableActionRow(action)));

        const goToWheelAction = actions.find(a => a.type === 'goToWheel');
        actionGoToWheelEnabled.checked = !!goToWheelAction;
        if(goToWheelAction) actionTargetWheelSelect.value = goToWheelAction.target;

        const playSoundAction = actions.find(a => a.type === 'playSound');
        actionPlaySoundEnabled.checked = !!playSoundAction;
        if(playSoundAction && playSoundAction.soundData) { clearActionSoundBtn.style.display = 'inline-block'; }

        const conditionalAction = actions.find(a => a.type === 'conditionalReroll');
        actionConditionalEnabled.checked = !!conditionalAction;
        if (conditionalAction) { conditionOperatorSelect.value = conditionalAction.operator; conditionValueInput.value = conditionalAction.value; conditionRerollsInput.value = conditionalAction.maxRerolls || 1; }

        const setSlotsAction = actions.find(a => a.type === 'setCollectionSlots');
        actionSetCollectionSlotsEnabled.checked = !!setSlotsAction;
        if(setSlotsAction) {
            actionSetCollectionSlotsTarget.value = setSlotsAction.targetCollection;
            actionSetCollectionSlotsValue.value = setSlotsAction.value;
        }

        const addToCollectionAction = actions.find(a => a.type === 'addToCollection');
        actionAddToCollectionEnabled.checked = !!addToCollectionAction;
        if(addToCollectionAction) {
            actionAddToCollectionTarget.value = addToCollectionAction.targetCollection;
        }

        document.querySelectorAll('#segment-action-panel .action-header input').forEach(el => { const details = el.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = el.checked ? 'flex' : 'none'; });
    }
    function resetActionPanelVisuals() {
        actionSetVariableEnabled.checked = false;
        actionGoToWheelEnabled.checked = false;
        actionConditionalEnabled.checked = false;
        actionPlaySoundEnabled.checked = false;
        setVariableActionsContainer.innerHTML = '';
        actionSoundUpload.value = '';
        clearActionSoundBtn.style.display = 'none';
        actionTargetWheelSelect.innerHTML = '<option value="">Chọn Vòng Quay</option>';
        Object.keys(wheelsData).forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; actionTargetWheelSelect.appendChild(option); } });

        actionSetCollectionSlotsEnabled.checked = false;
        actionSetCollectionSlotsValue.value = '';
        actionAddToCollectionEnabled.checked = false;

        document.querySelectorAll('#segment-action-panel .action-details').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.action-summary').forEach(el => el.textContent = '');
    }
    function updateAllActionSummaries() {
        const actions = editingSegmentData.actions || [];
        const setVarActions = actions.filter(a => a.type === 'setVariable');
        document.querySelector('#action-setVariable-enabled ~ .action-summary').textContent = setVarActions.length > 0 ? setVarActions.map(a => `${a.target}.${a.targetProperty || 'bonus'} ${a.operator} ${a.value}`).join(', ') : '';

        const setSlotsAction = actions.find(a => a.type === 'setCollectionSlots');
        document.querySelector('#action-setCollectionSlots-enabled ~ .action-summary').textContent = setSlotsAction ? `[${collectionTemplate[setSlotsAction.targetCollection]?.name || '?'}] = ${setSlotsAction.value} ô` : '';

        const addToCollectionAction = actions.find(a => a.type === 'addToCollection');
        document.querySelector('#action-addToCollection-enabled ~ .action-summary').textContent = addToCollectionAction ? `Thêm vào [${collectionTemplate[addToCollectionAction.targetCollection]?.name || '?'}]` : '';

        const goToWheelAction = actions.find(a => a.type === 'goToWheel');
        document.querySelector('#action-goToWheel-enabled ~ .action-summary').textContent = (goToWheelAction && goToWheelAction.target) ? `-> ${goToWheelAction.target}` : '';

        const playSoundAction = actions.find(a => a.type === 'playSound');
        document.querySelector('#action-playSound-enabled ~ .action-summary').textContent = (playSoundAction && playSoundAction.soundData) ? `Phát âm thanh tùy chỉnh` : '';

        const conditionalAction = actions.find(a => a.type === 'conditionalReroll');
        document.querySelector('#action-conditional-enabled ~ .action-summary').textContent = conditionalAction ? `Nếu KQ ${conditionalAction.operator} ${conditionalAction.value}, quay lại ${conditionalAction.maxRerolls} lần` : '';
    }

    function exitEditMode() {
        editingSegmentIndex = null;
        editingSegmentData = { text: '', weight: 1, color: '#8AC926', actions: [] };
        segmentTextInput.value = '';
        segmentWeightInput.value = 1;
        segmentColorInput.value = '#8AC926';
        mainActionBtn.textContent = "Thêm Ô";
        cancelEditBtn.style.display = 'none';
        resetActionPanelVisuals();
        updateCreatorUI();
    }

    function getResult(segmentsForCalc) { if (!segmentsForCalc || segmentsForCalc.length === 0) return null; const totalWeight = segmentsForCalc.reduce((sum, seg) => sum + (seg.weight || 1), 0); const markerAngleRad = 270 * Math.PI / 180; const finalAngle = (markerAngleRad - (startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); let cumulativeAngle = 0; for (const segment of segmentsForCalc) { const arc = (segment.weight / totalWeight) * (2 * Math.PI); if (finalAngle >= cumulativeAngle && finalAngle < cumulativeAngle + arc) return segment; cumulativeAngle += arc; } return segmentsForCalc[0]; }

    function endSpinSequenceCleanup() { wheelDisplayArea.classList.remove('is-spinning'); panelOverlay.style.display = 'none'; spinCountDisplay.textContent = ''; variableSnapshot = null; tickAudio.pause(); tickAudio.currentTime = 0; }
    function startSpinSequence() { if (isSpinning) return; if (!activeEntityId) { showNotification("Vui lòng chọn một Thực Thể Hoạt Động để quay!", true); return; } const settings = wheelsData[currentWheelName]?.settings; const segments = wheelsData[currentWheelName]?.segments; if (!settings || !segments || segments.length === 0) return; variableSnapshot = JSON.parse(JSON.stringify(entities[activeEntityId])); wheelDisplayArea.classList.add('is-spinning'); let spinCount = 1; const spinVarName = settings.spinCountVariable; const activeVars = getActiveVariables(); if (spinVarName && activeVars.hasOwnProperty(spinVarName)) { const varValue = (activeVars[spinVarName].base || 0) + (activeVars[spinVarName].bonus || 0); if (!isNaN(varValue) && varValue > 0) spinCount = varValue; } const spinJob = { totalSpins: spinCount, spinsLeft: spinCount, temporarySegments: [...segments] }; spin(spinJob); }
    function spin(job) { if (job.spinsLeft <= 0 || job.temporarySegments.length < 1) { endSpinSequenceCleanup(); const settings = wheelsData[currentWheelName]?.settings; if (settings && settings.defaultLink && settings.defaultLink !== 'None') { loadWheel(settings.defaultLink); } return; }; isSpinning = true; panelOverlay.style.display = 'block'; spinVelocity = Math.random() * 0.4 + 0.4; if (job.totalSpins > 1) { const currentSpin = job.totalSpins - job.spinsLeft + 1; spinCountDisplay.textContent = `(Lượt: ${currentSpin}/${job.totalSpins})`; } if (tickAudio.src) tickAudio.play(); animate(job); }
    function animate(job) { if (spinVelocity > 0.005) { startAngle += spinVelocity; spinVelocity *= friction; drawWheel(job.temporarySegments); requestAnimationFrame(() => animate(job)); } else if (isSpinning) { isSpinning = false; tickAudio.pause(); tickAudio.currentTime = 0; const result = getResult(job.temporarySegments); if (result) { processSpinResult(result, job); } else { endSpinSequenceCleanup(); } } }

    function processSpinResult(result, job) {
        job.spinsLeft--;
        const activeEntity = getActiveEntity();
        if (!activeEntity) { endSpinSequenceCleanup(); return; }

        addLogMessage(`<span class="log-highlight">${activeEntity.name}</span> quay trúng ô <span class="log-highlight">"${result.text}"</span>.`);
        const actions = result.actions || [];
        const playSoundAction = actions.find(a => a.type === 'playSound');
        if (playSoundAction) playSound(playSoundAction.soundData);

        const settings = wheelsData[currentWheelName].settings;
        const removalMode = settings.removalMode || 'none';
        let wheelWasDeleted = false;

        if (removalMode === 'temporary') { if (job.temporarySegments.length > 1) { const indexToRemove = job.temporarySegments.findIndex(seg => seg === result); if (indexToRemove > -1) job.temporarySegments.splice(indexToRemove, 1); } }
        else if (removalMode === 'permanent') { const originalSegments = wheelsData[currentWheelName].segments; const indexInOriginal = originalSegments.findIndex(seg => seg.text === result.text && seg.color === result.color); if (indexInOriginal > -1) { originalSegments.splice(indexInOriginal, 1); if (originalSegments.length === 0) { const deletedWheelName = currentWheelName; delete wheelsData[deletedWheelName]; wheelWasDeleted = true; showNotification(`Ô cuối cùng đã bị xóa. Vòng quay "${deletedWheelName}" đã bị hủy.`); } throttledSaveState(); if (!wheelWasDeleted) updateCreatorUI(); } }

        showResultPopup(result, () => {
            executeActions(actions, result);

            actions.forEach(action => {
                switch(action.type) {
                    case 'setCollectionSlots': {
                        const targetCollection = action.targetCollection;
                        if (!activeEntity.collections[targetCollection]) break;

                        let rawValue = action.value;
                        if (result && typeof rawValue === 'string' && rawValue.trim().toUpperCase() === '[RESULT]') {
                            rawValue = result.text;
                        }
                        const finalValue = evaluateFormula(rawValue);
                        const newSize = parseInt(finalValue, 10);

                        if (!isNaN(newSize) && newSize >= 0) {
                            addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> được đặt thành ${newSize} ô.`);
                            const currentSlots = activeEntity.collections[targetCollection];
                            const newSlots = new Array(newSize).fill(null);
                            for(let i = 0; i < Math.min(currentSlots.length, newSize); i++) {
                                newSlots[i] = currentSlots[i];
                            }
                            activeEntity.collections[targetCollection] = newSlots;
                        }
                        break;
                    }
                    case 'addToCollection': {
                        const targetCollection = action.targetCollection;
                        if (!activeEntity.collections[targetCollection]) break;

                        const slots = activeEntity.collections[targetCollection];
                        const emptySlotIndex = slots.findIndex(slot => slot === null);
                        if (emptySlotIndex !== -1) {
                            slots[emptySlotIndex] = result.text;
                             addLogMessage(`-> <span class="log-highlight">${result.text}</span> đã được thêm vào Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span>.`);
                        } else {
                            addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> đã đầy.`);
                        }
                        break;
                    }
                }
            });

            evaluateAllRules();
            updateEntityEditorUI();
            updateSidebarDisplay();

            if (wheelWasDeleted) { loadWheel(null); endSpinSequenceCleanup(); return; }
            const nextWheelAction = actions.find(a => a.type === 'goToWheel');
            if (nextWheelAction && wheelsData[nextWheelAction.target]) { spinCountDisplay.textContent = ''; loadWheel(nextWheelAction.target); endSpinSequenceCleanup(); }
            else if (job.spinsLeft > 0) { spin(job); }
            else { endSpinSequenceCleanup(); if (settings && settings.defaultLink && settings.defaultLink !== 'None') { loadWheel(settings.defaultLink); } else if (removalMode === 'temporary') { drawWheel(); } }
        });
    }

    // --- EVENT HANDLERS ---
    exportBtn.addEventListener('click', handleExport); importBtn.addEventListener('click', () => importFileInput.click()); importFileInput.addEventListener('change', handleImport);
    exportEntitiesBtn.addEventListener('click', handleExportEntities);
    importEntitiesBtn.addEventListener('click', () => importEntitiesInput.click());
    importEntitiesInput.addEventListener('change', handleImportEntities);

    // Template Handlers
    addVariableBtn.addEventListener('click', async () => {
        const varName = newVariableNameInput.value.trim().replace(/\s+/g, '_');
        if (!varName || variableTemplate.hasOwnProperty(varName)) return;

        const rawValue = newVariableValueInput.value;
        const finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue;

        let iconData = '';
        const iconFile = newVariableIconUpload.files[0];
        if (iconFile) {
            iconData = await new Promise(resolve => handleFileUpload(iconFile, resolve));
        }

        variableTemplate[varName] = { base: finalValue, bonus: 0, icon: iconData };
        newVariableNameInput.value = '';
        newVariableValueInput.value = '0';
        newVariableIconUpload.value = '';

        Object.values(entities).forEach(entity => {
            entity.variables[varName] = JSON.parse(JSON.stringify(variableTemplate[varName]));
        });

        updateAllUI();
        throttledSaveState();
    });

    variableTemplateListDiv.addEventListener('input', e => {
        const varName = e.target.dataset.varname;
        const prop = e.target.classList.contains('variable-base-input') ? 'base' : 'bonus';
        const rawValue = e.target.value;
        let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue;
        variableTemplate[varName][prop] = finalValue;
        updateAllUI();
        throttledSaveState();
    });

    variableTemplateListDiv.addEventListener('click', (e) => {
        if (e.target.matches('.delete-variable-btn')) {
            const varName = e.target.dataset.varname;
            delete variableTemplate[varName];
            Object.values(entities).forEach(entity => { delete entity.variables[varName]; });
            updateAllUI();
            throttledSaveState();
        }
    });

    addCollectionBtn.addEventListener('click', () => {
        const name = newCollectionNameInput.value.trim();
        if (!name) return;
        const id = name.replace(/\s+/g, '_');
        if (collectionTemplate[id]) {
            showNotification("Lỗi: Tên Kho Chứa này đã tồn tại.", true);
            return;
        }
        collectionTemplate[id] = { id, name };
        Object.values(entities).forEach(entity => {
            if (!entity.collections) entity.collections = {};
            entity.collections[id] = [];
        });
        newCollectionNameInput.value = '';
        updateCollectionTemplateUI();
        updateSidebarDisplay();
        throttledSaveState();
    });

    collectionTemplateListUI.addEventListener('click', e => {
        if (e.target.matches('.delete-collection-btn')) {
            const id = e.target.dataset.id;
            delete collectionTemplate[id];
            Object.values(entities).forEach(entity => {
                if (entity.collections) delete entity.collections[id];
            });
            updateAllUI();
            throttledSaveState();
        }
    });


    // Entity Manager Handlers
    addEntityBtn.addEventListener('click', () => {
        const name = newEntityNameInput.value.trim();
        if (!name) return;
        const id = `entity_${Date.now()}`;
        const newCollections = {};
        Object.keys(collectionTemplate).forEach(collId => { newCollections[collId] = []; });
        entities[id] = { id, name, variables: JSON.parse(JSON.stringify(variableTemplate)), avatar: '', collections: newCollections };
        newEntityNameInput.value = '';
        if (!activeEntityId) activeEntityId = id;
        updateEntityListUI();
        updateActiveEntitySelector();
        loadEntityEditor(id);
        throttledSaveState();
    });
    entityListUI.addEventListener('click', e => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; const id = targetLi.dataset.id; if (e.target.matches('.delete-entity-btn')) { e.stopPropagation(); showConfirmationModal(`Bạn có chắc muốn xóa thực thể "${entities[id].name}"?`, () => { delete entities[id]; if (editingEntityId === id) editingEntityId = null; if (activeEntityId === id) activeEntityId = null; updateAllUI(); throttledSaveState(); }); } else { loadEntityEditor(id); } });
    entityNameInput.addEventListener('input', (e) => { if(editingEntityId) { entities[editingEntityId].name = e.target.value; entityEditorTitle.textContent = `Chỉnh sửa: ${e.target.value}`; updateEntityListUI(); updateActiveEntitySelector(); updateSidebarTitle(); throttledSaveState(); } });
    entityVariablesListDiv.addEventListener('input', e => {
        if(e.target.matches('input[type="text"]')) {
            const entityId = e.target.dataset.entityid;
            const varName = e.target.dataset.varname;
            const prop = e.target.classList.contains('variable-base-input') ? 'base' : 'bonus';
            const rawValue = e.target.value;
            let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue;
            entities[entityId].variables[varName][prop] = finalValue;
            updateSidebarDisplay();
            evaluateAllRules();
            throttledSaveState();
        }
    });
    entityCollectionsListDiv.addEventListener('input', e => {
        if (e.target.matches('input[type="text"]')) {
            const { entityid, collectionid, slotindex } = e.target.dataset;
            const value = e.target.value;

            if (entities[entityid] && entities[entityid].collections[collectionid]) {
                entities[entityid].collections[collectionid][parseInt(slotindex)] = value.trim() === '' ? null : value;
                updateSidebarDisplay();
                throttledSaveState();
            }
        }
    });



    // Other Logic Handlers
    addComputedVariableBtn.addEventListener('click', () => { const newCv = { id: Date.now().toString(), formula: '' }; computedVariables.push(newCv); loadEditor('computed', newCv.id); throttledSaveState(); });
    computedVariablesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-computed-variable-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; computedVariables = computedVariables.filter(cv => cv.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); evaluateAllRules(); throttledSaveState(); } else { loadEditor('computed', targetLi.dataset.id); } });
    addRuleBtn.addEventListener('click', () => { const newRule = { id: Date.now().toString(), name: 'Luật Mới', conditions: [], actions: [] }; conditionalRules.push(newRule); loadEditor('conditional', newRule.id); throttledSaveState(); });
    rulesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-rule-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; conditionalRules = conditionalRules.filter(r => r.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('conditional', targetLi.dataset.id); } });
    logicEditor.addEventListener('input', (e) => { if (e.target.closest('#rule-editor-content, #computed-variable-editor-content')) { saveActiveEditor(); } });
    logicEditor.addEventListener('click', (e) => { if (e.target.matches('.btn-delete-action')) { e.target.parentElement.remove(); saveActiveEditor(); } });
    addRuleConditionBtn.addEventListener('click', () => { if (activeEditor.type !== 'conditional') return; const rule = conditionalRules.find(r => r.id === activeEditor.id); rule.conditions.push({ left: '', operator: '==', right: '0' }); loadEditor('conditional', activeEditor.id); throttledSaveState(); });
    addRuleActionBtn.addEventListener('click', () => { if (activeEditor.type !== 'conditional') return; const rule = conditionalRules.find(r => r.id === activeEditor.id); rule.actions.push({ type: 'setVariable', target: '', operator: '=', value: '' }); loadEditor('conditional', activeEditor.id); throttledSaveState(); });

    // Wheel Studio Handlers
    copyWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; copiedWheelData = JSON.parse(JSON.stringify(wheelsData[currentWheelName])); pasteWheelBtn.disabled = false; showNotification(`Đã sao chép vòng quay "${currentWheelName}"!`); });
    pasteWheelBtn.addEventListener('click', () => { if (!copiedWheelData) return; const newName = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (!newName) { showNotification("Vui lòng nhập tên cho vòng quay mới trước khi dán.", true); return; } if (wheelsData[newName]) { showNotification(`Lỗi: Tên vòng quay "${newName}" đã tồn tại.`, true); return; } wheelsData[newName] = JSON.parse(JSON.stringify(copiedWheelData)); newWheelNameInput.value = ''; loadWheel(newName); throttledSaveState(); showNotification(`Đã dán và tạo vòng quay mới "${newName}"!`); });
    createWheelBtn.addEventListener('click', () => { const name = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (name && !wheelsData[name]) { wheelsData[name] = { segments: [], settings: { removalMode: 'none', spinCountVariable: '', defaultLink: 'None' } }; newWheelNameInput.value = ''; loadWheel(name); throttledSaveState(); } else if (wheelsData[name]) alert('Lỗi: Tên vòng quay đã tồn tại!'); });
    wheelSelector.addEventListener('change', () => { if (!isSpinning) loadWheel(wheelSelector.value); });
    deleteWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; showConfirmationModal(`Bạn có chắc muốn xóa vòng quay "${currentWheelName}"?`, () => { delete wheelsData[currentWheelName]; loadWheel(Object.keys(wheelsData)[0] || null); throttledSaveState(); }); });

    mainActionBtn.addEventListener('click', () => {
        if (!currentWheelName) return;

        // BUG FIX v6.3: Sync basic segment data from inputs before every save action.
        editingSegmentData.text = segmentTextInput.value.trim();
        editingSegmentData.weight = parseInt(segmentWeightInput.value) || 1;
        editingSegmentData.color = segmentColorInput.value;

        if (editingSegmentIndex !== null) {
            // This is "Update" mode
            wheelsData[currentWheelName].segments[editingSegmentIndex] = editingSegmentData;
        } else {
            // This is "Add" mode
            wheelsData[currentWheelName].segments.push(editingSegmentData);
        }
        exitEditMode();
        throttledSaveState();
    });

    cancelEditBtn.addEventListener('click', exitEditMode);
    copyActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null) { copiedActions = JSON.parse(JSON.stringify(editingSegmentData.actions || [])); pasteActionsBtn.disabled = false; showNotification("Đã sao chép hành động của ô!"); } });
    pasteActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null && copiedActions) { editingSegmentData.actions = JSON.parse(JSON.stringify(copiedActions)); populateActionPanelFromEditingState(); updateAllActionSummaries(); showNotification("Đã dán hành động!"); } });
    segmentListUI.addEventListener('click', (e) => { if (e.target.matches('.delete-segment-btn')) { e.stopPropagation(); const i = parseInt(e.target.dataset.index); wheelsData[currentWheelName].segments.splice(i, 1); exitEditMode(); throttledSaveState(); } else if (e.target.closest('.segment-list-item')) { if (!isSpinning) enterEditMode(parseInt(e.target.closest('.segment-list-item').dataset.index)); } });
    segmentListUI.addEventListener('dragstart', (e) => { if (isSpinning || !e.target.closest('.segment-list-item')) return; draggedIndex = parseInt(e.target.closest('.segment-list-item').dataset.index); e.target.closest('.list-item').classList.add('dragging'); });
    segmentListUI.addEventListener('dragend', (e) => { const dragging = document.querySelector('.dragging'); if (dragging) dragging.classList.remove('dragging'); });
    segmentListUI.addEventListener('dragover', (e) => e.preventDefault());
    segmentListUI.addEventListener('drop', (e) => { e.preventDefault(); if (isSpinning) return; const targetElement = e.target.closest('.segment-list-item'); if (!targetElement) return; const newIndex = parseInt(targetElement.dataset.index); const segments = wheelsData[currentWheelName].segments; if (draggedIndex === newIndex) return; const [removed] = segments.splice(draggedIndex, 1); segments.splice(newIndex, 0, removed); exitEditMode(); throttledSaveState(); });
    spinButton.addEventListener('click', startSpinSequence);
    resetSpinBtn.addEventListener('click', () => { if (!isSpinning) return; showConfirmationModal("Dừng chuỗi quay và hoàn tác mọi thay đổi về thực thể đang hoạt động?", () => { isSpinning = false; spinVelocity = 0; if (variableSnapshot) { entities[activeEntityId] = JSON.parse(JSON.stringify(variableSnapshot)); } endSpinSequenceCleanup(); updateEntityEditorUI(); updateSidebarDisplay(); drawWheel(); evaluateAllRules(); showNotification("Chuỗi quay đã được dừng và hoàn tác."); addLogMessage('--- Chuỗi quay đã được dừng và hoàn tác ---'); }); });
    spinCountVariableInput.addEventListener('input', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.spinCountVariable = e.target.value.trim().replace(/\s+/g, '_'); throttledSaveState(); });
    segmentRemovalModeSelect.addEventListener('change', (e) => { if (currentWheelName) { wheelsData[currentWheelName].settings.removalMode = e.target.value; throttledSaveState(); } });
    defaultLinkSelect.addEventListener('change', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.defaultLink = e.target.value; throttledSaveState(); });
    activeEntitySelector.addEventListener('change', e => { activeEntityId = e.target.value === 'none' ? null : e.target.value; updateSidebarDisplay(); evaluateAllRules(); if(activeEntityId) { addLogMessage(`Thực thể hoạt động được đổi thành <span class="log-highlight">${entities[activeEntityId]?.name}</span>.`); } else { addLogMessage(`Không có thực thể nào được chọn.`); } });
    segmentActionPanel.addEventListener('change', (e) => { if (!e.target.matches('.custom-checkbox')) return; const details = e.target.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = e.target.checked ? 'flex' : 'none'; });
    segmentActionPanel.addEventListener('input', () => {
        const actions = [];
        if (actionSetVariableEnabled.checked) {
            setVariableActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => {
                const actionData = { type: 'setVariable', target: row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_'), targetProperty: row.querySelector('.action-var-target-prop').value, operator: row.querySelector('.action-var-operator').value, value: row.querySelector('.action-var-value').value.trim() };
                if (actionData.target) actions.push(actionData);
            });
        }
        if (actionSetCollectionSlotsEnabled.checked) {
            const value = actionSetCollectionSlotsValue.value.trim();
            const target = actionSetCollectionSlotsTarget.value;
            if (value && target) actions.push({ type: 'setCollectionSlots', targetCollection: target, value: value });
        }
        if (actionAddToCollectionEnabled.checked) {
            const target = actionAddToCollectionTarget.value;
            if(target) actions.push({ type: 'addToCollection', targetCollection: target});
        }
        if (actionGoToWheelEnabled.checked) { actions.push({ type: 'goToWheel', target: actionTargetWheelSelect.value }); }
        if (actionPlaySoundEnabled.checked) { if(editingSegmentData.actions?.find(a=>a.type==='playSound')?.soundData) { actions.push(editingSegmentData.actions.find(a=>a.type==='playSound')); } }
        if (actionConditionalEnabled.checked) { actions.push({ type: 'conditionalReroll', operator: conditionOperatorSelect.value, value: parseInt(conditionValueInput.value), maxRerolls: parseInt(conditionRerollsInput.value) || 1 }); }
        editingSegmentData.actions = actions;
        updateAllActionSummaries();
    });
    addSetVariableActionBtn.addEventListener('click', () => { setVariableActionsContainer.appendChild(createSetVariableActionRow()); });
    setVariableActionsContainer.addEventListener('click', (e) => { if (e.target.classList.contains('btn-delete-action')) { e.target.closest('.set-variable-action-row').remove(); segmentActionPanel.dispatchEvent(new Event('input')); }});

    // Multimedia Handlers
    tickSoundUpload.addEventListener('change', e => { handleFileUpload(e.target.files[0], (dataUrl) => { projectSettings.tickSoundData = dataUrl; tickAudio.src = dataUrl; clearTickSoundBtn.style.display = 'inline-block'; throttledSaveState(); }); });
    clearTickSoundBtn.addEventListener('click', () => { projectSettings.tickSoundData = ''; tickAudio.src = ''; tickSoundUpload.value = ''; clearTickSoundBtn.style.display = 'none'; throttledSaveState(); });
    actionSoundUpload.addEventListener('change', e => { handleFileUpload(e.target.files[0], (dataUrl) => { let soundAction = editingSegmentData.actions?.find(a => a.type === 'playSound'); if (!soundAction) { soundAction = {type: 'playSound'}; editingSegmentData.actions.push(soundAction); } soundAction.soundData = dataUrl; clearActionSoundBtn.style.display = 'inline-block'; updateAllActionSummaries(); }); });
    clearActionSoundBtn.addEventListener('click', () => { editingSegmentData.actions = editingSegmentData.actions.filter(a => a.type !== 'playSound'); actionSoundUpload.value = ''; clearActionSoundBtn.style.display = 'none'; updateAllActionSummaries(); });
    entityAvatarUpload.addEventListener('change', e => { if(!editingEntityId) return; handleFileUpload(e.target.files[0], (dataUrl) => { entities[editingEntityId].avatar = dataUrl; entityAvatarPreview.src = dataUrl; clearEntityAvatarBtn.style.display = 'inline-block'; throttledSaveState(); }); });
    clearEntityAvatarBtn.addEventListener('click', () => { if(!editingEntityId) return; entities[editingEntityId].avatar = ''; entityAvatarPreview.src = ''; clearEntityAvatarBtn.style.display = 'none'; entityAvatarUpload.value = ''; throttledSaveState(); });

    // --- HELPER FUNCTIONS ---
    function showNotification(message, isError = false) { notificationToast.textContent = message; notificationToast.style.backgroundColor = isError ? '#dc3545' : '#252526'; notificationToast.style.borderColor = isError ? '#dc3545' : '#ffde59'; notificationToast.classList.add('show'); setTimeout(() => { notificationToast.classList.remove('show'); }, 3000); }
    function showResultPopup(result, callback) { const modal = document.getElementById('result-modal'); document.getElementById('result-text').innerText = `Kết quả: ${result.text}`; modal.style.display = 'flex'; document.getElementById('close-modal-button').onclick = () => { modal.style.display = 'none'; if (callback) callback(); }; }
    function showConfirmationModal(message, onConfirm, onCancel) {
        const modal = document.getElementById('confirmation-modal');
        modal.style.display = 'flex';
        modal.innerHTML = `<div class="modal-content"><h2>Xác nhận</h2><p style="font-size: 1.2rem; margin-bottom: 25px;">${message}</p><div class="btn-container" style="justify-content:center;"><button id="confirm-yes" class="btn btn-danger">Đồng ý</button><button id="confirm-no" class="btn btn-secondary">Hủy bỏ</button></div></div>`;

        const confirmBtn = document.getElementById('confirm-yes');
        const cancelBtn = document.getElementById('confirm-no');

        const confirmHandler = () => { onConfirm(); cleanup(); };
        const cancelHandler = () => { if(onCancel) onCancel(); cleanup(); };
        const cleanup = () => { modal.style.display = 'none'; confirmBtn.removeEventListener('click', confirmHandler); cancelBtn.removeEventListener('click', cancelHandler); };

        confirmBtn.addEventListener('click', confirmHandler);
        cancelBtn.addEventListener('click', cancelHandler);
    }

    // --- INITIALIZE APP ---
    function initialize() {
        const savedData = localStorage.getItem('wheelEngineSaveData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                 showConfirmationModal( "Phát hiện phiên làm việc chưa lưu. Bạn có muốn tải lại không?", () => { loadState(parsedData); }, () => { createDefaultData(); loadWheel(Object.keys(wheelsData)[0]); });
            } catch(e) {
                 createDefaultData(); loadWheel(Object.keys(wheelsData)[0]);
            }
        } else {
            createDefaultData(); loadWheel(Object.keys(wheelsData)[0]);
        }
    }

    function createDefaultData() {
        projectSettings = {};
        variableTemplate = {
            suc_manh: { base: 10, bonus: 0, icon: '' },
            nhanh_nhen: { base: 8, bonus: 0, icon: '' },
            mau_hien_tai: { base: 100, bonus: 0, icon: '' }
        };
        collectionTemplate = {
            'Trang_Bi': {id: 'Trang_Bi', name: 'Trang Bị'},
            'Ky_Nang': {id: 'Ky_Nang', name: 'Kỹ Năng'}
        };
        const playerId = `entity_${Date.now()}`;
        entities = { [playerId]: { id: playerId, name: 'Player', variables: JSON.parse(JSON.stringify(variableTemplate)), avatar: '', collections: {'Trang_Bi': [], 'Ky_Nang': []} } };
        activeEntityId = playerId;
        wheelsData['Vong_Quay_Chinh'] = { settings: { }, segments: [ { text: 'Tấn Công', weight: 1, color: '#f94144', actions: [{ type: 'setVariable', target: 'mau_hien_tai', targetProperty: 'base', operator: '-=', value: '10' }] }, { text: 'Nâng Cấp', weight: 1, color: '#43aa8b', actions: [{ type: 'setVariable', target: 'suc_manh', targetProperty: 'bonus', operator: '+=', value: '2' }] } ] };
        computedVariables = []; conditionalRules = [];
        updateAllUI();
        evaluateAllRules();
        addLogMessage("Chào mừng đến với Wheel Engine v6.3!");
    }

    initialize();
    exitEditMode();
});

