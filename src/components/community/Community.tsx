import './Community.css'
import { CommunityItem as Item } from '../../types/types';
import { CommunityShoeDesign } from '../collections/design/ShoeDesign';
// Probably should rename CartItem given this use case this but I can't be bothered

export function Community() {
    const communityItemsString = localStorage.getItem("communityItems");
    let communityItems: Item[] = [];

    if (communityItemsString) {
        communityItems = JSON.parse(communityItemsString);
    }

    const displayItems = () => {
        if (communityItems.length === 0) {
            return <>
                <div className="community-no-items">
                    No designs have currently been shared! Be the first to share one with the community!
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
                        />
                    ))}
                </div>
            </>

        }
    }

    return <>
        <div className="community">
            <div className="community-header">
                <div className="community-header-text">Community Designs</div>
            </div>

            <div className="community-body">
                {displayItems()}
            </div>

        </div>
    </>

}
