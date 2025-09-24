"use client";
import { ArrowLeft, Shield, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Wallets = () => {
  const [connecting, setConnecting] = useState<string | null>(null);
  const router = useRouter();

  const wallets = [
    {
      name: "MetaMask",
      category: "Mobile",
      logo: "https://assets.streamlinehq.com/image/private/w_100,h_100,ar_1/f_auto/v1/icons/4/metamask-icon-h78awpj8onqbljapxztu7.png/metamask-icon-0oc47ia2hoqlsp065oxwh.png?",
      users: "30M+",
    },
    {
      name: "Trust Wallet",
      category: "Mobile",
      logo: "https://trustwallet.com/assets/images/media/assets/TWT.png",
      users: "25M+",
    },
    {
      name: "WalletConnect",
      category: "Mobile",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png",
      users: "15M+",
    },
    {
      name: "Coinbase",
      category: "Mobile",
      logo: "https://polymarket-upload.s3.us-east-2.amazonaws.com/coinbase-1-finance-app-on-monday-Z783OdqxZco5.jpg",
      users: "3M+",
    },
    {
      name: "EXODUS",
      category: "Mobile",
      logo: "https://zengo.com/wp-content/uploads/Exodus_200x200@x2-150x150@2x.png",
      users: "2M+",
    },
    {
      name: "Rainbow",
      category: "Mobile",
      logo: "https://avatars.githubusercontent.com/u/48327834?s=100&v=100",
      users: "5M+",
    },
    {
      name: "Phantom",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/obRvW02OTYLzJuvic1ZbVDVXLXzI0Vt_JGOjlxZ92XMdBF_i3kqU92u9SgHvJ5pySdM",
      users: "15M+",
    },
    {
      name: "Argent",
      category: "Mobile",
      logo: "https://pbs.twimg.com/profile_images/1505867231804198913/3Hp74MkA_400x400.png",
      users: "2M+",
    },
    {
      name: "Alice",
      category: "Mobile",
      logo: "https://cdn-icons-png.flaticon.com/512/5167/5167008.png",
      users: "500K+",
    },
    {
      name: "eToro",
      category: "Mobile",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/04/etoro-logo.png",
      users: "50K+",
    },
    {
      name: "Bridge Wallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/sjG683ufdRoN5jpY-Ecx4hg5LrQSr7J2B5mqTHFbJZw2H4df5onayMkr7Jx7yCCncqhm=w100-h100-rw",
      users: "200K+",
    },
    {
      name: "BitPay",
      category: "Mobile",
      logo: "https://raw.githubusercontent.com/bitpay/bitpay-brand/master/avatar/bitpay-avatar-250.png",
      users: "10M+",
    },
    {
      name: "Crypto.com",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/1Sgbv5N9BOpHLdGDeFVlF56Y8NJqCrPVJwfZTz16s4TTpuLc2UdYedE_Hz4dZ-Ss7aA",
      users: "100M+",
    },
    {
      name: "Nash Wallet",
      category: "Mobile",
      logo: "https://www.yadawallets.com/wp-content/uploads/2020/12/Nash-wallet-logo.png",
      users: "100K+",
    },
    {
      name: "OKX",
      category: "Mobile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png",
      users: "50M+",
    },
    {
      name: "Alpha Wallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/abuYwfK2RF3ufMS3N5YtRojWj8E2AISpRSlUpuXaH0QUGf6qEA5h6jtxF9PD3OS0Lb8f=w100-h100-pc0xffffff-pd",
      users: "100K+",
    },
    {
      name: "Authereum",
      category: "Mobile",
      logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/l7korrfcmayuqdi0eejd",
      users: "50K+",
    },
    {
      name: "BitKeep",
      category: "Mobile",
      logo: "https://storage.googleapis.com/job-listing-logos/f1f109d9-f9fa-4d84-84eb-5c4c96a96673.PNG",
      users: "8M+",
    },
    {
      name: "AirGap",
      category: "Mobile",
      logo: "https://airgap.it/wp-content/uploads/2018/05/AirGap_Shield_Logo_newcolors.png",
      users: "200K+",
    },
    {
      name: "Atomic Wallet",
      category: "Mobile",
      logo: "https://atomicwallet.io/images/press-kit/atomic_wallet_logo_dark_rounded_2.png",
      users: "3M+",
    },
    {
      name: "Coin98",
      category: "Mobile",
      logo: "https://avatars.githubusercontent.com/u/82671669?s=280&v=4",
      users: "1M+",
    },
    {
      name: "Huobi Wallet",
      category: "Mobile",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/03/huobi-token-logo.webp",
      users: "5M+",
    },
    {
      name: "imToken",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/Ja-xk6ZTXzuGVvqfTRJahBBwJLFE-Dz8pEdyjfRM9jz87fDA_hdYDe3QM70EzyquDw",
      users: "12M+",
    },
    {
      name: "IOPAY",
      category: "Mobile",
      logo: "https://framer-sites.b-cdn.net/images/bwISsSnPXOzPe25hJiSKfLKSnrE.png?scale-down-to=300",
      users: "500K+",
    },
    {
      name: "MYKEY",
      category: "Mobile",
      logo: "https://pbs.twimg.com/profile_images/1096230700896800768/FoRudgpP_200x200.jpg",
      users: "100K+",
    },
    {
      name: "MathWallet",
      category: "Mobile",
      logo: "https://mathwallet.oss-cn-hangzhou.aliyuncs.com/image/math256.png",
      users: "2M+",
    },
    {
      name: "Infinito Wallet",
      category: "Mobile",
      logo: "https://walletscrutiny.com/images/wIcons/android/io.infinito.wallet.png",
      users: "500K+",
    },
    {
      name: "Ledger Live",
      category: "Mobile",
      logo: "https://www.aprofitableday.com/wp-content/uploads/2025/09/logo.png",
      users: "4M+",
    },
    {
      name: "Rabby",
      category: "Mobile",
      logo: "https://rabby.io/assets/logos/logo_twitter.png",
      users: "200K+",
    },
    {
      name: "Pillar",
      category: "Mobile",
      logo: "https://avatars.githubusercontent.com/u/32779549?s=280&v=4",
      users: "300K+",
    },
    {
      name: "Ownbit",
      category: "Mobile",
      logo: "https://ownbit.io/resource/brand-assets/images/origin/ownbit_logo_8.42d1edc86b.svg",
      users: "100K+",
    },
    {
      name: "Orange Wallet",
      category: "Mobile",
      logo: "https://img.cryptorank.io/coins/orange1706691928811.png",
      users: "50K+",
    },
    {
      name: "Wallet.io",
      category: "Mobile",
      logo: "https://cdn6.aptoide.com/imgs/f/d/8/fd89a7095dcc3d3d55a19b325021bd95_icon.png",
      users: "100K+",
    },
    {
      name: "SparkPoint Wallet",
      category: "Mobile",
      logo: "https://www.yadawallets.com/wp-content/uploads/2021/01/Sparkpoint-wallet-logo.png",
      users: "200K+",
    },
    {
      name: "Spatium",
      category: "Mobile",
      logo: "https://cas-img.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/06/09173058/logo-01-01.png",
      users: "50K+",
    },
    {
      name: "Binance Wallet",
      category: "Mobile",
      logo: "https://www.shutterstock.com/image-vector/bnb-binance-icon-sign-payment-600nw-2080319677.jpg",
      users: "20M+",
    },
    {
      name: "XRP Wallet",
      category: "Mobile",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.webp",
      users: "3M+",
    },
    {
      name: "Solana Wallet",
      category: "Mobile",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      users: "2M+",
    },
    {
      name: "ONTO Wallet",
      category: "Mobile",
      logo: "https://pbs.twimg.com/profile_images/1881590703379357696/j7VB2mTv_200x200.jpg",
      users: "1M+",
    },
    {
      name: "CoinCircle",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/UpRkH0Mq2Ylm4dTKdEXDs_7oOssOljSnRnH1vaUm2tKH9TemR3_ynG6DgNvo6QGMOTU",
      users: "100K+",
    },
    {
      name: "CoinGrig",
      category: "Mobile",
      logo: "https://walletscrutiny.com/images/wIcons/android/com.coingrig.png",
      users: "50K+",
    },
    {
      name: "TrustVault",
      category: "Mobile",
      logo: "https://www.cryptocompare.com/media/36798689/trustvault.png",
      users: "200K+",
    },
    {
      name: "Coinomi",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/yFBkqYSxBhWgBzTFrX1ynohOZ4VtRwu3f_IHHKkjJt8gHz0OQAw5-XkNH3eGaan9snar",
      users: "3M+",
    },
    {
      name: "TokenPocket",
      category: "Mobile",
      logo: "https://www.cryptocompare.com/media/35650325/token-pocket.png",
      users: "10M+",
    },
    {
      name: "Zelcore",
      category: "Mobile",
      logo: "https://www.yadawallets.com/wp-content/uploads/2021/01/ZelCore-wallet-logo.png",
      users: "1M+",
    },
    {
      name: "PolkaBridge Wallet",
      category: "Mobile",
      logo: "https://coin-images.coingecko.com/coins/images/13744/large/symbol-whitebg200x200.png?1696513488",
      users: "100K+",
    },
    {
      name: "CoolWallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/Fh6qQqnzTc1PctcLekAHWG2WqnzCFbAwGYEdA48rVdwAso5Ws4CCe54IUylGEb-F8I8",
      users: "500K+",
    },
    {
      name: "PeakDeFi Wallet",
      category: "Mobile",
      logo: "https://coin-images.coingecko.com/coins/images/9626/large/PEAKDEFI_Logo_250x250.png",
      users: "100K+",
    },
    {
      name: "Avalanche (AVAX) Wallet",
      category: "Mobile",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/03/Avalanche_logo_without_text.png",
      users: "2M+",
    },
    {
      name: "Tokenary",
      category: "Mobile",
      logo: "https://www.yadawallets.com/wp-content/uploads/2020/10/Tokenary-wallet-logo.png",
      users: "50K+",
    },
    {
      name: "Eidoo",
      category: "Mobile",
      logo: "https://cdn6.aptoide.com/imgs/f/0/4/f046b5a4997b6867bb92509abee7036d_icon.png",
      users: "1M+",
    },
    {
      name: "Grid Plus",
      category: "Mobile",
      logo: "https://avatars.githubusercontent.com/u/28931745?s=280&v=4",
      users: "100K+",
    },
    {
      name: "CoinEx",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/4bwCchtw-smim1ea5_HK5fAlDrw4P3HX-SrchF0EkBhk860VPVA48QBKmyE_M0XAD7CV",
      users: "200K+",
    },
    {
      name: "D’Cent Wallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/4GO-Bjl9nTDw_C2nrM4erEEl26IriD3AxzfLK6Qfp__0LfrxSUxF8MPH4WOgfL8G1g",
      users: "300K+",
    },
    {
      name: "AT.Wallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/kqvBnELvnVyPjaCqDMhcwWec67IVurqJL06AirMw1LZuPYcZLPnsyCZsHe3BVFPJoCAL",
      users: "50K+",
    },
    {
      name: "Midas Wallet",
      category: "Mobile",
      logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/c4/17/c4/c417c47c-4620-76a1-3f3d-3771bbccd934/source/512x512bb.jpg",
      users: "100K+",
    },
    {
      name: "JulSwap Wallet",
      category: "Mobile",
      logo: "https://s2.coinmarketcap.com/static/img/coins/200x200/8164.png",
      users: "50K+",
    },
    {
      name: "Vision Wallet",
      category: "Mobile",
      logo: "https://walletscrutiny.com/images/wIcons/iphone/com.visionsoftware.vision.jpg",
      users: "80K+",
    },
    {
      name: "Anybit Wallet",
      category: "Mobile",
      logo: "https://www.anybit.io/images/logo.svg",
      users: "100K+",
    },
    {
      name: "AToken",
      category: "Mobile",
      logo: "https://cdn6.aptoide.com/imgs/7/f/3/7f38b5aad31c6c2c7562506a6aa9c0fc_icon.png",
      users: "1M+",
    },
    {
      name: "Bitpie Wallet",
      category: "Mobile",
      logo: "https://cdn6.aptoide.com/imgs/e/8/5/e8570352728f9524148d395e9b9f39ed_icon.png",
      users: "500K+",
    },
    {
      name: "Avacus Wallet",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/C8aHTiCpRnWlM2QLKsKgo6cFjfM6rdSTeq0m-GAF56vZBquNvOcXd01pKYQdSW28vA",
      users: "100K+",
    },
    {
      name: "Arculus",
      category: "Mobile",
      logo: "https://play-lh.googleusercontent.com/rRggKiBkGc6YNrVZoUtSCeXAG8RxZuK7gP1H9TurnB2QojjHM7JJRkJr4H-1YR1DO0gl",
      users: "200K+",
    },
    {
      name: "Ambire Wallet",
      category: "Mobile",
      logo: "https://s2.coinmarketcap.com/static/img/coins/200x200/17722.png",
      users: "200K+",
    },
    {
      name: "BlockBank",
      category: "Mobile",
      logo: "https://walletscrutiny.com/images/wIcons/android/com.aibb.wallet.jpg",
      users: "150K+",
    },
    {
      name: "Celo Wallet",
      category: "Mobile",
      logo: "https://oss-us-cdn.maiziqianbao.net/Chain_logo/B71630481585.jpg",
      users: "500K+",
    },

  ];


  const handleConnect = (walletName: string) => {
    setConnecting(walletName);

    setTimeout(() => {
      setConnecting(null);
      alert(`✅ Successfully connected to ${walletName}`);
      router.push("/Import");
    }, 2000);
  };

  const categories = ["All Wallets", ...Array.from(new Set(wallets.map((w) => w.category)))];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-6 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Choose Your Wallet</h1>
            <p className="text-gray-400 text-sm">Scroll-Down and Connect with your supported wallets</p>
          </div>
        </div>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 text-center bg-gray-800 border border-gray-700 rounded-lg">
              <div className="text-3xl font-bold text-blue-500 mb-2">60+</div>
              <div className="text-gray-400">Supported Wallets</div>
            </div>
            <div className="p-6 text-center bg-gray-800 border border-gray-700 rounded-lg">
              <div className="text-3xl font-bold text-pink-400 mb-2">1000+</div>
              <div className="text-gray-400">DApps Connected</div>
            </div>
            <div className="p-6 text-center bg-gray-800 border border-gray-700 rounded-lg">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">Secure</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-700/80"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wallets.map((wallet) => {
              const isConnecting = connecting === wallet.name;

              return (
                <div
                  key={wallet.name}
                  className="p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-blue-500 transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={wallet.logo}
                        alt={wallet.name}
                        width={100}
                        height={100}
                        className="w-12 h-12 rounded-xl"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1">{wallet.name}</h3>
                      <div className="text-gray-400 text-sm">{wallet.category}</div>
                    </div>
                    <div className="text-sm text-gray-400">{wallet.users}</div>
                  </div>

                  <button
                    onClick={() => handleConnect(wallet.name)}
                    disabled={isConnecting}
                    className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 transition flex items-center justify-center gap-2"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      "Connect & Import"
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="p-8 bg-gray-800/20 border border-blue-500/20 rounded-lg text-center">
            <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallets;