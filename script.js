
/**
 * This function shows/hides the mobile navigation menu
 * when the hamburger icon is clicked
 */
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// TABS FUNCTIONALITY
/**
 * Show the specified tab
 * 
 * @param {string} tabId - The ID of the tab to show (e.g., 'new-arrivals')
 */
function showTab(tabId) {
         // Get all tab panels and buttons
         const tabPanels = document.querySelectorAll('.tab-panel');
         const tabButtons = document.querySelectorAll('.tab-button');

         // Hide all tab panels
         tabPanels.forEach(panel => {
             panel.classList.remove('active');
         });

         // Remove active class from all buttons
         tabButtons.forEach(button => {
             button.classList.remove('active');
         });

         // Show the selected tab panel
         const selectedPanel = document.getElementById(tabId);
         if (selectedPanel) {
             selectedPanel.classList.add('active');
         }

         // Add active class to the clicked button
         const selectedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
         if (selectedButton) {
             selectedButton.classList.add('active');
         }
     }

// CART FUNCTIONALITY
/**
 * Cart data structure
 * In a real application, this would be stored in a database
 * For this demo, we're using a simple JavaScript array
 */
let cart = [
    {
        id: 1,
        name: "ZEUS AURA Women's Sneaker",
        price: 1499,
        quantity: 1,
        image: "Images/Sneaker 2.jpg"
    },
    {
        id: 2,
        name: "ZEUS TITAN Men's Sneaker",
        price: 1799,
        quantity: 2,
        image: "Images/Sneaker 4.jpg"
    }
];

/**
 * Update the quantity of an item in the cart
 * 
 * @param {number} itemId - The ID of the item to update
 * @param {number} change - The amount to change (+1 or -1)
 */
function updateQuantity(itemId, change) {
    // Find the item in the cart
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        // Update the quantity
        item.quantity += change;
        
        // Don't let quantity go below 1
        if (item.quantity < 1) {
            item.quantity = 1;
        }
        
        // Re-render the cart
        renderCart();
    }
}

/**
 * Remove an item from the cart
 * 
 * @param {number} itemId - The ID of the item to remove
 */
function removeFromCart(itemId) {
    // Filter out the item with the matching ID
    cart = cart.filter(item => item.id !== itemId);
    
    // Re-render the cart
    renderCart();
}

/**
 * Calculate the total price of all items in the cart
 * 
 * @returns {number} The total price
 */
function calculateTotal() {
    let total = 0;
    
    // Loop through each item and add (price * quantity) to total
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    return total;
}

/**
 * Render the cart items and summary
 * This function updates the HTML to show the current cart state
 */
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    // If we're not on the cart page, exit
    if (!cartItemsContainer) return;
    
    // Clear the current cart display
    cartItemsContainer.innerHTML = '';
    
    // If cart is empty, show a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        if (subtotalElement) subtotalElement.textContent = 'R0';
        if (totalElement) totalElement.textContent = 'R0';
        return;
    }
    
    // Loop through cart items and create HTML for each
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">R${item.price.toLocaleString()}</p>
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        
        cartItemsContainer.innerHTML += cartItemHTML;
    });
    
    // Calculate and display totals
    const subtotal = calculateTotal();
    const shipping = 150; // Fixed shipping cost
    const total = subtotal + shipping;
    
    if (subtotalElement) subtotalElement.textContent = `R${subtotal.toLocaleString()}`;
    if (totalElement) totalElement.textContent = `R${total.toLocaleString()}`;
}

/**
 * Handle checkout button click
 */
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! This is a demo, so no actual payment will be processed.');
    
    // Clear the cart
    cart = [];
    renderCart();
}

// FORM VALIDATION

/**
 * Validate the contact form before submission
 * 
 * @param {Event} event - The form submit event
 */
function validateContactForm(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // If validation passes, show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset the form
    document.getElementById('contact-form').reset();
    
    return false;
}

// PRODUCT ACCORDION TOGGLE
/**
 * Toggle product details accordion on products page

 * 
 * @param {string} productId - The ID of the product details div to toggle
 */
function toggleProductAccordion(productId) {
    // Get the product details div by its ID
    const productDetails = document.getElementById(productId);
    
    // If the element exists, toggle its display
    if (productDetails) {
        // Check current display state
        if (productDetails.style.display === 'none' || productDetails.style.display === '') {
            // If hidden, show it
            productDetails.style.display = 'block';
        } else {
            // If shown, hide it
            productDetails.style.display = 'none';
        }
    }
}
function highlightActivePage() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Loop through each link
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // If the href matches the current page, add 'active' class
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Global variable to track current image index in lightbox
let currentLightboxIndex = 0;
let lightboxImages = []; // Array to store all clickable images

