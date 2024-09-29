

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
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when the Barco card is clicked
    barcoCard.onclick = function() {
        modal.style.display = "block";
    }

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
	const mlModal = document.querySelector('#ml-specialist-modal');  // The modal itself
	const closeModal = mlModal.querySelector('.close');  // The close button inside the modal

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


})(jQuery);