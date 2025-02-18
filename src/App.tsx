import './App.scss';
import './trackers';
import { RequireFeature, THEME, TonConnectUIProvider, SendTransactionFeature } from '@tonconnect/ui-react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TxForm } from './components/TxForm/TxForm';

const walletsRequiredFeatures: RequireFeature[] = [
    {
        name: 'SendTransaction',
        extraCurrencyRequired: true,
    },
];

// const walletsRequiredFeatures = (features: ModernFeature[]) => {
//     return features.find(feature => feature.name === 'SendTransaction' && "requiresExtraCurrency" in feature && feature.requiresExtraCurrency) !== undefined;
// }

function App() {
    return (
        <TonConnectUIProvider
            manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            walletsRequiredFeatures={walletsRequiredFeatures}
            walletsListConfiguration={{
              includeWallets: [
                {
                  appName: "tonkeeper_ec",
                  name: "Tonkeeper EC",
                  imageUrl: "https://tonkeeper.com/assets/tonconnect-icon.png",
                  tondns: "tonkeeper.ton",
                  aboutUrl: "https://tonkeeper.com",
                  deepLink: "tonkeeper-tc://",
                  universalLink: 'https://app.tonkeeper.com/ton-connect',
                  features: [
                      {
                          name: "SendTransaction",
                          maxMessages: 255,
                          extraCurrencySupported: true
                      }
                  ],
                  jsBridgeKey: 'tonkeeper',
                  platforms: ["chrome", "firefox"]
              },
              ]
            }}
            // primaryWalletAppName={'tonkeeper'}
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start',
            }}
        >
            <div className="app">
                <Header />
                <TxForm />
                {/*<TonProofDemo />*/}
                <Footer />
            </div>
        </TonConnectUIProvider>
    );
}

export default App;
