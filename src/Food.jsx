function Food() {

    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <ol>
            <li>Banana</li>
            <li>Fresa</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ol>
    );
}

export default Food