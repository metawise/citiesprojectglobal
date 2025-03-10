"use client";
import { useEffect } from "react";

export default function GoogleTranslateFix() {
  useEffect(() => {
    const selectBox = document.querySelector("select.goog-te-combo");

    if (selectBox) {
      selectBox.querySelectorAll("option").forEach(option => {
        const allowedValues = ["en", "fr", "es", "ru", "ar", "pt-PT"];
        if (!allowedValues.includes(option.value)) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
        }
      });
    }
  }, []);

  return null; // This component only modifies the DOM, no UI needed
}
