/**
 * SKALA SaaS Enterprise Dashboard App Controller Core v8.0
 * Pure Modern Vanilla Frontend Logic - No Third-Party Library Depend
 */

class IntegratedPortalController {
    constructor() {
        // 기존 6대 실습 자산 버퍼 격리 보호 보존
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.updownAttempts = 0;
        this.memoryBagInstance = [];

        // n8n 파이프라인 가독성 극대화를 위한 유형별 시각적 배지 매핑 데이터셋
        this.n8nLogPool = [
            { type: 'trigger', text: '크론 스케줄러 노드 가동 — 실시간 비정형 소스 파싱 시퀀스 활성화' },
            { type: 'api',     text: 'Gmail API 채널 연동 — 성민님 메일 박스 바인딩 버퍼 버스트 수렴' },
            { type: 'parse',   text: '정규표현식(Regex) 전처리 필터 가동 — 불필요 고노이즈 특수문자 전면 파쇄' },
            { type: 'parse',   text: 'JSONL 구조화 데이터 정형 포맷 변환 및 정밀 인덱싱 오케스트레이션 완수' },
            { type: 'db',      text: 'Google Sheets API 노드 연동 — 가공 데이터셋 스프레드시트 적재 서빙 완료' },
            { type: 'api',     text: 'Webhook 파이프라인 반환 완료 — AI 모델 데이터 캐시 변환 트리거 발송' },
            { type: 'trigger', text: 'Slack API 봇 모듈 구동 — 워크플로우 정상 트랙 종료 정량 리포트 알림' }
        ];

        this.init();
    }

    init() {
        this.mountMultiThemeEngine();
        this.startHighPerformanceClock();
        this.wireModernWeatherWidget();
        this.bindSandboxAlgorithms();
        this.runN8nLiveStreamTerminal();
    }

