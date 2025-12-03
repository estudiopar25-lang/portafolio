  // === ACCORDION SCRIPT ===
        function toggleAccordion(header) {
            const wasActive = header.classList.contains('active');
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if (!wasActive) {
                header.classList.add('active');
                header.nextElementSibling.classList.add('active');
            }
        }