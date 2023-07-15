import { ViewDesign } from "./ViewDesign"
import { useParams } from 'react-router';

export function ViewDesignCustom() {
    const { customId } = useParams<{ customId: string }>();
    return <>
        <ViewDesign customId={customId !== undefined ? parseInt(customId, 10) : 0}/>
    </>
}
