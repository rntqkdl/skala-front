/**
 * Vanilla Theme Management Layer
 */

export const ThemeEngine = {
    init() {
        const themeBtn = document.getElementById('themeBtn');
        if (!themeBtn) return;

        // 로컬스토리지 캐시 검증
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);

        themeBtn.addEventListener('click', () => this.toggle());
    },

    toggle() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    }
};