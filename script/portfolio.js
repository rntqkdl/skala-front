/**
 * Seongmin An Portfolio Core Engine Library v4.0
 * Pure Vanilla JS Object - Namespace Modular Pattern
 */

const PortfolioCore = (function () {
    
    // 1. 내부 캡슐화 데이터셋 정의 (성민님의 개인 GitHub 리포지토리 링크 전면 탑재)
    const _projectDetails = {
        onlibrary: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">공공데이터 기반 이동식 도서관 운영 의사결정 지원 시스템(Spatial Decision Support System) 요약 보고서입니다.</p>
                <div class="star-section">
                    <p><strong>Situation:</strong> 대중교통 소외 지역주민들의 문화·교육 인프라 고립 문제와 자원 유실 한계를 정량적으로 극복해야 하는 과제 착안.[cite: 1, 3]</p>
                    <p><strong>Task:</strong> 진안군·임실군 실제 지오포지션을 타겟으로 공간 접근성 다기준 평가(MCDA) 후보지 모델링 및 실제 노면 도로 연동 TSP 알고리즘 노선 엔진 기획.[cite: 1, 3]</p>
                    <p><strong>Action:</strong> <br>
                    &bull; GeoPandas를 활용해 고령층 밀집도 및 공공 거점 레이어를 분석, 후보지 가중치 연산 자동화 로직 구현.<br>
                    &bull; Naver Maps Directions API 및 TSP 최적화 알고리즘을 Vanilla 코어로 연동하여 실제 이동 최적 노선 및 시나리오 렌더링.<br>
                    &bull; Streamlit 기반 인프라 레이어를 HTML/SaaS 대시보드 형태로 결합하여, 지역 데이터 추가만으로 타 지자체 즉시 확장이 가능한 유연한 아키텍처 정립.</p>
                    <p><strong>Result:</strong> 데이터 파이프라인 설계 및 시연 발표 완수. 상세 소스코드는 깃허브에서 검증 가능합니다.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand-primary); font-weight:700;">GitHub Repository에서 코드 보기 &rarr;</a></p>
                </div>
            </div>
        `,
        epitext: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">Swin Transformer V2와 SikuRoBERTa 기반 멀티모달 고문서 탁본 복원 AI 아키텍처 리포트입니다.[cite: 1, 2, 3]</p>
                <div class="star-section">
                    <p><strong>Situation:</strong> 13,000종 한자 클래스의 극심한 롱테일 분포 및 훼손 탁본 원천 이미지의 필드 결측값 리스크 극복 과제.[cite: 1]</p>
                    <p><strong>Task:</strong> 이미지 특징 추출 인코더와 언어 전후 문맥 디코더 모델을 융합하는 고성능 앙상블 복원 파이프라인 개발.[cite: 1, 3]</p>
                    <p><strong>Action:</strong> <br>
                    &bull; 빈도수 제곱근 역수 가중치 기반 커스텀 Loss 함수를 직접 수식화 설계하여 희귀 클래스 인식 정확도 향상.[cite: 1, 3]<br>
                    &bull; Grayscale &rarr; Otsu 이진화 &rarr; 자동 극성 감지 &rarr; 노이즈 상쇄 파이프라인으로 14,881개 원천 이미지 가공 정제.[cite: 1]<br>
                    &bull; 고문서 특화 SikuRoBERTa 토크나이저 어휘 사전 확장(Tokenizer Extension)을 적용해 UNK 토큰 유실율 원천 제어.[cite: 1, 3]</p>
                    <p><strong>Result:</strong> 최종 Top-1 검증 정확도 96.63%, F1-Score 82.4% SOTA 달성 및 대상(정보통신기획평가원장상) 수상.[cite: 1, 3]<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand-primary); font-weight:700;">GitHub Repository에서 코드 보기 &rarr;</a></p>
                </div>
            </div>
        `,
        smishing: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">비정형 크롤링 데이터 자동 정제 및 자가 진화형 스미싱 방어 시스템 보고서입니다.[cite: 1]</p>
                <div class="star-section">
                    <p><strong>Situation:</strong> 탐지 로직을 우회 회피하기 위해 삽입되는 이모지, 단축 URL, 실시간 성수기 스캠 텍스트 급증.[cite: 1]</p>
                    <p><strong>Task:</strong> Google News RSS 및 Naver API 실시간 텍스트 수집 레이어의 고신뢰성 가공 정제 자동화.[cite: 1]</p>
                    <p><strong>Action:</strong> <br>
                    &bull; 정규표현식(Regex) 계층 필터 및 Try-Except 다중 방어 메커니즘을 소스코딩하여 원천 데이터 수집 파이프라인 견고성 확보.[cite: 1]<br>
                    &bull; 가공 텍스트의 분류 모델 처리를 위한 JSONL 정형화 데이터 에셋 레이어 구축.[cite: 1]</p>
                    <p><strong>Result:</strong> 팀 전체 정제 데이터 연계 모델 F1-Score 최종 1.00 도출 기여 및 경진대회 우수상 수상.[cite: 1]<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand-primary); font-weight:700;">GitHub Repository에서 코드 보기 &rarr;</a></p>
                </div>
            </div>
        `,
        iot: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">수영장 배수구 끼임 사고 방지를 위한 정량 유량 계측 임베디드 SW 기술서입니다.[cite: 1, 3]</p>
                <div class="star-section">
                    <p><strong>Situation:</strong> 물리적 배수 덮개 유실 시 유아 팔 끼임 등으로 직결되는 치명적 사고 구조 모델 상쇄 필요.[cite: 1]</p>
                    <p><strong>Task:</strong> 센서 유량 데이터 펄스의 고유 노이즈를 파싱하여 실시간 오탐을 제어할 최적 임계값 연산.[cite: 1]</p>
                    <p><strong>Action:</strong> <br>
                    &bull; 정상 유량과 사고 시 유량 데이터 정량 정밀 분석을 거쳐 최적의 이상 펄스 임계값(500L/h) 근거 산출.[cite: 1]<br>
                    &bull; Arduino 펄스 신호 감지 로직 및 정격 릴레이 변환 회로 연동, 0.1초 내 워터펌프 역회전 비상 로직 구현.[cite: 1, 3]</p>
                    <p><strong>Result:</strong> 신규 기술 구현 증명을 기반으로 캡스톤 디자인 은상 입증 완수.<br>
                    🔗 <a href="https://github.com/rntqkdl" target="_blank" style="color:var(--color-brand-primary); font-weight:700;">GitHub Repository에서 코드 보기 &rarr;</a></p>
                </div>
            </div>
        `,
        story_data: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">가상 데이터 환경과 고노이즈 현업 비정형 필드 데이터의 격차 극복 기술 에세이입니다.[cite: 2]</p>
                <div class="star-section">
                    <p><strong>필드 직면 과제:</strong> 학습용 오픈소스 토이셋과 달리, 실제 탁본 이미지나 크롤링 비정형 원천 데이터셋은 온갖 결측값과 노이즈가 산재해 초기 아키텍처 알고리즘을 전면 유실시킵니다.[cite: 1, 2]</p>
                    <p><strong>돌파 메커니즘:</strong> 층화 추출(Stratified Split)과 통계적 이상치 제거(EDA 기법) 레이어를 전처리 파이프라인 초입에 강제 모듈화하여 입력 데이터의 순도를 비약적으로 높였습니다.[cite: 1, 3] 이 경험을 통해 데이터 중심 인공지능(Data-Centric AI)의 실무적 중요성을 체득했습니다.[cite: 1]</p>
                </div>
            </div>
        `,
        story_collab: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">공적 산출물 신뢰성과 팀 사적 결속력을 완전 분리하는 시스템 기반 PM 아키텍처 철학입니다.[cite: 3]</p>
                <div class="star-section">
                    <p><strong>필드 직면 과제:</strong> "친밀함이 성과를 보장하지 않는다. 오직 수치화된 문서 가이드라인과 분할 시스템만이 성과를 보장한다."[cite: 1] 역할 범위(R&R)가 불투명하면 중복 리소스로 인한 연산 및 개발 기회가 낭비됨을 DeepRacer 튜닝 실패에서 확인했습니다.[cite: 1]</p>
                    <p><strong>돌파 메커니즘:</strong> Epitext 프로젝트 총괄 PM 수행 시, 저장소 관리 컨벤션을 통제하고 주 단위로 [실험 데이터 Metric 명세 &rarr; 수렴 Loss 지표 &rarr; 가설 검증 진척도]를 투명하게 문서 아카이브화하여 무충돌 Git 이벤트를 이끌어내 대상을 거머쥐었습니다.[cite: 1, 3]</p>
                </div>
            </div>
        `,
        story_mentor: `
            <div class="modal-detail-wrapper">
                <p class="modal-intro">후배 개발자 및 멘티의 이력서에 실질적 기술 자산을 새겨넣는 페이스메이커 가이드라인입니다.[cite: 5]</p>
                <div class="star-section">
                    <p><strong>필드 직면 과제:</strong> 추상적인 이론 설명 위주의 교육은 실무 포트폴리오 관점에서 생명력을 잃기 쉽습니다.[cite: 5]</p>
                    <p><strong>돌파 메커니즘:</strong> 멘티가 구현한 오픈소스와 API 연동 로직이 외부 채용 담당자에게 확실히 증명되도록, 가독성 높은 깃허브 리드미(README.md) 인덱싱 아키텍처링, 단위 커밋 규칙 지도를 상시 수행하여 학기 말에 가치 있는 실전 경력을 남기도록 가이드합니다.[cite: 5]</p>
                </div>
            </div>
        `
    };

    // DOM 캐싱 레이어
    const _dom = {
        getModal: () => document.getElementById('projectModal'),
        getTitle: () => document.getElementById('modalTitle'),
        getBody: () => document.getElementById('modalBody'),
        getLightbox: () => document.getElementById('lightboxModal'),
        getLightboxImg: () => document.getElementById('lightboxImg'),
        getLightboxCaption: () => document.getElementById('lightboxCaption'),
        getBodyTag: () => document.body
    };

    // 공개 모듈러 API 노출
    return {
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
        },

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

        initThemeAPI: function () {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                _dom.getBodyTag().setAttribute('data-theme', 'dark');
            }
        }
    };
})();

// 글로벌 전역 스코프 브릿지 어댑터 바인딩 (HTML 인라인 리스너와의 완벽한 완충 호환 보존)
function openModal(id) { PortfolioCore.openModalAPI(id); }
function closeModal(e) { if (event.target.id === 'projectModal') PortfolioCore.closeModalAPI(); }
function closeModalDirect() { PortfolioCore.closeModalAPI(); }
function openLightbox(src, caption) { PortfolioCore.openLightboxAPI(src, caption); }
function closeLightbox(e) { if (event.target.id === 'lightboxModal') PortfolioCore.closeLightboxAPI(); }
function closeLightboxDirect() { PortfolioCore.closeLightboxAPI(); }
function toggleTheme() { PortfolioCore.toggleThemeMode(); }

window.addEventListener('DOMContentLoaded', () => {
    PortfolioCore.initThemeAPI();
});