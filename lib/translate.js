import translate from "google-translate-api-x";

export async function getTranslation(text, targetLang = "en") {
  if (!text) return "";
  
  try {
    const { text: translatedText } = await translate(text, { from: 'en', to: targetLang });
   
    return NextResponse.json({ translatedText }, { 
      status: 200, 
      headers: { "Access-Control-Allow-Origin": "*" } // Allow CORS
    });
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Return original text if translation fails
  }
}
 