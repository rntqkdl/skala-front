/**
 * SKALA SaaS Enterprise Dashboard App Controller Core v8.0
 * Pure Modern Vanilla Frontend Logic - No Third-Party Library Depend
 */

// 🎉 전역 네온 파티클 축하 기믹 (GPU 가속 지원 및 라이트하우스 렌더링 최적화 준수)
window.triggerNeonCelebration = (x, y) => {
  const colors = ["#e06c53", "#8bb867", "#3b6887", "#10b981", "#f59e0b", "#8e65c9"];
  const container = document.body;
  const particleCount = 45;

  // x, y 좌표가 제공되지 않으면 화면 정중앙을 기준으로 설정
  const originX = x !== undefined ? x : window.innerWidth / 2;
  const originY = y !== undefined ? y : window.innerHeight / 2;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "celebration-particle";

    const size = Math.random() * 12 + 6; // 6px ~ 18px 랜덤 입자
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.boxShadow = `0 0 12px ${color}, 0 0 20px ${color}`;
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 180 + 80;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    particle.style.setProperty("--tx", `${tx}px`);
    particle.style.setProperty("--ty", `${ty}px`);

    container.appendChild(particle);

    // 애니메이션 종료 시 DOM 자동 청소
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }
};

class IntegratedPortalController {
  constructor() {
    // 기존 6대 실습 자산 버퍼 격리 보호 보존
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.updownAttempts = 0;
    this.memoryBagInstance = [];

    // 🚀 고도화 4대 피처 확장용 영속 상태 및 구조체 정의
    this.gradeSubjects = JSON.parse(localStorage.getItem("skala-grade-subjects")) || [
      { subject: "Python 전처리", score: 95 },
      { subject: "SpringBoot 서버", score: 88 },
    ];

    this.updownDifficulty = "normal";
    this.updownMin = 1;
    this.updownMax = 100;
    this.updownMaxAttempts = 7;
    this.updownLogs = [];

    this.bagTotalWeight = 0;
    this.bagMaxWeight = 12;
    this.bagGradeMap = {
      여권: "legendary",
      passport: "legendary",
      러닝화: "legendary",
      shoes: "legendary",
      신발: "legendary",
      인형: "legendary",
      doll: "legendary",
      스마트폰: "epic",
      phone: "epic",
      노트북: "epic",
      laptop: "epic",
      지갑: "rare",
      wallet: "rare",
      책: "rare",
      book: "rare",
    };

    this.activeNoticeDay = "today"; // 급식 알림 상태 ('today' 또는 'tomorrow')

    // n8n 파이프라인 가독성 극대화를 위한 유형별 시각적 배지 매핑 데이터셋
    this.n8nLogPool = [
      { type: "trigger", text: "크론 스케줄러 노드 가동 — 실시간 비정형 소스 파싱 시퀀스 활성화" },
      { type: "api", text: "Gmail API 채널 연동 — 성민님 메일 박스 바인딩 버퍼 버스트 수렴" },
      { type: "parse", text: "정규표현식(Regex) 전처리 필터 가동 — 불필요 고노이즈 특수문자 전면 파쇄" },
      { type: "parse", text: "JSONL 구조화 데이터 정형 포맷 변환 및 정밀 인덱싱 오케스트레이션 완수" },
      { type: "db", text: "Google Sheets API 노드 연동 — 가공 데이터셋 스프레드시트 적재 서빙 완료" },
      { type: "api", text: "Webhook 파이프라인 반환 완료 — AI 모델 데이터 캐시 변환 트리거 발송" },
      { type: "trigger", text: "Slack API 봇 모듈 구동 — 워크플로우 정상 트랙 종료 정량 리포트 알림" },
    ];

    this.init();
  }

  init() {
    // 💡 글로벌 포어 모듈(portfolio.js) 통합 호출로 중복 로직 제로화 완수!
    if (typeof window.initCommonClock === "function") {
      window.initCommonClock("realtimeClock", "realtimeDate");
    }
    if (typeof window.initCommonWeather === "function") {
      window.initCommonWeather("wTemp", "wDesc", "city-select");
    }
    this.runAccessSessionLogger();
    this.bindSandboxAlgorithms();
    this.runN8nLiveStreamTerminal();
    this.mountGwangjuMealNotice();
    this.reCalculateGPA(false); // GPA 초기 로드 (축하 불포함)
  }

  /**
   * 📟 User Agent 파서 & 로컬 조회수 마일스톤 카운터
   */
  runAccessSessionLogger() {
    const osNode = document.getElementById("detectedOSVal");
    const browserNode = document.getElementById("detectedBrowserVal");
    const countNode = document.getElementById("platformViewCount");

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
    let totalViews = parseInt(localStorage.getItem("skala-portal-total-views")) || 104; // 디폴트 보정 시작값
    const sessionChecked = sessionStorage.getItem("skala-session-viewed");

    if (!sessionChecked) {
      totalViews++;
      localStorage.setItem("skala-portal-total-views", totalViews);
      sessionStorage.setItem("skala-session-viewed", "true");
    }

    countNode.textContent = `${totalViews} Hits`;
  }

