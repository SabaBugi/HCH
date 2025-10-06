document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); // animate once
      }
    });
  }, options);

  reveals.forEach(el => {
    observer.observe(el);
  });
});

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const showNotification = (message, isError = false) => {
    const note = document.getElementById("notification");
    note.textContent = message;
    note.classList.toggle("error", isError);
    note.classList.add("show");

    // Hide after 4 seconds
    setTimeout(() => {
      note.classList.remove("show");
    }, 4000);
  };

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showNotification("✅ თქვენი შეტყობინება წარმატებით გაიგზავნა!");
      form.reset();
    } else {
      showNotification("❌ შეტყობინების გაგზავნა ვერ მოხერხდა. გთხოვთ სცადოთ თავიდან.", true);
    }
  } catch (error) {
    showNotification("⚠️ ქსელის შეცდომა — გთხოვთ გადაამოწმოთ ინტერნეტკავშირი.", true);
  }
});
