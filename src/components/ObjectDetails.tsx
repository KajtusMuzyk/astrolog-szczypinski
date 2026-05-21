import type {ObjectInfo} from "../App.tsx";

interface ObjectDetalisProps {
    object: ObjectInfo | null;
}
export default function ObjectDetails({object}: ObjectDetalisProps) {
    if(!object) {
        return(
            <section className="object-details" style={{ padding: '20px', color: '#888' }}>
                <h2>Panel Obserwacyjny</h2>
                <p>🛰️ Wybierz obiekt z katalogu po lewej stronie, aby rozpocząć analizę danych...</p>
            </section>
        )
    }

    return (
        <section className="object-details">
            <h2>Panel Obserwacyjny</h2>
                <div className={"card-details"} style={{ padding: '20px', borderRadius: '12px',height: '250px' }}>
                        <h3 style={{fontSize: '1.3rem',margin: '0 0 10px 0'}}>{object.name}</h3>
                        <p style={{ margin: '5px 0' }}>
                            <strong style={{fontSize: '0.8rem'}}>Typ obiektu:</strong> <span style={{ color: '#4a90e2', fontSize: '0.8rem' }}>{object.type}</span>
                        </p>

                        <p style={{ margin: '5px 0' }}>
                            <strong>Dystans od Ziemi:</strong> {object.distance}
                        </p>

                    <p style={{ margin: '15px 0 0 0', paddingTop: '15px', borderTop: '1px solid #222' }}>
                        <strong>Dokumentacja fotograficzna:</strong>{' '}
                        <a
                            href={object.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#4a90e2',
                                textDecoration: 'underline',
                                fontWeight: 'bold'
                            }}
                        >
                            Otwórz zewnętrzne źródło obrazu ↗
                        </a>
                    </p>
                </div>
        </section>
    )
}