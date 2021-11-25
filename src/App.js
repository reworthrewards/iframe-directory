import { ReworthDirectory } from '@reworthrewards/reworth-directory';
import {useLocation} from "react-router-dom";

function App() {

  const search = useLocation().search;
  const accentColor = new URLSearchParams(search).get('accentColor');
  const filters = new URLSearchParams(search).get('filters');
  const arrayFilter = filters === null || filters === '' ? undefined : filters.split(',');
  const lang = new URLSearchParams(search).get('lang');
  const layout = new URLSearchParams(search).get('layout');
  const showHeader = new URLSearchParams(search).get('showHeader');
  const showHeaderBool = showHeader === null || showHeader === '' ? undefined : showHeader === 'true' ? true : showHeader === 'false' ? false : undefined;

  return (
    <ReworthDirectory
      accentColor={accentColor === null || accentColor === '' ? undefined : `#${accentColor}`}
      lang={lang === null || lang === '' ? undefined : lang === 'ES' ? lang : lang === 'EN' ? lang : undefined} 
      filters={arrayFilter} 
      showHeader={showHeaderBool} 
      layout={layout === null || layout === '' ? undefined : layout} />
  );
}

export default App;
