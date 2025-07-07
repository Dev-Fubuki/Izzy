document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const videoContainer = document.getElementById('videoContainer');
    const closeVideo = document.getElementById('closeVideo');
    const messageOverlay = document.getElementById('messageOverlay');
    const closeMessage = document.getElementById('closeMessage');
    const heartsContainer = document.getElementById('hearts');
    const poemBtn = document.getElementById('poemBtn');
    const poemModal = document.getElementById('poemModal');
    const closePoem = document.getElementById('closePoem');
    const yaaburnee = document.getElementById('yaaburnee');
    const yaaburneeModal = document.getElementById('yaaburneeModal');
    const closeYaaburnee = document.getElementById('closeYaaburnee');
    
    function createHearts() {
        const heartCount = 30;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.classList.add('heart');
            
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            
            const size = Math.random() * 20 + 10;
            heart.style.fontSize = size + 'px';
            
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.animationDuration = Math.random() * 3 + 4 + 's';
            
            heartsContainer.appendChild(heart);
        }
    }
    
    createHearts();
    
    noBtn.addEventListener('mouseover', function() {
        const container = this.parentElement;
        const containerRect = container.getBoundingClientRect();
        const btnRect = this.getBoundingClientRect();
        
        let newX, newY;
        let overlapping = true;
        let attempts = 0;
        
        while (overlapping && attempts < 20) {
            newX = Math.random() * (containerRect.width - btnRect.width);
            newY = Math.random() * (containerRect.height - btnRect.height);
            
            const yesBtnRect = yesBtn.getBoundingClientRect();
            const newBtnRect = {
                left: containerRect.left + newX,
                top: containerRect.top + newY,
                right: containerRect.left + newX + btnRect.width,
                bottom: containerRect.top + newY + btnRect.height
            };
            
            overlapping = (
                newBtnRect.left < yesBtnRect.right &&
                newBtnRect.right > yesBtnRect.left &&
                newBtnRect.top < yesBtnRect.bottom &&
                newBtnRect.bottom > yesBtnRect.top
            );
            
            attempts++;
        }
        
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
        
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');
        heart.style.left = (btnRect.left + btnRect.width/2) + 'px';
        heart.style.top = (btnRect.top + btnRect.height/2) + 'px';
        heart.style.fontSize = '20px';
        heart.style.animationDuration = '3s';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    });
    
    yesBtn.addEventListener('click', function() {
        videoContainer.classList.add('active');
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 7000);
            }, i * 200);
        }
    });
    
    closeVideo.addEventListener('click', function() {
        videoContainer.classList.remove('active');
        document.getElementById('videoPlayer').src += '&autoplay=0';
        
        setTimeout(() => {
            messageOverlay.classList.add('active');
        }, 500);
    });
    
    closeMessage.addEventListener('click', function() {
        messageOverlay.classList.remove('active');
    });
    
    poemBtn.addEventListener('click', function() {
        poemModal.classList.add('active');
    });
    
    closePoem.addEventListener('click', function() {
        poemModal.classList.remove('active');
    });
    
    yaaburnee.addEventListener('click', function() {
        yaaburneeModal.classList.add('active');
    });
    
    closeYaaburnee.addEventListener('click', function() {
        yaaburneeModal.classList.remove('active');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === poemModal) {
            poemModal.classList.remove('active');
        }
        if (event.target === yaaburneeModal) {
            yaaburneeModal.classList.remove('active');
        }
    });
});