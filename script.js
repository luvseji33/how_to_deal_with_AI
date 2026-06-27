document.addEventListener('DOMContentLoaded', () => {
    // --- 메인 입장 버튼 로직 ---
    const enterBtn = document.getElementById('enter-btn');
    
    enterBtn.addEventListener('click', () => {
        enterBtn.innerHTML = "이동 중... 🚀";
        enterBtn.style.opacity = '0.8';
        
        setTimeout(() => {
            alert("환영합니다!\n본 활동 페이지로 이동합니다.");
            
            // 실제 서비스에서는 아래와 같이 특정 URL로 이동시킬 수 있습니다.
            // window.location.href = "main_activity.html"; 
            
            // 임시로 원래 상태로 복구
            enterBtn.innerHTML = "나는 윤리 핵심가이드를 빠짐없이 읽고 이를 실천하겠습니다.";
            enterBtn.style.opacity = '1';
        }, 800);
    });

    // --- 모달(팝업) 로직 ---
    const btnTerms = document.getElementById('btn-terms');
    const btnPrivacy = document.getElementById('btn-privacy');
    
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBodyContent = document.getElementById('modal-body-content');
    
    const contentTerms = document.getElementById('content-terms').innerHTML;
    const contentPrivacy = document.getElementById('content-privacy').innerHTML;

    // 모달 열기 함수
    function openModal(title, contentHTML) {
        modalTitle.textContent = title;
        modalBodyContent.innerHTML = contentHTML;
        modalOverlay.classList.add('show');
    }

    // 모달 닫기 함수
    function closeModal() {
        modalOverlay.classList.remove('show');
    }

    // 이용약관 클릭
    btnTerms.addEventListener('click', () => {
        openModal("이용약관", contentTerms);
    });

    // 개인정보처리방침 클릭
    btnPrivacy.addEventListener('click', () => {
        openModal("개인정보처리방침", contentPrivacy);
    });

    // 닫기 버튼 클릭
    modalCloseBtn.addEventListener('click', closeModal);

    // 모달 바깥 영역(배경) 클릭 시 닫기
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});