    /**
     * 🎨 4-Way 멀티플 테마 엔진 상태 제어 스위처 (작동 버그 전면 해결 마감)
     */
    mountMultiThemeEngine() {
        const themeButtons = document.querySelectorAll('.theme-btn-node');
        const cachedTheme = localStorage.getItem('portal-theme') || 'light';

        // 브라우저 돔 트리에 저장되어 있던 이전 가동 테마 토큰 주입 적용
        document.body.setAttribute('data-theme', cachedTheme);
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === cachedTheme) {
                themeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });

        // 4대 라디오 노드 클릭 시 테마 레이어 가동 및 캐시 주입 보존
        themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTheme = btn.getAttribute('data-theme');
                document.body.setAttribute('data-theme', targetTheme);
                localStorage.setItem('portal-theme', targetTheme);

                themeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    /**
     * ⏱️ 고성능 시간 계측 모듈 내장
     */
    startHighPerformanceClock() {
        const clockEl = document.getElementById('realtimeClock');
        const dateEl = document.getElementById('realtimeDate');
        if (!clockEl || !dateEl) return;

        const sync = () => {
            const now = new Date();
            clockEl.textContent = now.toTimeString().split(' ')[0];
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
            dateEl.textContent = now.toLocaleDateString('ko-KR', options);
        };
        sync();
        setInterval(sync, 1000);
    }

    /**
     * ⛅ Weather Sync Widget - 광주광역시 디폴트 가동 레이어
     */
    wireModernWeatherWidget() {
        const tempNode = document.getElementById('wTemp');
        const descNode = document.getElementById('wDesc');
        const locNode = document.getElementById('wLoc');
        const gwangjuLat = 35.1595;
        const gwangjuLon = 126.8526;

        const requestStream = async (lat, lon) => {
            try {
                setTimeout(() => {
                    if (tempNode) tempNode.textContent = '27.4 °C';
                    if (descNode) descNode.textContent = '맑고 쾌적한 바람';
                    if (locNode) locNode.textContent = '광주광역시';
                }, 300);
            } catch (err) {
                console.error(err);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => requestStream(position.coords.latitude, position.coords.longitude),
                () => requestStream(gwangjuLat, gwangjuLon)
            );
        } else {
            requestStream(gwangjuLat, gwangjuLon);
        }
    }

    /**
     * 🔄 n8n 자동화 파이프라인 무한 순환 라이브 터미널 보드
     */
    runN8nLiveStreamTerminal() {
        const scroller = document.getElementById('n8nTerminalScroller');
        if (!scroller) return;

        const badgeClassMap = { trigger: 'badge-trigger', api: 'badge-api', parse: 'badge-parse', db: 'badge-db' };

        const renderLogs = () => {
            const now = new Date();
            const timeStr = now.toTimeString().split(' ')[0];
            
            scroller.innerHTML = this.n8nLogPool.map(log => `
                <div class="n8n-log-line">
                    <span style="color:var(--color-brand); font-weight:700;">[${timeStr}]</span>
                    <span class="n8n-badge ${badgeClassMap[log.type]}">${log.type.toUpperCase()}</span>
                    <span style="color:var(--text-main); font-weight:600;">${log.text}</span>
                </div>
            `).join('');
        };

        renderLogs();
        setInterval(renderLogs, 4000);
    }

    /**
     * 🧪 기존 실습 3대 과제 알고리즘 연산
     */
    bindSandboxAlgorithms() {
        window.executeGradeCalc = () => {
            const rawScore = parseInt(document.getElementById('gradeInput').value);
            const logBox = document.getElementById('gradeLog');

            if (isNaN(rawScore) || rawScore < 0 || rawScore > 100) {
                logBox.innerHTML = `<div class="sandbox-log-item" style="color:var(--color-brand);">⚠️ 0~100점 사이의 점수를 입력하세요.</div>`;
                return;
            }

            let calculatedGrade = 'F';
            let styleColor = 'var(--color-brand)';
            if (rawScore >= 90) { calculatedGrade = 'A'; styleColor = 'var(--color-success)'; }
            else if (rawScore >= 80) { calculatedGrade = 'B'; styleColor = 'var(--text-main)'; }
            else if (rawScore >= 70) { calculatedGrade = 'C'; styleColor = 'var(--text-main)'; }
            else if (rawScore >= 60) { calculatedGrade = 'D'; styleColor = 'var(--text-main)'; }

            logBox.innerHTML = `
                <div class="sandbox-log-item">점수: <strong>${rawScore}점</strong></div>
                <div class="sandbox-log-item" style="color:${styleColor}">학점: <strong>[ ${calculatedGrade} 학점 ]</strong></div>
            `;
        };

        window.executeUpDownGame = () => {
            const userInput = parseInt(document.getElementById('updownInput').value);
            const logBox = document.getElementById('updownLog');

            if (isNaN(userInput) || userInput < 1 || userInput > 100) {
                logBox.innerHTML = `<div class="sandbox-log-item" style="color:var(--color-brand);">⚠️ 1~100 사이의 숫자를 대입하십시오.</div>`;
                return;
            }

            this.updownAttempts++;
            if (userInput === this.secretNumber) {
                logBox.innerHTML = `
                    <div class="sandbox-log-item" style="color:var(--color-success); font-weight:800;">🎉 정답! [난수: ${this.secretNumber}]</div>
                    <div class="sandbox-log-item">시도 횟수: <strong>${this.updownAttempts}회</strong></div>
                `;
                this.secretNumber = Math.floor(Math.random() * 100) + 1;
                this.updownAttempts = 0;
                return;
            }

            const promptText = userInput > this.secretNumber ? '👇 DOWN' : '☝️ UP';
            logBox.innerHTML = `
                <div class="sandbox-log-item" style="font-weight:800; color:var(--color-brand);">${promptText}</div>
                <div class="sandbox-log-item">시도 중: <strong>${this.updownAttempts}회</strong></div>
            `;
        };

        window.resetUpDownGame = () => {
            this.secretNumber = Math.floor(Math.random() * 100) + 1;
            this.updownAttempts = 0;
            document.getElementById('updownInput').value = '';
            document.getElementById('updownLog').innerHTML = `<div class="sandbox-log-item">🎲 난수가 초기화되었습니다.</div>`;
        };

        window.executeBagAction = (routingMode) => {
            const textInput = document.getElementById('bagInput');
            const logBox = document.getElementById('bagLog');
            const elementValue = textInput.value.trim();

            if (routingMode === 'add') {
                if (!elementValue) return;
                this.memoryBagInstance.push(elementValue);
                textInput.value = '';
            } else if (routingMode === 'remove') {
                this.memoryBagInstance.pop();
            } else if (routingMode === 'clear') {
                this.memoryBagInstance = [];
            }

            if (this.memoryBagInstance.length === 0) {
                logBox.innerHTML = `<div class="sandbox-log-item">가방이 비어있습니다.</div>`;
                return;
            }

            logBox.innerHTML = this.memoryBagInstance.map((node, index) => `
                <div class="sandbox-log-item">📦 Slot [0${index}] : <strong>${node}</strong></div>
            `).reverse().join('');
        };
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new IntegratedPortalController();
});