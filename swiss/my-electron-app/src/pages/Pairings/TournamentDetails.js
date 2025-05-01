
const TournamentDetails = ({ data }) => {
    console.log("tournamentDetails", data);
    
    if (!data) {
        return <div className="tournament-details">No tournament data available</div>;
    }

    return (
        <div className="tournament-details">
            <h2>Tournament Information</h2>
            
            <div className="details-grid">
                <div className="detail-item">
                    <span className="detail-label">Tournament Name:</span>
                    <span className="detail-value">{data.tournamentName || 'N/A'}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{data.location || 'N/A'}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Start Date:</span>
                    <span className="detail-value">{data.startDate || 'N/A'}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">End Date:</span>
                    <span className="detail-value">{data.endDate || 'N/A'}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Total Rounds:</span>
                    <span className="detail-value">{data.rounds || 'N/A'}</span>
                </div>
                
                <div className="detail-item">
                    <span className="detail-label">Time Control:</span>
                    <span className="detail-value">{data.timeControl || 'N/A'}</span>
                </div>
            </div>
        </div>
    );
};



export default TournamentDetails;