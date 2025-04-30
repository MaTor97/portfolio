import { useEffect, useState } from "react";

function isInWebView() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isIOSWebView = /iPhone|iPod|iPad/.test(ua) && !/Safari/.test(ua);
  const isAndroidWebView = ua.includes("wv") || (ua.includes("Android") && !ua.includes("Chrome"));
  const isLinkedInWebView = ua.includes("LinkedInApp");
  return isIOSWebView || isAndroidWebView || isLinkedInWebView;
}

export default function WebViewWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (isInWebView()) {
      setShowWarning(true);
    }
  }, []);

  if (!showWarning) return null;

  return (
    <div style={{
      background: "#ff7300",
      color: "white",
      padding: "10px",
      textAlign: "center",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 9999
    }}>
      Ce site est mieux affiché dans un navigateur.{" "}
      <a href={window.location.href} style={{ color: "white", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
        Ouvrir dans le navigateur
      </a>
    </div>
  );
}