  /**
   * 🔄 n8n 자동화 파이프라인 무한 순환 라이브 터미널 보드 (수동 트리거 연동)
   */
  runN8nLiveStreamTerminal() {
    const scroller = document.getElementById("n8nTerminalScroller");
    if (!scroller) return;

    const badgeClassMap = { trigger: "badge-trigger", api: "badge-api", parse: "badge-parse", db: "badge-db" };

    const renderLogs = () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      scroller.innerHTML = this.n8nLogPool
        .map(
          (log) => `
                <div class="n8n-log-line">
                    <span style="color:var(--color-brand); font-weight:700;">[${timeStr}]</span>
                    <span class="n8n-badge ${badgeClassMap[log.type]}">${log.type.toUpperCase()}</span>
                    <span style="color:var(--text-main); font-weight:600;">${log.text}</span>
                </div>
            `,
        )
        .join("");
    };

    renderLogs();
    this.n8nIntervalId = setInterval(renderLogs, 4000);

    // ⚡ A: 수동 파이프라인 트리거 시뮬레이션
    window.triggerInteractiveN8nPipeline = () => {
      const statusNode = document.getElementById("n8nStatus");
      if (this.isPipelineRunning) {
        alert("현재 비정형 소스 파이프라인 정제 작업이 진행 중입니다. 잠시만 대기해 주세요!");
        return;
      }

      this.isPipelineRunning = true;
      if (statusNode) {
        statusNode.textContent = "● 전처리 연산 중...";
        statusNode.style.color = "var(--color-brand)";
      }

      clearInterval(this.n8nIntervalId);
      scroller.innerHTML = "";

      let step = 0;
      const pipelineSteps = [
        { type: "trigger", text: "⚡ [1단계] 크론 트리거 가동 ➔ 수동 오케스트레이션 정제 시퀀스 시작" },
        { type: "api", text: "📡 [2단계] Google Sheets API 커넥터 가동 ➔ 7월 광주 캠퍼스 급식 원천 데이터 인입 수렴" },
        { type: "parse", text: "🧼 [3단계] 정규표현식(Regex) 전처리 필터 개시 ➔ 공백, 특수문자, 노이즈 파쇄 정밀 정제 완료" },
        { type: "parse", text: "📝 [4단계] JSONL 비정형 구조체 정형 변환 마일스톤 가동 ➔ 수렴 데이터 무결성 체크 통과" },
        { type: "db", text: "💾 [5단계] 로컬 상태 관리 레지스터 동기화 ➔ GwangjuMealDB 영속성 파이프라인 캐시 주입 마감" },
      ];

      const runNextStep = () => {
        if (step < pipelineSteps.length) {
          const log = pipelineSteps[step];
          const now = new Date();
          const timeStr = now.toTimeString().split(" ")[0];

          const line = document.createElement("div");
          line.className = "n8n-log-line";
          line.innerHTML = `
            <span style="color:var(--color-brand); font-weight:700;">[${timeStr}]</span>
            <span class="n8n-badge ${badgeClassMap[log.type]}">${log.type.toUpperCase()}</span>
            <span style="color:var(--text-main); font-weight:600;">${log.text}</span>
          `;
          scroller.appendChild(line);
          scroller.scrollTop = scroller.scrollHeight; // Auto scroll to bottom

          // 가상 디스플레이 캔버스에도 실시간 파이프라인 공정 상태 투영!
          const progressPercent = Math.round(((step + 1) / pipelineSteps.length) * 100);
          const canvasHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
              <div style="font-size:2rem; animation: successBounce 1s infinite alternate;">📡⚙️</div>
              <div style="font-size:0.75rem; color:var(--text-muted); font-weight:800; text-align:center;">
                파이프라인 무결 연산 공정: ${progressPercent}%<br>
                <span style="color:var(--color-brand);">${log.text}</span>
              </div>
              <div class="progress-rail" style="max-width:140px; height:6px; margin-top: 4px;">
                <div class="progress-bar-fill" style="width: ${progressPercent}%; background:var(--color-brand); height:100%;"></div>
              </div>
            </div>
          `;
          this.renderDisplayScreen("실시간 데이터 전처리 파이프라인", canvasHTML);

          step++;
          setTimeout(runNextStep, 1000);
        } else {
          // 완료 분기
          if (statusNode) {
            statusNode.textContent = "● 정상 작동 중";
            statusNode.style.color = "#a3e635";
          }
          this.isPipelineRunning = false;
          window.triggerNeonCelebration(); // 완료 축포 발사!

          const successHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
              <div style="font-size:2.5rem; animation: successBounce 1.5s infinite alternate;">💯✅</div>
              <div style="font-size:0.75rem; color:var(--color-success); font-weight:900; text-align:center;">
                PIPELINE PROCESSING COMPLETE<br>
                <span style="color:var(--text-main);">7월 광주 식단 원천 수렴 정제 무결성 완수!</span>
              </div>
            </div>
          `;
          this.renderDisplayScreen("파이프라인 연산 무결 완료", successHTML);

          // 무한 반복용 주기적 호출 복구
          this.n8nIntervalId = setInterval(renderLogs, 4000);
        }
      };

      runNextStep();
    };
  }

  /**
   * 🧪 기존 실습 3대 과제 알고리즘 연산 및 웰니스 갓생 챌린지 통합 데코레이터
   */
  bindSandboxAlgorithms() {
    // 내부 퀘스트 달성 상태 추적 레지스터
    this.questStatus = {
      running: false,
      gourmet: false,
      travel: false,
      celebrated: false,
    };

    // 전역 브릿지 브릿지 바인딩
    window.addGradeSubjectNode = () => this.addGradeSubjectNode();
    window.removeGradeSubjectNode = (idx) => this.removeGradeSubjectNode(idx);
    window.resetGradeSubjectNodes = () => this.resetGradeSubjectNodes();
    window.switchUpDownDifficulty = (diff) => this.switchUpDownDifficulty(diff);

    // 1. 웰니스 갓생 챌린지 배지 일괄 동기화 매니저
    this.updateQuestStatusUI = () => {
      const bRunning = document.getElementById("badgeRunning");
      const bGourmet = document.getElementById("badgeGourmet");
      const bTravel = document.getElementById("badgeTravel");
      const milestoneBadge = document.getElementById("milestoneCount");
      const profileBox = document.querySelector(".naver-profile-box");

      if (bRunning && this.questStatus.running) {
        bRunning.style.background = "rgba(16, 185, 129, 0.12)";
        bRunning.style.borderColor = "#10b981";
        bRunning.style.color = "#10b981";
        bRunning.innerHTML = "💯 성적 완료";
      }
      if (bGourmet && this.questStatus.gourmet) {
        bGourmet.style.background = "rgba(16, 185, 129, 0.12)";
        bGourmet.style.borderColor = "#10b981";
        bGourmet.style.color = "#10b981";
        bGourmet.innerHTML = "🎯 예측 완료";
      }
      if (bTravel && this.questStatus.travel) {
        bTravel.style.background = "rgba(16, 185, 129, 0.12)";
        bTravel.style.borderColor = "#10b981";
        bTravel.style.color = "#10b981";
        bTravel.innerHTML = "🎒 가방 완료";
      }

      // 모든 3대 웰니스 퀘스트 클리어 시, 마일스톤 동적 퀀텀 점프 및 프로필 카드 발광 오라 주입!
      if (this.questStatus.running && this.questStatus.gourmet && this.questStatus.travel) {
        if (milestoneBadge) {
          milestoneBadge.textContent = "🏆 4 / 4 달성 완료 (갓생 파이프라인 동기화!)";
          milestoneBadge.style.background = "linear-gradient(135deg, #10b981, #059669)";
          milestoneBadge.style.boxShadow = "0 0 12px rgba(16, 185, 129, 0.4)";
        }
        if (profileBox) {
          profileBox.style.boxShadow = "0 0 28px rgba(224, 108, 83, 0.35)";
          profileBox.style.borderColor = "var(--color-brand)";
        }

        // 3대 퀘스트 최종 완성 축하 3중 연속 은하수 폭발 기믹!
        if (!this.questStatus.celebrated) {
          this.questStatus.celebrated = true;
          setTimeout(() => window.triggerNeonCelebration(window.innerWidth / 2, window.innerHeight / 2), 0);
          setTimeout(() => window.triggerNeonCelebration(window.innerWidth / 2 - 200, window.innerHeight / 2 - 100), 300);
          setTimeout(() => window.triggerNeonCelebration(window.innerWidth / 2 + 200, window.innerHeight / 2 - 100), 600);
        }
      }
    };

    // 2. CRT 가상 화면 렌더러
    this.renderDisplayScreen = (mode, contentHTML) => {
      const canvas = document.getElementById("gameScreenCanvas");
      if (!canvas) return;
      canvas.innerHTML = `
        <div class="screen-crt-grid"></div>
        <div class="screen-title" style="margin-bottom:6px; border-bottom:1px dashed var(--border-cozy); padding-bottom: 4px;">
            <span>🎮 실시간 렌더러: ${mode}</span>
            <span style="color:#ef4444; font-weight:bold; animation: blinker 1s linear infinite;">● RUN</span>
        </div>
        ${contentHTML}
      `;
    };

    // CRT 깜빡이 애니메이션 정의 주입
    if (!document.getElementById("crtBlinkStyle")) {
      const style = document.createElement("style");
      style.id = "crtBlinkStyle";
      style.textContent = `
        @keyframes blinker { 50% { opacity: 0; } }
        .legendary-neon { border: 1.5px solid #e06c53 !important; box-shadow: 0 0 8px #e06c53 !important; background: rgba(224,108,83,0.15) !important; color: #fff !important; }
        .epic-neon { border: 1.5px solid #8e65c9 !important; box-shadow: 0 0 8px #8e65c9 !important; background: rgba(142,101,201,0.15) !important; color: #fff !important; }
        .rare-neon { border: 1.5px solid #3b6887 !important; box-shadow: 0 0 8px #3b6887 !important; background: rgba(59,104,135,0.15) !important; color: #fff !important; }
        .common-neon { border: 1.5px solid #756357 !important; background: rgba(117,99,87,0.1) !important; }
      `;
      document.head.appendChild(style);
    }

    // 3. UpDown 게임 구동 코어
    window.executeUpDownGame = () => {
      const userInput = parseInt(document.getElementById("updownInput").value);
      const logBox = document.getElementById("updownLog");

      if (isNaN(userInput) || userInput < this.updownMin || userInput > this.updownMax) {
        logBox.innerHTML = `<div class="sandbox-log-item" style="color:var(--color-brand);">⚠️ ${this.updownMin}~${this.updownMax} 사이의 범위 내 숫자를 입력하십시오.</div>`;
        return;
      }

      this.updownAttempts++;
      this.updownLogs.push(userInput);

      let stepText = "";
      let dotsHTML = "";

      // 이진 탐색 범위 축소
      if (userInput > this.secretNumber) {
        this.updownMax = userInput - 1;
        stepText = `<span style="color:#ef4444; font-weight:900;">🔽 임계값 초과 (DOWN)</span>`;
        logBox.innerHTML = `
          <div class="sandbox-log-item" style="font-weight:800; color:var(--color-brand);">🔽 DOWN! 추측이 큽니다.</div>
          <div class="sandbox-log-item">현재 탐색 범위: <strong>[${this.updownMin} ~ ${this.updownMax}]</strong></div>
          <div class="sandbox-log-item">추측 시도: <strong>${this.updownAttempts} / ${this.updownMaxAttempts}회</strong></div>
        `;
      } else if (userInput < this.secretNumber) {
        this.updownMin = userInput + 1;
        stepText = `<span style="color:#f59e0b; font-weight:900;">🔼 임계값 미달 (UP)</span>`;
        logBox.innerHTML = `
          <div class="sandbox-log-item" style="font-weight:800; color:var(--color-brand);">🔼 UP! 추측이 작습니다.</div>
          <div class="sandbox-log-item">현재 탐색 범위: <strong>[${this.updownMin} ~ ${this.updownMax}]</strong></div>
          <div class="sandbox-log-item">추측 시도: <strong>${this.updownAttempts} / ${this.updownMaxAttempts}회</strong></div>
        `;
      }

      // 10구간 정적 센서 인디케이터 구성
      const difficultyMax = this.updownDifficulty === "easy" ? 50 : this.updownDifficulty === "hard" ? 150 : 100;
      const interval = difficultyMax / 10;
      for (let i = 1; i <= 10; i++) {
        let dotClass = "scan-dot";
        const val = Math.round(i * interval);
        if (val >= this.updownMin && val <= this.updownMax) {
          dotClass += " active";
        }
        if (this.secretNumber >= val - interval && this.secretNumber <= val) {
          dotClass += " target";
        }
        dotsHTML += `<div class="${dotClass}"></div>`;
      }

      // 정답 맞춤 성공 시 분기
      if (userInput === this.secretNumber) {
        logBox.innerHTML = `
          <div class="sandbox-log-item" style="color:var(--color-success); font-weight:800;">🎉 TARGET MATCHED! [임계 난수: ${this.secretNumber}]</div>
          <div class="sandbox-log-item">성공 시 시도 횟수: <strong>${this.updownAttempts}회</strong></div>
        `;
        this.questStatus.gourmet = true;

        // 정답 축하 네온 퍼레이드 기동!
        setTimeout(() => {
          const btn = document.querySelector("#updownPanel .cozy-btn");
          const rect = btn ? btn.getBoundingClientRect() : null;
          window.triggerNeonCelebration(
            rect ? rect.left + rect.width / 2 + window.scrollX : undefined,
            rect ? rect.top + rect.height / 2 + window.scrollY : undefined,
          );
        }, 150);

        stepText = `<span style="color:#10b981; font-weight:900;">🏆 TARGET SECURED (${this.secretNumber})</span>`;
        const screenHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
              <div style="font-size:2.8rem; animation: successBounce 1.5s infinite alternate;">🍻🍕</div>
              <div style="font-size:0.75rem; color:var(--text-main); font-weight:800; max-width:180px; line-height:1.4; text-align:center;">
                  ${stepText}<br>부촌 뼈찜 캡사이신 최적 임계 분석 성공! 생맥주가 충전되었습니다!
              </div>
              <div class="binary-scan-rail">${dotsHTML}</div>
          </div>
        `;
        this.renderDisplayScreen("이진 임계 탐색 완료", screenHTML);
        this.updateQuestStatusUI();

        // 자동 재부팅을 위한 초기화 대기
        setTimeout(() => this.resetUpDownGame(), 4500);
        return;
      }

      // 게임오버 분기
      if (this.updownAttempts >= this.updownMaxAttempts) {
        logBox.innerHTML = `
          <div class="sandbox-log-item" style="color:var(--color-brand); font-weight:800;">💀 GAME OVER! 시도 한계(${this.updownMaxAttempts}회) 도달</div>
          <div class="sandbox-log-item">정답 난수는 [ <strong>${this.secretNumber}</strong> ] 이었습니다.</div>
        `;
        const screenHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <div style="font-size:2rem; animation: blinker 0.4s linear infinite;">🚨</div>
              <div style="font-size:0.75rem; color:var(--color-brand); font-weight:900;">임계 센서 과부하 (SHUTDOWN)</div>
              <div style="font-size:0.65rem; color:var(--text-muted); font-weight:800; text-align:center;">안전 한계를 초과하여 캡사이신 파이프라인이 긴급 정지되었습니다.</div>
          </div>
        `;
        this.renderDisplayScreen("이진 센서 강제 셧다운", screenHTML);
        setTimeout(() => this.resetUpDownGame(), 4000);
        return;
      }

      // 가상 디스플레이에 탐색 로그 시각화
      const logsHTML = this.updownLogs
        .map(
          (l) =>
            `<span style="background:var(--bg-nested); border:1px solid var(--border-cozy); padding:1px 4px; border-radius:4px; font-size:0.65rem; font-weight:800;">${l}</span>`,
        )
        .join(" ➔ ");
      const screenHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px; width:100%;">
            <div style="font-size:2.2rem; filter: drop-shadow(0 0 6px var(--color-brand));">📡🌶️</div>
            <div style="font-size:0.72rem; color:var(--text-muted); font-weight:800; line-height:1.4; text-align:center;">
                ${stepText}<br>추측: ${userInput} | 잔여 기회: ${this.updownMaxAttempts - this.updownAttempts}회
            </div>
            <div class="binary-scan-rail">${dotsHTML}</div>
            <div style="font-size:0.62rem; color:var(--text-muted); font-weight:800; text-align:center; max-width:180px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; margin-top:2px;">
                검색 이력: ${logsHTML}
            </div>
        </div>
      `;
      this.renderDisplayScreen("이진 센서 임계 탐색", screenHTML);
    };

    window.resetUpDownGame = () => {
      const maxVal = this.updownDifficulty === "easy" ? 50 : this.updownDifficulty === "hard" ? 150 : 100;
      this.secretNumber = Math.floor(Math.random() * maxVal) + 1;

      this.updownAttempts = 0;
      this.updownMin = 1;
      this.updownMax = maxVal;
      this.updownLogs = [];

      // 치트키 콘솔 자동 송출
      console.log(`[SKALA Sandbox Cheat] 정답 임계값: ${this.secretNumber} (${this.updownDifficulty.toUpperCase()})`);

      const inputEl = document.getElementById("updownInput");
      if (inputEl) {
        inputEl.value = "";
        inputEl.placeholder = `추측 난수 변수값 입력 (${this.updownMin} ~ ${this.updownMax})`;
      }

      const logBox = document.getElementById("updownLog");
      if (logBox) {
        logBox.innerHTML = `<div class="sandbox-log-item">🎲 캡사이신 임계값 센서가 재부팅되었습니다. (난이도: ${this.updownDifficulty.toUpperCase()})</div>`;
      }

      const screenHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
            <div style="font-size:2rem; animation: breatheMotion 1.5s infinite alternate;">🔄</div>
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:800;">임계 센서 리셋 완료 [1~${maxVal}]</div>
            <div style="font-size:0.6rem; color:var(--text-muted); font-weight:600; opacity:0.65; margin-top: -4px;">(치트키는 F12 콘솔에 로그 적재)</div>
        </div>
      `;
      this.renderDisplayScreen("이진 센서 임계 탐색", screenHTML);
    };

    // 4. 가방 캐리어 패킹 (Knapsack & 등급별 네온 글로우 랙 실장)
    window.executeBagAction = (routingMode) => {
      const textInput = document.getElementById("bagInput");
      const logBox = document.getElementById("bagLog");
      if (!textInput || !logBox) return;

      const elementValue = textInput.value.trim();

      if (routingMode === "add") {
        if (!elementValue) return;

        // 중량 한도 체크 (최대 12kg)
        // 아이템 마다 2.0kg ~ 4.0kg 사이의 랜덤 가중치 배정
        const weight = parseFloat((Math.random() * 2 + 2).toFixed(1));

        if (this.bagTotalWeight + weight > this.bagMaxWeight) {
          logBox.innerHTML = `
            <div class="sandbox-log-item" style="color:var(--color-brand); font-weight:800;">⚠️ ⚖️ 중량 허용 한도 초과! 적재가 거부되었습니다.</div>
            <div class="sandbox-log-item">추가하려던 아이템 중량: <strong>${weight}kg</strong></div>
            <div class="sandbox-log-item">현재 가방 중량: <strong>${this.bagTotalWeight.toFixed(1)} / ${this.bagMaxWeight}kg</strong></div>
          `;

          const screenHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
                <div style="font-size:2.2rem; animation: blinker 0.5s linear infinite;">🚨⚖️</div>
                <div style="font-size:0.75rem; color:var(--color-brand); font-weight:900;">KNAPSACK WEIGHT OVER</div>
                <div class="progress-rail" style="max-width:140px; height:8px;">
                    <div class="progress-bar-fill" style="width: 100%; background:var(--color-brand);"></div>
                </div>
                <div style="font-size:0.65rem; color:var(--text-muted); font-weight:800; text-align:center;">
                    수용량 초과! 최근 아이템을 제거하거나 전체 비우기를 집도하십시오.
                </div>
            </div>
          `;
          this.renderDisplayScreen("메모리 버퍼 중량 초과", screenHTML);
          return;
        }

        // 아이템 등급 판별
        let itemGrade = "common";
        for (const [key, grade] of Object.entries(this.bagGradeMap)) {
          if (elementValue.toLowerCase().includes(key)) {
            itemGrade = grade;
            break;
          }
        }

        this.memoryBagInstance.push({ name: elementValue, weight, grade: itemGrade });
        this.bagTotalWeight += weight;
        textInput.value = "";

        // 등록 축하
        if (itemGrade === "legendary" || itemGrade === "epic") {
          window.triggerNeonCelebration();
        }
      } else if (routingMode === "remove") {
        const removed = this.memoryBagInstance.pop();
        if (removed) {
          this.bagTotalWeight -= removed.weight;
          if (this.bagTotalWeight < 0) this.bagTotalWeight = 0;
        }
      } else if (routingMode === "clear") {
        this.memoryBagInstance = [];
        this.bagTotalWeight = 0;
      }

      // 가방이 완전히 비었을 때 분기
      if (this.memoryBagInstance.length === 0) {
        logBox.innerHTML = `<div class="sandbox-log-item">🎒 가방 인스턴스가 완전히 비어있습니다.</div>`;
        const screenHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <div style="font-size:2rem;">📭</div>
              <div style="font-size:0.75rem; color:var(--text-muted); font-weight:800;">가방 버퍼 메모리 공소</div>
          </div>
        `;
        this.renderDisplayScreen("메모리 버퍼 스택 제어", screenHTML);

        this.questStatus.travel = false;
        this.updateQuestStatusUI();
        return;
      }

      // 갓생 웰니스 퀘스트 클리어 감별
      const hasPassport = this.memoryBagInstance.some((item) => item.name.includes("여권") || item.name.toLowerCase().includes("passport"));
      const hasShoes = this.memoryBagInstance.some(
        (item) => item.name.includes("러닝") || item.name.includes("신발") || item.name.toLowerCase().includes("shoes"),
      );
      const hasDoll = this.memoryBagInstance.some(
        (item) => item.name.includes("인형") || item.name.toLowerCase().includes("doll") || item.name.includes("캐릭터"),
      );

      if (this.memoryBagInstance.length >= 3 && hasPassport && (hasShoes || hasDoll)) {
        this.questStatus.travel = true;
        this.updateQuestStatusUI();
      }

      // 개 개별 데이터 로그 렌더링
      logBox.innerHTML = this.memoryBagInstance
        .map((item, index) => {
          let badgeColor = "#756357";
          if (item.grade === "legendary") badgeColor = "#e06c53";
          if (item.grade === "epic") badgeColor = "#8e65c9";
          if (item.grade === "rare") badgeColor = "#3b6887";

          return `
            <div class="sandbox-log-item" style="display:flex; justify-content:space-between; align-items:center;">
              <span>📦 슬롯 [0${index}] : <strong>${item.name}</strong> (${item.weight}kg)</span>
              <span style="font-size:0.65rem; font-weight:900; background:${badgeColor}; color:#fff; padding:1px 6px; border-radius:4px; text-transform:uppercase;">${item.grade}</span>
            </div>
          `;
        })
        .reverse()
        .join("");

      // 가상 디스플레이에 등급별 발광 랙 연사 렌더링
      const rackItemsHTML = this.memoryBagInstance
        .map((item) => `<div class="console-rack-item ${item.grade}-neon">${item.name} (${item.weight}kg)</div>`)
        .join("");

      const weightPercentage = Math.round((this.bagTotalWeight / this.bagMaxWeight) * 100);

      const screenHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px; width:100%;">
            <div style="font-size:0.7rem; font-weight:900; color:var(--text-muted); margin-bottom: -2px;">
                ⚖️ 갓생 적재 중량: ${this.bagTotalWeight.toFixed(1)} / ${this.bagMaxWeight}kg (${weightPercentage}%)
            </div>
            <div class="progress-rail" style="max-width:140px; height:6px; margin: 0 auto 6px;">
                <div class="progress-bar-fill" style="width: ${weightPercentage}%; background: ${weightPercentage >= 85 ? "var(--color-brand)" : "var(--color-success)"};"></div>
            </div>
            <div class="console-stack-rack" style="gap:5px; padding:8px; min-height:80px; width:100%; max-width:160px; background:rgba(0,0,0,0.08);">
                ${rackItemsHTML}
            </div>
        </div>
      `;
      this.renderDisplayScreen("메모리 버퍼 스택 제어", screenHTML);
    };

    // 최초 기상 디스플레이 로드
    const screenHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <div style="font-size:2rem; animation: breatheMotion 1.5s infinite alternate;">📺</div>
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:800;">실시간 알고리즘 렌더러 가동 완수</div>
      </div>
    `;
    this.renderDisplayScreen("시스템 메인 콘솔", screenHTML);
  }

  /**
   * 🍽️ 광주 캠퍼스 급식 알림 배너 마운트 & 스위치 기능
   */
  mountGwangjuMealNotice() {
    const todayBtn = document.getElementById("mealNoticeTodayBtn");
    const tomorrowBtn = document.getElementById("mealNoticeTomorrowBtn");
    if (!todayBtn || !tomorrowBtn) return;

    if (!todayBtn.dataset.listenerBound) {
      todayBtn.addEventListener("click", () => this.switchNoticeMeal("today"));
      todayBtn.dataset.listenerBound = "true";
    }
    if (!tomorrowBtn.dataset.listenerBound) {
      tomorrowBtn.addEventListener("click", () => this.switchNoticeMeal("tomorrow"));
      tomorrowBtn.dataset.listenerBound = "true";
    }

    this.renderGwangjuMealNoticeDOM();
  }

  switchNoticeMeal(dayType) {
    this.activeNoticeDay = dayType;
    const todayBtn = document.getElementById("mealNoticeTodayBtn");
    const tomorrowBtn = document.getElementById("mealNoticeTomorrowBtn");
    if (!todayBtn || !tomorrowBtn) return;

    if (dayType === "today") {
      todayBtn.style.background = "var(--color-success)";
      todayBtn.style.color = "#fff";
      todayBtn.style.border = "none";

      tomorrowBtn.style.background = "var(--bg-nested)";
      tomorrowBtn.style.color = "var(--text-muted)";
      tomorrowBtn.style.border = "1px solid var(--border-cozy)";
    } else {
      tomorrowBtn.style.background = "var(--color-success)";
      tomorrowBtn.style.color = "#fff";
      tomorrowBtn.style.border = "none";

      todayBtn.style.background = "var(--bg-nested)";
      todayBtn.style.color = "var(--text-muted)";
      todayBtn.style.border = "1px solid var(--border-cozy)";
    }

    this.renderGwangjuMealNoticeDOM();
  }

  renderGwangjuMealNoticeDOM() {
    const dateLabel = document.getElementById("mealNoticeDate");
    const bNode = document.getElementById("mealNoticeB");
    const lNode = document.getElementById("mealNoticeL");
    const dNode = document.getElementById("mealNoticeD");

    if (!dateLabel || !bNode || !lNode || !dNode) return;

    const targetDateStr = this.activeNoticeDay === "today" ? "2026-07-18" : "2026-07-19";
    const dayName = this.activeNoticeDay === "today" ? "7월 18일 (토요일 - 오늘)" : "7월 19일 (일요일 - 내일)";

    dateLabel.textContent = dayName;

    const mealData = window.GwangjuMealDB ? window.GwangjuMealDB[targetDateStr] : null;
    if (mealData) {
      bNode.textContent = Array.isArray(mealData.breakfast) ? mealData.breakfast.join(", ") : mealData.breakfast;
      lNode.textContent = Array.isArray(mealData.lunch) ? mealData.lunch.join(", ") : mealData.lunch;
      dNode.textContent = Array.isArray(mealData.dinner) ? mealData.dinner.join(", ") : mealData.dinner;
    } else {
      bNode.textContent = "급식 배급 정보가 없습니다.";
      lNode.textContent = "급식 배급 정보가 없습니다.";
      dNode.textContent = "급식 배급 정보가 없습니다.";
    }
  }

  /**
   * 📊 다중 과목 동적 학점 리스트 계산 엔진
   */
  addGradeSubjectNode() {
    const subjectInput = document.getElementById("gradeSubjectInput");
    const scoreInput = document.getElementById("gradeScoreInput");
    if (!subjectInput || !scoreInput) return;

    const subject = subjectInput.value.trim();
    const score = parseInt(scoreInput.value);

    if (!subject) {
      alert("과목명을 기입하세요.");
      return;
    }
    if (isNaN(score) || score < 0 || score > 100) {
      alert("0~100 사이의 올바른 점수를 대입하세요.");
      return;
    }

    this.gradeSubjects.push({ subject, score });
    localStorage.setItem("skala-grade-subjects", JSON.stringify(this.gradeSubjects));

    subjectInput.value = "";
    scoreInput.value = "";

    this.reCalculateGPA(true); // 축하 이펙트 발사
  }

  removeGradeSubjectNode(index) {
    this.gradeSubjects.splice(index, 1);
    localStorage.setItem("skala-grade-subjects", JSON.stringify(this.gradeSubjects));
    this.reCalculateGPA(false);
  }

  resetGradeSubjectNodes() {
    this.gradeSubjects = [];
    localStorage.setItem("skala-grade-subjects", JSON.stringify(this.gradeSubjects));
    this.reCalculateGPA(false);
  }

  switchUpDownDifficulty(diff) {
    this.updownDifficulty = diff;
    if (diff === "easy") {
      this.updownMin = 1;
      this.updownMax = 50;
      this.updownMaxAttempts = 10;
    } else if (diff === "hard") {
      this.updownMin = 1;
      this.updownMax = 150;
      this.updownMaxAttempts = 5;
    } else {
      this.updownMin = 1;
      this.updownMax = 100;
      this.updownMaxAttempts = 7;
    }

    // 버튼 스타일 실시간 반영 업데이트
    const btnEasy = document.getElementById("udEasyBtn");
    const btnNormal = document.getElementById("udNormalBtn");
    const btnHard = document.getElementById("udHardBtn");

    if (btnEasy && btnNormal && btnHard) {
      const activeStyle =
        "font-size: 0.7rem; padding: 2px 8px; background: var(--color-brand); color: #fff; border: 1px solid var(--color-brand);";
      const inactiveStyle =
        "font-size: 0.7rem; padding: 2px 8px; background: var(--bg-nested); color: var(--text-muted); border: 1px solid var(--border-cozy);";

      btnEasy.setAttribute("style", diff === "easy" ? activeStyle : inactiveStyle);
      btnNormal.setAttribute("style", diff === "normal" ? activeStyle : inactiveStyle);
      btnHard.setAttribute("style", diff === "hard" ? activeStyle : inactiveStyle);
    }

    // 게임 상태 리셋 및 난수 재설정 구동
    if (typeof window.resetUpDownGame === "function") {
      window.resetUpDownGame();
    }
  }

  getGradeFromScore(score) {
    if (score >= 90) return { grade: "A", color: "#10b981", emoji: "⚡🏃‍♂️💨", tag: "초인" };
    if (score >= 80) return { grade: "B", color: "#3b6887", emoji: "🏃‍♂️", tag: "쾌적" };
    if (score >= 70) return { grade: "C", color: "var(--text-main)", emoji: "🚶‍♂️", tag: "도보" };
    if (score >= 60) return { grade: "D", color: "var(--text-main)", emoji: "🛋️", tag: "사색" };
    return { grade: "F", color: "var(--color-brand)", emoji: "👨‍💻", tag: "대기" };
  }

  reCalculateGPA(triggerCelebration = false) {
    const logBox = document.getElementById("gradeLog");
    if (!logBox) return;

    const bRunning = document.getElementById("badgeRunning");
    const milestoneBadge = document.getElementById("milestoneCount");
    const profileBox = document.querySelector(".naver-profile-box");

    if (this.gradeSubjects.length === 0) {
      logBox.innerHTML = `<div class="sandbox-log-item" style="text-align: center;">📊 추가된 과목이 없습니다. 성적을 입력해 보세요!</div>`;
      this.renderDisplayScreen(
        "학점 연산 & 성장 아바타",
        `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <div style="font-size:2rem;">📊</div>
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:800;">과목 데이터 대기 중</div>
        </div>
      `,
      );

      this.questStatus.running = false;
      if (bRunning) {
        bRunning.style.background = "var(--bg-nested)";
        bRunning.style.borderColor = "var(--border-cozy)";
        bRunning.style.color = "var(--text-muted)";
        bRunning.innerHTML = "💯 성적 대기";
      }
      this.updateQuestStatusUI();
      return;
    }

    // 개별 학점 계산 및 리스트화
    let totalScore = 0;
    let totalGPAValue = 0;

    const itemsHTML = this.gradeSubjects
      .map((node, index) => {
        totalScore += node.score;
        const meta = this.getGradeFromScore(node.score);

        let gpaPoint = 0;
        if (meta.grade === "A") gpaPoint = 4.5;
        else if (meta.grade === "B") gpaPoint = 3.5;
        else if (meta.grade === "C") gpaPoint = 2.5;
        else if (meta.grade === "D") gpaPoint = 1.5;

        totalGPAValue += gpaPoint;

        return `
        <div class="sandbox-log-item" style="display: flex; justify-content: space-between; align-items: center; padding: 4px 8px;">
          <span><strong>${node.subject}</strong>: ${node.score}점</span>
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-size: 0.7rem; font-weight: 900; background: ${meta.color}; color: #fff; padding: 1px 6px; border-radius: 4px;">${meta.grade}</span>
            <span style="color: var(--color-brand); font-weight: 900; cursor: pointer; font-size: 1.1rem; line-height: 1;" onclick="removeGradeSubjectNode(${index})">&times;</span>
          </div>
        </div>
      `;
      })
      .join("");

    logBox.innerHTML = itemsHTML;

    const avgScore = Math.round(totalScore / this.gradeSubjects.length);
    const avgGPA = (totalGPAValue / this.gradeSubjects.length).toFixed(2);
    const overallMeta = this.getGradeFromScore(avgScore);

    // 웰니스 달성 퀘스트 수렴 조건 (평균 점수가 80점 이상일 때!)
    if (avgScore >= 80) {
      this.questStatus.running = true;
      this.updateQuestStatusUI();

      if (triggerCelebration && overallMeta.grade === "A") {
        window.triggerNeonCelebration();
      }
    } else {
      this.questStatus.running = false;
      if (bRunning) {
        bRunning.style.background = "var(--bg-nested)";
        bRunning.style.borderColor = "var(--border-cozy)";
        bRunning.style.color = "var(--text-muted)";
        bRunning.innerHTML = "💯 성적 대기";
      }
      this.updateQuestStatusUI();
    }

    // CRT 스크린에 고화질 게이지 렌더링
    const screenHTML = `
      <div class="avatar-stage-wrap" style="width:100%;">
          <div class="avatar-character" style="font-size:2.6rem;">${overallMeta.emoji}</div>
          <span class="avatar-level-tag" style="background:${overallMeta.color}">평균 GPA: ${avgGPA} / 4.5 (${overallMeta.grade})</span>
          <div class="progress-rail" style="margin-top: 8px; max-width: 140px; height:8px; background:var(--bg-nested); border:1px solid var(--border-cozy); border-radius:10px; overflow:hidden;">
              <div class="progress-bar-fill" style="width: ${avgScore}%; background:${overallMeta.color}; height:100%;"></div>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); font-weight:800; margin-top:2px;">
              총 ${this.gradeSubjects.length}과목 평균: ${avgScore}점 (${overallMeta.tag})
          </div>
      </div>
    `;
    this.renderDisplayScreen("학점 연산 & 성장 아바타", screenHTML);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new IntegratedPortalController();
});
