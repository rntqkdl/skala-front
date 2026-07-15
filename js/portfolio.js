/**
 * Seongmin An Portfolio Core Library v3.0
 * 순수 Vanilla JS로 구축된 독립 모듈러 아키텍처입니다.
 */

const PortfolioCore = (function () {
    
    // 1. 프로젝트 및 해결 에세이 상세 데이터셋 정의 (출처 표기 소거 완료)
    const _projectDetails = {
        onlibrary: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">교통소외지역의 문화복지 격차 해소를 위한 공간 의사결정 지원 시스템(SDSS)입니다.</p>
                <div class="star-section">
                    <p><strong>Situation (상황):</strong> 대중교통 인프라 부족 및 이동 수단 부재로 공공 문화복지 시설에 도달하기 어려운 교통소외지역의 사회적 격차 해소 필요성 확인.</p>
                    <p><strong>Task (과제):</strong> 공공데이터를 기반으로 최적의 이동식 도서관(온서관) 거점 후보지를 선정 및 평가하고, 지자체가 즉각 활용 가능한 공간 의사결정 지원 시스템과 순회 노선 최적화 파이프라인 개발.</p>
                    <p><strong>Action (행동):</strong> <br>
                    &bull; 인구 분포, 기존 버스 접근성, 복지/공공거점을 정량 평가하는 다기준 평가(MCDA) 방식의 후보지 점수화 알고리즘 구현.<br>
                    &bull; Naver Maps Directions API 및 TSP(외판원 문제) 최적화 알고리즘을 결합하여, 실제 노면 경로 기반의 Hub-and-Spoke 다중 차량 노선 설계.<br>
                    &bull; Streamlit을 활용하여 대시보드 MVP를 구현하고, 후보지별 상세 평가표 및 노선 시각화, TAGO 버스 연계 시간표 시스템을 통합.</p>
                    <p><strong>Result (결과):</strong> 데이터 추가 설계만으로 다른 지자체에도 이식이 가능한 이식성 높은 대시보드 모델 구축 및 최종 평가 성공적 발표 완수.</p>
                </div>
            </div>
        `,
        epitext: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">Swin Transformer V2와 SikuRoBERTa를 결합하여 손상된 고문서 탁본을 해석하는 멀티모달 AI 솔루션입니다.</p>
                <div class="star-section">
                    <p><strong>Situation (상황):</strong> 13,000종 한자 클래스와 극심한 데이터 불균형(Long-tail)을 가진 훼손 탁본 이미지 복원 시도.</p>
                    <p><strong>Task (과제):</strong> 희귀 한자의 낮은 인식률을 개선하여 Top-1 정확도 극대화하기.</p>
                    <p><strong>Action (행동):</strong> <br>
                    &bull; Swin Transformer V2 Small 모델을 도입하여 고해상도 이미지의 미세한 획 보존.<br>
                    &bull; 빈도수 제곱근 역수 가중치를 적용한 커스텀 손실 함수 설계 적용.<br>
                    &bull; Grayscale &rarr; Otsu 이진화 &rarr; 노이즈 제거 파이프라인 구축 및 Train/Val 층화 임의 추출 적용.</p>
                    <p><strong>Result (결과):</strong> 최종 Top-1 정확도 96.63%, Top-5 99.38%를 확보하여 프로젝트 경진대회 대상 수상.</p>
                </div>
            </div>
        `,
        smishing: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">비정형 텍스트의 고도화된 정제를 기반으로 설계된 자가 진화형 스미싱 차단 파이프라인입니다.</p>
                <div class="star-section">
                    <p><strong>Situation (상황):</strong> 급변하는 명절/배송 수법 등 탐지 회피용 신종 스미싱 수법 증가.</p>
                    <p><strong>Task (과제):</strong> 비정형 수집 데이터의 고도화된 정제 및 분류 정밀도(F1-Score) 끌어올리기.</p>
                    <p><strong>Action (행동):</strong> <br>
                    &bull; Google News RSS, Naver API 비정형 데이터를 가공하는 자동 정제 파이프라인 구축.<br>
                    &bull; Try-Except 예외 처리와 정규표현식을 계층적으로 설계하여 입력 데이터의 견고성 확보.<br>
                    &bull; 명절/배송 성수기 등의 시간적 패턴 및 단축 URL/이모지 탐지 로직 적용.</p>
                    <p><strong>Result (결과):</strong> 팀 전체 정제 데이터 활용 기반 탐지 모델 F1-Score를 0.67에서 1.00으로 비약적 향상에 기여.</p>
                </div>
            </div>
        `,
        iot: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">수영장 신체 끼임 사고를 방지하기 위해 실시간 데이터를 처리하는 IoT 자동제어 시스템입니다.</p>
                <div class="star-section">
                    <p><strong>Situation (상황):</strong> 수영장 배수구 신체 끼임 사고 발생 시 긴급 중단 및 조치가 필요한 시스템 구축.</p>
                    <p><strong>Task (과제):</strong> 수류 및 수압 유량 센서 펄스 데이터의 미세 노이즈로 인한 오탐지 제어 오작동 해결.</p>
                    <p><strong>Action (행동):</strong> <br>
                    &bull; Python 데이터 분석 및 오탐 방지용 노이즈 필터링 알고리즘 구현.<br>
                    &bull; 이상 유량 상태 감지 시 0.1초 내에 워터펌프 역회전을 제어하여 신체 이탈을 유도하는 제어 로직 설계.<br>
                    &bull; 정상 상태와 사고 환경 간 실험 데이터를 정량 분석하여 최적의 오차 범위를 도출.</p>
                    <p><strong>Result (결과):</strong> 수압 및 유량 데이터 정량 분석을 기반으로 최적 임계값을 도출하여 전북대 캡스톤 디자인 은상 수상.</p>
                </div>
            </div>
        `,
        // ✍️ 에세이 & 멘토링 스토리 추가
        story_data: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">교과서적 예제 데이터에서 실제 비정형 날것의 데이터셋을 다룰 때 겪는 본질적인 격차 극복기입니다.</p>
                <div class="star-section">
                    <p><strong>실전 직면 상황:</strong> 머신러닝 학습 모델들은 정형화되고 완벽히 정제된 데이터에서는 뛰어난 성능을 보이지만, 훼손 탁본 이미지나 RSS 비정형 텍스트 등 현실 세계의 데이터셋을 만났을 때 결측치, 극심한 노이즈, 깨진 구도 등으로 인해 무용지물이 되는 현상을 직면했습니다.</p>
                    <p><strong>극복을 위한 엔지니어링:</strong> <br>
                    &bull; <strong>Epitext:</strong> 14,881개의 탁본 원천 이미지 중 EasyOCR을 활용한 1차 필터링 및 통계적 EDA 기법으로 2개 이상의 품질 지표에서 이상치를 보이는 불량 데이터 106개를 완벽히 도출해 삭제했습니다. 또한 13,000종 클래스 불균형 문제를 Stratified Split으로 극복하여 데이터의 층화를 일치시켰습니다.<br>
                    &bull; <strong>Smishing Forecast:</strong> Google 뉴스 및 Naver 비정형 크롤링 텍스트에서 정규표현식(Regex)과 다중 계층 Try-Except 예외 방어 처리를 결합하여 1,000건 이상의 한글 노이즈를 완벽하게 정제한 구조적 JSONL 파이프라인으로 자산화했습니다.</p>
                    <p><strong>인사이트:</strong> 모델 성능의 최우선 순위는 모델의 복잡성이 아닌 '데이터 품질(Data-Centric AI)'에 있으며, 엣지 케이스를 사전에 예측하여 방어 코드를 설계하는 견고함이 주효하다는 사실을 증명했습니다.</p>
                </div>
            </div>
        `,
        story_collab: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">친밀함과 공적인 프로젝트 성과 창출을 완벽하게 분리하는 명확한 시스템 리더십 철학입니다.</p>
                <div class="star-section">
                    <p><strong>협업의 실패 교훈:</strong> 과거 친한 동기들과 팀을 이루어 AWS DeepRacer 프로젝트를 진행할 당시, 서로 친하다는 감정에 의존해 명확한 R&R(역할과 책임) 정의 없이 작업을 시작했습니다. 그 결과 두 명의 팀원이 각자 동일한 하이퍼파라미터 튜닝을 따로 수행하여 일주일 동안 총 6시간의 GPU 연산 및 개발 리소스를 중복 낭비하는 뼈아픈 실패를 맛보았습니다.</p>
                    <p><strong>PM 리더십 적용:</strong> <br>
                    &bull; "좋은 감정이 좋은 성과를 보장하지 않는다. 명확한 분할 시스템이 성과를 보장한다"는 협업 원칙을 정립했습니다.<br>
                    &bull; 이후 대형 프로젝트인 Epitext PM을 맡으면서 첫 주에 컴퓨터 비전(CV), 자연어 처리(NLP), 백엔드, 프론트엔드로 나뉜 업무 경계를 문서화하여 명문화했습니다.<br>
                    &bull; 매주 각 담당 영역의 [실험 상세 &rarr; 정확도 수치 지표 &rarr; 다음 계획]을 실시간으로 기록하고 공유하는 수치 중심의 정기 코드 리뷰를 정착시켰습니다.</p>
                    <p><strong>최종 성과:</strong> 4개월 동안 단 1건의 작업 중복 및 Git 커밋 불일치 없이 90회 이상의 개발 이벤트를 무충돌 제어하였고, 정보통신기획평가원장상 대상을 획득하며 시스템 중심 협업의 승리를 입증했습니다.</p>
                </div>
            </div>
        `,
        story_mentor: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">멘티가 직접 이력서에 실전 한 줄을 추가할 수 있도록 함께 뛰는 성민의 페이스메이커 멘토링 철학입니다.</p>
                <div class="star-section">
                    <p><strong>성민의 교육 가치관:</strong> 멘토링은 단순히 뜬구름 잡는 추상적인 전공 지식을 풀어 설명해 주는 자리가 아닙니다. 멘티가 자신의 전공 분야에 AI를 융합할 수 있도록 실전적인 취업 경쟁력을 기르는 가이드가 되어야 합니다.</p>
                    <p><strong>수행 멘토링 가이드라인:</strong> <br>
                    &bull; <strong>실전 공모전 돌파구 제시:</strong> 중간고사 시험 일정과 공모전 접수 마감 시한이 겹쳐 멘탈을 잃기 쉬운 멘티들을 밀착하여 타임라인 스케줄링을 재설계하고, 모델링 점수가 꽉 막혀 정체될 때 데이터 전처리 기법을 도입해 우회 돌파하는 트러블슈팅 팁을 공유합니다.<br>
                    &bull; <strong>매력적인 깃허브 아키텍처 가이드:</strong> 멘티들의 깃허브 코드 저장소가 방치되지 않도록 채용 담당자 입장에서 가독성 높은 리드미(README.md) 레이아웃 작성 규칙 및 의미 있는 단위의 깃 커밋(Commit) 문법을 체계적으로 멘토링합니다.<br>
                    &bull; <strong>사소한 프로젝트의 이력서 자산화:</strong> 소규모 해커톤이나 실패했던 팀 프로젝트도 자소서 및 이력서에서 가장 강력한 무기가 될 수 있도록 'STAR 기반 기술 스토리텔링'으로 탈바꿈시킵니다.</p>
                </div>
            </div>
        `
    };

    // 2. UI DOM 캐싱
    const _dom = {
        getModal: () => document.getElementById('projectModal'),
        getTitle: () => document.getElementById('modalTitle'),
        getBody: () => document.getElementById('modalBody'),
        getLightbox: () => document.getElementById('lightboxModal'),
        getLightboxImg: () => document.getElementById('lightboxImg'),
        getLightboxCaption: () => document.getElementById('lightboxCaption'),
        getBodyTag: () => document.body
    };

    // 3. 공개 API 선언 (Public Module Methods)
    return {
        /**
         * 프로젝트 및 에세이 상세 모달 개방
         * @param {string} projectId - 프로젝트 또는 스토리 ID
         */
        openProjectModal: function (projectId) {
            const modal = _dom.getModal();
            const title = _dom.getTitle();
            const body = _dom.getBody();
            
            if (!modal || !_projectDetails[projectId]) return;

            // 프로젝트 및 에세이 타이틀 목록 매핑
            const titles = {
                onlibrary: '🗺️ On Library: 이동식 도서관 의사결정 지원 시스템',
                epitext: '🏛️ Epitext 고문서 복원 AI 솔루션',
                smishing: '🛡️ Smishing Forecast 스미싱 방어 AI',
                iot: '🏊 IoT 기반 스마트 모니터링 시스템',
                story_data: '📊 실전 데이터 vs 가상 데이터 극복 에세이',
                story_collab: '🤝 역할 분담 없는 협업의 실패 극복 에세이',
                story_mentor: '🌱 실전형 커리어 로드맵과 멘토링 철학'
            };

            title.innerText = titles[projectId];
            body.innerHTML = _projectDetails[projectId];
            
            modal.style.display = 'flex';
            _dom.getBodyTag().style.overflow = 'hidden';
        },

        /**
         * 상세 모달 닫기
         */
        closeProjectModal: function () {
            const modal = _dom.getModal();
            if (modal) {
                modal.style.display = 'none';
                _dom.getBodyTag().style.overflow = '';
            }
        },

        /**
         * 📸 이미지 원본 Lightbox 팝업 오픈
         * @param {string} imgSrc - 확장 이미지 상대 경로
         * @param {string} captionText - 사진 캡션 텍스트
         */
        openLightboxPopup: function (imgSrc, captionText) {
            const lightbox = _dom.getLightbox();
            const lbImg = _dom.getLightboxImg();
            const lbCaption = _dom.getLightboxCaption();

            if (!lightbox || !lbImg) return;

            lbImg.src = imgSrc;
            lbCaption.innerText = captionText;

            lightbox.style.display = 'flex';
            _dom.getBodyTag().style.overflow = 'hidden';
        },

        /**
         * Lightbox 팝업 닫기
         */
        closeLightboxPopup: function () {
            const lightbox = _dom.getLightbox();
            if (lightbox) {
                lightbox.style.display = 'none';
                _dom.getBodyTag().style.overflow = '';
            }
        },

        /**
         * 라이트/다크 테마 토글 전환
         */
        toggleThemeMode: function () {
            const body = _dom.getBodyTag();
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        },

        /**
         * 초기 저장 테마 동화
         */
        initTheme: function () {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                _dom.getBodyTag().setAttribute('data-theme', 'dark');
            }
        }
    };
})();

// 4. HTML 인라인 바인딩 어댑터 함수 선언
function openModal(id) {
    PortfolioCore.openProjectModal(id);
}

function closeModal(event) {
    if (event.target.id === 'projectModal') {
        PortfolioCore.closeProjectModal();
    }
}

function closeModalDirect() {
    PortfolioCore.closeProjectModal();
}

function openLightbox(imgSrc, captionText) {
    PortfolioCore.openLightboxPopup(imgSrc, captionText);
}

function closeLightbox(event) {
    if (event.target.id === 'lightboxModal') {
        PortfolioCore.closeLightboxPopup();
    }
}

function closeLightboxDirect() {
    PortfolioCore.closeLightboxPopup();
}

function toggleTheme() {
    PortfolioCore.toggleThemeMode();
}

// 최초 로딩시 실행
window.addEventListener('DOMContentLoaded', () => {
    PortfolioCore.initTheme();
});