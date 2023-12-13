import style from './GuidePage.module.scss';
import Header from '../../Components/Header';


function GuidePage() {

    return (
        <>
            <Header />
            <div className={style.guideContainer}>
                <h2 className={style.guideTitle}>Snabbguide för köket</h2>
                <div className={style.guideList}>
                    <div className={style.guideCardWhite}>
                            <span className={style.guideText}>#00000 - Ordernummer</span>
                            <span className={style.guideText}>0:00 - Tiden som löpt sedan ordern kom in.</span>
                            <span className={style.guideText}>Tryck på knappen "Påbörja" för att visa att den tillagas.</span>
                            <span className={style.guideText}>När odern är redo att förpackas tryck på "KLAR" för att kassan ska kunna packa
                            resterande delar av ordern.</span>
                            <span className={style.guideText}>När ordern är redo att gå ut till kund, tryck på "KLAR"</span>
                            <span className={style.guideText}>Under orderhistorik finns möjligheten att söka upp tidigare ordrar vid behov.</span>
                    </div>
                    <div className={style.guideCardRed}>
                        <span className={style.guideText}>Rött kort indikerar att mer än 30 minuter har passerat sedan beställning
                        kommit in.</span>
                        <span className={style.guideText}>Lägg prio på dessa ordrar!</span>
                    </div>
                    <div className={style.guideCardYellow}>
                        <span className={style.guideText}>Gult kort indikerar att mer än 15 minuter har passerat sedan beställning
                        kommit in.</span>
                        <span className={style.guideText}>Lägg prio på dessa ordrar om inga röda finns!</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GuidePage;
