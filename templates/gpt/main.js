$(document).ready(function () {
  let currentLanguage = "english";
  let currentTemplate = "day";

  // Date picker (dd-mm-yyyy)
  flatpickr("#meetingDate", {
    dateFormat: "d/m/Y", // Day-Month-Year
    altInput: true, // Show formatted input
    altFormat: "d/m/Y", // Alternative display format
    disableMobile: true,
  });

  // Time picker (hour:minute AM/PM)
  flatpickr("#meetingTime", {
    enableTime: true, // Enable time selection
    noCalendar: true, // Disable calendar
    dateFormat: "h:i K", // Hour:Minute AM/PM format
    time_24hr: false, // 12-hour time format
    altInput: true, // Show formatted input
    altFormat: "h:i K", // Alternative display format
    disableMobile: true,
  });

  // Function to update form fields based on current language
  function updateForm() {
    const form = contentData.form[currentLanguage];
    $("#label-host-name span").text(form.hostNameLabel);
    $("#label-host-addr span").text(form.hostAddrLabel);
    $("#label-trainer-name span").text(form.trainerNameLabel);
    $("#label-trainer-addr span").text(form.trainerAddrLabel);
    $("#form-title").text(form.formTitle);
    $("#generate-content").text(form.generateButton);
    $("#switch-lang").text(form.switchTo);

    // $("#hostName").attr("placeholder", form.hostNamePlaceholder);
    // $("#hostAddr").attr("placeholder", form.hostAddrPlaceholder);
    // $("#trainerName").attr("placeholder", form.trainerNamePlaceholder);
    // $("#trainerAddr").attr("placeholder", form.trainerAddrPlaceholder);

    // $("#meetingLink").attr("placeholder", form.linkTxt);
    $("#label-date span").text(form.dateTxt);
    $("#label-time span").text(form.timeTxt);
    $("#label-link span").text(form.linkTxt);
    const nightLabels = [
      form.nightLeader,
      form.nightPdf,
      form.nightProducts,
      form.nightQnA,
    ];

    nightLabels.forEach((labelText, index) => {
      $(`#person-${index + 1} .person-name label span`).text(labelText);
      $(`#person-${index + 1} .person-addr label span`).text(form.address);
    });
  }

  // Function to update content based on current language and template
  function updateContent() {
    const content = contentData.content[currentLanguage][currentTemplate];
    $("#content-output").text(content);
    $("#whatsapp-link").attr(
      "href",
      `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`
    );
  }

  // Show language selection card
  function showLanguageSelection() {
    const languageOptions = Object.keys(contentData.content)
      .map(
        (lang) =>
          `<button class="btn btn-outline-secondary" data-lang="${lang}">${lang}</button>`
      )
      .join("");
    $("#language-selection")
      .html(
        `
                <div class="card mt-4 shadow">
                    <div class="card-body">
                        <h5>Select Content Language</h5>
                        <div class="d-flex flex-wrap gap-2">
                            ${languageOptions}
                        </div>
                    </div>
                </div>
            `
      )
      .show();
  }

  // Handle language switch
  $("#switch-lang").on("click", function () {
    currentLanguage = currentLanguage === "english" ? "assamese" : "english";
    updateForm();
    updateContent();
    $("html, body").animate(
      {
        scrollTop: $("#generate-content").offset().top - 350,
      },
      300
    );
  });

  // Handle template selection
  $(".btn-check").on("change", function () {
    if ($(this).is("#day-btn")) {
      $("#night-btn").prop("checked", false);
      toggleInputFields(false);
      handleModeChange(false);
      currentTemplate = "day";
    } else if ($(this).is("#night-btn")) {
      $("#day-btn").prop("checked", false);
      toggleInputFields(true);
      handleModeChange(true);
      currentTemplate = "night";
    }
    updateContent();
  });

  function handleModeChange(isNightMode) {
    if (isNightMode) {
      $("#night-form").show();
      $("#step-form").hide();
      // showStep(currentStep); // Show the appropriate step for night mode
    } else {
      $("#night-form").hide();
      $("#step-form").show();
    }
  }

  function toggleInputFields(isNightMode) {
    if (isNightMode) {
      $("#dayForm").hide();
    } else {
      $("#dayForm").show();
    }
  }

  // Handle form submission
  $("#generate-content").on("click", function () {
    const date = $("#meetingDate").val();
    const time = $("#meetingTime").val();
    const meetLink = $("#meetingLink").val();
    // console.log(date);

    if (currentTemplate == "night") {
      // Collect data for multiple persons
      const personData = [];
      for (let i = 1; i <= 4; i++) {
        const name = $(`#person-${i} .person-name input`).val();
        const address = $(`#person-${i} .person-addr input`).val();
        if (name && address) {
          personData.push({ name, address });
        } else {
          // If any person data is missing, do not proceed
          $("#generated-content").hide();
          return;
        }
      }

      if (date && time && meetLink) {
        // const time12 = convertTo12HourFormat(time24);
        let contentTemplate =
          contentData.content[currentLanguage][currentTemplate];

        // Replace placeholders for each person
        personData.forEach((person, index) => {
          contentTemplate = contentTemplate
            .replace(`{person${index + 1}_name}`, `*${person.name}*`)
            .replace(`{person${index + 1}_address}`, `_${person.address}_`);
        });

        contentTemplate = contentTemplate
          .replace(/{time}/g, time)
          .replace(/{date}/g, date)
          .replace(/{meeting link}/g, meetLink);

        $("#content-output").text(contentTemplate);
        $("#whatsapp-link").attr(
          "href",
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            contentTemplate
          )}`
        );
        $("#generated-content").show();
        scrollToBottom();
      } else {
        $("#generated-content").hide();
      }
    } else {
      // Day mode: handle single person data
      const hostName = $("#hostName").val();
      const hostAddress = $("#hostAddr").val();
      const trainerName = $("#trainerName").val();
      const trainerAddress = $("#trainerAddr").val();

      if (
        hostName &&
        hostAddress &&
        trainerName &&
        trainerAddress &&
        date &&
        time &&
        meetLink
      ) {
        // const time12 = convertTo12HourFormat(time24);
        const contentTemplate =
          contentData.content[currentLanguage][currentTemplate];
        const content = contentTemplate
          .replace(/{host_name}/g, `*${hostName}*`)
          .replace(/{host_address}/g, `_${hostAddress}_`)
          .replace(/{trainer_name}/g, `*${trainerName}*`)
          .replace(/{trainer_address}/g, `_${trainerAddress}_`)
          .replace(/{time}/g, time)
          .replace(/{date}/g, date)
          .replace(/{meeting link}/g, meetLink);

        $("#content-output").text(content);
        $("#whatsapp-link").attr(
          "href",
          `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`
        );
        $("#generated-content").show();
        scrollToBottom();
      } else {
        $("#generated-content").hide();
      }
    }
  });

  // Copy content to clipboard
  // $("#copy-content").on("click", function () {
  //   const content = $("#content-output").text();
  //   navigator.clipboard.writeText(content).then(() => {
  //     alert("Content copied to clipboard!");
  //   });
  // });

  /**
   * Convert 24-hour time format to 12-hour time format.
   * @param {string} time24 - The time in 24-hour format (e.g., "14:30").
   * @returns {string} The time in 12-hour format with AM/PM (e.g., "2:30 PM").
   */
  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const minutesFormatted = minutes.toString().padStart(2, "0");
    return `${hours12}:${minutesFormatted} ${suffix}`;
  }

  function convertDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function scrollToBottom() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  }

  // Initialize the form and content on page load
  updateForm();
  updateContent();
  // $("#generated-content").show();
  // toggleInputFields(true);
  handleModeChange(false);
});
