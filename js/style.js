// $(document).ready(function () {


//     $('.carousel').owlCarousel({

//         margin: 20,
//         loop: true,
//         navigation: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,

//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false,
//             },
//             600: {
//                 items: 2,
//                 nav: false,

//             },
//             1000: {
//                 items: 3,
//                 nav: false,
//             }
//         }

//     });


// });


$(document).ready(function () {
    $(".question").click(function () {
        var answer = $(this).next(".answer");
        answer.slideToggle();
        $(this).find(".plus-icon").text(function (i, text) {
            return text === '+' ? '-' : '+';
        });

        // Close other answers when opening a new one
        $(".answer").not(answer).slideUp();
        $(".question .plus-icon").not($(this).find(".plus-icon")).text('+');
    });
});

// ========================Privacy POlicy=========================//

const modalContainer = document.getElementById("modalContainer");
const privacyPolicyBtn = document.getElementById("privacyPolicyBtn");

let modalLoaded = false;

// ===============Function to load modal content from external file===========//

async function loadModalContent() {
    try {
        modalContainer.innerHTML = ""
        const response = await fetch('Privacy-Policy.html');
        const modalHTML = await response.text();
        modalContainer.innerHTML = modalHTML;
        modalLoaded = true;
    } catch (error) {
        console.error('Error loading modal content:', error);
    }
}

// ======================Open the modal when Privacy Policy heading is clicked====================//

privacyPolicyBtn.addEventListener("click", async function () {
    if (!modalLoaded) {
        await loadModalContent();
    }

    const modal = document.getElementById("myModal");
    const closeBtn = modal.querySelector(".close");

    modal.style.display = "block";

    // ===================Close the modal when the close button is clicked====================//

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalLoaded = false
    });

    // ==================Close the modal when clicking outside the modal===========//

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalLoaded = false
        }
    });
});

// =======================Terms & Condition==============================//

const termsConditionsBtn = document.getElementById("termsConditionsBtn");

// ==================Function to load Terms and Conditions modal content from external file=================//

async function loadTermsConditionsModalContent() {
    try {
        const response = await fetch('TermsConditions.html');
        const modalHTML = await response.text();
        modalContainer.innerHTML = modalHTML;
        modalLoaded = true;
    } catch (error) {
        console.error('Error loading modal content:', error);
    }
}

// ====================Open the modal when Terms and Conditions heading is clicked================//

termsConditionsBtn.addEventListener("click", async function () {
    if (!modalLoaded) {

        await loadTermsConditionsModalContent();
    }

    const modal = document.getElementById("myModal");
    const closeBtn = modal.querySelector(".close");

    modal.style.display = "block";

    // =========================Close the modal when the close button is clicked==================//

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalLoaded = false
    });

    // =====================Close the modal when clicking outside the modal=====================//

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalLoaded = false
        }
    });
});



$(document).ready(function() {
    
    $(window).scroll(function(){

        if(this.scrollY > 200){

            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }        

    });

});
