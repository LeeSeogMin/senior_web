// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 페이지 스크롤 시 상단 헤더 스타일 변경
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 예산 차트 렌더링 (메인 페이지에서만)
    const budgetChartCanvas = document.getElementById('budgetChart');
    
    if (budgetChartCanvas) {
        const budgetChart = new Chart(budgetChartCanvas, {
            type: 'doughnut',
            data: {
                labels: [
                    '데이터 수집 및 처리', 
                    '컴퓨팅 자원', 
                    '개발 도구 및 API', 
                    '인력 지원', 
                    '테스트 및 검증', 
                    '예비비'
                ],
                datasets: [{
                    label: '예산 배분',
                    data: [150, 180, 70, 200, 50, 50],
                    backgroundColor: [
                        '#3f51b5', // 프라이머리 색상
                        '#00acc1', // 세컨더리 색상
                        '#ff5722', // 액센트 색상
                        '#673ab7', // 추가 색상 (보라색)
                        '#2196f3', // 추가 색상 (파란색)
                        '#009688'  // 추가 색상 (청록색)
                    ],
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                family: "'Noto Sans KR', sans-serif",
                                size: 13
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(33, 33, 33, 0.8)',
                        padding: 12,
                        bodyFont: {
                            family: "'Noto Sans KR', sans-serif",
                            size: 14
                        },
                        bodySpacing: 6,
                        boxPadding: 6
                    }
                },
                cutout: '65%'
            }
        });
    }
    
    // 애니메이션 효과 (스크롤 시 요소 등장)
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // 초기 로드 시 확인
    checkIfInView();
    
    // 스크롤 시 확인
    window.addEventListener('scroll', checkIfInView);
    
    // 탭 기능 (다른 페이지에서 사용)
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 현재 활성화된 탭 버튼 및 내용 비활성화
                const activeButton = document.querySelector('.tab-btn.active');
                const activeContent = document.querySelector('.tab-content.active');
                
                if (activeButton) {
                    activeButton.classList.remove('active');
                }
                
                if (activeContent) {
                    activeContent.classList.remove('active');
                }
                
                // 클릭한 탭 버튼 및 해당 내용 활성화
                const tabId = this.getAttribute('data-tab');
                const targetContent = document.getElementById(tabId);
                
                this.classList.add('active');
                
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
    
    // 헤더에 스크롤 효과 추가
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '';
            header.style.boxShadow = '';
        }
    });
});
