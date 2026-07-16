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
     * ⛅ Weather Sync Widget - 비동기 도시 선택 제어 통합 파이프라인
     */
    wireModernWeatherWidget() {
        const tempNode = document.getElementById('wTemp');
        const descNode = document.getElementById('wDesc');
        const citySelect = document.getElementById('city-select');

        const requestStream = async (lat, lon, cityName = '광주광역시') => {
            if (descNode) descNode.textContent = '불러오는 중... 📡';
            try {
                // Open-Meteo REST API를 이용해 비동기 날씨 데이터 취득
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
                const response = await fetch(url);
                if (!response.ok) throw new Error("네트워크 지연");
                const data = await response.json();

                const temp = data.current.temperature_2m;
                const humidity = data.current.relative_humidity_2m;

                if (tempNode) tempNode.textContent = `${temp} °C`;
                if (descNode) descNode.textContent = `${cityName} 습도 ${humidity}%`;
            } catch (err) {
                console.error("날씨 로드 에러:", err);
                if (tempNode) tempNode.textContent = '-- °C';
                if (descNode) descNode.textContent = '날씨 수신 지연';
            }
        };

        // 도시 선택 이벤트 리스너 통합 바인딩
        if (citySelect) {
            citySelect.addEventListener('change', (e) => {
                const coords = e.target.value.split(',');
                const cityName = citySelect.options[citySelect.selectedIndex].text.replace('📍 ', '');
                requestStream(coords[0], coords[1], cityName);
            });
            // Initial load (default is Gwangju)
            const defaultCoords = citySelect.value.split(',');
            requestStream(defaultCoords[0], defaultCoords[1], '광주광역시');
        } else {
            requestStream(35.1595, 126.8526, '광주광역시');
        }

        // 📟 고도화: 사용자 디바이스 분석 및 영속성 조회수 카운터 연산
        this.runAccessSessionLogger();
    }

    /**
     * 📟 User Agent 파서 & 로컬 조회수 마일스톤 카운터
     */
    runAccessSessionLogger() {
        const osNode = document.getElementById('detectedOSVal');
        const browserNode = document.getElementById('detectedBrowserVal');
        const countNode = document.getElementById('platformViewCount');

        if (!osNode || !browserNode || !countNode) return;

        // User Agent 파싱
        const ua = navigator.userAgent;
        let detectedOS = "Unknown OS";
        let detectedBrowser = "Unknown Browser";

        // OS 판별
        if (ua.indexOf("Win") !== -1) detectedOS = "Windows";
        else if (ua.indexOf("Mac") !== -1) detectedOS = "macOS Catalina+";
        else if (ua.indexOf("X11") !== -1) detectedOS = "UNIX";
        else if (ua.indexOf("Linux") !== -1) detectedOS = "Linux Core";
        else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) detectedOS = "Mobile Device";

        // 브라우저 판별
        if (ua.indexOf("Firefox") !== -1) detectedBrowser = "Mozilla Firefox";
        else if (ua.indexOf("SamsungBrowser") !== -1) detectedBrowser = "Samsung Internet";
        else if (ua.indexOf("Chrome") !== -1 && ua.indexOf("Safari") !== -1) detectedBrowser = "Google Chrome / Chromium";
        else if (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1) detectedBrowser = "Apple Safari";
        else if (ua.indexOf("Edge") !== -1) detectedBrowser = "Microsoft Edge";

        osNode.textContent = detectedOS;
        browserNode.textContent = detectedBrowser;

        // 로컬 영속성 조회수 세션 카운터 (세션당 1회씩 중복 방지 가드레일)
        let totalViews = parseInt(localStorage.getItem('skala-portal-total-views')) || 104; // 디폴트 보정 시작값
        const sessionChecked = sessionStorage.getItem('skala-session-viewed');

        if (!sessionChecked) {
            totalViews++;
            localStorage.setItem('skala-portal-total-views', totalViews);
            sessionStorage.setItem('skala-session-viewed', 'true');
        }

        countNode.textContent = `${totalViews} Hits`;
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
     * 🧪 기존 실습 3대 과제 알고리즘 연산 및 웰니스 갓생 챌린지 통합 데코레이터
     */
    bindSandboxAlgorithms() {
        // 내부 퀘스트 달성 상태 추적 레지스터
        this.questStatus = {
            running: false,
            gourmet: false,
            travel: false
        };

        const updateQuestStatusUI = () => {
            const bRunning = document.getElementById('badgeRunning');
            const bGourmet = document.getElementById('badgeGourmet');
            const bTravel = document.getElementById('badgeTravel');
            const milestoneBadge = document.getElementById('milestoneCount');
            const profileBox = document.querySelector('.naver-profile-box');

            if (bRunning && this.questStatus.running) {
                bRunning.style.background = 'rgba(224, 108, 83, 0.12)';
                bRunning.style.borderColor = 'var(--color-brand)';
                bRunning.style.color = 'var(--color-brand)';
                bRunning.innerHTML = '💯 성적 완료';
            }
            if (bGourmet && this.questStatus.gourmet) {
                bGourmet.style.background = 'rgba(16, 185, 129, 0.12)';
                bGourmet.style.borderColor = '#10b981';
                bGourmet.style.color = '#10b981';
                bGourmet.innerHTML = '🎯 예측 완료';
            }
            if (bTravel && this.questStatus.travel) {
                bTravel.style.background = 'rgba(59, 104, 135, 0.12)';
                bTravel.style.borderColor = 'var(--color-info)';
                bTravel.style.color = 'var(--color-info)';
                bTravel.innerHTML = '🎒 가방 완료';
            }

            // 모든 3대 웰니스 퀘스트 클리어 시, 마일스톤 동적 퀀텀 점프 및 프로필 카드 발광 오라 주입!
            if (this.questStatus.running && this.questStatus.gourmet && this.questStatus.travel) {
                if (milestoneBadge) {
                    milestoneBadge.textContent = '🏆 4 / 4 달성 완료 (갓생 파이프라인 동기화!)';
                    milestoneBadge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    milestoneBadge.style.boxShadow = '0 0 12px rgba(16, 185, 129, 0.4)';
                }
                if (profileBox) {
                    profileBox.style.boxShadow = '0 0 28px rgba(224, 108, 83, 0.35)';
                    profileBox.style.borderColor = 'var(--color-brand)';
                }
            }
        };

        const renderDisplayScreen = (mode, contentHTML) => {
            const canvas = document.getElementById('gameScreenCanvas');
            if (!canvas) return;
            canvas.innerHTML = `
                <div class="screen-crt-grid"></div>
                <div class="screen-title" style="margin-bottom:6px; border-bottom:1px dashed #3c2a25;">
                    <span>🎮 실시간 렌더러: ${mode}</span>
                    <span style="color:#ef4444; font-weight:bold;">● RUN</span>
                </div>
                ${contentHTML}
            `;
        };

        window.executeGradeCalc = () => {
            const rawScore = parseInt(document.getElementById('gradeInput').value);
            const logBox = document.getElementById('gradeLog');

            if (isNaN(rawScore) || rawScore < 0 || rawScore > 100) {
                logBox.innerHTML = `<div class="sandbox-log-item" style="color:var(--color-brand);">⚠️ 0~100점 사이의 점수를 입력하세요.</div>`;
                return;
            }

            let calculatedGrade = 'F';
            let styleColor = 'var(--color-brand)';
            let levelTag = "성민 마스터 LV.1";
            let charEmoji = "👨‍💻";

            if (rawScore >= 90) { 
                calculatedGrade = 'A'; 
                styleColor = '#10b981'; 
                levelTag = "성민 마스터 LV.99 (초인)";
                charEmoji = "⚡🏃‍♂️💨";
                this.questStatus.running = true;
            }
            else if (rawScore >= 80) { 
                calculatedGrade = 'B'; 
                styleColor = '#3b6887'; 
                levelTag = "성민 마스터 LV.50 (쾌적)";
                charEmoji = "🏃‍♂️";
                this.questStatus.running = true;
            }
            else if (rawScore >= 70) { 
                calculatedGrade = 'C'; 
                styleColor = 'var(--text-main)'; 
                levelTag = "성민 마스터 LV.30 (도보)";
                charEmoji = "🚶‍♂️";
            }
            else if (rawScore >= 60) { 
                calculatedGrade = 'D'; 
                styleColor = 'var(--text-main)'; 
                levelTag = "성민 마스터 LV.10 (사색)";
                charEmoji = "🛋️";
            }

            logBox.innerHTML = `
                <div class="sandbox-log-item">점수: <strong>${rawScore}점</strong></div>
                <div class="sandbox-log-item" style="color:${styleColor}">학점: <strong>[ ${calculatedGrade} 학점 ]</strong></div>
            `;

            // 가상 디스플레이에 성장형 캐릭터와 학점 progress 실시간 렌더링!
            const screenHTML = `
                <div class="avatar-stage-wrap" style="width:100%;">
                    <div class="avatar-character" style="font-size:3.5rem;">${charEmoji}</div>
                    <span class="avatar-level-tag" style="background:${styleColor}">${levelTag}</span>
                    <div class="progress-rail">
                        <div class="progress-bar-fill" style="width: ${rawScore}%; background:${styleColor};"></div>
                    </div>
                    <div style="font-size:0.75rem; color:#8b716b; font-weight:800; margin-top:2px;">
                        학점 도달 지표: ${rawScore}% 수렴 완료
                    </div>
                </div>
            `;
            renderDisplayScreen("학점 연산 & 성장 아바타", screenHTML);
            updateQuestStatusUI();
        };

        window.executeUpDownGame = () => {
            const userInput = parseInt(document.getElementById('updownInput').value);
            const logBox = document.getElementById('updownLog');

            if (isNaN(userInput) || userInput < 1 || userInput > 100) {
                logBox.innerHTML = `<div class="sandbox-log-item" style="color:var(--color-brand);">⚠️ 1~100 사이의 숫자를 대입하십시오.</div>`;
                return;
            }

            this.updownAttempts++;
            let stepText = "";
            let dotsHTML = "";

            // 스캔 도트 그래픽 빌드
            for (let i = 1; i <= 10; i++) {
                let dotClass = "scan-dot";
                // 10등분 대략 매핑
                if (userInput >= (i-1)*10 && userInput <= i*10) {
                    dotClass += " active";
                }
                if (this.secretNumber >= (i-1)*10 && this.secretNumber <= i*10) {
                    dotClass += " target";
                }
                dotsHTML += `<div class="${dotClass}"></div>`;
            }

            if (userInput === this.secretNumber) {
                logBox.innerHTML = `
                    <div class="sandbox-log-item" style="color:var(--color-success); font-weight:800;">🎉 정답! [임계 난수: ${this.secretNumber}]</div>
                    <div class="sandbox-log-item">추측 시도 횟수: <strong>${this.updownAttempts}회</strong></div>
                `;
                this.questStatus.gourmet = true;
                
                stepText = `<span style="color:#10b981; font-weight:900;">🏆 TARGET MATCHED (${this.secretNumber})</span>`;
                const screenHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
                        <div style="font-size:2.8rem; animation: successBounce 1.5s infinite alternate;">🍻🍕</div>
                        <div style="font-size:0.75rem; color:#fff; font-weight:800; max-width:180px; line-height:1.4;">
                            ${stepText}<br>부촌 뼈찜 캡사이신 임계 스캔 성공! 시원한 생맥주가 지급되었습니다!
                        </div>
                        <div class="binary-scan-rail">${dotsHTML}</div>
                    </div>
                `;
                renderDisplayScreen("이진 센서 임계 탐색", screenHTML);

                this.secretNumber = Math.floor(Math.random() * 100) + 1;
                this.updownAttempts = 0;
                updateQuestStatusUI();
                return;
            }

            if (userInput > this.secretNumber) {
                stepText = `<span style="color:#ef4444; font-weight:900;">🔽 임계값 초과 (DOWN)</span>`;
                logBox.innerHTML = `
                    <div class="sandbox-log-item" style="font-weight:800; color:var(--color-brand);">🔽 DOWN! 너무 큼</div>
                    <div class="sandbox-log-item">추측 시도: <strong>${this.updownAttempts}회</strong></div>
                `;
            } else {
                stepText = `<span style="color:#f59e0b; font-weight:900;">🔼 임계값 미달 (UP)</span>`;
                logBox.innerHTML = `
                    <div class="sandbox-log-item" style="font-weight:800; color:var(--color-brand);">🔼 UP! 덜 매움</div>
                    <div class="sandbox-log-item">추측 시도: <strong>${this.updownAttempts}회</strong></div>
                `;
            }

            // 가상 디스플레이에 이진 탐색 스캔 도트 가이드 실시간 렌더링!
            const screenHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:10px; width:100%;">
                    <div style="font-size:2.2rem; filter: drop-shadow(0 0 6px var(--color-brand));">📡🌶️</div>
                    <div style="font-size:0.75rem; color:#8b716b; font-weight:800; line-height:1.4;">
                        ${stepText}<br>추측값: ${userInput} | 누적 스캔: ${this.updownAttempts}회
                    </div>
                    <div class="binary-scan-rail">${dotsHTML}</div>
                </div>
            `;
            renderDisplayScreen("이진 센서 임계 탐색", screenHTML);
        };

        window.resetUpDownGame = () => {
            this.secretNumber = Math.floor(Math.random() * 100) + 1;
            this.updownAttempts = 0;
            document.getElementById('updownInput').value = '';
            document.getElementById('updownLog').innerHTML = `<div class="sandbox-log-item">🎲 캡사이신 임계값 센서가 재부팅되었습니다.</div>`;
            
            const screenHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
                    <div style="font-size:2rem; animation: breatheMotion 1.5s infinite alternate;">🔄</div>
                    <div style="font-size:0.75rem; color:#8b716b; font-weight:800;">임계 센서 리셋 완료</div>
                </div>
            `;
            renderDisplayScreen("이진 센서 임계 탐색", screenHTML);
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
                logBox.innerHTML = `<div class="sandbox-log-item">🎒 가방이 비어있습니다.</div>`;
                const screenHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
                        <div style="font-size:2rem;">📭</div>
                        <div style="font-size:0.75rem; color:#8b716b; font-weight:800;">가방 버퍼 메모리 공소</div>
                    </div>
                `;
                renderDisplayScreen("메모리 버퍼 스택 제어", screenHTML);
                return;
            }

            // 성민 마스터 여행 필수품 키워드가 포함되었는지 동적 검증
            const hasPassport = this.memoryBagInstance.some(item => item.includes('여권') || item.includes('passport'));
            const hasShoes = this.memoryBagInstance.some(item => item.includes('러닝') || item.includes('신발') || item.includes('shoes'));
            const hasDoll = this.memoryBagInstance.some(item => item.includes('인형') || item.includes('doll') || item.includes('캐릭터'));

            if (this.memoryBagInstance.length >= 3 && hasPassport && (hasShoes || hasDoll)) {
                this.questStatus.travel = true;
                updateQuestStatusUI();
            }

            logBox.innerHTML = this.memoryBagInstance.map((node, index) => `
                <div class="sandbox-log-item">📦 슬롯 [0${index}] : <strong>${node}</strong></div>
            `).reverse().join('');

            // 가상 디스플레이에 입체 적재 스택 랙 실시간 렌더링!
            const rackItemsHTML = this.memoryBagInstance.map(node => `
                <div class="console-rack-item">${node}</div>
            `).join('');

            const screenHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:10px; width:100%;">
                    <div style="font-size:0.72rem; font-weight:900; color:#8b716b; margin-bottom: 2px;">
                        STACK BUFFER (수용량: ${this.memoryBagInstance.length}/5)
                    </div>
                    <div class="console-stack-rack">
                        ${rackItemsHTML}
                    </div>
                </div>
            `;
            renderDisplayScreen("메모리 버퍼 스택 제어", screenHTML);
        };
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new IntegratedPortalController();
});