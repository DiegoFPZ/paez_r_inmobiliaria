// Datos de las propiedades con soporte para videos
const properties = {
    1: {
        ref: "0231",
        title: "Apartamento en Reserva del Seminario",
        description: "3 habitaciones, 2 baños, 95m², jardín amplio",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/apto-reserva-del-seminario/apto-reserva-del-seminario-main.jpg",
                alt: "Sala - Comedor con vista panorámica"
            },
            {
                type: "image", 
                url: "assets/images/propiedades/apto-reserva-del-seminario/apto-reserva-del-seminario-alcoba1.jpg",
                alt: "Habitación principal"
            },
            {
                type: "image",
                url: "assets/images/propiedades/apto-reserva-del-seminario/apto-reserva-del-seminario-alcoba2.jpg",
                alt: "Habitación secundaria"
            },
            {
                type: "video",
                url: "assets/videos/propiedades/apto-reserva-del-seminario/tour-virtual.mp4",
                poster: "assets/images/propiedades/apto-reserva-del-seminario/apto-reserva-del-seminario-main.jpg",
                alt: "Recorrido virtual por la propiedad",
                orientation: "vertical"
            }
        ]
    },
    
    2: {
        ref: "0232",
        title: "Apartamento en Laureles, Nogal",
        description: "4 habitaciones, 3 baños, 200m²",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/apto-laureles-nogal/apto-laureles-nogal-main.jpg",
                alt: "Vista exterior del apartamento"
            },
            {
                type: "image",
                url: "assets/images/propiedades/apto-laureles-nogal/apto-laureles-nogal-cocina.jpg",
                alt: "Cocina moderna"
            }
        ]
    },

    3: {
        ref: "0233",
        title: "Casa en Prado Centro",
        description: "5 habitaciones, 3 baños, 367m², Garaje",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/casa-prado-centro/casa-prado-centro-main.jpg",
                alt: "Vista exterior de la casa"
            },
            {
                type: "image",
                url: "assets/images/propiedades/casa-prado-centro/casa-prado-centro-patio.jpg",
                alt: "Patio interior"
            },
            {
                type: "image",
                url: "assets/images/propiedades/casa-prado-centro/casa-prado-centro-interior.jpg",
                alt: "Interior de la casa"
            }
        ]
    },

    4: {
        ref: "0234",
        title: "Lote en Santa Elena",
        description: "Excelente ubicación: Vereda el Porvenir, Barro Blanco",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/lote-santa-elena/lote-santa-elena-main.jpg",
                alt: "Vista exterior del lote"
            
            },
            {
                type: "image",
                url: "assets/images/propiedades/lote-santa-elena/lote-santa-elena-ladera.jpg",
                alt: "Vista de la ladera"
            },
            {
                type: "image",
                url: "assets/images/propiedades/lote-santa-elena/lote-santa-elena-terreno.jpg",
                alt: "Vista del terreno"
            },
        ]
    },  

    5: {
        ref: "0234",
        title: "Casa en San Antonio de Prado",
        description: "Sector el limonar, 2do piso",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/casa-san-antonio-de-prado/casa-san-antonio-de-prado-main.jpg",
                alt: "Entrada principal de la casa"
            },
            {
                type: "image",
                url: "assets/images/propiedades/casa-san-antonio-de-prado/casa-san-antonio-de-prado-cocina.jpg",
                alt: "Cocina"
            },
            {
                type: "image",
                url: "assets/images/propiedades/casa-san-antonio-de-prado/casa-san-antonio-de-prado-banio.jpg",
                alt: "Baño"
            }
        ]
    },

    6: {
        ref: "0235",
        title: "Apartamento en Terrazas del Sol, Sopetrán",
        description: "2 habitaciones, 1 baño, 60m², condominio con piscinas y cancha de fútbol",
        media: [
            {
                type: "image",
                url: "assets/images/propiedades/apartamento-terrazas-del-sol/apartamento-terrazas-del-sol-main.jpg",
                alt: "Vista a las piscinas del condominio"
            },
            {
                type: "image",
                url: "assets/images/propiedades/apartamento-terrazas-del-sol/apartamento-terrazas-del-sol-sala.jpg",
                alt: "Sala - Comedor"
            },
            {
                type: "image",
                url: "assets/images/propiedades/apartamento-terrazas-del-sol/apartamento-terrazas-del-sol-habitacion.jpg",
                alt: "Habitación principal"
            },
            {
                type: "image",
                url: "assets/images/propiedades/apartamento-terrazas-del-sol/apartamento-terrazas-del-sol-cocina.jpg",
                alt: "Cocina Integral"
            },
        ]
    },



    // Más propiedades...
};

