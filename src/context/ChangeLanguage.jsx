import { createContext, useState } from "react";
import languages from "../translation/Languages";

 export const LanguageContext = createContext();

const ChangeLanguage = ({ children }) => {
  const [lang, setLang] = useState("uz");

  const lan = languages[lang]

  

  return (
    <LanguageContext.Provider value={{ lang, setLang , lan}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default ChangeLanguage;
