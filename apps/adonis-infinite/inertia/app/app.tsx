/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '@iflab/design-system/css/globals.css';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { TuyauProvider } from '@tuyau/inertia/react';
import { client } from '@iflab/rpc/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Fetch from "i18next-fetch-backend";
import ICU from 'i18next-icu';

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

i18n
  .use(Fetch)
  .use(ICU)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "../../resources/lang/{{lng}}/{{ns}}.json",
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {
    
    hydrateRoot(el, <I18nextProvider i18n={i18n} defaultNS={'translation'}><TuyauProvider client={client}>
      <App {...props} />
    </TuyauProvider>
    </I18nextProvider>)
  },
});