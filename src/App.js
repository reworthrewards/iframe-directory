import { ReworthDirectory } from '@reworthrewards/reworth-directory';
import {useLocation} from "react-router-dom";

function App() {

  const search = useLocation().search;
  const hexRegex = /^[0-9A-F]{6}$/i;
  const accentColor = new URLSearchParams(search).get('accentColor');
  const accentColorValid = accentColor === null || accentColor === undefined ? undefined : hexRegex.test(accentColor);
  const fontFamily = new URLSearchParams(search).get('fontFamily');
  const lang = new URLSearchParams(search).get('lang');

  console.log(lang)

  return (
    <ReworthDirectory
      accentColor={accentColorValid === true ? `#${accentColor}` : undefined}
      fontFamily={fontFamily === null || fontFamily === undefined || fontFamily === "undefined" ? undefined : fontFamily}
      lang={lang === null || lang === '' ? undefined : lang === 'ES' ? lang : lang === 'EN' ? lang : undefined} 
    />
  );
}

export default App;