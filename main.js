const sections = ["dog_section", "bird_section", "cat_section", "turtle_section", "hamster_section", "rabbit_section"];

function toggleSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection) return; 

    const isAlreadyVisible = !selectedSection.classList.contains("hidden");
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add("hidden");
            section.classList.remove("block");
        }
    });

    if (!isAlreadyVisible) {
        selectedSection.classList.remove("hidden");
        selectedSection.classList.add("block");
    }
}

sections.forEach(sectionId => {
    const buttonId = sectionId.replace("_section", "");
    const button = document.getElementById(buttonId);
    
    if (button) {
        button.addEventListener("click", function () {
            toggleSection(sectionId);
        });
    }
});
