
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      //popup: { background: "#000" },
      popup: { background: "#e1e1e1" },
      button: { background: "#f1d600" }
    },
    theme: "classic",
    position: "bottom",
    type: "opt-in", // 需要用戶同意才啟用 cookies
    content: {
      message: "We use cookies to enhance user experience and collect anonymous usage statistics. These cookies will only be set if you provide your explicit consent.",
      dismiss: "Accept",
      deny: "Reject",
      link: "More Information",
      href: "/docs/PrivacyPolicy_Eng" // 隱私政策連結
    },
    onInitialise: function (status) {
      if (status === "allow") {
        enableTracking();
      }
    },
    onStatusChange: function (status) {
      if (status === "allow") {
        enableTracking();
      } else {
        disableTracking();
      }
    }
  });

  function enableTracking() {
    console.log("已啟用 Cookies");
    // 動態載入 Google Analytics（或其他追蹤工具）
    var script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Z1DF5K597H";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-Z1DF5K597H", { anonymize_ip: true });
  }

    function disableTracking() {
      console.log("Cookies 被禁用");
    
      // 刪除 Google Analytics 相關 cookies
      var cookies = ["_ga", "_gid", "_gat", "_ga_Z1DF5K597H"];
      cookies.forEach(function(cookie) {
        document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=rust.insect-totem.net";
      });
    }

});
