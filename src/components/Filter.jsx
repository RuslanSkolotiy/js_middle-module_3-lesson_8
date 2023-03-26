const Filter = function ({ filter, onChange }) {
    const { order } = filter;
    function handleChange(event) {
        onChange({
            ...filter,
            sort: "created",
            order: event.target.value,
        });
    }
    return (
        <div className="filter">
            Сортировка по дате
            <select onChange={handleChange} value={order}>
                <option value="DESC">Сначала новые</option>
                <option value="ASC">Сначала старые</option>
            </select>
        </div>
    );
};

export default Filter;
