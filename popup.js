/**
 * Genspark Conversation Manager v2.6 - Popup Script
 * לוגיקת ממשק המשתמש של התוסף
 */

// Translation System
const translations = {
    he: {
        // Header
        appName: 'Genspark Conversation Manager',
        version: 'גרסה',

        // Status
        checkingConnection: 'בודק חיבור...',
        searchingTab: 'מחפש טאב פעיל של Genspark...',
        connectedSuccess: 'מחובר בהצלחה',
        extensionActive: 'התוסף פועל',
        notOnGenspark: 'לא בדף Genspark',
        onlyOnGenspark: 'התוסף פועל רק באתר genspark.ai',
        connectionError: 'שגיאת חיבור',
        cannotConnect: 'לא ניתן להתחבר לתוסף',

        // Stats
        messagesInConv: 'הודעות בשיחה',
        savedConversations: 'שיחות שמורות',

        // Search
        search: 'חיפוש',
        searchInConv: 'בשיחה הנוכחית',
        searchAll: 'בכל השיחות',
        searchPlaceholderConv: 'הקלד טקסט או מילה לחיפוש בשיחה...',
        searchPlaceholderAll: 'הקלד טקסט או מילה לחיפוש בכל השיחות...',
        searchBtn: 'חפש',
        noResults: 'לא נמצאו תוצאות',
        searching: 'מחפש...',
        resultsFound: 'נמצאו {count} תוצאות',

        // Conversation Manager
        conversationManager: 'מנהל שיחות',
        saveCurrentConv: 'שמור שיחה נוכחית',
        viewSavedConvs: 'צפה בשיחות שמורות',
        downloadAllConvs: 'הורד את כל השיחות',

        // Saved Conversations List
        noSavedConvs: 'אין שיחות שמורות',
        saveConvToStart: 'שמור שיחה נוכחית כדי להתחיל',
        openConv: 'פתח שיחה',
        deleteConv: 'מחק שיחה',
        confirmDelete: 'האם אתה בטוח שברצונך למחוק שיחה זו?',
        confirmDownloadAll: 'האם אתה בטוח שברצונך להוריד את כל השיחות השמורות?',

        // Download Buttons
        downloadConvBtn: 'הורד שיחה (JSON + TXT)',
        downloadJsonBtn: 'הורד JSON בלבד',
        downloadTxtBtn: 'הורד TXT בלבד',
        refreshBtn: 'רענן נתונים',
        searchInConvBtn: 'חיפוש בשיחה',

        // Messages
        downloadingConv: 'מוריד שיחה...',
        convDownloaded: 'השיחה הורדה בהצלחה!',
        downloadError: 'שגיאה בהורדה',
        savingConv: 'שומר שיחה...',
        convSaved: 'שיחה נשמרה בהצלחה!',
        messages: 'הודעות',
        convDeleted: 'שיחה נמחקה בהצלחה',
        downloadingAll: 'מוריד את כל השיחות...',
        allConvsDownloaded: '{count} שיחות הורדו בהצלחה!',
        noConvsToDownload: 'אין שיחות שמורות להורדה',
        openingInNewTab: 'פותח שיחה בטאב חדש...',
        noUrlAvailable: 'אין URL זמין לשיחה זו',
        navigatingToConv: 'מנווט לשיחה...',
        navigationComplete: 'ניווט לשיחה הושלם',
        navigationError: 'שגיאה בניווט לשיחה',
        enterSearchText: 'נא להזין טקסט לחיפוש',
        searchError: 'שגיאה בחיפוש',
        scrollToMessage: 'גלילה להודעה',
        refreshingData: 'מרענן נתונים...',
        dataRefreshed: 'נתונים עודכנו',
        noConnection: 'אין חיבור לתוסף',
        loadingSavedConvs: 'טוען שיחות שמורות...',
        loadingError: 'שגיאה בטעינת שיחות שמורות',
        deleteError: 'שגיאה במחיקת שיחה',
        saveError: 'שגיאה בשמירת שיחה',

        // Match scores
        exactMatch: 'התאמה מלאה',
        partialMatch: 'התאמה חלקית',

        // Footer
        footerText: 'חיפוש, הורדה וניהול שיחות מתקדם',

        // Loading
        loading: 'טוען...'
    },
    en: {
        // Header
        appName: 'Genspark Conversation Manager',
        version: 'Version',

        // Status
        checkingConnection: 'Checking connection...',
        searchingTab: 'Searching for active Genspark tab...',
        connectedSuccess: 'Connected successfully',
        extensionActive: 'Extension is active',
        notOnGenspark: 'Not on Genspark page',
        onlyOnGenspark: 'Extension only works on genspark.ai',
        connectionError: 'Connection error',
        cannotConnect: 'Cannot connect to extension',

        // Stats
        messagesInConv: 'Messages in conversation',
        savedConversations: 'Saved conversations',

        // Search
        search: 'Search',
        searchInConv: 'In current conversation',
        searchAll: 'In all conversations',
        searchPlaceholderConv: 'Type text or word to search in conversation...',
        searchPlaceholderAll: 'Type text or word to search in all conversations...',
        searchBtn: 'Search',
        noResults: 'No results found',
        searching: 'Searching...',
        resultsFound: '{count} results found',

        // Conversation Manager
        conversationManager: 'Conversation Manager',
        saveCurrentConv: 'Save current conversation',
        viewSavedConvs: 'View saved conversations',
        downloadAllConvs: 'Download all conversations',

        // Saved Conversations List
        noSavedConvs: 'No saved conversations',
        saveConvToStart: 'Save current conversation to get started',
        openConv: 'Open conversation',
        deleteConv: 'Delete conversation',
        confirmDelete: 'Are you sure you want to delete this conversation?',
        confirmDownloadAll: 'Are you sure you want to download all saved conversations?',

        // Download Buttons
        downloadConvBtn: 'Download conversation (JSON + TXT)',
        downloadJsonBtn: 'Download JSON only',
        downloadTxtBtn: 'Download TXT only',
        refreshBtn: 'Refresh data',
        searchInConvBtn: 'Search in conversation',

        // Messages
        downloadingConv: 'Downloading conversation...',
        convDownloaded: 'Conversation downloaded successfully!',
        downloadError: 'Download error',
        savingConv: 'Saving conversation...',
        convSaved: 'Conversation saved successfully!',
        messages: 'messages',
        convDeleted: 'Conversation deleted successfully',
        downloadingAll: 'Downloading all conversations...',
        allConvsDownloaded: '{count} conversations downloaded successfully!',
        noConvsToDownload: 'No saved conversations to download',
        openingInNewTab: 'Opening conversation in new tab...',
        noUrlAvailable: 'No URL available for this conversation',
        navigatingToConv: 'Navigating to conversation...',
        navigationComplete: 'Navigation completed',
        navigationError: 'Navigation error',
        enterSearchText: 'Please enter text to search',
        searchError: 'Search error',
        scrollToMessage: 'Scroll to message',
        refreshingData: 'Refreshing data...',
        dataRefreshed: 'Data updated',
        noConnection: 'No connection to extension',
        loadingSavedConvs: 'Loading saved conversations...',
        loadingError: 'Error loading saved conversations',
        deleteError: 'Error deleting conversation',
        saveError: 'Error saving conversation',

        // Match scores
        exactMatch: 'Exact match',
        partialMatch: 'Partial match',

        // Footer
        footerText: 'Advanced search, download and conversation management',

        // Loading
        loading: 'Loading...'
    }
};

