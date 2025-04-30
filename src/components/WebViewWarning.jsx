import { useEffect } from "react";

export default function WebViewWarning() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isWebView =
      /FBAN|FBAV|Instagram|Line|EdgA|LinkedInApp|wv|; wv/.test(ua) ||
      (ua.includes("Android") && !ua.includes("Chrome"));

    if (isWebView) {
      alert("Ce site s'affiche mal dans cette application. Il va s'ouvrir dans votre navigateur.");
      window.location.href = "https://portfolio-matteo-tortora.netlify.app"; // Remplace par l'URL de ton site
    }
  }, []);

  return null;
}
