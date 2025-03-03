import './App.scss';
import './trackers';
import {
    RequireFeature,
    THEME,
    TonConnectUIProvider,
} from '@tonconnect/ui-react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TxForm } from './components/TxForm/TxForm';

const walletsRequiredFeatures: RequireFeature[] = [
    {
        name: 'SendTransaction',
        extraCurrencyRequired: true,
        // minMessages: 1,
    },
];

function App() {
    return (
        <TonConnectUIProvider
            manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            walletsRequiredFeatures={walletsRequiredFeatures}
            walletsListConfiguration={{
                includeWallets: [
                    {
                        appName: 'Tonkeeper',
                        name: 'Tonkeeper',
                        imageUrl:
                            'https://raw.githubusercontent.com/tonkeeper/tonkeeper-web/0f197474c57937787608697e794ef2b20a62f0d4/apps/twa/public/logo-128x128.png',
                        aboutUrl: 'https://9adbe24e.tonkeeper-web.pages.dev',
                        universalLink:
                            'https://9adbe24e.tonkeeper-web.pages.dev/ton-connect',
                        features: [
                            {
                                name: 'SendTransaction',
                                maxMessages: 255,
                                extraCurrencySupported: true,
                            },
                        ],
                        isSupportRequiredFeatures: true,
                        // deepLink: 'tonkeeper-tc://',

                        bridgeUrl: 'https://bridge.tonapi.io/bridge',
                        platforms: [
                            'ios',
                            'android',
                            'macos',
                            'windows',
                            'linux',
                        ],
                    },
                    {
                        appName: 'mytonwallet',
                        name: 'MyTonWallet',
                        imageUrl: 'https://static.mytonwallet.io/icon-256.png',
                        aboutUrl: 'https://mytonwallet.io',
                        universalLink: 'https://connect.mytonwallet.org',
                        features: [
                            {
                                name: 'SendTransaction',
                                maxMessages: 4,
                                extraCurrencySupported: true,
                            },
                        ],
                        isSupportRequiredFeatures: true,
                        bridgeUrl:
                            'https://tonconnectbridge.mytonwallet.org/bridge',
                        platforms: [
                            'chrome',
                            'windows',
                            'macos',
                            'linux',
                            'ios',
                            'android',
                            'firefox',
                        ],
                    },
                ],
            }}
        >
            <div className="app">
                <Header />
                <TxForm />
                <Footer />
                {/*<TonProofDemo />*/}
            </div>
        </TonConnectUIProvider>
    );
}

export default App;
