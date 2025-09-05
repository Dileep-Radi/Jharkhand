document.addEventListener('DOMContentLoaded', function() {
    const redirectUrls = [
        'dalma_wildlife/dalma_wildlife.html',   
        'hundru_falls/hundru_falls.html',   
        'patratu/patratu.html',   
        'rajderwa_bird_sanctuary/rajderwa_bird_sanctuary.html'
    ];
    
    const images = document.querySelectorAll('.gallery-image');
    
    images.forEach((image, index) => {
        image.setAttribute('cursor', 'rayOrigin: mouse');
        
        let clickTimer = null;
        let isLongClick = false;
        
        image.addEventListener('mouseenter', function() {
            this.setAttribute('material', 'shader: flat; transparent: true; opacity: 0.9');
            document.body.style.cursor = 'pointer';
        });
        
        image.addEventListener('mouseleave', function() {
            this.setAttribute('material', 'shader: flat; transparent: false; opacity: 1');
            document.body.style.cursor = 'default';
        });
        
        // Mouse down - start timer
        image.addEventListener('mousedown', function() {
            isLongClick = false;
            clickTimer = setTimeout(() => {
                isLongClick = true;
                console.log(`Long click detected! Navigating to: ${redirectUrls[index]}`);
                showLoadingTransition();
                setTimeout(() => {
                    window.location.href = redirectUrls[index];
                }, 800);
            }, 500); // 500ms hold time
        });
        
        // Mouse up - cancel timer if not long enough
        image.addEventListener('mouseup', function() {
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
            }
        });
        
        // Mouse leave - cancel timer
        image.addEventListener('mouseleave', function() {
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
            }
        });
    });

    function showLoadingTransition() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        overlay.innerHTML = `
            <div style="text-align: center;">
                <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <div>Loading Gallery...</div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 100);
    }

    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case '1':
                window.location.href = redirectUrls[0];
                break;
            case '2':
                window.location.href = redirectUrls[1];
                break;
            case '3':
                window.location.href = redirectUrls[2];
                break;
            case '4':
                window.location.href = redirectUrls[3];
                break;
        }
    });
});