import './Aside.css';

export const Aside = (props) => {
    return (
        <aside className="Aside">
            <picture className="avatar-container">
                <img className="avatar" src={props.avatar_url} alt="Sebas" />
            </picture>
            <p className="user-name">{props.name}</p>
            <p className="user-login">{props.login}</p>
            <p className="bio">{props.bio}</p>
            <button className="edit-button">Edit Profile</button>
            <div className="follow-info">
                <label className="followers"><strong>{props.followers}</strong> followers</label>
                <label className="following"><strong>{props.following}</strong> following</label>
            </div>
            <label>{props.location}</label>
{/*             <div className="Achievements">
                <img src="" alt="pepe" />
                <img src="" alt="pepe" />
            </div> */}
        </aside>
    )
}