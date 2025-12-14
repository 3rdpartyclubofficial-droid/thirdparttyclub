  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XTLE47DTXF');


//index 파일  이벤트 함수
function trackEvent(eventName, eventLabel) {
  gtag('event', eventName, {
    event_category: 'index_link',
    event_label: eventLabel
  });
}

//wine 파일 버튼 이벤트 함수

function trackApplyClick() {
  gtag('event', 'apply_click', {
    event_category: 'engagement',
    event_label: 'wine_meeting'
  });
}
