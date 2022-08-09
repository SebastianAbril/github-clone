import './RepoContainer.css';

export const RepoContainer = ({name, fork, forkURL, description, languagesUsed, lastUpdate}) => {
    return(
        <div className="RepoContainer">
            <div clasasName="RepoContainer-info">
                <p className="repo-name">{name}</p>
                <p>{ fork && <p>Froked from {forkURL}</p>}</p>
                <p>{description}</p>
                <div className="repo-footer">
                    
                </div>
            </div>
            <div clasasName="RepoContainer-stadistics">
                <p>Estas son las estadisticas</p>
            </div>

        </div>
    )
}