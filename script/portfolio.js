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
        `
    };

    const _dom = {
        getModal: () => document.getElementById('projectModal'),
        getTitle: () => document.getElementById('modalTitle'),
        getBody: () => document.getElementById('modalBody'),
        getLightbox: () => document.getElementById('lightboxModal'),
        getLightboxImg: () => document.getElementById('lightboxImg'),
        getLightboxCaption: () => document.getElementById('lightboxCaption'),
        getBodyTag: () => document.body,
        getThemeButtons: () => document.querySelectorAll('.theme-btn-node')
    };

    return {
        // 💡 핵심 고도화: 메인 홈에서 캐싱된 테마를 프로필 진입 시 배경 그라데이션까지 완벽 동기화하는 엔진
        initThemeSync: function () {
            const cachedTheme = localStorage.getItem('portal-theme') || 'light';
            _dom.getBodyTag().setAttribute('data-theme', cachedTheme);
            
            const buttons = _dom.getThemeButtons();
            
            const updateActiveButton = (currentTheme) => {
                buttons.forEach(btn => {
                    if (btn.getAttribute('data-theme') === currentTheme) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            };

            // 초기 실행 시 액티브 버튼 스타일 동기화
            updateActiveButton(cachedTheme);
            
            // 🛠️ 버그 패치 코어 리스너: 프로필 내부에서 테마 전환 시 배경 구체의 속성까지 실시간 리렌더링 제어
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const targetMode = btn.getAttribute('data-theme');
                    _dom.getBodyTag().setAttribute('data-theme', targetMode);
                    localStorage.setItem('portal-theme', targetMode);
                    updateActiveButton(targetMode);
                });
            });
        },

        openModalAPI: function (id) {
            const modal = _dom.getModal();
            const title = _dom.getTitle();
            const body = _dom.getBody();
            if (!modal || !_projectDetails[id]) return;

            const titleMap = {
                onlibrary: '🗺️ On Library: 의사결정 지원 시스템 명세',
                epitext: '🏛️ EpiText: 훼손 탁본 복원 멀티모달 복원 명세',
                smishing: '🛡️ Smishing Forecast: 스미싱 탐지 자동화 파이프라인',
                iot: '🏊 Safe Drain Lock: 임베디드 실시간 제어 파이프라인',
                story_data: '📊 데이터 엔지니어링: 필드 데이터 정제 가이드',
                story_collab: '🤝 PM 시스템: 아키텍처 기반 협업 가이드라인',
                story_mentor: '🌱 멘토링 철학: 깃허브 자산화 커리어 로드맵'
            };

            title.innerText = titleMap[id];
            body.innerHTML = _projectDetails[id];
            modal.style.display = 'flex';
            _dom.getBodyTag().style.overflow = 'hidden';
        },

        closeModalAPI: function () {
            const modal = _dom.getModal();
            if (modal) {
                modal.style.display = 'none';
                _dom.getBodyTag().style.overflow = '';
            }
        },

        openLightboxAPI: function (src, caption) {
            const lightbox = _dom.getLightbox();
            const img = _dom.getLightboxImg();
            const cap = _dom.getLightboxCaption();
            if (!lightbox || !img) return;

            img.src = src;
            cap.innerText = caption;
            lightbox.style.display = 'flex';
            _dom.getBodyTag().style.overflow = 'hidden';
        },

        closeLightboxAPI: function () {
            const lightbox = _dom.getLightbox();
            if (lightbox) {
                lightbox.style.display = 'none';
                _dom.getBodyTag().style.overflow = '';
            }
        }
    };
})();

// 글로벌 인터페이스 브릿지 바인딩
window.openModal = function(id) { PortfolioCore.openModalAPI(id); };
window.closeModal = function(e) { if (e.target.id === 'projectModal') PortfolioCore.closeModalAPI(); };
window.closeModalDirect = function() { PortfolioCore.closeModalAPI(); };
window.openLightbox = function(src, caption) { PortfolioCore.openLightboxAPI(src, caption); };
window.closeLightbox = function(e) { if (e.target.id === 'lightboxModal') PortfolioCore.closeLightboxAPI(); };
window.closeLightboxDirect = function() { PortfolioCore.closeLightboxAPI(); };

// 돔 로드 즉시 멀티테마 연동 상태 머신 구동
window.addEventListener('DOMContentLoaded', () => {
    PortfolioCore.initThemeSync();
});