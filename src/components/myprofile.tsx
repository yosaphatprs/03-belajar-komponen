import { getImageUrl } from '@/utils/utils';

export default function MyProfile(props: any) {
    let person = props.person;
    return (
        <div>
            <section className="profile">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(person.imageId)}
                    alt={person.name}
                    width={person.width}
                    height={person.height}
                />
                <ul>
                    <li>
                        <b>Profesi: </b>
                        {person.profesi}
                    </li>
                    <li>
                        <b>Penghargaan: {person.penghargaan.jumlah} </b>
                        ( {person.penghargaan.nama} )
                    </li>
                    <li>
                        <b>Telah Menemukan: </b>
                        {person.penemuan}
                    </li>
                </ul>
            </section>
        </div>
    );
}