// 프로젝트 STAR 상세 경험 명세 데이터셋
const projectDetails = {
    onlibrary: `
        <strong>Situation:</strong> 대중교통 인프라 부족 및 이동 수단 부재로 공공 문화복지 시설에 도달하기 어려운 교통소외지역의 사회적 격차 해소 필요성 확인.<br>
        <strong>Task:</strong> 공공데이터를 기반으로 최적의 이동식 도서관(온서관) 거점 후보지를 선정 및 평가하고, 지자체가 즉각 활용 가능한 공간 의사결정 지원 시스템(SDSS)과 순회 노선 최적화 파이프라인 개발.<br>
        <strong>Action:</strong> <br>
        1) 인구 분포, 기존 버스 접근성, 복지/공공거점을 정량 평가하는 다기준 평가(MCDA) 방식의 후보지 점수화 알고리즘 구현.<br>
        2) Naver Maps Directions API 및 TSP(외판원 문제) 최적화 알고리즘을 결합하여, 실제 노면 경로 기반의 Hub-and-Spoke 다중 차량 노선 설계.<br>
        3) Streamlit을 활용하여 대시보드 MVP를 구현하고, 후보지별 상세 평가표 및 노선 시각화, TAGO 버스 연계 시간표 시스템을 통합.<br>
        <strong>Result:</strong> 데이터 추가 설계만으로 다른 지자체에도 이식이 가능한 이식성 높은 대시보드 모델 구축 및 최종 평가 성공적 발표 완수.
    `,
    epitext: `
        <strong>Situation:</strong> 13,000종 한자 클래스와 극심한 데이터 불균형(Long-tail)을 가진 훼손 탁본 이미지 복원 시도.<br>
        <strong>Task:</strong> 희귀 한자의 낮은 인식률을 개선하여 Top-1 정확도 극대화하기.<br>
        <strong>Action:</strong> <br>
        1) Swin Transformer V2 Small 모델을 도입하여 고해상도 이미지의 미세한 획 보존.<br>
        2) 빈도수 제곱근 역수 가중치를 적용한 커스텀 손실 함수 설계 적용.<br>
        3) Grayscale → Otsu 이진화 → 노이즈 제거 파이프라인 구축 및 Train/Val 층화 임의 추출 적용.<br>
        <strong>Result:</strong> 최종 Top-1 정확도 96.63%, Top-5 99.38%를 확보하여 프로젝트 경진대회 대상 수상.
    `,
    smishing: `
        <strong>Situation:</strong> 급변하는 명절/배송 수법 등 탐지 회피용 신종 스미싱 수법 증가.<br>
        <strong>Task:</strong> 비정형 수집 데이터의 고도화된 정제 및 분류 정밀도(F1-Score) 끌어올리기.<br>
        <strong>Action:</strong> <br>
        1) Google News RSS, Naver API 비정형 데이터를 가공하는 자동 정제 파이프라인 구축.<br>
        2) Try-Except 예외 처리와 정규표현식을 계층적으로 설계하여 입력 데이터의 견고성 확보.<br>
        3) 명절/배송 성수기 등의 시간적 패턴 및 단축 URL/이모지 탐지 로직 적용.<br>
        <strong>Result:</strong> 팀 전체 정제 데이터 활용 기반 탐지 모델 F1-Score를 0.67에서 1.00으로 비약적 향상에 기여.
    `,
    iot: `
        <strong>Situation:</strong> 수영장 배수구 신체 끼임 사고 발생 시 긴급 중단 및 조치가 필요한 시스템 구축.<br>
        <strong>Task:</strong> 수류 및 수압 유량 센서 펄스 데이터의 미세 노이즈로 인한 오탐지 제어 오작동 해결.<br>
        <strong>Action:</strong> <br>
        1) Python 데이터 분석 및 오탐 방지용 노이즈 필터링 알고리즘 구현.<br>
        2) 이상 유량 상태 감지 시 0.1초 내에 워터펌프 역회전을 제어하여 신체 이탈을 유도하는 제어 로직 설계.<br>
        3) 정상 상태와 사고 환경 간 실험 데이터를 정량 분석하여 최적의 오차 범위를 도출.<br>
        <strong>Result:</strong> 수압 및 유량 데이터 정량 분석을 기반으로 최적 임계값을 도출하여 전북대 캡스톤 디자인 은상 수상.
    `
};

// 1. 모달 개방 제어
function openModal(id) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (id === 'onlibrary') {
        title.innerText = '🗺️ On Library: 이동식 도서관 운영 의사결정 지원 시스템';
        body.innerHTML = projectDetails.onlibrary;
    } else if (id === 'epitext') {
        title.innerText = '🏛️ Epitext 고문서 복원 AI 솔루션';
        body.innerHTML = projectDetails.epitext;
    } else if (id === 'smishing') {
        title.innerText = '🛡️ Smishing Forecast 스미싱 방어 AI';
        body.innerHTML = projectDetails.smishing;
    } else if (id === 'iot') {
        title.innerText = '🏊 IoT 기반 스마트 모니터링 시스템';
        body.innerHTML = projectDetails.iot;
    }

    modal.style.display = 'flex';
}

// 2. 모달 바깥 흐릿한 배경 클릭 시 모달 닫기
function closeModal(event) {
    if (event.target.id === 'projectModal') {
        document.getElementById('projectModal').style.display = 'none';
    }
}

// 3. 모달 내부 닫기 버튼(X) 기능
function closeModalDirect() {
    document.getElementById('projectModal').style.display = 'none';
}

// 4. 다크모드/라이트모드 토글 및 로컬 스토리지 캐싱
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// 5. 로드 즉시 테마 동화
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});