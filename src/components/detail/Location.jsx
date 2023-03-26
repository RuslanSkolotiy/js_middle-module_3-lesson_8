const Location = function ({ data }) {
    return (
        <>
            <h3>Location</h3>
            <article>
                <p>name: {data.name}</p>
                <p>created: {data.created}</p>
                <p>dimension: {data.dimension}</p>
                <p>type: {data.type}</p>
            </article>
        </>
    );
};
export default Location;
