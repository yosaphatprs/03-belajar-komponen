import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({ person, size }: { person: any, size: number }) {
    return (
        <img
            className="avatar"
            src={getImageUrlV2(person, size < 90 ? 's' : 'b')}
            alt={person.name}
        />
    );
}

export default function MyProfile() {
    return (
        <MyAvatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}