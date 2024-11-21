

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Modal functionality
    var modal = document.getElementById("barco-modal");
    var barcoCard = document.getElementById("barco-card");
	const openBarcoModal = document.querySelector('.open-barco-modal');  // Trigger for opening the modal
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when the Barco card is clicked
    barcoCard.onclick = function() {
        modal.style.display = "block";
    }

	// Open the Barco modal when the link is clicked
	openBarcoModal.addEventListener('click', function() {
		modal.style.display = "block";
	});

    // Close the modal when the <span> (x) is clicked
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

	// Machine Learning Specialist Modal functionality
	const openModal = document.querySelector('.open-modal');  // Trigger for opening the modal
	var mlCard = document.getElementById("ml-card");
	const mlModal = document.querySelector('#ml-specialist-modal');  // The modal itself
	const closeModal = mlModal.querySelector('.close');  // The close button inside the modal

	// // Open the ML modal when the ML card is clicked
    // mlCard.onclick = function() {
    //     mlModal.style.display = 'block';
    // }
	
	// Open the ML modal when the link is clicked
	openModal.addEventListener('click', function() {
		mlModal.style.display = 'block';
	});

	// Close the ML modal when the close button is clicked
	closeModal.addEventListener('click', function() {
		mlModal.style.display = 'none';
	});

	// Close the ML modal when clicking anywhere outside of the modal
	window.addEventListener('click', function(event) {
		if (event.target === mlModal) {
			mlModal.style.display = 'none';
		}
	});

	// Modal navigation for Machine Learning Specialist images
	let currentStep = 1;
	const steps = document.querySelectorAll('.step');  // Steps in the modal
	const prevBtn = document.querySelector('#prev-btn');  // Previous button
	const nextBtn = document.querySelector('#next-btn');  // Next button

	// Function to show the current step
	function showStep(step) {
		steps.forEach((s, index) => {
			s.classList.remove('active');  // Hide all steps
			if (index === step - 1) {
				s.classList.add('active');  // Show the active step
			}
		});
	}

	// Show the first step initially
	showStep(currentStep);

	// Move to the next step when Next button is clicked
	nextBtn.addEventListener('click', function() {
		if (currentStep < steps.length) {
			currentStep++;
			showStep(currentStep);
		}
	});

	// Move to the previous step when Previous button is clicked
	prevBtn.addEventListener('click', function() {
		if (currentStep > 1) {
			currentStep--;
			showStep(currentStep);
		}
	});


	// Armentekart Modal functionality
    var armenModal = document.getElementById("armen-modal");
    var armenCard = document.getElementById("armen-card");
	const openArmenModal = document.querySelector('.open-armen-modal');  // Trigger for opening the modal
	const closeArmenModal = armenModal.querySelector('.close');  // The close button inside the modal

    // Open the modal when the Armen card is clicked
    armenCard.onclick = function() {
        armenModal.style.display = "block";
    }

	// Open the Armen modal when the link is clicked
	openArmenModal.addEventListener('click', function() {
		armenModal.style.display = "block";
	});


	// Close the Armen modal when the close button is clicked
	closeArmenModal.addEventListener('click', function() {
		armenModal.style.display = 'none';
	});

	// Close the Armen modal when clicking anywhere outside of the modal
	window.addEventListener('click', function(event) {
		if (event.target === armenModal) {
			armenModal.style.display = 'none';
		}
	});




	// Modal functionality for Education cards
	document.addEventListener('DOMContentLoaded', function() {
		const modal = document.getElementById('education-modal');
		const modalContent = document.getElementById('modal-body');
		const closeBtn = document.querySelector('.close-btn');
	
		document.querySelectorAll('.load-more-btn').forEach(button => {
			button.addEventListener('click', function() {
				const card = this.closest('.education-card'); // Find the parent card of the button
				const cardClone = card.cloneNode(true); // Clone the entire card to include hidden content
	
				// Make sure to display the hidden load-more-content in the modal
				const hiddenContent = cardClone.querySelector('.load-more-content');
				if (hiddenContent) {
					hiddenContent.style.maxHeight = 'none'; // Remove max-height to ensure full height
					hiddenContent.style.opacity = '1'; // Make sure opacity is fully visible
					hiddenContent.style.display = 'block'; // Set display to block to override any hiding
				}
	
				// Remove the Load More button from the modal content
				const loadMoreButton = cardClone.querySelector('.load-more-btn');
				if (loadMoreButton) {
					loadMoreButton.remove();
				}
	
				// Set the content of the modal to the cloned card's content
				modalContent.innerHTML = ''; // Clear any previous content
				// modalContent.appendChild(cardClone); // Append the cloned card with updated content
				modalContent.innerHTML = cardClone.innerHTML;
				
	
				// Display the modal
				modal.style.display = 'flex';
			});
		});
	
		// Close the modal when the close button is clicked
		closeBtn.addEventListener('click', function() {
			modal.style.display = 'none';
		});
	
		// Close the modal when clicking outside of the modal content
		window.addEventListener('click', function(event) {
			if (event.target == modal) {
				modal.style.display = 'none';
			}
		});
	});


	// // Mobile navigation for nav bar
	// document.addEventListener('DOMContentLoaded', function() {
	// 	var menuIcon = document.getElementById('menu-icon');
	// 	var menu = document.getElementById('menu');
	
	// 	menuIcon.addEventListener('click', function() {
	// 		menu.classList.toggle('show');
	// 	});
	// });

	// Mobile navigation for nav bar
	document.addEventListener('DOMContentLoaded', function() {
		const menuIcon = document.getElementById('menu-icon');
		const menu = document.getElementById('menu');
		const navLinks = menu.querySelectorAll('a');
	
		menuIcon.addEventListener('click', function() {
			menu.classList.toggle('show');
		});
	
		navLinks.forEach(link => {
			link.addEventListener('click', function() {
				if (menu.classList.contains('show')) {
					menu.classList.remove('show');
				}
			});
		});
	});

	// View Projects button
	// Scroll to top button
	document.addEventListener('DOMContentLoaded', function() {
		const viewProjectsBtn = document.querySelector('.view-projects-btn');
		const projectsDiv = document.querySelector('.projects');
		const upBtn = document.querySelector('.up-btn');
		const mlCard = document.getElementById('ml-card');
	
		viewProjectsBtn.addEventListener('click', function() {
			if (projectsDiv.style.display === 'none' || projectsDiv.style.display === '') {
				projectsDiv.style.display = 'block';
				viewProjectsBtn.textContent = 'Hide Projects';
			} else {
				projectsDiv.style.display = 'none';
				viewProjectsBtn.textContent = 'View Projects';
			}
		});
	
		upBtn.addEventListener('click', function() {
			mlCard.scrollIntoView({ behavior: 'smooth' });
		});
	});
	
})(jQuery);