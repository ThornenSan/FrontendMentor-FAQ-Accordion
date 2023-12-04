document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item, index) => {
    const accordionHeader = item.querySelector(".accordion-header");
    const plusIcon = item.querySelector(".fa-plus");
    const minusIcon = item.querySelector(".fa-minus");
    const content = item.querySelector(".accordion-content p");

    updateAccordionItem(item, content, plusIcon, minusIcon);

    accordionHeader.addEventListener("click", () => {
      toggleAccordion(item, content, plusIcon, minusIcon);
      removeActive(index);
    });

    accordionHeader.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAccordion(item, content, plusIcon, minusIcon);
        removeActive(index);
      }
    });

    // Make accordion header focusable
    accordionHeader.setAttribute("tabindex", "0");
  });

  function toggleAccordion(item, content, plusIcon, minusIcon) {
    item.classList.toggle("active");
    updateAccordionItem(item, content, plusIcon, minusIcon);
  }

  function updateAccordionItem(item, content, plusIcon, minusIcon) {
    if (item.classList.contains("active")) {
      content.style.display = "inline-block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline-block";
    } else {
      content.style.display = "none";
      plusIcon.style.display = "inline-block";
      minusIcon.style.display = "none";
    }
  }

  function removeActive(index1) {
    accordionItems.forEach((item2, index2) => {
      // Check if the current item is not the active one
      if (index1 !== index2) {
        // Remove the "active" class from the non-active item
        item2.classList.remove("active");

        // Hide the content of the non-active item
        const content = item2.querySelector(".accordion-content p");
        content.style.display = "none";

        // Reset the icon styles for the non-active item
        const plusIcon2 = item2.querySelector(".fa-plus");
        const minusIcon2 = item2.querySelector(".fa-minus");
        plusIcon2.style.display = "inline-block";
        minusIcon2.style.display = "none";
      }
    });
  }
});
