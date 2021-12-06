import * as React from 'react';
import {
    transl,
    fallbackImg,
    customScroll
} from 'utils';

import PageContainer from 'components/pageContainer';
import Button from 'components/button';
import {
    VerticalTimeline,
    VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import first from 'images/first.png';
import third from 'images/third.png';
import fourth from 'images/fourth.png';
import fifth from 'images/fifth.png';
import sixth from 'images/sixth.png';
import seventh from 'images/seventh.png';
import eighth from 'images/eighth.png';
import tenth from 'images/tenth.png';
import windows from 'images/windows.png';
import macos from 'images/macos.png';
import linux from 'images/linux.png';

import exrates from 'images/exchanges/exrates.png';
import indodax from 'images/exchanges/indodax.png';
import next from 'images/exchanges/next.png';
import tradeogre from 'images/exchanges/tradeogre.png';
import livecoin from 'images/exchanges/livecoin.png';
import nusax from 'images/exchanges/nusax.png';
import bitalong from 'images/exchanges/bitalong.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
    public render() {
        return(
            <div className="home">
                <PageContainer className="first" middle>
                    <div className="col-sm-6 col-xs-12">
                        <h3 className="upper">{transl('first.one')}</h3>
                        <h1>{transl('first.two')}</h1>
                        <h3>{transl('first.three')}</h3>
                        <Button round uppercase onClick={() => customScroll(document.getElementById('features') as HTMLElement)}>{transl('first.four')}</Button>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={first} alt="Sumokoin" onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="second" id="features" center>
                    <div className="col-xs-12">
                        <h1>{transl('second.one')}</h1>
                        <h2>{transl('second.two')}</h2>
                    </div>
                </PageContainer>
                <PageContainer className="third" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={third} alt={transl('third.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('third.one')}</h1>
                        <h3 className="desc">{transl('third.two')} <span>{transl('third.three')}</span> {transl('third.four')} <span>{transl('third.five')}</span> {transl('third.six')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="fourth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('fourth.one')}</h1>
                        <h3 className="desc">{transl('fourth.two')} <span>{transl('fourth.three')}</span> {transl('fourth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={fourth} alt={transl('fourth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="fifth" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={fifth} alt={transl('fifth.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('fifth.one')}</h1>
                        <h3 className="desc">{transl('fifth.two')} <span>{transl('fifth.three')}</span> {transl('fifth.four')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="sixth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('sixth.one')}</h1>
                        <h3 className="desc">{transl('sixth.two')} <span>{transl('sixth.three')}</span> {transl('sixth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={sixth} alt={transl('sixth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="exchanges" id="exchanges" big>
                    <div className="col-sm-6 col-xs-12">
                        <ul>
                            <li>
                                <a target="_blank" href="https://indodax.com/market/SUMOBTC"><img src={indodax} alt={transl('exchanges.indodax')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://tradeogre.com/exchange/BTC-sumo"><img src={tradeogre} alt={transl('exchanges.tradeogre')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://exrates.me/dashboard"><img src={exrates} alt={transl('exchanges.exrates')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://next.exchange/"><img src={next} alt={transl('exchanges.next')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.livecoin.net"><img src={livecoin} alt={transl('exchanges.livecoin')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://nusax.co.id/"><img src={nusax} alt={transl('exchanges.nusax')} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://bitalong.com/trade/index/market/sumo_btc/"><img src={bitalong} alt={transl('exchanges.bitalong')} onError={e => fallbackImg(e)} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('exchanges.one')}</h1>
                        <h3 className="desc">{transl('exchanges.two')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="seventh" id="wallet" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={seventh} alt={transl('seventh.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('seventh.one')}</h1>
                        <h2 className="under">{transl('seventh.two')} v0.4.0</h2>
                        <small>Published on Jan 12, 2021</small>
                        <ul>
                            <li>
                                <img src={windows} alt="Windows" onError={e => fallbackImg(e)} />
                                <h2>Windows</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.4.0/SumoGUIWallet-v0.4.0-w64install.exe">64-bit Installer</a></h3>
                                <h3><a href="hhttps://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.4.0/SumoGUIWallet-v0.4.0-Win64.7z">64-bit Zip</a></h3>
                            </li>
                            <li>
                                <img src={macos} alt="MacOS" onError={e => fallbackImg(e)} />
                                <h2>macOSX</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.4.0/SumoGUIWallet-v0.4.0.dmg">64-bit</a></h3>
                            </li>
                            <li>
                                <img src={linux} alt="Linux" onError={e => fallbackImg(e)} />
                                <h2>Linux</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.4.0/SumoGUIWallet-v0.4.0-Linux-x64.tar.xz">64-bit (Ubuntu 18.04)</a></h3>
                            </li>
                        </ul>
                    </div>
                </PageContainer>
                <PageContainer className="eighth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('eighth.one')}</h1>
                        <h2 className="under">{transl('eighth.two')} v0.8.1.0 "Niigata"</h2>
                        <small>Published on July 21, 2021</small>
                        <ul>
                            <li>
                                <img src={windows} alt="Windows" onError={e => fallbackImg(e)} />
                                <h2>Windows</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.win.x64.v0-8-1-0.7z">64-bit</a></h3>
                            </li>
                            <li>
                                <img src={macos} alt="MacOS" onError={e => fallbackImg(e)} />
                                <h2>macOSX</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.mac.x64.v0-8-1-0.tar.xz">64-bit</a></h3>
                            </li>
                            <li>
                                <img src={linux} alt="Linux" onError={e => fallbackImg(e)} />
                                <h2>Linux</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.linux.x64.v0-8-1-0.tar.xz">64-bit (x86)</a></h3>
								<h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.linux.armv8.v0-8-1-0.tar.xz">64-bit (ARM 8)</a></h3>
								<h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.linux.riscv64.v0-8-1-0.tar.xz">64-bit (RISC)</a></h3>
								<h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.8.1.0/sumokoin.freebsd.x64.v0-8-1-0.tar.xz">64-bit (FreeBSD)</a></h3>
							</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={eighth} alt={transl('eighth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="ninth" id="whitepaper" center>
                    <div className="col-xs-12">
                        <h1>{transl('ninth.one')}</h1>
                        <h2>{transl('ninth.two')}</h2>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://cryptonote.org/whitepaper.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.three')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://downloads.getmonero.org/whitepaper_annotated.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.four')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://downloads.getmonero.org/whitepaper_review.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.five')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://lab.getmonero.org/"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.six')}</h3> </a>
                    </div>
                </PageContainer>
                <PageContainer className="tenth" id="development" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('tenth.one')}</h1>
                        <h3 className="desc">{transl('tenth.two')} <span>{transl('tenth.three')}</span> {transl('tenth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={tenth} alt={transl('tenth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="roadmap">
                    <VerticalTimeline animate={true} className="timeline">
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.first.date')}</h3>
                            <h4>{transl('timeline.first.version')}</h4>
                            <p>{transl('timeline.first.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.second.date')}</h3>
                            <h4>{transl('timeline.second.version')}</h4>
                            <p>{transl('timeline.second.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.third.date')}</h3>
                            <h4>{transl('timeline.third.version')}</h4>
                            <p>{transl('timeline.third.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.fourth.date')}</h3>
                            <h4>{transl('timeline.fourth.version')}</h4>
                            <p>{transl('timeline.fourth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.fifth.date')}</h3>
                            <h4>{transl('timeline.fifth.version')}</h4>
                            <p>{transl('timeline.fifth.desc')}</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </PageContainer>
            </div>
        );
    }
}

export default Home;