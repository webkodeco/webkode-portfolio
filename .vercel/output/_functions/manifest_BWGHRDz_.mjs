import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_Jl2sTvfU.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DfP6RGJm.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/","cacheDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/node_modules/.astro/","outDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/dist/","srcDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/","publicDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/public/","buildClientDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/dist/client/","buildServerDir":"file:///Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/mailservice","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/MailService\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"MailService","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/MailService.js","pathname":"/api/MailService","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DlSjf1gd.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://webkode.co","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/MailService@_@js":"pages/api/mailservice.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BWGHRDz_.mjs","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BKaKY6dG.mjs","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Navbar":"_astro/Navbar.gUeL5f8d.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Hero":"_astro/Hero.DQ2sqLox.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/We":"_astro/We.BJ2_pEMj.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Services":"_astro/Services.DU7t8uCO.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Testimonies":"_astro/Testimonies.D1mJPeRc.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Footer":"_astro/Footer.C2tbFNpq.js","/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/ui/ScrollUpButton":"_astro/ScrollUpButton.Dj52u-bO.js","@astrojs/react/client.js":"_astro/client.BBKXMyYs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-latin-ext-500-normal.CK-6C4Hw.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-devanagari-500-normal.BIdkeU1p.woff2","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/poppins-latin-ext-800-normal.CDgOlX-1.woff2","/_astro/poppins-devanagari-600-normal.STEjXBNN.woff2","/_astro/poppins-latin-800-normal.Bd8-pIP1.woff2","/_astro/poppins-latin-ext-600-normal.CAhIAdZj.woff2","/_astro/poppins-devanagari-800-normal.ACzlZF75.woff2","/_astro/poppins-latin-ext-900-normal.DPEExWNF.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/poppins-devanagari-900-normal.DntvEK6c.woff2","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-500-normal.CgAe2rWW.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/poppins-devanagari-500-normal.DMPDjHtT.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/poppins-latin-ext-800-normal.CIZaRbSk.woff","/_astro/poppins-latin-ext-600-normal.Df5ffKXP.woff","/_astro/poppins-devanagari-600-normal.ClASKHrr.woff","/_astro/poppins-latin-ext-900-normal.CddlvElL.woff","/_astro/poppins-latin-800-normal.YoItoZZV.woff","/_astro/poppins-devanagari-800-normal.BLmXVokE.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-devanagari-900-normal.CcN7yKeD.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/index.DlSjf1gd.css","/Andres-ceballos.webp","/CarlosEscobar.webp","/Jose-sanchez.webp","/LINKDIN.webp","/Nataly.webp","/VictorPalacios.webp","/WEBKODE-SOLO-BLANCO.webp","/WEBKODEBLANCO.webp","/favicon.svg","/kevinmorelo.webp","/webkodeicon.svg","/_astro/Footer.C2tbFNpq.js","/_astro/Hero.DQ2sqLox.js","/_astro/Navbar.gUeL5f8d.js","/_astro/ScrollUpButton.Dj52u-bO.js","/_astro/Services.DU7t8uCO.js","/_astro/Testimonies.D1mJPeRc.js","/_astro/We.BJ2_pEMj.js","/_astro/client.BBKXMyYs.js","/_astro/index.DtoOFyvK.js","/_astro/index.qu8G_yDq.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/proxy.QRn0W1ao.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"5FiOL3S0QOJrBZKgEMdWkIYhHDWLvAP9aDHgKNnBsHs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
