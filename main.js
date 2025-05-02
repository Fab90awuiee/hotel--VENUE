document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Загрузка номеров
    const roomsGrid = document.querySelector('.rooms-grid');
    const rooms = [
        {
            image: 'img/5233370436056771811.jpg',
            title: 'Номер «Standart»',
            features: ['3 человека', '25 кв.м²',],
            description: 'Спальные места двуспальная кровать, количество комнат 1',
            price: 'от 3 500 ₽/ночь'
        },
        {
            image: 'img/5235939453565004701.jpg',
            title: '',
            features: ['2 человека', '27-34 кв.м²'],
            description: 'Спальные места двуспальная кровать + 1-2 доп места для детей,количество комнат 1',
            price: 'от 4 000 ₽/ночь'
        },
        {
            image: 'img/5235939453565004702.jpg',
            title: 'Номер «Suite (люкс)»',
            features: ['2 человека', '42 кв.м²',],
            description: 'Спальные места двуспальная кровать, количество комнат 2',
            price: 'от 5000 ₽/ночь'
        }
    ];

    rooms.forEach(room => {
        const featuresHTML = room.features.map(feature => 
            `<span class="feature">${feature}</span>`
        ).join('');

        roomsGrid.innerHTML += `
            <div class="room-card fade-in">
                <div class="room-image">
                    <img src="${room.image}" alt="${room.title}">
                </div>
                <div class="room-info">
                    <h3>${room.title}</h3>
                    <div class="room-features">
                        ${featuresHTML}
                    </div>
                    <p>${room.description}</p>
                    <div class="room-price">${room.price}</div>
                    <a href="#" class="btn">Забронировать</a>
                </div>
            </div>
        `;
    });

    // Загрузка услуг
    const servicesGrid = document.querySelector('.services-grid');
    const services = [
        {
            icon: 'каф',
            title: 'Сезонное кафе',
            description: 'Ресторан создан для тех, кто любит комфортный и умиротворенный отдых.'
        },
        {
            icon: 'врач',
            title: 'Вызав врача на RECEPTION',
            description: 'Вызов врача на reception. Пусть эта услуга вам не понадобится, но знайте, что специалисты помогут даже в экстренных ситуациях..'
        },
        {
            icon: 'виды',
            title: 'Номера с видом на море и реликтовый парк',
            description: 'У нас есть номера с прекрасными видами на море и парк.'
        },
        {
            icon: 'бас',
            title: 'Обслуживание номеров',
            description: ' В вашем номере всегда будет чисто и уютно. .'
        },
        {
            icon: 'fas fa-child',
            title: 'Детский клуб',
            description: 'Развлекательные программы и анимация для детей всех возрастов.'
        },
        {
            icon: 'fas fa-concierge-bell',
            title: 'Экскурсии',
            description: 'Организация экскурсий по достопримечательностям Крыма.'
        }
    ];

    services.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="service-card fade-in">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
    });

    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedbackForm');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь должна быть логика отправки формы
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        feedbackForm.reset();
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});