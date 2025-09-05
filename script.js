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
    const segmentDescriptionInput = document.getElementById('segment-description');
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
    const itemSuggestions = document.getElementById('item-suggestions');
    const tagSuggestions = document.getElementById('tag-suggestions');
    const spinCountDisplay = document.getElementById('spin-count-display');
    const resetSpinBtn = document.getElementById('reset-spin-btn');
    const segmentActionPanel = document.getElementById('segment-action-panel');
    const logicMapContainer = document.getElementById('logic-map-container');
    const copyWheelBtn = document.getElementById('copy-wheel-btn');
    const pasteWheelBtn = document.getElementById('paste-wheel-btn');
    
    // Quick Generate Panel Elements
    const generateSourceTypeSelect = document.getElementById('generate-source-type');
    const generateOptionsContainer = document.getElementById('generate-options-container');
    const itemDatabaseOptions = document.getElementById('item-database-options');
    const itemFilterTypeSelect = document.getElementById('item-filter-type');
    const categoryFilterOptions = document.getElementById('category-filter-options');
    const categoryFilterSelect = document.getElementById('category-filter-select');
    const tagFilterOptions = document.getElementById('tag-filter-options');
    const openTagModalBtn = document.getElementById('open-tag-modal-btn');
    const selectedTagsDisplay = document.getElementById('selected-tags-display');
    const executeGenerationBtn = document.getElementById('execute-generation-btn');


    // Collection System DOM Elements
    const actionSetCollectionSlotsEnabled = document.getElementById('action-setCollectionSlots-enabled');
    const actionSetCollectionSlotsTarget = document.getElementById('action-setCollectionSlots-target');
    const actionSetCollectionSlotsValue = document.getElementById('action-setCollectionSlots-value');
    const actionAddToCollectionEnabled = document.getElementById('action-addToCollection-enabled');
    const actionAddToCollectionTarget = document.getElementById('action-addToCollection-target');
    const actionExecuteMacroEnabled = document.getElementById('action-executeMacro-enabled');
    const actionExecuteMacroTarget = document.getElementById('action-executeMacro-target');
    const actionSetItemInSlotEnabled = document.getElementById('action-setItemInSlot-enabled');
    const actionSetItemInSlotTarget = document.getElementById('action-setItemInSlot-target');
    const actionSetItemInSlotSlot = document.getElementById('action-setItemInSlot-slot');
    const actionSetItemInSlotValue = document.getElementById('action-setItemInSlot-value');
    const actionRemoveRandomItemEnabled = document.getElementById('action-removeRandomItem-enabled');
    const actionRemoveRandomItemTarget = document.getElementById('action-removeRandomItem-target');
    const actionClearCollectionEnabled = document.getElementById('action-clearCollection-enabled');
    const actionClearCollectionTarget = document.getElementById('action-clearCollection-target');


    // Sidebar DOM Elements
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarNav = document.getElementById('sidebar-nav');
    const sidebarTabContent = document.getElementById('sidebar-tab-content');
    const activeEntitySelector = document.getElementById('active-entity-selector');
    const entityStatsDisplay = document.getElementById('entity-stats-display');
    const gameLog = document.getElementById('game-log');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');


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
    const ruleBlocksContainer = document.getElementById('rule-blocks-container');
    const addRuleIfElseBtn = document.getElementById('add-rule-if-else-btn');
    const addRuleElseBtn = document.getElementById('add-rule-else-btn');
    const macrosListUI = document.getElementById('macros-list');
    const addMacroBtn = document.getElementById('add-macro-btn');
    const macroEditorContent = document.getElementById('macro-editor-content');
    const macroEditorTitle = document.getElementById('macro-editor-title');
    const macroNameInput = document.getElementById('macro-name-input');
    const macroActionsContainer = document.getElementById('macro-actions-container');
    const addMacroActionBtn = document.getElementById('add-macro-action-btn');

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

    // Item Database ("Kho Báu") DOM Elements
    const itemDatabaseListContainer = document.getElementById('item-database-list-container');
    const itemEditor = document.getElementById('item-editor');
    const itemEditorPlaceholder = document.getElementById('item-editor-placeholder');
    const itemEditorContent = document.getElementById('item-editor-content');
    const itemEditorTitle = document.getElementById('item-editor-title');
    const itemCategorySelect = document.getElementById('item-category-select');
    const itemIconPreview = document.getElementById('item-icon-preview');
    const clearItemIconBtn = document.getElementById('clear-item-icon-btn');
    const itemIconUpload = document.getElementById('item-icon-upload');
    const itemNameInput = document.getElementById('item-name-input');
    const itemDescriptionInput = document.getElementById('item-description-input');
    const itemTagsInput = document.getElementById('item-tags-input');
    const itemTagsDisplay = document.getElementById('item-tags-display');
    const itemEffectsContainer = document.getElementById('item-effects-container');
    const addItemEffectBtn = document.getElementById('add-item-effect-btn');

    // Tag Manager DOM Elements
    const tagManagerListUI = document.getElementById('tag-manager-list');
    const newTagNameInput = document.getElementById('new-tag-name-input');
    const addNewTagBtn = document.getElementById('add-new-tag-btn');
    const tagEditor = document.getElementById('tag-editor');
    const tagEditorPlaceholder = document.getElementById('tag-editor-placeholder');
    const tagEditorContent = document.getElementById('tag-editor-content');
    const tagEditorTitle = document.getElementById('tag-editor-title');
    const tagNameInput = document.getElementById('tag-name-input');
    const tagIconPreview = document.getElementById('tag-icon-preview');
    const clearTagIconBtn = document.getElementById('clear-tag-icon-btn');
    const tagIconUpload = document.getElementById('tag-icon-upload');


    // Tag Modal Elements
    const tagSelectionModal = document.getElementById('tag-selection-modal');
    const tagListForGeneration = document.getElementById('tag-list-for-generation');
    const confirmTagGenerationBtn = document.getElementById('confirm-tag-generation-btn');
    const cancelTagGenerationBtn = document.getElementById('cancel-tag-generation-btn');


    // Global State
    let wheelsData = {}, variableTemplate = {}, collectionTemplate = {}, macros = {}, entities = {}, computedVariables = [], conditionalRules = [], projectSettings = {}, itemDatabase = {}, tagDatabase = {};
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
    let generationState = {
        sourceType: '',
        filterType: '',
        category: '',
        tags: []
    };
    const MAX_LOG_ENTRIES = 50;
    const UNARY_OPERATORS = ['ceil', 'floor', 'negate'];

    // Sound Management
    let tickAudio = new Audio();
    tickAudio.loop = true;

    // --- DATA I/O FUNCTIONS ---
    function getFullState() { return { wheelsData, variableTemplate, collectionTemplate, macros, entities, computedVariables, conditionalRules, projectSettings, itemDatabase, tagDatabase }; }
    function throttledSaveState() { clearTimeout(saveTimeout); saveTimeout = setTimeout(() => { try { localStorage.setItem('wheelEngineSaveData', JSON.stringify(getFullState())); showNotification("Đã tự động lưu!"); } catch (e) { console.error("Lỗi khi lưu dữ liệu:", e); showNotification("Lỗi: Không thể tự động lưu.", true); } }, 1000); }

    function loadState(stateObject, fromFile = false) {
        if (!stateObject || typeof stateObject !== 'object') {
            showNotification("Lỗi: Dữ liệu không hợp lệ.", true); return;
        }

        variableTemplate = stateObject.variableTemplate || {};
        collectionTemplate = stateObject.collectionTemplate || {};
        itemDatabase = stateObject.itemDatabase || {};
        tagDatabase = stateObject.tagDatabase || {};
        macros = stateObject.macros || {};
        entities = stateObject.entities || {};
        conditionalRules = stateObject.conditionalRules || [];

        // Data integrity check & migration for rules and items
        conditionalRules.forEach(rule => {
             if (rule.conditions) { // Old format detected
                rule.blocks = [{ type: 'if', conditions: rule.conditions, actions: rule.actions }];
                delete rule.conditions;
                delete rule.actions;
            }
        });
        
        if (Object.values(itemDatabase).length > 0) {
            const firstCollectionId = Object.keys(collectionTemplate)[0];
             Object.values(itemDatabase).forEach(item => {
                if (!item.collectionId && firstCollectionId) {
                    item.collectionId = firstCollectionId;
                }
                if (!item.tags) {
                    item.tags = [];
                }
            });
        }


        Object.values(entities).forEach(entity => {
            if (!entity.collections) entity.collections = {};
             Object.keys(collectionTemplate).forEach(collectionId => {
                if(!entity.collections[collectionId]) {
                    entity.collections[collectionId] = [];
                }
             });
        });

        activeEntityId = Object.keys(entities)[0] || null;

        wheelsData = stateObject.wheelsData || {};
        computedVariables = stateObject.computedVariables || [];
        projectSettings = stateObject.projectSettings || {};

        if(projectSettings.tickSoundData) {
            tickAudio.src = projectSettings.tickSoundData;
        }

        activeEditor = { type: null, id: null };
        editingEntityId = null;
        loadWheel(Object.keys(wheelsData)[0] || null);
        updateAllUI();
        recalculateActiveEntityStats();

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
    function renderLogicMap() {
        const nodes = [];
        const edges = [];
        const edgeGroups = {}; // Intermediate object to group edges

        // 1. Populate nodes
        Object.keys(wheelsData).forEach(wheelName => {
            nodes.push({ id: wheelName, label: wheelName, shape: 'box' });
        });

        // 2. Group segment-based edges and handle default links
        Object.keys(wheelsData).forEach(wheelName => {
            const wheel = wheelsData[wheelName];
            if (wheel.segments) {
                wheel.segments.forEach(segment => {
                    if (segment.actions) {
                        const goToWheelAction = segment.actions.find(a => a.type === 'goToWheel' && a.target);
                        if (goToWheelAction) {
                            const key = `${wheelName}->${goToWheelAction.target}`;
                            if (!edgeGroups[key]) {
                                edgeGroups[key] = {
                                    from: wheelName,
                                    to: goToWheelAction.target,
                                    segments: []
                                };
                            }
                            edgeGroups[key].segments.push(segment.text);
                        }
                    }
                });
            }

            // Handle default links separately (they don't group)
            if (wheel.settings && wheel.settings.defaultLink && wheel.settings.defaultLink !== 'None') {
                edges.push({
                    from: wheelName,
                    to: wheel.settings.defaultLink,
                    label: 'Liên kết mặc định',
                    arrows: 'to',
                    dashes: true
                });
            }
        });

        // 3. Create final edges from groups
        Object.values(edgeGroups).forEach(group => {
            const label = `Trúng ô: '${group.segments.join("', '")}'`;
            edges.push({
                from: group.from,
                to: group.to,
                label: label,
                arrows: 'to'
            });
        });


        const data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges),
        };
        const options = {
            layout: {
                hierarchical: {
                    direction: "UD",
                    sortMethod: "directed",
                },
            },
            edges: {
                color: "#999",
                font: {
                    color: '#efefef',
                    size: 12,
                    strokeWidth: 0
                },
            },
            nodes: {
                color: {
                    background: '#404040',
                    border: '#ffde59',
                    highlight: {
                        background: '#ffde59',
                        border: '#ffc107'
                    }
                },
                font: {
                    color: '#f0f0f0',
                    size: 14
                }
            },
            physics: false,
        };
        new vis.Network(logicMapContainer, data, options);
    }


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
    
    function recalculateActiveEntityStats() {
        const entity = getActiveEntity();
        if (!entity) return;

        // 1. Reset all bonuses to 0
        Object.values(entity.variables).forEach(v => v.bonus = 0);

        // 2. Apply item bonuses
        const itemMap = new Map(Object.values(itemDatabase).map(item => [item.name, item]));
        Object.values(entity.collections).flat().forEach(itemName => {
            if (!itemName) return;
            const item = itemMap.get(itemName);
            if (item && item.effects) {
                item.effects.forEach(effect => {
                    if (entity.variables[effect.target]) {
                        const value = parseFloat(effect.value) || 0;
                        if (effect.operator === '+=') {
                             entity.variables[effect.target].bonus += value;
                        } else if (effect.operator === '-=') {
                            entity.variables[effect.target].bonus -= value;
                        }
                    }
                });
            }
        });

        // 3. Apply rule-based and computed bonuses on top
        evaluateAllRules(); // This function will now add to the item bonuses

        // 4. Update displays
        updateSidebarDisplay();
        updateEntityEditorUI();
    }


    function evaluateAllRules(depth = 0) {
        if (!activeEntityId || depth > 15) return;
        let changedInLoop = false;
        const activeEntity = getActiveEntity();
        if(!activeEntity) return;

        computedVariables.forEach(compVar => {
            const targetVarName = compVar.formula.replace(/_base|_bonus/g, '').split(/[+\-*/\s()]/).find(v => variableTemplate[v]);
            if (!targetVarName) return;

            const targetVar = activeEntity.variables[targetVarName];
            if (!targetVar) return;

            const oldValue = targetVar.bonus;
            const baseValue = targetVar.base;
            const totalValue = evaluateFormula(compVar.formula);
            const newBonus = totalValue - baseValue;

            if (newBonus !== oldValue) {
                targetVar.bonus = newBonus;
                changedInLoop = true;
            }
        });

        conditionalRules.forEach(rule => {
            for (const block of rule.blocks) {
                let conditionsMet = false;
                if (block.type === 'if' || block.type === 'elseif') {
                    let allBlockConditionsMet = true;
                    for (const condition of block.conditions) {
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
                        if (!result) {
                            allBlockConditionsMet = false;
                            break;
                        }
                    }
                    conditionsMet = allBlockConditionsMet;
                } else if (block.type === 'else') {
                    conditionsMet = true;
                }

                if (conditionsMet) {
                    addLogMessage(`Luật <span class="log-highlight">${rule.name}</span> được kích hoạt (khối ${block.type}).`);
                    if (executeActions(block.actions)) {
                        changedInLoop = true;
                    }
                    break; 
                }
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
        let dataChanged = false;

        (actions || []).forEach(action => {
            switch (action.type) {
                case 'setVariable': {
                    const activeVars = activeEntity.variables;
                    const varName = action.target;
                    const targetProp = action.targetProperty || 'bonus';
                    if (!varName || !activeVars[varName]) return;

                    const oldValue = activeVars[varName][targetProp];
                    let rawValue = action.value;
                    if (resultContext && typeof rawValue === 'string' && rawValue.trim().toUpperCase() === '[RESULT]') {
                        rawValue = resultContext.text;
                    }
                    const value = (UNARY_OPERATORS.includes(action.operator) || action.operator === 'invert') ? 0 : evaluateFormula(rawValue);
                    let finalValue;

                    switch (action.operator) {
                        case '=': finalValue = value; break;
                        case '+=': finalValue = (oldValue || 0) + value; break;
                        case '-=': finalValue = (oldValue || 0) - value; break;
                        case '*=': finalValue = (oldValue || 0) * value; break;
                        case '/=': finalValue = value !== 0 ? (oldValue || 0) / value : (oldValue || 0); break;
                        case 'ceil': finalValue = Math.ceil(oldValue || 0); break;
                        case 'floor': finalValue = Math.floor(oldValue || 0); break;
                        case 'negate': finalValue = (oldValue || 0) * -1; break;
                        case 'invert': {
                            const min = evaluateFormula(action.min);
                            const max = evaluateFormula(action.max);
                            if (typeof min === 'number' && typeof max === 'number') {
                                finalValue = (min + max) - (oldValue || 0);
                            } else {
                                finalValue = oldValue;
                            }
                            break;
                        }
                        default: finalValue = oldValue; break;
                    }

                    if (typeof oldValue === 'string' && action.operator !== '=') return;

                    if (finalValue !== oldValue) {
                        addLogMessage(`-> <span class="log-highlight">${varName}.${targetProp}</span>: ${oldValue} -> ${finalValue}`);
                        activeVars[varName][targetProp] = finalValue;
                        dataChanged = true;
                    }
                    break;
                }
                case 'setCollectionSlots': {
                    const targetCollection = action.targetCollection;
                    if (!activeEntity.collections[targetCollection]) break;

                    let rawValue = action.value;
                    if (resultContext && typeof rawValue === 'string' && rawValue.trim().toUpperCase() === '[RESULT]') {
                        rawValue = resultContext.text;
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
                        dataChanged = true;
                    }
                    break;
                }
                case 'addToCollection': {
                    const targetCollection = action.targetCollection;
                    const itemToAdd = resultContext?.text; // Always takes from the wheel result now
                    if (!activeEntity.collections[targetCollection] || !itemToAdd) break;

                    const slots = activeEntity.collections[targetCollection];
                    const emptySlotIndex = slots.findIndex(slot => slot === null || slot === '');
                    if (emptySlotIndex !== -1) {
                        slots[emptySlotIndex] = itemToAdd;
                         addLogMessage(`-> <span class="log-highlight">${itemToAdd}</span> đã được thêm vào Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span>.`);
                         dataChanged = true;
                    } else {
                        addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> đã đầy.`);
                    }
                    break;
                }
                case 'setItemInSlot': {
                    const { targetCollection, slot, value } = action;
                    const slots = activeEntity.collections[targetCollection];
                    if (!slots) break;

                    let slotFormula = String(slot);
                    if (slotFormula.toUpperCase().includes('[CURRENT]')) {
                        const currentItemCount = slots.filter(item => item).length;
                        slotFormula = slotFormula.replace(/\[CURRENT\]/gi, currentItemCount);
                    }
                    
                    let rawValue = value;
                    if (resultContext && typeof rawValue === 'string' && rawValue.trim().toUpperCase() === '[RESULT]') {
                        rawValue = resultContext.text;
                    }

                    const slotIndex = evaluateFormula(slotFormula) - 1; // 1-based to 0-based
                    if (slotIndex >= 0 && slotIndex < slots.length) {
                        const finalValue = rawValue.trim().toUpperCase() === '[NONE]' ? null : rawValue;
                        addLogMessage(`-> Gán ô #${slotIndex + 1} của <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> thành <span class="log-highlight">${finalValue || 'Trống'}</span>.`);
                        slots[slotIndex] = finalValue;
                        dataChanged = true;
                    }
                    break;
                }
                case 'removeRandomItem': {
                    const { targetCollection } = action;
                    const slots = activeEntity.collections[targetCollection];
                    if (!slots) break;
                    
                    const filledSlotsIndexes = slots.map((item, index) => item ? index : -1).filter(index => index !== -1);

                    if (filledSlotsIndexes.length > 0) {
                        const randomIndex = filledSlotsIndexes[Math.floor(Math.random() * filledSlotsIndexes.length)];
                        const removedItem = slots[randomIndex];
                        slots[randomIndex] = null;
                        addLogMessage(`-> Vật phẩm <span class="log-highlight">${removedItem}</span> đã bị xóa ngẫu nhiên khỏi <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span>.`);
                        dataChanged = true;
                    } else {
                         addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> không có gì để xóa.`);
                    }
                    break;
                }
                case 'clearCollection': {
                    const { targetCollection } = action;
                    const slots = activeEntity.collections[targetCollection];
                    if (!slots) break;

                    slots.fill(null);
                    addLogMessage(`-> Đã xóa sạch kho chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span>.`);
                    dataChanged = true;
                    break;
                }
            }
        });
        
        if(dataChanged) {
            recalculateActiveEntityStats();
            throttledSaveState();
        }

        return dataChanged;
    }

    // --- UI UPDATE FUNCTIONS ---
    function updateAllUI() {
        updateVariableTemplateUI();
        updateCollectionTemplateUI();
        updateItemDatabaseListUI();
        updateTagManagerListUI();
        updateMacrosListUI();
        updateComputedVariablesListUI();
        updateRulesListUI();
        updateEntityListUI();
        updateActiveEntitySelector();
        updateEntityEditorUI();
        updateSidebarDisplay();
        updateCreatorUI();
        updateItemSuggestions();
        updateTagSuggestions();
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
                    <div><label>Bonus</label><input type="text" class="variable-bonus-input" value="${varData.bonus}" data-varname="${varName}" disabled></div>
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
    
    function updateItemDatabaseListUI() {
        itemDatabaseListContainer.innerHTML = '';

        Object.values(collectionTemplate).sort((a,b) => a.name.localeCompare(b.name)).forEach(collection => {
            const categoryWrapper = document.createElement('div');
            
            const header = document.createElement('div');
            header.className = 'item-category-header';
            header.innerHTML = `<h4>${collection.name}</h4><button class="btn btn-secondary btn-sm add-item-to-category-btn" data-collection-id="${collection.id}">+ Thêm</button>`;
            categoryWrapper.appendChild(header);

            const list = document.createElement('ul');
            const itemsInCategory = Object.values(itemDatabase).filter(item => item.collectionId === collection.id);

            if (itemsInCategory.length === 0) {
                const emptyMsg = document.createElement('p');
                emptyMsg.className = 'form-hint';
                emptyMsg.textContent = 'Chưa có vật phẩm nào trong danh mục này.';
                list.appendChild(emptyMsg);
            } else {
                itemsInCategory.sort((a,b) => a.name.localeCompare(b.name)).forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'list-item';
                    li.dataset.id = item.id;
                    if (activeEditor.type === 'item' && item.id === activeEditor.id) li.classList.add('editing');
                    li.innerHTML = `<span class="item-info">${item.name || 'Vật phẩm không tên'}</span><button class="delete-btn delete-item-btn" data-id="${item.id}">X</button>`;
                    list.appendChild(li);
                });
            }
            categoryWrapper.appendChild(list);
            itemDatabaseListContainer.appendChild(categoryWrapper);
        });
    }

    function updateTagManagerListUI() {
        tagManagerListUI.innerHTML = '';
        Object.values(tagDatabase).sort((a,b) => a.name.localeCompare(b.name)).forEach(tag => {
            const li = document.createElement('li');
            li.className = 'list-item';
            li.dataset.id = tag.id;
            if(activeEditor.type === 'tag' && tag.id === activeEditor.id) li.classList.add('editing');
            li.innerHTML = `
                <img src="${tag.icon || 'https://placehold.co/24x24/404040/888?text=?'}" class="tag-manager-item-icon">
                <span class="item-info">${tag.name || 'Tag không tên'}</span>
                <button class="delete-btn delete-tag-btn" data-id="${tag.id}">X</button>`;
            tagManagerListUI.appendChild(li);
        });
    }

    function updateMacrosListUI() {
        macrosListUI.innerHTML = '';
        Object.values(macros).sort((a,b) => a.name.localeCompare(b.name)).forEach(macro => {
            const li = document.createElement('li');
            li.className = 'list-item';
            li.dataset.id = macro.id;
            if(activeEditor.type === 'macro' && macro.id === activeEditor.id) li.classList.add('editing');
            li.innerHTML = `<span class="item-info">${macro.name || 'Macro không tên'}</span><button class="delete-btn delete-macro-btn" data-id="${macro.id}">X</button>`;
            macrosListUI.appendChild(li);
        });
        updateMacroSelectorDropdown();
    }
    
    function updateCollectionSelectorDropdowns() {
        const optionsHTML = Object.values(collectionTemplate)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(coll => `<option value="${coll.id}">${coll.name}</option>`)
            .join('');
        actionSetCollectionSlotsTarget.innerHTML = optionsHTML;
        actionAddToCollectionTarget.innerHTML = optionsHTML;
        actionSetItemInSlotTarget.innerHTML = optionsHTML;
        actionRemoveRandomItemTarget.innerHTML = optionsHTML;
        actionClearCollectionTarget.innerHTML = optionsHTML;
        itemCategorySelect.innerHTML = optionsHTML;
        categoryFilterSelect.innerHTML = `<option value="">-- Chọn Danh Mục --</option>` + optionsHTML;
    }

    function updateMacroSelectorDropdown() {
        actionExecuteMacroTarget.innerHTML = '';
        Object.values(macros).sort((a,b) => a.name.localeCompare(b.name)).forEach(macro => {
            const option = document.createElement('option');
            option.value = macro.id;
            option.textContent = macro.name;
            actionExecuteMacroTarget.appendChild(option);
        });
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
                    <div><label>Bonus</label><input type="text" class="variable-bonus-input" value="${varData.bonus}" data-varname="${varName}" data-entityid="${entity.id}" disabled></div>
                </div>`;
            entityVariablesListDiv.appendChild(item);
        });

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
                        <input type="text" value="${item || ''}" data-entityid="${entity.id}" data-collectionid="${collectionId}" data-slotindex="${index}" list="item-suggestions">
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

        sidebarNav.querySelectorAll('.dynamic-tab').forEach(el => el.remove());
        sidebarTabContent.querySelectorAll('.dynamic-tab-content').forEach(el => el.remove());

        const activeEntity = getActiveEntity();
        if (!activeEntity) {
            sidebarNav.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active'));
            sidebarTabContent.querySelectorAll('.sidebar-tab').forEach(tab => tab.classList.remove('active'));

             const statsBtn = sidebarNav.querySelector('.sidebar-tab-btn[data-tab="stats-tab"]');
            if (statsBtn) statsBtn.classList.add('active');
            const statsContent = document.getElementById('stats-tab');
            if (statsContent) statsContent.classList.add('active');
            return;
        }
        
        const itemMap = new Map(Object.values(itemDatabase).map(item => [item.name, item]));

        Object.keys(activeEntity.collections || {}).sort((a,b) => collectionTemplate[a]?.name.localeCompare(collectionTemplate[b]?.name)).forEach(collectionId => {
            const collectionTpl = collectionTemplate[collectionId];
            if (!collectionTpl) return;

            const tabBtn = document.createElement('button');
            tabBtn.className = 'sidebar-tab-btn dynamic-tab';
            tabBtn.dataset.tab = `collection-${collectionId}-tab`;
            tabBtn.textContent = collectionTpl.name;
            sidebarNav.appendChild(tabBtn);

            const tabContent = document.createElement('div');
            tabContent.id = `collection-${collectionId}-tab`;
            tabContent.className = 'sidebar-tab dynamic-tab-content collection-tab-content';

            const collectionDisplay = document.createElement('div');
            collectionDisplay.className = 'entity-collection-display';

            const slots = activeEntity.collections[collectionId];
            if (!slots || slots.length === 0) {
                 collectionDisplay.innerHTML = '<p class="form-hint">Không có ô nào.</p>';
            } else {
                slots.forEach(itemName => {
                    const slotDiv = document.createElement('div');
                    slotDiv.className = 'collection-slot';
                    const item = itemName ? itemMap.get(itemName) : null;
                    
                    if (item) {
                        slotDiv.dataset.itemName = itemName;
                        slotDiv.innerHTML = `
                            <img class="slot-item-icon" src="${item.icon || 'https://placehold.co/32x32/252526/888?text=?'}">
                            <span class="slot-item-name">${itemName}</span>
                        `;
                    } else {
                         slotDiv.classList.add('empty');
                         slotDiv.innerHTML = `<span class="slot-item-name empty">${itemName || 'Trống'}</span>`;
                    }
                    collectionDisplay.appendChild(slotDiv);
                });
            }
            tabContent.appendChild(collectionDisplay);
            sidebarTabContent.appendChild(tabContent);
        });

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
    
    function loadEditor(type, id) {
        activeEditor = { type, id };
        
        // Hide all editors first
        logicEditorPlaceholder.style.display = 'block';
        computedVariableEditorContent.style.display = 'none';
        ruleEditorContent.style.display = 'none';
        macroEditorContent.style.display = 'none';
        itemEditor.style.display = 'grid'; // Make sure the parent is visible
        itemEditorPlaceholder.style.display = 'block';
        itemEditorContent.style.display = 'none';
        tagEditor.style.display = 'grid';
        tagEditorPlaceholder.style.display = 'block';
        tagEditorContent.style.display = 'none';


        if (type === 'computed') {
            const compVar = computedVariables.find(cv => cv.id === id);
            if (!compVar) return;
            computedVariableFormulaInput.value = compVar.formula;
            logicEditorPlaceholder.style.display = 'none';
            computedVariableEditorContent.style.display = 'block';
        } else if (type === 'conditional') {
            const rule = conditionalRules.find(r => r.id === activeEditor.id);
            if (!rule) return;
            ruleNameInput.value = rule.name;
            ruleBlocksContainer.innerHTML = '';
            rule.blocks.forEach((block, index) => ruleBlocksContainer.appendChild(createRuleBlockElement(block, index)));
            updateRuleEditorButtons();
            logicEditorPlaceholder.style.display = 'none';
            ruleEditorContent.style.display = 'block';
        } else if (type === 'macro') {
            const macro = macros[id];
            if (!macro) return;
            macroNameInput.value = macro.name;
            macroActionsContainer.innerHTML = '';
            macro.actions.forEach(act => macroActionsContainer.appendChild(createMacroActionRow(act)));
            logicEditorPlaceholder.style.display = 'none';
            macroEditorContent.style.display = 'block';
        } else if (type === 'item') {
            const item = itemDatabase[id];
            if(!item) return;
            itemEditorTitle.textContent = `Chỉnh sửa: ${item.name}`;
            itemNameInput.value = item.name;
            itemDescriptionInput.value = item.description;
            itemCategorySelect.value = item.collectionId;
            itemIconPreview.src = item.icon || '';
            clearItemIconBtn.style.display = item.icon ? 'inline-block' : 'none';

            itemTagsInput.value = '';
            updateTagPills();

            itemEffectsContainer.innerHTML = '';
            (item.effects || []).forEach(effect => itemEffectsContainer.appendChild(createItemEffectRow(effect)));
            
            itemEditorPlaceholder.style.display = 'none';
            itemEditorContent.style.display = 'block';
        } else if (type === 'tag') {
            const tag = tagDatabase[id];
            if (!tag) return;
            tagEditorTitle.textContent = `Chỉnh sửa: ${tag.name}`;
            tagNameInput.value = tag.name;
            tagIconPreview.src = tag.icon || '';
            clearTagIconBtn.style.display = tag.icon ? 'inline-block' : 'none';
            tagEditorPlaceholder.style.display = 'none';
            tagEditorContent.style.display = 'block';
        }
        
        updateComputedVariablesListUI();
        updateRulesListUI();
        updateMacrosListUI();
        updateItemDatabaseListUI();
        updateTagManagerListUI();
    }

    function saveActiveEditor() {
        if (!activeEditor.id) return;
        switch(activeEditor.type) {
            case 'computed':
                const compVar = computedVariables.find(cv => cv.id === activeEditor.id);
                if (compVar) {
                    compVar.formula = computedVariableFormulaInput.value;
                    updateComputedVariablesListUI();
                }
                break;
            case 'conditional':
                const rule = conditionalRules.find(r => r.id === activeEditor.id);
                if (rule) {
                    rule.name = ruleNameInput.value.trim();
                    rule.blocks = [];
                    ruleBlocksContainer.querySelectorAll('.rule-block-wrapper').forEach(wrapper => {
                        const blockType = wrapper.dataset.blockType;
                        const blockData = { type: blockType, actions: [] };

                        if (blockType !== 'else') {
                            blockData.conditions = [];
                            wrapper.querySelectorAll('.rule-condition-row').forEach(row => {
                                blockData.conditions.push({ left: row.querySelector('.rule-condition-left').value, operator: row.querySelector('.rule-condition-operator').value, right: row.querySelector('.rule-condition-right').value });
                            });
                        }
                        
                        wrapper.querySelectorAll('.set-variable-action-row').forEach(row => {
                            const actionData = { type: 'setVariable' };
                            actionData.target = row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_');
                            actionData.targetProperty = row.querySelector('.action-var-target-prop').value;
                            actionData.operator = row.querySelector('.action-var-operator').value;
                            if (actionData.operator === 'invert') {
                                actionData.min = row.querySelector('.action-var-min').value.trim();
                                actionData.max = row.querySelector('.action-var-max').value.trim();
                            } else if (!UNARY_OPERATORS.includes(actionData.operator)) {
                                actionData.value = row.querySelector('.action-var-value').value.trim();
                            }
                            if (actionData.target) blockData.actions.push(actionData);
                        });
                        rule.blocks.push(blockData);
                    });
                    updateRulesListUI();
                    updateRuleEditorButtons();
                }
                break;
            case 'macro':
                const macro = macros[activeEditor.id];
                 if (macro) {
                    macro.name = macroNameInput.value.trim();
                    macro.actions = [];
                    macroActionsContainer.querySelectorAll('.macro-action-row').forEach(row => {
                        const actionType = row.querySelector('.action-type-selector').value;
                        let actionData = { type: actionType };
                        const fields = row.querySelector(`.${actionType}-fields`);

                        if (actionType === 'setVariable') {
                            actionData.target = fields.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_');
                            actionData.targetProperty = fields.querySelector('.action-var-target-prop').value;
                            actionData.operator = fields.querySelector('.action-var-operator').value;
                            
                            if (actionData.operator === 'invert') {
                                actionData.min = fields.querySelector('.action-var-min').value.trim();
                                actionData.max = fields.querySelector('.action-var-max').value.trim();
                            } else if (!UNARY_OPERATORS.includes(actionData.operator)) {
                                actionData.value = fields.querySelector('.action-var-value').value.trim();
                            }
                            if(actionData.target) macro.actions.push(actionData);
                        } else if (actionType === 'addToCollection') {
                            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
                            actionData.value = fields.querySelector('.action-collection-value').value.trim();
                            if(actionData.targetCollection && actionData.value) macro.actions.push(actionData);
                        } else if (actionType === 'setItemInSlot') {
                            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
                            actionData.slot = fields.querySelector('.action-slot-value').value.trim();
                            actionData.value = fields.querySelector('.action-item-value').value.trim();
                            if(actionData.targetCollection && actionData.slot && actionData.value) macro.actions.push(actionData);
                        } else if (actionType === 'removeRandomItem') {
                            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
                            if(actionData.targetCollection) macro.actions.push(actionData);
                        } else if (actionType === 'clearCollection') {
                            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
                            if(actionData.targetCollection) macro.actions.push(actionData);
                        }
                    });
                    updateMacrosListUI();
                 }
                break;
            case 'item':
                const item = itemDatabase[activeEditor.id];
                if (item) {
                    item.name = itemNameInput.value.trim();
                    item.description = itemDescriptionInput.value.trim();
                    item.collectionId = itemCategorySelect.value;
                    item.effects = [];
                    itemEffectsContainer.querySelectorAll('.item-effect-row').forEach(row => {
                        const target = row.querySelector('.item-effect-target').value;
                        const operator = row.querySelector('.item-effect-operator').value;
                        const value = parseFloat(row.querySelector('.item-effect-value').value);
                        if(target && !isNaN(value)) {
                            item.effects.push({ target, operator, value });
                        }
                    });
                    updateItemDatabaseListUI();
                    updateItemSuggestions();
                }
                break;
            case 'tag':
                const tag = tagDatabase[activeEditor.id];
                if(tag) {
                    tag.name = tagNameInput.value.trim();
                    updateTagManagerListUI();
                    updateTagSuggestions();
                }
                break;
        }
        recalculateActiveEntityStats();
        throttledSaveState();
    }
    
    function createRuleBlockElement(block, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'rule-block-wrapper';
        wrapper.dataset.blockType = block.type;
        wrapper.dataset.blockIndex = index;
    
        const blockDiv = document.createElement('div');
        blockDiv.className = 'rule-block';
    
        let titleText = '';
        switch (block.type) {
            case 'if': titleText = `NẾU (IF)`; break;
            case 'elseif': titleText = `NGƯỢC LẠI NẾU (ELSE IF)`; break;
            case 'else': titleText = `NGƯỢC LẠI (ELSE)`; break;
        }
    
        let headerHTML = `
            <div class="rule-block-header">
                <h3 class="rule-block-title">${titleText}</h3>
                ${index > 0 ? `<button class="btn btn-danger btn-sm delete-rule-block-btn" data-index="${index}">Xóa Khối</button>` : ''}
            </div>`;
    
        let conditionsHTML = '';
        if (block.type !== 'else') {
            conditionsHTML = `
                <div class="rule-conditions-container">
                    ${(block.conditions || []).map(createRuleConditionRow).join('')}
                </div>
                <button class="btn btn-secondary btn-sm add-rule-condition-btn">+ Thêm điều kiện</button>
            `;
        }

        blockDiv.innerHTML = headerHTML + (conditionsHTML ? conditionsHTML + '<hr>' : '');

        const actionsTitle = document.createElement('h4');
        actionsTitle.style.cssText = "margin-top: 1rem; margin-bottom: 0.5rem;";
        actionsTitle.textContent = "THÌ (THEN)";
        blockDiv.appendChild(actionsTitle);

        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'rule-actions-container';
        (block.actions || []).forEach(action => {
            actionsContainer.appendChild(createSetVariableActionRow(action));
        });
        blockDiv.appendChild(actionsContainer);
        
        const addActionButton = document.createElement('button');
        addActionButton.className = "btn btn-secondary btn-sm add-rule-action-btn";
        addActionButton.textContent = "+ Thêm hành động";
        blockDiv.appendChild(addActionButton);
    
        wrapper.appendChild(blockDiv);
        return wrapper;
    }
    
    function updateRuleEditorButtons() {
        const rule = conditionalRules.find(r => r.id === activeEditor.id);
        if (!rule) return;
        const hasElseBlock = rule.blocks.some(b => b.type === 'else');
        addRuleElseBtn.style.display = hasElseBlock ? 'none' : 'inline-block';
        addRuleIfElseBtn.style.display = hasElseBlock ? 'none' : 'inline-block';
    }


    function createRuleConditionRow(condition = {}) {
        const row = document.createElement('div');
        row.className = 'rule-condition-row';
        row.innerHTML = `
            <div><input type="text" class="rule-condition-left" placeholder="Công thức..." value="${condition.left || ''}"></div>
            <select class="rule-condition-operator">
                <option value="==" ${condition.operator === '==' ? 'selected' : ''}>==</option>
                <option value="!=" ${condition.operator === '!=' ? 'selected' : ''}>!=</option>
                <option value=">" ${condition.operator === '>' ? 'selected' : ''}>&gt;</option>
                <option value="<" ${condition.operator === '<' ? 'selected' : ''}>&lt;</option>
                <option value=">=" ${condition.operator === '>=' ? 'selected' : ''}>&gt;=</option>
                <option value="<=" ${condition.operator === '<=' ? 'selected' : ''}>&lt;=</option>
            </select>
            <div><input type="text" class="rule-condition-right" placeholder="Giá trị..." value="${condition.right || '0'}"></div>
            <button class="btn-danger btn-delete-action">-</button>`;
        return row.outerHTML;
    }

    function createSetVariableActionRow(action = {}) {
        const actionRow = document.createElement('div');
        actionRow.className = 'set-variable-action-row';
        const op = action.operator || '=';
        actionRow.innerHTML = `
            <button class="btn-danger btn-delete-action">-</button>
            <div class="form-row">
                <div class="form-group"><label>Tên biến</label><input type="text" class="action-var-name" list="variable-suggestions-action" placeholder="Chọn hoặc gõ..." value="${action.target || ''}"></div>
                <div class="form-group"><label>Mục tiêu</label><select class="action-var-target-prop"><option value="bonus" ${action.targetProperty === 'bonus' ? 'selected' : ''}>Bonus</option><option value="base" ${action.targetProperty === 'base' ? 'selected' : ''}>Base</option></select></div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Phép toán</label>
                    <select class="action-var-operator">
                        <option value="=" ${op === '=' ? 'selected' : ''}>Gán (=)</option>
                        <option value="+=" ${op === '+=' ? 'selected' : ''}>Cộng (+=)</option><option value="-=" ${op === '-=' ? 'selected' : ''}>Trừ (-=)</option>
                        <option value="*=" ${op === '*=' ? 'selected' : ''}>Nhân (*=)</option><option value="/=" ${op === '/=' ? 'selected' : ''}>Chia (/=)</option>
                        <option value="ceil" ${op === 'ceil' ? 'selected' : ''}>Làm tròn lên (Ceil)</option><option value="floor" ${op === 'floor' ? 'selected' : ''}>Làm tròn xuống (Floor)</option>
                        <option value="negate" ${op === 'negate' ? 'selected' : ''}>Đảo ngược dấu (+/-)</option><option value="invert" ${op === 'invert' ? 'selected' : ''}>Đảo ngược (Min/Max)</option>
                    </select>
                </div>
                <div class="form-group value-group"><label>Giá trị / Công thức</label><input type="text" class="action-var-value" placeholder="VD: 10" value="${action.value || ''}"></div>
            </div>
            <div class="form-row invert-fields"><div class="form-group"><label>Min</label><input type="text" class="action-var-min" value="${action.min || '1'}"></div><div class="form-group"><label>Max</label><input type="text" class="action-var-max" value="${action.max || '10'}"></div></div>`;
        const operatorSelect = actionRow.querySelector('.action-var-operator');
        const valueGroup = actionRow.querySelector('.value-group');
        const invertFields = actionRow.querySelector('.invert-fields');
        function toggleValueInputs() {
            const currentOp = operatorSelect.value;
            valueGroup.style.display = UNARY_OPERATORS.includes(currentOp) || currentOp === 'invert' ? 'none' : 'grid';
            invertFields.style.display = currentOp === 'invert' ? 'grid' : 'none';
        }
        operatorSelect.addEventListener('change', toggleValueInputs);
        toggleValueInputs();
        return actionRow;
    }
    
    function createItemEffectRow(effect = {}) {
        const row = document.createElement('div');
        row.className = 'item-effect-row';
        const varOptions = Object.keys(variableTemplate).sort().map(varName => `<option value="${varName}" ${effect.target === varName ? 'selected' : ''}>${varName}</option>`).join('');

        row.innerHTML = `
            <select class="item-effect-target">${varOptions}</select>
            <select class="item-effect-operator">
                <option value="+=" ${effect.operator === '+=' ? 'selected' : ''}>+=</option>
                <option value="-=" ${effect.operator === '-=' ? 'selected' : ''}>-=</option>
            </select>
            <input type="number" class="item-effect-value" value="${effect.value || 0}">
            <button class="btn-danger btn-delete-action">-</button>
        `;
        return row;
    }


    function createMacroActionRow(action = {}) {
        const row = document.createElement('div');
        row.className = 'macro-action-row';
        const collectionOptions = Object.values(collectionTemplate).map(c => `<option value="${c.id}" ${action.targetCollection === c.id ? 'selected' : ''}>${c.name}</option>`).join('');

        row.innerHTML = `
            <button class="btn-danger btn-delete-action">-</button>
            <div class="form-group">
                <label>Loại Hành Động</label>
                <select class="action-type-selector">
                    <option value="setVariable">Gán Giá Trị cho Biến</option>
                    <option value="addToCollection">Thêm vào Ô Trống</option>
                    <option value="setItemInSlot">Gán/Xóa Vào Ô</option>
                    <option value="removeRandomItem">Xóa Ngẫu Nhiên</option>
                    <option value="clearCollection">Xóa Sạch Kho</option>
                </select>
            </div>
            <div class="action-fields-container">
                <div class="setVariable-fields">
                    <div class="form-row">
                        <div class="form-group"><label>Tên biến</label><input type="text" class="action-var-name" list="variable-suggestions-action" value="${action.target || ''}"></div>
                        <div class="form-group"><label>Mục tiêu</label><select class="action-var-target-prop"><option value="bonus">Bonus</option><option value="base">Base</option></select></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Phép toán</label>
                            <select class="action-var-operator">
                                <option value="=">Gán (=)</option> <option value="+=">Cộng (+=)</option> <option value="-=">Trừ (-=)</option>
                                <option value="*=">Nhân (*=)</option> <option value="/=">Chia (/=)</option>
                                <option value="ceil">Làm tròn lên (Ceil)</option> <option value="floor">Làm tròn xuống (Floor)</option>
                                <option value="negate">Đảo ngược dấu (+/-)</option> <option value="invert">Đảo ngược (Min/Max)</option>
                            </select>
                        </div>
                        <div class="form-group value-group"><label>Giá trị</label><input type="text" class="action-var-value" value="${action.value || ''}"></div>
                    </div>
                     <div class="form-row invert-fields"><div class="form-group"><label>Min</label><input type="text" class="action-var-min" value="${action.min || '1'}"></div><div class="form-group"><label>Max</label><input type="text" class="action-var-max" value="${action.max || '10'}"></div></div>
                </div>
                <div class="addToCollection-fields">
                     <div class="form-row">
                        <div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div>
                        <div class="form-group"><label>Tên vật phẩm</label><input type="text" class="action-collection-value" value="${action.value || ''}" list="item-suggestions"></div>
                    </div>
                </div>
                <div class="setItemInSlot-fields">
                    <div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div>
                    <div class="form-row">
                        <div class="form-group"><label>Vị trí ô</label><input type="text" class="action-slot-value" placeholder="VD: 1, [CURRENT]+1" value="${action.slot || ''}"></div>
                        <div class="form-group"><label>Tên vật phẩm</label><input type="text" class="action-item-value" placeholder="VD: Kiếm Sắt, [NONE]" list="item-suggestions" value="${action.value || ''}"></div>
                    </div>
                </div>
                <div class="removeRandomItem-fields">
                     <div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div>
                </div>
                <div class="clearCollection-fields">
                    <div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div>
                </div>
            </div>`;

        const typeSelector = row.querySelector('.action-type-selector');
        const fieldsContainer = row.querySelector('.action-fields-container');
        
        typeSelector.value = action.type || 'setVariable';

        function toggleFields() {
            fieldsContainer.querySelectorAll(':scope > div').forEach(el => el.classList.remove('active'));
            const activeFields = fieldsContainer.querySelector(`.${typeSelector.value}-fields`);
            if(activeFields) activeFields.classList.add('active');
        }
        
        typeSelector.addEventListener('change', toggleFields);
        
        const operatorSelect = row.querySelector('.setVariable-fields .action-var-operator');
        const valueGroup = row.querySelector('.setVariable-fields .value-group');
        const invertFields = row.querySelector('.setVariable-fields .invert-fields');

        function toggleValueInputs() {
            const op = operatorSelect.value;
            valueGroup.style.display = UNARY_OPERATORS.includes(op) || op === 'invert' ? 'none' : 'grid';
            invertFields.style.display = op === 'invert' ? 'grid' : 'none';
        }
        
        if (action.type === 'setVariable') {
            row.querySelector('.action-var-target-prop').value = action.targetProperty || 'bonus';
            operatorSelect.value = action.operator || '=';
        }
        
        operatorSelect.addEventListener('change', toggleValueInputs);
        
        toggleFields();
        toggleValueInputs();
        return row;
    }


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

    function generateWheelSegments(sourceType, filters = {}) {
        const currentWheel = wheelsData[currentWheelName];
        if (!currentWheel) return;

        let sourceData;
        if (sourceType === 'itemDatabase') {
            sourceData = Object.values(itemDatabase);
             if (filters.category) {
                sourceData = sourceData.filter(item => item.collectionId === filters.category);
            }
            if (filters.tags && filters.tags.length > 0) {
                sourceData = sourceData.filter(item => 
                    filters.tags.every(tag => item.tags && item.tags.includes(tag))
                );
            }
        } else if (sourceType === 'entities') {
            sourceData = Object.values(entities);
        } else {
            return;
        }
        
        if (sourceData.length === 0) {
            showNotification("Không tìm thấy dữ liệu nào khớp với lựa chọn của bạn.", true);
            return;
        }

        currentWheel.segments = []; // Clear existing segments

        sourceData.forEach(item => {
            const newSegment = {
                text: item.name,
                description: item.description || '',
                weight: 1,
                color: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
                actions: []
            };
            currentWheel.segments.push(newSegment);
        });

        showNotification(`Đã tạo thành công ${currentWheel.segments.length} ô mới!`);
        exitEditMode();
        throttledSaveState();
    }


    function updateVariableSuggestions() { const suggestions = Object.keys(variableTemplate); variableSuggestionsSettings.innerHTML = ''; variableSuggestionsAction.innerHTML = ''; suggestions.forEach(varName => { const optionHTML = `<option value="${varName}"></option>`; variableSuggestionsSettings.innerHTML += optionHTML; variableSuggestionsAction.innerHTML += optionHTML; }); }
    function updateItemSuggestions() { itemSuggestions.innerHTML = ''; Object.values(itemDatabase).forEach(item => { const option = document.createElement('option'); option.value = item.name; itemSuggestions.appendChild(option); });}
    function updateTagSuggestions() { tagSuggestions.innerHTML = ''; Object.values(tagDatabase).forEach(tag => { const option = document.createElement('option'); option.value = tag.name; tagSuggestions.appendChild(option); });}
    function updateCreatorUI() { const currentWheel = wheelsData[currentWheelName]; if(!currentWheel) { wheelTitle.textContent = "Chưa có Vòng Quay"; wheelSettingsPanel.style.display = 'none'; segmentListUI.innerHTML = ''; totalWeightInfo.textContent = ''; pasteWheelBtn.disabled = copiedWheelData === null; drawWheel(); return; } wheelTitle.textContent = currentWheelName || "Chưa có Vòng Quay"; segmentEditorTitle.textContent = editingSegmentIndex !== null ? `Đang Sửa Ô: "${currentWheel.segments[editingSegmentIndex].text}"` : "Thêm / Sửa Ô"; wheelSettingsPanel.style.display = currentWheelName ? 'block' : 'none'; pasteWheelBtn.disabled = copiedWheelData === null; copyWheelBtn.disabled = !currentWheelName; const wheelNames = Object.keys(wheelsData); wheelSelector.innerHTML = ''; wheelNames.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; wheelSelector.appendChild(option); }); if(currentWheelName) { wheelSelector.value = currentWheelName; } deleteWheelBtn.disabled = !currentWheelName; const segments = currentWheel?.segments || []; segmentListUI.innerHTML = ''; const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0); totalWeightInfo.textContent = `Tổng trọng số: ${totalWeight}`; segments.forEach((segment, index) => { const percentage = totalWeight > 0 ? ((segment.weight / totalWeight) * 100).toFixed(1) : 0; const li = document.createElement('li'); li.className = 'list-item segment-list-item'; li.dataset.index = index; li.draggable = true; if (index === editingSegmentIndex) li.classList.add('editing'); li.innerHTML = `<div class="color-box" style="background-color: ${segment.color};"></div><span class="item-info">${segment.text}</span><span class="segment-weight">${percentage}%</span><button class="delete-btn delete-segment-btn" data-index="${index}">X</button>`; segmentListUI.appendChild(li); }); const settings = currentWheel?.settings; if (settings) { document.getElementById('wheel-settings-title').textContent = `Cài Đặt: "${currentWheelName}"`; spinCountVariableInput.value = settings.spinCountVariable || '';
    segmentRemovalModeSelect.value = settings.removalMode || 'none';
    defaultLinkSelect.innerHTML = '<option value="None">Không liên kết</option>'; wheelNames.forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; if (name === settings.defaultLink) option.selected = true; defaultLinkSelect.appendChild(option); } }); } updateVariableSuggestions(); drawWheel(); }
    function loadWheel(name) { if (!name || !wheelsData[name]) { currentWheelName = Object.keys(wheelsData)[0] || ''; } else { currentWheelName = name; } const currentWheel = wheelsData[currentWheelName]; if (currentWheel) { if (!currentWheel.settings) { currentWheel.settings = {}; } if (!currentWheel.settings.removalMode) { currentWheel.settings.removalMode = 'none'; } if (typeof currentWheel.settings.spinCountVariable === 'undefined') { currentWheel.settings.spinCountVariable = ''; } if (typeof currentWheel.settings.defaultLink === 'undefined') { currentWheel.settings.defaultLink = 'None'; } } exitEditMode(); }

    function enterEditMode(index) { editingSegmentIndex = index; const segment = wheelsData[currentWheelName].segments[index]; editingSegmentData = JSON.parse(JSON.stringify(segment)); populateActionPanelFromEditingState(); updateAllActionSummaries(); mainActionBtn.textContent = "Cập Nhật"; cancelEditBtn.style.display = 'block'; pasteActionsBtn.disabled = copiedActions === null; updateCreatorUI(); }
    function populateActionPanelFromEditingState() {
        resetActionPanelVisuals();
        const { text, description, weight, color, actions = [] } = editingSegmentData;
        segmentTextInput.value = text || '';
        segmentDescriptionInput.value = description || '';
        segmentWeightInput.value = weight || 1;
        segmentColorInput.value = color || '#8AC926';

        const setVarActions = actions.filter(a => a.type === 'setVariable');
        actionSetVariableEnabled.checked = setVarActions.length > 0;
        setVariableActionsContainer.innerHTML = '';
        setVarActions.forEach(action => setVariableActionsContainer.appendChild(createSetVariableActionRow(action)));
        
        const executeMacroAction = actions.find(a => a.type === 'executeMacro');
        actionExecuteMacroEnabled.checked = !!executeMacroAction;
        if(executeMacroAction) actionExecuteMacroTarget.value = executeMacroAction.targetMacro;

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
        if(addToCollectionAction) actionAddToCollectionTarget.value = addToCollectionAction.targetCollection;
        
        const setItemInSlotAction = actions.find(a => a.type === 'setItemInSlot');
        actionSetItemInSlotEnabled.checked = !!setItemInSlotAction;
        if(setItemInSlotAction) {
            actionSetItemInSlotTarget.value = setItemInSlotAction.targetCollection;
            actionSetItemInSlotSlot.value = setItemInSlotAction.slot;
            actionSetItemInSlotValue.value = setItemInSlotAction.value;
        }

        const removeRandomItemAction = actions.find(a => a.type === 'removeRandomItem');
        actionRemoveRandomItemEnabled.checked = !!removeRandomItemAction;
        if(removeRandomItemAction) actionRemoveRandomItemTarget.value = removeRandomItemAction.targetCollection;

        const clearCollectionAction = actions.find(a => a.type === 'clearCollection');
        actionClearCollectionEnabled.checked = !!clearCollectionAction;
        if(clearCollectionAction) actionClearCollectionTarget.value = clearCollectionAction.targetCollection;

        document.querySelectorAll('#segment-action-panel .action-header input').forEach(el => { const details = el.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = el.checked ? 'flex' : 'none'; });
    }
    function resetActionPanelVisuals() {
        document.querySelectorAll('#segment-action-panel .custom-checkbox').forEach(cb => cb.checked = false);
        document.querySelectorAll('#segment-action-panel .action-details').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.action-summary').forEach(el => el.textContent = '');
        
        setVariableActionsContainer.innerHTML = '';
        actionSoundUpload.value = '';
        clearActionSoundBtn.style.display = 'none';
        actionTargetWheelSelect.innerHTML = '<option value="">Chọn Vòng Quay</option>';
        Object.keys(wheelsData).forEach(name => { if (name !== currentWheelName) { const option = document.createElement('option'); option.value = name; option.textContent = name; actionTargetWheelSelect.appendChild(option); } });

        actionSetCollectionSlotsValue.value = '';
        actionSetItemInSlotSlot.value = '';
        actionSetItemInSlotValue.value = '';
    }
    function updateAllActionSummaries() {
        const actions = editingSegmentData.actions || [];
        
        const executeMacroAction = actions.find(a => a.type === 'executeMacro');
        document.querySelector('#action-executeMacro-enabled ~ .action-summary').textContent = executeMacroAction ? `-> ${macros[executeMacroAction.targetMacro]?.name || '?'}` : '';

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
        
        const setItemInSlotAction = actions.find(a => a.type === 'setItemInSlot');
        document.querySelector('#action-setItemInSlot-enabled ~ .action-summary').textContent = setItemInSlotAction ? `Gán ô #${setItemInSlotAction.slot} = ${setItemInSlotAction.value}` : '';
        
        const removeRandomItemAction = actions.find(a => a.type === 'removeRandomItem');
        document.querySelector('#action-removeRandomItem-enabled ~ .action-summary').textContent = removeRandomItemAction ? `Từ [${collectionTemplate[removeRandomItemAction.targetCollection]?.name || '?'}]` : '';

        const clearCollectionAction = actions.find(a => a.type === 'clearCollection');
        document.querySelector('#action-clearCollection-enabled ~ .action-summary').textContent = clearCollectionAction ? `Xóa sạch [${collectionTemplate[clearCollectionAction.targetCollection]?.name || '?'}]` : '';
    }

    function exitEditMode() {
        editingSegmentIndex = null;
        editingSegmentData = { text: '', description: '', weight: 1, color: '#8AC926', actions: [] };
        segmentTextInput.value = '';
        segmentDescriptionInput.value = '';
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
            executeActions(actions.filter(a => a.type !== 'executeMacro'), result);

            const macroAction = actions.find(a => a.type === 'executeMacro');
            if (macroAction && macros[macroAction.targetMacro]) {
                addLogMessage(`-> Thực thi Macro: <span class="log-highlight">${macros[macroAction.targetMacro].name}</span>`);
                executeActions(macros[macroAction.targetMacro].actions, result);
            }

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

    // Quick Generate Panel Handlers
    function resetGeneratorPanel() {
        generationState = { sourceType: '', filterType: '', category: '', tags: [] };
        generateSourceTypeSelect.value = '';
        itemFilterTypeSelect.value = '';
        categoryFilterSelect.value = '';
        selectedTagsDisplay.innerHTML = '';
        updateGeneratorUI();
    }

    function updateGeneratorUI() {
        const { sourceType, filterType, category, tags } = generationState;

        // Show/hide main options
        itemDatabaseOptions.style.display = sourceType === 'itemDatabase' ? 'flex' : 'none';

        // Show/hide sub-options for itemDatabase
        if (sourceType === 'itemDatabase') {
            categoryFilterOptions.style.display = filterType === 'category' ? 'flex' : 'none';
            tagFilterOptions.style.display = filterType === 'tags' ? 'flex' : 'none';
        } else {
            categoryFilterOptions.style.display = 'none';
            tagFilterOptions.style.display = 'none';
        }

        // Enable/disable the final button
        let isReady = false;
        if (sourceType === 'entities') {
            isReady = true;
        } else if (sourceType === 'itemDatabase') {
            if (filterType === 'all') {
                isReady = true;
            } else if (filterType === 'category' && category) {
                isReady = true;
            } else if (filterType === 'tags' && tags.length > 0) {
                isReady = true;
            }
        }
        executeGenerationBtn.disabled = !isReady;
    }

    generateSourceTypeSelect.addEventListener('change', () => {
        generationState.sourceType = generateSourceTypeSelect.value;
        generationState.filterType = '';
        generationState.category = '';
        generationState.tags = [];
        itemFilterTypeSelect.value = '';
        categoryFilterSelect.value = '';
        selectedTagsDisplay.innerHTML = '';
        updateGeneratorUI();
    });

    itemFilterTypeSelect.addEventListener('change', () => {
        generationState.filterType = itemFilterTypeSelect.value;
        generationState.category = '';
        generationState.tags = [];
        categoryFilterSelect.value = '';
        selectedTagsDisplay.innerHTML = '';
        updateGeneratorUI();
    });

    categoryFilterSelect.addEventListener('change', () => {
        generationState.category = categoryFilterSelect.value;
        updateGeneratorUI();
    });

    openTagModalBtn.addEventListener('click', () => {
        const allTags = Object.values(tagDatabase).sort((a,b) => a.name.localeCompare(b.name));
        if (allTags.length === 0) {
            showNotification("Chưa có tag nào được tạo trong Quản Lý Tags.", true);
            return;
        }

        tagListForGeneration.innerHTML = '';
        allTags.forEach(tag => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag-checkbox';
            tagEl.dataset.tag = tag.name;
            tagEl.innerHTML = `<img src="${tag.icon || 'https://placehold.co/18x18/666/ccc?text=?'}" class="tag-checkbox-icon"><span>${tag.name}</span>`;
            
            if (generationState.tags.includes(tag.name)) {
                tagEl.classList.add('selected');
            }
            tagListForGeneration.appendChild(tagEl);
        });

        tagSelectionModal.style.display = 'flex';
    });

    tagListForGeneration.addEventListener('click', e => {
        if (e.target.matches('.tag-checkbox')) {
            e.target.classList.toggle('selected');
        }
    });

    cancelTagGenerationBtn.addEventListener('click', () => {
        tagSelectionModal.style.display = 'none';
    });
    
    confirmTagGenerationBtn.addEventListener('click', () => {
        generationState.tags = Array.from(tagListForGeneration.querySelectorAll('.tag-checkbox.selected')).map(el => el.dataset.tag);
        
        selectedTagsDisplay.innerHTML = '';
        generationState.tags.forEach(tagName => {
            const tagData = Object.values(tagDatabase).find(t => t.name === tagName);
            const pill = document.createElement('span');
            pill.className = 'tag-pill';
            pill.innerHTML = `
                <img src="${tagData?.icon || 'https://placehold.co/16x16/6c757d/fff?text=?'}" class="tag-pill-icon">
                ${tagName}
            `;
            selectedTagsDisplay.appendChild(pill);
        });
        
        tagSelectionModal.style.display = 'none';
        updateGeneratorUI();
    });

    executeGenerationBtn.addEventListener('click', () => {
        if (!currentWheelName) {
            showNotification("Vui lòng chọn hoặc tạo một vòng quay trước.", true);
            return;
        }

        const { sourceType, filterType, category, tags } = generationState;
        let filters = {};

        if (sourceType === 'itemDatabase') {
            if (filterType === 'category') {
                filters.category = category;
            } else if (filterType === 'tags') {
                filters.tags = tags;
            }
        }
        
        showConfirmationModal(`Việc này sẽ XÓA TẤT CẢ các ô hiện tại của vòng quay "${currentWheelName}" và thay thế bằng dữ liệu đã chọn. Bạn có chắc chắn?`, () => {
            generateWheelSegments(sourceType, filters);
            resetGeneratorPanel();
        });
    });

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
        if (prop !== 'base') return;
        const rawValue = e.target.value;
        let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue;
        variableTemplate[varName][prop] = finalValue;
        updateAllUI();
        recalculateActiveEntityStats();
        throttledSaveState();
    });

    variableTemplateListDiv.addEventListener('click', (e) => {
        if (e.target.matches('.delete-variable-btn')) {
            const varName = e.target.dataset.varname;
            delete variableTemplate[varName];
            Object.values(entities).forEach(entity => { delete entity.variables[varName]; });
            updateAllUI();
            recalculateActiveEntityStats();
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
        updateItemDatabaseListUI();
        throttledSaveState();
    });

    collectionTemplateListUI.addEventListener('click', e => {
        if (e.target.matches('.delete-collection-btn')) {
            const id = e.target.dataset.id;
            delete collectionTemplate[id];
            Object.values(entities).forEach(entity => {
                if (entity.collections) delete entity.collections[id];
            });
            // Also remove items from database in this category
            Object.keys(itemDatabase).forEach(itemId => {
                if (itemDatabase[itemId].collectionId === id) {
                    delete itemDatabase[itemId];
                }
            });
            updateAllUI();
            recalculateActiveEntityStats();
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
        if(e.target.matches('.variable-base-input')) {
            const entityId = e.target.dataset.entityid;
            const varName = e.target.dataset.varname;
            const rawValue = e.target.value;
            let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue;
            entities[entityId].variables[varName].base = finalValue;
            recalculateActiveEntityStats();
            throttledSaveState();
        }
    });
    entityCollectionsListDiv.addEventListener('input', e => {
        if (e.target.matches('input[type="text"]')) {
            const { entityid, collectionid, slotindex } = e.target.dataset;
            const value = e.target.value;

            if (entities[entityid] && entities[entityid].collections[collectionid]) {
                entities[entityid].collections[collectionid][parseInt(slotindex)] = value.trim() === '' ? null : value;
                recalculateActiveEntityStats();
                throttledSaveState();
            }
        }
    });

    // Item Database Handlers
     itemDatabaseListContainer.addEventListener('click', e => {
        if (e.target.matches('.add-item-to-category-btn')) {
            const collectionId = e.target.dataset.collectionId;
            if (!collectionId) return;

            const newItem = {
                id: `item_${Date.now()}`,
                name: 'Vật Phẩm Mới',
                description: '',
                icon: '',
                effects: [],
                tags: [],
                collectionId: collectionId
            };
            itemDatabase[newItem.id] = newItem;
            loadEditor('item', newItem.id);
            throttledSaveState();
        } else {
            const targetLi = e.target.closest('.list-item');
            if (!targetLi) return;
            const id = targetLi.dataset.id;
            if (e.target.matches('.delete-item-btn')) {
                e.stopPropagation();
                showConfirmationModal(`Bạn có chắc muốn xóa vật phẩm "${itemDatabase[id].name}"?`, () => {
                    delete itemDatabase[id];
                    if (activeEditor.id === id) activeEditor.id = null;
                    loadEditor(null, null);
                    recalculateActiveEntityStats();
                    throttledSaveState();
                });
            } else {
                loadEditor('item', id);
            }
        }
    });

    addItemEffectBtn.addEventListener('click', () => {
        if (activeEditor.type !== 'item') return;
        const firstVar = Object.keys(variableTemplate)[0];
        if(!firstVar) {
            showNotification("Vui lòng tạo Biến Mẫu trước khi thêm hiệu ứng.", true);
            return;
        }
        itemEffectsContainer.appendChild(createItemEffectRow({target: firstVar, operator: '+=', value: 1}));
        saveActiveEditor();
    });
    
    itemEditor.addEventListener('input', (e) => {
        if(e.target.closest('#item-editor-content') && e.target.id !== 'item-tags-input') {
            saveActiveEditor();
        }
    });

    itemEditor.addEventListener('click', e => {
        if(e.target.matches('.btn-delete-action')) {
            e.target.parentElement.remove();
            saveActiveEditor();
        }
    });
    
    // Tag Manager Handlers
    addNewTagBtn.addEventListener('click', () => {
        const name = newTagNameInput.value.trim();
        if (!name) return;
        if (Object.values(tagDatabase).some(t => t.name === name)) {
            showNotification(`Lỗi: Tag "${name}" đã tồn tại.`, true);
            return;
        }
        const newTag = { id: `tag_${Date.now()}`, name, icon: '' };
        tagDatabase[newTag.id] = newTag;
        newTagNameInput.value = '';
        updateAllUI();
        loadEditor('tag', newTag.id);
        throttledSaveState();
    });

    tagManagerListUI.addEventListener('click', e => {
        const targetLi = e.target.closest('.list-item');
        if (!targetLi) return;
        const id = targetLi.dataset.id;
        if (e.target.matches('.delete-tag-btn')) {
            e.stopPropagation();
            const tagName = tagDatabase[id].name;
            showConfirmationModal(`Bạn có chắc muốn xóa tag "${tagName}"? Tag này cũng sẽ bị xóa khỏi tất cả các vật phẩm.`, () => {
                delete tagDatabase[id];
                // Remove this tag from all items
                Object.values(itemDatabase).forEach(item => {
                    if (item.tags) {
                        item.tags = item.tags.filter(t => t !== tagName);
                    }
                });
                if (activeEditor.id === id) activeEditor.id = null;
                updateAllUI();
                loadEditor(null, null);
                throttledSaveState();
            });
        } else {
            loadEditor('tag', id);
        }
    });
    
    tagEditor.addEventListener('input', e => {
        if(e.target.closest('#tag-editor-content')) {
            saveActiveEditor();
        }
    });

    tagIconUpload.addEventListener('change', e => { if(activeEditor.type !== 'tag') return; handleFileUpload(e.target.files[0], (dataUrl) => { tagDatabase[activeEditor.id].icon = dataUrl; tagIconPreview.src = dataUrl; clearTagIconBtn.style.display = 'inline-block'; saveActiveEditor(); }); });
    clearTagIconBtn.addEventListener('click', () => { if(activeEditor.type !== 'tag') return; tagDatabase[activeEditor.id].icon = ''; tagIconPreview.src = ''; clearTagIconBtn.style.display = 'none'; tagIconUpload.value = ''; saveActiveEditor(); });


    function updateTagPills() {
        if (activeEditor.type !== 'item' || !activeEditor.id) {
            itemTagsDisplay.innerHTML = '';
            return;
        }
        const item = itemDatabase[activeEditor.id];
        itemTagsDisplay.innerHTML = '';
        if (item && item.tags) {
            item.tags.forEach(tagName => {
                const tagData = Object.values(tagDatabase).find(t => t.name === tagName);
                const pill = document.createElement('span');
                pill.className = 'tag-pill';
                pill.innerHTML = `
                 <img src="${tagData?.icon || 'https://placehold.co/16x16/6c757d/fff?text=?'}" class="tag-pill-icon">
                 ${tagName}
                `;
                itemTagsDisplay.appendChild(pill);
            });
        }
    }
    
    itemTagsInput.addEventListener('keydown', e => {
        if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            const tagName = itemTagsInput.value.trim();
            if (tagName) {
                const item = itemDatabase[activeEditor.id];
                // Ensure tag exists in database, if not, create it
                let tagExists = Object.values(tagDatabase).some(t => t.name === tagName);
                if (!tagExists) {
                    const newTag = { id: `tag_${Date.now()}`, name: tagName, icon: '' };
                    tagDatabase[newTag.id] = newTag;
                    updateAllUI(); // Update manager and suggestions
                }

                if (item && !item.tags.includes(tagName)) {
                    item.tags.push(tagName);
                    item.tags.sort();
                    updateTagPills();
                    throttledSaveState();
                }
            }
            itemTagsInput.value = '';
        }
    });


    // Logic Brain Editor Handlers
    addComputedVariableBtn.addEventListener('click', () => { const newCv = { id: `comp_${Date.now()}`, formula: '' }; computedVariables.push(newCv); loadEditor('computed', newCv.id); throttledSaveState(); });
    computedVariablesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-computed-variable-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; computedVariables = computedVariables.filter(cv => cv.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); recalculateActiveEntityStats(); throttledSaveState(); } else { loadEditor('computed', targetLi.dataset.id); } });
    
    addRuleBtn.addEventListener('click', () => { const newRule = { id: `rule_${Date.now()}`, name: 'Luật Mới', blocks: [{ type: 'if', conditions: [], actions: [] }] }; conditionalRules.push(newRule); loadEditor('conditional', newRule.id); throttledSaveState(); });
    rulesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-rule-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; conditionalRules = conditionalRules.filter(r => r.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('conditional', targetLi.dataset.id); } });
    
    addMacroBtn.addEventListener('click', () => { const newMacro = { id: `macro_${Date.now()}`, name: 'Macro Mới', actions: [] }; macros[newMacro.id] = newMacro; loadEditor('macro', newMacro.id); throttledSaveState(); });
    macrosListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-macro-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; delete macros[id]; if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('macro', targetLi.dataset.id); } });

    logicEditor.addEventListener('input', (e) => { if (e.target.closest('#rule-editor-content, #computed-variable-editor-content, #macro-editor-content')) { saveActiveEditor(); } });
    logicEditor.addEventListener('click', (e) => {
        if (e.target.matches('.btn-delete-action')) {
            e.target.parentElement.remove(); saveActiveEditor();
        } else if (e.target.matches('.add-rule-condition-btn')) {
            const conditionsContainer = e.target.previousElementSibling;
            conditionsContainer.insertAdjacentHTML('beforeend', createRuleConditionRow());
            saveActiveEditor();
        } else if (e.target.matches('.add-rule-action-btn')) {
            const actionsContainer = e.target.previousElementSibling;
            actionsContainer.appendChild(createSetVariableActionRow({}));
            saveActiveEditor();
        } else if (e.target.matches('.delete-rule-block-btn')) {
             const rule = conditionalRules.find(r => r.id === activeEditor.id);
             if(!rule) return;
             const index = parseInt(e.target.dataset.index, 10);
             rule.blocks.splice(index, 1);
             loadEditor('conditional', activeEditor.id);
             saveActiveEditor();
        }
    });
    
    addRuleIfElseBtn.addEventListener('click', () => {
         const rule = conditionalRules.find(r => r.id === activeEditor.id);
         if(rule) {
            rule.blocks.push({ type: 'elseif', conditions: [], actions: [] });
            loadEditor('conditional', activeEditor.id);
            saveActiveEditor();
         }
    });
     addRuleElseBtn.addEventListener('click', () => {
         const rule = conditionalRules.find(r => r.id === activeEditor.id);
         if(rule) {
            rule.blocks.push({ type: 'else', actions: [] });
            loadEditor('conditional', activeEditor.id);
            saveActiveEditor();
         }
    });

    addMacroActionBtn.addEventListener('click', () => { if (activeEditor.type !== 'macro') return; macroActionsContainer.appendChild(createMacroActionRow({type: 'setVariable'})); saveActiveEditor(); });


    // Wheel Studio Handlers
    copyWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; copiedWheelData = JSON.parse(JSON.stringify(wheelsData[currentWheelName])); pasteWheelBtn.disabled = false; showNotification(`Đã sao chép vòng quay "${currentWheelName}"!`); });
    pasteWheelBtn.addEventListener('click', () => { if (!copiedWheelData) return; const newName = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (!newName) { showNotification("Vui lòng nhập tên cho vòng quay mới trước khi dán.", true); return; } if (wheelsData[newName]) { showNotification(`Lỗi: Tên vòng quay "${newName}" đã tồn tại.`, true); return; } wheelsData[newName] = JSON.parse(JSON.stringify(copiedWheelData)); newWheelNameInput.value = ''; loadWheel(newName); throttledSaveState(); showNotification(`Đã dán và tạo vòng quay mới "${newName}"!`); });
    createWheelBtn.addEventListener('click', () => { const name = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (name && !wheelsData[name]) { wheelsData[name] = { segments: [], settings: { removalMode: 'none', spinCountVariable: '', defaultLink: 'None' } }; newWheelNameInput.value = ''; loadWheel(name); throttledSaveState(); } else if (wheelsData[name]) alert('Lỗi: Tên vòng quay đã tồn tại!'); });
    wheelSelector.addEventListener('change', () => { if (!isSpinning) loadWheel(wheelSelector.value); });
    deleteWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; showConfirmationModal(`Bạn có chắc muốn xóa vòng quay "${currentWheelName}"?`, () => { delete wheelsData[currentWheelName]; loadWheel(Object.keys(wheelsData)[0] || null); throttledSaveState(); }); });

    mainActionBtn.addEventListener('click', () => {
        if (!currentWheelName) return;
        editingSegmentData.text = segmentTextInput.value.trim();
        editingSegmentData.description = segmentDescriptionInput.value.trim();
        editingSegmentData.weight = parseInt(segmentWeightInput.value) || 1;
        editingSegmentData.color = segmentColorInput.value;

        if (editingSegmentIndex !== null) {
            wheelsData[currentWheelName].segments[editingSegmentIndex] = editingSegmentData;
        } else {
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
    resetSpinBtn.addEventListener('click', () => { if (!isSpinning) return; showConfirmationModal("Dừng chuỗi quay và hoàn tác mọi thay đổi về thực thể đang hoạt động?", () => { isSpinning = false; spinVelocity = 0; if (variableSnapshot) { entities[activeEntityId] = JSON.parse(JSON.stringify(variableSnapshot)); } endSpinSequenceCleanup(); recalculateActiveEntityStats(); drawWheel(); showNotification("Chuỗi quay đã được dừng và hoàn tác."); addLogMessage('--- Chuỗi quay đã được dừng và hoàn tác ---'); }); });
    spinCountVariableInput.addEventListener('input', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.spinCountVariable = e.target.value.trim().replace(/\s+/g, '_'); throttledSaveState(); });
    segmentRemovalModeSelect.addEventListener('change', (e) => { if (currentWheelName) { wheelsData[currentWheelName].settings.removalMode = e.target.value; throttledSaveState(); } });
    defaultLinkSelect.addEventListener('change', (e) => { if (currentWheelName) wheelsData[currentWheelName].settings.defaultLink = e.target.value; throttledSaveState(); });
    activeEntitySelector.addEventListener('change', e => { activeEntityId = e.target.value === 'none' ? null : e.target.value; recalculateActiveEntityStats(); if(activeEntityId) { addLogMessage(`Thực thể hoạt động được đổi thành <span class="log-highlight">${entities[activeEntityId]?.name}</span>.`); } else { addLogMessage(`Không có thực thể nào được chọn.`); } });
    segmentActionPanel.addEventListener('change', (e) => { if (!e.target.matches('.custom-checkbox')) return; const details = e.target.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = e.target.checked ? 'flex' : 'none'; });
    segmentActionPanel.addEventListener('input', () => {
        const actions = [];
        if(actionExecuteMacroEnabled.checked) {
            const target = actionExecuteMacroTarget.value;
            if (target) actions.push({ type: 'executeMacro', targetMacro: target });
        }
        if (actionSetVariableEnabled.checked) {
            setVariableActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => {
                const actionData = { type: 'setVariable' };
                actionData.target = row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_');
                actionData.targetProperty = row.querySelector('.action-var-target-prop').value;
                actionData.operator = row.querySelector('.action-var-operator').value;
                
                if (actionData.operator === 'invert') {
                    actionData.min = row.querySelector('.action-var-min').value.trim();
                    actionData.max = row.querySelector('.action-var-max').value.trim();
                } else if (!(UNARY_OPERATORS.includes(actionData.operator))) {
                    actionData.value = row.querySelector('.action-var-value').value.trim();
                }

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
        if (actionSetItemInSlotEnabled.checked) {
            const target = actionSetItemInSlotTarget.value;
            const slot = actionSetItemInSlotSlot.value.trim();
            const value = actionSetItemInSlotValue.value.trim();
            if (target && slot && value) actions.push({type: 'setItemInSlot', targetCollection: target, slot, value});
        }
        if (actionRemoveRandomItemEnabled.checked) {
            const target = actionRemoveRandomItemTarget.value;
            if (target) actions.push({type: 'removeRandomItem', targetCollection: target});
        }
        if(actionClearCollectionEnabled.checked) {
            const target = actionClearCollectionTarget.value;
            if(target) actions.push({type: 'clearCollection', targetCollection: target});
        }
        if (actionGoToWheelEnabled.checked) { actions.push({ type: 'goToWheel', target: actionTargetWheelSelect.value }); }
        if (actionPlaySoundEnabled.checked) { if(editingSegmentData.actions?.find(a=>a.type==='playSound')?.soundData) { actions.push(editingSegmentData.actions.find(a=>a.type==='playSound')); } }
        if (actionConditionalEnabled.checked) { actions.push({ type: 'conditionalReroll', operator: conditionOperatorSelect.value, value: parseInt(conditionValueInput.value), maxRerolls: parseInt(conditionRerollsInput.value) || 1 }); }
        editingSegmentData.actions = actions;
        updateAllActionSummaries();
    });
    addSetVariableActionBtn.addEventListener('click', () => { setVariableActionsContainer.appendChild(createSetVariableActionRow({})); });
    setVariableActionsContainer.addEventListener('click', (e) => { if (e.target.classList.contains('btn-delete-action')) { e.target.closest('.set-variable-action-row').remove(); segmentActionPanel.dispatchEvent(new Event('input')); }});

    // Multimedia Handlers
    tickSoundUpload.addEventListener('change', e => { handleFileUpload(e.target.files[0], (dataUrl) => { projectSettings.tickSoundData = dataUrl; tickAudio.src = dataUrl; clearTickSoundBtn.style.display = 'inline-block'; throttledSaveState(); }); });
    clearTickSoundBtn.addEventListener('click', () => { projectSettings.tickSoundData = ''; tickAudio.src = ''; tickSoundUpload.value = ''; clearTickSoundBtn.style.display = 'none'; throttledSaveState(); });
    actionSoundUpload.addEventListener('change', e => { handleFileUpload(e.target.files[0], (dataUrl) => { let soundAction = editingSegmentData.actions?.find(a => a.type === 'playSound'); if (!soundAction) { soundAction = {type: 'playSound'}; editingSegmentData.actions.push(soundAction); } soundAction.soundData = dataUrl; clearActionSoundBtn.style.display = 'inline-block'; updateAllActionSummaries(); }); });
    clearActionSoundBtn.addEventListener('click', () => { editingSegmentData.actions = editingSegmentData.actions.filter(a => a.type !== 'playSound'); actionSoundUpload.value = ''; clearActionSoundBtn.style.display = 'none'; updateAllActionSummaries(); });
    entityAvatarUpload.addEventListener('change', e => { if(!editingEntityId) return; handleFileUpload(e.target.files[0], (dataUrl) => { entities[editingEntityId].avatar = dataUrl; entityAvatarPreview.src = dataUrl; clearEntityAvatarBtn.style.display = 'inline-block'; throttledSaveState(); }); });
    clearEntityAvatarBtn.addEventListener('click', () => { if(!editingEntityId) return; entities[editingEntityId].avatar = ''; entityAvatarPreview.src = ''; clearEntityAvatarBtn.style.display = 'none'; entityAvatarUpload.value = ''; throttledSaveState(); });
    itemIconUpload.addEventListener('change', e => { if(activeEditor.type !== 'item') return; handleFileUpload(e.target.files[0], (dataUrl) => { itemDatabase[activeEditor.id].icon = dataUrl; itemIconPreview.src = dataUrl; clearItemIconBtn.style.display = 'inline-block'; saveActiveEditor(); }); });
    clearItemIconBtn.addEventListener('click', () => { if(activeEditor.type !== 'item') return; itemDatabase[activeEditor.id].icon = ''; itemIconPreview.src = ''; clearItemIconBtn.style.display = 'none'; itemIconUpload.value = ''; saveActiveEditor(); });

    // --- HELPER FUNCTIONS ---
    function showNotification(message, isError = false) { notificationToast.textContent = message; notificationToast.style.backgroundColor = isError ? '#dc3545' : '#252526'; notificationToast.style.borderColor = isError ? '#dc3545' : '#ffde59'; notificationToast.classList.add('show'); setTimeout(() => { notificationToast.classList.remove('show'); }, 3000); }
    function showResultPopup(result, callback) {
        const modal = document.getElementById('result-modal');
        resultTitle.textContent = result.text;
        if (result.description) {
            resultDescription.textContent = result.description;
            resultDescription.style.display = 'block';
        } else {
            resultDescription.style.display = 'none';
        }
        modal.style.display = 'flex';
        document.getElementById('close-modal-button').onclick = () => { modal.style.display = 'none'; if (callback) callback(); };
    }
    
    function showItemInfoPopup(itemName) {
        const item = Object.values(itemDatabase).find(i => i.name === itemName);
        if (!item) return;

        const modal = document.getElementById('item-info-modal');
        document.getElementById('item-info-icon').src = item.icon || 'https://placehold.co/60x60/1a1a1a/888?text=?';
        document.getElementById('item-info-title').textContent = item.name;
        document.getElementById('item-info-description').textContent = item.description || 'Vật phẩm này không có mô tả.';
        
        modal.style.display = 'flex';
    }

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
    
    // Additional event listener for item info modal
    document.getElementById('close-item-info-modal-button').addEventListener('click', () => {
        document.getElementById('item-info-modal').style.display = 'none';
    });

    sidebarTabContent.addEventListener('click', (e) => {
        const slot = e.target.closest('.collection-slot');
        if (slot && slot.dataset.itemName) {
            showItemInfoPopup(slot.dataset.itemName);
        }
    });

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
        tagDatabase = {
            'tag_1': { id: 'tag_1', name: 'vũ khí', icon: ''},
            'tag_2': { id: 'tag_2', name: 'cận chiến', icon: ''},
            'tag_3': { id: 'tag_3', name: 'giáp', icon: ''},
            'tag_4': { id: 'tag_4', name: 'thân', icon: ''}
        };
        itemDatabase = {
            'item_1': { id: 'item_1', name: 'Kiếm Sắt', description: 'Một thanh kiếm cơ bản, hơi cùn.\n\n+5 Sức Mạnh', icon: '', effects: [{ target: 'suc_manh', operator: '+=', value: 5 }], tags: ['vũ khí', 'cận chiến'], collectionId: 'Trang_Bi' },
            'item_2': { id: 'item_2', name: 'Giáp Da', description: 'Tăng một chút khả năng phòng thủ.\n\n+20 Máu', icon: '', effects: [{ target: 'mau_hien_tai', operator: '+=', value: 20 }], tags: ['giáp', 'thân'], collectionId: 'Trang_Bi' }
        };
        macros = {
            'macro_default': { id: 'macro_default', name: 'Trang Bị Cho Thief', actions: [
                { type: 'setVariable', target: 'nhanh_nhen', targetProperty: 'bonus', operator: '+=', value: '2' },
                { type: 'addToCollection', targetCollection: 'Trang_Bi', value: 'Dao Găm' }
            ]}
        };
        const playerId = `entity_${Date.now()}`;
        entities = { [playerId]: { id: playerId, name: 'Player', variables: JSON.parse(JSON.stringify(variableTemplate)), avatar: '', collections: {'Trang_Bi': ['Kiếm Sắt', null], 'Ky_Nang': []} } };
        activeEntityId = playerId;
        wheelsData['Vong_Quay_Chinh'] = { settings: { }, segments: [ { text: 'Tấn Công', description: 'Gây sát thương lên mục tiêu.', weight: 1, color: '#f94144', actions: [{ type: 'setVariable', target: 'mau_hien_tai', targetProperty: 'base', operator: '-=', value: '10' }] }, { text: 'Giáp Da', description: 'Tìm thấy một chiếc giáp da.', weight: 1, color: '#43aa8b', actions: [{ type: 'addToCollection', targetCollection: 'Trang_Bi'}] } ] };
        computedVariables = [];
        conditionalRules = [{id: `rule_default`, name: 'Luật Máu Thấp', blocks: [
            { type: 'if', conditions: [{left: 'mau_hien_tai', operator: '<=', right: '30'}], actions: [{type: 'setVariable', target: 'suc_manh', targetProperty: 'bonus', operator: '+=', value: '5'}] }
        ]}];
        updateAllUI();
        recalculateActiveEntityStats();
        addLogMessage("Chào mừng đến với Wheel Engine v14.0!");
    }

    initialize();
    exitEditMode();
    resetGeneratorPanel();
});