/**
 * Initialize the lightbox
 * This function creates the lightbox HTML structure and adds it to the page
 */
function initializeLightbox() {
    // Check if lightbox already exists
    if (document.getElementById('lightbox')) return;
    
    // Create lightbox HTML structure
    const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <!-- Close button (X) -->
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            
            <!-- Previous image arrow -->
            <span class="lightbox-prev" onclick="changeLightboxImage(-1)">&#10094;</span>
            
            <!-- The actual image -->
            <img class="lightbox-content" id="lightbox-img" src="" alt="">
            
            <!-- Next image arrow -->
            <span class="lightbox-next" onclick="changeLightboxImage(1)">&#10095;</span>
            
            <!-- Caption text -->
            <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
    `;
    
    // Add lightbox to the page
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Add event listener to close lightbox when clicking outside the image
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', function(e) {
        // Only close if user clicked on the dark background (not the image)
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Add keyboard navigation (Escape to close, arrow keys to navigate)
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeLightboxImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeLightboxImage(1);
            }
        }
    });
}

function setupProductImageLightbox() {
    // Find all product card images
    const productImages = document.querySelectorAll('.product-card img, .hero img, .full-width-image');
    
    // Convert NodeList to Array and store globally
    lightboxImages = Array.from(productImages);
    
    // Add click event to each image
    productImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(index);
        });
        
        // Add title attribute for accessibility
        if (!img.hasAttribute('title')) {
            img.setAttribute('title', 'Click to view larger image');
        }
    });
}

/**
 * Open the lightbox and display the clicked image
 * 
 * @param {number} index - The index of the image in the lightboxImages array
 */
function openLightbox(index) {
    // Get lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    // Update current index
    currentLightboxIndex = index;
    
    // Get the clicked image
    const clickedImage = lightboxImages[index];
    
    // Set the lightbox image source and alt text
    lightboxImg.src = clickedImage.src;
    lightboxImg.alt = clickedImage.alt;
    
    // Set caption text (use alt text or a default message)
    caption.textContent = clickedImage.alt || 'Product Image';
    
    // Show the lightbox by adding 'active' class
    lightbox.classList.add('active');
    
    // Prevent body from scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close the lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Hide the lightbox by removing 'active' class
    lightbox.classList.remove('active');
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
}

/**
 * Navigate to next or previous image in lightbox
 * 
 * @param {number} direction - 1 for next image, -1 for previous image
 */
function changeLightboxImage(direction) {
    // Calculate new index
    currentLightboxIndex += direction;
    
    // Wrap around if we go past the first or last image
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = lightboxImages.length - 1; // Go to last image
    } else if (currentLightboxIndex >= lightboxImages.length) {
        currentLightboxIndex = 0; // Go to first image
    }
    
    // Display the new image
    openLightbox(currentLightboxIndex);
}

// SEARCH AND FILTER FUNCTIONALITY

/**
 * Filter products based on search input and sort option
 */
function filterProducts() {
    // Get search input value
    const searchInput = document.getElementById('product-search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Get sort option
    const sortSelect = document.getElementById('product-sort');
    const sortOption = sortSelect ? sortSelect.value : 'default';
    
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    // Convert NodeList to Array for sorting
    let productsArray = Array.from(productCards);
    
    // First, filter products based on search term
    let visibleCount = 0;
    productsArray.forEach(card => {
        // Get product name and price from the card
        const productName = card.querySelector('h4') ? card.querySelector('h4').textContent.toLowerCase() : '';
        const productPrice = card.querySelector('.product-price') ? card.querySelector('.product-price').textContent : '';
        
        // Check if search term matches name or price
        const matchesSearch = productName.includes(searchTerm) || productPrice.includes(searchTerm);
        
        // Show or hide the product card
        if (matchesSearch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Sort visible products
    if (sortOption !== 'default') {
        const productGrid = document.querySelector('.product-grid');
        
        // Sort the array based on selected option
        productsArray.sort((a, b) => {
            const priceA = parsePrice(a.querySelector('.product-price'));
            const priceB = parsePrice(b.querySelector('.product-price'));
            const nameA = a.querySelector('h4') ? a.querySelector('h4').textContent : '';
            const nameB = b.querySelector('h4') ? b.querySelector('h4').textContent : '';
            
            switch(sortOption) {
                case 'price-low':
                    return priceA - priceB; // Low to high
                case 'price-high':
                    return priceB - priceA; // High to low
                case 'name-az':
                    return nameA.localeCompare(nameB); // A to Z
                case 'name-za':
                    return nameB.localeCompare(nameA); // Z to A
                default:
                    return 0;
            }
        });
        
        // Re-append products in sorted order
        productsArray.forEach(card => {
            productGrid.appendChild(card);
        });
    }
    
    // Show "no results" message if no products match
    showNoResultsMessage(visibleCount);
}

/**
 * Parse price from product card
 * Extracts the numeric value from price text like "R1,499"
 * 
 * @param {HTMLElement} priceElement - The element containing the price
 * @returns {number} The numeric price value
 */
function parsePrice(priceElement) {
    if (!priceElement) return 0;
    
    // Get price text and remove non-numeric characters except decimal point
    const priceText = priceElement.textContent.replace(/[^0-9.]/g, '');
    return parseFloat(priceText) || 0;
}

/**
 * Show or hide "no results" message
 * 
 * @param {number} visibleCount - Number of visible products
 */
function showNoResultsMessage(visibleCount) {
    // Check if message already exists
    let noResultsMsg = document.getElementById('no-results-message');
    
    if (visibleCount === 0) {
        // Create message if it doesn't exist
        if (!noResultsMsg) {
            const productGrid = document.querySelector('.product-grid');
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'no-results-message';
            noResultsMsg.className = 'no-results';
            noResultsMsg.innerHTML = `
                <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">😕 No products found</p>
                <p>Try adjusting your search or filter criteria</p>
            `;
            productGrid.parentNode.insertBefore(noResultsMsg, productGrid.nextSibling);
        }
        noResultsMsg.style.display = 'block';
    } else {
        // Hide message if products are visible
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
}

/**
 * Reset search and filters
 */
function resetFilters() {
    // Clear search input
    const searchInput = document.getElementById('product-search');
    if (searchInput) searchInput.value = '';
    
    // Reset sort to default
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) sortSelect.value = 'default';
    
    // Show all products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Hide no results message
    const noResultsMsg = document.getElementById('no-results-message');
    if (noResultsMsg) noResultsMsg.style.display = 'none';
}


// ENQUIRY FORM VALIDATION


/**
 * @returns {boolean} true if form is valid, false otherwise
 */
function validateEnquiryForm() {
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('name').value.trim();
    const enquiryType = document.getElementById('enquiry-type').value;
    const message = document.getElementById('message').value.trim();
    const contactMethod = document.getElementById('contact-method').value;
    
    // Validate name (at least 2 characters)
    if (name.length < 2) {
        alert('Please enter your full name (at least 2 characters).');
        return false;
    }
    
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Validate enquiry type is selected
    if (!enquiryType) {
        alert('Please select an enquiry type.');
        return false;
    }
    
    // Validate message (at least 10 characters)
    if (message.length < 10) {
        alert('Please provide more details about your enquiry (at least 10 characters).');
        return false;
    }
    
    // Validate contact method is selected
    if (!contactMethod) {
        alert('Please select your preferred contact method.');
        return false;
    }
    
    // If all validations pass, show success message
    alert('Thank you for your enquiry! We will respond within 24-48 hours via your preferred contact method.');
    
    // In a real application, the form data would be sent to a server here
    // For this demo, we'll just reset the form
    document.getElementById('enquiry-form').reset();
    
    // Return false to prevent actual form submission (since we don't have a backend)
    return false;
}

// INITIALIZE ON PAGE LOAD  

/**
 * This code runs when the page finishes loading
 * It sets up the initial state of the page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Highlight the active page in navigation
    highlightActivePage();
    
    // If we're on the cart page, render the cart
    if (document.getElementById('cart-items')) {
        renderCart();
    }
    
    // If we're on the home page, show the first tab by default
    if (document.getElementById('new-arrivals')) {
        showTab('new-arrivals');
    }
    
    // Initialize lightbox for image gallery functionality
    initializeLightbox();
    
    // Setup product images to open in lightbox when clicked
    setupProductImageLightbox();
    
    // Setup search and filter functionality (if on products page)
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        // Add event listener for real-time search as user types
        searchInput.addEventListener('input', filterProducts);
    }
    
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) {
        // Add event listener for sort option changes
        sortSelect.addEventListener('change', filterProducts);
    }
    
    console.log('Zeus Sneakers website loaded successfully!');
});
