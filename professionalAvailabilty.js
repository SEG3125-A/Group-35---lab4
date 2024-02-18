$(function() {
    var professionalAvailability = {
        "EmilyWatson": [2, 3, 4], // Available on Tuesday, Wednesday, Thursday
        "MichaelJohnson": [2, 3], // Available on Tuesday, Wednesday
        "AlexRodriguez": [3, 4], // Available on Wednesday, Thursday
    };

    $("#professional").change(function() {
        var selectedProfessional = $(this).val();
        var availableDays = professionalAvailability[selectedProfessional];

        $("#datepicker").datepicker("destroy").datepicker({
            beforeShowDay: function(date) {
                var day = date.getDay();
                if (availableDays && availableDays.length > 0) {
                    return [availableDays.includes(day)];
                } else {
                    return [true]; // Default to all days enabled
                }
            },
            onSelect: function() {
                $(this).trigger('change'); // Trigger change event to handle form validation
            }
        });
    });

    // Initialize DatePicker
    $("#datepicker").datepicker();

    // Form submission handler to check validation
    $('form').on('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated'); // Bootstrap class to show validation feedback
    });

    // Additional listener to trigger validation feedback on datepicker change
    $("#datepicker").change(function() {
        if (this.value) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtns = document.querySelectorAll('.read-more-btn');
  
    readMoreBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var moreText = this.previousElementSibling; // Assuming the hidden text is immediately before the button
        if (moreText.style.display === "none") {
          moreText.style.display = "inline";
          btn.textContent = "Read Less"; // Change the button text to "Read Less"
        } else {
          moreText.style.display = "none";
          btn.textContent = "Read More"; // Change the button text back to "Read More"
        }
      });
    });
  });
  
