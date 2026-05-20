import type {ObjectInfo} from "../App.tsx";

interface CatalogListProps {
    objects: ObjectInfo[];
    onSelectObject: (object: ObjectInfo) => void;
}
export default function CatalogList({objects, onSelectObject}: CatalogListProps) {
    return (
        <section className="catalog-list">
            <h2>Katalog obiektów</h2>
            <div className={"list-container"}>
                    {objects.map((obj) => (
                        <div key={obj.id}
                        className={"catalog-item"}
                        onClick={() => onSelectObject(obj)}
                        style={{display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        >
                        <img
                        src={obj.image}
                        alt={obj.name}
                        style={{width: '60px',height: '60px',objectFit: 'cover',borderRadius: '8px'
                        }}
                        />
                        <div className={"catalog-item-info"}>
                            <h3 style={{margin: 0,fontSize: '1.1rem'}}>{obj.name}</h3>
                        </div>
                        </div>
                        ))}
            </div>
        </section>
    )
}