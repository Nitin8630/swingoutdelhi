(function () {
  "use strict";
  var SOD = window.SOD || { classes: [], events: [], instagram: [], history: [], volunteer: [], rsvp: {} };
  var EMAIL = "swingoutdelhi@gmail.com";

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  /* ---- Year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.hidden = open;
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        menu.hidden = true;
      }
    });
  }

  /* ---- About dropdown ---- */
  var dd = document.querySelector(".nav__dd");
  if (dd) {
    var ddBtn = dd.querySelector(".nav__ddbtn");
    var ddMenu = dd.querySelector(".nav__ddmenu");
    var setDd = function (open) {
      ddMenu.classList.toggle("open", open);
      ddBtn.setAttribute("aria-expanded", String(open));
    };
    ddBtn.addEventListener("click", function () { setDd(!ddMenu.classList.contains("open")); });
    dd.addEventListener("mouseenter", function () { setDd(true); });
    dd.addEventListener("mouseleave", function () { setDd(false); });
    dd.addEventListener("focusout", function (e) { if (!dd.contains(e.relatedTarget)) setDd(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setDd(false); });
    document.addEventListener("click", function (e) { if (!dd.contains(e.target)) setDd(false); });
  }

  /* ---- Nav shadow on scroll ---- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Hero Video Playback Controller ---- */
  var heroVideo = document.getElementById("heroVideo");
  var heroVideoToggle = document.getElementById("heroVideoToggle");
  var heroVideoIcon = document.getElementById("heroVideoIcon");
  var heroVideoLabel = document.getElementById("heroVideoLabel");

  if (heroVideo && heroVideoToggle) {
    var updateVideoUI = function (isPlaying) {
      if (heroVideoIcon) heroVideoIcon.innerHTML = isPlaying ? "&#10074;&#10074;" : "&#9658;";
      if (heroVideoLabel) heroVideoLabel.textContent = isPlaying ? "Depot 48 Live &bull; Pause" : "Play Video";
      heroVideoToggle.setAttribute("aria-label", isPlaying ? "Pause background video" : "Play background video");
    };

    heroVideoToggle.addEventListener("click", function () {
      if (heroVideo.paused) {
        heroVideo.play().then(function () {
          updateVideoUI(true);
        }).catch(function () {
          updateVideoUI(false);
        });
      } else {
        heroVideo.pause();
        updateVideoUI(false);
      }
    });

    heroVideo.addEventListener("play", function () { updateVideoUI(true); });
    heroVideo.addEventListener("pause", function () { updateVideoUI(false); });

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroVideo.pause();
      updateVideoUI(false);
    }
  }

  /* ---- Render Classes Cards (#events) ---- */
  var eventsEl = document.getElementById("events");
  if (eventsEl && SOD.classes) {
    eventsEl.innerHTML = SOD.classes
      .map(function (c) {
        var highlightsHtml = "";
        if (c.highlights && c.highlights.length) {
          highlightsHtml =
            '<ul class="event__highlights">' +
            c.highlights
              .map(function (h) {
                return "<li>" + esc(h) + "</li>";
              })
              .join("") +
            "</ul>";
        }

        return (
          '<article class="event reveal" id="' + esc(c.id || "") + '">' +
            '<div class="event__top">' +
              '<h3 class="event__name">' + esc(c.name) + "</h3>" +
              '<div class="event__tags">' +
                (c.level ? '<span class="event__level">' + esc(c.level) + "</span>" : "") +
                (c.tag ? '<span class="event__tag">' + esc(c.tag) + "</span>" : "") +
              "</div>" +
            "</div>" +
            (c.blurb ? '<p class="event__blurb">' + esc(c.blurb) + "</p>" : "") +
            highlightsHtml +
            '<dl class="event__meta">' +
              (c.schedule ? '<div><dt>When</dt><dd>' + esc(c.schedule) + "</dd></div>" : "") +
              (c.venue ? '<div><dt>Where</dt><dd>' + esc(c.venue) + "</dd></div>" : "") +
              (c.duration ? '<div><dt>Length</dt><dd>' + esc(c.duration) + "</dd></div>" : "") +
            "</dl>" +
            '<div class="event__footer">' +
              (c.price ? '<span class="event__price">' + esc(c.price) + "</span>" : "<span></span>") +
              '<div class="event__cta">' +
                '<button type="button" class="btn btn--gold btn--sm" data-rsvp="class" data-rsvp-name="' + esc(c.name) + '">Register &rarr;</button>' +
              "</div>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ---- Render Upcoming Events & Socials (#upcomingEventsList) ---- */
  var upcomingList = document.getElementById("upcomingEventsList");
  if (upcomingList && SOD.events) {
    upcomingList.innerHTML = SOD.events
      .map(function (e) {
        var d = e.date || { month: "UPCOMING", day: "•", weekday: "" };
        return (
          '<article class="event-ticket reveal" id="' + esc(e.id || "") + '">' +
            '<div class="event-ticket__date">' +
              '<span class="event-ticket__month">' + esc(d.month) + "</span>" +
              '<span class="event-ticket__day">' + esc(d.day) + "</span>" +
              '<span class="event-ticket__weekday">' + esc(d.weekday) + "</span>" +
            "</div>" +
            '<div class="event-ticket__body">' +
              (e.tag ? '<span class="event-ticket__tag">' + esc(e.tag) + "</span>" : "") +
              '<h3 class="event-ticket__title">' + esc(e.title) + "</h3>" +
              (e.blurb ? '<p class="event-ticket__blurb">' + esc(e.blurb) + "</p>" : "") +
              '<div class="event-ticket__meta">' +
                (e.time ? '<div class="event-ticket__meta-item"><span class="event-ticket__meta-icon">⏰</span><span>' + esc(e.time) + "</span></div>" : "") +
                (e.venue ? '<div class="event-ticket__meta-item"><span class="event-ticket__meta-icon">📍</span><span>' + esc(e.venue) + "</span></div>" : "") +
              "</div>" +
              (e.note ? '<p class="event-ticket__note">' + esc(e.note) + "</p>" : "") +
              '<div class="event-ticket__foot">' +
                (e.cover ? '<span class="event-ticket__cover">' + esc(e.cover) + "</span>" : "<span></span>") +
                '<button type="button" class="btn btn--navy btn--sm" data-rsvp="event" data-rsvp-name="' + esc(e.title) + '">RSVP to Attend</button>' +
              "</div>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ---- Render Instagram Grid (#igGrid) ---- */
  var igGrid = document.getElementById("igGrid");
  if (igGrid && SOD.instagram) {
    var igSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ig-tile__icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';

    igGrid.innerHTML = SOD.instagram
      .map(function (tile) {
        var link = tile.permalink || "https://www.instagram.com/swingoutdelhi/";
        return (
          '<a class="ig-tile reveal" href="' + esc(link) + '" target="_blank" rel="noopener" aria-label="' + esc(tile.caption || "Swing Out Delhi on Instagram") + '">' +
            '<img src="' + esc(tile.img) + '" alt="Swing Out Delhi dance moment" loading="lazy" />' +
            '<div class="ig-tile__overlay">' +
              igSvg +
              (tile.caption ? '<p class="ig-tile__caption">' + esc(tile.caption) + "</p>" : "") +
              '<span class="ig-tile__action">View on Instagram &rarr;</span>' +
            "</div>" +
          "</a>"
        );
      })
      .join("");
  }

  /* ---- RSVP Modal & Google Sheets Registration Controller ---- */
  var modalBackdrop = document.getElementById("rsvpModalBackdrop");
  var modalCloseBtn = document.getElementById("rsvpCloseBtn");
  var rsvpForm = document.getElementById("rsvpForm");
  var rsvpSelect = document.getElementById("rsvpSelect");
  var rsvpSuccess = document.getElementById("rsvpSuccess");
  var rsvpDoneBtn = document.getElementById("rsvpDoneBtn");
  var rsvpError = document.getElementById("rsvpError");
  var rsvpSubmitBtn = document.getElementById("rsvpSubmitBtn");

  // Populate the select dropdown with Classes and Events
  var populateRsvpSelect = function (preselectName) {
    if (!rsvpSelect) return;
    var html = '<option value="">-- Choose an upcoming class or event --</option>';

    if (SOD.classes && SOD.classes.length) {
      html += '<optgroup label="Weekly Classes &amp; Programs">';
      SOD.classes.forEach(function (c) {
        var val = "Class: " + c.name;
        var sel = preselectName && (c.name === preselectName || val === preselectName) ? ' selected="selected"' : "";
        html += '<option value="' + esc(val) + '"' + sel + ">" + esc(c.name + (c.schedule ? " (" + c.schedule + ")" : "")) + "</option>";
      });
      html += "</optgroup>";
    }

    if (SOD.events && SOD.events.length) {
      html += '<optgroup label="Upcoming Socials &amp; Outings">';
      SOD.events.forEach(function (e) {
        var val = "Event: " + e.title;
        var sel = preselectName && (e.title === preselectName || val === preselectName) ? ' selected="selected"' : "";
        var dateStr = e.date ? e.date.day + " " + e.date.month : "";
        html += '<option value="' + esc(val) + '"' + sel + ">" + esc(e.title + (dateStr ? " (" + dateStr + ")" : "")) + "</option>";
      });
      html += "</optgroup>";
    }

    html += '<option value="Other / General Inquiry">Other / General Inquiry</option>';
    rsvpSelect.innerHTML = html;
  };

  var openRsvpModal = function (preselectName) {
    if (!modalBackdrop) return;
    populateRsvpSelect(preselectName);

    // Reset view state
    if (rsvpForm) {
      rsvpForm.style.display = "grid";
      if (rsvpError) rsvpError.classList.remove("visible");
    }
    if (rsvpSuccess) {
      rsvpSuccess.classList.remove("is-active");
    }
    if (rsvpSubmitBtn) {
      rsvpSubmitBtn.disabled = false;
      rsvpSubmitBtn.textContent = "Confirm Registration";
    }

    modalBackdrop.classList.add("is-active");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus name input after brief delay
    setTimeout(function () {
      var nameInput = document.getElementById("rsvpName");
      if (nameInput) nameInput.focus();
    }, 100);
  };

  var closeRsvpModal = function () {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("is-active");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Attach click listener for any RSVP trigger button
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-rsvp]");
    if (btn) {
      e.preventDefault();
      var preselectName = btn.getAttribute("data-rsvp-name") || "";
      openRsvpModal(preselectName);
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeRsvpModal);
  if (rsvpDoneBtn) rsvpDoneBtn.addEventListener("click", closeRsvpModal);

  // Close when clicking directly on backdrop
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop) {
        closeRsvpModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("is-active")) {
      closeRsvpModal();
    }
  });

  // Handle Form Submission
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (rsvpError) rsvpError.classList.remove("visible");

      var name = (document.getElementById("rsvpName") || {}).value || "";
      var email = (document.getElementById("rsvpEmail") || {}).value || "";
      var phone = (document.getElementById("rsvpPhone") || {}).value || "";
      var selectedItem = (rsvpSelect || {}).value || "";
      var notes = (document.getElementById("rsvpNotes") || {}).value || "";

      var roleEl = document.querySelector('input[name="danceRole"]:checked');
      var role = roleEl ? roleEl.value : "Unspecified";

      var partnerEl = document.querySelector('input[name="partnerStatus"]:checked');
      var partnerStatus = partnerEl ? partnerEl.value : "Solo";

      if (!name.trim() || !email.trim() || !phone.trim() || !selectedItem) {
        if (rsvpError) {
          rsvpError.textContent = "Please fill in all required fields (Name, Email, WhatsApp, and Class/Event).";
          rsvpError.classList.add("visible");
        }
        return;
      }

      var payload = {
        timestamp: new Date().toISOString(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        selectedItem: selectedItem,
        danceRole: role,
        partnerStatus: partnerStatus,
        notes: notes.trim(),
      };

      if (rsvpSubmitBtn) {
        rsvpSubmitBtn.disabled = true;
        rsvpSubmitBtn.textContent = "Saving your spot...";
      }

      var handleSuccess = function () {
        rsvpForm.style.display = "none";
        if (rsvpSuccess) {
          var detailsEl = document.getElementById("rsvpSuccessDetails");
          if (detailsEl) {
            detailsEl.textContent = "Registered: " + selectedItem + " for " + name;
          }
          rsvpSuccess.classList.add("is-active");
        }
        rsvpForm.reset();
      };

      // Check if Google Apps Script Web App URL is configured
      var scriptUrl = (SOD.rsvp && SOD.rsvp.googleScriptUrl) ? SOD.rsvp.googleScriptUrl.trim() : "";

      if (scriptUrl) {
        // Send asynchronously to Google Apps Script Web App
        fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then(function () {
            handleSuccess();
          })
          .catch(function (err) {
            console.warn("Google Sheet submission fallback:", err);
            handleSuccess();
          });
      } else {
        // Simulation mode with automatic email backup option
        setTimeout(function () {
          console.info("RSVP Recorded (Demo mode - configure Google Apps Script URL in data.js to store directly in Google Sheets):", payload);
          handleSuccess();
        }, 500);
      }
    });
  }

  /* ---- Render history timeline (history.html) ---- */
  var timeline = document.getElementById("timeline");
  if (timeline && SOD.history) {
    timeline.innerHTML = SOD.history
      .map(function (h) {
        return (
          '<article class="tl-item reveal">' +
            '<span class="tl-era">' + esc(h.era) + "</span>" +
            "<h3>" + esc(h.title) + "</h3>" +
            "<p>" + esc(h.text) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ---- Render volunteer list ---- */
  var volList = document.getElementById("volList");
  if (volList && SOD.volunteer) {
    volList.innerHTML = SOD.volunteer
      .map(function (v) {
        return '<li class="build__item reveal"><h3>' + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></li>";
      })
      .join("");
  }

  /* ---- Photo carousel (scroll-snap + accessible controls) ---- */
  var viewport = document.getElementById("carouselViewport");
  if (viewport) {
    var slides = Array.prototype.slice.call(viewport.children);
    var prev = document.getElementById("carPrev");
    var next = document.getElementById("carNext");
    var status = document.getElementById("carStatus");
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };

    var currentIndex = function () {
      var c = viewport.scrollLeft + viewport.clientWidth / 2;
      var best = 0, bestDist = Infinity;
      slides.forEach(function (s, i) {
        var mid = s.offsetLeft + s.offsetWidth / 2;
        var d = Math.abs(mid - c);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    };

    var goTo = function (i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      var s = slides[i];
      viewport.scrollTo({ left: s.offsetLeft - (viewport.clientWidth - s.offsetWidth) / 2, behavior: "smooth" });
    };

    var update = function () {
      var i = currentIndex();
      if (status) status.textContent = pad(i + 1) + " / " + pad(slides.length);
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= slides.length - 1;
    };

    if (prev) prev.addEventListener("click", function () { goTo(currentIndex() - 1); });
    if (next) next.addEventListener("click", function () { goTo(currentIndex() + 1); });

    var raf;
    viewport.addEventListener("scroll", function () {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(update);
    }, { passive: true });

    // Arrow-key support when the carousel has focus
    viewport.setAttribute("tabindex", "0");
    viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(currentIndex() - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); goTo(currentIndex() + 1); }
    });

    update();
  }

  /* ---- Scroll reveal ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var seen = function (el) { el.classList.add("in"); };
  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(seen);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { seen(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }
})();
