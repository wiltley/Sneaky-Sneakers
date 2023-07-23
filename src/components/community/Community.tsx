import './Community.css'
import { CommunityItem as Item } from '../../types/types';
import { CommunityShoeDesign } from '../collections/design/ShoeDesign';
import { t } from '../../utils/LanguageSelect'
// Probably should rename CartItem given this use case this but I can't be bothered

export function Community() {
    const lang = localStorage.getItem("lang");
    const communityItemsString = localStorage.getItem("communityItems");
    let communityItems: Item[] = [];

    if (communityItemsString) {
        communityItems = JSON.parse(communityItemsString);
    }

    const displayItems = () => {
        if (communityItems.length === 0) {
            return <>
                <div className="community-no-items">
                    {t(lang, "No designs have currently been shared! Be the first to share one with the community!", "Aucun design n'a été partagé pour le moment ! Soyez le premier à en partager un avec la communauté!")}
                </div>
            </>
        } else {
            return <>
                <div className="community-designs">
                    {communityItems.map((shoe, index) => (
                        <CommunityShoeDesign
                            key={index}
                            shoeId={shoe.shoeId}
                            shoeName={shoe.name != null ? shoe.name : ""}
                            shoePrice={shoe.price + "$"}
                            customId={index}
                            shoeImage={shoe?.image}
                        />
                    ))}
                </div>
            </>

        }
    }

    return <>
        <div className="community">
            <div className="community-header">
                <div className="community-header-text">{t(lang, "Community Designs", "Conceptions communautaires")}</div>
            </div>

            <div className="community-body">
                {displayItems()}
            </div>

        </div>
    </>

}