class PopupManager {
    constructor() {
        this.isConnected = false;
        this.currentTab = null;
        this.stats = { messageCount: 0 };
        this.currentSearchMode = 'conversation'; // 'conversation' or 'all'
        this.currentLang = 'he'; // Default language: Hebrew

        this.elements = {};
        this.init();
    }

    async init() {
        // Load language preference
        await this.loadLanguage();

        this.bindElements();
        this.attachEventListeners();
        this.checkConnection();
        this.updateUILanguage();

        console.log('🎛️ Popup Manager אותחל');
    }

    async loadLanguage() {
        try {
            const stored = await chrome.storage.local.get(['language']);
            this.currentLang = stored.language || 'he';
        } catch (error) {
            console.error('Failed to load language:', error);
            this.currentLang = 'he';
        }
    }

    async setLanguage(lang) {
        if (lang !== 'he' && lang !== 'en') {
            console.error('Invalid language:', lang);
            return;
        }

        this.currentLang = lang;

        // Save to storage
        try {
            await chrome.storage.local.set({ language: lang });
        } catch (error) {
            console.error('Failed to save language:', error);
        }

        // Update UI
        this.updateUILanguage();
        console.log(`Language changed to: ${lang}`);
    }

    t(key, params = {}) {
        // Translation function
        let text = translations[this.currentLang][key] || key;

        // Replace parameters
        Object.keys(params).forEach(paramKey => {
            text = text.replace(`{${paramKey}}`, params[paramKey]);
        });

        return text;
    }

