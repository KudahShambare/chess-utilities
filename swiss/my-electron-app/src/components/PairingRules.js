import SwissRoundTable from "./SwissRoundTable";

const PairingRules = () => {
    return <>
        <h2>Swiss Pairing Rules</h2>
        <p>The Swiss Pairing System is a non-eliminating tournament format that ensures players compete against opponents with similar scores throughout the event. It is commonly used in chess tournaments to determine a fair ranking in a limited number of rounds.</p>
        
        <h3>Basic Rules</h3>
        <ul>
            <li>Players do not get eliminated; all play a fixed number of rounds.</li>
            <li>Players are paired against opponents with similar scores.</li>
            <li>No two players meet more than once.</li>
            <li>Color balancing is maintained as much as possible (players alternate playing White and Black).</li>
            <li>Pairings aim to avoid players from the same team or federation meeting early in the tournament.</li>
        </ul>
        
        <h3>Pairing Process</h3>
        <ol>
            <li><strong>Initial Round:</strong> Players are sorted by rating and paired top half vs. bottom half.</li>
            <li><strong>Subsequent Rounds:</strong> Players are grouped by score and paired within the group.</li>
            <li><strong>Pairing Criteria:</strong>
                <ul>
                    <li>Highest score plays against the next highest in the group.</li>
                    <li>Color balance is prioritized.</li>
                    <li>Players do not play each other more than once.</li>
                </ul>
            </li>
            <li><strong>Bye Allocation:</strong> If there is an odd number of players, one player gets a bye (1 point, but does not play).</li>
        </ol>
        
        <h3>Special Considerations</h3>
        <ul>
            <li><strong>Tiebreaks:</strong> If players finish with the same score, tiebreak systems such as Buchholz, Sonneborn-Berger, or Direct Encounter may be used.</li>
            <li><strong>Unrated Players:</strong> Unrated players are usually placed at the bottom of the initial ranking and paired accordingly.</li>
        </ul>

        <SwissRoundTable />
        
    </>;
}

export default PairingRules;
