import MyProfile from "@/components/myprofile";

const person = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    imageSize: 'b',
    width: 70,
    height: 70,
    profesi: "Fisikawan dan kimiawan",
    penghargaan: {
        jumlah: 4,
        nama: "Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci"
    },
    penemuan: "polonium (unsur kimia)"
};

const person2 = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    imageSize: 'b',
    width: 70,
    height: 70,
    profesi: "Ahli Geokimia",
    penghargaan: {
        jumlah: 2,
        nama: "Penghargaan Miyake Geokimia, Penghargaan Tanaka"
    },
    penemuan: "Sebuah metode untuk mengukur karbon dioksida pada air laut"
};

export default function MyGallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <MyProfile />
            <MyProfile />
            {/* <MyProfile person={person} /> */}
            {/* <MyProfile person={person2} /> */}
        </div>
    );
}