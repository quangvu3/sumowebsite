export default {
    errors: {
        generic: 'There was an error, try again',
        invalid: 'Invalid address',
        minPayNot: 'Payout limit not reached',
        apiError: 'There was an API error, retry'
    },
    header: {
        one: 'Features',
        two: 'Wallets',
        three: 'Whitepaper',
        four: 'Development Path',
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
        six: '(RingCT) with minimum ringsize of 49 (48 mixings) to conceal sources/amounts transferred and make it high resistance to blockchain analysis'
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
        two: 'Sumokoin is listed on various exchanges, independent platforms where you can trade (buy and sell) your coins. Depending on the exchange, there is a wide variety of trading pairs, both with other cryptocurrencies (BTC, ETH, LTC, DOGE, etc) and with various fiat currencies (USD, EUR). This list is susceptible to evolve as Sumokoin gets progressively added to more exchanges.'
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
    eleventh: {
        one: 'OFFICIAL WEB WALLET',
        two: 'Web wallet link (Global)',
        three: 'Web wallet link (mainland China access)'
    },
    twelveth: {
        one: 'OFFICIAL ANDROID WALLET',
        two: 'Android wallet download Github link',
    },

    timeline: {
        first: {
            date: 'APRIL 2017',
            version: 'SUMOKOIN LAUNCH',
            desc: 'Sumokoin first release. Blockchain genesis'
        },
        second: {
            date: 'JULY 2017',
            version: 'Sumokoin GUI wallet',
            desc: 'Easy to use, full featured GUI Wallet, created in python'
        },
        third: {
            date: 'DECEMBER 2017',
            version: 'Subaddresses support',
            desc: 'Subaddress support for greater privacy/GUI wallet version released, supporting subaddresses (ghost addresses)'
        },
        fourth: {
            date: 'APRIL 2018',
            version: 'Daemon/Wallet SSL support',
            desc: 'Add SSL support for deamon/wallet connection'
        },
        fifth: {
            date: 'JUNE 2018',
            version: 'New robust difficulty algorithm',
            desc: 'Update of the difficulty algorithm to fence off 51%-timestamp manipulation attacks.'
        },
        sixth: {
            date: 'SEPTEMBER 2018',
            version: 'Multisignature wallet',
            desc: 'Implement support for multisignature/shared transactions'
        },
        seventh: {
            date: 'APRIL 2019',
            version: 'Enabling of bulletproos(v2) + Increasing Ringsize to 49',
            desc: 'Enabling of bulletproos(v2) that provide much smaller txs size at the same ringsize + Increasing the Ringsize to 49 for absolute resistance against privacy breaking tx traceability analysis attacks'
        },
        eighth: {
            date: 'JUNE 2019',
            version: 'Blockchain Pruning + Multisig Messaging System + TOR&I2P cli intergration',
            desc: 'Introducing blockchain pruning feature that decreases the size of the blockchain more than 1/3 of its original size + Multisig Messaging System that simplifies the creation of multisig txs between remote users as well as providing easy of use, absolute privacy and security on crucial info exchanged (like key sets) + TOR&I2P cli intergration '
        },
        ninth: {
            date: 'NOVEMBER 2019',
            version: 'Daemon RPC credit system + support syncing with pruned nodes + improve DDOS protection',
            desc: 'Users running an open node for remote wallet connections can now ask for credits for their services translated in mining hashes to their daemons  + daemons, pruned or not, can now optionally sync off pruned daemons + multiple DDOS protective measures to protect network and nodes stability'
        },
        tenth: {
            date: 'JANUARY 2020',
            version: 'Sumokoin Web Wallet',
            desc: 'Innovative, full featured, easy to use, private and secure Sumokoin Online Web Wallet'
        },
       eleventh: {
            date: 'FEBRUARY 2020',
            version: 'Sumokoin Android App Wallet',
            desc: 'Secure and private Sumokoin Android App Wallet'
        },
       twelveth: {
            date: 'JANUARY 2021',
            version: 'Compact Linkable Spontaneous Anonymous Group Signatures - CLSAGs',
            desc: 'New signature scheme decreasing transaction size by more than 25% - improve tx creation performance'
        },
       thirteenth: {
            date: 'FIRST QUARTER OF 2021',
            version: 'WSUMO feature',
            desc: 'Upcoming feature that will merge the best parts of two crypto worlds'
        },

    },
    footer: {
        tools: {
            title: 'Tools',
            block1: 'Blockchain Explorer',
            block2: 'Blockchain Explorer 2',
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