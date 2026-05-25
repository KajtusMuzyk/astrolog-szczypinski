import {useState, type FormEvent} from "react";
import type {ObjectInfo} from "../App.tsx";
import defaultImage from "../assets/notfound.png";

interface DiscoveryFormProps {
    onAddObject: (newObjectInfo: ObjectInfo) => void;
}
export default function DiscoveryForm({ onAddObject }: DiscoveryFormProps) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [distance, setDistance] = useState('');
    const [image, setImage] = useState('');
    const isFormInvalid = name.trim() === '' || type.trim() === '' || distance.trim() === '';
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newDiscovery: ObjectInfo = {
            id: Date.now(),
            name,
            type,
            distance,
            image: image.trim() !== '' ? image : defaultImage
        }

        onAddObject(newDiscovery);

        setName('');
        setType('');
        setDistance('');
        setImage('');
    }
    return (
        <section className="discovery-form" style={{padding: '20px'}}>
            <h2>Rejestr Odkryć</h2>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px'}}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Nazwa anomalii:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{width:'100%', padding: '8px', borderRadius: '4px', border: '1px solid #555'}}/>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Typ obiektu:</label>
                    <input
                        type="text"
                        value={type}
                        placeholder="np. Egzoplaneta, Galaktyka"
                        onChange={(e) => setType(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Dystans:</label>
                    <input
                        type="text"
                        value={distance}
                        placeholder="np. 500 lat świetlnych"
                        onChange={(e) => setDistance(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Link do zdjęcia (opcjonalnie):</label>
                    <input
                        type="url"
                        value={image}
                        placeholder="https://..."
                        onChange={(e) => setImage(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
                    />
                </div>

                <button type="submit" disabled={isFormInvalid} style={{ padding: '10px', marginTop: '10px', backgroundColor: isFormInvalid ? '#555' : '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', cursor: isFormInvalid ? 'default' : 'pointer', fontWeight: 'bold' }}>
                    Zarejestruj Anomalię 🚀
                </button>
            </form>
        </section>
    )
}