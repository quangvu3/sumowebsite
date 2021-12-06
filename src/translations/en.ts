export default {
    errors: {
        generic: 'There was an error, try again',
        invalid: 'Invalid address',
        minPayNot: 'Payout limit not reached',
        apiError: 'There was an API error, retry'
    },
    header: {
        one: 'Features',
        two: 'Wallet',
        three: 'Whitepaper',
        four: 'Development Path',
        five: 'Faucet',
        six: 'Exchanges'
    },
    first: {
        one: 'Digital Cash',
        two: 'Privacy Without Compromise.',
        three: 'Private • Untraceable • Decentralized • Fungible',
        four: 'Explore'
    },
    second: {
        one: 'Digital Cash For Highly-Confidential Transactions',
        two: 'Private • Untraceable • Decentralized • Fungible'
    },
    third: {
        one: 'Private',
        two: 'SUMOKOIN is created with a',
        three: 'high level of privacy',
        four: 'in mind, setting Ring',
        five: 'Confidential Transactions',
        six: '(RingCT) with minimum ringsize (mixin) of 12 to conceal sources/amounts transferred and make it high resistance to blockchain analysis'
    },
    fourth: {
        one: 'Untraceable',
        two: 'SUMOKOIN is untraceable; sending and receiving addresses are,',
        three: 'encrypted',
        four: 'transacted amounts are obfuscated by default. Transactions on the SUMOKOIN blockchain cannot be linked to a particular user or real-world identity.'
    },
    fifth: {
        one: 'Decentralized',
        two: `SUMOKOIN follows Satoshi Nakamoto's vision of decentralized, trustless cryptocurrency, i.e. a`,
        three: 'secure digital cash',
        four: 'operated by a network of users. Transactions are confirmed by distributed consensus, and then recorded on the blockchain immutably. Third-parties do not need to be trusted to keep your SUMOKOIN safe.'
    },
    sixth: {
        one: 'Fungible',
        two: 'SUMOKOIN is truly fungible, thanks to built-in privacy features. Just like cash, all SUMOKOIN are',
        three: 'equal, changeable.',
        four: 'It is extremely unlikely that coin will ever be blacklisted by any party due to its association in previous transactions.'
    },
    exchanges: {
        one: 'Exchanges',
        two: 'Sumokoin is listed on various exchanges, independent platforms where you can trade (buy and sell) your coins. Depending on the exchange, there is a wide variety of trading pairs, both with other cryptocurrencies (BTC, ETH, LTC, DOGE, etc) and with various fiat currencies (USD, EUR). This list is susceptible to evolve as Sumokoin gets progressively added to more exchanges.',
        cryptopia: 'Cryptopia',
        exrates: 'Exrates',
        indodax: 'Indodax',
        maple: 'Maple',
        next: 'Next',
        nusax: 'Nusax',
        livecoin: 'Livecoin',
        bitalong: 'Bitalong',
        tradeogre: 'Tradeogre'
    },
    seventh: {
        one: 'GUI Wallet',
        two: 'Current version:'
    },
    eighth: {
        one: 'Binaries',
        two: 'Current version:'
    },
    ninth: {
        one: 'Source Code - Whitepapers',
        two: 'For the bleeding edge (possibly unstable) features, just grab source code from our Github page and follow the guide to compile it.',
        three: 'Cryptonote Original Whitepaper',
        four: 'Annotated Whitepaper by MRL',
        five: 'Surae Noether Review',
        six: 'Other Publications & Whitepapers'
    },
    tenth: {
        one: 'Development Path',
        two: 'This is a development',
        three: 'roadmap',
        four: 'suggested by developers but can be changed to reflect (new) project targets and dev vision. Implementation timelines are not fixed and subjected to actual development resources.'
    },
    timeline: {
        first: {
            date: 'Q1 - March',
            version: 'Bulletproof',
            desc: 'Bulletproof implementation'
        },
        second: {
            date: 'Q1 - March',
            version: 'New PoW Algorithm',
            desc: 'Sumokoin will change its PoW algorithm and become ASIC resistant'
        },
        third: {
            date: 'Q2 - April/May',
            version: 'Web Wallet',
            desc: 'A Web based wallet will be developed'
        },
        fourth: {
            date: 'Q2 - April/May',
            version: 'New GUI Miner',
            desc: 'New GUI Miner compatible with the new PoW algorithm we will use'
        },
        fifth: {
            date: 'Q2 - May/June',
            version: 'New GUI Wallet',
            desc: 'The Wallet will be coded in pure C++, revmap in both UI and functionality (GUI and LITE will be in one UI).'
        },
        sixth: {
            date: 'End 2018',
            version: 'Online wallet + Bulletproof',
            desc: 'Web/online wallet, Bulletproof implementation and Micro-payment channel feasibility study'
        },
        seventh: {
            date: 'End 2018',
            version: 'Mobile wallets (Android, iOS)',
            desc: 'Mobile wallets for Android & iOS devices and  Micro-payment channel implementation'
        }
    },
    faucet: {
        login: {
            title: 'Faucet',
            placeholder: 'Insert here your Sumokoin Wallet Address',
            button: 'Continue',
            one: 'What is the Faucet?',
            two: 'In the Faucet you can earn Sumokoins by lending 50% of your CPU Power (like a web miner).',
            three: 'How do I start to earn free Sumo?',
            four: 'You just have to put your SumoKoin Address in the form above, and stay active on the next page.',
            five: 'In how much time I get paid?',
            six: 'We usually send payments to everyone every 4 hours when a minimum of 0.002 Sumo has been reached.',
            seven: 'Where can I see statistics about how much I earned?',
            eight: 'You have to insert your Address above and Statistics will appear.',
            loading: 'Loading...'
        },
        dashboard: {
            title: 'Dashboard',
            one: 'Everything works fine!',
            two: `There aren't problems, everything works fine and the SUMO will be sent to the following wallet address:`,
            balance: 'Balance',
            payout: 'Minimum for payout',
            loading: 'Loading...',
            executed: 'Executed',
            notExecuted: 'Not Executed',
            getPayed: 'Withdraw your SUMO',
            withdraw: 'Withdraw',
            success: 'Successfully withdrawn SUMO',
            error: 'Error withdrawn SUMO',
            logout: 'Logout'
        },
        loading: 'Loading...'
    },
    footer: {
        tools: {
            title: 'Tools',
            block: 'Block Explorer',
            wallet: 'Wallet Address Generator'
        },
        blog: {
            title: 'Blog',
            one: 'Sumokoin Dev Blog'
        },
        contacts: 'Contact Us',
        mining: {
            title: 'Mining Pools',
            one: 'Official Pool (Canada)',
            two: 'View full pool list'
        }
    }
}