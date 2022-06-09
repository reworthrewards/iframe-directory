import { ReworthDirectory } from '@reworthrewards/reworth-directory';
import {useLocation} from "react-router-dom";

function App() {
  const search = useLocation().search;
  const hexRegex = /^[0-9A-F]{6}$/i;
  const accentColor = new URLSearchParams(search).get('accentColor');
  const accentColorValid = accentColor === null || accentColor === undefined ? undefined : hexRegex.test(accentColor);
  const fontFamily = new URLSearchParams(search).get('fontFamily');
  const lang = new URLSearchParams(search).get('lang');
  const env = new URLSearchParams(search).get('env');
  const geo = new URLSearchParams(search).get('geo');
  const gtm = new URLSearchParams(search).get('gtm');

  const isDev = window.location.origin === 'http://localhost:3000' || window.location.origin === 'http://localhost:3000' ? true : false;

  const availableEnvs = ['legacy', 'prod', 'dev', 'local'];

  const handleEnv = () => {
    let baseEnv = '';
    if(env) {
      availableEnvs.forEach((item) => {
        if(item === env) {
          baseEnv = item
        }
      })
      return baseEnv
    }
  }

  const handleDev = () => {
    if(env === null) {
      if(isDev === true) {
        return 'dev'
      }
    } else {
      return handleEnv()
    }
  }

  return (
    <ReworthDirectory
      accentColor={accentColorValid === true ? `#${accentColor}` : undefined}
      fontFamily={fontFamily === null || fontFamily === undefined || fontFamily === "undefined" ? undefined : fontFamily}
      lang={lang === null || lang === '' ? undefined : lang === 'ES' ? lang : lang === 'EN' ? lang : undefined} 
      env={handleDev()}
      geo={geo === null ? undefined : geo}
      gtm={gtm === 'true' ? true : false}
    />
  );
}

export default App;