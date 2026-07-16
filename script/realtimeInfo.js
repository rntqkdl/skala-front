/**
 * Realtime High-Performance Information Processor
 */

export const RealtimeClock = {
    start() {
        const clockEl = document.getElementById('realtimeClock');
        const dateEl = document.getElementById('realtimeDate');
        if (!clockEl || !dateEl) return;

        const update = () => {
            const now = new Date();
            
            // 시, 분, 초 포맷 정밀 패딩 보정
            clockEl.textContent = now.toTimeString().split(' ')[0];

            // 날짜 및 요일 처리
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            dateEl.textContent = now.toLocaleDateString('ko-KR', options);

            // CPU 리소스를 낭비하는 인라인 setInterval 대신 프레임 최적화 루프 사용 가능하나, 초단위 동화를 위해 가벼운 풀링 유지
        };

        update();
        setInterval(update, 1000);
    }
};