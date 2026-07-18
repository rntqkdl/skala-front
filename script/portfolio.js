/**
 * Seongmin An Portfolio Core Engine Library v6.0
 * Pure Modern Vanilla JS - Persistent Theme Synchronization & Metric Board Injector
 * 🛠️ 패치 내역: 페이지 이동 및 테마 전환 시 배경 그라데이션/격자 무너짐 버그 100% 영구 해결
 */

const PortfolioCore = (function () {
  // 1. 연구 프로젝트별 정량적 성능 지표 및 STAR 명세 데이터베이스
  const _projectDetails = {
    onlibrary: `
            <div class="modal-detail-wrapper">
                <div class="modal-metric-board">
                    <div class="metric-pill"><div class="metric-label">Target Area</div><div class="metric-value">진안군·임실군</div></div>
                    <div class="metric-pill"><div class="metric-label">Algorithm</div><div class="metric-value">TSP & MCDA</div></div>
                    <div class="metric-pill"><div class="metric-label">Latency Filter</div><div class="metric-value">Naver Map API</div></div>
                </div>
                <div class="star-section" style="margin-top:16px;">
                    <p><strong>Situation:</strong> 농어촌 대중교통 소외 지역주민들의 이동식 도서관 문화 인프라 불균형과 자원 유실 리스크 극복 과제 수립.</p>
                    <p><strong>Task:</strong> 공공데이터 오픈 포탈 API를 정밀 정제하여 다기준 의사결정(MCDA) 최적 입지를 선정하고, 실시간 교통 주행 유량을 반영한 최적 순회 노선 파이프라인 개발.</p>
                    <p><strong>Action:</strong> GeoPandas 공간 연산 라이브러리를 바인딩하여 취약계층 밀집도를 격자망 레이어로 가공 정제하고, TSP 최적화 모델에 노면 주행 실측 가중치를 주입해 유기적인 경로 탐색 자동화 구축.</p>
                    <p><strong>Result:</strong> 데이터 파이프라인 설계 및 시연 발표 완수. 상세 깃허브 소스 코드 아카이브가 개방되어 있습니다.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand); font-weight:700;">GitHub Repository 코어 코드 검증 &rarr;</a></p>
                </div>
            </div>
        `,
    epitext: `
            <div class="modal-detail-wrapper">
                <div class="modal-metric-board">
                    <div class="metric-pill"><div class="metric-label">Top-1 Accuracy</div><div class="metric-value">96.63%</div></div>
                    <div class="metric-pill"><div class="metric-label">F1-Score</div><div class="metric-value">82.4%</div></div>
                    <div class="metric-pill"><div class="metric-label">ML Model</div><div class="metric-value">Swin V2 & RoBERTa</div></div>
                </div>
                <div class="star-section" style="margin-top:16px;">
                    <p><strong>Situation:</strong> 고문서 탁본 원천 데이터의 심각한 결측치 및 13,000종 한자 클래스의 극심한 롱테일(Long-Tail) 불균형 직면.</p>
                    <p><strong>Task:</strong> 이미지 해상도 복원용 인코더와 문맥 보정용 거대 언어 모델 디코더를 유기적으로 융합하는 데이터 센트릭 멀티모달 파이프라인 설계.</p>
                    <p><strong>Action:</strong> 희귀 한자 오탐을 줄이기 위해 빈도수 제곱근 역수 가중치를 부여한 커스텀 Loss 함수를 수식 설계하고, Otsu 이진화 알고리즘 전처리 프로세싱 및 SikuRoBERTa 토크나이저 사전 확장 집도.</p>
                    <p><strong>Result:</strong> 96.63% 정확도로 최첨단 SOTA 달성 완료. 한국정보기술학회 논문 게재 및 대상(정보통신기획평가원장상) 수상 달성.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand); font-weight:700;">GitHub Repository 코어 코드 검증 &rarr;</a></p>
                </div>
            </div>
        `,
    smishing: `
            <div class="modal-detail-wrapper">
                <div class="modal-metric-board">
                    <div class="metric-pill"><div class="metric-label">Clean Dataset</div><div class="metric-value">JSONL 정형화</div></div>
                    <div class="metric-pill"><div class="metric-label">Target Loss</div><div class="metric-value">Regex Filter</div></div>
                    <div class="metric-pill"><div class="metric-label">Evaluation</div><div class="metric-value">우수상 (DACON)</div></div>
                </div>
                <div class="star-section" style="margin-top:16px;">
                    <p><strong>Situation:</strong> 변종 단축 URL 우회 기법 및 특수문자/이모지를 임의 삽입하여 필터링 우회를 시도하는 지능형 변종 스미싱 메시지 폭증.</p>
                    <p><strong>Task:</strong> 실시간 다량 수집되는 RSS 뉴스 피드 데이터 레이어에서 고노이즈 텍스트 광고를 정밀 전처리 가공할 자동화 모듈 코딩.</p>
                    <p><strong>Action:</strong> 다중 정규표현식(Regex) 예외 차단 메커니즘을 파이썬 코어로 프로그래밍하여 원천 소스의 일관성을 확보하고, 임베딩 최적화를 위한 JSONL 구조체 정형화 수립.</p>
                    <p><strong>Result:</strong> 데이터 파이프라인 고도화를 통해 모델 성능 지표 F1-Score 최종 1.00 수렴 완수 및 DACON 경진대회 우수상 영예.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand); font-weight:700;">GitHub Repository 코어 코드 검증 &rarr;</a></p>
                </div>
            </div>
        `,
    iot: `
            <div class="modal-detail-wrapper">
                <div class="modal-metric-board">
                    <div class="metric-pill"><div class="metric-label">Control Speed</div><div class="metric-value">0.1초 이내</div></div>
                    <div class="metric-pill"><div class="metric-label">Critical Value</div><div class="metric-value">500 L/h</div></div>
                    <div class="metric-pill"><div class="metric-label">Award</div><div class="metric-value">LINC 3.0 은상</div></div>
                </div>
                <div class="star-section" style="margin-top:16px;">
                    <p><strong>Situation:</strong> 공공 수영장 배수구 배수 커버 유실 시 아동 신체 끼임으로 이어지는 압착 안전사고 방지 제어 로직 부재.</p>
                    <p><strong>Task:</strong> 센서 유량 데이터 펄스의 고유 진동 노이즈 속에서 오탐을 분리하고 긴급 역회전을 수행할 실시간 소스코드 임베디딩.</p>
                    <p><strong>Action:</strong> Python 데이터 정밀 파싱 분석을 수행하여 끼임 발생 순간의 특이 압착 유량 임계값(500L/h) 분석 근거를 산출, Arduino 정격 릴레이 서보 제어 모듈 회로에 0.1초 미만 긴급 오프 제어 소프트웨어 탑재.</p>
                    <p><strong>Result:</strong> 캡스톤 디자인 최종 은상 수상 및 펌프 압착 해제 하드웨어 구동 증명 완수.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand); font-weight:700;">GitHub Repository 코어 코드 검증 &rarr;</a></p>
                </div>
            </div>
        `,
    story_data: `
            <div class="modal-detail-wrapper">
                <p>실제 와일드 비정형 데이터셋은 결측치와 예측 불허한 예외 레이어가 가득합니다. 이를 극복하기 위해 층화 추출(Stratified Split)과 통계적 IQR 이상치 제거 파이프라인을 구축하여 입력 데이터의 순도를 제어한 데이터 중심 인공지능(Data-Centric AI)의 실전 철학을 체득했습니다.</p>
            </div>
        `,
    story_collab: `
            <div class="modal-detail-wrapper">
                <p>EpiText 대상 수상 당시, 감정에 의존하는 회의를 차단하고 저장소 브랜치 관리 컨벤션을 상시 통제했습니다. 주 단위로 [실험 파라미터 Metric 명세 &rarr; 수렴 Loss 지표 &rarr; 가설 검증 진척도]를 투명하게 지표 아카이브화하여 자원 낭비 없는 무충돌 오케스트레이션을 완성했습니다.</p>
            </div>
        `,
    story_mentor: `
            <div class="modal-detail-wrapper">
                <p>추상적인 조언을 배제하고, 후배 기수들이 학기 만에 이력서에 실무 가치를 입증할 수 있도록 돕습니다. 가독성 높은 깃허브 리드미 인덱싱, 의미론적 단위 커밋 규칙(Commit Message Convention) 피드백 세션을 밀착 페이싱하여 실질적인 기술 자산화를 리드합니다.</p>
            </div>
        `,
  };

  const _dom = {
    getModal: () => document.getElementById("projectModal"),
    getTitle: () => document.getElementById("modalTitle"),
    getBody: () => document.getElementById("modalBody"),
    getLightbox: () => document.getElementById("lightboxModal"),
    getLightboxImg: () => document.getElementById("lightboxImg"),
    getLightboxCaption: () => document.getElementById("lightboxCaption"),
    getBodyTag: () => document.body,
    getThemeButtons: () => document.querySelectorAll(".theme-btn-node"),
  };

  let _focusedElementBeforeModal = null; // 웹 접근성 대응: 모달 열기 전 포커스 엘리먼트 캐시

  return {
    // 💡 핵심 고도화: 메인 홈에서 캐싱된 테마를 프로필 진입 시 배경 그라데이션까지 완벽 동기화하는 엔진
    initThemeSync: function () {
      const cachedTheme = localStorage.getItem("portal-theme") || "light";
      _dom.getBodyTag().setAttribute("data-theme", cachedTheme);

      const buttons = _dom.getThemeButtons();

      const updateActiveButton = (currentTheme) => {
        buttons.forEach((btn) => {
          if (btn.getAttribute("data-theme") === currentTheme) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      };

      // 초기 실행 시 액티브 버튼 스타일 동기화
      updateActiveButton(cachedTheme);

      // 🛠️ 버그 패치 코어 리스너: 프로필 내부에서 테마 전환 시 배경 구체의 속성까지 실시간 리렌더링 제어
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetMode = btn.getAttribute("data-theme");
          _dom.getBodyTag().setAttribute("data-theme", targetMode);
          localStorage.setItem("portal-theme", targetMode);
          updateActiveButton(targetMode);
        });
      });
    },

    // ⏰ 고성능 전역 시계 컨트롤러 (중복 전면 단일화)
    initCommonClock: function (clockId, dateId) {
      const clockEl = document.getElementById(clockId);
      const dateEl = document.getElementById(dateId);
      if (!clockEl && !dateEl) return;

      const sync = () => {
        const now = new Date();
        if (clockEl) clockEl.textContent = now.toTimeString().split(" ")[0];
        if (dateEl) {
          const options = { year: "numeric", month: "long", day: "numeric", weekday: "short" };
          dateEl.textContent = now.toLocaleDateString("ko-KR", options);
        }
      };
      sync();
      setInterval(sync, 1000);
    },

    // ⛅ 고성능 전역 기상 동기화 위젯 (중복 전면 단일화)
    initCommonWeather: function (tempId, descId, selectId) {
      const tempNode = document.getElementById(tempId);
      const descNode = document.getElementById(descId);
      const citySelect = document.getElementById(selectId);
      if (!tempNode && !descNode) return;

      const requestStream = async (lat, lon, cityName = "광주광역시") => {
        if (descNode) descNode.textContent = "불러오는 중... 📡";
        try {
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
          if (tempNode) tempNode.textContent = "-- °C";
          if (descNode) descNode.textContent = "날씨 수신 지연";
        }
      };

      if (citySelect) {
        citySelect.addEventListener("change", (e) => {
          const coords = e.target.value.split(",");
          const cityName = citySelect.options[citySelect.selectedIndex].text.replace("📍 ", "");
          requestStream(coords[0], coords[1], cityName);
        });
        const defaultCoords = citySelect.value.split(",");
        requestStream(defaultCoords[0], defaultCoords[1], "광주광역시");
      } else {
        requestStream(35.1595, 126.8526, "광주광역시");
      }
    },

    openModalAPI: function (id) {
      const modal = _dom.getModal();
      const title = _dom.getTitle();
      const body = _dom.getBody();
      if (!modal || !_projectDetails[id]) return;

      // 웹 접근성 대응: 이전 포커스 엘리먼트 백업
      _focusedElementBeforeModal = document.activeElement;

      const titleMap = {
        onlibrary: "🗺️ On Library: 의사결정 지원 시스템 명세",
        epitext: "🏛️ EpiText: 훼손 탁본 복원 멀티모달 복원 명세",
        smishing: "🛡️ Smishing Forecast: 스미싱 탐지 자동화 파이프라인",
        iot: "🏊 Safe Drain Lock: 임베디드 실시간 제어 파이프라인",
        story_data: "📊 데이터 엔지니어링: 필드 데이터 정제 가이드",
        story_collab: "🤝 PM 시스템: 아키텍처 기반 협업 가이드라인",
        story_mentor: "🌱 멘토링 철학: 깃허브 자산화 커리어 로드맵",
      };

      title.innerText = titleMap[id];
      body.innerHTML = _projectDetails[id];
      modal.style.display = "flex";
      _dom.getBodyTag().style.overflow = "hidden";

      // 웹 접근성 대응: 모달 내부의 닫기 버튼으로 포커스 자동 유도
      setTimeout(() => {
        const closeBtn = modal.querySelector(".close-btn");
        if (closeBtn) closeBtn.focus();
      }, 50);
    },

    closeModalAPI: function () {
      const modal = _dom.getModal();
      if (modal) {
        modal.style.display = "none";
        _dom.getBodyTag().style.overflow = "";

        // 웹 접근성 대응: 모달이 닫힐 때 이전 포커스 위치로 복구
        if (_focusedElementBeforeModal) {
          _focusedElementBeforeModal.focus();
          _focusedElementBeforeModal = null;
        }
      }
    },

    openLightboxAPI: function (src, caption) {
      const lightbox = _dom.getLightbox();
      const img = _dom.getLightboxImg();
      const video = document.getElementById("lightboxVideo");
      const cap = _dom.getLightboxCaption();
      if (!lightbox) return;

      // 웹 접근성 대응: 이전 포커스 엘리먼트 백업
      _focusedElementBeforeModal = document.activeElement;

      if (src.toLowerCase().endsWith(".mp4")) {
        if (img) img.style.display = "none";
        if (video) {
          video.style.display = "block";
          video.muted = false; // 사색 BGM 감상 중 유저 클릭 시 사운드 동시 재생 시도

          // 🚀 대대적 비디오 버그 정복 (라이트박스 팝업창 전용 Fetch-to-Blob 파이프라인 가동)
          if (!src.startsWith("blob:") && !src.startsWith("data:")) {
            fetch(src)
              .then((res) => {
                if (!res.ok) throw new Error("Fetch failed");
                return res.blob();
              })
              .then((blob) => {
                const blobUrl = URL.createObjectURL(blob);
                video.src = blobUrl;
                video.load();
                video.play().catch((e) => {
                  console.warn("Blob play failed, trying muted fallback...", e);
                  video.muted = true;
                  video.play();
                });
              })
              .catch((err) => {
                console.warn("Fallback to range src", err);
                video.src = src;
                video.load();
                video.play().catch((e) => {
                  video.muted = true;
                  video.play();
                });
              });
          } else {
            video.src = src;
            video.load();
            video.play().catch((e) => {
              video.muted = true;
              video.play();
            });
          }
        }
      } else {
        if (video) {
          video.pause();
          video.src = "";
          video.style.display = "none";
        }
        if (img) {
          img.src = src;
          img.style.display = "block";
        }
      }

      if (cap) cap.innerText = caption;
      lightbox.style.display = "flex";
      _dom.getBodyTag().style.overflow = "hidden";

      // 웹 접근성 대응: 라이트박스 닫기 버튼으로 포커스 자동 유도
      setTimeout(() => {
        const closeBtn = lightbox.querySelector(".close-btn");
        if (closeBtn) closeBtn.focus();
      }, 50);
    },

    closeLightboxAPI: function () {
      const lightbox = _dom.getLightbox();
      if (lightbox) {
        const video = document.getElementById("lightboxVideo");
        if (video) {
          video.pause();
          video.src = "";
          video.style.display = "none";
        }
        const img = _dom.getLightboxImg();
        if (img) {
          img.src = "";
          img.style.display = "none";
        }
        lightbox.style.display = "none";
        _dom.getBodyTag().style.overflow = "";

        // 웹 접근성 대응: 라이트박스가 닫힐 때 이전 포커스 위치로 복구
        if (_focusedElementBeforeModal) {
          _focusedElementBeforeModal.focus();
          _focusedElementBeforeModal = null;
        }
      }
    },
  };
})();

