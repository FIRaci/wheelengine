document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const appContainer = document.querySelector('.app-container');
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
    const skipButton = document.getElementById('skip-button');
    const wheelTitle = document.getElementById('wheel-title');
    const spinCountVariableInput = document.getElementById('spin-count-variable');
    const segmentRemovalModeSelect = document.getElementById('segment-removal-mode');
    const defaultLinkSelect = document.getElementById('default-link');
    const entitySearchInput = document.getElementById('entity-search-input');
    const itemSearchInput = document.getElementById('item-search-input');
    const tagSearchInput = document.getElementById('tag-search-input');
    const wheelSettingsPanel = document.getElementById('wheel-settings-panel');
    const actionSetVariableEnabled = document.getElementById('action-setVariable-enabled');
    const setVariableActionsContainer = document.getElementById('set-variable-actions-container');
    const addSetVariableActionBtn = document.getElementById('add-set-variable-action-btn');
    const actionGoToWheelEnabled = document.getElementById('action-goToWheel-enabled');
    const actionTargetWheelSelect = document.getElementById('action-target-wheel');
    const actionJumpToWheelEnabled = document.getElementById('action-jumpToWheel-enabled');
    const actionJumpTargetWheelSelect = document.getElementById('action-jump-target-wheel');
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

    // Project Settings Elements
    const themeAccentColorInput = document.getElementById('theme-accent-color');
    const themeBgColorInput = document.getElementById('theme-bg-color');
    const showWheelBorderCheckbox = document.getElementById('show-wheel-border');
    const wheelBorderColorInput = document.getElementById('wheel-border-color');
    const wheelBorderWidthInput = document.getElementById('wheel-border-width');
    const enableConfettiCheckbox = document.getElementById('enable-confetti');
    const autoBackupCheckbox = document.getElementById('auto-backup-toggle');
    const backupListSelect = document.getElementById('backup-list-select');
    const restoreBackupBtn = document.getElementById('restore-backup-btn');
    const resetToDefaultStyleBtn = document.getElementById('reset-to-default-style-btn');
    const openSettingsBtn = document.getElementById('open-settings-btn');
    const closeSettingsModalBtn = document.getElementById('close-settings-modal');
    const settingsModal = document.getElementById('settings-modal');
    const spinCountDisplay = document.getElementById('spin-count-display');
    const resetSpinBtn = document.getElementById('reset-spin-btn');
    const segmentActionPanel = document.getElementById('segment-action-panel');
    const logicMapContainer = document.getElementById('logic-map-container');
    const copyWheelBtn = document.getElementById('copy-wheel-btn');
    const pasteWheelBtn = document.getElementById('paste-wheel-btn');
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
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
    const actionRemoveItemsEnabled = document.getElementById('action-removeItems-enabled');
    const actionRemoveItemsTarget = document.getElementById('action-removeItems-target');
    const actionRemoveItemsMode = document.getElementById('action-removeItems-mode');
    const actionRemoveItemsAmountType = document.getElementById('action-removeItems-amountType');
    const removeItemsAmountContainer = document.querySelector('.remove-items-amount-container');
    const removeItemsAmountSpecific = document.querySelector('.remove-items-amount-specific');
    const removeItemsAmountRange = document.querySelector('.remove-items-amount-range');
    const actionRemoveItemsAmountValue1 = document.getElementById('action-removeItems-amountValue1');
    const actionRemoveItemsAmountValue2 = document.getElementById('action-removeItems-amountValue2');
    const actionRemoveItemsAmountValue3 = document.getElementById('action-removeItems-amountValue3');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarNav = document.getElementById('sidebar-nav');
    const sidebarTabContent = document.getElementById('sidebar-tab-content');
    const activeEntitySelector = document.getElementById('active-entity-selector');
    const presentationWheelSelector = document.getElementById('presentation-wheel-selector');
    const entityStatsDisplay = document.getElementById('entity-stats-display');
    const gameLog = document.getElementById('game-log');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const tickSoundUpload = document.getElementById('tick-sound-upload');
    const clearTickSoundBtn = document.getElementById('clear-tick-sound-btn');
    const actionPlaySoundEnabled = document.getElementById('action-playSound-enabled');
    const actionSoundUpload = document.getElementById('action-sound-upload');
    const clearActionSoundBtn = document.getElementById('clear-action-sound-btn');
    const entityAvatarUpload = document.getElementById('entity-avatar-upload');
    const entityAvatarPreview = document.getElementById('entity-avatar-preview');
    const clearEntityAvatarBtn = document.getElementById('clear-entity-avatar-btn');
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
    const logicTemplatePresetSelect = document.getElementById('logic-template-preset-select');
    const applyLogicTemplateBtn = document.getElementById('apply-logic-template-btn');
    const saveMacroAsTemplateBtn = document.getElementById('save-macro-as-template-btn');
    const saveRuleAsTemplateBtn = document.getElementById('save-rule-as-template-btn');
    const userSavedTemplatesGroup = document.getElementById('user-saved-templates-group');
    const statusEditorContent = document.getElementById('status-editor-content');
    const statusEditorTitle = document.getElementById('status-editor-title');
    const statusNameInput = document.getElementById('status-name-input');
    const statusDescriptionInput = document.getElementById('status-description-input');
    const statusLogicOperator = document.getElementById('status-logic-operator');
    const statusConditionsContainer = document.getElementById('status-conditions-container');
    const addStatusConditionBtn = document.getElementById('add-status-condition-btn');
    const statusActionsContainer = document.getElementById('status-actions-container');
    const addStatusActionBtn = document.getElementById('add-status-action-btn');
    const statusEndType = document.getElementById('status-end-type');
    const statusSpinCountGroup = document.getElementById('status-spin-count-group');
    const statusSpinCount = document.getElementById('status-spin-count');
    const statusEndWheelGroup = document.getElementById('status-end-wheel-group');
    const statusEndWheel = document.getElementById('status-end-wheel');
    const statusExecutionTiming = document.getElementById('status-execution-timing');
    const statusStackBehavior = document.getElementById('status-stack-behavior');
    const statusListUI = document.getElementById('status-list');
    const addStatusBtn = document.getElementById('add-status-btn');
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
    const tagSelectionModal = document.getElementById('tag-selection-modal');
    
    // Show/hide target wheel row for status actions based on duration type
    const actionStatusDurTypeSelect = document.getElementById('action-status-dur-type');
    const actionStatusTargetWheelRow = document.getElementById('action-status-target-wheel-row');
    if (actionStatusDurTypeSelect && actionStatusTargetWheelRow) {
        actionStatusDurTypeSelect.addEventListener('change', () => {
            if (actionStatusDurTypeSelect.value === 'wheel_end') {
                actionStatusTargetWheelRow.style.display = 'block';
            } else {
                actionStatusTargetWheelRow.style.display = 'none';
            }
        });
        if (actionStatusDurTypeSelect.value === 'wheel_end') {
            actionStatusTargetWheelRow.style.display = 'block';
        } else {
            actionStatusTargetWheelRow.style.display = 'none';
        }
    }
    // Wire up applyStatus and removeStatus checkbox toggles
    const actionApplyStatusCheckbox = document.getElementById('action-applyStatus-enabled');
    const actionApplyStatusDetails = document.getElementById('action-applyStatus-details');
    if (actionApplyStatusCheckbox && actionApplyStatusDetails) {
        actionApplyStatusCheckbox.addEventListener('change', () => {
            actionApplyStatusDetails.style.display = actionApplyStatusCheckbox.checked ? 'flex' : 'none';
        });
    }
    const actionRemoveStatusCheckbox = document.getElementById('action-removeStatus-enabled');
    const actionRemoveStatusDetails = document.getElementById('action-removeStatus-details');
    if (actionRemoveStatusCheckbox && actionRemoveStatusDetails) {
        actionRemoveStatusCheckbox.addEventListener('change', () => {
            actionRemoveStatusDetails.style.display = actionRemoveStatusCheckbox.checked ? 'flex' : 'none';
        });
    }
    // Wire up inline status effects add/remove
    const segmentStatusEffectsContainer = document.getElementById('segment-status-effects-container');
    const addSegmentStatusEffectBtn = document.getElementById('add-segment-status-effect-btn');
    if (addSegmentStatusEffectBtn && segmentStatusEffectsContainer) {
        addSegmentStatusEffectBtn.addEventListener('click', () => {
            const row = document.createElement('div');
            row.className = 'status-effect-row';
            row.style.cssText = 'display:flex;gap:0.25rem;align-items:center;margin-bottom:0.25rem;';
            row.innerHTML = `<select class="effect-target" style="flex:1;"><option value="">Chọn chỉ số</option>${Object.keys(variableTemplate).map(v => `<option value="${v}">${v}</option>`).join('')}</select><select class="effect-operator" style="width:60px;"><option value="min">min</option><option value="max">max</option><option value="override">=</option></select><input class="effect-value" type="text" placeholder="Value" style="flex:1;"><button type="button" class="btn-delete-effect" style="background:none;border:none;color:var(--danger);cursor:pointer;">X</button>`;
            segmentStatusEffectsContainer.appendChild(row);
        });
        segmentStatusEffectsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete-effect')) {
                e.target.closest('.status-effect-row').remove();
            }
        });
    }
    const tagListForGeneration = document.getElementById('tag-list-for-generation');
    const confirmTagGenerationBtn = document.getElementById('confirm-tag-generation-btn');
    const cancelTagGenerationBtn = document.getElementById('cancel-tag-generation-btn');

    // Global State
    let wheelsData = {}, variableTemplate = {}, collectionTemplate = {}, macros = {}, statusTemplate = {}, entities = {}, computedVariables = [], conditionalRules = [], projectSettings = {}, itemDatabase = {}, tagDatabase = {};
    let activeEntityId = null, wheelStack = [];
    let editingEntityId = null;
    let currentWheelName = '', editingSegmentIndex = null;
    let currentTrace = [];
    let historyStack = [], historyIndex = -1;
    const MAX_HISTORY = 50;
    const logicTraceDisplay = document.getElementById('logic-trace-display');
    let activeEditor = { type: null, id: null };
    let startAngle = 0, spinVelocity = 0, isSpinning = false, draggedIndex = null;
    let isPresentationMode = false;
    let idleAnimationId = null; // For idle wheel rotation
    const friction = 0.992;
    let copiedActions = null;
    let copiedWheelData = null;
    let saveTimeout = null;
    let variableSnapshot = null;
    let editingSegmentData = {};
    let generationState = { sourceType: '', filterType: '', category: '', tags: [] };
    const MAX_LOG_ENTRIES = 50;
    const UNARY_OPERATORS = ['ceil', 'floor', 'negate'];

    // HSL to HEX helper for input[type="color"] compatibility
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    // --- FORMULA AUTOCOMPLETE ---
    const autocompleteDropdown = document.createElement('div');
    autocompleteDropdown.id = 'autocomplete-dropdown';
    document.body.appendChild(autocompleteDropdown);

    let activeAutocompleteInput = null;
    let autocompleteSelectedIndex = -1;

    function getAutocompleteSuggestions() {
        const list = [];
        // Add variables
        Object.keys(variableTemplate || {}).forEach(name => {
            list.push({ value: name, type: 'variable' });
        });
        // Add computed variables
        (computedVariables || []).forEach(cv => {
            list.push({ value: cv.name, type: 'computed' });
        });
        // Add special globals
        const globals = [
            'lowest_bs_var', 'highest_bs_var', 
            'lowest_bs_earliest', 'lowest_bs_latest', 
            'highest_bs_earliest', 'highest_bs_latest',
            'lowest_bs_source_wheel_id', 'highest_bs_source_wheel_id'
        ];
        globals.forEach(g => {
            list.push({ value: g, type: 'global' });
        });
        // Add Math functions
        const mathFuncs = [
            'ceil(', 'floor(', 'round(', 'abs(', 'min(', 'max(', 'random(', 'sqrt('
        ];
        mathFuncs.forEach(m => {
            list.push({ value: m, type: 'function' });
        });
        // Add entities syntax
        list.push({ value: 'self.', type: 'syntax' });
        list.push({ value: 'target.', type: 'syntax' });
        
        return list;
    }

    function showAutocomplete(input) {
        activeAutocompleteInput = input;
        const text = input.value;
        const caretPos = input.selectionStart;
        const textBeforeCaret = text.slice(0, caretPos);
        const match = textBeforeCaret.match(/[a-zA-Z0-9_\(\.]*$/);
        const query = match ? match[0] : '';

        if (!query) {
            hideAutocomplete();
            return;
        }

        const allSuggestions = getAutocompleteSuggestions();
        const filtered = allSuggestions.filter(item => 
            item.value.toLowerCase().includes(query.toLowerCase()) && 
            item.value.toLowerCase() !== query.toLowerCase()
        );

        if (filtered.length === 0) {
            hideAutocomplete();
            return;
        }

        autocompleteSelectedIndex = 0;
        renderAutocompleteItems(filtered, query);
        positionAutocomplete(input);
    }

    function renderAutocompleteItems(items, query) {
        autocompleteDropdown.innerHTML = '';
        items.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item' + (index === autocompleteSelectedIndex ? ' active' : '');
            div.dataset.value = item.value;
            div.dataset.query = query;
            div.dataset.type = item.type;
            div.innerHTML = `
                <span>${item.value}</span>
                <span class="type-badge">${item.type}</span>
            `;
            div.addEventListener('click', () => {
                selectAutocompleteItem(item.value, query);
            });
            autocompleteDropdown.appendChild(div);
        });
        autocompleteDropdown.style.display = 'block';
    }

    function selectAutocompleteItem(value, query) {
        if (!activeAutocompleteInput) return;
        const input = activeAutocompleteInput;
        const text = input.value;
        const caretPos = input.selectionStart;
        const textBeforeCaret = text.slice(0, caretPos);
        const textAfterCaret = text.slice(caretPos);

        input.value = textBeforeCaret.slice(0, caretPos - query.length) + value + textAfterCaret;
        const newCaretPos = caretPos - query.length + value.length;
        input.setSelectionRange(newCaretPos, newCaretPos);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        hideAutocomplete();
        input.focus();
    }

    function positionAutocomplete(input) {
        const rect = input.getBoundingClientRect();
        autocompleteDropdown.style.left = `${rect.left + window.scrollX}px`;
        autocompleteDropdown.style.top = `${rect.bottom + window.scrollY + 4}px`;
        autocompleteDropdown.style.width = `${Math.max(180, rect.width)}px`;
    }

    function hideAutocomplete() {
        autocompleteDropdown.style.display = 'none';
        activeAutocompleteInput = null;
        autocompleteSelectedIndex = -1;
    }

    // Keyboard and Event listeners for inputs
    document.addEventListener('input', (e) => {
        const target = e.target;
        if (target.matches('#computed-variable-formula, .action-var-value, .variable-compare-left, .variable-compare-right, .action-var-min, .action-var-max')) {
            showAutocomplete(target);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (autocompleteDropdown.style.display !== 'block') return;

        const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            items[autocompleteSelectedIndex]?.classList.remove('active');
            autocompleteSelectedIndex = (autocompleteSelectedIndex + 1) % items.length;
            items[autocompleteSelectedIndex]?.classList.add('active');
            items[autocompleteSelectedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            items[autocompleteSelectedIndex]?.classList.remove('active');
            autocompleteSelectedIndex = (autocompleteSelectedIndex - 1 + items.length) % items.length;
            items[autocompleteSelectedIndex]?.classList.add('active');
            items[autocompleteSelectedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            const activeItem = items[autocompleteSelectedIndex];
            if (activeItem) {
                selectAutocompleteItem(activeItem.dataset.value, activeItem.dataset.query);
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            hideAutocomplete();
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#autocomplete-dropdown') && e.target !== activeAutocompleteInput) {
            hideAutocomplete();
        }
    });

    // Sound Management
    let tickAudio = new Audio();
    tickAudio.loop = true;

    // --- DATA I/O FUNCTIONS ---
    function getFullState() { return { wheelsData, variableTemplate, collectionTemplate, macros, entities, computedVariables, conditionalRules, projectSettings, itemDatabase, tagDatabase }; }
    function throttledSaveState(isUserAction = true) { 
        clearTimeout(saveTimeout); 
        saveTimeout = setTimeout(() => { 
            try { 
                const state = getFullState();
                localStorage.setItem('wheelEngineSaveData', JSON.stringify(state)); 
                if (isUserAction) {
                    pushHistory(state);
                    performAutoBackup(state);
                }
            } catch (e) { 
                console.error("Lỗi khi lưu dữ liệu:", e); 
                showNotification("Lỗi: Không thể tự động lưu.", true); 
            } 
        }, 1000); 
    }

    function performAutoBackup(state) {
        if (!projectSettings || projectSettings.autoBackup === false) return;
        try {
            const backups = JSON.parse(localStorage.getItem('wheelEngineBackups') || '[]');
            const newBackup = {
                timestamp: new Date().toLocaleString(),
                data: state
            };
            backups.unshift(newBackup);
            if (backups.length > 5) {
                backups.pop();
            }
            localStorage.setItem('wheelEngineBackups', JSON.stringify(backups));
            updateBackupListUI();
        } catch (e) {
            console.error("Lỗi khi thực hiện sao lưu tự động:", e);
        }
    }

    function triggerAutoBackup() {
        performAutoBackup(getFullState());
    }

    function updateBackupListUI() {
        if (!backupListSelect) return;
        try {
            const backups = JSON.parse(localStorage.getItem('wheelEngineBackups') || '[]');
            if (backups.length === 0) {
                backupListSelect.innerHTML = '<option value="">-- Không có bản sao lưu nào --</option>';
                restoreBackupBtn.disabled = true;
                return;
            }
            backupListSelect.innerHTML = backups.map((b, idx) => `
                <option value="${idx}">${b.timestamp} (${Object.keys(b.data.wheelsData || {}).length} vòng quay)</option>
            `).join('');
            restoreBackupBtn.disabled = false;
        } catch (e) {
            backupListSelect.innerHTML = '<option value="">-- Lỗi khi đọc bản sao lưu --</option>';
            restoreBackupBtn.disabled = true;
        }
    }

    function pushHistory(state) {
        const stateStr = JSON.stringify(state);
        if (historyIndex >= 0 && historyStack[historyIndex] === stateStr) return;
        
        if (historyIndex < historyStack.length - 1) {
            historyStack = historyStack.slice(0, historyIndex + 1);
        }
        historyStack.push(stateStr);
        if (historyStack.length > MAX_HISTORY) {
            historyStack.shift();
        } else {
            historyIndex++;
        }
        updateHistoryButtonsUI();
    }

    function undo() {
        if (historyIndex > 0) {
            historyIndex--;
            loadState(JSON.parse(historyStack[historyIndex]), false, true);
        } else {
            showNotification("Không còn gì để hoàn tác.");
        }
    }

    function redo() {
        if (historyIndex < historyStack.length - 1) {
            historyIndex++;
            loadState(JSON.parse(historyStack[historyIndex]), false, true);
        } else {
            showNotification("Không còn gì để làm lại.");
        }
    }

    function updateHistoryButtonsUI() {
        const undoBtn = document.getElementById('undo-btn');
        const redoBtn = document.getElementById('redo-btn');
        if (undoBtn) undoBtn.disabled = historyIndex <= 0;
        if (redoBtn) redoBtn.disabled = historyIndex >= historyStack.length - 1;
    }

    function loadState(stateObject, fromFile = false, isSilent = false) {
        if (!stateObject || typeof stateObject !== 'object') {
            showNotification("Lỗi: Dữ liệu không hợp lệ.", true); return;
        }
        variableTemplate = stateObject.variableTemplate || {};
        Object.values(variableTemplate).forEach(v => { if (typeof v.displayInStats === 'undefined') { v.displayInStats = true; } });
        collectionTemplate = stateObject.collectionTemplate || {};
        itemDatabase = stateObject.itemDatabase || {};
        Object.values(itemDatabase).forEach(item => { if (item.priority === undefined) item.priority = 10; });
        tagDatabase = stateObject.tagDatabase || {};
        macros = stateObject.macros || {};
        entities = stateObject.entities || {};
        // Migrate entity data structure to include manualBonus and itemBonus
        Object.values(entities).forEach(entity => {
            Object.values(entity.variables).forEach(v => {
                if (v.bonus !== undefined && v.manualBonus === undefined) {
                    v.manualBonus = v.bonus; // Assume existing bonus is manual
                    delete v.bonus;
                }
                if (v.manualBonus === undefined) v.manualBonus = 0;
                if (v.itemBonus === undefined) v.itemBonus = 0;
            });
        });
        conditionalRules = stateObject.conditionalRules || [];
        conditionalRules.forEach(rule => { if (rule.conditions) { rule.blocks = [{ type: 'if', conditions: rule.conditions, actions: rule.actions }]; delete rule.conditions; delete rule.actions; } });
        if (Object.values(itemDatabase).length > 0) { const firstCollectionId = Object.keys(collectionTemplate)[0]; Object.values(itemDatabase).forEach(item => { if (!item.collectionId && firstCollectionId) { item.collectionId = firstCollectionId; } if (!item.tags) { item.tags = []; } }); }
        Object.values(entities).forEach(entity => { if (!entity.collections) entity.collections = {}; Object.keys(collectionTemplate).forEach(collectionId => { if(!entity.collections[collectionId]) { entity.collections[collectionId] = []; } }); });
        activeEntityId = Object.keys(entities)[0] || null;
        wheelsData = stateObject.wheelsData || {};
        const migrateActions = (actions) => {
            if (!actions) return [];
            return actions.map(action => {
                if (action.type === 'removeRandomItem') return { type: 'removeItems', targetCollection: action.targetCollection || action.target, mode: 'random', amountType: 'specific', amountValue1: '1' };
                if (action.type === 'clearCollection') return { type: 'removeItems', targetCollection: action.targetCollection || action.target, amountType: 'all' };
                return action;
            });
        };
        Object.values(wheelsData).forEach(wheel => { if(wheel.segments) wheel.segments.forEach(segment => segment.actions = migrateActions(segment.actions)); });
        Object.values(macros).forEach(macro => macro.actions = migrateActions(macro.actions));
        conditionalRules.forEach(rule => { if(rule.blocks) rule.blocks.forEach(block => block.actions = migrateActions(block.actions)); });
        computedVariables = stateObject.computedVariables || [];
        projectSettings = stateObject.projectSettings || {};
        if(projectSettings.tickSoundData) { tickAudio.src = projectSettings.tickSoundData; }
        activeEditor = { type: null, id: null };
        editingEntityId = null;
        loadWheel(Object.keys(wheelsData)[0] || null);
        if (!isSilent) {
            const message = fromFile ? "Đã import dự án thành công!" : "Đã tải lại phiên làm việc trước!";
            showNotification(message);
        }
        if (historyStack.length === 0) pushHistory(getFullState());
        updateHistoryButtonsUI();
        updateBackupListUI();
        loadUserTemplates();
    }
    function handleExport() { const state = getFullState(); const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state)); const downloadAnchorNode = document.createElement('a'); downloadAnchorNode.setAttribute("href", dataStr); downloadAnchorNode.setAttribute("download", `wheel-engine-project_${new Date().toISOString().slice(0,10)}.json`); document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove(); showNotification("Đã xuất file dự án!"); }
    function handleImport(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const newState = JSON.parse(e.target.result); showConfirmationModal("Import sẽ ghi đè lên toàn bộ dự án hiện tại. Bạn có chắc chắn?", () => { loadState(newState, true); }); } catch (error) { showNotification("Lỗi: File JSON không hợp lệ.", true); } finally { importFileInput.value = ''; } }; reader.readAsText(file); }
    function handleExportEntities() { if (Object.keys(entities).length === 0) { showNotification("Không có thực thể nào để export.", true); return; } const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entities)); const downloadAnchorNode = document.createElement('a'); downloadAnchorNode.setAttribute("href", dataStr); downloadAnchorNode.setAttribute("download", `wheel-engine-entities_${new Date().toISOString().slice(0,10)}.json`); document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove(); showNotification("Đã xuất file dữ liệu thực thể!"); }
    function handleImportEntities(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function(e) { try { const newEntities = JSON.parse(e.target.result); if (typeof newEntities !== 'object' || newEntities === null || Array.isArray(newEntities)) { throw new Error("File không chứa dữ liệu thực thể hợp lệ."); } showConfirmationModal("Import sẽ ghi đè lên toàn bộ danh sách thực thể hiện tại. Bạn có chắc chắn?", () => { entities = newEntities; activeEntityId = Object.keys(entities)[0] || null; editingEntityId = null; loadState(getFullState()); showNotification("Đã import danh sách thực thể thành công!"); }); } catch (error) { showNotification(`Lỗi: ${error.message}`, true); } finally { importEntitiesInput.value = ''; } }; reader.readAsText(file); }

    // --- MEDIA HELPERS ---
    function handleFileUpload(file, callback) { if (!file) { callback(''); return; }; const reader = new FileReader(); reader.onload = (e) => callback(e.target.result); reader.readAsDataURL(file); }
    function playSound(soundData) { if (!soundData) return; try { const audio = new Audio(soundData); audio.play().catch(e => console.error("Audio playback error:", e)); } catch (e) { console.error("Invalid audio data:", e); } }

    // --- APP NAVIGATION ---
    function setPresentationMode(enabled) { isPresentationMode = enabled; appContainer.classList.toggle('presentation-mode', isPresentationMode); const toggleModeText = document.getElementById('toggle-mode-text'); const icon = toggleModeBtn.querySelector('svg'); if (isPresentationMode) { toggleModeText.textContent = "Sửa"; icon.innerHTML = `<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm-5 0H6v3h4V4zM6 9v3h4V9H6zm5 0v3h4V9h-4zM5 4H1v3h4V4zm-4 5v3h4V9H1z"/>`; navLinks[0].click(); } else { toggleModeText.textContent = "Chơi"; icon.innerHTML = `<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>`; } }
    toggleModeBtn.addEventListener('click', () => setPresentationMode(!isPresentationMode));
    navLinks.forEach(link => { link.addEventListener('click', () => { if (isSpinning) return; if (link.dataset.page === 'logic-brain' && isPresentationMode) { setPresentationMode(false); } navLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); const pageId = link.dataset.page + '-page'; appPages.forEach(p => p.classList.remove('active')); document.getElementById(pageId)?.classList.add('active'); if (link.dataset.page === 'logic-brain') updateAllUI(); }); });
    logicSubNavLinks.forEach(link => { link.addEventListener('click', () => { logicSubNavLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); const subpageId = link.dataset.subpage + '-subpage'; logicSubPages.forEach(p => p.classList.remove('active')); document.getElementById(subpageId)?.classList.add('active'); if (link.dataset.subpage === 'logic-map') { renderLogicMap(); } }); });
    sidebarNav.addEventListener('click', (e) => { if (e.target.matches('.sidebar-tab-btn')) { const tabId = e.target.dataset.tab; sidebarNav.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active')); e.target.classList.add('active'); sidebarTabContent.querySelectorAll('.sidebar-tab').forEach(tab => tab.classList.toggle('active', tab.id === tabId)); } });
    
    // --- LOGIC MAP FUNCTION ---
    // --- LOGIC MAP FUNCTION ---
    function renderLogicMap() {
        const nodes = [];
        const edges = [];
        const edgeGroups = {};
        
        Object.keys(wheelsData).forEach(wheelName => {
            nodes.push({ id: wheelName, label: wheelName, shape: 'box' });
        });
        
        Object.keys(wheelsData).forEach(wheelName => {
            const wheel = wheelsData[wheelName];
            if (wheel.segments) {
                wheel.segments.forEach(segment => {
                    const goToWheelAction = segment.actions?.find(a => a.type === 'goToWheel' && a.target);
                    if (goToWheelAction) {
                        const key = `${wheelName}->${goToWheelAction.target}`;
                        if (!edgeGroups[key]) {
                            edgeGroups[key] = { from: wheelName, to: goToWheelAction.target, segments: [] };
                        }
                        edgeGroups[key].segments.push(segment.text);
                    }
                });
            }
            if (wheel.settings?.defaultLink && wheel.settings.defaultLink !== 'None') {
                edges.push({ 
                    from: wheelName, 
                    to: wheel.settings.defaultLink, 
                    label: 'Liên kết mặc định', 
                    arrows: 'to', 
                    dashes: true 
                });
            }
        });
        
        Object.values(edgeGroups).forEach(group => {
            const label = `Trúng ô: '${group.segments.join("', '")}'`;
            edges.push({ from: group.from, to: group.to, label: label, arrows: 'to' });
        });
        
        const data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges),
        };
        
        const accentColor = projectSettings.themeAccent || '#ffd000';
        const bgColor = projectSettings.themeBg || '#121212';
        const nodeBg = adjustColorBrightness(bgColor, 10);
        
        const options = {
            edges: {
                color: { color: '#888888', highlight: accentColor },
                font: { color: '#aaaaaa', size: 11, strokeWidth: 0, face: 'Inter' }
            },
            nodes: {
                shape: 'box',
                margin: 12,
                borderWidth: 2,
                color: {
                    background: nodeBg,
                    border: accentColor,
                    highlight: { background: accentColor, border: '#ffffff' }
                },
                font: { color: '#f8fafc', size: 14, face: 'Outfit' }
            },
            physics: true,
        };
        
        if (edges.length > 0) {
            options.layout = { hierarchical: { direction: "UD", sortMethod: "directed" } };
            options.physics = false;
        }
        new vis.Network(logicMapContainer, data, options);
    }

    // --- [REFACTORED] CORE LOGIC (STATS & ACTIONS) ---
    function getActiveEntity() { return (activeEntityId && entities[activeEntityId]) ? entities[activeEntityId] : null; }
    function getActiveVariables() { return getActiveEntity()?.variables || {}; }
    const PROTECTED_MATH = ['floor', 'ceil', 'round', 'random', 'abs', 'min', 'max', 'sqrt', 'pow', 'sin', 'cos', 'tan'];

    function getVariableTotalValue(entity, varName) {
        if (!entity || !entity.variables) return 0;
        const varData = entity.variables[varName];
        if (!varData) return 0;
        let totalValue = (varData.base || 0) + (varData.manualBonus || 0) + (varData.itemBonus || 0);
        
        // Apply status min/max/override constraints if any
        if (entity.statuses) {
            entity.statuses.forEach(status => {
                if (status.effects) {
                    status.effects.forEach(effect => {
                        let target = effect.target;
                        if ([
                            'highest_var', 'lowest_var', 
                            'highest_var_latest', 'lowest_var_latest', 
                            'highest_bs_var', 'lowest_bs_var', 
                            'highest_bs_earliest', 'highest_bs_latest',
                            'lowest_bs_earliest', 'lowest_bs_latest',
                            'earliest_var', 'latest_var'
                        ].includes(target)) {
                            const globals = calculateGlobalStats(entity);
                            target = globals[target];
                        }
                        
                        if (target === varName) {
                            const val = parseFloat(evaluateFormula(effect.value, { _evaluatingStatus: true }, entity.id)) || 0;
                            if (effect.operator === 'min') {
                                totalValue = Math.max(totalValue, val);
                            } else if (effect.operator === 'max') {
                                totalValue = Math.min(totalValue, val);
                            } else if (effect.operator === 'override') {
                                totalValue = val;
                            }
                        }
                    });
                }
            });
        }
        return totalValue;
    }

    function evaluateFormula(formula, tempVariables = {}, contextEntityId = activeEntityId) {
        if (typeof formula !== 'string' || formula.trim() === '') return formula;
        addTraceEntry(`Tính công thức: ${formula}`, 'formula');
        const contextEntity = contextEntityId && entities[contextEntityId];
        if (!contextEntity) return formula;

        // Add Global Variables to tempVariables for this evaluation
        const globals = tempVariables._evaluatingStatus ? {} : calculateGlobalStats(contextEntity);
        const combinedVars = { ...globals, ...tempVariables };

        let expression = formula.replace(/([a-zA-Z_][a-zA-Z0-9_]*)/g, (match) => {
            if (PROTECTED_MATH.includes(match)) return match; 
            
            // 1. Check temp/global variables
            if (combinedVars.hasOwnProperty(match)) {
                const val = combinedVars[match];
                return typeof val === 'string' ? `'${val.replace(/'/g, "\\'")}'` : val;
            }

            // 2. Check for "bs_" prefix (Base Stats)
            if (match.startsWith('bs_')) {
                const realVarName = match.substring(3);
                const varData = contextEntity.variables[realVarName];
                if (varData !== undefined) return varData.base || 0;
            }

            // 3. Check entity variables (Total Value)
            const varData = contextEntity.variables[match];
            if (varData !== undefined) {
                const totalValue = tempVariables._evaluatingStatus 
                    ? (varData.base || 0) + (varData.manualBonus || 0) + (varData.itemBonus || 0)
                    : getVariableTotalValue(contextEntity, match);
                return typeof totalValue === 'string' ? `'${totalValue.replace(/'/g, "\\'")}'` : totalValue;
            }

            // 4. Check Computed Variables
            const compVar = computedVariables.find(cv => cv.name === match);
            if (compVar && compVar.formula) {
                if (tempVariables._evaluating === match) return 0;
                return evaluateFormula(compVar.formula, { ...tempVariables, _evaluating: match }, contextEntityId);
            }

            return match;
        });
        try {
            return Function(`'use strict'; const {floor, ceil, round, random, abs, min, max, sqrt, pow, sin, cos, tan} = Math; return (${expression})`)();
        } catch (e) {
            return formula;
        }
    }

function calculateGlobalStats(entity) {
        if (!entity || !entity.variables) return {};
        const vars = entity.variables;
        const keys = Object.keys(vars);
        if (keys.length === 0) return {};

        const rollOrder = entity.variableRollOrder || [];
        const chronologicalKeys = [...keys.filter(k => !rollOrder.includes(k)), ...rollOrder.filter(k => keys.includes(k))];

        // Filter for base stat variables only
        const baseStatKeys = keys.filter(key => key.startsWith('bs_'));
        const baseStatChronologicalKeys = [...baseStatKeys.filter(k => !rollOrder.includes(k)), ...baseStatKeys.filter(k => keys.includes(k))];

        let highestVal = -Infinity, lowestVal = Infinity;
        let highestVar = '', lowestVar = '';

        let highestValLatest = -Infinity, lowestValLatest = Infinity;
        let highestVarLatest = '', lowestVarLatest = '';

        let highestBsVal = -Infinity, lowestBsVal = Infinity;
        let highestBsVar = '', lowestBsVar = '';
        
        // Base stat specific tie-breaking tracking
        let highestBsEarliestVal = -Infinity, highestBsLatestVal = -Infinity;
        let highestBsEarliestVar = '', highestBsLatestVar = '';
        let lowestBsEarliestVal = Infinity, lowestBsLatestVal = Infinity;
        let lowestBsEarliestVar = '', lowestBsLatestVar = '';

        chronologicalKeys.forEach((key) => {
            const val = getVariableTotalValue(entity, key);

            // Total stats - earliest tie break (strict comparison)
            if (val > highestVal) { highestVal = val; highestVar = key; }
            if (val < lowestVal) { lowestVal = val; lowestVar = key; }

            // Total stats - latest tie break (non-strict comparison)
            if (val >= highestValLatest) { highestValLatest = val; highestVarLatest = key; }
            if (val <= lowestValLatest) { lowestValLatest = val; lowestVarLatest = key; }
        });

        baseStatChronologicalKeys.forEach((key) => {
            const bs = vars[key].base || 0;

            // Base stats - earliest tie break (strict comparison)
            if (bs > highestBsVal) { highestBsVal = bs; highestBsVar = key; }
            if (bs < lowestBsVal) { lowestBsVal = bs; lowestBsVar = key; }
            
            // Base stat earliest/latest tracking for tie-breaking
            if (bs > highestBsEarliestVal) { 
                highestBsEarliestVal = bs; 
                highestBsEarliestVar = key; 
            }
            if (bs >= highestBsLatestVal) { 
                highestBsLatestVal = bs; 
                highestBsLatestVar = key; 
            }
            if (bs < lowestBsEarliestVal) { 
                lowestBsEarliestVal = bs; 
                lowestBsEarliestVar = key; 
            }
            if (bs <= lowestBsLatestVal) { 
                lowestBsLatestVal = bs; 
                lowestBsLatestVar = key; 
            }
        });

        return {
            highest_val: highestVal === -Infinity ? 0 : highestVal,
            lowest_val: lowestVal === Infinity ? 0 : lowestVal,
            highest_var: highestVar,
            lowest_var: lowestVar,
            highest_var_latest: highestVarLatest,
            lowest_var_latest: lowestVarLatest,
            highest_bs_var: highestBsVar,
            lowest_bs_var: lowestBsVar,
            highest_bs_earliest: highestBsEarliestVar,
            highest_bs_latest: highestBsLatestVar,
            lowest_bs_earliest: lowestBsEarliestVar,
            lowest_bs_latest: lowestBsLatestVar,
            lowest_bs_source_wheel_id: lowestBsVar ? (vars[lowestBsVar]?.sourceWheelId || '') : '',
            highest_bs_source_wheel_id: highestBsVar ? (vars[highestBsVar]?.sourceWheelId || '') : '',
             earliest_var: chronologicalKeys[0] || '',
             latest_var: chronologicalKeys[chronologicalKeys.length - 1] || ''
          };
    }

    /**
     * Master function to update the entity's entire state.
     * This is the single source of truth for all stat updates.
     */
    function recalculateActiveEntityStats() {
        const entity = getActiveEntity();
        if (!entity) {
            updateAllUI();
            return;
        }

        // 1. Initialize & Reset
        Object.values(entity.variables).forEach(v => {
            if (v.manualBonus === undefined) v.manualBonus = 0;
            v.itemBonus = 0;
        });

        // 2. Calculate Item Bonuses
        const itemMap = new Map(Object.values(itemDatabase).map(item => [item.name, item]));
        Object.values(entity.collections).flat().forEach(itemName => {
            const item = itemMap.get(itemName);
            if (item?.effects) {
                item.effects.forEach(effect => {
                    const targetVar = entity.variables[effect.target || effect.variableId];
                    if (targetVar) {
                        const value = parseFloat(evaluateFormula(effect.value)) || 0;
                        if (effect.operator === '+=') targetVar.itemBonus += value;
                        else if (effect.operator === '-=') targetVar.itemBonus -= value;
                        else if (effect.operator === '=') targetVar.itemBonus = value; // rare but possible
                    }
                });
            }
        });

        // 3. Calculate Status Effects
        if (entity.statuses) {
            entity.statuses.forEach(status => {
                if (status.effects) {
                    status.effects.forEach(effect => {
                        const targetVar = entity.variables[effect.target];
                        if (targetVar) {
                            const value = parseFloat(evaluateFormula(effect.value)) || 0;
                            if (effect.operator === '+=') targetVar.itemBonus += value;
                            else if (effect.operator === '-=') targetVar.itemBonus -= value;
                            else if (effect.operator === '=') targetVar.itemBonus = value;
                        }
                    });
                }
            });
        }

        // 4. Evaluate authoritative logic
        evaluateAllRules(0);

        // 4. Update UI
        updateAllUI();
    }
    
    /**
     * Evaluates all rules (computed, conditional) iteratively until no more changes occur.
     */
    function evaluateAllRules(depth = 0) {
        if (!activeEntityId) return;
        if (depth > 15) {
            showNotification("Cảnh báo: Logic quá phức tạp hoặc bị lặp vô tận (Recursion Limit).", true);
            return;
        }
        
        let stateChangedInPass = false;
        const activeEntity = getActiveEntity();
        if (!activeEntity) return;

        // Apply computed variables
        computedVariables.forEach(compVar => {
            if (!compVar.formula) return;
            // Computed variables are essentially dynamic rules that set a variable value
            // We'll treat them as setting a temporary variable for use in other formulas,
            // OR we can assign them to a base variable if the user named it so.
            // For now, let's just make sure they are available in evaluateFormula if needed.
        });

        // Apply conditional rules
        conditionalRules.forEach(rule => {
            for (const block of rule.blocks) {
                let conditionsMet = false;
                addTraceEntry(`Xét khối: ${rule.name} -> ${block.type.toUpperCase()}`, 'info');
                if (block.type === 'if' || block.type === 'elseif') {
                    const logicOperator = block.logicOperator || 'AND';
                    const results = block.conditions.map(condition => {
                        if (condition.type === 'variableCompare') {
                            const left = evaluateFormula(condition.left), right = evaluateFormula(condition.right);
                            switch (condition.operator) {
                                case '==': return left == right; case '!=': return left != right;
                                case '>': return Number(left) > Number(right); case '<': return Number(left) < Number(right);
                                case '>=': return Number(left) >= Number(right); case '<=': return Number(left) <= Number(right);
                                default: return false;
                            }
                        } else if (condition.type === 'hasItems') {
                            const itemsInCollection = activeEntity.collections[condition.collectionId] || [];
                            return condition.items.every(item => itemsInCollection.includes(item));
                        }
                        return false;
                    });
                    conditionsMet = logicOperator === 'AND' ? results.every(r => r) : results.some(r => r);
                } else if (block.type === 'else') {
                    conditionsMet = true;
                }

                addTraceEntry(`-> Kết quả: ${conditionsMet ? 'THỎA MÃN' : 'KHÔNG THỎA MÃN'}`, conditionsMet ? 'success' : 'info');

                if (conditionsMet) {
                    if (executeActions(block.actions)) {
                        addLogMessage(`Luật <span class="log-highlight">${rule.name}</span> được kích hoạt (khối ${block.type}).`);
                        stateChangedInPass = true;
                    }
                    break; 
                }
            }
        });
        
        // If a rule changed the state (e.g., added an item), re-run to check for cascades.
        if (stateChangedInPass) {
            evaluateAllRules(depth + 1);
        }
    }

    /**
     * Mutates the entity state based on an array of actions. Does not trigger UI updates itself.
     */
    function executeActions(actions, resultContext = null) {
        const activeEntity = getActiveEntity();
        if (!activeEntity) return false;
        
        // Start trace if this is a top-level call (e.g. from spin result)
        const isTopLevel = !!resultContext;
        if (isTopLevel) {
            currentTrace = [];
            addTraceEntry('Bắt đầu thực thi hành động', 'info');
        }

        let dataChanged = false;
        const tempVariables = {}; 
        const itemMap = new Map(Object.values(itemDatabase).map(item => [item.name, item]));

        (actions || []).forEach(action => {
            addTraceEntry(`Thực thi: ${action.type}`, 'action');
            switch (action.type) {
                case 'setVariable': {
                    const activeVars = activeEntity.variables;
                    let { target: varName, targetProperty = 'bonus', operator } = action;

                    // Dynamic target handling (idea.txt)
                    if ([
                        'highest_var', 'lowest_var', 
                        'highest_var_latest', 'lowest_var_latest', 
                        'highest_bs_var', 'lowest_bs_var', 
                        'earliest_var', 'latest_var'
                    ].includes(varName)) {
                        const globals = calculateGlobalStats(activeEntity);
                        varName = globals[varName];
                    }

                    if (!varName || !activeVars[varName]) break;

                    const targetField = (targetProperty === 'base') ? 'base' : 'manualBonus';
                    const oldValue = activeVars[varName][targetField] || 0;
                    
                    let rawValue = action.value;
                    if (resultContext && typeof rawValue === 'string' && rawValue.toUpperCase() === '[RESULT]') rawValue = resultContext.text;
                    const value = (UNARY_OPERATORS.includes(operator) || operator === 'invert') ? 0 : evaluateFormula(rawValue, tempVariables);
                    let finalValue;
                    
                    switch (operator) {
                        case '=': finalValue = value; break;
                        case '+=': finalValue = oldValue + value; break;
                        case '-=': finalValue = oldValue - value; break;
                        case '*=': finalValue = oldValue * value; break;
                        case '/=': finalValue = value !== 0 ? oldValue / value : oldValue; break;
                        case 'ceil': finalValue = Math.ceil(oldValue); break;
                        case 'floor': finalValue = Math.floor(oldValue); break;
                        case 'negate': finalValue = oldValue * -1; break;
                        case 'invert': { const min = evaluateFormula(action.min, tempVariables), max = evaluateFormula(action.max, tempVariables); finalValue = (typeof min === 'number' && typeof max === 'number') ? (min + max) - oldValue : oldValue; break; }
                        default: finalValue = oldValue; break;
                    }
                    if (typeof oldValue === 'string' && operator !== '=') break;
                    
                    if (finalValue !== oldValue) { 
                        addLogMessage(`-> <span class="log-highlight">${varName}.${targetField}</span>: ${oldValue} -> ${finalValue}`);
                        activeVars[varName][targetField] = finalValue;
                        
                        // Track chronological modification order
                        if (!activeEntity.variableRollOrder) {
                            activeEntity.variableRollOrder = [];
                        }
                        const orderIdx = activeEntity.variableRollOrder.indexOf(varName);
                        if (orderIdx !== -1) {
                            activeEntity.variableRollOrder.splice(orderIdx, 1);
                        }
                        activeEntity.variableRollOrder.push(varName);

                        // Save source wheel association
                        activeVars[varName].sourceWheelId = resultContext ? resultContext.sourceWheelId : currentWheelName;
                        
                        dataChanged = true; 
                    }
                    break;
                }
                case 'setRandomVariables': {
                    const activeVars = activeEntity.variables;
                    const { amount: rawAmount, value: rawValue, filter = 'all', targetProperty = 'bonus' } = action;
                    const targetField = (targetProperty === 'base') ? 'base' : 'manualBonus';
                    
                    const amount = parseInt(evaluateFormula(rawAmount, tempVariables), 10) || 0;
                    const targetValue = evaluateFormula(rawValue, tempVariables);
                    
                    if (amount <= 0) break;
                    
                    const keys = Object.keys(activeVars);
                    const varValues = keys.map(k => {
                        const val = (activeVars[k].base || 0) + (activeVars[k].manualBonus || 0) + (activeVars[k].itemBonus || 0);
                        const bs = activeVars[k].base || 0;
                        return { key: k, val, bs };
                    });
                    
                    const rollOrder = activeEntity.variableRollOrder || [];
                    const getChronologicalIndex = (key) => {
                        const idx = rollOrder.indexOf(key);
                        return idx === -1 ? -1 : idx;
                    };
                    
                    if (filter === 'lowest') {
                        varValues.sort((a, b) => {
                            if (a.val !== b.val) return a.val - b.val;
                            return getChronologicalIndex(a.key) - getChronologicalIndex(b.key);
                        });
                    } else if (filter === 'highest') {
                        varValues.sort((a, b) => {
                            if (a.val !== b.val) return b.val - a.val;
                            return getChronologicalIndex(a.key) - getChronologicalIndex(b.key);
                        });
                    } else {
                        // Shuffle for random pick
                        for (let i = varValues.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [varValues[i], varValues[j]] = [varValues[j], varValues[i]];
                        }
                    }
                    
                    const selected = varValues.slice(0, amount);
                    selected.forEach(candidate => {
                        const key = candidate.key;
                        const oldValue = activeVars[key][targetField] || 0;
                        
                        activeVars[key][targetField] = targetValue;
                        addLogMessage(`-> [setRandomVariables]: <span class="log-highlight">${key}.${targetField}</span>: ${oldValue} -> ${targetValue}`);
                        
                        if (!activeEntity.variableRollOrder) activeEntity.variableRollOrder = [];
                        const oIdx = activeEntity.variableRollOrder.indexOf(key);
                        if (oIdx !== -1) activeEntity.variableRollOrder.splice(oIdx, 1);
                        activeEntity.variableRollOrder.push(key);
                        
                        activeVars[key].sourceWheelId = resultContext ? resultContext.sourceWheelId : currentWheelName;
                        
                        dataChanged = true;
                    });
                    break;
                }
                case 'calculateAssign': {
                    if(!action.targetTempVar || !action.sourceCollection) break;
                    let result = 0;
                    const collection = activeEntity.collections[action.sourceCollection] || [];
                    const filterTag = action.filterTag;
                    if (filterTag) {
                        result = collection.filter(itemName => {
                            if (!itemName) return false;
                            const item = itemMap.get(itemName);
                            return item && item.tags && item.tags.includes(filterTag);
                        }).length;
                    } else {
                        result = collection.filter(item => item).length;
                    }
                    tempVariables[action.targetTempVar] = result;
                    addLogMessage(`-> [Tính toán]: ${action.targetTempVar} = ${result}`);
                    break;
                }
                case 'setCollectionSlots': {
                    const { targetCollection, value: rawVal } = action;
                    if (!activeEntity.collections[targetCollection]) break;
                    let valueWithResult = rawVal;
                    if (resultContext && typeof rawVal === 'string' && rawVal.toUpperCase() === '[RESULT]') valueWithResult = resultContext.text;
                    const newSize = parseInt(evaluateFormula(valueWithResult, tempVariables), 10);
                    if (!isNaN(newSize) && newSize >= 0) { addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> được đặt thành ${newSize} ô.`); const currentSlots = activeEntity.collections[targetCollection]; const newSlots = Array(newSize).fill(null).map((_, i) => currentSlots[i] || null); activeEntity.collections[targetCollection] = newSlots; dataChanged = true; }
                    break;
                }
                case 'addToCollection': {
                    const { targetCollection, value } = action;
                    let itemToAddName = value;
                    if (!itemToAddName || (resultContext && typeof itemToAddName === 'string' && itemToAddName.toUpperCase() === '[RESULT]')) {
                        itemToAddName = resultContext?.text;
                    } else if (itemToAddName) {
                        itemToAddName = evaluateFormula(itemToAddName, tempVariables);
                    }
                    if (activeEntity.collections[targetCollection] && itemToAddName) {
                        addToCollection(activeEntityId, targetCollection, itemToAddName);
                        dataChanged = true;
                    }
                    break;
                }
                case 'setItemInSlot': {
                    const { targetCollection, slot, value } = action;
                    const slots = activeEntity.collections[targetCollection];
                    if (!slots) break;
                    let slotFormula = String(slot).replace(/\[CURRENT\]/gi, slots.filter(i => i).length);
                    let valWithResult = (resultContext && String(value).toUpperCase() === '[RESULT]') ? resultContext.text : value;
                    const slotIndex = evaluateFormula(slotFormula, tempVariables) - 1;
                    if (slotIndex >= 0 && slotIndex < slots.length) { const finalValue = String(valWithResult).toUpperCase() === '[NONE]' ? null : valWithResult; addLogMessage(`-> Gán ô #${slotIndex + 1} của <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> thành <span class="log-highlight">${finalValue || 'Trống'}</span>.`); slots[slotIndex] = finalValue; dataChanged = true; }
                    break;
                }
                case 'removeItems': {
                    const { targetCollection, mode = 'random', amountType = 'specific' } = action;
                    const slots = activeEntity.collections[targetCollection];
                    if (!slots) break;
                    let amount = 0;
                    if (amountType === 'specific') amount = parseInt(evaluateFormula(action.amountValue1, tempVariables), 10);
                    else if (amountType === 'range') { const min = parseInt(evaluateFormula(action.amountValue2, tempVariables), 10); const max = parseInt(evaluateFormula(action.amountValue3, tempVariables), 10); if (!isNaN(min) && !isNaN(max)) amount = Math.floor(Math.random() * (max - min + 1)) + min; } 
                    else if (amountType === 'all') amount = slots.filter(item => item).length;
                    if (isNaN(amount) || amount <= 0) break;
                    const filledSlotsIndexes = slots.map((item, i) => item ? i : -1).filter(i => i !== -1);
                    if (filledSlotsIndexes.length === 0) { addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span> không có gì để xóa.`); break; }
                    let indexesToRemove = [];
                    if (mode === 'random') indexesToRemove = [...filledSlotsIndexes].sort(() => 0.5 - Math.random()).slice(0, amount);
                    else if (mode === 'oldest') indexesToRemove = filledSlotsIndexes.slice(0, amount);
                    else if (mode === 'newest') indexesToRemove = filledSlotsIndexes.slice(-amount);
                    if (indexesToRemove.length > 0) { const removedItems = indexesToRemove.map(i => slots[i]); indexesToRemove.forEach(i => slots[i] = null); addLogMessage(`-> Đã xóa ${indexesToRemove.length} vật phẩm: <span class="log-highlight">${removedItems.join(', ')}</span> từ <span class="log-highlight">${collectionTemplate[targetCollection]?.name}</span>.`); dataChanged = true; }
                    break;
                }
                case 'jumpToWheel': {
                    const { targetWheelId } = action;
                    let targetId = targetWheelId;
                    if (targetWheelId === 'lowest_bs_source' || targetWheelId === 'highest_bs_source') {
                        const isLowest = targetWheelId === 'lowest_bs_source';
                        const globals = calculateGlobalStats(activeEntity);
                        const bestVarName = globals[isLowest ? 'lowest_bs_var' : 'highest_bs_var'];
                        const bestVar = activeEntity.variables[bestVarName];
                        targetId = bestVar ? bestVar.sourceWheelId : null;
                    } else if (targetId) {
                        targetId = evaluateFormula(targetId, tempVariables);
                    }
                    if (targetId && wheelsData[targetId]) {
                        let returnWheelId = null;
                        if (resultContext && resultContext.actions) {
                            const goToAct = resultContext.actions.find(a => a.type === 'goToWheel');
                            if (goToAct && wheelsData[goToAct.target]) {
                                returnWheelId = goToAct.target;
                            }
                        }
                        if (!returnWheelId) {
                            const currentLink = wheelsData[currentWheelName]?.settings?.defaultLink;
                            if (currentLink && currentLink !== 'None') {
                                returnWheelId = currentLink;
                            }
                        }
                        if (returnWheelId) {
                            wheelStack.push(returnWheelId);
                            addLogMessage(`-> Lưu đường về vào Stack: <span class="log-highlight">${wheelsData[returnWheelId]?.name || returnWheelId}</span>.`);
                        }
                        action.resolvedJumpTarget = targetId;
                        addLogMessage(`-> Kích hoạt Nhảy Vòng Quay tới: <span class="log-highlight">${wheelsData[targetId].name || targetId}</span>.`);
                        dataChanged = true;
                    }
                    break;
                }
                case 'applyStatus': {
                    let statusData;
                    if (action._inline) {
                        statusData = {
                            id: `inline_status_${Date.now()}`,
                            name: action.statusName,
                            description: action.statusDescription || '',
                            endType: action.endType || 'afterSpins',
                            spinCount: action.spinCount || 3,
                            endWheel: action.endWheel || '',
                            effects: action.effects || [],
                            conditions: [],
                            actions: [],
                            executionTiming: 'immediate',
                            stackBehavior: 'stack'
                        };
                    } else {
                        statusData = statusTemplate[action.targetStatus];
                    }
                    if (activeEntity && statusData) {
                        applyStatus(activeEntityId, statusData);
                        dataChanged = true;
                    }
                    break;
                }
                case 'removeStatus': {
                    const targetId = action.statusName || action.targetStatus;
                    const statusTpl = statusTemplate[targetId];
                    const removeName = statusTpl ? statusTpl.name : targetId;
                    if (activeEntity.statuses && removeName) {
                        const initialLen = activeEntity.statuses.length;
                        activeEntity.statuses = activeEntity.statuses.filter(s => s.name !== removeName);
                        if (activeEntity.statuses.length < initialLen) {
                            addLogMessage(`-> Đã xóa trạng thái: <span class="log-highlight">${removeName}</span>.`);
                            dataChanged = true;
                        } else {
                            addLogMessage(`-> Không tìm thấy trạng thái "${removeName}" để xóa.`);
                        }
                    }
                    break;
                }
                case 'playSound': {
                    if (action.soundData) playSound(action.soundData);
                    break;
                }
            }
        });

        if (dataChanged) {
            throttledSaveState();
        }
        return dataChanged;
    }

    // --- LOGIC MAP FUNCTIONS ---
    function updateLogicMap() {
        const container = document.getElementById('logic-map-container');
        if (!container) return;
        container.innerHTML = '';
        container.className = 'logic-map-grid';

        Object.keys(wheelsData).forEach(wheelName => {
            const wheel = wheelsData[wheelName];
            const card = document.createElement('div');
            card.className = 'logic-map-card';
            
            let linksText = '';
            if (wheel.settings.defaultLink && wheel.settings.defaultLink !== 'None') {
                linksText += `<div class="link-item">➜ Mặc định: <span class="link-target">${wheel.settings.defaultLink}</span></div>`;
            }
            
            const jumpTargets = new Set();
            if (wheel.segments) {
                wheel.segments.forEach(seg => {
                    if (seg.actions) {
                        seg.actions.forEach(act => {
                            if (act.type === 'goToWheel') jumpTargets.add(act.target);
                        });
                    }
                });
            }
            
            jumpTargets.forEach(target => {
                linksText += `<div class="link-item">➜ Nhảy tới: <span class="link-target">${target}</span></div>`;
            });

            card.innerHTML = `
                <h4 style="color: var(--primary-yellow); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; margin-bottom: 12px; font-family: 'Outfit', sans-serif;">${wheelName}</h4>
                <div class="links-container">
                    ${linksText || '<span style="opacity: 0.5; font-size: 0.8rem;">(Không có liên kết)</span>'}
                </div>
            `;
            container.appendChild(card);
        });
    }

    // --- UI UPDATE FUNCTIONS ---
    function updateAllUI() { updateVariableTemplateUI(); updateCollectionTemplateUI(); updateItemDatabaseListUI(); updateTagManagerListUI(); updateMacrosListUI(); updateComputedVariablesListUI(); updateRulesListUI(); updateEntityListUI(); updateActiveEntitySelector(); updateEntityEditorUI(); updateSidebarDisplay(); updateCreatorUI(); updateItemSuggestions(); updateTagSuggestions(); updateProjectSettingsUI(); clearTickSoundBtn.style.display = projectSettings.tickSoundData ? 'inline-block' : 'none'; }
    function updateVariableTemplateUI() { variableTemplateListDiv.innerHTML = ''; Object.keys(variableTemplate).sort().forEach(varName => { const varData = variableTemplate[varName]; const item = document.createElement('div'); item.className = 'list-item variable-item'; item.innerHTML = `<div class="image-preview-container" style="display: ${varData.icon ? 'block' : 'none'}"><img src="${varData.icon || ''}" class="image-preview"></div><div class="variable-name-group item-info"><strong>${varName}</strong></div><div class="display-toggle"><input type="checkbox" id="display-var-${varName}" class="display-var-checkbox" data-varname="${varName}" ${varData.displayInStats ? 'checked' : ''}><label for="display-var-${varName}">Hiển thị</label></div><div class="variable-inputs"><div><label>Base</label><input type="text" class="variable-base-input" value="${varData.base}" data-varname="${varName}"></div><div><label>Bonus</label><input type="text" class="variable-bonus-input" value="0" data-varname="${varName}" disabled></div></div><button class="delete-btn delete-variable-btn" data-varname="${varName}">X</button>`; variableTemplateListDiv.appendChild(item); }); updateVariableSuggestions(); }
    function updateCollectionTemplateUI() { collectionTemplateListUI.innerHTML = ''; Object.values(collectionTemplate).sort((a, b) => a.name.localeCompare(b.name)).forEach(coll => { const li = document.createElement('li'); li.className = 'list-item'; li.innerHTML = `<span class="item-info">${coll.name}</span><button class="delete-btn delete-collection-btn" data-id="${coll.id}">X</button>`; collectionTemplateListUI.appendChild(li); }); updateCollectionSelectorDropdowns(); }
    function updateItemDatabaseListUI() {
        itemDatabaseListContainer.innerHTML = '';
        const searchTerm = (itemSearchInput?.value || '').toLowerCase();
        
        const collections = Object.values(collectionTemplate).sort((a,b) => a.name.localeCompare(b.name));
        const uncategorizedItems = Object.values(itemDatabase).filter(item => !item.collectionId || !collectionTemplate[item.collectionId]);
        
        if (collections.length === 0 || uncategorizedItems.length > 0) {
            collections.push({ id: null, name: 'Chưa Phân Loại' });
        }
        
        collections.forEach(collection => {
            const itemsInCategory = Object.values(itemDatabase).filter(item => {
                if (collection.id === null) {
                    if (item.collectionId && collectionTemplate[item.collectionId]) return false;
                } else {
                    if (item.collectionId !== collection.id) return false;
                }
                
                if (!searchTerm) return true;
                const matchName = item.name.toLowerCase().includes(searchTerm);
                const matchTag = item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                return matchName || matchTag;
            });

            if (searchTerm && itemsInCategory.length === 0) return; // Hide categories with no matches during search

            const categoryWrapper = document.createElement('div');
            const header = document.createElement('div');
            header.className = 'item-category-header';
            
            if (collection.id) {
                header.innerHTML = `<h4>${collection.name}</h4><button class="btn btn-secondary btn-sm add-item-to-category-btn" data-collection-id="${collection.id}">+ Thêm</button>`;
            } else {
                header.innerHTML = `<h4>${collection.name}</h4>`;
            }
            
            categoryWrapper.appendChild(header);
            const list = document.createElement('ul');
            
            if (itemsInCategory.length === 0) {
                list.innerHTML = '<p class="form-hint">Chưa có vật phẩm nào.</p>';
            } else {
                itemsInCategory.sort((a,b) => a.name.localeCompare(b.name)).forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'list-item item-drag-source';
                    li.draggable = true;
                    li.dataset.id = item.id;
                    li.dataset.name = item.name;
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
        const searchTerm = (tagSearchInput?.value || '').toLowerCase();
        
        Object.values(tagDatabase).sort((a,b) => a.name.localeCompare(b.name)).forEach(tag => {
            if (searchTerm && !tag.name.toLowerCase().includes(searchTerm)) return;
            const li = document.createElement('li');
            li.className = 'list-item';
            li.dataset.id = tag.id;
            if(activeEditor.type === 'tag' && tag.id === activeEditor.id) li.classList.add('editing');
            li.innerHTML = `<img src="${tag.icon || 'https://placehold.co/24x24/404040/888?text=?'}" class="tag-manager-item-icon"><span class="item-info">${tag.name || 'Tag không tên'}</span><button class="delete-btn delete-tag-btn" data-id="${tag.id}">X</button>`;
            tagManagerListUI.appendChild(li);
        });
    }
    function updateMacrosListUI() { macrosListUI.innerHTML = ''; Object.values(macros).sort((a,b) => a.name.localeCompare(b.name)).forEach(macro => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = macro.id; if(activeEditor.type === 'macro' && macro.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${macro.name || 'Macro không tên'}</span><button class="delete-btn delete-macro-btn" data-id="${macro.id}">X</button>`; macrosListUI.appendChild(li); }); updateMacroSelectorDropdown(); }
    function updateStatusListUI() { statusListUI.innerHTML = ''; Object.values(statusTemplate).sort((a,b) => a.name.localeCompare(b.name)).forEach(status => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = status.id; if(activeEditor.type === 'status' && status.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${status.name || 'Trạng thái không tên'}</span><button class="delete-btn delete-status-btn" data-id="${status.id}">X</button>`; statusListUI.appendChild(li); }); updateStatusSelectorDropdown(); }
    function updateCollectionSelectorDropdowns() { const optionsHTML = Object.values(collectionTemplate).sort((a, b) => a.name.localeCompare(b.name)).map(coll => `<option value="${coll.id}">${coll.name}</option>`).join(''); actionSetCollectionSlotsTarget.innerHTML = optionsHTML; actionAddToCollectionTarget.innerHTML = optionsHTML; actionSetItemInSlotTarget.innerHTML = optionsHTML; actionRemoveItemsTarget.innerHTML = optionsHTML; itemCategorySelect.innerHTML = optionsHTML; categoryFilterSelect.innerHTML = `<option value="">-- Chọn Danh Mục --</option>${optionsHTML}`; }
    function updateMacroSelectorDropdown() { actionExecuteMacroTarget.innerHTML = ''; Object.values(macros).sort((a,b) => a.name.localeCompare(b.name)).forEach(macro => { const option = document.createElement('option'); option.value = macro.id; option.textContent = macro.name; actionExecuteMacroTarget.appendChild(option); }); }
    function updateStatusSelectorDropdown() { actionApplyStatusTarget.innerHTML = ''; Object.values(statusTemplate).sort((a,b) => a.name.localeCompare(b.name)).forEach(status => { const option = document.createElement('option'); option.value = status.id; option.textContent = status.name; actionApplyStatusTarget.appendChild(option); }); }
    function updateEntityListUI() {
        entityListUI.innerHTML = '';
        const searchTerm = (entitySearchInput?.value || '').toLowerCase();
        
        Object.values(entities).forEach(entity => {
            if (searchTerm && !entity.name.toLowerCase().includes(searchTerm)) return;
            const li = document.createElement('li');
            li.className = 'list-item entity-drag-source';
            li.draggable = true;
            li.dataset.id = entity.id;
            li.dataset.name = entity.name;
            if (editingEntityId === entity.id) li.classList.add('editing');
            li.innerHTML = `<span class="item-info">${entity.name}</span><button class="delete-btn delete-entity-btn" data-id="${entity.id}">X</button>`;
            entityListUI.appendChild(li);
        });
    }
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
            const totalBonus = (varData.manualBonus || 0) + (varData.itemBonus || 0); 
            const item = document.createElement('div'); 
            item.className = 'list-item variable-item'; 
            item.innerHTML = `
                <div class="variable-name-group item-info"><strong>${varName}</strong></div>
                <div class="variable-inputs">
                    <div><label>Base</label><input type="text" class="variable-base-input" value="${varData.base}" data-varname="${varName}" data-entityid="${entity.id}"></div>
                    <div><label>Bonus</label><input type="text" class="variable-bonus-input" value="${totalBonus}" data-varname="${varName}" data-entityid="${entity.id}" disabled></div>
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
                collectionGroup.innerHTML += '<p class="form-hint">Trống</p>'; 
            } else { 
                slots.forEach((item, index) => { 
                    const slotDiv = document.createElement('div'); 
                    slotDiv.className = 'collection-editor-slot'; 
                    slotDiv.innerHTML = `<label>#${index + 1}</label><input type="text" value="${item || ''}" data-entityid="${entity.id}" data-collectionid="${collectionId}" data-slotindex="${index}" list="item-suggestions">`; 
                    collectionGroup.appendChild(slotDiv); 
                }); 
            } 
            entityCollectionsListDiv.appendChild(collectionGroup); 
        }); 
    }

    function updateSidebarDisplay() { updateSidebarTitle(); updateSidebarTabs(); updateEntityStatDisplay(); }
    function updateSidebarTitle() { sidebarTitle.textContent = getActiveEntity()?.name || 'Thông Tin'; }
    function updateSidebarTabs() { 
        const previouslyActiveTabId = sidebarNav.querySelector('.sidebar-tab-btn.active')?.dataset.tab; 
        sidebarNav.querySelectorAll('.dynamic-tab').forEach(el => el.remove()); 
        sidebarTabContent.querySelectorAll('.dynamic-tab-content').forEach(el => el.remove()); 
        
        const activeEntity = getActiveEntity(); 
        if (!activeEntity) { 
            sidebarNav.querySelector('.sidebar-tab-btn[data-tab="stats-tab"]')?.classList.add('active'); 
            document.getElementById('stats-tab')?.classList.add('active'); 
            return; 
        } 

        // Add Status Tab
        const statusTabBtn = document.createElement('button');
        statusTabBtn.className = 'sidebar-tab-btn dynamic-tab';
        statusTabBtn.dataset.tab = 'status-tab';
        statusTabBtn.textContent = 'Trạng Thái';
        sidebarNav.appendChild(statusTabBtn);

        const statusTabContent = document.createElement('div');
        statusTabContent.id = 'status-tab';
        statusTabContent.className = 'sidebar-tab dynamic-tab-content';
        const activeStatuses = activeEntity.statuses || [];
        if (activeStatuses.length === 0) {
            statusTabContent.innerHTML = '<p class="form-hint" style="text-align: center; padding: 2rem;">Chưa có trạng thái nào hoạt động.</p>';
        } else {
            const statusList = document.createElement('div');
            statusList.className = 'status-list';
            activeStatuses.forEach(status => {
                const item = document.createElement('div');
                item.className = 'status-card panel-section';
                item.style.padding = '0.75rem';
                item.style.marginBottom = '0.5rem';
                item.style.fontSize = '0.85rem';
                
                const durationType = status.endType || status.duration_type || status.type || 'afterSpins';
                const remaining = status.spinCount !== undefined ? status.spinCount : (status.remaining_duration !== undefined ? status.remaining_duration : (status.remaining !== undefined ? status.remaining : 0));
                const targetWheel = status.endWheel || status.end_wheel_id || status.targetWheel || '';

                let durationText = '';
                if (durationType === 'afterSpins' || durationType === 'turn_count') durationText = `${remaining} lượt`;
                else if (durationType === 'afterWheel' || durationType === 'wheel_end') durationText = `Hết tại: ${targetWheel || 'VQ hiện tại'}`;

                item.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <strong style="color: var(--primary-yellow);">${status.name}</strong>
                        <span style="opacity: 0.7;">${durationText}</span>
                    </div>
                    <div style="font-size: 0.75rem; opacity: 0.8;">${status.description || 'Không có mô tả'}</div>
                `;
                statusList.appendChild(item);
            });
            statusTabContent.appendChild(statusList);
        }
        sidebarTabContent.appendChild(statusTabContent);

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
                        slotDiv.innerHTML = `<img class="slot-item-icon" src="${item.icon || 'https://placehold.co/32x32/252526/888?text=?'}"><span class="slot-item-name">${itemName}</span>`; 
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
        const tabToActivate = sidebarNav.querySelector(`.sidebar-tab-btn[data-tab="${previouslyActiveTabId}"]`) || sidebarNav.querySelector('.sidebar-tab-btn'); 
        if (tabToActivate) { 
            tabToActivate.click(); 
        } 
    }
    function updateEntityStatDisplay() {
        entityStatsDisplay.innerHTML = '';
        const activeEntity = getActiveEntity();
        if (!activeEntity) {
            entityStatsDisplay.innerHTML = '<p class="form-hint">Không có thực thể nào được chọn.</p>';
            return;
        }

        const activeVars = activeEntity.variables;
        const visibleVars = Object.keys(activeVars).filter(varName => variableTemplate[varName]?.displayInStats).sort();
        
        if (visibleVars.length === 0) {
            entityStatsDisplay.innerHTML = '<p class="form-hint">Không có chỉ số nào được hiển thị.</p>';
            return;
        }

        visibleVars.forEach(varName => {
            const item = document.createElement('div');
            item.className = 'stat-item';
            const varData = activeVars[varName];
            const total = getVariableTotalValue(activeEntity, varName);
            const totalBonus = total - (varData.base || 0);
            const varTpl = variableTemplate[varName] || {};
            
            // Premium look for BS vs Bonus
            const details = totalBonus !== 0 ? 
                `<span class="stat-item-details" title="Base: ${varData.base} | Bonus: ${totalBonus}">(${varData.base} ${totalBonus > 0 ? '+': ''}${totalBonus})</span>` : 
                `<span class="stat-item-details" style="opacity: 0.5;">(bs: ${varData.base})</span>`;

            item.innerHTML = `
                <img src="${varTpl.icon || ''}" class="stat-item-icon" style="display: ${varTpl.icon ? 'block' : 'none'}">
                <span class="stat-item-name">${varName}</span>
                <span class="stat-item-value">${total}</span>
                ${details}
            `;
            entityStatsDisplay.appendChild(item);
        });
    }
    function addLogMessage(message, type = 'info') {
        const li = document.createElement('li');
        li.className = `log-entry log-${type}`;
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        let icon = '●';
        if (type === 'success') icon = '✓';
        else if (type === 'warning') icon = '⚠';
        else if (type === 'error') icon = '✖';

        li.innerHTML = `<span class="log-time">[${timeStr}]</span> <span class="log-icon">${icon}</span> ${message}`;
        gameLog.prepend(li);
        while (gameLog.children.length > (typeof MAX_LOG_ENTRIES !== 'undefined' ? MAX_LOG_ENTRIES : 50)) {
            gameLog.lastChild.remove();
        }
    }
    function loadEntityEditor(entityId) { editingEntityId = entityId; updateEntityListUI(); updateEntityEditorUI(); }
    function updateComputedVariablesListUI() { computedVariablesListUI.innerHTML = ''; computedVariables.forEach(cv => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = cv.id; if(activeEditor.type === 'computed' && cv.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info"><strong>Tổng</strong> = ${cv.formula || '...'}</span><button class="delete-btn delete-computed-variable-btn" data-id="${cv.id}">X</button>`; computedVariablesListUI.appendChild(li); }); }
    function updateRulesListUI() { rulesListUI.innerHTML = ''; conditionalRules.forEach(rule => { const li = document.createElement('li'); li.className = 'list-item'; li.dataset.id = rule.id; if(activeEditor.type === 'conditional' && rule.id === activeEditor.id) li.classList.add('editing'); li.innerHTML = `<span class="item-info">${rule.name || 'Luật không tên'}</span><button class="delete-btn delete-rule-btn" data-id="${rule.id}">X</button>`; rulesListUI.appendChild(li); }); }
    function addTraceEntry(message, type = 'info') {
        currentTrace.push({ message, type, time: new Date().toLocaleTimeString() });
        updateTraceUI();
    }

    function adjustColorBrightness(hex, percent) {
        if (!hex || !hex.startsWith('#')) return hex;
        let num = parseInt(hex.slice(1), 16);
        let amt = Math.round(2.55 * percent);
        let R = (num >> 16) + amt;
        let G = (num >> 8 & 0x00FF) + amt;
        let B = (num & 0x0000FF) + amt;
        R = Math.max(0, Math.min(255, R));
        G = Math.max(0, Math.min(255, G));
        B = Math.max(0, Math.min(255, B));
        return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
    }

    function updateProjectSettingsUI() {
        if (!projectSettings) return;
        themeAccentColorInput.value = projectSettings.themeAccent || '#ffd000';
        themeBgColorInput.value = projectSettings.themeBg || '#121212';
        showWheelBorderCheckbox.checked = projectSettings.showWheelBorder !== false;
        wheelBorderColorInput.value = projectSettings.wheelBorderColor || '#ffffff';
        wheelBorderWidthInput.value = projectSettings.wheelBorderWidth || 5;
        enableConfettiCheckbox.checked = projectSettings.enableConfetti !== false;
        autoBackupCheckbox.checked = projectSettings.autoBackup !== false;

        applyProjectStyles();
    }

    function applyProjectStyles() {
        let dynamicStyle = document.getElementById('dynamic-theme-styles');
        if (!dynamicStyle) {
            dynamicStyle = document.createElement('style');
            dynamicStyle.id = 'dynamic-theme-styles';
            document.head.appendChild(dynamicStyle);
        }
        const accent = projectSettings.themeAccent || '#ffd000';
        const bg = projectSettings.themeBg || '#121212';
        const bgSecondary = adjustColorBrightness(bg, 8);
        const bgTertiary = adjustColorBrightness(bg, 16);
        
        dynamicStyle.textContent = `
            :root {
                --accent-color: ${accent} !important;
                --primary-yellow: ${accent} !important;
                --bg-color: ${bg} !important;
                --surface-bg: ${bg}B3 !important;
                --glass-bg: ${bg}BF !important;
                --accent-glow: 0 0 20px ${accent}4d !important;
                --premium-gradient: linear-gradient(135deg, ${accent} 0%, #d4af37 100%) !important;
            }
        `;
        
        document.body.style.backgroundColor = bg;
        const container = document.querySelector('.app-container');
        if (container) {
            container.style.background = `radial-gradient(circle at top right, ${bgSecondary}, ${bg})`;
        }
        drawWheel();
    }

    function updateTraceUI() {
        if (!logicTraceDisplay) return;
        if (currentTrace.length === 0) {
            logicTraceDisplay.innerHTML = '<p class="form-hint">Quay để xem lịch sử thực thi logic.</p>';
            return;
        }
        logicTraceDisplay.innerHTML = currentTrace.map(entry => `
            <div class="trace-entry trace-${entry.type}">
                <span class="trace-time">[${entry.time}]</span>
                <span class="trace-msg">${entry.message}</span>
            </div>
        `).join('');
        logicTraceDisplay.scrollTop = logicTraceDisplay.scrollHeight;
    }

    const itemPriorityInput = document.getElementById('item-priority-input');
    function loadEditor(type, id) { 
        activeEditor = { type, id }; 
        logicEditorPlaceholder.style.display = 'block'; 
        computedVariableEditorContent.style.display = 'none'; 
        ruleEditorContent.style.display = 'none'; 
        macroEditorContent.style.display = 'none'; 
        statusEditorContent.style.display = 'none'; 
        itemEditor.style.display = 'grid'; 
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
            (rule.blocks || []).forEach((block, index) => ruleBlocksContainer.appendChild(createRuleBlockElement(block, index))); 
            updateRuleEditorButtons(); 
            logicEditorPlaceholder.style.display = 'none'; 
            ruleEditorContent.style.display = 'block'; 
        } else if (type === 'macro') { 
            const macro = macros[id]; 
            if (!macro) return; 
            macroNameInput.value = macro.name; 
            macroActionsContainer.innerHTML = ''; 
            (macro.actions || []).forEach(act => macroActionsContainer.appendChild(createMacroActionRow(act))); 
            logicEditorPlaceholder.style.display = 'none'; 
            macroEditorContent.style.display = 'block'; 
        } else if (type === 'status') {
            const status = statusTemplate[id];
            if (!status) return;
            statusNameInput.value = status.name || '';
            statusDescriptionInput.value = status.description || '';
            statusLogicOperator.value = status.logicOperator || 'AND';
            statusConditionsContainer.innerHTML = '';
            (status.conditions || []).forEach(cond => statusConditionsContainer.appendChild(createRuleConditionRow(cond)));
            statusActionsContainer.innerHTML = '';
            (status.actions || []).forEach(act => statusActionsContainer.appendChild(createMacroActionRow(act)));
            statusEndType.value = status.endType || 'afterSpins';
            statusSpinCount.value = status.spinCount || 3;
            statusEndWheel.value = status.endWheel || '';
            statusEndWheelGroup.style.display = status.endType === 'afterWheel' ? 'block' : 'none';
            statusSpinCountGroup.style.display = status.endType === 'afterSpins' ? 'block' : 'none';
            statusExecutionTiming.value = status.executionTiming || 'immediate';
            statusStackBehavior.value = status.stackBehavior || 'stack';
            logicEditorPlaceholder.style.display = 'none';
            statusEditorContent.style.display = 'block';
        } else if (type === 'item') { 
            const item = itemDatabase[id]; 
            if(!item) return; 
            itemEditorTitle.textContent = `Chỉnh sửa: ${item.name}`; 
            itemNameInput.value = item.name; 
            itemDescriptionInput.value = item.description; 
            itemCategorySelect.value = item.collectionId; 
            itemPriorityInput.value = item.priority || 10;
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
        updateStatusListUI();
        updateItemDatabaseListUI(); 
        updateTagManagerListUI(); 
    }
    function extractActionFromRow(row) {
        const actionType = row.querySelector('.action-type-selector').value;
        const fields = row.querySelector(`.${actionType}-fields`);
        if(!fields) return null;
        let actionData = { type: actionType };
        if (actionType === 'calculateAssign') {
            actionData.targetTempVar = fields.querySelector('.action-calc-target').value.trim();
            actionData.sourceCollection = fields.querySelector('.action-calc-source').value;
            actionData.filterTag = fields.querySelector('.action-calc-tag-filter').value.trim();
            if (actionData.targetTempVar && actionData.sourceCollection) return actionData;
        } else if (actionType === 'setVariable') {
            actionData.target = fields.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_');
            actionData.targetProperty = fields.querySelector('.action-var-target-prop').value;
            actionData.operator = fields.querySelector('.action-var-operator').value;
            if (actionData.operator === 'invert') {
                actionData.min = fields.querySelector('.action-var-min').value.trim();
                actionData.max = fields.querySelector('.action-var-max').value.trim();
            } else if (!UNARY_OPERATORS.includes(actionData.operator)) {
                actionData.value = fields.querySelector('.action-var-value').value.trim();
            }
            if(actionData.target) return actionData;
        } else if (actionType === 'setItemInSlot') {
            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
            actionData.slot = fields.querySelector('.action-slot-value').value.trim();
            actionData.value = fields.querySelector('.action-item-value').value.trim();
            if(actionData.targetCollection && actionData.slot && actionData.value) return actionData;
        } else if (actionType === 'removeItems') {
            Object.assign(actionData, { targetCollection: fields.querySelector('.action-collection-target').value, mode: fields.querySelector('.action-remove-mode').value, amountType: fields.querySelector('.action-remove-amount-type').value, amountValue1: fields.querySelector('.action-remove-amount-v1').value, amountValue2: fields.querySelector('.action-remove-amount-v2').value, amountValue3: fields.querySelector('.action-remove-amount-v3').value, });
            if (actionData.targetCollection) return actionData;
        } else if (actionType === 'setRandomVariables') {
            actionData.amount = fields.querySelector('.action-randvar-amount').value.trim();
            actionData.filter = fields.querySelector('.action-randvar-filter').value;
            actionData.targetProperty = fields.querySelector('.action-randvar-target-prop').value;
            actionData.value = fields.querySelector('.action-randvar-value').value.trim();
            if(actionData.amount && actionData.value) return actionData;
        } else if (actionType === 'addToCollection') {
            actionData.targetCollection = fields.querySelector('.action-collection-target').value;
            actionData.value = fields.querySelector('.action-collection-value').value.trim();
            if(actionData.targetCollection && actionData.value) return actionData;
        } else if (actionType === 'applyStatus') {
            actionData.targetStatus = fields.querySelector('.action-status-select').value;
            if(actionData.targetStatus) return actionData;
        } else if (actionType === 'removeStatus') {
            actionData.statusName = fields.querySelector('.action-status-remove-name').value.trim();
            if(actionData.statusName) return actionData;
        } else if (actionType === 'jumpToWheel') {
            actionData.targetWheelId = fields.querySelector('.action-jump-target-select').value;
            if (actionData.targetWheelId) return actionData;
        } else if (actionType === 'goToWheel') {
            actionData.target = fields.querySelector('.action-goto-target-select').value;
            if (actionData.target) return actionData;
        } else if (actionType === 'executeMacro') {
            actionData.targetMacro = fields.querySelector('.action-execute-macro-select').value;
            if (actionData.targetMacro) return actionData;
        }
        return null;
    }

    function saveActiveEditor() {
        if (!activeEditor.id) return;
        switch(activeEditor.type) {
            case 'computed': {
                const cv = computedVariables.find(c => c.id === activeEditor.id);
                if (cv) {
                    cv.formula = computedVariableFormulaInput.value;
                    updateComputedVariablesListUI();
                }
                break;
            }
            case 'conditional': {
                const rule = conditionalRules.find(r => r.id === activeEditor.id);
                if (rule) {
                    rule.name = ruleNameInput.value.trim();
                    rule.blocks = [];
                    ruleBlocksContainer.querySelectorAll('.rule-block-wrapper').forEach(wrapper => {
                        const blockType = wrapper.dataset.blockType;
                        const blockData = { type: blockType, actions: [], logicOperator: 'AND' };
                        
                        if (blockType !== 'else') {
                            const logicOpSelect = wrapper.querySelector('.block-logic-operator');
                            if (logicOpSelect) blockData.logicOperator = logicOpSelect.value;
                            blockData.conditions = [];
                            wrapper.querySelectorAll('.rule-condition-row').forEach(row => {
                                const conditionType = row.querySelector('.rule-condition-type').value;
                                if (conditionType === 'variableCompare') {
                                    blockData.conditions.push({ type: 'variableCompare', left: row.querySelector('.variable-compare-left').value, operator: row.querySelector('.variable-compare-operator').value, right: row.querySelector('.variable-compare-right').value });
                                } else if (conditionType === 'hasItems') {
                                    blockData.conditions.push({ type: 'hasItems', collectionId: row.querySelector('.item-check-collection').value, items: Array.from(row.querySelectorAll('.item-checklist-row input')).map(i => i.value.trim()).filter(Boolean) });
                                }
                            });
                        }
                        wrapper.querySelectorAll('.macro-action-row').forEach(row => {
                            const actionData = extractActionFromRow(row);
                            if (actionData) blockData.actions.push(actionData);
                        });
                        rule.blocks.push(blockData);
                    });
                    updateRulesListUI();
                    updateRuleEditorButtons();
                }
                break;
            }
            case 'macro': {
                const macro = macros[activeEditor.id];
                if (macro) {
                    macro.name = macroNameInput.value.trim();
                    macro.actions = [];
                    macroActionsContainer.querySelectorAll('.macro-action-row').forEach(row => {
                        const actionData = extractActionFromRow(row);
                        if (actionData) macro.actions.push(actionData);
                    });
                    updateMacrosListUI();
                }
                break;
            }
            case 'status': {
                const status = statusTemplate[activeEditor.id];
                if (status) {
                    status.name = statusNameInput.value.trim();
                    status.description = statusDescriptionInput.value.trim();
                    status.logicOperator = statusLogicOperator.value;
                    status.conditions = [];
                    statusConditionsContainer.querySelectorAll('.rule-condition-row').forEach(row => {
                        const conditionType = row.querySelector('.rule-condition-type').value;
                        if (conditionType === 'variableCompare') {
                            status.conditions.push({ type: 'variableCompare', left: row.querySelector('.variable-compare-left').value, operator: row.querySelector('.variable-compare-operator').value, right: row.querySelector('.variable-compare-right').value });
                        } else if (conditionType === 'hasItems') {
                            status.conditions.push({ type: 'hasItems', collectionId: row.querySelector('.item-check-collection').value, items: Array.from(row.querySelectorAll('.item-checklist-row input')).map(i => i.value.trim()).filter(Boolean) });
                        }
                    });
                    status.actions = [];
                    statusActionsContainer.querySelectorAll('.macro-action-row').forEach(row => {
                        const actionData = extractActionFromRow(row);
                        if (actionData) status.actions.push(actionData);
                    });
                    status.endType = statusEndType.value;
                    status.spinCount = parseInt(statusSpinCount.value, 10) || 1;
                    status.endWheel = statusEndWheel.value;
                    status.executionTiming = statusExecutionTiming.value;
                    status.stackBehavior = statusStackBehavior.value;
                    updateStatusListUI();
                }
                break;
            }
            case 'item': {
                const item = itemDatabase[activeEditor.id];
                if (item) {
                    item.name = itemNameInput.value.trim();
                    item.description = itemDescriptionInput.value.trim();
                    item.collectionId = itemCategorySelect.value;
                    item.priority = parseInt(itemPriorityInput.value, 10) || 10;
                    item.effects = [];
                    itemEffectsContainer.querySelectorAll('.item-effect-row').forEach(row => {
                        const target = row.querySelector('.item-effect-target').value, operator = row.querySelector('.item-effect-operator').value, value = parseFloat(row.querySelector('.item-effect-value').value);
                        if(target && !isNaN(value)) item.effects.push({ target, operator, value });
                    });
                    updateItemDatabaseListUI();
                    updateItemSuggestions();
                }
                break;
            }
            case 'tag': {
                const tag = tagDatabase[activeEditor.id];
                if(tag) {
                    tag.name = tagNameInput.value.trim();
                    updateAllUI();
                }
                break;
            }
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
        
        let headerHTML = `<div class="rule-block-header"><h3 class="rule-block-title">${titleText}</h3>${index > 0 ? `<button class="btn btn-danger btn-sm delete-rule-block-btn" data-index="${index}">Xóa Khối</button>` : ''}</div>`; 
        let conditionsHTML = ''; 
        if (block.type !== 'else') { 
            const conditionsContainer = document.createElement('div'); 
            conditionsContainer.className = 'rule-conditions-container'; 
            (block.conditions || []).forEach(cond => conditionsContainer.appendChild(createRuleConditionRow(cond))); 
            
            const logicOpHTML = `
                <div class="logic-operator-select">
                    <label>Kiểu Logic:</label>
                    <select class="block-logic-operator">
                        <option value="AND" ${block.logicOperator === 'AND' ? 'selected' : ''}>Thỏa mãn TẤT CẢ (AND)</option>
                        <option value="OR" ${block.logicOperator === 'OR' ? 'selected' : ''}>Thỏa mãn MỘT TRONG (OR)</option>
                    </select>
                </div>`;

            const addConditionBtn = document.createElement('button'); 
            addConditionBtn.className = 'btn btn-secondary btn-sm add-rule-condition-btn'; 
            addConditionBtn.textContent = '+ Thêm điều kiện'; 
            const containerWrapper = document.createElement('div'); 
            containerWrapper.innerHTML = logicOpHTML;
            containerWrapper.appendChild(conditionsContainer); 
            containerWrapper.appendChild(addConditionBtn); 
            conditionsHTML = containerWrapper.innerHTML; 
        } 
        blockDiv.innerHTML = headerHTML + (conditionsHTML ? conditionsHTML + '<hr>' : ''); 
        const actionsTitle = document.createElement('h4'); 
        actionsTitle.style.cssText = "margin-top: 1rem; margin-bottom: 0.5rem;"; 
        actionsTitle.textContent = "THÌ (THEN)"; 
        blockDiv.appendChild(actionsTitle); 
        const actionsContainer = document.createElement('div'); 
        actionsContainer.className = 'rule-actions-container'; 
        (block.actions || []).forEach(action => actionsContainer.appendChild(createMacroActionRow(action))); 
        blockDiv.appendChild(actionsContainer); 
        const addActionButton = document.createElement('button'); 
        addActionButton.className = "btn btn-secondary btn-sm add-rule-action-btn"; 
        addActionButton.textContent = "+ Thêm hành động"; 
        
        const saveTemplateBtn = document.createElement('button');
        saveTemplateBtn.className = "btn btn-secondary btn-sm save-rule-template-btn";
        saveTemplateBtn.style.marginLeft = "10px";
        saveTemplateBtn.textContent = "Lưu thành Template";
        
        const btnRow = document.createElement('div');
        btnRow.style.marginTop = "10px";
        btnRow.appendChild(addActionButton);
        btnRow.appendChild(saveTemplateBtn);
        
        blockDiv.appendChild(btnRow); 
        wrapper.appendChild(blockDiv); 
        return wrapper; 
    }
    function updateRuleEditorButtons() { const rule = conditionalRules.find(r => r.id === activeEditor.id); if (!rule) return; const hasElseBlock = rule.blocks.some(b => b.type === 'else'); addRuleElseBtn.style.display = hasElseBlock ? 'none' : 'inline-block'; addRuleIfElseBtn.style.display = hasElseBlock ? 'none' : 'inline-block'; }
    function createRuleConditionRow(condition = { type: 'variableCompare' }) { const row = document.createElement('div'); row.className = 'rule-condition-row'; const collectionOptions = Object.values(collectionTemplate).map(c => `<option value="${c.id}" ${condition.collectionId === c.id ? 'selected' : ''}>${c.name}</option>`).join(''); row.innerHTML = `<select class="rule-condition-type"><option value="variableCompare" ${condition.type === 'variableCompare' ? 'selected' : ''}>So sánh biến số</option><option value="hasItems" ${condition.type === 'hasItems' ? 'selected' : ''}>Sở hữu vật phẩm</option></select><div class="condition-fields-wrapper"><div class="condition-fields variableCompare-fields"><input type="text" class="variable-compare-left" placeholder="Công thức..." value="${condition.left || ''}"><select class="variable-compare-operator"><option value="==" ${condition.operator === '==' ? 'selected' : ''}>==</option><option value="!=" ${condition.operator === '!=' ? 'selected' : ''}>!=</option><option value=">" ${condition.operator === '>' ? 'selected' : ''}>&gt;</option><option value="<" ${condition.operator === '<' ? 'selected' : ''}>&lt;</option><option value=">=" ${condition.operator === '>=' ? 'selected' : ''}>&gt;=</option><option value="<=" ${condition.operator === '<=' ? 'selected' : ''}>&lt;=</option></select><input type="text" class="variable-compare-right" placeholder="Giá trị..." value="${condition.right || '0'}"></div><div class="condition-fields hasItems-fields"><div class="form-group"><label>Thực thể phải có TẤT CẢ các vật phẩm sau trong kho:</label><select class="item-check-collection">${collectionOptions}</select></div><div class="item-checklist-container">${(condition.items || []).map(item => `<div class="item-checklist-row"><input type="text" list="item-suggestions" value="${item}"><button class="btn-danger btn-sm delete-checklist-item-btn">-</button></div>`).join('')}</div><button class="btn btn-secondary btn-sm add-item-to-checklist-btn">+ Thêm vật phẩm</button></div></div><button class="btn-danger btn-delete-action">-</button>`; const typeSelect = row.querySelector('.rule-condition-type'); const fieldsContainer = row.querySelector('.condition-fields-wrapper'); function toggleFields() { const selectedType = typeSelect.value; fieldsContainer.querySelector('.variableCompare-fields').style.display = selectedType === 'variableCompare' ? 'grid' : 'none'; fieldsContainer.querySelector('.hasItems-fields').style.display = selectedType === 'hasItems' ? 'block' : 'none'; } typeSelect.addEventListener('change', toggleFields); toggleFields(); return row; }
    function createSetVariableActionRow(action = {}) { const actionRow = document.createElement('div'); actionRow.className = 'set-variable-action-row'; const op = action.operator || '='; actionRow.innerHTML = `<button class="btn-danger btn-delete-action">-</button><div class="form-row"><div class="form-group"><label>Tên biến</label><input type="text" class="action-var-name" list="variable-suggestions-action" placeholder="Chọn hoặc gõ..." value="${action.target || ''}"></div><div class="form-group"><label>Mục tiêu</label><select class="action-var-target-prop"><option value="bonus" ${action.targetProperty === 'bonus' ? 'selected' : ''}>Bonus</option><option value="base" ${action.targetProperty === 'base' ? 'selected' : ''}>Base</option></select></div></div><div class="form-row"><div class="form-group"><label>Phép toán</label><select class="action-var-operator"><option value="=" ${op === '=' ? 'selected' : ''}>Gán (=)</option><option value="+=" ${op === '+=' ? 'selected' : ''}>Cộng (+=)</option><option value="-=" ${op === '-=' ? 'selected' : ''}>Trừ (-=)</option><option value="*=" ${op === '*=' ? 'selected' : ''}>Nhân (*=)</option><option value="/=" ${op === '/=' ? 'selected' : ''}>Chia (/=)</option><option value="ceil" ${op === 'ceil' ? 'selected' : ''}>Làm tròn lên</option><option value="floor" ${op === 'floor' ? 'selected' : ''}>Làm tròn xuống</option><option value="negate" ${op === 'negate' ? 'selected' : ''}>Đảo ngược dấu</option><option value="invert" ${op === 'invert' ? 'selected' : ''}>Đảo ngược (Min/Max)</option></select></div><div class="form-group value-group"><label>Giá trị / Công thức</label><input type="text" class="action-var-value" placeholder="10, _biến_tạm..." value="${action.value || ''}"></div></div><div class="form-row invert-fields"><div class="form-group"><label>Min</label><input type="text" class="action-var-min" value="${action.min || '1'}"></div><div class="form-group"><label>Max</label><input type="text" class="action-var-max" value="${action.max || '10'}"></div></div>`; const operatorSelect = actionRow.querySelector('.action-var-operator'); const valueGroup = actionRow.querySelector('.value-group'); const invertFields = actionRow.querySelector('.invert-fields'); function toggleValueInputs() { const currentOp = operatorSelect.value; valueGroup.style.display = UNARY_OPERATORS.includes(currentOp) || currentOp === 'invert' ? 'none' : 'grid'; invertFields.style.display = currentOp === 'invert' ? 'grid' : 'none'; } operatorSelect.addEventListener('change', toggleValueInputs); toggleValueInputs(); return actionRow; }
    function createItemEffectRow(effect = {}) { const row = document.createElement('div'); row.className = 'item-effect-row'; const varOptions = Object.keys(variableTemplate).sort().map(varName => `<option value="${varName}" ${effect.target === varName ? 'selected' : ''}>${varName}</option>`).join(''); row.innerHTML = `<select class="item-effect-target">${varOptions}</select><select class="item-effect-operator"><option value="+=" ${effect.operator === '+=' ? 'selected' : ''}>+=</option><option value="-=" ${effect.operator === '-=' ? 'selected' : ''}>-=</option></select><input type="number" class="item-effect-value" value="${effect.value || 0}"><button class="btn-danger btn-delete-action">-</button>`; return row; }
    
    function createStatusEffectRow(effect = {}) {
        const row = document.createElement('div');
        row.className = 'status-effect-row';
        row.style.display = 'grid';
        row.style.gridTemplateColumns = '1.2fr 1fr 1fr auto';
        row.style.gap = '0.5rem';
        row.style.alignItems = 'center';
        row.style.marginBottom = '0.25rem';
        
        const variables = Object.keys(variableTemplate).sort();
        const varOptions = variables.map(varName => `<option value="${varName}" ${effect.target === varName ? 'selected' : ''}>${varName}</option>`).join('');
        const specialOptions = [
            'highest_var', 'lowest_var', 
            'highest_var_latest', 'lowest_var_latest', 
            'highest_bs_var', 'lowest_bs_var', 
            'earliest_var', 'latest_var'
        ].map(opt => `<option value="${opt}" ${effect.target === opt ? 'selected' : ''}>${opt}</option>`).join('');

        let hasCustomTarget = effect.target && !variables.includes(effect.target) && ![
            'highest_var', 'lowest_var', 
            'highest_var_latest', 'lowest_var_latest', 
            'highest_bs_var', 'lowest_bs_var', 
            'earliest_var', 'latest_var'
        ].includes(effect.target);
        
        let customOption = hasCustomTarget ? `<option value="${effect.target}" selected>${effect.target}</option>` : '';

        row.innerHTML = `
            <select class="status-effect-target">
                ${customOption}
                <optgroup label="Biến thường">${varOptions}</optgroup>
                <optgroup label="Biến đặc biệt">${specialOptions}</optgroup>
            </select>
            <select class="status-effect-operator">
                <option value="+=" ${effect.operator === '+=' ? 'selected' : ''}>+= (Cộng)</option>
                <option value="-=" ${effect.operator === '-=' ? 'selected' : ''}>-= (Trừ)</option>
                <option value="=" ${effect.operator === '=' ? 'selected' : ''}>= (Gán)</option>
                <option value="min" ${effect.operator === 'min' ? 'selected' : ''}>min (Giới hạn dưới)</option>
                <option value="max" ${effect.operator === 'max' ? 'selected' : ''}>max (Giới hạn trên)</option>
                <option value="override" ${effect.operator === 'override' ? 'selected' : ''}>override (Đè giá trị)</option>
            </select>
            <input type="text" class="status-effect-value" placeholder="Giá trị..." value="${effect.value || ''}">
            <button class="btn-danger btn-delete-action" style="padding: 0.25rem 0.5rem;">-</button>
        `;
        return row;
    }

    function createMacroActionRow(action = {}) {
        const row = document.createElement('div');
        row.className = 'macro-action-row';
        const collectionOptions = Object.values(collectionTemplate).map(c => `<option value="${c.id}" ${action.targetCollection === c.id ? 'selected' : ''}>${c.name}</option>`).join('');
        const statusOptions = Object.values(statusTemplate).map(s => `<option value="${s.id}" ${action.targetStatus === s.id ? 'selected' : ''}>${s.name}</option>`).join('');
        const wheelNames = Object.keys(wheelsData);
        const wheelOptionsStr = wheelNames.map(name => `<option value="${name}">${name}</option>`).join('');
        row.innerHTML = `
            <button class="btn-danger btn-delete-action">-</button>
            <div class="form-group">
                <label>Loại Hành Động</label>
                <select class="action-type-selector">
                    <option value="calculateAssign">Tính Toán & Gán</option>
                    <option value="setVariable">Gán Giá Trị cho Biến</option>
                    <option value="setRandomVariables">Gán Biến Ngẫu Nhiên</option>
                    <option value="addToCollection">Thêm Vật Phẩm</option>
                    <option value="setItemInSlot">Gán Vào Ô</option>
                    <option value="removeItems">Xóa Vật Phẩm</option>
                    <option value="applyStatus">Nhận Trạng Thái</option>
                    <option value="removeStatus">Xóa Trạng Thái</option>
                    <option value="jumpToWheel">Nhảy Vòng Quay (Luck)</option>
                </select>
            </div>
            <div class="action-fields-container">
                <div class="calculateAssign-fields">
                    <div class="form-group"><label>Lưu kết quả vào Biến Tạm</label><input type="text" class="action-calc-target" placeholder="_ten_bien_tam"></div>
                    <div class="form-group"><label>Hàm Tính Toán</label><select class="action-calc-function"><option value="COUNT">Đếm (COUNT)</option></select></div>
                    <div class="form-group"><label>Từ Kho Chứa</label><select class="action-calc-source">${collectionOptions}</select></div>
                    <div class="form-group tag-filter-group"><label>Lọc theo Tag (Tùy chọn)</label><input type="text" class="action-calc-tag-filter" list="tag-suggestions" placeholder="vũ khí, phép thuật..."></div>
                </div>
                <div class="setVariable-fields">${createSetVariableActionRow({}).innerHTML.replace('<button class="btn-danger btn-delete-action">-</button>','')}</div>
                <div class="setRandomVariables-fields">
                    <div class="form-row">
                        <div class="form-group"><label>Số lượng chỉ số</label><input type="text" class="action-randvar-amount" placeholder="1, 2, random..." value="1"></div>
                        <div class="form-group"><label>Kiểu Lọc</label><select class="action-randvar-filter"><option value="all">Ngẫu nhiên tất cả</option><option value="lowest">Từ chỉ số thấp nhất</option><option value="highest">Từ chỉ số cao nhất</option></select></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>Mục tiêu</label><select class="action-randvar-target-prop"><option value="bonus">Bonus</option><option value="base">Base</option></select></div>
                        <div class="form-group"><label>Giá trị gán</label><input type="text" class="action-randvar-value" placeholder="4, 10..."></div>
                    </div>
                </div>
                <div class="addToCollection-fields"><div class="form-row"><div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div><div class="form-group"><label>Tên vật phẩm</label><input type="text" class="action-collection-value" list="item-suggestions"></div></div></div>
                <div class="setItemInSlot-fields"><div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div><div class="form-row"><div class="form-group"><label>Vị trí ô</label><input type="text" class="action-slot-value" placeholder="1, [CURRENT]+1..."></div><div class="form-group"><label>Tên vật phẩm</label><input type="text" class="action-item-value" placeholder="Kiếm Sắt, [NONE]..." list="item-suggestions"></div></div></div>
                <div class="removeItems-fields">
                     <div class="form-group"><label>Kho Chứa</label><select class="action-collection-target">${collectionOptions}</select></div>
                     <div class="form-row">
                         <div class="form-group"><label>Chế độ</label><select class="action-remove-mode"><option value="random">Ngẫu nhiên</option><option value="oldest">Cũ nhất</option><option value="newest">Mới nhất</option></select></div>
                         <div class="form-group"><label>Loại số lượng</label><select class="action-remove-amount-type"><option value="specific">Số lượng cụ thể</option><option value="range">Khoảng ngẫu nhiên</option><option value="all">Toàn bộ</option></select></div>
                     </div>
                     <div class="remove-items-amount-container">
                         <div class="form-group remove-items-amount-specific active"><label>Giá trị</label><input type="text" class="action-remove-amount-v1" placeholder="2, _biến_tạm..."></div>
                         <div class="form-row remove-items-amount-range">
                             <div class="form-group"><label>Từ</label><input type="text" class="action-remove-amount-v2" placeholder="1"></div>
                             <div class="form-group"><label>Đến</label><input type="text" class="action-remove-amount-v3" placeholder="3"></div>
                         </div>
                     </div>
                </div>
                <div class="applyStatus-fields">
                    <div class="form-group"><label>Trạng Thái</label><select class="action-status-select action-apply-status-target">${statusOptions}</select></div>
                </div>
                <div class="removeStatus-fields">
                    <div class="form-group"><label>Trạng thái cần xóa</label><select class="action-status-remove-select">${statusOptions}</select></div>
                </div>
                <div class="jumpToWheel-fields">
                    <div class="form-group">
                        <label>Đích đến Nhảy Vòng Quay</label>
                        <select class="action-jump-target-select">
                            <option value="lowest_bs_source">Vòng quay nguồn chỉ số cơ bản thấp nhất</option>
                            <option value="highest_bs_source">Vòng quay nguồn chỉ số cơ bản cao nhất</option>
                            ${wheelOptionsStr}
                        </select>
                    </div>
                </div>
            </div>`;
        const typeSelector = row.querySelector('.action-type-selector');
        const fieldsContainer = row.querySelector('.action-fields-container');
        const toggleFields = () => {
            fieldsContainer.querySelectorAll(':scope > div').forEach(el => el.classList.remove('active'));
            const activeFields = fieldsContainer.querySelector(`.${typeSelector.value}-fields`);
            if(activeFields) activeFields.classList.add('active');
        };
        typeSelector.addEventListener('change', toggleFields);
        const removeAmountTypeSelect = row.querySelector('.removeItems-fields .action-remove-amount-type');
        if (removeAmountTypeSelect) {
            const amountContainer = row.querySelector('.removeItems-fields .remove-items-amount-container');
            const specificInput = amountContainer.querySelector('.remove-items-amount-specific');
            const rangeInputs = amountContainer.querySelector('.remove-items-amount-range');
            const toggleRemoveAmountInputs = () => {
                specificInput.style.display = 'none';
                rangeInputs.style.display = 'none';
                const amountType = removeAmountTypeSelect.value;
                if (amountType === 'specific') specificInput.style.display = 'grid';
                else if (amountType === 'range') rangeInputs.style.display = 'grid';
            };
            removeAmountTypeSelect.addEventListener('change', toggleRemoveAmountInputs);
            if (action.type === 'removeItems') toggleRemoveAmountInputs();
        }

        if(action.type) {
            typeSelector.value = action.type;
            const fields = row.querySelector(`.${action.type}-fields`);
            if(fields) {
                if(action.type === 'setVariable'){ fields.querySelector('.action-var-name').value = action.target || ''; fields.querySelector('.action-var-target-prop').value = action.targetProperty || 'bonus'; fields.querySelector('.action-var-operator').value = action.operator || '='; fields.querySelector('.action-var-value').value = action.value || ''; fields.querySelector('.action-var-min').value = action.min || '1'; fields.querySelector('.action-var-max').value = action.max || '10'; fields.querySelector('.action-var-operator').dispatchEvent(new Event('change'));
                } else if (action.type === 'setRandomVariables') { fields.querySelector('.action-randvar-amount').value = action.amount || '1'; fields.querySelector('.action-randvar-filter').value = action.filter || 'all'; fields.querySelector('.action-randvar-target-prop').value = action.targetProperty || 'bonus'; fields.querySelector('.action-randvar-value').value = action.value || '';
                } else if (action.type === 'calculateAssign') { fields.querySelector('.action-calc-target').value = action.targetTempVar || ''; fields.querySelector('.action-calc-source').value = action.sourceCollection || ''; fields.querySelector('.action-calc-tag-filter').value = action.filterTag || '';
                } else if (action.type === 'addToCollection') { fields.querySelector('.action-collection-target').value = action.targetCollection || ''; fields.querySelector('.action-collection-value').value = action.value || '';
                } else if (action.type === 'setItemInSlot') { fields.querySelector('.action-collection-target').value = action.targetCollection || ''; fields.querySelector('.action-slot-value').value = action.slot || ''; fields.querySelector('.action-item-value').value = action.value || '';
                } else if (action.type === 'removeItems') { fields.querySelector('.action-collection-target').value = action.targetCollection || ''; fields.querySelector('.action-remove-mode').value = action.mode || 'random'; fields.querySelector('.action-remove-amount-type').value = action.amountType || 'specific'; fields.querySelector('.action-remove-amount-v1').value = action.amountValue1 || ''; fields.querySelector('.action-remove-amount-v2').value = action.amountValue2 || ''; fields.querySelector('.action-remove-amount-v3').value = action.amountValue3 || ''; removeAmountTypeSelect.dispatchEvent(new Event('change'));
                } else if (action.type === 'applyStatus') {
                    fields.querySelector('.action-apply-status-target').value = action.targetStatus || '';
                } else if (action.type === 'removeStatus') {
                    fields.querySelector('.action-status-remove-select').value = action.statusName || action.targetStatus || '';
                } else if (action.type === 'jumpToWheel') {
                    fields.querySelector('.action-jump-target-select').value = action.targetWheelId || 'lowest_bs_source';
                }
            }
        }
        toggleFields();
        return row;
    }

    // --- WHEEL FUNCTIONS ---
    function drawWheel(segmentsToDraw) { 
        const segments = segmentsToDraw || (wheelsData[currentWheelName]?.segments) || []; 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        if (segments.length === 0) return; 

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const outerRadius = canvas.width / 2 - 10; 
        const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0); 
        let currentAngle = startAngle; 

        // Draw segments
        segments.forEach((segment) => { 
            const arc = (segment.weight / totalWeight) * (2 * Math.PI); 
            ctx.beginPath(); 
            ctx.fillStyle = segment.color; 
            ctx.moveTo(centerX, centerY); 
            ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + arc); 
            ctx.closePath(); 
            ctx.fill(); 
            
            // Text
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

        // Draw border if enabled
        if (projectSettings.showWheelBorder) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = projectSettings.wheelBorderColor || '#ffffff';
            ctx.lineWidth = projectSettings.wheelBorderWidth || 5;
            ctx.stroke();
        }
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
                sourceData = sourceData.filter(item => filters.tags.every(tag => item.tags && item.tags.includes(tag)));
            }
        } else if (sourceType === 'entities') {
            sourceData = Object.values(entities);
        } else {
            return;
        }
        
        if (sourceData.length === 0) {
            showNotification("Không tìm thấy dữ liệu nào khớp.", true);
            return;
        }
        
        const count = sourceData.length;
        currentWheel.segments = sourceData.map((item, index) => {
            const hue = (index * 360 / count) % 360;
            return {
                text: item.name,
                description: item.description || '',
                weight: 1,
                color: hslToHex(hue, 80, 55),
                actions: []
            };
        });
        
        showNotification(`Đã tạo thành công ${count} ô mới!`);
        exitEditMode();
        throttledSaveState();
    }
    function updateVariableSuggestions() { const suggestions = Object.keys(variableTemplate); variableSuggestionsSettings.innerHTML = ''; variableSuggestionsAction.innerHTML = ''; suggestions.forEach(varName => { const optionHTML = `<option value="${varName}"></option>`; variableSuggestionsSettings.innerHTML += optionHTML; variableSuggestionsAction.innerHTML += optionHTML; }); }
    function updateItemSuggestions() { itemSuggestions.innerHTML = ''; Object.values(itemDatabase).forEach(item => { const option = document.createElement('option'); option.value = item.name; itemSuggestions.appendChild(option); });}
    function updateTagSuggestions() { tagSuggestions.innerHTML = ''; Object.values(tagDatabase).forEach(tag => { const option = document.createElement('option'); option.value = tag.name; tagSuggestions.appendChild(option); });}
    function updateCreatorUI() {
        const currentWheel = wheelsData[currentWheelName];
        
        let emptyStateEl = document.getElementById('wheel-empty-state');
        const wheelContainer = document.querySelector('.wheel-container');
        const viewerActions = document.querySelector('.viewer-actions');
        
        if (!currentWheel) {
            wheelTitle.textContent = "Chưa có Vòng Quay";
            wheelSettingsPanel.style.display = 'none';
            segmentListUI.innerHTML = '';
            totalWeightInfo.textContent = '';
            pasteWheelBtn.disabled = copiedWheelData === null;
            
            if (wheelContainer) wheelContainer.style.display = 'none';
            if (viewerActions) viewerActions.style.display = 'none';
            
            if (!emptyStateEl) {
                emptyStateEl = document.createElement('div');
                emptyStateEl.id = 'wheel-empty-state';
                emptyStateEl.className = 'empty-state-card';
                emptyStateEl.innerHTML = ``;
                const displayArea = document.querySelector('.wheel-display-area');
                if (displayArea) displayArea.appendChild(emptyStateEl);
            } else {
                emptyStateEl.style.display = 'flex';
            }
            
            drawWheel();
            return;
        }
        
        if (emptyStateEl) emptyStateEl.style.display = 'none';
        if (wheelContainer) wheelContainer.style.display = 'block';
        if (viewerActions) viewerActions.style.display = 'flex';
        
        wheelTitle.textContent = currentWheelName || "Chưa có Vòng Quay";
        segmentEditorTitle.textContent = editingSegmentIndex !== null ? `Đang Sửa Ô: "${currentWheel.segments[editingSegmentIndex].text}"` : "Thêm / Sửa Ô";
        wheelSettingsPanel.style.display = 'block';
        pasteWheelBtn.disabled = copiedWheelData === null;
        copyWheelBtn.disabled = !currentWheelName;
        
        const wheelNames = Object.keys(wheelsData);
        wheelSelector.innerHTML = '';
        presentationWheelSelector.innerHTML = '';
        wheelNames.forEach(name => {
            const optionHTML = `<option value="${name}">${name}</option>`;
            wheelSelector.innerHTML += optionHTML;
            presentationWheelSelector.innerHTML += optionHTML;
        });
        
        if (currentWheelName) {
            wheelSelector.value = currentWheelName;
            presentationWheelSelector.value = currentWheelName;
        }
        
        deleteWheelBtn.disabled = !currentWheelName;
        const segments = currentWheel.segments || [];
        segmentListUI.innerHTML = '';
        const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0);
        totalWeightInfo.textContent = `Tổng trọng số: ${totalWeight}`;
        
        segments.forEach((segment, index) => {
            const percentage = totalWeight > 0 ? ((segment.weight / totalWeight) * 100).toFixed(1) : 0;
            const li = document.createElement('li');
            li.className = 'list-item segment-list-item';
            li.dataset.index = index;
            li.draggable = true;
            if (index === editingSegmentIndex) li.classList.add('editing');
            li.innerHTML = `<div class="color-box" style="background-color: ${segment.color};"></div><span class="item-info">${segment.text}</span><span class="segment-weight">${percentage}%</span><button class="delete-btn delete-segment-btn" data-index="${index}">X</button>`;
            segmentListUI.appendChild(li);
        });
        
        const settings = currentWheel.settings;
        if (settings) {
            document.getElementById('wheel-settings-title').textContent = `Cài Đặt: "${currentWheelName}"`;
            spinCountVariableInput.value = settings.spinCountVariable || '';
            segmentRemovalModeSelect.value = settings.removalMode || 'none';
            defaultLinkSelect.innerHTML = '<option value="None">Không liên kết</option>';
            wheelNames.forEach(name => {
                if (name !== currentWheelName) {
                    const option = document.createElement('option');
                    option.value = name;
                    option.textContent = name;
                    if (name === settings.defaultLink) option.selected = true;
                    defaultLinkSelect.appendChild(option);
                }
            });
        }
        updateVariableSuggestions();
        drawWheel();
    }
    function loadWheel(name) {
        stopIdleAnimation();
        const oldWheelName = currentWheelName;
        const newWheelName = (!name || !wheelsData[name]) ? (Object.keys(wheelsData)[0] || '') : name;
        
             if (oldWheelName && newWheelName && oldWheelName !== newWheelName) {
                 const activeEntity = getActiveEntity();
                 if (activeEntity && activeEntity.statuses) {
                     let statusExpired = false;
                     activeEntity.statuses = activeEntity.statuses.filter(status => {
                         if (status.endType === 'afterWheel') {
                             const target = status.endWheel || status.targetWheel || '';
                             if (!target || target.trim() === '') {
                                 // No specific target wheel - expire when leaving the wheel where status was applied
                                 if (status.appliedWheelId && status.appliedWheelId !== newWheelName) {
                                     addLogMessage(`-> Trạng thái <span class="log-highlight">${status.name}</span> đã hết hạn khi rời khỏi vòng quay ${status.appliedWheelId}.`);
                                     statusExpired = true;
                                     return false;
                                 }
                             } else {
                                 // Specific target wheel - expire when arriving at the target wheel
                                 if (newWheelName === target) {
                                     addLogMessage(`-> Trạng thái <span class="log-highlight">${status.name}</span> đã hết hạn khi cheg đến vòng quay ${target}.`);
                                     statusExpired = true;
                                     return false;
                                 }
                             }
                         }
                         return true;
                     });
                     if (statusExpired) {
                         recalculateActiveEntityStats();
                     }
                 }
             }
        
        currentWheelName = newWheelName;
        const currentWheel = wheelsData[currentWheelName]; 
        if (currentWheel) { 
            if (!currentWheel.settings) currentWheel.settings = {}; 
            if (!currentWheel.settings.removalMode) currentWheel.settings.removalMode = 'none'; 
            if (typeof currentWheel.settings.spinCountVariable === 'undefined') currentWheel.settings.spinCountVariable = ''; 
            if (typeof currentWheel.settings.defaultLink === 'undefined') currentWheel.settings.defaultLink = 'None'; 
        } 
        exitEditMode(); 
        startIdleAnimation();
    }
    function enterEditMode(index) { editingSegmentIndex = index; const segment = wheelsData[currentWheelName].segments[index]; editingSegmentData = JSON.parse(JSON.stringify(segment)); populateActionPanelFromEditingState(); updateAllActionSummaries(); mainActionBtn.textContent = "Cập Nhật"; cancelEditBtn.style.display = 'block'; pasteActionsBtn.disabled = copiedActions === null; updateCreatorUI(); }
    function populateActionPanelFromEditingState() { resetActionPanelVisuals(); const { text, description, weight, color, actions = [] } = editingSegmentData; segmentTextInput.value = text || ''; segmentDescriptionInput.value = description || ''; segmentWeightInput.value = weight || 1; segmentColorInput.value = color || '#8AC926'; const setVarActions = actions.filter(a => a.type === 'setVariable'); actionSetVariableEnabled.checked = setVarActions.length > 0; setVariableActionsContainer.innerHTML = ''; setVarActions.forEach(action => setVariableActionsContainer.appendChild(createSetVariableActionRow(action))); const executeMacroAction = actions.find(a => a.type === 'executeMacro'); actionExecuteMacroEnabled.checked = !!executeMacroAction; if(executeMacroAction) actionExecuteMacroTarget.value = executeMacroAction.targetMacro; const goToWheelAction = actions.find(a => a.type === 'goToWheel'); actionGoToWheelEnabled.checked = !!goToWheelAction; if(goToWheelAction) actionTargetWheelSelect.value = goToWheelAction.target; const jumpToWheelAction = actions.find(a => a.type === 'jumpToWheel'); actionJumpToWheelEnabled.checked = !!jumpToWheelAction; if(jumpToWheelAction) actionJumpTargetWheelSelect.value = jumpToWheelAction.targetWheelId || 'lowest_bs_source'; const playSoundAction = actions.find(a => a.type === 'playSound'); actionPlaySoundEnabled.checked = !!playSoundAction; if(playSoundAction && playSoundAction.soundData) { clearActionSoundBtn.style.display = 'inline-block'; } const conditionalAction = actions.find(a => a.type === 'conditionalReroll'); actionConditionalEnabled.checked = !!conditionalAction; if (conditionalAction) { conditionOperatorSelect.value = conditionalAction.operator; conditionValueInput.value = conditionalAction.value; conditionRerollsInput.value = conditionalAction.maxRerolls || 1; } const setSlotsAction = actions.find(a => a.type === 'setCollectionSlots'); actionSetCollectionSlotsEnabled.checked = !!setSlotsAction; if(setSlotsAction) { actionSetCollectionSlotsTarget.value = setSlotsAction.targetCollection; actionSetCollectionSlotsValue.value = setSlotsAction.value; } const addToCollectionAction = actions.find(a => a.type === 'addToCollection'); actionAddToCollectionEnabled.checked = !!addToCollectionAction; if(addToCollectionAction) actionAddToCollectionTarget.value = addToCollectionAction.targetCollection; const setItemInSlotAction = actions.find(a => a.type === 'setItemInSlot'); actionSetItemInSlotEnabled.checked = !!setItemInSlotAction; if(setItemInSlotAction) { actionSetItemInSlotTarget.value = setItemInSlotAction.targetCollection; actionSetItemInSlotSlot.value = setItemInSlotAction.slot; actionSetItemInSlotValue.value = setItemInSlotAction.value; } const removeItemsAction = actions.find(a => a.type === 'removeItems'); actionRemoveItemsEnabled.checked = !!removeItemsAction; if(removeItemsAction) { actionRemoveItemsTarget.value = removeItemsAction.targetCollection; actionRemoveItemsMode.value = removeItemsAction.mode || 'random'; actionRemoveItemsAmountType.value = removeItemsAction.amountType || 'specific'; actionRemoveItemsAmountValue1.value = removeItemsAction.amountValue1 || ''; actionRemoveItemsAmountValue2.value = removeItemsAction.amountValue2 || ''; actionRemoveItemsAmountValue3.value = removeItemsAction.amountValue3 || ''; updateRemoveItemsAmountUI(); } const applyStatusAction = actions.find(a => a.type === 'applyStatus' && a._inline); document.getElementById('action-applyStatus-enabled').checked = !!applyStatusAction; if (applyStatusAction) { document.getElementById('action-status-name').value = applyStatusAction.statusName || ''; document.getElementById('action-status-desc').value = applyStatusAction.statusDescription || ''; const endType = applyStatusAction.endType === 'afterWheel' ? 'wheel_end' : 'turn_count'; document.getElementById('action-status-dur-type').value = endType; document.getElementById('action-status-dur-type').dispatchEvent(new Event('change')); if (applyStatusAction.endType === 'afterWheel') { document.getElementById('action-status-dur-val').value = applyStatusAction.endWheel || ''; document.getElementById('action-status-target-wheel').value = applyStatusAction.endWheel || ''; } else { document.getElementById('action-status-dur-val').value = applyStatusAction.spinCount || 3; } const effectsContainer = document.getElementById('segment-status-effects-container'); effectsContainer.innerHTML = ''; (applyStatusAction.effects || []).forEach(effect => { const row = document.createElement('div'); row.className = 'status-effect-row'; row.style.cssText = 'display:flex;gap:0.25rem;align-items:center;margin-bottom:0.25rem;';             const escHtml = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            row.innerHTML = `<select class="effect-target" style="flex:1;"><option value="">Chọn chỉ số</option>${Object.keys(variableTemplate).map(v => `<option value="${v}" ${effect.target === v ? 'selected' : ''}>${v}</option>`).join('')}</select><select class="effect-operator" style="width:60px;"><option value="min" ${effect.operator === 'min' ? 'selected' : ''}>min</option><option value="max" ${effect.operator === 'max' ? 'selected' : ''}>max</option><option value="override" ${effect.operator === 'override' ? 'selected' : ''}>=</option></select><input class="effect-value" type="text" placeholder="Value" style="flex:1;" value="${escHtml(effect.value || '')}"><button type="button" class="btn-delete-effect" style="background:none;border:none;color:var(--danger);cursor:pointer;">X</button>`; row.querySelector('.btn-delete-effect').addEventListener('click', () => row.remove()); effectsContainer.appendChild(row); }); } const removeStatusAction = actions.find(a => a.type === 'removeStatus'); document.getElementById('action-removeStatus-enabled').checked = !!removeStatusAction; if (removeStatusAction) document.getElementById('action-status-remove-name').value = removeStatusAction.statusName || ''; document.querySelectorAll('#segment-action-panel .action-header input').forEach(el => { const details = el.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = el.checked ? 'flex' : 'none'; }); }
    function resetActionPanelVisuals() { document.querySelectorAll('#segment-action-panel .custom-checkbox').forEach(cb => cb.checked = false); document.querySelectorAll('#segment-action-panel .action-details').forEach(el => el.style.display = 'none'); document.querySelectorAll('.action-summary').forEach(el => el.textContent = ''); setVariableActionsContainer.innerHTML = ''; actionSoundUpload.value = ''; clearActionSoundBtn.style.display = 'none'; actionTargetWheelSelect.innerHTML = '<option value="">Chọn Vòng Quay</option>'; actionJumpTargetWheelSelect.innerHTML = '<option value="lowest_bs_source">Vòng quay nguồn chỉ số cơ bản thấp nhất</option><option value="highest_bs_source">Vòng quay nguồn chỉ số cơ bản cao nhất</option>'; Object.keys(wheelsData).forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; if (name !== currentWheelName) { actionTargetWheelSelect.appendChild(option); } const jumpOpt = document.createElement('option'); jumpOpt.value = name; jumpOpt.textContent = name; actionJumpTargetWheelSelect.appendChild(jumpOpt); }); actionSetCollectionSlotsValue.value = ''; actionSetItemInSlotSlot.value = ''; actionSetItemInSlotValue.value = ''; actionRemoveItemsAmountValue1.value = ''; actionRemoveItemsAmountValue2.value = ''; actionRemoveItemsAmountValue3.value = ''; document.getElementById('action-status-name').value = ''; document.getElementById('action-status-desc').value = ''; document.getElementById('action-status-dur-val').value = ''; document.getElementById('action-status-target-wheel').value = ''; document.getElementById('segment-status-effects-container').innerHTML = ''; document.getElementById('action-status-remove-name').value = ''; }
    function updateAllActionSummaries() { const actions = editingSegmentData.actions || []; const summary = (selector, text) => { const el = document.querySelector(selector); if(el) el.textContent = text; }; summary('#action-executeMacro-enabled ~ .action-summary', actions.find(a=>a.type==='executeMacro') ? `-> ${macros[actions.find(a=>a.type==='executeMacro').targetMacro]?.name || '?'}` : ''); summary('#action-setVariable-enabled ~ .action-summary', actions.filter(a=>a.type==='setVariable').length > 0 ? actions.filter(a=>a.type==='setVariable').map(a => `${a.target}.${a.targetProperty||'bonus'} ${a.operator} ${a.value}`).join(', ') : ''); const setSlotsAction = actions.find(a=>a.type==='setCollectionSlots'); summary('#action-setCollectionSlots-enabled ~ .action-summary', setSlotsAction ? `[${collectionTemplate[setSlotsAction.targetCollection]?.name||'?'}] = ${setSlotsAction.value} ô` : ''); const addToCollectionAction = actions.find(a=>a.type==='addToCollection'); summary('#action-addToCollection-enabled ~ .action-summary', addToCollectionAction ? `Thêm vào [${collectionTemplate[addToCollectionAction.targetCollection]?.name||'?'}]` : ''); const goToWheelAction = actions.find(a=>a.type==='goToWheel'); summary('#action-goToWheel-enabled ~ .action-summary', (goToWheelAction && goToWheelAction.target) ? `-> ${goToWheelAction.target}` : ''); const jumpToWheelAction = actions.find(a=>a.type==='jumpToWheel'); summary('#action-jumpToWheel-enabled ~ .action-summary', (jumpToWheelAction && jumpToWheelAction.targetWheelId) ? `-> Nhảy ${jumpToWheelAction.targetWheelId}` : ''); const playSoundAction = actions.find(a=>a.type==='playSound'); summary('#action-playSound-enabled ~ .action-summary', (playSoundAction && playSoundAction.soundData) ? `Phát âm thanh tùy chỉnh` : ''); const conditionalAction = actions.find(a=>a.type==='conditionalReroll'); summary('#action-conditional-enabled ~ .action-summary', conditionalAction ? `Nếu KQ ${conditionalAction.operator} ${conditionalAction.value}, quay lại ${conditionalAction.maxRerolls} lần` : ''); const setItemInSlotAction = actions.find(a=>a.type==='setItemInSlot'); summary('#action-setItemInSlot-enabled ~ .action-summary', setItemInSlotAction ? `Gán ô #${setItemInSlotAction.slot} = ${setItemInSlotAction.value}` : ''); const removeItemsAction = actions.find(a=>a.type==='removeItems'); let removeSummary = ''; if (removeItemsAction) { const modeText = { random: 'ngẫu nhiên', oldest: 'cũ nhất', newest: 'mới nhất'}[removeItemsAction.mode]; let amountText = ''; switch (removeItemsAction.amountType) { case 'specific': amountText = `${removeItemsAction.amountValue1}`; break; case 'range': amountText = `từ ${removeItemsAction.amountValue2} đến ${removeItemsAction.amountValue3}`; break; case 'all': amountText = 'toàn bộ'; break; } removeSummary = `Xóa ${amountText} vật phẩm ${modeText}`; } summary('#action-removeItems-enabled ~ .action-summary', removeSummary); const applyStatusAction = actions.find(a => a.type === 'applyStatus' && a._inline); summary('#action-applyStatus-enabled ~ .action-summary', applyStatusAction ? `-> ${applyStatusAction.statusName} (${applyStatusAction.endType === 'afterWheel' ? 'Hết tại VQ' : applyStatusAction.spinCount + ' lượt'})` : ''); const removeStatusAction = actions.find(a => a.type === 'removeStatus'); summary('#action-removeStatus-enabled ~ .action-summary', removeStatusAction ? `-> Xóa ${removeStatusAction.statusName}` : ''); }
    function exitEditMode() { 
        editingSegmentIndex = null; 
        const randomHex = hslToHex(Math.floor(Math.random() * 360), 80, 55);
        editingSegmentData = { text: '', description: '', weight: 1, color: randomHex, actions: [] }; 
        segmentTextInput.value = ''; 
        segmentDescriptionInput.value = ''; 
        segmentWeightInput.value = 1; 
        segmentColorInput.value = randomHex; 
        mainActionBtn.textContent = "Thêm Ô"; 
        cancelEditBtn.style.display = 'none'; 
        resetActionPanelVisuals(); 
        updateCreatorUI(); 
    }
    function getResult(segmentsForCalc) { if (!segmentsForCalc || segmentsForCalc.length === 0) return null; const totalWeight = segmentsForCalc.reduce((sum, seg) => sum + (seg.weight || 1), 0); const markerAngleRad = 270 * Math.PI / 180; const finalAngle = (markerAngleRad - (startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); let cumulativeAngle = 0; for (const segment of segmentsForCalc) { const arc = (segment.weight / totalWeight) * (2 * Math.PI); if (finalAngle >= cumulativeAngle && finalAngle < cumulativeAngle + arc) return segment; cumulativeAngle += arc; } return segmentsForCalc[0]; }
    function updateViewerActions() { const settings = wheelsData[currentWheelName]?.settings; const activeEntity = getActiveEntity(); let spinCount = 1; if (!activeEntity) { wheelDisplayArea.classList.remove('no-spins'); spinCountDisplay.textContent = ''; return; } if (settings && settings.spinCountVariable) { const spinVar = activeEntity.variables[settings.spinCountVariable]; if (spinVar) { const totalSpins = (spinVar.base || 0) + (spinVar.manualBonus || 0) + (spinVar.itemBonus || 0); spinCount = !isNaN(totalSpins) ? totalSpins : 0; } else { spinCount = 0; } } if (spinCount <= 0) { wheelDisplayArea.classList.add('no-spins'); spinCountDisplay.textContent = 'Bạn không có lượt quay.'; const canSkip = settings && settings.defaultLink && settings.defaultLink !== 'None'; skipButton.disabled = !canSkip; } else { wheelDisplayArea.classList.remove('no-spins'); spinCountDisplay.textContent = ''; } }
    function endSpinSequenceCleanup() { wheelDisplayArea.classList.remove('is-spinning'); panelOverlay.style.display = 'none'; variableSnapshot = null; tickAudio.pause(); tickAudio.currentTime = 0; updateViewerActions(); startIdleAnimation(); }
    function startSpinSequence() {
        if (isSpinning) return; 
        if (!activeEntityId) { showNotification("Vui lòng chọn một Thực Thể Hoạt Động để quay!", true); return; } 
        if (!currentWheelName || !wheelsData[currentWheelName]) { showNotification("Vui lòng tạo hoặc chọn một vòng quay trước!", true); return; }
        const settings = wheelsData[currentWheelName].settings; 
        const segments = wheelsData[currentWheelName].segments; 
        if (!segments || segments.length === 0) { showNotification("Vòng quay này chưa có ô nào để quay!", true); return; } 
        stopIdleAnimation();
        variableSnapshot = JSON.parse(JSON.stringify(entities[activeEntityId])); 
        wheelDisplayArea.classList.add('is-spinning'); 
        let spinCount = 1; 
        const spinVarName = settings.spinCountVariable; 
        const activeVars = getActiveVariables(); 
        if (spinVarName && activeVars.hasOwnProperty(spinVarName)) { const spinVar = activeVars[spinVarName]; const totalSpins = (spinVar.base || 0) + (spinVar.manualBonus || 0) + (spinVar.itemBonus || 0); if (!isNaN(totalSpins) && totalSpins > 0) spinCount = totalSpins; } 
        const spinJob = { totalSpins: spinCount, spinsLeft: spinCount, temporarySegments: [...segments] }; spin(spinJob); 
    }
    function spin(job) { 
        if (job.spinsLeft <= 0 || job.temporarySegments.length < 1) { 
            endSpinSequenceCleanup(); 
            const settings = wheelsData[currentWheelName]?.settings; 
            if (settings && settings.defaultLink && settings.defaultLink !== 'None') { 
                loadWheel(settings.defaultLink); 
            } 
            return; 
        }; 
        isSpinning = true; 
        panelOverlay.style.display = 'block'; 
        spinVelocity = Math.random() * 0.4 + 0.4; 
        if (job.totalSpins > 1) { 
            const currentSpin = job.totalSpins - job.spinsLeft + 1; 
            spinCountDisplay.textContent = `(Lượt: ${currentSpin}/${job.totalSpins})`; 
        } 
        job.lastTickIndex = -1;
        animate(job); 
    }
    
    function animate(job) { 
        if (spinVelocity > 0.005) { 
            startAngle += spinVelocity; 
            spinVelocity *= friction; 
            drawWheel(job.temporarySegments); 
            
            // Pointer calculation for tick sound and bounce
            const segments = job.temporarySegments;
            const totalWeight = segments.reduce((sum, seg) => sum + (seg.weight || 1), 0);
            const markerAngleRad = 270 * Math.PI / 180;
            const checkAngle = (markerAngleRad - (startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            
            let cumulativeAngle = 0;
            let currentTickIndex = 0;
            for (let i = 0; i < segments.length; i++) {
                const arc = (segments[i].weight / totalWeight) * (2 * Math.PI);
                if (checkAngle >= cumulativeAngle && checkAngle < cumulativeAngle + arc) {
                    currentTickIndex = i;
                    break;
                }
                cumulativeAngle += arc;
            }
            
            if (job.lastTickIndex === undefined || job.lastTickIndex === -1) {
                job.lastTickIndex = currentTickIndex;
            } else if (currentTickIndex !== job.lastTickIndex) {
                job.lastTickIndex = currentTickIndex;
                
                // Play tick sound once if sound data exists
                if (projectSettings.tickSoundData) {
                    const tSound = new Audio(projectSettings.tickSoundData);
                    tSound.volume = Math.min(0.5, spinVelocity * 1.5);
                    tSound.play().catch(() => {});
                }
                
                // Animate wheel marker bounce
                const marker = document.querySelector('.wheel-marker');
                if (marker) {
                    marker.style.transform = 'translateX(-50%) rotate(-12deg) scaleY(0.8)';
                    setTimeout(() => {
                        marker.style.transform = 'translateX(-50%) rotate(0deg) scaleY(1)';
                    }, 50);
                }
            }
            
            requestAnimationFrame(() => animate(job)); 
        } else if (isSpinning) { 
            isSpinning = false; 
            const result = getResult(job.temporarySegments); 
            if (result) { 
                processSpinResult(result, job); 
            } else { 
                endSpinSequenceCleanup(); 
            } 
        } 
    }
    
    /**
     * Orchestrates the sequence of events after the wheel lands on a segment.
     */
    function processSpinResult(result, job) {
        if (!job || typeof job !== 'object') job = { spinsLeft: 1 };
        if (job.spinsLeft === undefined) job.spinsLeft = 1;
        job.spinsLeft--;
        const activeEntity = getActiveEntity();
        if (!activeEntity) {
            endSpinSequenceCleanup();
            return;
        }

        const resultObj = typeof result === 'string' ? { text: result, actions: [] } : (result || { text: '', actions: [] });
        addLogMessage(`<span class="log-highlight">${activeEntity.name}</span> quay trúng ô <span class="log-highlight">"${resultObj.text}"</span>.`);
        
        const settings = (currentWheelName && wheelsData[currentWheelName]) ? wheelsData[currentWheelName].settings : {};
        const removalMode = settings.removalMode || 'none';
        let wheelWasDeleted = false;
        
        if (removalMode === 'temporary') {
            if (job.temporarySegments && job.temporarySegments.length > 1) {
                const indexToRemove = job.temporarySegments.findIndex(seg => seg === resultObj);
                if (indexToRemove > -1) job.temporarySegments.splice(indexToRemove, 1);
            }
        } else if (removalMode === 'permanent') {
            if (currentWheelName && wheelsData[currentWheelName]) {
                const originalSegments = wheelsData[currentWheelName].segments;
                const indexInOriginal = originalSegments.findIndex(seg => seg.text === resultObj.text && seg.color === resultObj.color);
                if (indexInOriginal > -1) {
                    originalSegments.splice(indexInOriginal, 1);
                    if (originalSegments.length === 0) {
                        const deletedWheelName = currentWheelName;
                        delete wheelsData[deletedWheelName];
                        wheelWasDeleted = true;
                        showNotification(`Ô cuối cùng đã bị xóa. Vòng quay "${deletedWheelName}" đã bị hủy.`);
                    }
                    throttledSaveState();
                    if (!wheelWasDeleted) updateCreatorUI();
                }
            }
        }

        showResultPopup(resultObj, () => {
            const actions = resultObj.actions || [];
            
            const playSoundAction = actions.find(a => a.type === 'playSound');
            if (playSoundAction) playSound(playSoundAction.soundData);
            
            // Check for Conditional Reroll
            const conditionalAction = actions.find(a => a.type === 'conditionalReroll');
            if (conditionalAction) {
                const operator = conditionalAction.operator;
                const value = conditionalAction.value;
                const maxRerolls = conditionalAction.maxRerolls || 1;
                
                if (!job.rerollCounts) job.rerollCounts = {};
                const currentSpinId = job.totalSpins - job.spinsLeft;
                if (!job.rerollCounts[currentSpinId]) job.rerollCounts[currentSpinId] = 0;
 
                const resultVal = parseFloat(resultObj.text);
                let shouldReroll = false;
                if (!isNaN(resultVal)) {
                    switch (operator) {
                        case '==': shouldReroll = resultVal == value; break;
                        case '!=': shouldReroll = resultVal != value; break;
                        case '>': shouldReroll = resultVal > value; break;
                        case '<': shouldReroll = resultVal < value; break;
                        case '>=': shouldReroll = resultVal >= value; break;
                        case '<=': shouldReroll = resultVal <= value; break;
                    }
                }
 
                if (shouldReroll && job.rerollCounts[currentSpinId] < maxRerolls) {
                    job.rerollCounts[currentSpinId]++;
                    job.spinsLeft++; 
                    addLogMessage(`-> <span class="log-highlight">Reroll!</span> Điều kiện thỏa mãn (${resultVal} ${operator} ${value}). Lần ${job.rerollCounts[currentSpinId]}/${maxRerolls}.`);
                    spin(job);
                    return;
                }
            }
 
            // Step 1: Execute actions
            const resultContext = { ...resultObj, sourceWheelId: currentWheelName };
            
            // Visual WOW: Confetti for rare items
            const itemMatch = Object.values(itemDatabase).find(i => i.name === resultObj.text);
            if (itemMatch && itemMatch.priority <= 3 && typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ffde59', '#ffffff', '#ff4d4d']
                });
                addLogMessage(`-> <span class="log-highlight" style="color: #ffde59;">CỰC HIẾM!</span> Pháo hoa chúc mừng bạn trúng <span class="log-highlight">${itemMatch.name}</span>!`);
            }
 
            const macroAction = actions.find(a => a.type === 'executeMacro');
            executeActions(actions.filter(a => a.type !== 'executeMacro' && a.type !== 'conditionalReroll'), resultContext);
            if (macroAction && macros[macroAction.targetMacro]) {
                addLogMessage(`-> Thực thi Macro: <span class="log-highlight">${macros[macroAction.targetMacro].name}</span>`);
                executeActions(macros[macroAction.targetMacro].actions, resultContext);
            }
 
            recalculateActiveEntityStats();
            processEntityStatuses('afterEachSpin', resultContext);

            if (wheelWasDeleted) {
                loadWheel(null);
                endSpinSequenceCleanup();
                return;
            }

            const nextWheelAction = actions.find(a => a.type === 'goToWheel') || 
                                    (macroAction && macros[macroAction.targetMacro] ? (macros[macroAction.targetMacro].actions || []).find(a => a.type === 'goToWheel') : null);
            const jumpToWheelAction = actions.find(a => a.type === 'jumpToWheel') || 
                                      (macroAction && macros[macroAction.targetMacro] ? (macros[macroAction.targetMacro].actions || []).find(a => a.type === 'jumpToWheel') : null);
            
            let nextWheelId = null;
            if (jumpToWheelAction && jumpToWheelAction.resolvedJumpTarget) {
                nextWheelId = jumpToWheelAction.resolvedJumpTarget;
                delete jumpToWheelAction.resolvedJumpTarget;
            } else if (nextWheelAction && wheelsData[nextWheelAction.target]) {
                nextWheelId = nextWheelAction.target;
            }

            if (nextWheelId) {
                spinCountDisplay.textContent = '';
                loadWheel(nextWheelId);
                endSpinSequenceCleanup();
            } else if (job.spinsLeft > 0) {
                spin(job);
            } else {
                endSpinSequenceCleanup();
                
                // Tick Statuses
                if (activeEntity.statuses) {
                    processEntityStatuses('afterFinalSpin', resultContext);
                    
                    activeEntity.statuses = activeEntity.statuses.filter(status => {
                        const isTurnCount = status.endType === 'afterSpins' || status.type === 'turn_count' || status.durationType === 'turn' || status.endType === undefined;
                        if (isTurnCount) {
                            let rem = status.spinCount !== undefined ? status.spinCount : (status.remaining !== undefined ? status.remaining : status.remainingDuration);
                            rem--;
                            if (status.spinCount !== undefined) status.spinCount = rem;
                            if (status.remaining !== undefined) status.remaining = rem;
                            if (status.remainingDuration !== undefined) status.remainingDuration = rem;
                            
                            if (rem <= 0) {
                                addLogMessage(`-> Trạng thái <span class="log-highlight">${status.name}</span> đã hết hạn.`);
                                return false;
                            }
                        } else {
                            const target = status.endWheel || status.targetWheel || status.targetWheelId || '';
                            if (target === currentWheelName) {
                                addLogMessage(`-> Trạng thái <span class="log-highlight">${status.name}</span> đã kết thúc cùng vòng quay.`);
                                return false;
                            }
                        }
                        return true;
                    });
                    recalculateActiveEntityStats();
                }

                let finalNextWheel = settings && settings.defaultLink && settings.defaultLink !== 'None' ? settings.defaultLink : null;
                
                if (!finalNextWheel && wheelStack.length > 0) {
                    finalNextWheel = wheelStack.pop();
                    addLogMessage(`-> Quay lại chuỗi vòng quay từ Stack: <span class="log-highlight">${wheelsData[finalNextWheel]?.name || finalNextWheel}</span>.`);
                }

                if (finalNextWheel) {
                    loadWheel(finalNextWheel);
                } else if (removalMode === 'temporary') {
                    drawWheel();
                }
            }
        });
    }

    function idleAnimate() { if (isSpinning || !currentWheelName || !wheelsData[currentWheelName] || wheelsData[currentWheelName].segments.length === 0) return; startAngle += 0.0005; drawWheel(); idleAnimationId = requestAnimationFrame(idleAnimate); }
    function startIdleAnimation() { stopIdleAnimation(); idleAnimate(); }
    function stopIdleAnimation() { if(idleAnimationId) cancelAnimationFrame(idleAnimationId); idleAnimationId = null; }

    // --- EVENT HANDLERS ---
    exportBtn.addEventListener('click', handleExport); importBtn.addEventListener('click', () => importFileInput.click()); importFileInput.addEventListener('change', handleImport); exportEntitiesBtn.addEventListener('click', handleExportEntities); importEntitiesBtn.addEventListener('click', () => importEntitiesInput.click()); importEntitiesInput.addEventListener('change', handleImportEntities);
    function resetGeneratorPanel() { generationState = { sourceType: '', filterType: '', category: '', tags: [] }; generateSourceTypeSelect.value = ''; itemFilterTypeSelect.value = ''; categoryFilterSelect.value = ''; selectedTagsDisplay.innerHTML = ''; updateGeneratorUI(); }
    function updateGeneratorUI() { const { sourceType, filterType, category, tags } = generationState; itemDatabaseOptions.style.display = sourceType === 'itemDatabase' ? 'flex' : 'none'; if (sourceType === 'itemDatabase') { categoryFilterOptions.style.display = filterType === 'category' ? 'flex' : 'none'; tagFilterOptions.style.display = filterType === 'tags' ? 'flex' : 'none'; } else { categoryFilterOptions.style.display = 'none'; tagFilterOptions.style.display = 'none'; } let isReady = false; if (sourceType === 'entities') { isReady = true; } else if (sourceType === 'itemDatabase') { if (filterType === 'all') isReady = true; else if (filterType === 'category' && category) isReady = true; else if (filterType === 'tags' && tags.length > 0) isReady = true; } executeGenerationBtn.disabled = !isReady; }
    generateSourceTypeSelect.addEventListener('change', () => { generationState.sourceType = generateSourceTypeSelect.value; generationState.filterType = ''; generationState.category = ''; generationState.tags = []; itemFilterTypeSelect.value = ''; categoryFilterSelect.value = ''; selectedTagsDisplay.innerHTML = ''; updateGeneratorUI(); });
    itemFilterTypeSelect.addEventListener('change', () => { generationState.filterType = itemFilterTypeSelect.value; generationState.category = ''; generationState.tags = []; categoryFilterSelect.value = ''; selectedTagsDisplay.innerHTML = ''; updateGeneratorUI(); });
    categoryFilterSelect.addEventListener('change', () => { generationState.category = categoryFilterSelect.value; updateGeneratorUI(); });
    openTagModalBtn.addEventListener('click', () => { const allTags = Object.values(tagDatabase).sort((a,b) => a.name.localeCompare(b.name)); if (allTags.length === 0) { showNotification("Chưa có tag nào được tạo.", true); return; } tagListForGeneration.innerHTML = ''; allTags.forEach(tag => { const tagEl = document.createElement('div'); tagEl.className = 'tag-checkbox'; tagEl.dataset.tag = tag.name; tagEl.innerHTML = `<img src="${tag.icon || 'https://placehold.co/18x18/666/ccc?text=?'}" class="tag-checkbox-icon"><span>${tag.name}</span>`; if (generationState.tags.includes(tag.name)) tagEl.classList.add('selected'); tagListForGeneration.appendChild(tagEl); }); tagSelectionModal.style.display = 'flex'; });
    tagListForGeneration.addEventListener('click', e => { if (e.target.matches('.tag-checkbox')) { e.target.classList.toggle('selected'); } });
    cancelTagGenerationBtn.addEventListener('click', () => { tagSelectionModal.style.display = 'none'; });
    confirmTagGenerationBtn.addEventListener('click', () => { generationState.tags = Array.from(tagListForGeneration.querySelectorAll('.tag-checkbox.selected')).map(el => el.dataset.tag); selectedTagsDisplay.innerHTML = ''; generationState.tags.forEach(tagName => { const tagData = Object.values(tagDatabase).find(t => t.name === tagName); const pill = document.createElement('span'); pill.className = 'tag-pill'; pill.innerHTML = `<img src="${tagData?.icon || 'https://placehold.co/16x16/6c757d/fff?text=?'}" class="tag-pill-icon">${tagName}`; selectedTagsDisplay.appendChild(pill); }); tagSelectionModal.style.display = 'none'; updateGeneratorUI(); });
    executeGenerationBtn.addEventListener('click', () => { if (!currentWheelName) { showNotification("Vui lòng chọn hoặc tạo một vòng quay trước.", true); return; } const { sourceType, filterType, category, tags } = generationState; let filters = {}; if (sourceType === 'itemDatabase') { if (filterType === 'category') filters.category = category; else if (filterType === 'tags') filters.tags = tags; } showConfirmationModal(`Việc này sẽ XÓA TẤT CẢ các ô hiện tại của vòng quay "${currentWheelName}". Bạn chắc chắn?`, () => { generateWheelSegments(sourceType, filters); resetGeneratorPanel(); }); });
    addVariableBtn.addEventListener('click', async () => { const varName = newVariableNameInput.value.trim().replace(/\s+/g, '_'); if (!varName) { showNotification('Vui lòng nhập tên biến!', true); return; } if (variableTemplate.hasOwnProperty(varName)) { showNotification('Lỗi: Tên biến đã tồn tại!', true); return; } const rawValue = newVariableValueInput.value; const finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue; let iconData = ''; const iconFile = newVariableIconUpload.files[0]; if (iconFile) iconData = await new Promise(resolve => handleFileUpload(iconFile, resolve)); variableTemplate[varName] = { base: finalValue, icon: iconData, displayInStats: true }; newVariableNameInput.value = ''; newVariableValueInput.value = '0'; newVariableIconUpload.value = ''; Object.values(entities).forEach(entity => { entity.variables[varName] = { base: finalValue, manualBonus: 0, itemBonus: 0 }; }); updateAllUI(); throttledSaveState(); });
    variableTemplateListDiv.addEventListener('input', e => { if (e.target.matches('.variable-base-input')) { const varName = e.target.dataset.varname; const rawValue = e.target.value; let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue; variableTemplate[varName].base = finalValue; updateAllUI(); recalculateActiveEntityStats(); throttledSaveState(); } });
    variableTemplateListDiv.addEventListener('change', e => { if (e.target.matches('.display-var-checkbox')) { const varName = e.target.dataset.varname; variableTemplate[varName].displayInStats = e.target.checked; updateSidebarDisplay(); throttledSaveState(); } });
    variableTemplateListDiv.addEventListener('click', (e) => { if (e.target.matches('.delete-variable-btn')) { const varName = e.target.dataset.varname; delete variableTemplate[varName]; Object.values(entities).forEach(entity => { delete entity.variables[varName]; }); updateAllUI(); recalculateActiveEntityStats(); throttledSaveState(); } });
    addCollectionBtn.addEventListener('click', () => { const name = newCollectionNameInput.value.trim(); if (!name) { showNotification('Vui lòng nhập tên Kho Chứa!', true); return; } const id = name.replace(/\s+/g, '_'); if (collectionTemplate[id]) { showNotification("Lỗi: Tên Kho Chứa này đã tồn tại.", true); return; } collectionTemplate[id] = { id, name }; Object.values(entities).forEach(entity => { if (!entity.collections) entity.collections = {}; entity.collections[id] = []; }); newCollectionNameInput.value = ''; updateCollectionTemplateUI(); updateSidebarDisplay(); updateItemDatabaseListUI(); throttledSaveState(); });
    collectionTemplateListUI.addEventListener('click', e => { if (e.target.matches('.delete-collection-btn')) { const id = e.target.dataset.id; delete collectionTemplate[id]; Object.values(entities).forEach(entity => { if (entity.collections) delete entity.collections[id]; }); Object.keys(itemDatabase).forEach(itemId => { if (itemDatabase[itemId].collectionId === id) delete itemDatabase[itemId]; }); updateAllUI(); recalculateActiveEntityStats(); throttledSaveState(); } });
    addEntityBtn.addEventListener('click', () => {
        const name = newEntityNameInput.value.trim();
        if (!name) { showNotification('Vui lòng nhập tên thực thể!', true); return; }
        const id = `entity_${Date.now()}`;
        const newCollections = {};
        Object.keys(collectionTemplate).forEach(collId => { newCollections[collId] = []; });
        const newVariables = {};
        Object.keys(variableTemplate).forEach(varName => { newVariables[varName] = { base: variableTemplate[varName].base, manualBonus: 0, itemBonus: 0 }; });
        entities[id] = { id, name, variables: newVariables, avatar: '', collections: newCollections, statuses: [] };
        newEntityNameInput.value = '';
        if (!activeEntityId) activeEntityId = id;
        updateEntityListUI();
        updateActiveEntitySelector();
        loadEntityEditor(id);
        throttledSaveState();
    });
    entityListUI.addEventListener('click', e => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; const id = targetLi.dataset.id; if (e.target.matches('.delete-entity-btn')) { e.stopPropagation(); showConfirmationModal(`Bạn có chắc muốn xóa thực thể "${entities[id].name}"?`, () => { delete entities[id]; if (editingEntityId === id) editingEntityId = null; if (activeEntityId === id) activeEntityId = null; updateAllUI(); throttledSaveState(); }); } else { loadEntityEditor(id); } });
    entityNameInput.addEventListener('input', (e) => { if(editingEntityId) { entities[editingEntityId].name = e.target.value; entityEditorTitle.textContent = `Chỉnh sửa: ${e.target.value}`; updateEntityListUI(); updateActiveEntitySelector(); updateSidebarTitle(); throttledSaveState(); } });
    entityVariablesListDiv.addEventListener('input', e => { if(e.target.matches('.variable-base-input')) { const entityId = e.target.dataset.entityid, varName = e.target.dataset.varname, rawValue = e.target.value; let finalValue = !isNaN(rawValue) && isFinite(rawValue) && rawValue.trim() !== '' ? parseFloat(rawValue) : rawValue; entities[entityId].variables[varName].base = finalValue; recalculateActiveEntityStats(); throttledSaveState(); } });
    entityCollectionsListDiv.addEventListener('input', e => { if (e.target.matches('input[type="text"]')) { const { entityid, collectionid, slotindex } = e.target.dataset; const value = e.target.value; if (entities[entityid]?.collections[collectionid]) { entities[entityid].collections[collectionid][parseInt(slotindex)] = value.trim() === '' ? null : value; recalculateActiveEntityStats(); throttledSaveState(); } } });
    itemDatabaseListContainer.addEventListener('click', e => { if (e.target.matches('.add-item-to-category-btn')) { const collectionId = e.target.dataset.collectionId; if (!collectionId) return; const newItem = { id: `item_${Date.now()}`, name: 'Vật Phẩm Mới', description: '', icon: '', effects: [], tags: [], collectionId: collectionId }; itemDatabase[newItem.id] = newItem; loadEditor('item', newItem.id); throttledSaveState(); } else { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; const id = targetLi.dataset.id; if (e.target.matches('.delete-item-btn')) { e.stopPropagation(); showConfirmationModal(`Bạn có chắc muốn xóa vật phẩm "${itemDatabase[id].name}"?`, () => { delete itemDatabase[id]; if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); recalculateActiveEntityStats(); throttledSaveState(); }); } else { loadEditor('item', id); } } });
    addItemEffectBtn.addEventListener('click', () => { if (activeEditor.type !== 'item') return; const firstVar = Object.keys(variableTemplate)[0]; if(!firstVar) { showNotification("Vui lòng tạo Biến Mẫu trước.", true); return; } itemEffectsContainer.appendChild(createItemEffectRow({target: firstVar, operator: '+=', value: 1})); saveActiveEditor(); });
    itemEditor.addEventListener('input', (e) => { if(e.target.closest('#item-editor-content') && e.target.id !== 'item-tags-input') saveActiveEditor(); });
    itemEditor.addEventListener('click', e => { if(e.target.matches('.btn-delete-action')) { e.target.parentElement.remove(); saveActiveEditor(); } });
    addNewTagBtn.addEventListener('click', () => { const name = newTagNameInput.value.trim(); if (!name) return; if (Object.values(tagDatabase).some(t => t.name === name)) { showNotification(`Lỗi: Tag "${name}" đã tồn tại.`, true); return; } const newTag = { id: `tag_${Date.now()}`, name, icon: '' }; tagDatabase[newTag.id] = newTag; newTagNameInput.value = ''; updateAllUI(); loadEditor('tag', newTag.id); throttledSaveState(); });
    tagManagerListUI.addEventListener('click', e => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; const id = targetLi.dataset.id; if (e.target.matches('.delete-tag-btn')) { e.stopPropagation(); const tagName = tagDatabase[id].name; showConfirmationModal(`Bạn có chắc muốn xóa tag "${tagName}"? Nó cũng sẽ bị xóa khỏi tất cả vật phẩm.`, () => { delete tagDatabase[id]; Object.values(itemDatabase).forEach(item => { if (item.tags) item.tags = item.tags.filter(t => t !== tagName); }); if (activeEditor.id === id) activeEditor.id = null; updateAllUI(); loadEditor(null, null); throttledSaveState(); }); } else { loadEditor('tag', id); } });
    tagEditor.addEventListener('input', e => { if(e.target.closest('#tag-editor-content')) saveActiveEditor(); });
    tagIconUpload.addEventListener('change', e => { if(activeEditor.type !== 'tag') return; handleFileUpload(e.target.files[0], (dataUrl) => { tagDatabase[activeEditor.id].icon = dataUrl; tagIconPreview.src = dataUrl; clearTagIconBtn.style.display = 'inline-block'; saveActiveEditor(); }); });
    clearTagIconBtn.addEventListener('click', () => { if(activeEditor.type !== 'tag') return; tagDatabase[activeEditor.id].icon = ''; tagIconPreview.src = ''; clearTagIconBtn.style.display = 'none'; tagIconUpload.value = ''; saveActiveEditor(); });
    
    // --- COMPONENT TEMPLATE LIBRARY ---
    function loadUserTemplates() {
        try {
            const userTpls = JSON.parse(localStorage.getItem('wheelEngineUserTemplates') || '[]');
            if (!userSavedTemplatesGroup) return;
            userSavedTemplatesGroup.innerHTML = '';
            if (userTpls.length === 0) {
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = '-- Chưa có mẫu tự lưu --';
                opt.disabled = true;
                userSavedTemplatesGroup.appendChild(opt);
                return;
            }
            userTpls.forEach(tpl => {
                const opt = document.createElement('option');
                opt.value = `custom-${tpl.id}`;
                opt.textContent = `${tpl.name} (${tpl.type === 'macro' ? 'Macro' : 'Luật'})`;
                userSavedTemplatesGroup.appendChild(opt);
            });
        } catch(e) {
            console.error("Lỗi khi tải mẫu tự lưu:", e);
        }
    }

    function saveActiveComponentAsTemplate() {
        if (!activeEditor || !activeEditor.id || !activeEditor.type) {
            showNotification("Vui lòng chọn Macro hoặc Luật để lưu làm mẫu.", true);
            return;
        }

        let name = '';
        let type = '';
        let data = null;

        if (activeEditor.type === 'macro') {
            const macro = macros[activeEditor.id];
            if (!macro) return;
            saveActiveEditor();
            name = macro.name;
            type = 'macro';
            data = JSON.parse(JSON.stringify(macro));
        } else if (activeEditor.type === 'conditional') {
            const rule = conditionalRules.find(r => r.id === activeEditor.id);
            if (!rule) return;
            saveActiveEditor();
            name = rule.name;
            type = 'rule';
            data = JSON.parse(JSON.stringify(rule));
        } else {
            showNotification("Chỉ có thể lưu Macro hoặc Luật làm mẫu.", true);
            return;
        }

        const tplName = prompt("Nhập tên cho Mẫu logic mới này:", name);
        if (tplName === null) return;
        if (!tplName.trim()) {
            showNotification("Tên mẫu không được để trống.", true);
            return;
        }

        try {
            const userTpls = JSON.parse(localStorage.getItem('wheelEngineUserTemplates') || '[]');
            const newTpl = {
                id: 'tpl_' + Date.now(),
                name: tplName.trim(),
                type: type,
                data: data
            };
            userTpls.push(newTpl);
            localStorage.setItem('wheelEngineUserTemplates', JSON.stringify(userTpls));
            loadUserTemplates();
            showNotification(`Đã lưu mẫu "${tplName.trim()}" thành công!`);
        } catch(e) {
            showNotification("Lỗi khi lưu mẫu.", true);
        }
    }

    const PREDEFINED_TEMPLATES = {
        'preset-stat-up': {
            name: "Tăng chỉ số RPG (Macro)",
            type: "macro",
            data: {
                name: "Tăng chỉ số RPG",
                actions: [
                    { type: 'calculateAssign', target: 'suc_manh_base', operator: '+=', value: '1' },
                    { type: 'addLogMessage', msg: 'Sức mạnh của bạn tăng thêm 1 điểm!' }
                ]
            }
        },
        'preset-cursed-logic': {
            name: "Hạn chế chỉ số Cursed (Luật)",
            type: "rule",
            data: {
                name: "Hạn chế chỉ số Cursed",
                blocks: [
                    {
                        type: 'if',
                        conditions: [
                            { left: 'has_cursed_status', op: '==', right: '1' }
                        ],
                        actions: [
                            { type: 'calculateAssign', target: 'highest_bs_var', operator: '=', value: '4' },
                            { type: 'calculateAssign', target: 'lowest_bs_var', operator: '=', value: '4' },
                            { type: 'addLogMessage', msg: 'Trạng thái Cursed đã đặt toàn bộ chỉ số cao nhất/thấp nhất thành 4!' }
                        ]
                    }
                ]
            }
        },
        'preset-equip-replacer': {
            name: "Thay thế vật phẩm hiếm (Luật)",
            type: "rule",
            data: {
                name: "Thay thế vật phẩm hiếm",
                blocks: [
                    {
                        type: 'if',
                        conditions: [
                            { left: 'new_item_rarity', op: '<', right: 'old_item_rarity' }
                        ],
                        actions: [
                            { type: 'removeItems', targetCollection: 'Trang Bị', amountType: 'all' },
                            { type: 'addItems', targetCollection: 'Trang Bị', item: 'new_item_name' },
                            { type: 'addLogMessage', msg: 'Đã thay thế trang bị cũ bằng vật phẩm hiếm hơn!' }
                        ]
                    }
                ]
            }
        }
    };

    function applySelectedTemplate() {
        const val = logicTemplatePresetSelect.value;
        if (!val) {
            showNotification("Vui lòng chọn một mẫu từ danh sách.", true);
            return;
        }

        let selectedTpl = null;
        if (val.startsWith('preset-')) {
            selectedTpl = PREDEFINED_TEMPLATES[val];
        } else if (val.startsWith('custom-')) {
            const id = val.replace('custom-', '');
            try {
                const userTpls = JSON.parse(localStorage.getItem('wheelEngineUserTemplates') || '[]');
                selectedTpl = userTpls.find(t => t.id === id);
            } catch(e) {
                console.error(e);
            }
        }

        if (!selectedTpl) {
            showNotification("Không tìm thấy dữ liệu mẫu đã chọn.", true);
            return;
        }

        showConfirmationModal(`Bạn có chắc chắn muốn tạo mới từ mẫu "${selectedTpl.name}" không?`, () => {
            if (selectedTpl.type === 'macro') {
                const newId = 'macro_' + Date.now();
                const newMacro = JSON.parse(JSON.stringify(selectedTpl.data));
                newMacro.name = newMacro.name + " (Copy)";
                macros[newId] = newMacro;
                updateMacrosListUI();
                loadEditor('macro', newId);
                showNotification(`Đã tạo Macro mới từ mẫu!`);
            } else if (selectedTpl.type === 'rule') {
                const newId = 'rule_' + Date.now();
                const newRule = JSON.parse(JSON.stringify(selectedTpl.data));
                newRule.id = newId;
                newRule.name = newRule.name + " (Copy)";
                conditionalRules.push(newRule);
                updateRulesListUI();
                loadEditor('conditional', newId);
                showNotification(`Đã tạo Luật mới từ mẫu!`);
            }
            throttledSaveState();
        });
    }

    applyLogicTemplateBtn.addEventListener('click', applySelectedTemplate);
    saveMacroAsTemplateBtn.addEventListener('click', saveActiveComponentAsTemplate);
    saveRuleAsTemplateBtn.addEventListener('click', saveActiveComponentAsTemplate);

    function updateTagPills() { if (activeEditor.type !== 'item' || !activeEditor.id) { itemTagsDisplay.innerHTML = ''; return; } const item = itemDatabase[activeEditor.id]; itemTagsDisplay.innerHTML = ''; if (item && item.tags) { item.tags.forEach(tagName => { const tagData = Object.values(tagDatabase).find(t => t.name === tagName); const pill = document.createElement('span'); pill.className = 'tag-pill'; pill.innerHTML = `<img src="${tagData?.icon || 'https://placehold.co/16x16/6c757d/fff?text=?'}" class="tag-pill-icon">${tagName}`; itemTagsDisplay.appendChild(pill); }); } }
    itemTagsInput.addEventListener('keydown', e => { if (e.key === ',' || e.key === 'Enter') { e.preventDefault(); const tagName = itemTagsInput.value.trim(); if (tagName) { const item = itemDatabase[activeEditor.id]; let tagExists = Object.values(tagDatabase).some(t => t.name === tagName); if (!tagExists) { const newTag = { id: `tag_${Date.now()}`, name: tagName, icon: '' }; tagDatabase[newTag.id] = newTag; updateAllUI(); } if (item && !item.tags.includes(tagName)) { item.tags.push(tagName); item.tags.sort(); updateTagPills(); throttledSaveState(); } } itemTagsInput.value = ''; } });
    addComputedVariableBtn.addEventListener('click', () => { const newCv = { id: `comp_${Date.now()}`, formula: '' }; computedVariables.push(newCv); loadEditor('computed', newCv.id); throttledSaveState(); });
    computedVariablesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-computed-variable-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; computedVariables = computedVariables.filter(cv => cv.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); recalculateActiveEntityStats(); throttledSaveState(); } else { loadEditor('computed', targetLi.dataset.id); } });
    addRuleBtn.addEventListener('click', () => { const newRule = { id: `rule_${Date.now()}`, name: 'Luật Mới', blocks: [{ type: 'if', conditions: [], actions: [] }] }; conditionalRules.push(newRule); loadEditor('conditional', newRule.id); throttledSaveState(); });
    rulesListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-rule-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; conditionalRules = conditionalRules.filter(r => r.id !== id); if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('conditional', targetLi.dataset.id); } });
    addMacroBtn.addEventListener('click', () => { const newMacro = { id: `macro_${Date.now()}`, name: 'Macro Mới', actions: [] }; macros[newMacro.id] = newMacro; loadEditor('macro', newMacro.id); throttledSaveState(); });
    macrosListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-macro-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; delete macros[id]; if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('macro', targetLi.dataset.id); } });
    addStatusBtn.addEventListener('click', () => { const newStatus = { id: `status_template_${Date.now()}`, name: 'Trạng Thái Mới', conditions: [], actions: [], endType: 'afterSpins', spinCount: 3, executionTiming: 'immediate', stackBehavior: 'stack' }; statusTemplate[newStatus.id] = newStatus; loadEditor('status', newStatus.id); throttledSaveState(); });
    statusListUI.addEventListener('click', (e) => { const targetLi = e.target.closest('.list-item'); if (!targetLi) return; if (e.target.matches('.delete-status-btn')) { e.stopPropagation(); const id = targetLi.dataset.id; delete statusTemplate[id]; if (activeEditor.id === id) activeEditor.id = null; loadEditor(null, null); throttledSaveState(); } else { loadEditor('status', targetLi.dataset.id); } });
    logicEditor.addEventListener('input', (e) => { if (e.target.closest('#rule-editor-content, #computed-variable-editor-content, #macro-editor-content, #status-editor-content')) saveActiveEditor(); });
    logicEditor.addEventListener('change', (e) => { if (e.target.closest('#rule-editor-content, #computed-variable-editor-content, #macro-editor-content, #status-editor-content')) saveActiveEditor(); });
    logicEditor.addEventListener('click', e => { 
        const target = e.target; 
        if (target.matches('.btn-delete-action')) { 
            target.parentElement.remove(); saveActiveEditor(); 
        } else if (target.matches('.add-rule-condition-btn')) { 
            target.previousElementSibling.appendChild(createRuleConditionRow()); saveActiveEditor(); 
        } else if (target.matches('.add-item-to-checklist-btn')) { 
            const checklistContainer = target.previousElementSibling; 
            const row = document.createElement('div'); 
            row.className = 'item-checklist-row'; 
            row.innerHTML = `<input type="text" list="item-suggestions" placeholder="Tên vật phẩm..."><button class="btn-danger btn-sm delete-checklist-item-btn">-</button>`; 
            checklistContainer.appendChild(row); 
        } else if (target.matches('.delete-checklist-item-btn')) { 
            target.parentElement.remove(); saveActiveEditor(); 
        } else if (target.matches('.add-rule-action-btn')) { 
            target.parentElement.previousElementSibling.appendChild(createMacroActionRow({type: 'setVariable'})); saveActiveEditor(); 
        } else if (target.matches('.save-rule-template-btn')) {
            const templateName = prompt("Nhập tên Template (Macro) mới:");
            if (templateName) {
                const id = 'macro_' + Date.now();
                const newMacro = { id, name: templateName, actions: [] };
                const actionRows = target.parentElement.previousElementSibling.querySelectorAll('.macro-action-row');
                actionRows.forEach(row => {
                    const actionData = extractActionFromRow(row);
                    if (actionData) newMacro.actions.push(actionData);
                });
                macros[id] = newMacro;
                updateMacrosListUI();
                
                // Thay thế toàn bộ hành động hiện tại bằng Execute Macro
                const actionsContainer = target.parentElement.previousElementSibling;
                actionsContainer.innerHTML = '';
                actionsContainer.appendChild(createMacroActionRow({type: 'executeMacro', targetMacro: id}));
                saveActiveEditor();
                showNotification(`Đã lưu thành công Template: ${templateName}`);
            }
        } else if (target.matches('.delete-rule-block-btn')) { 
            const rule = conditionalRules.find(r => r.id === activeEditor.id); 
            if (!rule) return; 
            const index = parseInt(target.dataset.index, 10); 
            rule.blocks.splice(index, 1); 
            loadEditor('conditional', activeEditor.id); saveActiveEditor(); 
        } 
    });
    addRuleIfElseBtn.addEventListener('click', () => { const rule = conditionalRules.find(r => r.id === activeEditor.id); if(rule) { rule.blocks.push({ type: 'elseif', conditions: [], actions: [] }); loadEditor('conditional', activeEditor.id); saveActiveEditor(); } });
    addRuleElseBtn.addEventListener('click', () => { const rule = conditionalRules.find(r => r.id === activeEditor.id); if(rule) { rule.blocks.push({ type: 'else', actions: [] }); loadEditor('conditional', activeEditor.id); saveActiveEditor(); } });
    addMacroActionBtn.addEventListener('click', () => { if (activeEditor.type !== 'macro') return; macroActionsContainer.appendChild(createMacroActionRow({type: 'calculateAssign'})); saveActiveEditor(); });
    addStatusConditionBtn.addEventListener('click', () => { if (activeEditor.type !== 'status') return; statusConditionsContainer.appendChild(createRuleConditionRow()); saveActiveEditor(); });
    addStatusActionBtn.addEventListener('click', () => { if (activeEditor.type !== 'status') return; statusActionsContainer.appendChild(createMacroActionRow({type: 'calculateAssign'})); saveActiveEditor(); });
    copyWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; copiedWheelData = JSON.parse(JSON.stringify(wheelsData[currentWheelName])); pasteWheelBtn.disabled = false; showNotification(`Đã sao chép vòng quay "${currentWheelName}"!`); });
    pasteWheelBtn.addEventListener('click', () => { if (!copiedWheelData) return; const newName = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (!newName) { showNotification("Vui lòng nhập tên cho vòng quay mới.", true); return; } if (wheelsData[newName]) { showNotification(`Lỗi: Tên vòng quay "${newName}" đã tồn tại.`, true); return; } wheelsData[newName] = JSON.parse(JSON.stringify(copiedWheelData)); newWheelNameInput.value = ''; loadWheel(newName); throttledSaveState(); showNotification(`Đã dán và tạo vòng quay mới "${newName}"!`); });
    createWheelBtn.addEventListener('click', () => { const name = newWheelNameInput.value.trim().replace(/\s+/g, '_'); if (!name) { showNotification('Vui lòng nhập tên vòng quay!', true); return; } if (wheelsData[name]) { showNotification('Lỗi: Tên vòng quay đã tồn tại!', true); return; } wheelsData[name] = { segments: [], settings: { removalMode: 'none', spinCountVariable: '', defaultLink: 'None' } }; newWheelNameInput.value = ''; loadWheel(name); throttledSaveState(); });
    wheelSelector.addEventListener('change', () => { if (!isSpinning) loadWheel(wheelSelector.value); });
    presentationWheelSelector.addEventListener('change', () => { if (!isSpinning) loadWheel(presentationWheelSelector.value); });
    deleteWheelBtn.addEventListener('click', () => { if (!currentWheelName) return; showConfirmationModal(`Bạn có chắc muốn xóa vòng quay "${currentWheelName}"?`, () => { delete wheelsData[currentWheelName]; loadWheel(Object.keys(wheelsData)[0] || null); throttledSaveState(); }); });
    mainActionBtn.addEventListener('click', () => { if (!currentWheelName) return; const text = segmentTextInput.value.trim(); if (!text) { showNotification('Vui lòng nhập tiêu đề của ô!', true); return; } editingSegmentData.text = text; editingSegmentData.description = segmentDescriptionInput.value.trim(); editingSegmentData.weight = parseInt(segmentWeightInput.value) || 1; editingSegmentData.color = segmentColorInput.value; if (editingSegmentIndex !== null) { wheelsData[currentWheelName].segments[editingSegmentIndex] = editingSegmentData; } else { wheelsData[currentWheelName].segments.push(editingSegmentData); } exitEditMode(); throttledSaveState(); });
    cancelEditBtn.addEventListener('click', exitEditMode);
    copyActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null) { copiedActions = JSON.parse(JSON.stringify(editingSegmentData.actions || [])); pasteActionsBtn.disabled = false; showNotification("Đã sao chép hành động của ô!"); } });
    pasteActionsBtn.addEventListener('click', () => { if (editingSegmentIndex !== null && copiedActions) { editingSegmentData.actions = JSON.parse(JSON.stringify(copiedActions)); populateActionPanelFromEditingState(); updateAllActionSummaries(); showNotification("Đã dán hành động!"); } });
    segmentListUI.addEventListener('click', (e) => { if (e.target.matches('.delete-segment-btn')) { e.stopPropagation(); const i = parseInt(e.target.dataset.index); wheelsData[currentWheelName].segments.splice(i, 1); exitEditMode(); throttledSaveState(); } else if (e.target.closest('.segment-list-item')) { if (!isSpinning) enterEditMode(parseInt(e.target.closest('.segment-list-item').dataset.index)); } });
    segmentListUI.addEventListener('dragstart', (e) => { 
        if (isSpinning) return;
        const segmentItem = e.target.closest('.segment-list-item');
        if (segmentItem) {
            draggedIndex = parseInt(segmentItem.dataset.index); 
            e.dataTransfer.setData('sourceType', 'segment');
            segmentItem.classList.add('dragging'); 
        }
    });

    // Handle Item/Entity dragstart
    document.addEventListener('dragstart', (e) => {
        const itemSource = e.target.closest('.item-drag-source');
        if (itemSource) {
            e.dataTransfer.setData('sourceType', 'item');
            e.dataTransfer.setData('id', itemSource.dataset.id);
            e.dataTransfer.setData('name', itemSource.dataset.name);
            return;
        }
        const entitySource = e.target.closest('.entity-drag-source');
        if (entitySource) {
            e.dataTransfer.setData('sourceType', 'entity');
            e.dataTransfer.setData('id', entitySource.dataset.id);
            e.dataTransfer.setData('name', entitySource.dataset.name);
            return;
        }
    });

    segmentListUI.addEventListener('dragend', (e) => { const dragging = document.querySelector('.dragging'); if (dragging) dragging.classList.remove('dragging'); });
    segmentListUI.addEventListener('dragover', (e) => e.preventDefault());
    segmentListUI.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        if (isSpinning || !currentWheelName) return; 
        
        const sourceType = e.dataTransfer.getData('sourceType');
        const segments = wheelsData[currentWheelName].segments;

        if (sourceType === 'segment') {
            const targetElement = e.target.closest('.segment-list-item'); 
            if (!targetElement) return; 
            const newIndex = parseInt(targetElement.dataset.index); 
            if (draggedIndex === newIndex) return; 
            const [removed] = segments.splice(draggedIndex, 1); 
            segments.splice(newIndex, 0, removed); 
        } else if (sourceType === 'item' || sourceType === 'entity') {
            const name = e.dataTransfer.getData('name');
            const newSegment = {
                text: name,
                description: sourceType === 'item' ? 'Vật phẩm từ kho báu' : 'Thực thể từ danh sách',
                weight: 1,
                color: hslToHex(Math.floor(Math.random() * 360), 80, 55),
                actions: []
            };
            
            const targetElement = e.target.closest('.segment-list-item'); 
            if (targetElement) {
                const newIndex = parseInt(targetElement.dataset.index);
                segments.splice(newIndex, 0, newSegment);
            } else {
                segments.push(newSegment);
            }
        } else {
            return;
        }

        exitEditMode(); 
        throttledSaveState(); 
    });
    spinButton.addEventListener('click', startSpinSequence);
    skipButton.addEventListener('click', () => { const settings = wheelsData[currentWheelName]?.settings; if (settings && settings.defaultLink && settings.defaultLink !== 'None') { addLogMessage(`Thực thể <span class="log-highlight">${getActiveEntity()?.name}</span> đã bỏ lượt tại <span class="log-highlight">"${currentWheelName}"</span>.`); loadWheel(settings.defaultLink); } });
    resetSpinBtn.addEventListener('click', () => { if (!isSpinning) return; showConfirmationModal("Dừng chuỗi quay và hoàn tác mọi thay đổi?", () => { isSpinning = false; spinVelocity = 0; if (variableSnapshot) { entities[activeEntityId] = JSON.parse(JSON.stringify(variableSnapshot)); } endSpinSequenceCleanup(); recalculateActiveEntityStats(); drawWheel(); showNotification("Chuỗi quay đã được dừng và hoàn tác."); addLogMessage('--- Chuỗi quay đã được dừng và hoàn tác ---'); }); });
    spinCountVariableInput.addEventListener('input', (e) => { if (currentWheelName) { wheelsData[currentWheelName].settings.spinCountVariable = e.target.value.trim().replace(/\s+/g, '_'); updateViewerActions(); throttledSaveState();} });
    segmentRemovalModeSelect.addEventListener('change', (e) => { if (currentWheelName) { wheelsData[currentWheelName].settings.removalMode = e.target.value; throttledSaveState(); } });
    defaultLinkSelect.addEventListener('change', (e) => { if (currentWheelName) { wheelsData[currentWheelName].settings.defaultLink = e.target.value; updateViewerActions(); throttledSaveState(); } });
    activeEntitySelector.addEventListener('change', e => { activeEntityId = e.target.value === 'none' ? null : e.target.value; recalculateActiveEntityStats(); if(activeEntityId) { addLogMessage(`Thực thể hoạt động được đổi thành <span class="log-highlight">${entities[activeEntityId]?.name}</span>.`); } else { addLogMessage(`Không có thực thể nào được chọn.`); } });
    segmentActionPanel.addEventListener('change', (e) => { if (!e.target.matches('.custom-checkbox')) return; const details = e.target.closest('.action-group').querySelector('.action-details'); if (details) details.style.display = e.target.checked ? 'flex' : 'none'; });
    segmentActionPanel.addEventListener('input', () => { const actions = []; if(actionExecuteMacroEnabled.checked) { const target = actionExecuteMacroTarget.value; if (target) actions.push({ type: 'executeMacro', targetMacro: target }); } if (actionSetVariableEnabled.checked) { setVariableActionsContainer.querySelectorAll('.set-variable-action-row').forEach(row => { const actionData = { type: 'setVariable', target: row.querySelector('.action-var-name').value.trim().replace(/\s+/g, '_'), targetProperty: row.querySelector('.action-var-target-prop').value, operator: row.querySelector('.action-var-operator').value }; if (actionData.operator === 'invert') { actionData.min = row.querySelector('.action-var-min').value.trim(); actionData.max = row.querySelector('.action-var-max').value.trim(); } else if (!(UNARY_OPERATORS.includes(actionData.operator))) { actionData.value = row.querySelector('.action-var-value').value.trim(); } if (actionData.target) actions.push(actionData); }); } if (actionSetCollectionSlotsEnabled.checked) { const value = actionSetCollectionSlotsValue.value.trim(); const target = actionSetCollectionSlotsTarget.value; if (value && target) actions.push({ type: 'setCollectionSlots', targetCollection: target, value: value }); } if (actionAddToCollectionEnabled.checked) { const target = actionAddToCollectionTarget.value; if(target) actions.push({ type: 'addToCollection', targetCollection: target}); } if (actionSetItemInSlotEnabled.checked) { const target = actionSetItemInSlotTarget.value, slot = actionSetItemInSlotSlot.value.trim(), value = actionSetItemInSlotValue.value.trim(); if (target && slot && value) actions.push({type: 'setItemInSlot', targetCollection: target, slot, value}); } if (actionRemoveItemsEnabled.checked) { const actionData = { type: 'removeItems', targetCollection: actionRemoveItemsTarget.value, mode: actionRemoveItemsMode.value, amountType: actionRemoveItemsAmountType.value, amountValue1: actionRemoveItemsAmountValue1.value, amountValue2: actionRemoveItemsAmountValue2.value, amountValue3: actionRemoveItemsAmountValue3.value, }; actions.push(actionData); } if (actionGoToWheelEnabled.checked) { actions.push({ type: 'goToWheel', target: actionTargetWheelSelect.value }); } if (actionJumpToWheelEnabled.checked) { actions.push({ type: 'jumpToWheel', targetWheelId: actionJumpTargetWheelSelect.value }); } if (actionPlaySoundEnabled.checked) { const soundAction = editingSegmentData.actions?.find(a=>a.type==='playSound'); if(soundAction) actions.push(soundAction); } if (actionConditionalEnabled.checked) { actions.push({ type: 'conditionalReroll', operator: conditionOperatorSelect.value, value: parseInt(conditionValueInput.value), maxRerolls: parseInt(conditionRerollsInput.value) || 1 }); } if (document.getElementById('action-applyStatus-enabled').checked) { const name = document.getElementById('action-status-name').value.trim(); if (name) { const durType = document.getElementById('action-status-dur-type').value; const durVal = document.getElementById('action-status-dur-val').value.trim(); const inlineStatus = { type: 'applyStatus', _inline: true, statusName: name, statusDescription: document.getElementById('action-status-desc').value.trim(), endType: durType === 'wheel_end' ? 'afterWheel' : 'afterSpins' }; if (durType === 'turn_count') { inlineStatus.spinCount = parseInt(durVal) || 3; } else { inlineStatus.endWheel = document.getElementById('action-status-target-wheel').value.trim() || durVal; } const effects = []; document.querySelectorAll('#segment-status-effects-container .status-effect-row').forEach(row => { const target = row.querySelector('.effect-target').value.trim(); const operator = row.querySelector('.effect-operator').value; const value = row.querySelector('.effect-value').value.trim(); if (target) effects.push({ target, operator, value }); }); if (effects.length > 0) inlineStatus.effects = effects; actions.push(inlineStatus); } } if (document.getElementById('action-removeStatus-enabled').checked) { const name = document.getElementById('action-status-remove-name').value.trim(); if (name) actions.push({ type: 'removeStatus', statusName: name }); } editingSegmentData.actions = actions; updateAllActionSummaries(); });
    addSetVariableActionBtn.addEventListener('click', () => { setVariableActionsContainer.appendChild(createSetVariableActionRow({})); });
    setVariableActionsContainer.addEventListener('click', (e) => { if (e.target.classList.contains('btn-delete-action')) { e.target.closest('.set-variable-action-row').remove(); segmentActionPanel.dispatchEvent(new Event('input')); }});
    function updateRemoveItemsAmountUI() { const amountType = actionRemoveItemsAmountType.value; removeItemsAmountSpecific.classList.toggle('active', amountType === 'specific'); removeItemsAmountRange.classList.toggle('active', amountType === 'range'); }
    actionRemoveItemsAmountType.addEventListener('change', updateRemoveItemsAmountUI);
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
        const isTesting = window.parent && window.parent.document.getElementById('run-all-btn');
        if (isTesting) {
            if (callback) callback();
            return;
        }
        const modal = document.getElementById('result-modal'); 
        resultTitle.textContent = result.text; 
        resultDescription.textContent = result.description || ''; 
        resultDescription.style.display = result.description ? 'block' : 'none'; 
        modal.style.display = 'flex'; 
        setTimeout(() => modal.classList.add('active'), 10);
        document.getElementById('close-modal-button').onclick = () => { 
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; if (callback) callback(); }, 300);
        }; 
    }
    function showItemInfoPopup(itemName) { 
        const item = Object.values(itemDatabase).find(i => i.name === itemName); 
        if (!item) return; 
        const modal = document.getElementById('item-info-modal'); 
        document.getElementById('item-info-icon').src = item.icon || 'https://placehold.co/60x60/1a1a1a/888?text=?'; 
        document.getElementById('item-info-title').textContent = item.name; 
        document.getElementById('item-info-description').textContent = item.description || 'Vật phẩm này không có mô tả.'; 
        modal.style.display = 'flex'; 
        setTimeout(() => modal.classList.add('active'), 10);
    }
        function showConfirmationModal(message, onConfirm, onCancel) {
        return window.showConfirmationModal(message, onConfirm, onCancel);
    }
    if (!window.showConfirmationModal) {
        window.showConfirmationModal = function(message, onConfirm, onCancel) { 
            const modal = document.getElementById('confirmation-modal'); 
            modal.style.display = 'flex'; 
            modal.innerHTML = `<div class="modal-content"><h2>Xác nhận</h2><p style="font-size: 1.2rem; margin-bottom: 25px; color: #cbd5e1;">${message}</p><div class="btn-container" style="justify-content:center; gap: 15px;"><button id="confirm-yes" class="btn btn-danger">Đồng ý</button><button id="confirm-no" class="btn btn-secondary">Hủy bỏ</button></div></div>`; 
            setTimeout(() => modal.classList.add('active'), 10);
            const confirmBtn = document.getElementById('confirm-yes'); 
            const cancelBtn = document.getElementById('confirm-no'); 
            const confirmHandler = () => { onConfirm(); cleanup(); }; 
            const cancelHandler = () => { if(onCancel) onCancel(); cleanup(); }; 
            const cleanup = () => { 
                modal.classList.remove('active');
                setTimeout(() => { modal.style.display = 'none'; }, 300);
                confirmBtn.removeEventListener('click', confirmHandler); 
                cancelBtn.removeEventListener('click', cancelHandler); 
            }; 
            confirmBtn.addEventListener('click', confirmHandler); 
            cancelBtn.addEventListener('click', cancelHandler); 
        };
    }
    document.getElementById('close-item-info-modal-button').addEventListener('click', () => { 
        const modal = document.getElementById('item-info-modal');
        modal.classList.remove('active');
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    });
    sidebarTabContent.addEventListener('click', (e) => { const slot = e.target.closest('.collection-slot'); if (slot && slot.dataset.itemName) showItemInfoPopup(slot.dataset.itemName); });

    // --- INITIALIZE APP ---
    function initialize() { updateBackupListUI(); loadUserTemplates(); const savedData = localStorage.getItem('wheelEngineSaveData'); if (savedData) { try { const parsedData = JSON.parse(savedData); showConfirmationModal( "Phát hiện phiên làm việc chưa lưu. Bạn có muốn tải lại không?", () => { loadState(parsedData); }, () => { createDefaultData(); loadWheel(null); }); } catch(e) { createDefaultData(); loadWheel(null); } } else { createDefaultData(); loadWheel(null); } }
    function createDefaultData() {
        wheelsData = {};
        variableTemplate = {};
        collectionTemplate = {};
        macros = {};
        entities = {};
        computedVariables = [];
        conditionalRules = [];
        projectSettings = {
            themeAccent: '#ffd000',
            themeBg: '#121212',
            showWheelBorder: true,
            wheelBorderColor: '#ffffff',
            wheelBorderWidth: 5,
            enableConfetti: true,
            autoBackup: true
        };
        itemDatabase = {};
        tagDatabase = {};
        activeEntityId = null;
        wheelStack = [];
        updateAllUI();
        recalculateActiveEntityStats();
        addLogMessage("Chào mừng đến với Wheel Engine v19.4! Hãy bắt đầu sáng tạo.");
    }

    entitySearchInput.addEventListener('input', updateEntityListUI);
    itemSearchInput.addEventListener('input', updateItemDatabaseListUI);
    tagSearchInput.addEventListener('input', updateTagManagerListUI);

    if(openSettingsBtn) openSettingsBtn.addEventListener('click', () => { updateProjectSettingsUI(); settingsModal.style.display = 'flex'; });
    if(closeSettingsModalBtn) closeSettingsModalBtn.addEventListener('click', () => { settingsModal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.style.display = 'none'; });

    themeAccentColorInput.addEventListener('input', e => { projectSettings.themeAccent = e.target.value; applyProjectStyles(); throttledSaveState(); });
    themeBgColorInput.addEventListener('input', e => { projectSettings.themeBg = e.target.value; applyProjectStyles(); throttledSaveState(); });
    showWheelBorderCheckbox.addEventListener('change', e => { projectSettings.showWheelBorder = e.target.checked; drawWheel(); throttledSaveState(); });
    wheelBorderColorInput.addEventListener('input', e => { projectSettings.wheelBorderColor = e.target.value; drawWheel(); throttledSaveState(); });
    wheelBorderWidthInput.addEventListener('input', e => { projectSettings.wheelBorderWidth = parseInt(e.target.value); drawWheel(); throttledSaveState(); });
    enableConfettiCheckbox.addEventListener('change', e => { projectSettings.enableConfetti = e.target.checked; throttledSaveState(); });
    autoBackupCheckbox.addEventListener('change', e => { projectSettings.autoBackup = e.target.checked; throttledSaveState(); });

    restoreBackupBtn.addEventListener('click', () => {
        const val = backupListSelect.value;
        if (val === '') return;
        const idx = parseInt(val, 10);
        showConfirmationModal("Bạn có chắc chắn muốn khôi phục dữ liệu từ bản sao lưu này? Mọi thay đổi chưa lưu hiện tại sẽ bị ghi đè.", () => {
            try {
                const backups = JSON.parse(localStorage.getItem('wheelEngineBackups') || '[]');
                const selectedBackup = backups[idx];
                if (selectedBackup && selectedBackup.data) {
                    loadState(selectedBackup.data);
                    showNotification("Khôi phục bản sao lưu thành công.");
                } else {
                    showNotification("Lỗi: Bản sao lưu không hợp lệ.", true);
                }
            } catch (e) {
                showNotification("Lỗi: Không thể khôi phục bản sao lưu.", true);
            }
        });
    });

    resetToDefaultStyleBtn.addEventListener('click', () => {
        projectSettings.themeAccent = '#ffde59';
        projectSettings.themeBg = '#0f172a';
        projectSettings.showWheelBorder = true;
        projectSettings.wheelBorderColor = '#ffffff';
        projectSettings.wheelBorderWidth = 5;
        updateProjectSettingsUI();
        throttledSaveState();
    });

    document.getElementById('undo-btn').addEventListener('click', undo);
    document.getElementById('redo-btn').addEventListener('click', redo);

    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'z') { e.preventDefault(); undo(); }
        if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo(); }
    });

    function addToCollection(entityId, targetCollection, itemToAddName) {
        const entity = entities[entityId];
        if (!entity || !entity.collections[targetCollection] || !itemToAddName) return;
        
        const slots = entity.collections[targetCollection];
        const emptySlotIndex = slots.findIndex(slot => !slot);

        if (emptySlotIndex !== -1) {
            slots[emptySlotIndex] = itemToAddName;
            addLogMessage(`-> <span class="log-highlight">${itemToAddName}</span> đã được thêm vào Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name || targetCollection}</span>.`);
        } else {
            const itemToAdd = Object.values(itemDatabase).find(i => i.name === itemToAddName);
            if (itemToAdd && itemToAdd.priority !== undefined) {
                let leastRareIndex = -1;
                let highestPriorityNum = itemToAdd.priority;

                slots.forEach((existingName, idx) => {
                    const existingItem = Object.values(itemDatabase).find(i => i.name === existingName);
                    const existingPriority = existingItem ? (existingItem.priority || 10) : 10;
                    if (existingPriority > highestPriorityNum) {
                        highestPriorityNum = existingPriority;
                        leastRareIndex = idx;
                    }
                });

                if (leastRareIndex !== -1) {
                    const removedName = slots[leastRareIndex];
                    slots[leastRareIndex] = itemToAddName;
                    addLogMessage(`-> <span class="log-highlight">${itemToAddName}</span> (Prio ${itemToAdd.priority}) thay thế <span class="log-highlight">${removedName}</span> (Prio ${highestPriorityNum}) trong Kho Chứa.`);
                } else {
                    addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name || targetCollection}</span> đã đầy và vật phẩm mới không đủ độ hiếm để thay thế.`);
                }
            } else {
                addLogMessage(`-> Kho Chứa <span class="log-highlight">${collectionTemplate[targetCollection]?.name || targetCollection}</span> đã đầy.`);
            }
        }
        throttledSaveState();
    }

    function applyStatus(entityId, statusData) {
        const entity = entities[entityId];
        if (entity && statusData) {
            if (!entity.statuses) entity.statuses = [];
            const newStatus = JSON.parse(JSON.stringify(statusData));
            if (!newStatus.id) {
                newStatus.id = `status_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
            }
            
            if (newStatus.endType === undefined) newStatus.endType = 'afterSpins';
            if (newStatus.spinCount === undefined) newStatus.spinCount = newStatus.remaining || 3;
            if (newStatus.executionTiming === undefined) newStatus.executionTiming = 'immediate';
            if (newStatus.stackBehavior === undefined) newStatus.stackBehavior = 'stack';
            
            if (newStatus.stackBehavior === 'reset') {
                const existing = entity.statuses.find(s => s.name === newStatus.name);
                if (existing) {
                    existing.spinCount = newStatus.spinCount;
                    existing.remaining = newStatus.spinCount;
                    addLogMessage(`-> <span class="log-highlight">${entity.name}</span> làm mới thời hạn trạng thái: <span class="log-highlight">${newStatus.name}</span>.`);
                    throttledSaveState();
                    if (existing.executionTiming === 'immediate') processEntityStatuses('immediate', null, true);
                    return;
                }
            }
            
            newStatus.appliedWheelId = currentWheelName;
            entity.statuses.push(newStatus);
            addLogMessage(`-> <span class="log-highlight">${entity.name}</span> nhận trạng thái: <span class="log-highlight">${newStatus.name}</span>.`);
            throttledSaveState();
            
            if (newStatus.executionTiming === 'immediate') processEntityStatuses('immediate');
        }
    }

    function processEntityStatuses(timing, resultContext = null, force = false) {
        const entity = getActiveEntity();
        if (!entity || !entity.statuses) return;
        
        entity.statuses.forEach(status => {
            if (status.executionTiming !== timing && !force) return;
            
            let conditionsMet = true;
            if (status.conditions && status.conditions.length > 0) {
                const logicOp = status.logicOperator || 'AND';
                let metCount = 0;
                
                status.conditions.forEach(cond => {
                    let met = false;
                    if (cond.type === 'variableCompare') {
                        const left = evaluateFormula(cond.left), right = evaluateFormula(cond.right);
                        switch (cond.operator) {
                            case '==': met = left == right; break;
                            case '!=': met = left != right; break;
                            case '>': met = left > right; break;
                            case '<': met = left < right; break;
                            case '>=': met = left >= right; break;
                            case '<=': met = left <= right; break;
                        }
                    } else if (cond.type === 'hasItems') {
                        const collection = entity.collections?.[cond.collectionId];
                        if (collection) {
                            met = cond.items.every(item => collection.slots.includes(item));
                        }
                    }
                    if (met) metCount++;
                });
                
                conditionsMet = logicOp === 'AND' ? (metCount === status.conditions.length) : (metCount > 0);
            }
            
            if (conditionsMet && status.actions && status.actions.length > 0) {
                addLogMessage(`-> Trạng thái <span class="log-highlight">${status.name}</span> kích hoạt hiệu ứng.`);
                executeActions(status.actions, resultContext || { sourceWheelId: currentWheelName });
            }
        });
    }

    // =========================================================================
    // EXPOSE TO GLOBAL WINDOW OBJECT FOR E2E TESTING AUTOMATION
    // =========================================================================
    Object.defineProperty(window, 'entities', {
        get: () => entities,
        set: (v) => { entities = v; },
        configurable: true
    });
    Object.defineProperty(window, 'activeEntityId', {
        get: () => activeEntityId,
        set: (v) => { activeEntityId = v; },
        configurable: true
    });
    Object.defineProperty(window, 'activeEntity', {
        get: () => getActiveEntity(),
        configurable: true
    });
    Object.defineProperty(window, 'rules', {
        get: () => conditionalRules,
        set: (v) => { conditionalRules = v; },
        configurable: true
    });
    Object.defineProperty(window, 'conditionalRules', {
        get: () => conditionalRules,
        set: (v) => { conditionalRules = v; },
        configurable: true
    });
    Object.defineProperty(window, 'activeEditor', {
        get: () => activeEditor,
        set: (v) => { activeEditor = v; },
        configurable: true
    });
    Object.defineProperty(window, 'itemDatabase', {
        get: () => itemDatabase,
        set: (v) => { itemDatabase = v; },
        configurable: true
    });
    Object.defineProperty(window, 'wheelStack', {
        get: () => wheelStack,
        set: (v) => { wheelStack = v; },
        configurable: true
    });
    Object.defineProperty(window, 'wheelsData', {
        get: () => wheelsData,
        set: (v) => { wheelsData = v; },
        configurable: true
    });

    window.calculateGlobalStats = calculateGlobalStats;
    window.recalculateActiveEntityStats = recalculateActiveEntityStats;
    window.getVariableTotalValue = getVariableTotalValue;
    window.applyStatus = applyStatus;
    window.processSpinResult = processSpinResult;
    window.addToCollection = addToCollection;
    window.triggerAutoBackup = triggerAutoBackup;
    window.getAutocompleteSuggestions = getAutocompleteSuggestions;

    initialize();
    exitEditMode(); 
    resetGeneratorPanel();
});

