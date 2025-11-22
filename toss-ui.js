/* --- Toss UI Common JS v1.0 --- */

const TossUI = {
  /**
   * 카카오 인앱 브라우저 탈출 헬퍼
   * @returns {boolean} true if redirected, false otherwise
   */
  checkAndEscapeKakaoInApp: function () {
    const userAgent = navigator.userAgent.toLowerCase();
    if (!/kakaotalk/i.test(userAgent)) return false;
    
    const currentUrl = window.location.href;
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);
    
    // 외부 브라우저 호출
    window.location.href =
      "kakaotalk://web/openExternal?url=" + encodeURIComponent(currentUrl);
      
    // 닫기 시도 (약간의 딜레이 후)
    setTimeout(() => {
      window.location.href = isIOS
        ? "kakaoweb://closeBrowser"
        : "kakaotalk://inappbrowser/close";
    }, 500);
    
    return true;
  },

  /**
   * 토스 스타일 토스트 메시지 (추후 사용)
   * @param {string} message 
   */
  showToast: function (message) {
    // TODO: Implement Toast UI
    console.log("Toast:", message);
  }
};

// 전역 객체로 노출
window.TossUI = TossUI;