    updateUILanguage() {
        // Update direction
        const isRTL = this.currentLang === 'he';
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', this.currentLang);

        // Update all text elements
        this.updateStaticTexts();
        this.updateButtonTexts();

        // Update language selector buttons
        if (this.elements.langHe && this.elements.langEn) {
            this.elements.langHe.classList.toggle('active', this.currentLang === 'he');
            this.elements.langEn.classList.toggle('active', this.currentLang === 'en');
        }
    }

    updateStaticTexts() {
        // Update header
        const versionText = document.querySelector('.version');
        if (versionText) {
            versionText.textContent = `${this.t('version')} 2.6`;
        }

        // Update stats labels
        const messageLabel = document.querySelector('.stat-label');
        if (messageLabel) {
            messageLabel.textContent = this.t('messagesInConv');
        }

        const savedLabel = document.querySelectorAll('.stat-label')[1];
        if (savedLabel) {
            savedLabel.textContent = this.t('savedConversations');
        }

        // Update search title
        const searchTitle = document.querySelector('.search-title');
        if (searchTitle) {
            searchTitle.textContent = `🔍 ${this.t('search')}`;
        }

        // Update section title
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.textContent = `📚 ${this.t('conversationManager')}`;
        }

        // Update footer
        const footerText = document.querySelector('.footer div:last-child');
        if (footerText) {
            footerText.textContent = this.t('footerText');
        }
    }

    updateButtonTexts() {
        // Update all buttons with data-i18n attribute or specific IDs
        if (this.elements.toggleSearchBtn) {
            this.elements.toggleSearchBtn.innerHTML = `<span class="icon">🔍</span> ${this.t('searchInConvBtn')}`;
        }

        if (this.elements.downloadBtn) {
            this.elements.downloadBtn.innerHTML = `<span class="icon">📥</span> ${this.t('downloadConvBtn')}`;
        }

        if (this.elements.downloadJsonBtn) {
            this.elements.downloadJsonBtn.innerHTML = `<span class="icon">📄</span> ${this.t('downloadJsonBtn')}`;
        }

        if (this.elements.downloadTxtBtn) {
            this.elements.downloadTxtBtn.innerHTML = `<span class="icon">📝</span> ${this.t('downloadTxtBtn')}`;
        }

        if (this.elements.refreshBtn) {
            this.elements.refreshBtn.innerHTML = `<span class="icon">🔄</span> ${this.t('refreshBtn')}`;
        }

        if (this.elements.saveConversationBtn) {
            this.elements.saveConversationBtn.innerHTML = `<span class="icon">💾</span> ${this.t('saveCurrentConv')}`;
        }

        if (this.elements.viewSavedBtn) {
            this.elements.viewSavedBtn.innerHTML = `<span class="icon">📚</span> ${this.t('viewSavedConvs')}`;
        }

        if (this.elements.downloadAllBtn) {
            this.elements.downloadAllBtn.innerHTML = `<span class="icon">📦</span> ${this.t('downloadAllConvs')}`;
        }

        if (this.elements.searchBtn) {
            this.elements.searchBtn.innerHTML = `<span class="icon">🔎</span> ${this.t('searchBtn')}`;
        }

        if (this.elements.searchModeConversation) {
            this.elements.searchModeConversation.textContent = `💬 ${this.t('searchInConv')}`;
        }

        if (this.elements.searchModeAll) {
            this.elements.searchModeAll.textContent = `📋 ${this.t('searchAll')}`;
        }

        // Update placeholders
        if (this.elements.searchInput) {
            this.elements.searchInput.placeholder = this.currentSearchMode === 'conversation'
                ? this.t('searchPlaceholderConv')
                : this.t('searchPlaceholderAll');
        }
    }

    bindElements() {
        this.elements = {
            statusCard: document.getElementById('statusCard'),
            statusTitle: document.getElementById('statusTitle'),
            statusInfo: document.getElementById('statusInfo'),
            statsGrid: document.getElementById('statsGrid'),
            messageCount: document.getElementById('messageCount'),
            savedCount: document.getElementById('savedCount'),
            downloadBtn: document.getElementById('downloadBtn'),
            downloadJsonBtn: document.getElementById('downloadJsonBtn'),
            downloadTxtBtn: document.getElementById('downloadTxtBtn'),
            refreshBtn: document.getElementById('refreshBtn'),
            toggleSearchBtn: document.getElementById('toggleSearchBtn'),
            searchContainer: document.getElementById('searchContainer'),
            searchInput: document.getElementById('searchInput'),
            searchBtn: document.getElementById('searchBtn'),
            closeSearch: document.getElementById('closeSearch'),
            searchResults: document.getElementById('searchResults'),
            searchModeConversation: document.getElementById('searchModeConversation'),
            searchModeAll: document.getElementById('searchModeAll'),
            managerSection: document.getElementById('managerSection'),
            saveConversationBtn: document.getElementById('saveConversationBtn'),
            viewSavedBtn: document.getElementById('viewSavedBtn'),
            downloadAllBtn: document.getElementById('downloadAllBtn'),
            savedConversationsContainer: document.getElementById('savedConversationsContainer'),
            savedConversationsList: document.getElementById('savedConversationsList'),
            closeSaved: document.getElementById('closeSaved'),
            langHe: document.getElementById('langHe'),
            langEn: document.getElementById('langEn'),
            loading: document.getElementById('loading'),
            message: document.getElementById('message')
        };
    }

    attachEventListeners() {
        // כפתור הורדה כללית
        this.elements.downloadBtn?.addEventListener('click', () => {
            this.downloadConversation('both');
        });

        // הורדת JSON בלבד
        this.elements.downloadJsonBtn?.addEventListener('click', () => {
            this.downloadConversation('json');
        });

        // הורדת TXT בלבד
        this.elements.downloadTxtBtn?.addEventListener('click', () => {
            this.downloadConversation('txt');
        });

        // כפתור רענון
        this.elements.refreshBtn?.addEventListener('click', () => {
            this.refreshData();
        });

        // כפתור פתיחת חיפוש
        this.elements.toggleSearchBtn?.addEventListener('click', () => {
            this.toggleSearch();
        });

        // כפתור סגירת חיפוש
        this.elements.closeSearch?.addEventListener('click', () => {
            this.closeSearchPanel();
        });

        // כפתור חיפוש
        this.elements.searchBtn?.addEventListener('click', () => {
            this.performSearch();
        });

        // חיפוש בלחיצה על Enter
        this.elements.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // מצב חיפוש - בשיחה הנוכחית
        this.elements.searchModeConversation?.addEventListener('click', () => {
            this.setSearchMode('conversation');
        });

        // מצב חיפוש - בכל השיחות
        this.elements.searchModeAll?.addEventListener('click', () => {
            this.setSearchMode('all');
        });

        // כפתור שמירת שיחה
        this.elements.saveConversationBtn?.addEventListener('click', () => {
            this.saveConversation();
        });

        // כפתור צפייה בשיחות שמורות
        this.elements.viewSavedBtn?.addEventListener('click', () => {
            this.viewSavedConversations();
        });

        // כפתור הורדת כל השיחות
        this.elements.downloadAllBtn?.addEventListener('click', () => {
            this.downloadAllConversations();
        });

        // כפתור סגירת רשימת שיחות שמורות
        this.elements.closeSaved?.addEventListener('click', () => {
            this.closeSavedConversations();
        });

        // Language selection buttons
        this.elements.langHe?.addEventListener('click', () => {
            this.setLanguage('he');
        });

        this.elements.langEn?.addEventListener('click', () => {
            this.setLanguage('en');
        });
    }

    async checkConnection() {
        try {
            this.showLoading(true);
            this.updateStatus('🔍', 'בודק חיבור...', 'מחפש טאב פעיל של Genspark...');

            // קבל את הטאב הנוכחי
            const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
            this.currentTab = tabs[0];

            if (!this.currentTab) {
                throw new Error('לא נמצא טאב פעיל');
            }

            // בדוק אם זה דף של Genspark
            if (!this.currentTab.url?.includes('genspark.ai')) {
                this.updateStatus('⚠️', 'לא בדף Genspark', 'התוסף פועל רק באתר genspark.ai');
                this.setButtonsEnabled(false);
                return;
            }

            // נסה לשלוח ping לתוסף
            const response = await this.sendMessageToTab('ping');

            if (response && response.status === 'active') {
                this.isConnected = true;
                this.updateStatus('✅', 'מחובר בהצלחה', `התוסף פועל (${response.version || 'לא ידוע'})`);
                this.setButtonsEnabled(true);
                await this.loadStats();
                await this.loadSavedConversationsCount();
            } else {
                throw new Error('התוסף לא מגיב');
            }

        } catch (error) {
            console.error('Connection failed:', error);
            this.isConnected = false;
            this.updateStatus('❌', 'שגיאת חיבור', error.message || 'לא ניתן להתחבר לתוסף');
            this.setButtonsEnabled(false);
        } finally {
            this.showLoading(false);
        }
    }

    async sendMessageToTab(action, data = {}) {
        if (!this.currentTab?.id) {
            throw new Error('אין טאב פעיל');
        }

        try {
            const response = await chrome.tabs.sendMessage(this.currentTab.id, {
                action: action,
                ...data
            });

            return response;
        } catch (error) {
            console.error('Message sending failed:', error);

            // נסה להזריק את הסקריפט אם הוא לא קיים
            if (error.message?.includes('Could not establish connection')) {
                await this.injectContentScript();

                // נסה שוב אחרי הזרקה
                return await chrome.tabs.sendMessage(this.currentTab.id, {
                    action: action,
                    ...data
                });
            }

            throw error;
        }
    }

    async injectContentScript() {
        try {
            await chrome.scripting.executeScript({
                target: { tabId: this.currentTab.id },
                files: ['content.js']
            });

            // המתן קצת לאתחול
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            console.error('Script injection failed:', error);
            throw new Error('כשל בהזרקת הסקריפט');
        }
    }

    async loadStats() {
        try {
            const response = await this.sendMessageToTab('getStats');

            if (response) {
                this.stats = {
                    messageCount: response.messageCount || 0
                };

                this.updateStatsDisplay();
            }

        } catch (error) {
            console.error('Failed to load stats:', error);
        }
    }

    updateStatsDisplay() {
        if (this.elements.messageCount) {
            this.elements.messageCount.textContent = this.stats.messageCount;
        }

        // הצג נתונים
        if (this.elements.statsGrid) {
            this.elements.statsGrid.style.display = 'grid';
        }
    }

    async downloadConversation(format) {
        try {
            if (!this.isConnected) {
                throw new Error('אין חיבור לתוסף');
            }

            this.showLoading(true);
            this.showMessage('מוריד שיחה...', 'info');

            const response = await this.sendMessageToTab('download', { format });

            if (response && response.success) {
                this.showMessage('✅ השיחה הורדה בהצלחה!', 'success');

                // רענן נתונים
                setTimeout(() => this.loadStats(), 1000);
            } else {
                throw new Error('כשל בהורדת השיחה');
            }

        } catch (error) {
            console.error('Download failed:', error);
            this.showMessage('❌ שגיאה בהורדה: ' + error.message, 'error');
        } finally {
            this.showLoading(false);
        }
    }

    async refreshData() {
        this.showMessage('מרענן נתונים...', 'info');
        await this.checkConnection();
        this.showMessage('✅ נתונים עודכנו', 'success');
    }

    toggleSearch() {
        if (!this.isConnected) {
            this.showMessage('❌ אין חיבור לתוסף', 'error');
            return;
        }

        const isVisible = this.elements.searchContainer.style.display !== 'none';

        if (isVisible) {
            this.closeSearchPanel();
        } else {
            this.openSearchPanel();
        }
    }

    openSearchPanel() {
        this.elements.searchContainer.style.display = 'block';
        this.elements.searchInput.value = '';
        this.elements.searchResults.innerHTML = '';
        this.elements.searchInput.focus();
    }

    closeSearchPanel() {
        this.elements.searchContainer.style.display = 'none';
        this.elements.searchInput.value = '';
        this.elements.searchResults.innerHTML = '';
    }

    setSearchMode(mode) {
        this.currentSearchMode = mode;

        // עדכן כפתורי מצב
        if (mode === 'conversation') {
            this.elements.searchModeConversation?.classList.add('active');
            this.elements.searchModeAll?.classList.remove('active');
            this.elements.searchInput.placeholder = 'הקלד טקסט או מילה לחיפוש בשיחה...';
        } else {
            this.elements.searchModeConversation?.classList.remove('active');
            this.elements.searchModeAll?.classList.add('active');
            this.elements.searchInput.placeholder = 'הקלד טקסט או מילה לחיפוש בכל השיחות...';
        }

        // נקה תוצאות קודמות
        this.elements.searchResults.innerHTML = '';
        this.elements.searchInput.value = '';

        console.log(`🔍 מצב חיפוש שונה ל: ${mode === 'conversation' ? 'שיחה נוכחית' : 'כל השיחות'}`);
    }

    async performSearch() {
        const query = this.elements.searchInput.value.trim();

        if (!query) {
            this.showMessage('⚠️ נא להזין טקסט לחיפוש', 'error');
            return;
        }

        try {
            this.showLoading(true);
            this.elements.searchResults.innerHTML = '<div class="search-no-results">מחפש...</div>';

            if (this.currentSearchMode === 'conversation') {
                // חיפוש בשיחה הנוכחית
                const response = await this.sendMessageToTab('search', { query });

                if (response && response.success) {
                    this.displaySearchResults(response.results, query);
                } else {
                    throw new Error('כשל בחיפוש בשיחה');
                }
            } else {
                // חיפוש בכל השיחות
                const response = await this.sendMessageToTab('searchAll', { query });

                if (response && response.success) {
                    this.displayAllSearchResults(response.results, query);
                } else {
                    throw new Error('כשל בחיפוש בכל השיחות');
                }
            }

        } catch (error) {
            console.error('Search failed:', error);
            this.showMessage('❌ שגיאה בחיפוש: ' + error.message, 'error');
            this.elements.searchResults.innerHTML = '<div class="search-no-results">שגיאה בחיפוש</div>';
        } finally {
            this.showLoading(false);
        }
    }

    displaySearchResults(results, query) {
        if (!results || results.length === 0) {
            this.elements.searchResults.innerHTML = '<div class="search-no-results">לא נמצאו תוצאות</div>';
            return;
        }

        let html = '';

        results.forEach((result) => {
            const typeLabel = result.type === 'user' ? '👤 משתמש' : '🤖 AI';

            // הדגש את המילה שחיפשנו
            const highlightedSnippet = this.highlightText(result.snippet, query);

            html += `
                <div class="search-result-item" data-index="${result.index}">
                    <div class="search-result-type">${typeLabel}</div>
                    <div class="search-result-content">${highlightedSnippet}</div>
                </div>
            `;
        });

        this.elements.searchResults.innerHTML = html;

        // הוסף event listeners לתוצאות
        this.elements.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                this.highlightMessageInPage(index);
            });
        });

        this.showMessage(`✅ נמצאו ${results.length} תוצאות`, 'success');
    }

    displayAllSearchResults(results, query) {
        if (!results || results.length === 0) {
            this.elements.searchResults.innerHTML = '<div class="search-no-results">לא נמצאו תוצאות בשיחות</div>';
            return;
        }

        let html = '';

        results.forEach((result) => {
            // הדגש את המילה שחיפשנו
            const highlightedSnippet = this.highlightText(result.snippet, query);
            const highlightedTitle = this.highlightText(result.title, query);

            // תצוגת ציון התאמה
            let matchBadge = '';
            if (result.score >= 100) {
                matchBadge = '<span class="search-match-score">⭐ התאמה מלאה</span>';
            } else if (result.score >= 80) {
                matchBadge = '<span class="search-match-score">✓ התאמה חלקית</span>';
            }

            html += `
                <div class="search-result-item" data-conversation-id="${result.conversationId}">
                    <div class="search-result-type">
                        ${matchBadge}
                        💬 ${highlightedTitle}
                    </div>
                    <div class="search-result-content">${highlightedSnippet}</div>
                </div>
            `;
        });

        this.elements.searchResults.innerHTML = html;

        // הוסף event listeners לתוצאות
        this.elements.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const conversationId = item.dataset.conversationId;
                this.navigateToConversation(conversationId);
            });
        });

        this.showMessage(`✅ נמצאו ${results.length} תוצאות ב-${results.length} שיחות`, 'success');
    }

    async navigateToConversation(conversationId) {
        try {
            this.showMessage('מנווט לשיחה...', 'info');

            await this.sendMessageToTab('navigateToConversation', { conversationId });

            this.showMessage('✅ ניווט לשיחה הושלם', 'success');

            // סגור את פאנל החיפוש אחרי כמה שניות
            setTimeout(() => {
                this.closeSearchPanel();
            }, 1500);

        } catch (error) {
            console.error('Navigation failed:', error);
            this.showMessage('❌ שגיאה בניווט לשיחה', 'error');
        }
    }

    highlightText(text, query) {
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);

        if (index === -1) return text;

        const before = text.substring(0, index);
        const match = text.substring(index, index + query.length);
        const after = text.substring(index + query.length);

        return `${before}<span class="search-highlight">${match}</span>${after}`;
    }

    async highlightMessageInPage(index) {
        try {
            await this.sendMessageToTab('highlightMessage', { index });
            this.showMessage('✅ גלילה להודעה', 'success');
        } catch (error) {
            console.error('Highlight failed:', error);
            this.showMessage('❌ שגיאה בהדגשת הודעה', 'error');
        }
    }

    updateStatus(icon, title, info) {
        if (this.elements.statusTitle) {
            const iconSpan = this.elements.statusTitle.querySelector('.icon');
            if (iconSpan) iconSpan.textContent = icon;

            const titleText = this.elements.statusTitle.childNodes[1];
            if (titleText) titleText.textContent = title;
        }

        if (this.elements.statusInfo) {
            this.elements.statusInfo.textContent = info;
        }

        // שנה צבע כרטיס הסטטוס
        if (this.elements.statusCard) {
            this.elements.statusCard.style.borderRightColor = 
                icon === '✅' ? '#28a745' : 
                icon === '❌' ? '#dc3545' : 
                icon === '⚠️' ? '#ffc107' : '#007bff';
        }
    }

    setButtonsEnabled(enabled) {
        const buttons = [
            this.elements.downloadBtn,
            this.elements.downloadJsonBtn,
            this.elements.downloadTxtBtn,
            this.elements.toggleSearchBtn,
            this.elements.saveConversationBtn,
            this.elements.viewSavedBtn,
            this.elements.downloadAllBtn
        ];

        buttons.forEach(button => {
            if (button) {
                button.disabled = !enabled;
            }
        });

        // הצג את מנהל השיחות אם יש חיבור
        if (this.elements.managerSection) {
            this.elements.managerSection.style.display = enabled ? 'block' : 'none';
        }
    }

    showLoading(show) {
        if (this.elements.loading) {
            this.elements.loading.style.display = show ? 'block' : 'none';
        }
    }

    showMessage(text, type = 'info') {
        if (!this.elements.message) return;

        this.elements.message.textContent = text;
        this.elements.message.className = type;
        this.elements.message.style.display = 'block';

        // הסתר הודעה אחרי 3 שניות
        setTimeout(() => {
            if (this.elements.message) {
                this.elements.message.style.display = 'none';
            }
        }, 3000);
    }

    // Conversation Manager Functions
    async saveConversation() {
        try {
            if (!this.isConnected) {
                throw new Error('אין חיבור לתוסף');
            }

            this.showLoading(true);
            this.showMessage('שומר שיחה...', 'info');

            const response = await this.sendMessageToTab('saveConversation');

            if (response && response.success) {
                this.showMessage(`✅ שיחה נשמרה בהצלחה! (${response.messageCount} הודעות)`, 'success');
                await this.loadSavedConversationsCount();
            } else {
                throw new Error(response.error || 'כשל בשמירת השיחה');
            }

        } catch (error) {
            console.error('Save conversation failed:', error);
            this.showMessage('❌ שגיאה בשמירת שיחה: ' + error.message, 'error');
        } finally {
            this.showLoading(false);
        }
    }

    async loadSavedConversationsCount() {
        try {
            const stored = await chrome.storage.local.get(['savedConversations']);
            const savedConversations = stored.savedConversations || [];

            if (this.elements.savedCount) {
                this.elements.savedCount.textContent = savedConversations.length;
            }

            return savedConversations.length;

        } catch (error) {
            console.error('Failed to load saved conversations count:', error);
            return 0;
        }
    }

    async viewSavedConversations() {
        try {
            this.showLoading(true);

            const stored = await chrome.storage.local.get(['savedConversations']);
            const savedConversations = stored.savedConversations || [];

            if (savedConversations.length === 0) {
                this.elements.savedConversationsList.innerHTML = `
                    <div class="no-saved-conversations">
                        אין שיחות שמורות<br>
                        שמור שיחה נוכחית כדי להתחיל
                    </div>
                `;
            } else {
                let html = '';

                savedConversations.forEach((conv, index) => {
                    const savedDate = new Date(conv.savedAt);
                    const dateStr = savedDate.toLocaleDateString('he-IL');
                    const timeStr = savedDate.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });

                    html += `
                        <div class="saved-conversation-item" data-index="${index}" data-id="${conv.id}">
                            <div class="saved-conversation-header">
                                <div class="saved-conversation-title">${conv.title}</div>
                                <div class="saved-conversation-actions">
                                    <button class="saved-conversation-action open" title="פתח שיחה" data-index="${index}">
                                        🔗
                                    </button>
                                    <button class="saved-conversation-action delete" title="מחק שיחה" data-index="${index}">
                                        🗑️
                                    </button>
                                </div>
                            </div>
                            <div class="saved-conversation-meta">
                                <span>📅 ${dateStr}</span>
                                <span>⏰ ${timeStr}</span>
                                <span>💬 ${conv.messageCount} הודעות</span>
                            </div>
                        </div>
                    `;
                });

                this.elements.savedConversationsList.innerHTML = html;

                // הוסף event listeners לפעולות
                this.elements.savedConversationsList.querySelectorAll('.saved-conversation-action.open').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const index = parseInt(btn.dataset.index);
                        this.openConversation(savedConversations[index]);
                    });
                });

                this.elements.savedConversationsList.querySelectorAll('.saved-conversation-action.delete').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const index = parseInt(btn.dataset.index);
                        this.deleteConversation(index);
                    });
                });
            }

            // הצג את הקונטיינר
            this.elements.savedConversationsContainer.style.display = 'block';

        } catch (error) {
            console.error('Failed to view saved conversations:', error);
            this.showMessage('❌ שגיאה בטעינת שיחות שמורות', 'error');
        } finally {
            this.showLoading(false);
        }
    }

    closeSavedConversations() {
        this.elements.savedConversationsContainer.style.display = 'none';
    }

    async deleteConversation(index) {
        try {
            if (!confirm('האם אתה בטוח שברצונך למחוק שיחה זו?')) {
                return;
            }

            this.showLoading(true);

            const stored = await chrome.storage.local.get(['savedConversations']);
            const savedConversations = stored.savedConversations || [];

            savedConversations.splice(index, 1);

            await chrome.storage.local.set({ savedConversations: savedConversations });

            this.showMessage('✅ שיחה נמחקה בהצלחה', 'success');

            // רענן את התצוגה
            await this.loadSavedConversationsCount();
            await this.viewSavedConversations();

        } catch (error) {
            console.error('Failed to delete conversation:', error);
            this.showMessage('❌ שגיאה במחיקת שיחה', 'error');
        } finally {
            this.showLoading(false);
        }
    }

    openConversation(conversation) {
        if (conversation.url) {
            chrome.tabs.create({ url: conversation.url });
            this.showMessage('✅ פותח שיחה בטאב חדש...', 'success');
        } else {
            this.showMessage('⚠️ אין URL זמין לשיחה זו', 'error');
        }
    }

    async downloadAllConversations() {
        try {
            if (!confirm('האם אתה בטוח שברצונך להוריד את כל השיחות השמורות?')) {
                return;
            }

            this.showLoading(true);
            this.showMessage('מוריד את כל השיחות...', 'info');

            const stored = await chrome.storage.local.get(['savedConversations']);
            const savedConversations = stored.savedConversations || [];

            if (savedConversations.length === 0) {
                throw new Error('אין שיחות שמורות להורדה');
            }

            // צור קובץ JSON עם כל השיחות
            const allConversationsData = {
                exportDate: new Date().toISOString(),
                totalConversations: savedConversations.length,
                conversations: savedConversations
            };

            const jsonContent = JSON.stringify(allConversationsData, null, 2);
            const txtContent = this.convertAllConversationsToText(savedConversations);

            // הורד JSON
            const jsonBlob = new Blob([jsonContent], { type: 'application/json' });
            const jsonUrl = URL.createObjectURL(jsonBlob);
            const jsonFilename = `genspark_all_conversations_${new Date().toISOString().split('T')[0]}.json`;

            chrome.downloads.download({
                url: jsonUrl,
                filename: jsonFilename,
                saveAs: true
            });

            // הורד TXT
            const txtBlob = new Blob([txtContent], { type: 'text/plain; charset=utf-8' });
            const txtUrl = URL.createObjectURL(txtBlob);
            const txtFilename = `genspark_all_conversations_${new Date().toISOString().split('T')[0]}.txt`;

            chrome.downloads.download({
                url: txtUrl,
                filename: txtFilename,
                saveAs: true
            });

            this.showMessage(`✅ ${savedConversations.length} שיחות הורדו בהצלחה!`, 'success');

        } catch (error) {
            console.error('Download all conversations failed:', error);
            this.showMessage('❌ שגיאה בהורדת שיחות: ' + error.message, 'error');
        } finally {
            this.showLoading(false);
        }
    }

    convertAllConversationsToText(conversations) {
        let text = '='.repeat(80) + '\n';
        text += 'כל השיחות השמורות - Genspark Conversation Manager\n';
        text += `תאריך ייצוא: ${new Date().toLocaleString('he-IL')}\n`;
        text += `סך הכל שיחות: ${conversations.length}\n`;
        text += '='.repeat(80) + '\n\n';

        conversations.forEach((conv, index) => {
            text += `\n${'='.repeat(80)}\n`;
            text += `שיחה #${index + 1}: ${conv.title}\n`;
            text += `נשמר ב: ${new Date(conv.savedAt).toLocaleString('he-IL')}\n`;
            text += `כמות הודעות: ${conv.messageCount}\n`;
            text += `URL: ${conv.url}\n`;
            text += '='.repeat(80) + '\n\n';

            conv.messages.forEach((msg, msgIndex) => {
                const type = msg.type === 'user' ? 'משתמש' : 'AI';
                text += `[${msgIndex + 1}] ${type}:\n`;
                text += `${msg.text}\n`;
                text += '-'.repeat(80) + '\n';
            });

            text += '\n';
        });

        return text;
    }
}

// אתחול כאשר הדף נטען
document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
});

// טיפול בשגיאות גלובליות
window.addEventListener('error', (event) => {
    console.error('Popup error:', event.error);
});

// Log לצורך דיבוג
console.log('🎮 Genspark Conversation Manager Popup v2.6 נטען');