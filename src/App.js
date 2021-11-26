import { ReworthDirectory } from '@reworthrewards/reworth-directory';
import {useLocation} from "react-router-dom";

function App() {

  const search = useLocation().search;
  const hexRegex = /^[0-9A-F]{6}$/i;
  const accentColor = new URLSearchParams(search).get('accentColor');
  const accentColorValid = accentColor === null || accentColor === undefined ? undefined : hexRegex.test(accentColor);
  const filters = new URLSearchParams(search).get('filters');
  const arrayFilter = filters === null || filters === '' ? undefined : filters.split(',');
  const lang = new URLSearchParams(search).get('lang');
  const layout = new URLSearchParams(search).get('layout');
  const showHeader = new URLSearchParams(search).get('showHeader');
  const showHeaderBool = showHeader === null || showHeader === '' ? undefined : showHeader === 'true' ? true : showHeader === 'false' ? false : undefined;

  return (
    <ReworthDirectory
      accentColor={accentColorValid === true ? `#${accentColor}` : undefined}
      lang={lang === null || lang === '' ? undefined : lang === 'ES' ? lang : lang === 'EN' ? lang : undefined} 
      filters={arrayFilter} 
      showHeader={showHeaderBool} 
      layout={layout === null || layout === '' ? undefined : layout} />
  );
}

export default App;
