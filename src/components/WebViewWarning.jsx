import { useEffect } from "react";

export default function WebViewWarning() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isWebView =
      /FBAN|FBAV|Instagram|Line|EdgA|LinkedInApp|wv|; wv/.test(ua) ||
      (ua.includes("Android") && !ua.includes("Chrome"));

    // Vérifie si la redirection a déjà eu lieu
    if (isWebView && !sessionStorage.getItem("redirected")) {
      alert("Ce site s'affiche mal dans cette application. Il va s'ouvrir dans votre navigateur.");
      sessionStorage.setItem("redirected", "true"); // Marque que la redirection a eu lieu
      window.location.href = "https://portfolio-matteo-tortora.netlify.app";
    }
  }, []);

  return null;
}
