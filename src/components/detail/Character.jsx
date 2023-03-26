const Character = function ({ data }) {
    return (
        <>
            <h3>Character</h3>
            <article>
                <p>created: {data.created}</p>
                <p>gender: {data.gender}</p>
                <p>
                    image: <img src={data.image} height="100px"></img>
                </p>
                <p>name: {data.name}</p>
                <p>species: {data.species}</p>
                <p>status: {data.status}</p>
                <p>type: {data.type}</p>
            </article>
        </>
    );
};
export default Character;
