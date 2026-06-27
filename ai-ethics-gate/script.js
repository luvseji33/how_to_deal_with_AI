document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.guide-check');
    const enterBtn = document.getElementById('enter-btn');

    function updateButtonState() {
        // 모든 체크박스가 체크되어 있는지 확인
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        
        if (allChecked) {
            enterBtn.classList.add('active');
            enterBtn.disabled = false;
            enterBtn.textContent = "본 활동으로 들어가기 ✨";
        } else {
            enterBtn.classList.remove('active');
            enterBtn.disabled = true;
            enterBtn.textContent = "모든 가이드에 동의 후 본 활동 들어가기";
        }
    }

    // 각 체크박스에 이벤트 리스너 추가
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonState);
    });

    // 버튼 클릭 이벤트 처리
    enterBtn.addEventListener('click', () => {
        if (!enterBtn.disabled) {
            // 본 활동 진입 효과 (현재는 알림창으로 대체)
            enterBtn.innerHTML = "이동 중... 🚀";
            enterBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                alert("AI 윤리 핵심 가이드를 모두 확인하셨습니다!\n본 활동 페이지로 이동합니다.");
                
                // 실제 서비스에서는 아래와 같이 특정 URL로 이동시킬 수 있습니다.
                // window.location.href = "main_activity.html"; 
                
                // 임시로 원래 상태로 복구
                enterBtn.innerHTML = "본 활동으로 들어가기 ✨";
                enterBtn.style.opacity = '1';
            }, 800);
        }
    });
});
