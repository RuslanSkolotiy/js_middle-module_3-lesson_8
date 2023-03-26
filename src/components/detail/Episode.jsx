const Episode = function ({data}) {
    return (
        <>
            <h3>Episode</h3>
            <article>
                <p>name: {data.name}</p>
                <p>created: {data.created}</p>
                <p>air_date: {data.air_date}</p>
                <p>episode: {data.episode}</p>
            </article>
        </>
    );
}
export default Episode;