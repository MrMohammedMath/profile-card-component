
export interface ICard {
    cover: string;
    profile_img: string;
    name: string;
    friends_count: number;
    location: string;
    status: {
        followers: string;
        likes: string;
        photos: string;
    }

}
export function Card(props: { data: ICard }) {
    return (
        <article className="card">
            <img src={props.data.cover} alt="" className="card.cover" />
            <img src={props.data.profile_img} alt={props.data.name} className="card.profile-img" />

            <section>
                <h1 className="card.name">{props.data.name}</h1>
                <span className="card.friends-count">{props.data.friends_count}</span>
            </section>

            <h2 className="card.location">{props.data.location}</h2>

            <section className="card.status">
                <section className="card.status.item">
                    <p className="card.status.item.value">{props.data.status.followers}</p>
                    <h3 className="card.status.item.title">Followers</h3>
                </section>
                <section className="card.status.item">
                    <p className="card.status.item.value">{props.data.status.likes}</p>
                    <h3 className="card.status.item.title">Likes</h3>
                </section>
                <section className="card.status.item">
                    <p className="card.status.item.value">{props.data.status.photos}</p>
                    <h3 className="card.status.item.title">Photos</h3>
                </section>
            </section>
        </article>
    )
}