// 글로벌 인터페이스 브릿지 바인딩
window.initCommonClock = function (clockId, dateId) {
  PortfolioCore.initCommonClock(clockId, dateId);
};
window.initCommonWeather = function (tempId, descId, selectId) {
  PortfolioCore.initCommonWeather(tempId, descId, selectId);
};
window.openModal = function (id) {
  PortfolioCore.openModalAPI(id);
};
window.closeModal = function (e) {
  if (e.target.id === "projectModal") PortfolioCore.closeModalAPI();
};
window.closeModalDirect = function () {
  PortfolioCore.closeModalAPI();
};
window.openLightbox = function (src, caption) {
  PortfolioCore.openLightboxAPI(src, caption);
};
window.closeLightbox = function (e) {
  if (e.target.id === "lightboxModal") PortfolioCore.closeLightboxAPI();
};
window.closeLightboxDirect = function () {
  PortfolioCore.closeLightboxAPI();
};

/* 🎨 고도화: 프로필 동적 기술 스택 필터링 서비스 */
window.filterProjects = function (filterValue, btnEl) {
  document.querySelectorAll("#projectFilterRail button").forEach((btn) => btn.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  const cards = document.querySelectorAll(".project-list-container .project-card");
  cards.forEach((card) => {
    if (filterValue === "all") {
      card.style.display = "block";
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
    } else {
      const tags = card.getAttribute("data-tags") || "";
      if (tags.split(",").includes(filterValue)) {
        card.style.display = "block";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.display = "none";
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
      }
    }
  });
};

// 돔 로드 즉시 멀티테마 연동 상태 머신 구동
window.addEventListener("DOMContentLoaded", () => {
  PortfolioCore.initThemeSync();
});

// ESC 키 감지 및 포커스 트랩(Focus Trap) 통합 구현 (웹 접근성 WAI-ARIA 대응)
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightboxModal");
  const projectModal = document.getElementById("projectModal");
  const slidePanel = document.getElementById("slidePanel");

  // 1. ESC 키가 눌렸을 때 활성화된 컴포넌트 닫기
  if (e.key === "Escape") {
    if (lightbox && (lightbox.style.display === "flex" || lightbox.style.display === "block")) {
      if (typeof window.closeLightboxDirect === "function") {
        window.closeLightboxDirect();
      }
    }
    if (projectModal && (projectModal.style.display === "flex" || projectModal.style.display === "block")) {
      if (typeof window.closeModalDirect === "function") {
        window.closeModalDirect();
      }
    }
    if (slidePanel && (slidePanel.classList.contains("opened") || slidePanel.getAttribute("aria-hidden") === "false")) {
      if (typeof window.closeSlidePanel === "function") {
        window.closeSlidePanel();
      }
    }
  }

  // 2. Tab 키 입력 시 포커스 트랩 제어
  if (e.key === "Tab") {
    let activeOverlay = null;

    if (lightbox && (lightbox.style.display === "flex" || lightbox.style.display === "block")) {
      activeOverlay = lightbox;
    } else if (projectModal && (projectModal.style.display === "flex" || projectModal.style.display === "block")) {
      activeOverlay = projectModal;
    }

    if (activeOverlay) {
      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex="0"]';
      const focusables = activeOverlay.querySelectorAll(focusableSelectors);
      if (focusables.length === 0) return;

      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: 역방향 순환
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        // Tab: 정방향 순환
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  }
});