// El resto de tu código JavaScript permanece igual...
// Configurar la galería cuando se abre el modal
const galleryModal = document.getElementById('galleryModal');
if (galleryModal) {
    galleryModal.addEventListener('show.bs.modal', function (event) {
        const clickedElement = event.relatedTarget;
        const propertyId = clickedElement.getAttribute('data-property-id');
        const property = properties[propertyId];
        
        // Actualizar el título del modal
        document.getElementById('propertyTitle').textContent = property.title;
        document.getElementById('propertyDescription').textContent = property.description;

        // Mostrar el código de referencia
        document.getElementById('propertyRef').textContent = property.ref || '';

        // Actualizar el botón de WhatsApp
        const whatsappBtn = document.getElementById('whatsappBtn');
        const phone = '573005720011';
        const msg = encodeURIComponent(`Hola, me interesa la propiedad código ${property.ref || ''}: ${property.title}`);
        whatsappBtn.href = `https://wa.me/${phone}?text=${msg}`;
        
        // Construir el carrusel de medios
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.innerHTML = '';
        
        property.media.forEach((media, index) => {
            const item = document.createElement('div');
            item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            if (media.type === "image") {
                item.innerHTML = `
                    <img src="${media.url}" class="d-block w-100" alt="${media.alt}" style="height: 500px; object-fit: cover;">
                `;
            } else if (media.type === "video") {
                // Diseño especial para videos verticales
                const videoClass = media.orientation === "vertical" ? "vertical-video" : "";
                const containerClass = media.orientation === "vertical" ? "vertical-video-container" : "video-container";
                
                item.innerHTML = `
                    <div class="${containerClass}">
                        <div class="${videoClass}">
                            <video class="d-block h-100" controls poster="${media.poster}" style="max-width: 100%;">
                                <source src="${media.url}" type="video/mp4">
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                `;
            }
            
            carouselInner.appendChild(item);
        });
        
        // Inicializar el carrusel con Bootstrap pero desactivando el intervalo
        initBootstrapCarouselWithoutInterval();
    });
}

// Función para inicializar el carrusel de Bootstrap pero sin intervalo automático
function initBootstrapCarouselWithoutInterval() {
    const carouselElement = document.getElementById('propertyCarousel');
    if (!carouselElement) return;
    
    // Primero, eliminar cualquier instancia existente
    const existingCarousel = bootstrap.Carousel.getInstance(carouselElement);
    if (existingCarousel) {
        existingCarousel.dispose();
    }
    
    // Inicializar el carrusel con intervalo 0 (desactivado)
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: false, // Desactiva completamente el avance automático
        wrap: true
    });
    
    // Asegurarnos de que no hay intervalos activos
    if (carousel._interval) {
        clearInterval(carousel._interval);
        carousel._interval = null;
    }
    
    // Sobrescribir el método cycle para prevenir cualquier intento de iniciar intervalo
    carousel.cycle = function() {
        // No hacer nada - prevenir completamente el ciclo automático
    };
    
    // Para mayor seguridad, limpiar cualquier intervalo existente en el elemento
    if (carouselElement._interval) {
        clearInterval(carouselElement._interval);
        carouselElement._interval = null;
    }
}

// CSS para mejorar la transición y apariencia (versión mejorada)
const style = document.createElement('style');
style.textContent = `
    /* Transición suave para el carrusel */
    .carousel-item {
        transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    }
    
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
        transform: translateX(0);
    }
    
    @supports (transform-style: preserve-3d) {
        .carousel-item-next.carousel-item-left,
        .carousel-item-prev.carousel-item-right {
            transform: translate3d(0, 0, 0);
        }
    }
    
    .carousel-item-next,
    .active.carousel-item-right {
        transform: translateX(100%);
    }
    
    @supports (transform-style: preserve-3d) {
        .carousel-item-next,
        .active.carousel-item-right {
            transform: translate3d(100%, 0, 0);
        }
    }
    
    .carousel-item-prev,
    .active.carousel-item-left {
        transform: translateX(-100%);
    }
    
    @supports (transform-style: preserve-3d) {
        .carousel-item-prev,
        .active.carousel-item-left {
            transform: translate3d(-100%, 0, 0);
        }
    }
    
    /* Contenedores de video */
    .video-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        background-color: #000;
        width: 100%;
    }
    
    .vertical-video-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        background-color: #000;
        width: 100%;
    }
    
    /* Video vertical - centrado perfectamente */
    .vertical-video {
        max-width: 300px;
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    
    .vertical-video video {
        width: auto;
        height: 100%;
        object-fit: contain;
        max-width: 100%;
    }
    
    /* Estilos para los controles del carrusel */
    .carousel-control-prev, 
    .carousel-control-next {
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.7;
        transition: opacity 0.3s;
        z-index: 10;
    }
    
    .carousel-control-prev:hover, 
    .carousel-control-next:hover {
        opacity: 0.9;
    }
    
    .carousel-control-prev {
        left: 15px;
    }
    
    .carousel-control-next {
        right: 15px;
    }
    
    /* Asegurar que los videos se vean bien en móviles */
    @media (max-width: 768px) {
        .video-container,
        .vertical-video-container {
            height: 400px;
        }
        
        .vertical-video {
            max-width: 250px;
        }
        
        .carousel-control-prev, 
        .carousel-control-next {
            width: 40px;
            height: 40px;
        }
    }
    
    /* Para pantallas grandes (≥1200px) */
    @media (min-width: 1200px) {
        .vertical-video-container {
            height: 550px;
        }
        
        .vertical-video {
            max-width: 350px;
        }
    }
`;
document.head.appendChild(style);

// Desactivar clic derecho en imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Las imágenes están protegidas por derechos de autor de Páez R Inmobiliaria.');
        });
    });

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Los videos están protegidos por derechos de autor de Páez R Inmobiliaria.');
        });
    });
});

// Protección adicional contra arrastre
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

// Auto-open modal based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const modalPropertyId = urlParams.get('modal');
    
    if (modalPropertyId) {
        // Find the property container with matching data-property-id
        const propertyContainer = document.querySelector(`[data-property-id="${modalPropertyId}"]`);
        if (propertyContainer) {
            // Trigger click to open the modal
            propertyContainer.click();
        }
    }
});