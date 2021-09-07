import './Definitions.css';

const Definitions = ({ word, category, meanings, lightMode }) => {
    console.log("logging", meanings[0], word, category);
    return (
        <div className="meanings">
            {meanings[0] && word && category === "en" && (
                <video
                    style={{ backgroundColor: "#fff", borderRadius: 10, height: "50px" }}
                    controls
                >
                    <source src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} type="audio/mpeg" />
                    {/* Your browser does not support the audio element. */}
                </video>
            )}

            {
                word === "" ? (<span className="subTitle">Start by typing a word in search</span>) : (
                    meanings.map((mean) =>
                        mean.meanings.map(item => (
                            item.definitions.map(def => (
                                <div className="singleMean" style={{ backgroundColor: lightMode ? '#3b5360' : 'white', color: lightMode ? 'white' : 'black' }} key={def.definition}>
                                    {console.log(def.definition)}
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: 'black', width: '100%' }} />
                                    {
                                        def.example && (
                                            <span>
                                                <b>Example : </b>
                                                {def.example}
                                            </span>
                                        )
                                    }
                                    {
                                        def.synonyms && (
                                            <span>
                                                <b>Synonyms : </b>
                                                {def.synonyms.map(s => `${s}, `)}
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )
                )
            }
        </div >
    )
}

export default Definitions;