/**
 * 🍽️ 광주 캠퍼스 2026년 7월 정밀 가공 식단 데이터베이스 (CSV 원천 파이프라인 수렴)
 * (조식, 중식, 석식 3대 서비스 명세화)
 */
window.GwangjuMealDB = {
  // 주간 식단 1 (7/1 ~ 7/5)
  "2026-07-01": {
    breakfast: ["야채볶음밥", "계란탕", "비엔나야채볶음", "배추김치", "시리얼*우유"],
    lunch: ["백미밥", "어묵무국", "치킨까스/소스", "쫄면무침", "요구르트", "배추김치"],
    dinner: ["백미밥", "얼갈이된장국", "돈육김치볶음", "계란찜", "숙주나물무침", "깍두기", "셀프라면"],
  },
  "2026-07-02": {
    breakfast: ["백미밥", "떡국", "소불고기", "배추김치", "셀프핫도그"],
    lunch: ["백미밥", "들깨미역국", "닭감자조림", "꽃맛살샐러드", "치커리무침", "섞박지"],
    dinner: ["백미밥", "수제비", "고등어무조림", "야채고로케/케첩", "취나물무침", "배추김치", "셀프라면"],
  },
  "2026-07-03": {
    breakfast: ["백미밥", "물만두국", "치킨너겟/머스터드", "배추김치", "모닝빵*두유"],
    lunch: ["흑미밥", "건새우된장국", "제육볶음", "양배추/강된장", "아삭고추무침", "배추김치"],
    dinner: ["백미밥", "육개장", "카레소스", "피자왕춘권", "요거트푸딩", "깍두기", "셀프라면"],
  },
  "2026-07-04": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "부대찌개", "삼치카레구이", "감자채볶음", "브로콜리/초장", "깍두기"],
    dinner: ["백미밥", "황태국", "돈육꽈리조림", "미역줄기볶음", "오징어젓갈", "배추김치", "셀프라면"],
  },
  "2026-07-05": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "칼국수", "새우까스/타르소스", "단무지무침", "요플레", "배추김치"],
    dinner: ["백미밥", "콩나물국", "닭당면조림", "후랑크햄볶음", "깻순겉절이", "섞박지", "셀프라면"],
  },

  // 주간 식단 2 (7/6 ~ 7/12)
  "2026-07-06": {
    breakfast: ["후리가케밥", "유부장국", "모듬소시지볶음", "배추김치", "셀프토스트"],
    lunch: ["잡곡밥", "장어탕", "파채언양식불고기", "도토리묵/양념장", "숙주나물무침", "배추김치"],
    dinner: ["백미밥", "어묵김치국", "모듬해물파전", "알감자조림", "상추겉절이", "깍두기", "셀프라면"],
  },
  "2026-07-07": {
    breakfast: ["닭죽", "메추리알장조림", "깍두기", "버터롤빵", "바나나우유"],
    lunch: ["백미밥", "꽃게탕", "제육고추장불고기", "상추*쌈장", "유부맛살무침", "섞박지"],
    dinner: ["백미밥", "맑은아귀탕", "치즈떡볶이", "모듬샐러드", "오복지무침", "배추김치", "셀프라면"],
  },
  "2026-07-08": {
    breakfast: ["백미밥", "맑은순두부국", "돈육장조림", "배추김치", "시리얼*우유"],
    lunch: ["쇠고기콩나물밥*양념장", "얼갈이들깨국", "치킨가라아게감자튀김/머스터드", "해초무침", "건파래볶음", "배추김치"],
    dinner: ["백미밥", "황태무국", "잡채", "김말이튀김/강정소스", "깻순무침", "깍두기", "셀프라면"],
  },
  "2026-07-09": {
    breakfast: ["햄볶음밥", "열무된장국", "섭산적데리야끼", "섞박지", "감자샐러드빵"],
    lunch: ["백미밥", "건새우미역국", "닭치즈떡볶음", "참치야채볶음", "오이부추무침", "깍두기"],
    dinner: ["백미밥", "계란탕", "짜장소스", "칠리탕수육", "요구르트", "배추김치", "셀프라면"],
  },
  "2026-07-10": {
    breakfast: ["계란죽", "해물완자전", "배추김치", "햄버거", "두유"],
    lunch: ["잡곡밥", "맑은등뼈탕", "코다리무조림", "잡채어묵조림", "알마늘마늘쫑지", "열무김치"],
    dinner: ["백미밥", "조랭이떡국", "돈육간장불고기", "꼬시래기무침", "상추무침", "깍두기", "셀프라면"],
  },
  "2026-07-11": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "닭곰탕", "생선까스/타르소스", "메밀면무침", "야채샐러드/소스", "섞박지"],
    dinner: ["백미밥", "홍합살미역국", "깐풍기피망볶음", "시금치나물무침", "무짠지채무침", "배추김치", "셀프라면"],
  },
  "2026-07-12": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["참치볶음밥", "우동", "핫도그/케첩", "단무지무침", "배추김치"],
    dinner: ["백미밥", "돈육김치찌개", "고등어강정", "비엔나볶음", "무말랭이무침", "열무김치", "셀프라면"],
  },

  // 주간 식단 3 (7/13 ~ 7/19) - 🔥 핵심 포커스 트랙 (오늘 포함 주간!)
  "2026-07-13": {
    breakfast: ["백미밥", "호박새우젓국", "미트볼야채볶음", "콩자반", "깍두기", "코코볼*우유"],
    lunch: ["흑미밥", "황태미역국", "파채불고기", "건새우볶음", "깻순겉절이", "석박지"],
    dinner: ["흑미밥", "대구탕", "부추전", "오이무침", "바나나", "배추김치", "셀프라면"],
  },
  "2026-07-14": {
    breakfast: ["백미밥", "열무된장국", "돼지고기장조림", "고사리나물", "배추김치", "셀프핫도그"],
    lunch: ["백미밥", "옥수수스프", "토마토스파게티", "돈육찹스테이크", "망고양상추샐러드", "배추김치"],
    dinner: ["백미밥", "파송송계란국", "부대햄볶음", "타코야끼", "부추겉절이", "석박지", "셀프라면"],
  },
  "2026-07-15": {
    breakfast: ["백미밥", "버섯들깨국", "소불고기", "오이지무침", "포기김치", "초코파이"],
    lunch: ["♥초복 특식♥", "닭다리 닭죽", "메밀전병", "아삭이고추무침", "수박 / 쌈배추겉절이", "열무김치"],
    dinner: ["백미밥", "순두부찌개", "돈육단호박찜", "새송이버섯볶음", "해초무침", "배추김치", "셀프라면"],
  },
  "2026-07-16": {
    // 🔥 오늘 (Today)
    breakfast: ["백미밥", "알길이된장국", "오리야채볶음", "쌈무 * 머스타드", "포기김치", "아몬드시리얼*우유"],
    lunch: ["백미밥", "참치김치찌개", "어니언 돈까스/소스", "돈나물초무침", "자반볶음", "깍두기"],
    dinner: ["백미밥", "콩나물국", "닭갈비", "애호박나물", "땅콩조림", "배추김치", "셀프라면"],
  },
  "2026-07-17": {
    // 🔥 내일 (Tomorrow)
    breakfast: ["백미밥", "꽃게무국", "스크렘블에그", "파프리카어묵볶음", "배추김치", "감자샐러드빵"],
    lunch: ["흑미밥", "잔치국수", "김치전", "브로컬리두부무침", "과일사라다", "열무김치"],
    dinner: ["백미밥", "돈등뼈해장국", "떡갈비케찹볶음", "얼갈이나물", "오복지무침", "배추김치", "셀프라면"],
  },
  "2026-07-18": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "유부장국", "카레라이스", "맛쵸킹탕수육", "무말랭이무침", "배추김치"],
    dinner: ["햄야채볶음밥", "열무된장국", "납작군만두*칠리소스", "부추겉절이", "고구마샐러드", "배추김치", "셀프라면"],
  },
  "2026-07-19": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "오징어무국", "안동찜닭", "참나물무침", "배추김치", "떠먹는 요구르트"],
    dinner: ["백미밥", "사골떡국", "삼치무조림", "햄감자채볶음", "마늘쫑장아찌", "배추김치", "셀프라면"],
  },

  // 주간 식단 4 (7/20 ~ 7/26)
  "2026-07-20": {
    breakfast: ["백미밥", "야채참치죽", "스크램블에그", "양배추샐러드", "배추김치", "모닝빵"],
    lunch: ["백미밥", "게살스프", "함박스테이크", "마카로니샐러드", "양념깻잎지", "배추김치"],
    dinner: ["백미밥", "닭곰탕", "옥수수볼 튀김", "쫄면무침", "브로컬리*초장", "배추김치", "셀프라면"],
  },
  "2026-07-21": {
    breakfast: ["백미밥", "누룽지", "돼지고기장조림", "숙주나물", "배추김치", "딸기우유"],
    lunch: ["백미밥", "김치콩나물국", "제육볶음", "양배추쌈*강된장", "파래자반무침", "배추김치"],
    dinner: ["백미밥", "어묵무국", "국물떡볶이", "김말이튀김", "단무지무침", "배추김치", "셀프라면"],
  },
  "2026-07-22": {
    breakfast: ["백미밥", "야채참치죽", "두부지짐", "낙지젓갈", "배추김치", "버터롤"],
    lunch: ["백미밥", "소고기미역국", "닭감자조림", "아몬드지리멸치볶음", "연두부*양념장", "배추김치"],
    dinner: ["백미밥", "아욱된장국", "미트볼카레소스", "참나물무침", "청경채겉절이", "배추김치", "셀프라면"],
  },
  "2026-07-23": {
    breakfast: ["백미밥", "야채계란죽", "해물완자전", "낙지젓갈", "배추김치", "딸기우유"],
    lunch: ["야채비빔밥", "얼갈이된장국", "소고기약고추장", "도시락김", "핫도그*케찹", "열무김치"],
    dinner: ["백미밥", "열무된장국", "표고갈비찜", "얼갈이나물", "오이지무침", "배추김치", "셀프라면"],
  },
  "2026-07-24": {
    breakfast: ["백미밥", "야채계란죽", "참치야채볶음", "배추김치", "햄버거"],
    lunch: ["♥중복 특식♥", "삼계탕", "새우살애호박전", "콩나물무침", "무생채", "갓김치"],
    dinner: ["백미밥", "호박새우젓국", "아귀콩나물찜", "부들어묵볶음", "해초무침", "배추김치", "셀프라면"],
  },
  "2026-07-25": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "열무된장국", "메밀전병", "비엔나야채볶음", "오복지무침", "배추김치"],
    dinner: ["백미밥", "우동장국", "짜장소스", "고구마튀김", "단무지무침", "배추김치", "셀프라면"],
  },
  "2026-07-26": {
    breakfast: ["간편식", "주말 조식 미운영"],
    lunch: ["백미밥", "돼지고기김치찌개", "조기구이", "탕평채", "고사리나물", "깍두기"],
    dinner: ["백미밥", "얼갈이된장국", "한식잡채", "치킨너겟*머스타드", "열무나물", "배추김치", "셀프라면"],
  },

  // 주간 식단 5 (7/27 ~ 7/31) - 🔥 피날레 수육특식 포함!
  "2026-07-27": {
    breakfast: ["후리가케밥", "유부장국", "모듬소시지볶음", "배추김치", "셀프토스트"],
    lunch: ["백미밥", "유부우동국", "바싹불고기", "총알새송이볶음", "깻잎순겉절이", "배추김치"],
    dinner: ["백미밥", "버섯들깨국", "야채비빔만두", "메밀면무침", "꼬시래기무침", "배추김치", "셀프라면"],
  },
  "2026-07-28": {
    breakfast: ["닭죽", "메추리알장조림", "깍두기", "버터롤빵", "바나나우유"],
    lunch: ["백미밥", "배추된장국", "아비꼬카레라이스", "파채돈까스*오리엔탈", "오이피클", "배추김치"],
    dinner: ["백미밥", "황태미역국", "오리불고기", "오이고추된장무침", "우엉조림", "배추김치", "셀프라면"],
  },
  "2026-07-29": {
    breakfast: ["백미밥", "맑은순두부국", "돈육장조림", "배추김치", "시리얼*우유"],
    lunch: ["♥보쌈특식♥", "근대된장국", "보쌈수육", "쌈채소*쌈장", "들기름막국수", "보쌈김치"],
    dinner: ["백미밥", "팽이미소국", "새우까스*타르타르", "단무지무침", "요구르트", "배추김치", "셀프라면"],
  },
  "2026-07-30": {
    breakfast: ["햄볶음밥", "열무된장국", "섭산적데리야끼", "섞박지", "감자샐러드빵"],
    lunch: ["백미밥", "바지락칼국수", "고등어구이", "청포묵김가루무침", "무생채", "갓김치"],
    dinner: ["백미밥", "북어채계란국", "제육볶음", "상추*쌈장", "오복지무침", "배추김치", "셀프라면"],
  },
  "2026-07-31": {
    breakfast: ["계란죽", "해물완자전", "배추김치", "햄버거"],
    lunch: ["흑미밥", "파송송계란국", "베이컨크림파스타", "함박스테이크", "오이피클", "배추김치"],
    dinner: ["흑미밥", "얼갈이된장국", "언양식불고기*데리야끼", "콩나물무침", "쥐어채볶음", "배추김치", "셀프라면"],
  },
};
