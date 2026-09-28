const roles = [
    "Continuous Improvement Engineer",
    "Material Flow & Logistics Engineer",
    "Industrial Data Analyst",
    "Project Controls Engineer",
    "Manufacturing Process Engineer",
    "Supplier Quality & Technical Procurement Engineer"
];


const typingElement =
    document.getElementById("typing-text");
const roleToggle =
    document.getElementById("hero-role-toggle");

const reducedMotionPreference =
    window.matchMedia("(prefers-reduced-motion: reduce)");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
let roleTimer = null;
let animationPaused = false;

const typingSpeed = 55;
const deletingSpeed = 32;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 500;

function typeRole() {
    if (!typingElement) return;

    if (reducedMotionPreference.matches || animationPaused) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            roleTimer = window.setTimeout(() => {
                roleTimer = null;
                deleting = true;
                typeRole();
            }, pauseAfterTyping);
            return;
        }

        roleTimer = window.setTimeout(typeRole, typingSpeed);
        return;
    }

    typingElement.textContent = currentRole.substring(0, characterIndex - 1);
    characterIndex--;

    if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        roleTimer = window.setTimeout(typeRole, pauseAfterDeleting);
        return;
    }

    roleTimer = window.setTimeout(typeRole, deletingSpeed);
}

function handleReducedMotionChange(event) {
    if (!typingElement) return;

    window.clearTimeout(roleTimer);
    roleTimer = null;
    roleIndex = 0;
    characterIndex = 0;
    deleting = false;
    animationPaused = false;
    typingElement.textContent = roles[roleIndex];

    if (roleToggle) {
        roleToggle.disabled = event.matches;
        roleToggle.setAttribute("aria-pressed", "false");
        roleToggle.setAttribute("aria-label", event.matches
            ? "Job title animation disabled by reduced-motion setting"
            : "Pause job title animation");
        roleToggle.title = event.matches
            ? "Job title animation disabled by reduced-motion setting"
            : "Pause job title animation";
    }

    if (!event.matches) typeRole();
}

if (typingElement) {
    typingElement.textContent = reducedMotionPreference.matches ? roles[0] : "";
    if (roleToggle) {
        roleToggle.disabled = reducedMotionPreference.matches;
        roleToggle.setAttribute("aria-pressed", "false");
        if (!reducedMotionPreference.matches) roleToggle.disabled = false;
    }
    if (!reducedMotionPreference.matches) typeRole();
}

if (roleToggle) {
    roleToggle.addEventListener("click", () => {
        if (reducedMotionPreference.matches) return;

        animationPaused = !animationPaused;
        window.clearTimeout(roleTimer);
        roleTimer = null;
        roleToggle.setAttribute("aria-pressed", String(animationPaused));
        roleToggle.setAttribute("aria-label", animationPaused
            ? "Resume job title animation"
            : "Pause job title animation");
        roleToggle.title = animationPaused
            ? "Resume job title animation"
            : "Pause job title animation";

        if (!animationPaused) {
            if (!deleting && characterIndex === roles[roleIndex].length) {
                roleTimer = window.setTimeout(() => {
                    roleTimer = null;
                    deleting = true;
                    typeRole();
                }, pauseAfterTyping);
            } else {
                typeRole();
            }
        }
    });
}

if (typeof reducedMotionPreference.addEventListener === 'function') {
    reducedMotionPreference.addEventListener("change", handleReducedMotionChange);
} else {
    reducedMotionPreference.addListener(handleReducedMotionChange);
}

/* =========================================
   CURRICULUM DROPDOWN
========================================= */

const curriculumDropdown =
    document.querySelector(".curriculum-dropdown");

const curriculumButton =
    document.querySelector(".curriculum-button");


if (
    curriculumDropdown &&
    curriculumButton
) {

    curriculumButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                curriculumDropdown.classList.toggle(
                    "is-open"
                );


            curriculumButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (
                !curriculumDropdown.contains(
                    event.target
                )
            ) {

                curriculumDropdown.classList.remove(
                    "is-open"
                );


                curriculumButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                curriculumDropdown.classList.remove(
                    "is-open"
                );


                curriculumButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                curriculumButton.focus();

            }

        }
    );

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const mainNavigation =
    document.querySelector("#main-navigation");


if (
    mobileMenuButton &&
    mainNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                mainNavigation.classList.toggle(
                    "is-open"
                );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    mainNavigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mainNavigation.classList.remove(
                        "is-open"
                    );


                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        (event) => {

            if (
                !mainNavigation.contains(
                    event.target
                ) &&
                !mobileMenuButton.contains(
                    event.target
                )
            ) {

                mainNavigation.classList.remove(
                    "is-open"
                );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                mainNavigation.classList.remove(
                    "is-open"
                );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenuButton.focus();

            }

        }
    );

}
