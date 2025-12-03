 let currentSlide = 0;
        const items = document.querySelectorAll('.carousel-item');
        const indicatorsContainer = document.getElementById('indicators');

        // Crear indicadores dinámicamente
        items.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(index);
            indicatorsContainer.appendChild(indicator);
        });

        const indicators = document.querySelectorAll('.indicator');

        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.remove('active');
                indicators[index].classList.remove('active');
            });
            items[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }

        function moveCarousel(direction) {
            currentSlide = (currentSlide + direction + items.length) % items.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-play cada 5 segundos
        setInterval(() => moveCarousel(1), 5000);