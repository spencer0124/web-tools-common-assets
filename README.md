# 🎨 Web Tools Common Assets

> **SeungYong Tools Hub의 모든 웹 도구가 공유하는 디자인 시스템 및 공통 로직 저장소입니다.**  
> 토스(Toss) 스타일의 UI 컴포넌트와 유틸리티 함수를 제공합니다.

---

## 📦 Contents

### 1. Toss UI (`toss-ui.css`)
토스 앱의 깔끔하고 직관적인 디자인을 웹으로 구현했습니다.

- **Typography**: Pretendard, Apple SD Gothic Neo 기반의 가독성 높은 폰트 설정.
- **Layout**: 모바일 친화적인 `.app-container`, `.toss-card` 레이아웃.
- **Components**:
    - `.btn-primary`: 파란색 메인 버튼 (인터랙션 포함).
    - `.btn-secondary`: 회색 서브 버튼.
    - `details`: 부드러운 애니메이션이 적용된 아코디언 설명글.
- **Animations**: `toss-fade-in-up`, `toss-scale-up` 등 미려한 등장 효과.

### 2. Utilities (`toss-ui.js`)
- **`TossUI.checkAndEscapeKakaoInApp()`**: 카카오톡 인앱 브라우저에서 접속 시, 자동으로 외부 브라우저(Chrome/Safari)로 전환해주는 필수 기능.

---

## 🚀 How to Use

새로운 툴을 만들 때 이 레포지토리를 **Git Submodule**로 추가하여 사용하세요.

### 1. Add Submodule
```bash
git submodule add https://github.com/spencer0124/web-tools-common-assets.git assets
```

### 2. Import in HTML
```html
<head>
  <!-- Toss UI CSS -->
  <link rel="stylesheet" href="assets/toss-ui.css" />
  
  <!-- Toss UI JS -->
  <script src="assets/toss-ui.js"></script>
</head>
```

### 3. Example Usage
```html
<div class="toss-card active">
  <div class="card-content">
    <h1>안녕하세요</h1>
    <p>공통 디자인이 적용되었습니다.</p>
  </div>
  <div class="card-footer">
    <button class="btn-primary" onclick="TossUI.checkAndEscapeKakaoInApp()">
      확인
    </button>
  </div>
</div>
```
